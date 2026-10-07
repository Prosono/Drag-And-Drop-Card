export function saunaFeature(a, model) {
  const { q, text, t, listen } = a;
  let timer, logoSource, backgroundSource, reported = new Set();
  const background = q('[data-background]'), defaultImage = background.getAttribute('src'), logo = q('[data-logo]');
  function warnOnce(key, message) { if (!reported.has(key)) { reported.add(key); a.notify(message, true); } }
  listen(logo, 'load', () => { logo.hidden = false; q('[data-brand-symbol]').hidden = true; });
  listen(logo, 'error', () => { logo.hidden = true; q('[data-brand-symbol]').hidden = false; warnOnce('logo:' + logoSource, t('logoError')); });
  listen(background, 'error', () => { if (background.getAttribute('src') !== defaultImage) { background.src = defaultImage; warnOnce('background:' + backgroundSource, t('backgroundError')); } else background.hidden = true; });
  for (const [selector, key] of [['[data-temperature-button]', 'temperature_entity'], ['[data-extra="1"]', 'extra_1_entity'], ['[data-extra="2"]', 'extra_2_entity']]) listen(q(selector), 'click', () => a.details(a.cfg[key]));
  function time() {
    clearTimeout(timer);
    const locale = a.card.lang === 'no' ? 'nb-NO' : 'en-GB';
    let zone;
    for (const candidate of [a.cfg.timezone, a.hass.config?.time_zone]) {
      if (!candidate) continue;
      try { new Intl.DateTimeFormat(locale, { timeZone: candidate }).format(); zone = candidate; break; }
      catch { if (candidate === a.cfg.timezone) warnOnce('zone:' + candidate, t('zoneError')); }
    }
    const now = new Date(), options = zone ? { timeZone: zone } : {};
    const date = new Intl.DateTimeFormat(locale, { ...options, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(now);
    const clock = new Intl.DateTimeFormat(locale, { ...options, hour: '2-digit', minute: '2-digit', ...(a.cfg.show_seconds ? { second: '2-digit' } : {}), hourCycle: 'h23' }).format(now);
    text('[data-date]', date); text('[data-clock]', clock);
    q('[data-clock]').dateTime = now.toISOString(); q('[data-date]').dateTime = now.toISOString();
    q('[data-datetime]').setAttribute('aria-label', t('dateTime'));
    const updated = a.entity(a.cfg.temperature_entity)?.last_updated;
    const stamp = updated ? new Date(updated) : null;
    text('[data-updated]', stamp && !isNaN(stamp) && a.available(a.cfg.temperature_entity) ? t('updated') + ' ' + new Intl.DateTimeFormat(locale, { ...options, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(stamp) : '');
    if (!document.hidden && a.visible) { const interval = a.cfg.show_seconds ? 1000 : 60000; timer = setTimeout(() => a.schedule(), interval - Date.now() % interval + 30); }
  }
  return {
    destroy() { clearTimeout(timer); },
    render() {
      const cfg = a.cfg, values = model(cfg, a.hass.states, location.href, a.hass.config?.unit_system?.temperature || '');
      q('[data-empty]').hidden = true;
      for (const [css, key] of [['--paper', 'surface'], ['--ink', 'ink']]) a.card.style.setProperty(css, cfg[key]);
      a.card.style.setProperty('--photo-strength', cfg.photo_strength / 100);
      a.card.style.setProperty('--photo-position', cfg.background_position + '%');
      a.card.style.setProperty('--logo-height', cfg.logo_height + 'px');
      text('[data-welcome]', t('welcome') + (values.name ? ',' : '.'));
      text('[data-guest]', values.name); q('[data-guest]').hidden = !values.name;
      text('[data-subtitle]', cfg.subtitle); q('[data-subtitle]').hidden = !cfg.subtitle;
      text('[data-temperature-label]', t('temperature'));
      text('[data-temperature]', a.format(values.temperature.value, 1)); text('[data-temperature-unit]', values.temperature.unit);
      q('[data-temperature-button]').disabled = !a.entity(cfg.temperature_entity);
      text('[data-measurement-state]', values.temperature.available ? '' : cfg.temperature_entity ? t('unavailable') : t('noReading'));
      for (const n of [1, 2]) {
        const node = q('[data-extra="' + n + '"]'), reading = values['extra' + n];
        node.hidden = !cfg['extra_' + n + '_entity']; node.disabled = !a.entity(cfg['extra_' + n + '_entity']);
        text('[data-extra-label="' + n + '"]', cfg['extra_' + n + '_label'] || a.friendly(cfg['extra_' + n + '_entity']));
        text('[data-extra-value="' + n + '"]', reading.value === null ? '—' : typeof reading.value === 'number' ? a.format(reading.value, 1) : ['on', 'off'].includes(reading.value) ? t(reading.value) : reading.value);
        text('[data-extra-unit="' + n + '"]', reading.unit);
        node.title = reading.available ? a.friendly(cfg['extra_' + n + '_entity']) : t('unavailable');
      }
      q('[data-configure]').hidden = !!cfg.temperature_entity;
      text('[data-connect]', cfg.temperature_entity ? '' : t('connect'));
      if (logoSource !== values.logo) {
        logoSource = values.logo; logo.hidden = true; q('[data-brand-symbol]').hidden = false;
        if (values.logo) { logo.alt = cfg.title || t('sauna'); logo.src = values.logo; } else logo.removeAttribute('src');
      }
      logo.alt = cfg.title || t('sauna');
      if (backgroundSource !== values.background) { backgroundSource = values.background; background.hidden = false; background.src = values.background || defaultImage; }
      if (values.logo === null || values.background === null) warnOnce('url:' + cfg.logo_url + cfg.background_url, t('urlError'));
      time();
    },
  };
}
