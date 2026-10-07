// Browser integration tests against the actual DdcHtmlCard runtime. Synthetic only.
export async function verify(packages) {
  const report = document.createElement('pre'); report.id = 'verification-results'; report.style.cssText = 'padding:24px;background:#fff;color:#17221a;white-space:pre-wrap'; document.body.prepend(report);
  const results = [], fixtures = [], calls = [], saves = [];
  const runId = 'verify-' + Date.now();
  const pause = () => new Promise((resolve) => setTimeout(resolve, 40));
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  const fixture = async (id, settings, states) => {
    const wrapper = document.createElement('div'); wrapper.className = 'card-wrapper'; wrapper.dataset.layoutCardId = runId + '-' + fixtures.length;
    wrapper.style.cssText = 'position:fixed;left:-2000px;top:0;width:460px;height:600px';
    const host = document.createElement('ddc-html-card'), cfg = structuredClone(packages[id].entry.card), key = 'hads_' + id + '_config';
    Object.assign(cfg[key], settings); wrapper.dataset.cfg = JSON.stringify(cfg);
    const owner = { storageKey: runId, _backendOK: true, _updateCardConfigAcrossResponsiveLayouts_(cardId, next) { saves.push({ cardId, config: next }); } };
    wrapper.addEventListener('ddc-api-request', (event) => { event.stopPropagation(); event.detail.receive({ card: owner, saveLayout: async () => { saves.push('saved'); } }); });
    const instance = { host, wrapper, cfg, key, states, q: (selector) => instance.host.shadowRoot.querySelector(selector), async update(next = states) { instance.states = next; instance.host.hass = { states: next, language: 'nb', themes: { darkMode: false }, callService: async (...args) => { calls.push(args); } }; await pause(); } };
    host.setConfig(cfg); wrapper.append(host); document.body.append(wrapper); fixtures.push(instance); await instance.update(states);
    for (let n = 0; n < 50 && !host._scriptUpdate; n++) await pause();
    assert(host._scriptUpdate, id + ' runtime did not initialize'); return instance;
  };
  async function check(name, fn) { try { await fn(); results.push('PASS ' + name); } catch (error) { results.push('FAIL ' + name + ': ' + error.message); } report.textContent = results.join('\n'); }
  const sensor = (state, unit = 'W') => ({ state: String(state), attributes: { unit_of_measurement: unit } });
  let cover, room, energy;
  await check('All exports start with an accessible setup state', async () => {
    for (const id of ['cover', 'room', 'energy']) { const card = await fixture(id, {}, {}); assert(!card.q('[data-empty]').hidden, id + ' empty overlay'); assert(card.q('.hc-body').inert, id + ' obscured controls must not receive focus'); }
  });
  await check('Cover uses feature flags and sends exact service targets', async () => {
    cover = await fixture('cover', { entity: 'cover.test' }, { 'cover.test': { state: 'open', attributes: { current_position: 62, current_tilt_position: 45, supported_features: 143 } } });
    cover.q('[data-open]').click(); await pause();
    const args = calls.at(-1); assert(args[0] === 'cover' && args[1] === 'open_cover' && args[3].entity_id === 'cover.test', 'open service');
    const slider = cover.q('[data-position]'); slider.value = '73'; slider.dispatchEvent(new Event('input')); slider.dispatchEvent(new Event('change')); await pause();
    assert(calls.at(-1)[1] === 'set_cover_position' && calls.at(-1)[2].position === 73, 'position payload');
    const tilt = cover.q('[data-tilt]'); tilt.value = '26'; tilt.dispatchEvent(new Event('change')); await pause(); assert(calls.at(-1)[2].tilt_position === 26, 'tilt payload');
  });
  await check('Unsupported cover actions are disabled, unavailable data stays unknown', async () => {
    await cover.update({ 'cover.test': { state: 'open', attributes: { supported_features: 3 } } });
    assert(cover.q('[data-stop]').disabled && cover.q('[data-position-field]').hidden, 'unsupported controls');
    assert(cover.q('[data-cover-value]').textContent === '—', 'no invented position');
    await cover.update({ 'cover.test': { state: 'unavailable', attributes: { supported_features: 143, current_position: 62 } } });
    assert(cover.q('[data-open]').disabled && cover.q('[data-cover-value]').textContent === '—', 'stale reading must not render');
  });
  await check('Room toggle and scene activation use the appropriate HA services', async () => {
    room = await fixture('room', { action_1: 'light.test', action_2: 'scene.test', temperature: 'sensor.test' }, { 'light.test': { state: 'on', attributes: {} }, 'scene.test': { state: '2026-01-01', attributes: {} }, 'sensor.test': sensor('21.4', '°C') });
    room.q('[data-action="1"]').click(); await pause(); assert(calls.at(-1)[0] === 'light' && calls.at(-1)[1] === 'toggle', 'light.toggle');
    room.q('[data-action="2"]').click(); await pause(); assert(calls.at(-1)[0] === 'scene' && calls.at(-1)[1] === 'turn_on', 'scene.turn_on');
    assert(room.q('[data-action="1"]').getAttribute('aria-pressed') === 'true' && !room.q('[data-action="2"]').hasAttribute('aria-pressed'), 'toggle vs momentary semantics');
  });
  await check('Energy renders signed flow, calculated totals and missing readings', async () => {
    energy = await fixture('energy', { solar: 's', grid: 'g', battery: 'b', ev: 'e' }, { s: sensor(4.2, 'kW'), g: sensor(-650), b: sensor(-800), e: sensor(1400) });
    assert(energy.q('[data-home-number]').textContent === '2,75', 'home total');
    assert(energy.q('[data-flow="grid"]').dataset.reverse === 'true' && energy.q('[data-flow="battery"]').dataset.reverse === 'true', 'flow signs');
    await energy.update({ ...energy.states, s: sensor('unavailable') });
    assert(energy.q('[data-home-number]').textContent === '—' && energy.q('[data-flow="solar"]').dataset.active === 'false', 'missing data propagation');
  });
  await check('A scene that has never been activated remains usable', async () => {
    await room.update({ ...room.states, 'scene.test': { state: 'unknown', attributes: {} } });
    assert(!room.q('[data-action="2"]').disabled, 'unknown scene is callable');
    const before = calls.length; room.q('[data-action="2"]').click(); await pause(); assert(calls.length === before + 1 && calls.at(-1)[1] === 'turn_on', 'first scene activation');
  });
  await check('Settings save updates every export cache and calls the dashboard save bridge', async () => {
    room.q('[data-settings]').click(); assert(room.q('dialog').open, 'native dialog');
    room.q('[name=title]').value = 'Kontor'; room.q('[name=style]').value = 'blueprint'; room.q('[name=appearance]').value = 'dark';
    room.q('form').requestSubmit(); await pause();
    assert(!room.q('dialog').open, 'dialog closes'); assert(room.q('[data-title]').textContent === 'Kontor', 'title update');
    assert(room.q('.hc').dataset.theme === 'dark' && room.q('.hc').dataset.style === 'blueprint', 'appearance');
    assert(JSON.parse(room.wrapper.dataset.cfg)[room.key].title === 'Kontor', 'wrapper cache');
    assert(room.host.__ddcSourceConfig[room.key].title === 'Kontor' && room.host._config[room.key].title === 'Kontor', 'host caches');
    assert(saves.at(-1) === 'saved' && saves.at(-2).config[room.key].title === 'Kontor', 'responsive cache and save');
  });
  await check('Saved settings survive runtime recreation without duplicate handlers', async () => {
    room.host.remove(); room.host = document.createElement('ddc-html-card');
    room.host.setConfig(JSON.parse(room.wrapper.dataset.cfg)); await room.update(room.states); room.wrapper.append(room.host);
    for (let n = 0; n < 50 && !room.host._scriptUpdate; n++) await pause();
    assert(room.q('[data-title]').textContent === 'Kontor', 'persisted title');
    const before = calls.length; room.q('[data-action="1"]').click(); await pause(); assert(calls.length === before + 1, 'exactly one service call');
  });
  await check('Disconnect removes listeners and stops stale interactions', async () => {
    const button = room.q('[data-action="1"]'), before = calls.length; room.wrapper.remove(); button.click(); await pause(); assert(calls.length === before, 'destroy removed handler');
  });
  fixtures.forEach(({ wrapper }) => wrapper.remove());
  for (const key of Object.keys(localStorage)) if (key.startsWith('hads-controls:v1:' + runId + ':')) localStorage.removeItem(key);
  const failed = results.filter((line) => line.startsWith('FAIL')).length;
  report.dataset.failed = String(failed); report.textContent += `\n\n${results.length - failed}/${results.length} integration checks passed.`;
  return results;
}
