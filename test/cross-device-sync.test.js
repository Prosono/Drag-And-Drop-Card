import test from 'node:test';
import assert from 'node:assert/strict';

import { selectInitialLayoutSnapshot } from '../src/core/layout-loader.js';
import {
  installPersistenceMethods,
  mergeDashboardSnapshots,
  normalizeBackendStorageKeys,
} from '../src/storage/layout-persistence.js';
import { formatLiveViewportMeta } from '../src/layout/viewport-preview.js';

const card = (x, entity = 'light.old') => ({
  id: 'lamp',
  x,
  y: 20,
  width: 240,
  height: 180,
  config: { type: 'light', entity },
});

const snapshot = ({ desktopX = 0, tabletX = 10, entity = 'light.old', theme = 'light', updatedAt }) => ({
  version: 3,
  updated_at: updatedAt,
  options: { dashboard_theme: theme, grid: 10 },
  cards: [card(desktopX, entity)],
  responsive_layouts: {
    desktop_landscape: [card(desktopX, entity)],
    tablet_landscape: [card(tabletX, entity)],
  },
  packages: [],
});

test('backend snapshot is authoritative even when the local browser timestamp is newer', () => {
  const backend = snapshot({ updatedAt: '2026-08-01T10:00:00.000Z' });
  const local = snapshot({ desktopX: 900, updatedAt: '2026-08-02T10:00:00.000Z' });

  const selected = selectInitialLayoutSnapshot(backend, local);

  assert.equal(selected.source, 'backend');
  assert.equal(selected.snapshot.cards[0].x, 0);
});

test('a marked full-dashboard replacement stays authoritative until it reaches the backend', () => {
  const backend = snapshot({ desktopX: 0, updatedAt: '2026-08-01T10:00:00.000Z' });
  const imported = snapshot({ desktopX: 900, updatedAt: '2026-08-02T10:00:00.000Z' });

  const selected = selectInitialLayoutSnapshot(backend, imported, { preferLocal: true });

  assert.equal(selected.source, 'local-replacement');
  assert.equal(selected.snapshot.cards[0].x, 900);
});

test('three-way merge preserves tablet geometry while accepting PC config and option changes', () => {
  const base = snapshot({ updatedAt: '2026-08-01T10:00:00.000Z' });
  const localTablet = snapshot({ tabletX: 60, updatedAt: '2026-08-01T10:02:00.000Z' });
  const remotePc = snapshot({
    desktopX: 120,
    entity: 'light.ceiling',
    theme: 'dark',
    updatedAt: '2026-08-01T10:03:00.000Z',
  });

  const merged = mergeDashboardSnapshots(base, localTablet, remotePc, '2026-08-01T10:04:00.000Z');

  assert.equal(merged.cards[0].x, 120);
  assert.equal(merged.cards[0].config.entity, 'light.ceiling');
  assert.equal(merged.responsive_layouts.desktop_landscape[0].x, 120);
  assert.equal(merged.responsive_layouts.tablet_landscape[0].x, 60);
  assert.equal(merged.responsive_layouts.tablet_landscape[0].config.entity, 'light.ceiling');
  assert.equal(merged.options.dashboard_theme, 'dark');
  assert.equal(merged.updated_at, '2026-08-01T10:04:00.000Z');
});

test('three-way merge preserves independently added cards from both devices', () => {
  const base = snapshot({ updatedAt: '2026-08-01T10:00:00.000Z' });
  const local = structuredClone(base);
  const remote = structuredClone(base);
  local.cards.push({ ...card(300), id: 'tablet-added' });
  remote.cards.push({ ...card(600), id: 'pc-added' });

  const merged = mergeDashboardSnapshots(base, local, remote, '2026-08-01T10:05:00.000Z');

  assert.deepEqual(merged.cards.map((entry) => entry.id), ['lamp', 'tablet-added', 'pc-added']);
});

test('same-field conflicts favor the device that is currently saving', () => {
  const base = snapshot({ tabletX: 10, updatedAt: '2026-08-01T10:00:00.000Z' });
  const local = snapshot({ tabletX: 80, updatedAt: '2026-08-01T10:01:00.000Z' });
  const remote = snapshot({ tabletX: 40, updatedAt: '2026-08-01T10:02:00.000Z' });

  const merged = mergeDashboardSnapshots(base, local, remote, '2026-08-01T10:03:00.000Z');

  assert.equal(merged.responsive_layouts.tablet_landscape[0].x, 80);
});

test('a full dashboard conversion bypasses remote snapshot merging', () => {
  class PersistenceHarness {}
  installPersistenceMethods(PersistenceHarness.prototype);
  const harness = new PersistenceHarness();

  assert.equal(harness._shouldMergeRemoteDashboardSnapshot_(), true);
  harness.__dashboardConverterImporting = true;
  assert.equal(harness._shouldMergeRemoteDashboardSnapshot_(), false);
  harness.__dashboardConverterImporting = false;
  harness.__ddcImportingDashboard = true;
  assert.equal(harness._shouldMergeRemoteDashboardSnapshot_(), false);
});

test('backend inventory distinguishes a missing key from a failed read of an existing key', () => {
  class PersistenceHarness {}
  installPersistenceMethods(PersistenceHarness.prototype);
  const harness = new PersistenceHarness();
  harness._backendOK = true;
  harness.__backendStorageKeys = normalizeBackendStorageKeys(['layout_existing']);

  harness._recordBackendLoadResult_('layout_existing', 'error');
  assert.equal(harness._canInitializeBackendFromLocal_('layout_existing'), false);

  harness._recordBackendLoadResult_('layout_new', 'missing');
  assert.equal(harness._canInitializeBackendFromLocal_('layout_new'), true);
});

test('a failed read of an existing backend snapshot blocks stale browser write-back', async () => {
  let postCount = 0;
  class PersistenceHarness {
    constructor() {
      this.storageKey = 'layout_existing';
      this._backendOK = true;
      this.__backendStorageKeys = new Set([this.storageKey]);
      this._responsiveLayouts = {
        desktop_landscape: [{
          id: 'lamp',
          card: { type: 'entities', entities: ['light.stale'] },
          position: { x: 600, y: 20 },
          size: { width: 240, height: 180 },
        }],
      };
      this.hass = {
        callApi: async (method) => {
          if (method === 'get') throw new Error('temporary backend read failure');
          postCount += 1;
          return { ok: true };
        },
      };
    }
    _persistCurrentResponsiveProfileToMemory_() {}
    _syncLiveCardConfigsIntoResponsiveLayouts_() {}
    _recordLayoutHistoryCheckpoint_() {}
    _getPrimaryResponsiveLayoutKey_() { return 'desktop_landscape'; }
    _captureCurrentLayoutEntries_() { return []; }
    _cloneJson_(value) { return structuredClone(value); }
    _serializeResponsiveLayouts_(layouts) { return structuredClone(layouts); }
    _exportDashboardPackages_() { return []; }
    _exportableOptions() { return { storage_key: this.storageKey }; }
    _normalizeDashboardPayload_(value) { return structuredClone(value); }
    _deleteParkedSidebarOptions_() {}
    _writeRuntimeLayoutCache_() {}
    _updateApplyBtn() {}
    _scheduleBackendSnapshotRetry_() {}
    _dbgPush() {}
  }
  installPersistenceMethods(PersistenceHarness.prototype);
  const harness = new PersistenceHarness();

  const result = await harness._saveLayoutInner_(true);

  assert.equal(result, false);
  assert.equal(postCount, 0);
  assert.equal(harness.__dirty, true);
});

test('an in-flight DEV save cannot continue after the card switches to the PRD storage key', async () => {
  let resolveGet;
  const posts = [];
  class PersistenceHarness {
    constructor() {
      this.storageKey = 'layout_dev';
      this.__storageIdentityEpoch = 1;
      this._backendOK = true;
      this.__backendStorageKeys = new Set(['layout_dev', 'layout_prd']);
      this._responsiveLayouts = {
        desktop_landscape: [{
          id: 'dev-card',
          card: { type: 'entities', entities: ['light.dev'] },
          position: { x: 20, y: 20 },
          size: { width: 240, height: 180 },
        }],
      };
      this.hass = {
        callApi: async (method, path) => {
          if (method === 'get') return new Promise((resolve) => { resolveGet = resolve; });
          posts.push(path);
          return { ok: true };
        },
      };
    }
    _getCurrentDashboardUrlPath_() { return 'dev-dashboard'; }
    _persistCurrentResponsiveProfileToMemory_() {}
    _syncLiveCardConfigsIntoResponsiveLayouts_() {}
    _recordLayoutHistoryCheckpoint_() {}
    _getPrimaryResponsiveLayoutKey_() { return 'desktop_landscape'; }
    _captureCurrentLayoutEntries_() { return []; }
    _cloneJson_(value) { return structuredClone(value); }
    _serializeResponsiveLayouts_(layouts) { return structuredClone(layouts); }
    _exportDashboardPackages_() { return []; }
    _exportableOptions() { return { storage_key: this.storageKey }; }
    _normalizeDashboardPayload_(value) { return structuredClone(value); }
    _deleteParkedSidebarOptions_() {}
    _writeRuntimeLayoutCache_() {}
    _updateApplyBtn() {}
    _dbgPush() {}
  }
  installPersistenceMethods(PersistenceHarness.prototype);
  const harness = new PersistenceHarness();

  const save = harness._saveLayoutInner_(true);
  await Promise.resolve();
  await Promise.resolve();
  harness.storageKey = 'layout_prd';
  harness.__storageIdentityEpoch += 1;
  resolveGet(snapshot({ updatedAt: '2026-08-01T10:00:00.000Z' }));

  assert.equal(await save, false);
  assert.deepEqual(posts, []);
  assert.equal(harness.__lastSyncedDashboardPayload, undefined);
});

test('Live View text reports CSS viewport and describes a configured width cap', () => {
  assert.equal(
    formatLiveViewportMeta({ width: 1295, height: 923, profileLabel: 'Tablet', maxWidth: 2560 }),
    'Live · 1295×923 CSS px · Tablet · width cap 2560px'
  );
});
