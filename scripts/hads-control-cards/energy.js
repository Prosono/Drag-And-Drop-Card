// Signed values use W internally: grid > 0 imports, battery > 0 discharges.
export function energyReadings(cfg, states) {
  function read(key) {
    const id = cfg[key], e = states?.[id];
    if (!id) return { value: null, status: 'notConfigured' };
    if (!e || e.state == null || String(e.state).trim() === '' || ['unknown', 'unavailable'].includes(e.state)) return { value: null, status: 'unavailable' };
    const value = Number(String(e.state).replace(',', '.'));
    const scale = new Map([['W', 1], ['kW', 1000], ['MW', 1000000]]).get(String(e.attributes?.unit_of_measurement || '').trim());
    if (!scale) return { value: null, status: 'invalidUnit' };
    if (!Number.isFinite(value)) return { value: null, status: 'unavailable' };
    if (['solar', 'home', 'ev'].includes(key) && value < 0) return { value: null, status: 'negativePower' };
    return { value: value * scale, status: 'measured' };
  }
  const result = Object.fromEntries(['solar', 'grid', 'battery', 'home', 'ev'].map((key) => [key, read(key)]));
  if (result.grid.value !== null && cfg.grid_direction === 'export') result.grid.value *= -1;
  if (result.battery.value !== null && cfg.battery_direction === 'charge') result.battery.value *= -1;
  if (!cfg.home) {
    const keys = ['solar', 'grid', 'battery'].filter((key) => cfg[key]);
    // Missing configured sensors propagate; unconfigured sources are explicitly excluded.
    const sum = keys.reduce((total, key) => total + (result[key].value ?? 0), 0);
    result.home = !keys.length || keys.some((key) => result[key].value === null) ? { value: null, status: 'incomplete' } : sum < 0 ? { value: null, status: 'unbalanced' } : { value: sum, status: 'calculated' };
  }
  return result;
}

export function energyFeature(a, model) {
  const { q, text, t, listen } = a;
  for (const key of ['solar', 'grid', 'battery', 'home', 'ev']) listen(q('[data-energy="' + key + '"]'), 'click', () => a.details(a.cfg[key]));
  function power(value) {
    if (value === null) return ['—', ''];
    const n = Math.abs(value); return n >= 1000 ? [a.format(n / 1000, 2), 'kW'] : [a.format(n), 'W'];
  }
  return { render() {
    const values = model(a.cfg, a.hass.states);
    q('[data-empty]').hidden = ['solar', 'grid', 'battery', 'home', 'ev'].some((key) => a.cfg[key]);
    for (const key of ['solar', 'grid', 'battery', 'home', 'ev']) {
      const reading = values[key], node = q('[data-energy="' + key + '"]'), [number, unit] = power(reading.value);
      node.hidden = key !== 'home' && !a.cfg[key]; node.disabled = !a.entity(a.cfg[key]);
      node.dataset.known = String(reading.value !== null);
      text('[data-' + key + '-name]', t(key)); text('[data-' + key + '-number]', number); text('[data-' + key + '-unit]', unit);
      let status = reading.status;
      if (reading.value !== null) status = key === 'grid' ? reading.value > 0 ? 'importing' : reading.value < 0 ? 'exporting' : 'idle' : key === 'battery' ? reading.value > 0 ? 'discharging' : reading.value < 0 ? 'charging' : 'idle' : key === 'ev' ? 'includedHome' : reading.status;
      text('[data-' + key + '-status]', t(status));
      node.title = a.friendly(a.cfg[key]) + ' · ' + t(status);
      const edge = q('[data-flow="' + key + '"]');
      if (edge) {
        edge.hidden = !a.cfg[key]; edge.dataset.active = String(reading.value !== null && Math.abs(reading.value) > 0);
        edge.dataset.reverse = String(key === 'ev' || (reading.value !== null && reading.value < 0));
      }
    }
    const soc = a.available(a.cfg.soc) ? a.numeric(a.entity(a.cfg.soc).state) : null;
    const validSoc = soc !== null && soc >= 0 && soc <= 100 && a.entity(a.cfg.soc)?.attributes?.unit_of_measurement === '%';
    q('[data-soc]').hidden = !a.cfg.battery || !a.cfg.soc;
    text('[data-soc]', t('chargeLevel') + ' ' + (validSoc ? a.format(soc) + '%' : '—'));
    text('[data-energy-note]', t(values.home.status === 'calculated' ? 'calculatedNote' : values.home.status === 'unbalanced' ? 'unbalancedNote' : 'energyNote'));
    q('.energy-map').dataset.ev = String(!!a.cfg.ev);
    // Connect the actual node edges in every layout, including small circles.
    const bounds = q('.energy-map').getBoundingClientRect();
    if (bounds.width && bounds.height && a.cfg.style !== 'ledger') {
      const svg = q('.energy-flow'), home = q('[data-energy="home"]').getBoundingClientRect();
      svg.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
      for (const key of ['solar', 'grid', 'battery', 'ev']) {
        const edge = q('[data-flow="' + key + '"]'); if (edge.hidden) continue;
        const source = q('[data-energy="' + key + '"]').getBoundingClientRect();
        const middleX = (r) => (r.left + r.right) / 2 - bounds.left;
        const middleY = (r) => (r.top + r.bottom) / 2 - bounds.top;
        const d = key === 'solar' ? `M${middleX(source)} ${source.bottom - bounds.top}L${middleX(home)} ${home.top - bounds.top}`
          : key === 'ev' ? `M${middleX(source)} ${source.top - bounds.top}L${middleX(home)} ${home.bottom - bounds.top}`
          : key === 'grid' ? `M${source.right - bounds.left} ${middleY(source)}L${home.left - bounds.left} ${middleY(home)}`
          : `M${source.left - bounds.left} ${middleY(source)}L${home.right - bounds.left} ${middleY(home)}`;
        edge.querySelectorAll('path').forEach((path) => path.setAttribute('d', d));
      }
    }
  } };
}
