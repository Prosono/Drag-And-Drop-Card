import { DdcHtmlCard } from '../../src/cards/internal-cards/html-card/index.js';
customElements.define('ddc-html-card', DdcHtmlCard);
const payload = await fetch('./hads-sauna-card-1-0-0.json').then(r => r.json());
const key = 'hads_sauna_config', wrapper = document.querySelector('.card-wrapper');
const sensor = (state, name, unit = '') => ({ state, attributes: { friendly_name: name, unit_of_measurement: unit }, last_updated: new Date().toISOString() });
const initial = { 'sensor.guest': sensor('Vetle', 'Gjesten i badstuen'), 'sensor.sauna_temperature': sensor('78', 'Temperatur i badstuen', '°C'), 'sensor.sauna_humidity': sensor('18', 'Luftfuktighet i badstuen', '%'), 'sensor.sauna_status': sensor('Oppvarmet', 'Badstuens status') };
let states = structuredClone(initial), host, missing = false;
const base = structuredClone(payload.entry.card);
Object.assign(base[key], { title: 'Fjordbadstuen', user_entity: 'sensor.guest', temperature_entity: 'sensor.sauna_temperature', extra_1_entity: 'sensor.sauna_humidity', extra_2_entity: 'sensor.sauna_status' });
let cfg = structuredClone(base);
try { const stored = JSON.parse(localStorage.getItem('hads-sauna-preview')); if (stored?.[key]) { cfg[key] = { ...cfg[key], ...stored[key] }; cfg[key + '_revision'] = stored[key + '_revision']; } } catch {}
document.addEventListener('ddc-api-request', event => { event.detail.receive({ card: { storageKey: 'hads-sauna-preview', _backendOK: false, _updateCardConfigAcrossResponsiveLayouts_(_id, config) { localStorage.setItem('hads-sauna-preview', JSON.stringify({ [key]: config[key], [key + '_revision']: config[key + '_revision'] })); } }, saveLayout: async () => {} }); });
document.addEventListener('hass-more-info', event => { document.querySelector('#events').textContent = 'Detaljvisning: ' + event.detail.entityId; });
function publish() { host.hass = { states: { ...states }, language: 'nb', config: { time_zone: 'Europe/Oslo', unit_system: { temperature: '°C' } }, themes: { darkMode: false } }; }
function mount(config) { wrapper.dataset.cfg = JSON.stringify(config); host = document.createElement('ddc-html-card'); host.setConfig(config); publish(); wrapper.append(host); }
mount(cfg);
document.querySelector('#size').onclick = event => { const mobile = document.body.classList.toggle('mobile'); event.target.textContent = mobile ? 'Stor visning' : 'Mobilvisning'; };
document.querySelector('#guest').onclick = () => { states['sensor.guest'].state = states['sensor.guest'].state === 'Vetle' ? 'Sofie' : 'Vetle'; publish(); };
document.querySelector('#unavailable').onclick = event => { missing = !missing; states = structuredClone(initial); if (missing) Object.values(states).forEach(e => { e.state = 'unavailable'; }); event.target.textContent = missing ? 'Gjenopprett data' : 'Simuler datatap'; publish(); };
document.querySelector('#reset').onclick = () => { localStorage.removeItem('hads-sauna-preview'); for (const item of Object.keys(localStorage)) if (item.startsWith('hads-controls:v1:hads-sauna-preview:')) localStorage.removeItem(item); location.reload(); };
if (new URLSearchParams(location.search).has('verify')) {
  const report = document.querySelector('#verification-results'); report.hidden = false;
  const results = [], pause = () => new Promise(r => setTimeout(r, 50)), q = selector => host.shadowRoot.querySelector(selector);
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  async function check(name, fn) { try { await fn(); results.push('PASS ' + name); } catch (error) { results.push('FAIL ' + name + ': ' + error.message); } report.textContent = results.join('\n'); }
  for (let n = 0; n < 50 && !host._scriptUpdate; n++) await pause();
  await check('Live guest and temperature; real date and time', async () => { assert(q('[data-guest]').textContent === 'Vetle', 'guest'); assert(q('[data-temperature]').textContent === '78', 'temperature'); assert(/^\d{2}:\d{2}$/.test(q('[data-clock]').textContent), 'clock'); assert(Math.abs(new Date(q('[data-clock]').dateTime) - Date.now()) < 5000, 'current timestamp'); });
  await check('Guest sensor updates without rerunning the script', async () => { states['sensor.guest'].state = '<b>Sofie & Ola</b>'; publish(); await pause(); assert(q('[data-guest]').textContent === '<b>Sofie & Ola</b>' && !q('[data-guest]').querySelector('b'), 'safe sensor text'); });
  await check('Unavailable data never displays stale temperature or a fake name', async () => { states['sensor.guest'].state = 'unavailable'; states['sensor.sauna_temperature'].state = 'unavailable'; publish(); await pause(); assert(q('[data-guest]').hidden && q('[data-temperature]').textContent === '—', 'unknown data'); states = structuredClone(initial); publish(); await pause(); });
  await check('Custom logo, colours and seconds persist to the export config', async () => { q('[data-settings]').click(); q('[name=logo_url]').value = '/examples/hads-sauna-card/assets/demo-logo.svg'; q('[name=surface]').value = '#eff4e8'; q('[name=show_seconds]').checked = true; q('form').requestSubmit(); await pause(); for (let n = 0; n < 30 && q('[data-logo]').hidden; n++) await pause(); assert(!q('[data-logo]').hidden && q('[data-logo]').naturalWidth > 0, 'logo loads'); assert(q('.hc').style.getPropertyValue('--paper') === '#eff4e8', 'surface colour'); assert(/^\d{2}:\d{2}:\d{2}$/.test(q('[data-clock]').textContent), 'seconds'); assert(JSON.parse(wrapper.dataset.cfg)[key].logo_url.includes('demo-logo'), 'export cache'); });
  await check('Logo errors restore the symbol; background errors restore the included photo', async () => { q('[data-settings]').click(); q('[name=logo_url]').value = '/missing-sauna-logo.png'; q('[name=background_url]').value = '/missing-sauna-photo.png'; q('form').requestSubmit(); for (let n = 0; n < 20; n++) { await pause(); if (q('[data-logo]').hidden && q('[data-background]').getAttribute('src').startsWith('data:')) break; } assert(q('[data-logo]').hidden && !q('[data-brand-symbol]').hidden, 'logo fallback'); assert(q('[data-background]').getAttribute('src').startsWith('data:image/jpeg'), 'photo fallback'); });
  await check('Settings survive a new card instance', async () => { const saved = JSON.parse(wrapper.dataset.cfg); host.remove(); mount(saved); for (let n = 0; n < 50 && !host._scriptUpdate; n++) await pause(); assert(q('.hc').style.getPropertyValue('--paper') === '#eff4e8', 'saved colour'); });
  await check('Removing the card removes its interaction listeners', async () => { const before = document.querySelector('#events').textContent, old = q('[data-temperature-button]'); host.remove(); old.click(); await pause(); assert(document.querySelector('#events').textContent === before, 'cleanup'); });
  localStorage.removeItem('hads-sauna-preview'); for (const item of Object.keys(localStorage)) if (item.startsWith('hads-controls:v1:hads-sauna-preview:')) localStorage.removeItem(item);
  mount(base); report.dataset.failed = String(results.filter(line => line.startsWith('FAIL')).length); report.textContent += '\n' + results.filter(line => line.startsWith('PASS')).length + '/' + results.length + ' checks passed';
}
