import { DdcHtmlCard } from '../../src/cards/internal-cards/html-card/index.js';
customElements.define('ddc-html-card', DdcHtmlCard);
const make = (state, friendly_name, unit, attributes = {}) => ({ state: String(state), attributes: { friendly_name, ...(unit ? { unit_of_measurement: unit } : {}), ...attributes } });
const initialStates = {
  'cover.stue': make('open', 'Persienne ved vinduet', '', { supported_features: 143, current_position: 62, current_tilt_position: 45 }),
  'sensor.temperature': make(21.4, 'Stue temperatur', '°C', { device_class: 'temperature' }),
  'sensor.humidity': make(42, 'Stue luftfuktighet', '%', { device_class: 'humidity' }),
  'sensor.co2': make(624, 'Stue CO₂', 'ppm', { device_class: 'carbon_dioxide' }),
  'binary_sensor.presence': make('on', 'Stue tilstedeværelse', '', { device_class: 'occupancy' }),
  'light.lounge': make('on', 'Taklys'), 'switch.lamp': make('off', 'Leselampe'), 'scene.evening': make('2026-09-11T17:00:00Z', 'Kveldsro'),
  'sensor.solar': make(4.2, 'Solproduksjon', 'kW', { device_class: 'power' }), 'sensor.grid': make(-650, 'Netto fra strømnettet', 'W', { device_class: 'power' }),
  'sensor.battery': make(-800, 'Netto fra batteriet', 'W', { device_class: 'power' }), 'sensor.ev': make(1400, 'Ladeeffekt', 'W', { device_class: 'power' }),
  'sensor.home': make(2750, 'Boligforbruk', 'W', { device_class: 'power' }), 'sensor.soc': make(76, 'Batterinivå', '%', { device_class: 'battery' }),
};
const demoSettings = {
  cover: { entity: 'cover.stue', title: 'Lys inn. Ro ned.' },
  room: { title: 'Stuen', temperature: 'sensor.temperature', humidity: 'sensor.humidity', co2: 'sensor.co2', presence: 'binary_sensor.presence', action_1: 'light.lounge', action_2: 'switch.lamp', action_3: 'scene.evening' },
  energy: { title: 'Hjemmets energi', solar: 'sensor.solar', grid: 'sensor.grid', battery: 'sensor.battery', ev: 'sensor.ev', soc: 'sensor.soc' },
};
const hosts = {}, packages = {}, calls = [];
let states = structuredClone(initialStates), language = 'nb', darkMode = false, missing = false;
function publish() { for (const host of Object.values(hosts)) host.hass = { states: { ...states }, language, themes: { darkMode }, callService }; }
async function callService(domain, name, data, target) {
  const id = target.entity_id; calls.push({ domain, name, data, target });
  document.querySelector('#event').textContent = `${domain}.${name} → ${id} ${Object.keys(data).length ? JSON.stringify(data) : ''}`;
  const e = states[id]; if (!e) throw new Error('Missing demo entity');
  if (domain === 'cover') {
    if (name === 'set_cover_tilt_position') e.attributes.current_tilt_position = data.tilt_position;
    if (name === 'set_cover_position' || name === 'open_cover' || name === 'close_cover') {
      const value = name === 'open_cover' ? 100 : name === 'close_cover' ? 0 : data.position;
      e.attributes.current_position = value; e.state = value === 0 ? 'closed' : 'open';
    }
  } else e.state = name === 'toggle' ? e.state === 'on' ? 'off' : 'on' : new Date().toISOString();
  publish();
}
document.addEventListener('ddc-api-request', (event) => event.detail.receive({
  card: { storageKey: 'hads-controls-preview', _backendOK: false, _updateCardConfigAcrossResponsiveLayouts_(id, config) { localStorage.setItem('hads-preview:' + id, JSON.stringify(config)); } },
  saveLayout: async () => {},
}));
document.addEventListener('hass-more-info', (event) => { document.querySelector('#event').textContent = 'Detaljer → ' + event.detail.entityId; });
for (const [id, filename] of Object.entries({ cover: 'cover-control', room: 'room-control', energy: 'energy-flow' })) {
  const payload = await fetch(`hads-${filename}-1-0-0.json`).then((r) => r.json()); packages[id] = payload;
  let config = structuredClone(payload.entry.card), key = 'hads_' + id + '_config';
  config[key] = { ...config[key], ...demoSettings[id] };
  try {
    const cached = JSON.parse(localStorage.getItem('hads-preview:preview-' + id));
    if (cached?.[key]) { config[key] = { ...config[key], ...cached[key] }; config[key + '_revision'] = cached[key + '_revision']; }
  } catch {}
  const wrapper = document.querySelector('[data-layout-card-id="preview-' + id + '"]'); wrapper.dataset.cfg = JSON.stringify(config);
  const host = document.createElement('ddc-html-card'); hosts[id] = host; host.setConfig(config); wrapper.append(host); publish();
}
document.querySelector('#theme').addEventListener('change', (e) => { darkMode = e.target.value === 'dark'; document.body.dataset.dark = String(darkMode); publish(); });
document.querySelector('#language').addEventListener('change', (e) => { language = e.target.value === 'no' ? 'nb' : 'en'; publish(); });
document.querySelector('#width').addEventListener('change', (e) => { document.body.dataset.width = e.target.value; });
document.querySelector('#missing').addEventListener('click', (e) => { missing = !missing; states = structuredClone(initialStates); if (missing) Object.values(states).forEach((entity) => { entity.state = 'unavailable'; }); e.target.textContent = missing ? 'Gjenopprett data' : 'Simuler datatap'; publish(); });
document.querySelector('#reset').addEventListener('click', () => { for (const key of Object.keys(localStorage)) if (key.startsWith('hads-preview:') || key.startsWith('hads-controls:v1:hads-controls-preview:')) localStorage.removeItem(key); location.reload(); });
// Deliberately public test hook: this page contains only synthetic entities.
window.hadsDemo = { hosts, packages, calls, publish, setStates(next) { states = next; publish(); }, getStates() { return structuredClone(states); } };
if (new URLSearchParams(location.search).has('verify')) await (await import('./verify.js')).verify(packages);
