import test from 'node:test';
import assert from 'node:assert/strict';

import { installDashboardConverterMethods } from '../src/storage/dashboard-converter.js';
import { installResponsiveModelMethods } from '../src/layout/responsive-layouts.js';
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

test('converter config persistence reports failure and dispatches only after direct storage finishes', async () => {
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
