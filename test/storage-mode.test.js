import test from 'node:test';
import assert from 'node:assert/strict';
import { installStorageModeMethods, normalizeStorageMode, configFingerprint, lovelaceLayoutSnapshot } from '../src/storage/storage-mode.js';
import { installPersistenceMethods } from '../src/storage/layout-persistence.js';
import { installInitialLoadMethods } from '../src/core/layout-loader.js';
import { installSetConfigMethod } from '../src/core/config-lifecycle.js';

const card = (title = 'New', id = 'one') => ({ id, card: { type: 'entities', title, entities: ['light.kitchen'] }, position: { x: 20, y: 30 }, size: { width: 240, height: 180 } });
const config = (mode = 'lovelace') => ({ type: 'custom:drag-and-drop-card', id: 'dashboard', storage_key: 'layout_test', storage_mode: mode, cards: [card()] });

class StorageHarness {
  constructor(mode = 'lovelace') {
    this._config = config(mode);
    this.config = structuredClone(this._config);
    this.__lastSetConfigSource = structuredClone(this._config);
    this.storageKey = 'layout_test';
    this.__booted = true;
    this._backendOK = true;
    this.calls = [];
    this._responsiveLayouts = { desktop_landscape: [card('Edited')], mobile_portrait: [card('Edited')] };
    this.server = { views: [{ cards: [structuredClone(this._config), { type: 'markdown', content: 'Keep me' }] }] };
    this.hass = {
      callWS: async (request) => {
        this.calls.push(request.type);
        if (request.type === 'lovelace/config') return structuredClone(this.server);
        if (this.rejectSave) throw new Error('Unauthorized');
        this.onSave?.(request.config.views[0].cards[0]);
        this.server = structuredClone(request.config);
      },
      callApi: async (method, path, data) => {
        this.calls.push(`${method} ${path}`);
        this.backendPayload = structuredClone(data);
        return {};
      },
    };
  }
  _getLovelace() { return { current_view: 0, mode: this.yamlMode ? 'yaml' : 'storage' }; }
  _getCurrentDashboardUrlPath_() { return 'test-dashboard'; }
  _persistCurrentResponsiveProfileToMemory_() {}
  _syncLiveCardConfigsIntoResponsiveLayouts_() {}
  _getPrimaryResponsiveLayoutKey_() { return 'desktop_landscape'; }
  _serializeResponsiveLayouts_(value) { return value; }
  _cloneJson_(value) { return structuredClone(value); }
  _exportableOptions() { return { storage_mode: this._getStorageMode_(), grid: 10 }; }
  _exportDashboardPackages_() { return [{ id: 'package', enabled: false, yaml: 'input_boolean: {}' }]; }
  _recordLayoutHistoryCheckpoint_() {}
  _updateApplyBtn() {}
  _normalizeDashboardPayload_(value) { return value; }
  _dbgPush() {}
  _toast(message) { this.message = message; }
}
const harnessStubs = Object.getOwnPropertyDescriptors(StorageHarness.prototype);
installPersistenceMethods(StorageHarness.prototype);
Object.defineProperties(StorageHarness.prototype, harnessStubs);
installStorageModeMethods(StorageHarness.prototype);

test('missing and unknown storage modes keep the existing backend behavior', () => {
  assert.equal(normalizeStorageMode(), 'backend');
  assert.equal(normalizeStorageMode('typo'), 'backend');
  assert.equal(normalizeStorageMode('lovelace'), 'lovelace');
  assert.equal(configFingerprint({ b: 1, a: { z: 2, x: 3 } }), configFingerprint({ a: { x: 3, z: 2 }, b: 1 }));
});

test('Lovelace top-level edits beat duplicate desktop data and remove deleted cards from responsive copies', () => {
  const source = { ...config(), responsive_layouts: {
    desktop: { landscape: [card('Old')] },
    mobile: { portrait: [{ id: 'one', position: { x: 7, y: 8 } }, card('Deleted', 'removed')] },
    tablet: { portrait: [card('Explicit tablet override')] },
  } };
  const snapshot = lovelaceLayoutSnapshot(source);
  assert.equal(snapshot.responsive_layouts.desktop_landscape[0].card.title, 'New');
  assert.equal(snapshot.responsive_layouts.mobile.portrait.length, 1);
  assert.equal(snapshot.responsive_layouts.mobile.portrait[0].position.x, 7);
  assert.equal(snapshot.responsive_layouts.tablet.portrait[0].card.title, 'Explicit tablet override');
  assert.equal(source.responsive_layouts.mobile.portrait.length, 2);
  const empty = lovelaceLayoutSnapshot({ ...source, cards: [] });
  assert.deepEqual(empty.cards, []);
  assert.deepEqual(empty.responsive_layouts.desktop_landscape, []);
  assert.deepEqual(empty.responsive_layouts.mobile.portrait, []);
});

test('Lovelace saves content and responsive layouts only to HA, preserving unrelated cards', async () => {
  const h = new StorageHarness();
  assert.equal(await h._saveLayoutInner_(true), true);
  assert.deepEqual(h.calls, ['lovelace/config', 'lovelace/config/save']);
  const stored = h.server.views[0].cards[0];
  assert.equal(stored.cards[0].card.title, 'Edited');
  assert.equal(stored.responsive_layouts.mobile_portrait[0].card.title, 'Edited');
  assert.equal(stored.packages[0].id, 'package');
  assert.equal(h.server.views[0].cards[1].content, 'Keep me');
  assert.equal(h.__dirty, false);
});

test('failed Lovelace save stays dirty, reports failure and never falls back to the backend', async () => {
  const h = new StorageHarness();
  h.rejectSave = true;
  assert.equal(await h._saveLayoutInner_(true), false);
  assert.equal(h.__dirty, true);
  assert.match(h.message, /Unauthorized/);
  assert.equal(h.server.views[0].cards[0].cards[0].card.title, 'New');
  assert.deepEqual(h.calls, ['lovelace/config', 'lovelace/config/save']);
  assert.equal(h.__pendingLovelaceSaveFingerprint, null);
});

test('external edits detected before saving are not overwritten', async () => {
  const h = new StorageHarness();
  h.server.views[0].cards[0].cards[0].card.title = 'External';
  assert.equal(await h._saveLayoutInner_(true), false);
  assert.deepEqual(h.calls, ['lovelace/config']);
  assert.match(h.message, /changed elsewhere/);
});

test('own save echoes do not rebuild the card or leave edit mode', async () => {
  const h = new StorageHarness();
  class ConfigHarness {}
  installSetConfigMethod(ConfigHarness.prototype);
  h.editMode = true;
  h.onSave = (next) => ConfigHarness.prototype.setConfig.call(h, next);
  assert.equal(await h._saveLayoutInner_(true), true);
  ConfigHarness.prototype.setConfig.call(h, structuredClone(h.server.views[0].cards[0]));
  assert.equal(h.editMode, true);
  assert.deepEqual(h.calls, ['lovelace/config', 'lovelace/config/save']);
});

test('switching to Lovelace copies the visible layout and leaves the backend untouched', async () => {
  const h = new StorageHarness('backend');
  await h._changeStorageMode_('lovelace');
  assert.equal(h._getStorageMode_(), 'lovelace');
  assert.equal(h.server.views[0].cards[0].cards[0].card.title, 'Edited');
  assert.deepEqual(h.calls, ['lovelace/config', 'lovelace/config/save']);
});

test('a rejected mode change keeps the original active mode', async () => {
  const h = new StorageHarness('backend');
  h.rejectSave = true;
  await assert.rejects(h._changeStorageMode_('lovelace'), /Unauthorized/);
  assert.equal(h._getStorageMode_(), 'backend');
});

test('switching back copies the current layout to the backend before selecting it', async () => {
  const h = new StorageHarness();
  await h._changeStorageMode_('backend');
  assert.equal(h._getStorageMode_(), 'backend');
  assert.equal(h.backendPayload.cards[0].card.title, 'Edited');
  assert.equal(h.backendPayload.options.storage_mode, 'backend');
  assert.deepEqual(h.calls, ['lovelace/config', 'post dragdrop_storage/layout_test', 'lovelace/config/save']);
});

test('Lovelace mode rejects direct backend writes and saving a YAML-managed dashboard', async () => {
  const h = new StorageHarness();
  await assert.rejects(h._saveLayoutToBackend(h.storageKey, {}), /backend writes are disabled/);
  h.yamlMode = true;
  assert.equal(await h._saveLayoutInner_(true), false);
  assert.deepEqual(h.calls, []);
  assert.match(h.message, /UI-managed/);
});

class LoadHarness extends StorageHarness {
  constructor() {
    super();
    this.cardContainer = { querySelector: () => ({}) };
  }
  _beginDashboardLoadingAnimation_() { return null; }
  _normalizeContainerSizeMode_() { return 'fixed_custom'; }
  _readLocalLayoutSnapshot_() { assert.fail('Lovelace must not read the browser snapshot'); }
  _readRuntimeLayoutCache_() { assert.fail('Lovelace must not resurrect cached cards'); }
  _loadLayoutFromBackend() { assert.fail('Lovelace must not load the backend'); }
  _setDashboardPackages_() {}
  _applyImportedOptions() {}
  _normalizeResponsiveViewportProfiles_(value) { return value || {}; }
  _normalizeResponsiveLayouts_(cards) { return { desktop_landscape: cards }; }
  _getRequestedResponsiveProfile_() { return 'desktop'; }
  _getRequestedResponsiveOrientation_() { return 'landscape'; }
  _getRuntimeResponsiveLayoutKey_() { return 'desktop_landscape'; }
  async _buildCardsFromEntries_(entries, _, options) { this.built = structuredClone(entries); this.replaceExisting = options.replaceExisting; }
  _writeRuntimeLayoutCache_() {}
  _syncEmptyStateUI() {}
  _processCardModOnce() {}
  _resetLayoutHistory_() {}
  _renderTabs() {}
  _applyActiveTab() {}
  _applyVisibility_() {}
}
installInitialLoadMethods(LoadHarness.prototype);
// Assert that the real loader never even consults either fallback source.
LoadHarness.prototype._readLocalLayoutSnapshot_ = () => assert.fail('Read local snapshot');
LoadHarness.prototype._readRuntimeLayoutCache_ = () => assert.fail('Read runtime snapshot');
LoadHarness.prototype._writeRuntimeLayoutCache_ = () => {};

test('initial load and deletion in Lovelace mode ignore stale backend and browser snapshots', async () => {
  const h = new LoadHarness();
  await h._initialLoad(true);
  assert.equal(h.built[0].card.title, 'New');
  assert.equal(h.replaceExisting, true);
  h.__lastSetConfigSource = { ...config(), cards: [] };
  await h._initialLoad(true, { preserveExistingOnEmpty: true });
  assert.deepEqual(h.built, []);
});

class ConfigHarness extends StorageHarness {
  _normalizeDashboardOptions_(value) { return value; }
  _deriveStorageKeyFromConfig_(value) { return value.storage_key; }
  _isInHaEditorPreview() { return false; }
  _isLegacyResponsiveViewportProfiles_() { return false; }
  _initialLoad() { this.reloads = (this.reloads || 0) + 1; }
  _queueSave() { this.queuedSaves = (this.queuedSaves || 0) + 1; }
}
for (const name of [
  '_normalizeAutoScaleMax_', '_normalizeAutoViewportMaxWidth_', '_normalizeCardOverflow_',
  '_normalizeCardShadowIntensity_', '_normalizeContainerSizeMode_', '_normalizeOuterGridBufferCells_',
  '_normalizeResponsiveConnectorLayouts_', '_normalizeResponsiveViewportAspectLocks_', '_normalizeResponsiveViewportProfiles_',
  '_normalizeSidebarAccent_', '_normalizeSidebarCalendarEntities_', '_normalizeSidebarCanvasHeight_', '_normalizeSidebarCards_',
  '_normalizeSidebarDensity_', '_normalizeSidebarHeader_', '_normalizeSidebarItems_', '_normalizeSidebarStyle_', '_normalizeSidebarType_',
  '_normalizeTabsAutoReturnDelay_', '_normalizeTabsPosition_', '_normalizeTabsSize_', '_resolveTabsAutoReturnTarget_',
]) ConfigHarness.prototype[name] = (value) => value;
for (const name of ['_applyContainerSizingFromConfig', '_applyGridVars', '_buildDashboardShellOnce_', '_dbgInit', '_ensureOverlayZFix', '_resizeContainer', '_setDashboardLayers_', '_syncEditorsStorageKey', '_toggleEditMode']) {
  ConfigHarness.prototype[name] = () => {};
}
installSetConfigMethod(ConfigHarness.prototype);

test('setConfig reloads external Lovelace edits with the same key without autosaving them back', () => {
  const previousWindow = globalThis.window;
  globalThis.window = { jsyaml: {}, interact: {} };
  try {
    const h = new ConfigHarness();
    const next = { ...config(), cards: [card('From external API')] };
    h.setConfig(next);
    assert.equal(h.reloads, 1);
    assert.equal(h.queuedSaves || 0, 0);
    assert.equal(h._config.cards[0].card.title, 'From external API');
    h.setConfig(structuredClone(next));
    assert.equal(h.reloads, 1);
    h.__booting = true;
    h.setConfig({ ...next, cards: [] });
    assert.equal(h.reloads, 1);
    assert.equal(h.__pendingStorageConfigReload, true);
  } finally {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  }
});

test('switching back refuses a stale source before touching the backend', async () => {
  const h = new StorageHarness();
  h.server.views[0].cards[0].cards[0].card.title = 'External';
  await assert.rejects(h._changeStorageMode_('backend'), /changed elsewhere/);
  assert.deepEqual(h.calls, ['lovelace/config']);
  assert.equal(h._getStorageMode_(), 'lovelace');
});

test('HA native editor retains Lovelace-owned cards when changing the storage key', async () => {
  const { installHaConfigEditorStatics } = await import('../src/ha/config-editor.js');
  const previousDocument = globalThis.document;
  globalThis.document = {
    createElement: () => ({ style: {}, setAttribute() {}, appendChild() {}, addEventListener() {} }),
  };
  try {
    class NativeCard {}
    installHaConfigEditorStatics(NativeCard);
    const editor = NativeCard.getConfigElement();
    const source = { ...config(), responsive_layouts: { mobile: { portrait: [{ id: 'one', position: { x: 1 } }] } } };
    editor.setConfig(source);
    assert.deepEqual(editor.getConfig().cards, source.cards);
    assert.deepEqual(editor.getConfig().responsive_layouts, source.responsive_layouts);
    editor.setConfig({ ...source, storage_mode: 'backend' });
    assert.equal(editor.getConfig().cards, undefined);
  } finally {
    if (previousDocument === undefined) delete globalThis.document;
    else globalThis.document = previousDocument;
  }
});
