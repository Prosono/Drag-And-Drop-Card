import test from 'node:test';
import assert from 'node:assert/strict';
import { energyReadings } from '../scripts/hads-control-cards/energy.js';
import { readFile } from 'node:fs/promises';
import { installDesignImportExportMethods } from '../src/storage/import-export.js';
import { installResponsiveModelMethods } from '../src/layout/responsive-layouts.js';

const sensor = (state, unit = 'W') => ({ state: String(state), attributes: { unit_of_measurement: unit } });
const config = { solar: 's', grid: 'g', battery: 'b', ev: 'e', grid_direction: 'import', battery_direction: 'discharge' };

test('energy uses signed net power, normalizes units and includes EV only once', () => {
  const values = energyReadings(config, { s: sensor(4.2, 'kW'), g: sensor(-650), b: sensor(-800), e: sensor(1400) });
  assert.deepEqual(values.home, { value: 2750, status: 'calculated' });
  assert.equal(values.grid.value, -650); assert.equal(values.battery.value, -800); assert.equal(values.ev.value, 1400);
});
test('both user-selectable sign conventions yield the same physical balance', () => {
  const values = energyReadings({ ...config, grid_direction: 'export', battery_direction: 'charge' }, { s: sensor(.0042, 'MW'), g: sensor(650), b: sensor(800) });
  assert.equal(values.home.value, 2750);
});
test('invalid or missing configured inputs never become zero consumption', () => {
  for (const bad of [undefined, sensor('unavailable'), sensor('unknown'), sensor(''), sensor('nope'), sensor(4.2, 'kWh'), sensor(4.2, '')]) {
    const values = energyReadings(config, { s: bad, g: sensor(0), b: sensor(0) });
    assert.equal(values.solar.value, null); assert.deepEqual(values.home, { value: null, status: 'incomplete' });
  }
});
test('real zero is valid and sources not selected are excluded', () => {
  assert.deepEqual(energyReadings({ grid: 'g' }, { g: sensor(0) }).home, { value: 0, status: 'calculated' });
  assert.equal(energyReadings({}, {}).home.value, null);
});
test('measured home overrides the balance and retains missing-data semantics', () => {
  assert.deepEqual(energyReadings({ ...config, home: 'h' }, { h: sensor('1,5', 'kW') }).home, { value: 1500, status: 'measured' });
  assert.deepEqual(energyReadings({ ...config, home: 'h' }, { s: sensor(4000), g: sensor(0), b: sensor(0) }).home, { value: null, status: 'unavailable' });
});
test('negative unsigned loads and impossible derived totals are flagged', () => {
  assert.equal(energyReadings({ home: 'h', ev: 'e', solar: 's' }, { h: sensor(-10), e: sensor(-10), s: sensor(-10) }).home.status, 'negativePower');
  assert.deepEqual(energyReadings({ grid: 'g' }, { g: sensor(-100) }).home, { value: null, status: 'unbalanced' });
});
test('exported packages have runnable standalone JavaScript and no demo bindings', async () => {
  const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
  for (const [id, name] of Object.entries({ cover: 'cover-control', room: 'room-control', energy: 'energy-flow' })) {
    const payload = JSON.parse(await readFile(new URL('../examples/hads-control-cards/hads-' + name + '-1-0-0.json', import.meta.url), 'utf8'));
    assert.equal(payload.kind, 'ddc-card'); assert.equal(payload.version, 2);
    const card = payload.entry.card;
    assert.equal(card.type, 'custom:ddc-html-card'); assert.equal(card.rerun_on_hass_update, false);
    for (const variant of ['mobile_portrait', 'mobile_landscape']) {
      assert.equal(payload.responsive_entries[variant].size.width, 320);
      assert.deepEqual(payload.responsive_entries[variant].card, card);
    }
    assert.doesNotThrow(() => new AsyncFunction('hass', 'states', 'config', 'root', 'host', 'helpers', 'ddc', 'reason', card.js));
    assert.ok(card.html.includes('<dialog')); assert.ok(card.css.includes('prefers-reduced-motion'));
    const cfg = card['hads_' + id + '_config'];
    for (const key of ['entity', 'temperature', 'humidity', 'co2', 'presence', 'action_1', 'action_2', 'action_3', 'solar', 'grid', 'battery', 'home', 'ev', 'soc']) if (key in cfg) assert.equal(cfg[key], '');
  }
});

test('all three files import through the real DDC importer with mobile sizes and new identities', async () => {
  class Dashboard {}
  installDesignImportExportMethods(Dashboard.prototype);
  installResponsiveModelMethods(Dashboard.prototype);
  const dashboard = new Dashboard();
  let sequence = 0, saved = 0;
  Object.assign(dashboard, {
    activeTab: 'living', defaultTab: 'living', _activeResponsiveLayoutKey: 'desktop_landscape', _responsiveLayouts: {},
    _genLayoutCardId_: () => 'imported-' + ++sequence,
    _persistCurrentResponsiveProfileToMemory_: () => {},
    _normalizeResponsiveConnectorLayouts_: () => ({}),
    _normalizeTabId: (id) => id,
    _normalizeCardLayerIds_: () => [],
    _sanitizeCardConfigForStorage_: (card) => structuredClone(card),
    _applyHtmlCardConfigOverride_: (card) => card,
    _clampYToCanvasTop_: (y) => y,
    _cloneJson_: (value) => structuredClone(value),
    _getImportViewportBoundsForLayoutVariant_: () => ({ width: 1920, height: 1080 }),
    _findNextAvailablePositionForEntries_: () => ({ x: 0, y: 0 }),
    _createWrapperFromSavedEntry_: async () => null,
    _saveLayout: async () => { saved++; },
  });
  for (const name of ['cover-control', 'room-control', 'energy-flow']) {
    const payload = JSON.parse(await readFile(new URL('../examples/hads-control-cards/hads-' + name + '-1-0-0.json', import.meta.url), 'utf8'));
    assert.equal(await dashboard._importSingleCardPayload_(payload), true);
    for (const key of dashboard._responsiveLayoutVariantKeys_()) {
      const entry = dashboard._responsiveLayouts[key].at(-1);
      assert.equal(entry.id, 'imported-' + sequence); assert.equal(entry.tabId, 'living');
      assert.equal(entry.size.width, key.startsWith('mobile') ? 320 : payload.entry.size.width);
      assert.deepEqual(entry.card, payload.entry.card);
    }
  }
  assert.equal(saved, 3);
});
