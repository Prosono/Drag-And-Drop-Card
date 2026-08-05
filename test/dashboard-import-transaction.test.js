import test from 'node:test';
import assert from 'node:assert/strict';

import { installDashboardConverterMethods } from '../src/storage/dashboard-converter.js';
import { installResponsiveModelMethods } from '../src/layout/responsive-layouts.js';
import {
  installLifecycleMethods,
  shouldDeferBackendRefresh,
  shouldLoadBackendSnapshotAfterProbe,
} from '../src/core/element-lifecycle.js';
import { installInitialLoadMethods } from '../src/core/layout-loader.js';
import {
  collectDdcCardStorageLocations,
  installPersistenceMethods,
  resolveDdcCardStorageLocation,
} from '../src/storage/layout-persistence.js';

class ImportTransactionHarness {
  constructor() {
    this.gridSize = 10;
    this.tabsPosition = 'top';
    this.tabsSize = 100;
    this.containerSizeMode = 'auto';
    this.containerPreset = 'fhd';
    this.containerPresetOrient = 'landscape';
    this.autoResizeCards = true;
    this.storageKey = 'layout_import_test';
    this._config = { storage_key: this.storageKey };
    this._nextId = 0;
  }

  _genLayoutCardId_() {
    this._nextId += 1;
    return `imported-${this._nextId}`;
  }

  _normalizeTabsPosition_(value) { return value || 'top'; }
  _normalizeTabsSize_(value) { return Number(value) || 100; }
  _normalizeContainerSizeMode_(value) { return value || 'auto'; }
  _normalizeCardOverflow_(value) { return value || 'auto'; }
  _normalizeAutoViewportMaxWidth_() { return 0; }
  _normalizeAutoScaleMax_() { return 0; }
  _normalizeOuterGridBufferCells_(value) { return Number(value) || 1; }
  _normalizeResponsiveViewportAspectLocks_() { return {}; }
  _normalizeResponsiveConnectorLayouts_() { return {}; }
  _serializeResponsiveConnectorLayouts_() { return {}; }
  _normalizeScreenSaverStyle_() { return 'visionos_glass'; }
  _getScreenSaverCustomImage_() { return ''; }
  _normalizeScreenSaverEntities_() { return []; }
  _normalizeCardLayerIds_(value) { return Array.isArray(value) ? value : []; }
  _clampYToCanvasTop_(value) { return value; }
  _sanitizeCardConfigForStorage_(value) { return structuredClone(value); }
  _cloneJson_(value) { return structuredClone(value); }
  _normalizeDashboardPayload_(value) { return structuredClone(value); }
  _normalizeDashboardOptions_(value) { return structuredClone(value); }
  _deleteParkedSidebarOptions_() {}
  _exportDashboardPackages_() { return []; }
  _resolveFixedSize() { return { w: 1920, h: 1080 }; }
  _getResponsiveViewportProfile_(profile) {
    return profile === 'mobile'
      ? { width: 500, height: 1080 }
      : profile === 'tablet'
        ? { width: 1280, height: 800 }
        : { width: 1920, height: 1080 };
  }
  _normalizeTabId(tabId) {
    const valid = new Set((this.tabs || []).map((tab) => tab.id));
    return valid.has(tabId) ? tabId : (this.defaultTab || this.tabs?.[0]?.id || 'default');
  }
  _shouldUseSharedResponsiveLayout_() { return false; }
  _exportableOptions() {
    return {
      storage_key: this.storageKey,
      tabs: structuredClone(this.tabs || []),
      default_tab: this.defaultTab,
      container_size_mode: 'auto',
    };
  }
}

installResponsiveModelMethods(ImportTransactionHarness.prototype);
installDashboardConverterMethods(ImportTransactionHarness.prototype);

test('converted tab membership survives the exact committed snapshot and reload formats', () => {
  const source = new ImportTransactionHarness();
  const converted = source._convertLovelaceDashboardToDdc_({
    title: 'Wall panel',
    views: [
      {
        title: 'Home',
        path: 'home',
        cards: [
          { type: 'tile', entity: 'light.kitchen' },
          { type: 'entities', entities: ['switch.coffee'] },
        ],
      },
      {
        title: 'Climate',
        path: 'climate',
        cards: [{ type: 'thermostat', entity: 'climate.living_room' }],
      },
      {
        title: 'Security',
        path: 'security',
        cards: [{ type: 'alarm-panel', entity: 'alarm_control_panel.home' }],
      },
    ],
  });
  source.tabs = structuredClone(converted.options.tabs);
  source.defaultTab = converted.options.default_tab;
  source._responsiveLayouts = source._normalizeResponsiveLayouts_(converted.cards, converted.responsive_layouts);

  const snapshot = source._createDashboardConverterSnapshot_(converted);
  const reloadedPayload = JSON.parse(JSON.stringify(snapshot));
  const reloaded = new ImportTransactionHarness();
  reloaded.tabs = structuredClone(reloadedPayload.options.tabs);
  reloaded.defaultTab = reloadedPayload.options.default_tab;
  const layouts = reloaded._normalizeResponsiveLayouts_(reloadedPayload.cards, reloadedPayload.responsive_layouts);
  const expectedMembership = new Map(reloadedPayload.cards.map((entry) => [entry.id, entry.tabId]));

  for (const entries of Object.values(layouts)) {
    assert.equal(entries.length, reloadedPayload.cards.length);
    entries.forEach((entry) => {
      assert.equal(entry.tabId, expectedMembership.get(entry.id));
      assert.ok(entry.card?.type);
    });
  }
  assert.deepEqual(new Set(reloadedPayload.cards.map((entry) => entry.tabId)), new Set(['home', 'climate', 'security']));
});

test('apply uses one canonical replacement snapshot and clears stale dashboard-scoped state', async () => {
  const harness = new ImportTransactionHarness();
  harness._config = {
    storage_key: harness.storageKey,
    layers_enabled: true,
    layers: [{ id: 'old-layer' }],
    sidebar_enabled: true,
    sidebar_cards: [{ id: 'old-sidebar-card' }],
    background_mode: 'image',
  };
  harness.__initialLoadSeq = 4;
  harness.__backendRefreshPending = true;
  harness.layers = [{ id: 'old-layer' }];
  harness.activeLayerIds = ['old-layer'];
  harness.sidebarCards = [{ id: 'old-sidebar-card' }];
  harness._dashboardPackages = [{ id: 'old-package' }];
  let built = false;
  let wrappers = [];
  let committedSnapshot = null;
  harness.cardContainer = {
    querySelectorAll: () => built ? wrappers : [],
  };
  harness._normalizeResponsiveConnectorLayouts_ = () => ({});
  harness._setDashboardPackages_ = (packages) => { harness._dashboardPackages = structuredClone(packages); };
  harness._setDashboardLayers_ = (layers) => { harness.layers = structuredClone(layers); };
  harness._applyImportedOptions = (options) => { harness._config = { ...harness._config, ...structuredClone(options) }; };
  harness._applyOptionsToDom = () => {};
  harness._applyContainerSizingFromConfig = () => {};
  harness._applyAutoScale = () => {};
  harness._getRequestedResponsiveProfile_ = () => 'desktop';
  harness._getRequestedResponsiveOrientation_ = () => 'landscape';
  harness._buildCardsFromEntries_ = async (entries) => {
    wrappers = entries.map((entry) => ({ dataset: { layoutCardId: entry.id, tabId: entry.tabId } }));
    built = true;
  };
  harness._resizeContainer = () => {};
  harness._syncTabsPlacement_ = () => {};
  harness._renderTabs = () => {};
  harness._renderLayersBar_ = () => {};
  harness._applyActiveTab = () => {};
  harness._applyVisibility_ = () => {};
  harness._syncTabsWidth_ = () => {};
  harness._settleDashboardConverterImportedCardHeights_ = async () => false;
  harness._renderConnectors_ = () => {};
  harness._syncEmptyStateUI = () => {};
  harness._hideEmptyPlaceholder = () => {};
  harness._persistDashboardConverterSnapshot_ = async (snapshot) => {
    committedSnapshot = structuredClone(snapshot);
    return { snapshot, backend: 'saved' };
  };
  harness._persistDashboardConverterConfig_ = async () => true;
  harness._toast = () => {};

  const converted = harness._convertLovelaceDashboardToDdc_({
    views: [
      { title: 'Home', path: 'home', cards: [{ type: 'tile', entity: 'light.kitchen' }] },
      { title: 'Climate', path: 'climate', cards: [{ type: 'thermostat', entity: 'climate.living_room' }] },
    ],
  });
  assert.equal(await harness._applyConvertedDashboardPayload_(converted), true);

  assert.ok(committedSnapshot);
  assert.deepEqual(committedSnapshot.options.tabs.map((tab) => tab.id), ['home', 'climate']);
  assert.deepEqual(new Set(committedSnapshot.cards.map((entry) => entry.tabId)), new Set(['home', 'climate']));
  assert.equal(committedSnapshot.options.layers_enabled, false);
  assert.deepEqual(committedSnapshot.options.layers, []);
  assert.equal(committedSnapshot.options.sidebar_enabled, false);
  assert.deepEqual(harness.layers, []);
  assert.deepEqual(harness.activeLayerIds, []);
  assert.deepEqual(harness.sidebarCards, []);
  assert.deepEqual(harness._dashboardPackages, []);
  assert.equal(converted.summary.persisted_to_backend, 'saved');
  assert.equal(converted.summary.persisted_to_lovelace, true);
  assert.equal(harness.__initialLoadSeq, 5);
  assert.equal(harness.__backendRefreshPending, false);
});

test('backend refresh is deferred throughout a dashboard import', () => {
  assert.equal(shouldDeferBackendRefresh({}), false);
  assert.equal(shouldDeferBackendRefresh({ __booting: true }), true);
  assert.equal(shouldDeferBackendRefresh({ __dashboardConverterImporting: true }), true);
  assert.equal(shouldDeferBackendRefresh({ __ddcImportingDashboard: true }), true);
});

test('an editor-active empty canvas still loads the backend snapshot', () => {
  const emptyEditor = {
    _isHaEditorBlockingEmptyState_: () => true,
    cardContainer: { querySelector: () => null },
  };
  const populatedEditor = {
    _isHaEditorBlockingEmptyState_: () => true,
    cardContainer: { querySelector: () => ({ dataset: { layoutCardId: 'card-1' } }) },
  };

  assert.equal(shouldLoadBackendSnapshotAfterProbe(emptyEditor), true);
  assert.equal(shouldLoadBackendSnapshotAfterProbe(populatedEditor), false);
});

test('a pending backend refresh survives until a disconnected card is reconnected', async () => {
  class RefreshHarness {
    constructor() {
      this.storageKey = 'layout_import_test';
      this._backendOK = true;
      this.isConnected = false;
      this.cardContainer = { querySelector: () => null };
      this.loads = [];
    }
    _isHaEditorBlockingEmptyState_() { return true; }
    _initialLoad(force, options) { this.loads.push({ force, options }); }
  }
  installLifecycleMethods(RefreshHarness.prototype);
  const harness = new RefreshHarness();

  harness._queueBackendRefresh_('probe-finished');
  await new Promise((resolve) => setTimeout(resolve, 10));
  assert.equal(harness.loads.length, 0);
  assert.equal(harness.__backendRefreshPending, true);

  harness.isConnected = true;
  harness._queueBackendRefresh_('reconnected');
  await new Promise((resolve) => setTimeout(resolve, 10));
  assert.equal(harness.loads.length, 1);
  assert.equal(harness.loads[0].options.reason, 'reconnected');
  assert.equal(harness.__backendRefreshPending, false);
});

test('a transient backend probe failure retries and refreshes the empty dashboard', async () => {
  class ProbeHarness {
    constructor() {
      this.storageKey = 'layout_import_test';
      this.__booted = true;
      this.__cfgReady = true;
      this.isConnected = true;
      this.cardContainer = { querySelector: () => null, children: [] };
      this.probes = 0;
      this.loads = 0;
    }
    _hasHassApi_() { return !!this._hass?.callApi; }
    async _probeBackend() {
      this.probes += 1;
      this._backendOK = this.probes >= 2;
      return this._backendOK;
    }
    _isHaEditorBlockingEmptyState_() { return true; }
    _initialLoad() { this.loads += 1; }
  }
  installLifecycleMethods(ProbeHarness.prototype);
  const harness = new ProbeHarness();

  harness.hass = { callApi: async () => ({}) };
  await new Promise((resolve) => setTimeout(resolve, 140));

  assert.equal(harness.probes, 2);
  assert.equal(harness.loads, 1);
  assert.equal(harness._backendOK, true);
});

test('an in-flight backend load cannot apply stale state after an import starts', async () => {
  let resolveBackend;
  let appliedOptions = false;
  let appliedPackages = false;
  class InitialLoadHarness {
    constructor() {
      this.storageKey = 'layout_target';
      this._backendOK = true;
      this.__initialLoadSeq = 0;
      this.__booting = false;
      this._config = {};
    }

    _beginDashboardLoadingAnimation_() { return null; }
    _dbgPush() {}
    _readLocalLayoutSnapshot_() { return null; }
    _hasPendingDashboardReplacement_() { return false; }
    _loadLayoutFromBackend() {
      return new Promise((resolve) => { resolveBackend = resolve; });
    }
    _cloneJson_(value) { return structuredClone(value); }
    _normalizeDashboardPayload_(value) { return structuredClone(value); }
    _applyImportedOptions() { appliedOptions = true; }
    _setDashboardPackages_() { appliedPackages = true; }
  }
  installInitialLoadMethods(InitialLoadHarness.prototype);
  const harness = new InitialLoadHarness();

  const load = harness._initialLoad(true);
  harness.__dashboardConverterImporting = true;
  harness.__initialLoadSeq += 1;
  resolveBackend({
    options: { tabs: [{ id: 'stale', label: 'Stale' }], default_tab: 'stale' },
    cards: [{ id: 'stale-card', tabId: 'stale', card: { type: 'tile' } }],
  });
  await load;

  assert.equal(appliedOptions, false);
  assert.equal(appliedPackages, false);
  assert.equal(harness.__booting, false);
});

test('Lovelace storage lookup finds the correct keyed DDC card inside sections', () => {
  const config = {
    views: [
      {
        title: 'First',
        cards: [{ type: 'custom:drag-and-drop-card', storage_key: 'layout_other' }],
      },
      {
        title: 'Target',
        type: 'sections',
        sections: [{
          cards: [{ type: 'custom:drag-and-drop-card', storage_key: 'layout_target' }],
        }],
      },
    ],
  };

  assert.equal(collectDdcCardStorageLocations(config).length, 2);
  const target = resolveDdcCardStorageLocation(config, { storageKey: 'layout_target' });
  assert.equal(target.viewIndex, 1);
  assert.equal(target.card.storage_key, 'layout_target');
  assert.deepEqual(target.path, ['views', 1, 'sections', 0, 'cards', 0]);
});

test('ambiguous unidentified DDC cards are never resolved by picking the first dashboard card', () => {
  const config = {
    views: [{
      cards: [
        { type: 'custom:drag-and-drop-card' },
        { type: 'custom:drag-and-drop-card' },
      ],
    }],
  };

  assert.equal(resolveDdcCardStorageLocation(config, { currentView: 0 }), null);
});

test('converter config persistence dispatches only as fallback after direct storage fails', async () => {
  const harness = new ImportTransactionHarness();
  const order = [];
  harness._persistThisCardConfigToStorage_ = async () => {
    order.push('storage');
    return false;
  };
  harness._dispatchDashboardConverterConfigChanged_ = () => order.push('event');

  assert.equal(await harness._persistDashboardConverterConfig_(), false);
  assert.deepEqual(order, ['storage', 'event']);
});

test('converter config persistence does not dispatch a competing event after storage succeeds', async () => {
  const harness = new ImportTransactionHarness();
  const order = [];
  harness._persistThisCardConfigToStorage_ = async () => {
    order.push('storage');
    return true;
  };
  harness._dispatchDashboardConverterConfigChanged_ = () => order.push('event');

  assert.equal(await harness._persistDashboardConverterConfig_(), true);
  assert.deepEqual(order, ['storage']);
});

test('ID seeding updates the keyed target instead of the first unidentified DDC card', async () => {
  class StorageHarness {
    constructor() {
      this.storageKey = 'layout_target';
      this._config = { storage_key: this.storageKey };
      this.config = {};
      this.saved = null;
      this.hass = {
        callWS: async (message) => {
          if (message.type === 'lovelace/config/save') {
            this.saved = structuredClone(message.config);
            return true;
          }
          return structuredClone({
            views: [{
              cards: [
                { type: 'custom:drag-and-drop-card' },
                { type: 'custom:drag-and-drop-card', storage_key: 'layout_target' },
              ],
            }],
          });
        },
      };
    }

    _getCurrentDashboardUrlPath_() { return null; }
    _getLovelace() { return { current_view: 0 }; }
  }
  installPersistenceMethods(StorageHarness.prototype);
  const harness = new StorageHarness();
  harness._getCurrentDashboardUrlPath_ = () => null;
  harness._getLovelace = () => ({ current_view: 0 });

  const id = await harness._ensureCardIdSeededInStorage_();

  assert.ok(id);
  assert.equal(harness.saved.views[0].cards[0].id, undefined);
  assert.equal(harness.saved.views[0].cards[1].id, id);
  assert.equal(harness.config.id, id);
  assert.equal(harness._config.id, id);
});

test('full card persistence seeds its ID and imported tabs in one Lovelace save', async () => {
  class StorageHarness {
    constructor() {
      this.storageKey = 'layout_target';
      this._config = {
        storage_key: this.storageKey,
        tabs: [
          { id: 'home', label: 'Home' },
          { id: 'climate', label: 'Climate' },
        ],
        default_tab: 'home',
      };
      this.config = {};
      this._responsiveLayouts = {
        desktop_landscape: [
          {
            id: 'imported-home',
            tabId: 'home',
            position: { x: 0, y: 0 },
            size: { width: 300, height: 200 },
            card: { type: 'tile', entity: 'light.kitchen' },
          },
          {
            id: 'imported-climate',
            tabId: 'climate',
            position: { x: 320, y: 0 },
            size: { width: 300, height: 200 },
            card: { type: 'thermostat', entity: 'climate.living_room' },
          },
        ],
      };
      this.messages = [];
      this.hass = {
        callWS: async (message) => {
          this.messages.push(structuredClone(message));
          if (message.type === 'lovelace/config/save') return true;
          return structuredClone({
            views: [{
              cards: [
                { type: 'custom:drag-and-drop-card' },
                { type: 'custom:drag-and-drop-card', storage_key: 'layout_target' },
              ],
            }],
          });
        },
      };
    }

    _getCurrentDashboardUrlPath_() { return null; }
    _getLovelace() { return { current_view: 0 }; }
    _getPrimaryResponsiveLayoutKey_() { return 'desktop_landscape'; }
    _serializeResponsiveLayouts_(layouts) { return structuredClone(layouts); }
    _cloneJson_(value) { return structuredClone(value); }
    requestUpdate() {}
  }
  installPersistenceMethods(StorageHarness.prototype);
  const harness = new StorageHarness();
  harness._getCurrentDashboardUrlPath_ = () => null;
  harness._getLovelace = () => ({ current_view: 0 });

  assert.equal(await harness._persistThisCardConfigToStorage_(), true);

  const saves = harness.messages.filter((message) => message.type === 'lovelace/config/save');
  assert.equal(saves.length, 1);
  const untouched = saves[0].config.views[0].cards[0];
  const stored = saves[0].config.views[0].cards[1];
  assert.equal(untouched.id, undefined);
  assert.ok(stored.id);
  assert.equal(stored.default_tab, 'home');
  assert.deepEqual(stored.tabs.map((tab) => tab.id), ['home', 'climate']);
  assert.deepEqual(new Set(stored.cards.map((entry) => entry.tabId)), new Set(['home', 'climate']));
  assert.equal(harness.config.id, stored.id);
  assert.equal(harness._config.id, stored.id);
});
