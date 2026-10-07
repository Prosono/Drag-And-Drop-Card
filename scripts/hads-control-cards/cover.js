export function coverFeature(a) {
  const { q, text, t, listen, entity, available, numeric, service } = a;
  let pending = false, positionDraft = null, tiltDraft = null;
  const supported = (flag) => available(a.cfg.entity) && !!(Number(entity(a.cfg.entity)?.attributes?.supported_features || 0) & flag);
  const bounded = (value) => Math.max(0, Math.min(100, value));
  function position() {
    const e = entity(a.cfg.entity); if (!available(a.cfg.entity)) return null;
    const n = numeric(e.attributes?.current_position);
    return n === null ? (e.state === 'closed' ? 0 : null) : bounded(n);
  }
  function paint(value) {
    const opening = value === null ? 0 : value / 100;
    q('.cover-scene').style.setProperty('--opening', opening);
    q('.cover-scene').dataset.unknown = String(value === null);
    text('[data-cover-value]', value === null ? '—' : Math.round(value) + '%');
  }
  async function command(name, flag, data = {}) {
    if (pending || !supported(flag)) return;
    pending = true; a.refresh();
    await service(a.cfg.entity, 'cover', name, data);
    pending = false; positionDraft = null; tiltDraft = null; a.refresh();
  }
  listen(q('[data-open]'), 'click', () => command('open_cover', 1));
  listen(q('[data-stop]'), 'click', () => command('stop_cover', 8));
  listen(q('[data-shut]'), 'click', () => command('close_cover', 2));
  listen(q('[data-cover-details]'), 'click', () => a.details(a.cfg.entity));
  listen(q('[data-position]'), 'input', (e) => { positionDraft = bounded(Number(e.target.value)); paint(positionDraft); });
  listen(q('[data-position]'), 'change', (e) => command('set_cover_position', 4, { position: bounded(Math.round(Number(e.target.value))) }));
  listen(q('[data-tilt]'), 'input', (e) => { tiltDraft = bounded(Number(e.target.value)); text('[data-tilt-value]', tiltDraft + '%'); });
  listen(q('[data-tilt]'), 'change', (e) => command('set_cover_tilt_position', 128, { tilt_position: bounded(Math.round(Number(e.target.value))) }));
  for (const el of [q('[data-position]'), q('[data-tilt]')]) {
    listen(el, 'pointerdown', (e) => e.stopPropagation()); listen(el, 'keydown', (e) => e.stopPropagation());
    listen(el, 'pointercancel', () => { positionDraft = null; tiltDraft = null; a.refresh(); });
  }
  return {
    configChanged() { positionDraft = null; tiltDraft = null; },
    render() {
      const id = a.cfg.entity, e = entity(id), ok = available(id), p = positionDraft ?? position();
      q('[data-empty]').hidden = !!id;
      const state = !ok ? 'unavailable' : ['open', 'closed', 'opening', 'closing'].includes(e.state) ? e.state : 'unknown';
      text('[data-cover-state]', t(state));
      text('[data-cover-label]', a.friendly(id));
      text('[data-open-label]', t('openAction')); text('[data-stop-label]', t('stop')); text('[data-shut-label]', t('closeAction'));
      text('[data-position-label]', t('position')); text('[data-tilt-label]', t('tilt'));
      text('[data-cover-note]', pending ? t('sending') : positionDraft !== null ? t('release') : t('coverNote'));
      q('.cover-status').dataset.moving = String(ok && ['opening', 'closing'].includes(e.state));
      q('[data-open]').disabled = pending || !supported(1);
      q('[data-stop]').disabled = pending || !supported(8);
      q('[data-shut]').disabled = pending || !supported(2);
      q('[data-cover-details]').disabled = !e;
      const slider = q('[data-position]'); slider.disabled = pending || !supported(4);
      slider.setAttribute('aria-label', t('position')); slider.setAttribute('aria-valuetext', p === null ? t('unknown') : Math.round(p) + '%');
      if (positionDraft === null) slider.value = String(p ?? 0);
      q('[data-position-field]').hidden = !supported(4);
      const tilt = tiltDraft ?? (ok ? numeric(e.attributes?.current_tilt_position) : null);
      q('[data-tilt-field]').hidden = !a.cfg.show_tilt || !supported(128);
      q('[data-tilt]').disabled = pending || !supported(128); q('[data-tilt]').setAttribute('aria-label', t('tilt'));
      if (tiltDraft === null) q('[data-tilt]').value = String(tilt ?? 0);
      text('[data-tilt-value]', tilt === null ? '—' : Math.round(tilt) + '%');
      paint(p);
    },
  };
}
