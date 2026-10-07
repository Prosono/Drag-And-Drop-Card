export function roomFeature(a) {
  const { q, text, t, listen } = a;
  const pending = new Set();
  const ready = (id) => a.available(id) || (id?.startsWith('scene.') && a.entity(id)?.state === 'unknown');
  async function action(index) {
    const id = a.cfg['action_' + index];
    if (!ready(id) || pending.has(index)) return;
    const domain = id.split('.')[0];
    if (!['light', 'switch', 'scene', 'script', 'input_boolean'].includes(domain)) return;
    pending.add(index); a.refresh();
    await a.service(id, domain, ['scene', 'script'].includes(domain) ? 'turn_on' : 'toggle');
    pending.delete(index); a.refresh();
  }
  for (let index = 1; index <= 3; index++) listen(q('[data-action="' + index + '"]'), 'click', () => action(index));
  for (const key of ['temperature', 'humidity', 'co2', 'presence']) listen(q('[data-metric="' + key + '"]'), 'click', () => a.details(a.cfg[key]));
  return { render() {
    const configured = ['temperature', 'humidity', 'co2', 'presence', 'action_1', 'action_2', 'action_3'].some((key) => a.cfg[key]);
    q('[data-empty]').hidden = configured;
    for (const key of ['temperature', 'humidity', 'co2']) {
      const id = a.cfg[key], e = a.entity(id), value = a.available(id) ? a.numeric(e.state) : null;
      const node = q('[data-metric="' + key + '"]'); node.hidden = !id; node.disabled = !e;
      text('[data-' + key + '-label]', key === 'humidity' && a.card.lang === 'no' ? 'Fuktighet' : t(key));
      text('[data-' + key + '-value]', a.format(value, key === 'temperature' ? 1 : 0));
      text('[data-' + key + '-unit]', e?.attributes?.unit_of_measurement || '');
      node.title = a.friendly(id) + (value === null ? ' · ' + t('unavailable') : '');
    }
    const presence = a.cfg.presence;
    const occupied = a.available(presence) ? a.entity(presence).state === 'on' : null;
    const presenceNode = q('[data-metric="presence"]'); presenceNode.hidden = !presence; presenceNode.disabled = !a.entity(presence);
    text('[data-presence-label]', t('presence')); text('[data-presence-value]', t(occupied === null ? 'unavailable' : occupied ? 'occupied' : 'clear'));
    q('.room-scene').dataset.occupied = String(occupied === true);
    const active = [1, 2, 3].filter((i) => a.available(a.cfg['action_' + i]) && a.entity(a.cfg['action_' + i]).state === 'on').length;
    q('.room-scene').dataset.lit = String(active > 0);
    text('[data-room-caption]', t('roomCaption')); text('[data-actions-label]', t('actions'));
    q('.room-actions').hidden = ![1, 2, 3].some((i) => a.cfg['action_' + i]);
    for (let index = 1; index <= 3; index++) {
      const id = a.cfg['action_' + index], e = a.entity(id), button = q('[data-action="' + index + '"]');
      const domain = id?.split('.')[0], momentary = ['scene', 'script'].includes(domain);
      const on = a.available(id) && e.state === 'on';
      button.hidden = !id; button.disabled = pending.has(index) || !ready(id);
      button.dataset.on = String(on);
      if (momentary) button.removeAttribute('aria-pressed'); else button.setAttribute('aria-pressed', String(on));
      text('[data-action-name="' + index + '"]', a.cfg['action_' + index + '_label'] || a.friendly(id));
      text('[data-action-state="' + index + '"]', pending.has(index) ? t('sending') : !ready(id) ? t('unavailable') : momentary ? t('activate') : t(on ? 'on' : 'off'));
    }
  } };
}
