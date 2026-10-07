// Embedded in each exported HTML card. No runtime imports or external libraries.
export function startCard(env, definition, factory) {
  const { root, host, ddc } = env;
  const card = root.querySelector('[data-hads-card]');
  if (!card) return;
  const copy = {
    no: { settings: 'Innstillinger', close: 'Lukk', save: 'Lagre', cancel: 'Avbryt', title: 'Navn', style: 'Design', appearance: 'Utseende', language: 'Språk', accent: 'Aksentfarge', animate: 'Animasjoner', auto: 'Følg Home Assistant', light: 'Lyst', dark: 'Mørkt', none: 'Ikke valgt', setup: 'Gjør kortet til ditt', setupText: 'Velg entiteter i innstillingene for å vise levende data.', configure: 'Sett opp kortet', unavailable: 'Utilgjengelig', missing: 'Velg entitet', error: 'Handlingen mislyktes. Prøv igjen.', saved: 'Innstillinger lagret.', localSaved: 'Beholdt i nettleseren. Delt lagring er ikke bekreftet.', liveSaved: 'Oppdatert på kortet. Lagring er ikke tilgjengelig.', entityHint: 'Bare entiteter du velger, brukes av kortet.', optional: 'Valgfritt', unknown: 'Ukjent', on: 'På', off: 'Av', details: 'Vis detaljer', saving: 'Lagrer …' },
    en: { settings: 'Settings', close: 'Close', save: 'Save', cancel: 'Cancel', title: 'Name', style: 'Design', appearance: 'Appearance', language: 'Language', accent: 'Accent colour', animate: 'Animations', auto: 'Follow Home Assistant', light: 'Light', dark: 'Dark', none: 'Not selected', setup: 'Make this space yours', setupText: 'Choose entities in settings to bring live data into this card.', configure: 'Set up card', unavailable: 'Unavailable', missing: 'Choose an entity', error: 'The action failed. Please try again.', saved: 'Settings saved.', localSaved: 'Kept in this browser. Shared storage is not confirmed.', liveSaved: 'Updated on this card. Storage is unavailable.', entityHint: 'Only entities you choose are used by this card.', optional: 'Optional', unknown: 'Unknown', on: 'On', off: 'Off', details: 'Show details', saving: 'Saving …' },
  };
  let hass = env.hass || {}, config = env.config || {}, dead = false, frame = 0, visible = true;
  let messageTimer = 0, revision = Number(config[definition.key + '_revision']) || 0;
  const cleanup = [], timers = new Set();
  const clone = (value) => JSON.parse(JSON.stringify(value));
  const q = (selector) => card.querySelector(selector);
  const qa = (selector) => Array.from(card.querySelectorAll(selector));
  const wrap = () => host.closest?.('.card-wrapper') || host.parentElement;
  const scope = () => String(ddc?.card?.storageKey || env.storageKey || location.pathname);
  const storageKey = () => 'hads-controls:v1:' + scope() + ':' + (wrap()?.dataset?.layoutCardId || host.id || definition.id);
  function normalize(value) {
    const next = { ...definition.defaults, ...(value && typeof value === 'object' ? value : {}) };
    for (const field of definition.fields) {
      if (field.type === 'checkbox') next[field.key] = next[field.key] === true || next[field.key] === 'true';
      else if (field.type === 'number') {
        const n = Number(next[field.key]);
        next[field.key] = Number.isFinite(n) ? Math.max(field.min ?? -Infinity, Math.min(field.max ?? Infinity, n)) : definition.defaults[field.key];
      } else next[field.key] = String(next[field.key] ?? '').trim();
      if (field.options && !field.options.some((option) => option[0] === next[field.key])) next[field.key] = definition.defaults[field.key];
      if (field.type === 'color' && !/^#[0-9a-f]{6}$/i.test(next[field.key])) next[field.key] = definition.defaults[field.key];
    }
    if (!/^#[0-9a-f]{6}$/i.test(next.accent)) next.accent = definition.defaults.accent;
    return next;
  }
  let cfg = normalize(config[definition.key]);
  // Durable config wins unless a newer edit in this browser is pending sync.
  try {
    const cached = JSON.parse(localStorage.getItem(storageKey()) || 'null');
    if (cached?.values && (!config[definition.key] || Number(cached.revision) > revision)) {
      cfg = normalize(cached.values); revision = Number(cached.revision) || 0;
    }
  } catch {}
  function language() {
    if (cfg.language !== 'auto') return cfg.language;
    return /^(no|nb|nn)/i.test(hass.language || navigator.language || '') ? 'no' : 'en';
  }
  function t(key) { return definition.copy?.[language()]?.[key] ?? copy[language()]?.[key] ?? key; }
  function text(selector, value) {
    const el = q(selector), str = String(value ?? '');
    if (el && el.textContent !== str) el.textContent = str;
  }
  function listen(target, event, fn, options) {
    target?.addEventListener(event, fn, options);
    const off = () => target?.removeEventListener(event, fn, options);
    cleanup.push(off); return off;
  }
  function later(fn, ms) {
    const id = setTimeout(() => { timers.delete(id); if (!dead) fn(); }, ms);
    timers.add(id); return id;
  }
  const entity = (id) => id ? hass.states?.[id] || null : null;
  const available = (id) => !!entity(id) && !['unknown', 'unavailable', 'none', ''].includes(String(entity(id).state).toLowerCase());
  const numeric = (value) => {
    if (value === null || value === undefined || String(value).trim() === '') return null;
    const n = Number(String(value).replace(',', '.')); return Number.isFinite(n) ? n : null;
  };
  const friendly = (id) => entity(id)?.attributes?.friendly_name || id || t('none');
  const format = (value, digits = 0) => value === null || !Number.isFinite(value) ? '—' : new Intl.NumberFormat(language() === 'no' ? 'nb-NO' : 'en-GB', { maximumFractionDigits: digits }).format(value);
  function notify(message, error = false) {
    if (dead) return;
    const el = q('[data-message]'); el.textContent = message; el.hidden = false; el.dataset.error = String(error);
    clearTimeout(messageTimer); messageTimer = later(() => { el.hidden = true; }, 6500);
  }
  function details(id) {
    if (id && entity(id)) host.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: id }, bubbles: true, composed: true }));
  }
  async function service(id, domain, name, data = {}) {
    const sceneReady = domain === 'scene' && entity(id)?.state === 'unknown';
    if (dead || (!available(id) && !sceneReady) || !hass.callService) return false;
    try { await hass.callService(domain, name, data, { entity_id: id }); return true; }
    catch { notify(t('error'), true); return false; }
  }
  function baseRender() {
    const dark = cfg.appearance === 'dark' || (cfg.appearance === 'auto' && !!(hass.themes?.darkMode ?? hass.selectedTheme?.dark));
    card.dataset.theme = dark ? 'dark' : 'light'; card.dataset.style = cfg.style;
    card.dataset.motion = String(cfg.animate && visible && !document.hidden);
    card.style.setProperty('--accent', cfg.accent);
    card.lang = language();
    text('[data-title]', cfg.title || t(definition.id));
    text('[data-kicker]', t(definition.id + 'Kicker'));
    text('[data-empty-title]', t('setup')); text('[data-empty-text]', t('setupText'));
    text('[data-configure]', t('configure'));
    q('[data-settings]').setAttribute('aria-label', t('settings'));
  }
  const api = { root, host, ddc, card, q, qa, text, t, entity, available, numeric, friendly, format, listen, later, notify, details, service,
    get cfg() { return cfg; }, get hass() { return hass; }, get dead() { return dead; }, get visible() { return visible; },
    refresh: () => render(), schedule: () => schedule(),
  };
  const feature = factory(api);
  function render() { if (!dead) { baseRender(); feature.render(); q('.hc-body').inert = !q('[data-empty]').hidden; } }
  function schedule() {
    if (dead || frame) return;
    frame = requestAnimationFrame(() => { frame = 0; render(); });
  }
  const dialog = q('dialog'), form = dialog.querySelector('form'), fields = dialog.querySelector('[data-fields]');
  function buildFields() {
    fields.replaceChildren();
    for (const field of definition.fields) {
      const label = document.createElement('label'); label.className = field.type === 'checkbox' ? 'check-field' : 'field';
      const caption = document.createElement('span'); caption.textContent = t(field.label || field.key);
      let input;
      if (field.type === 'entity' || field.options) {
        input = document.createElement('select');
        const options = field.options || [['', 'none'], ...Object.keys(hass.states || {}).filter((id) => (!field.domains || field.domains.includes(id.split('.')[0])) && (!field.deviceClasses || field.deviceClasses.includes(entity(id)?.attributes?.device_class))).sort((a, b) => friendly(a).localeCompare(friendly(b))).map((id) => [id, null])];
        if (field.type === 'entity' && cfg[field.key] && !options.some(([id]) => id === cfg[field.key])) options.push([cfg[field.key], null]);
        for (const [value, key] of options) {
          const option = document.createElement('option'); option.value = value;
          option.textContent = key ? t(key) : friendly(value) + ' · ' + value;
          input.append(option);
        }
      } else {
        input = document.createElement('input'); input.type = field.type || 'text';
        if (field.min !== undefined) input.min = field.min;
        if (field.max !== undefined) input.max = field.max;
        if (field.step !== undefined) input.step = field.step;
        if (input.type === 'text') input.maxLength = field.maxLength || 150;
      }
      input.name = field.key; input.dataset.field = field.key;
      if (field.type === 'checkbox') input.checked = !!cfg[field.key]; else input.value = String(cfg[field.key] ?? '');
      label.append(caption, input);
      if (field.hint) { const hint = document.createElement('small'); hint.textContent = t(field.hint); label.append(hint); }
      fields.append(label);
    }
    dialog.querySelector('[data-dialog-title]').textContent = t('settings');
    dialog.querySelector('[data-dialog-hint]').textContent = t('entityHint');
    dialog.querySelector('[data-save]').textContent = t('save');
    dialog.querySelector('[data-cancel]').textContent = t('cancel');
    dialog.querySelector('[data-close]').setAttribute('aria-label', t('close'));
  }
  function openSettings() { buildFields(); dialog.showModal(); }
  function closeSettings() { dialog.close(); q('[data-settings]').focus(); }
  listen(q('[data-settings]'), 'click', openSettings);
  listen(q('[data-configure]'), 'click', openSettings);
  listen(dialog.querySelector('[data-close]'), 'click', closeSettings);
  listen(dialog.querySelector('[data-cancel]'), 'click', closeSettings);
  listen(dialog, 'click', (event) => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeSettings(); } });
  // Keep editor keystrokes from moving/deleting dashboard cards. Native dialog
  // supplies focus containment and Escape handling in the browser's top layer.
  for (const event of ['keydown', 'keyup', 'pointerdown', 'pointerup', 'dblclick']) listen(dialog, event, (e) => e.stopPropagation());
  async function persist() {
    revision = Math.max(Date.now(), revision + 1);
    let local = false;
    try { localStorage.setItem(storageKey(), JSON.stringify({ revision, values: cfg })); local = true; } catch {}
    let source = config;
    try { source = JSON.parse(wrap()?.dataset?.cfg || 'null') || host.__ddcSourceConfig || config; } catch {}
    const next = { ...clone(source), [definition.key]: clone(cfg), [definition.key + '_revision']: revision };
    config = next; host.__ddcSourceConfig = clone(next); host._config = clone(next);
    if (wrap()?.dataset) wrap().dataset.cfg = JSON.stringify(next);
    const owner = ddc?.card, id = wrap()?.dataset?.layoutCardId;
    if (owner && id) owner._updateCardConfigAcrossResponsiveLayouts_?.(id, next);
    try {
      if (ddc?.saveLayout) {
        await ddc.saveLayout(true);
        if (!owner?.__dirty && owner?._backendOK) return t('saved');
      } else owner?._queueSave?.('hads-card-settings');
    } catch {}
    return t(local ? 'localSaved' : 'liveSaved');
  }
  listen(form, 'submit', async (event) => {
    event.preventDefault();
    const save = dialog.querySelector('[data-save]'); if (save.disabled) return;
    const next = { ...cfg };
    fields.querySelectorAll('[data-field]').forEach((input) => { next[input.name] = input.type === 'checkbox' ? input.checked : input.value; });
    cfg = normalize(next); feature.configChanged?.(); render();
    save.disabled = true; save.textContent = t('saving');
    try { const message = await persist(); if (!dead) { closeSettings(); notify(message); } }
    catch { notify(t('error'), true); }
    finally { save.disabled = false; save.textContent = t('save'); }
  });
  if (typeof ResizeObserver === 'function') { const ro = new ResizeObserver(schedule); ro.observe(card); cleanup.push(() => ro.disconnect()); }
  if (typeof IntersectionObserver === 'function') { const io = new IntersectionObserver((entries) => { visible = entries.some((e) => e.isIntersecting); schedule(); }); io.observe(card); cleanup.push(() => io.disconnect()); }
  listen(document, 'visibilitychange', schedule);
  render();
  return {
    update(context) {
      if (dead) return;
      hass = context.hass || hass;
      const incoming = context.config, incomingRevision = Number(incoming?.[definition.key + '_revision']) || 0;
      if (incoming?.[definition.key] && incomingRevision > revision) {
        revision = incomingRevision; config = incoming; cfg = normalize(incoming[definition.key]); feature.configChanged?.();
      }
      schedule();
    },
    destroy() {
      dead = true; cancelAnimationFrame(frame); timers.forEach(clearTimeout); timers.clear();
      feature.destroy?.(); cleanup.forEach((off) => off());
      if (dialog.open) dialog.close();
    },
  };
}
