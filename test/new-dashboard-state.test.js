import test from 'node:test';
import assert from 'node:assert/strict';

import { installConfigHelperMethods } from '../src/core/config-normalization.js';
import { installInitialLoadMethods } from '../src/core/layout-loader.js';
import { installEmptyStateMethods } from '../src/dashboard/empty-state.js';
import { resolveDashboardStrategyStorageKey } from '../src/ha/registration.js';

class DashboardIdentityHarness {}

installConfigHelperMethods(DashboardIdentityHarness);
installInitialLoadMethods(DashboardIdentityHarness.prototype);
installEmptyStateMethods(DashboardIdentityHarness.prototype);

test('a fresh unidentified dashboard config receives a new instance-scoped storage identity', () => {
  const harness = new DashboardIdentityHarness();
  const firstConfig = { type: 'custom:drag-and-drop-card' };
  const first = harness._resolveIncomingDashboardStorageIdentity_(firstConfig);
  const repeated = harness._resolveIncomingDashboardStorageIdentity_(firstConfig);
  const second = harness._resolveIncomingDashboardStorageIdentity_({
    type: 'custom:drag-and-drop-card',
    cards: [],
    responsive_layouts: {},
  });

  assert.equal(first.anonymous, true);
  assert.equal(first.fresh, true);
  assert.equal(repeated.key, first.key);
  assert.equal(repeated.fresh, false);
  assert.notEqual(second.key, first.key);
  assert.equal(second.fresh, true);
});

test('embedded dashboards without an explicit key retain a deterministic content identity', () => {
  const firstHarness = new DashboardIdentityHarness();
  const secondHarness = new DashboardIdentityHarness();
  const config = {
    type: 'custom:drag-and-drop-card',
    cards: [{ id: 'one', card: { type: 'tile', entity: 'light.kitchen' } }],
  };

  const first = firstHarness._resolveIncomingDashboardStorageIdentity_(config);
  const second = secondHarness._resolveIncomingDashboardStorageIdentity_(structuredClone(config));

  assert.equal(first.anonymous, false);
  assert.equal(first.key, second.key);
});

test('runtime layout cache never falls back to the last unrelated Drag & Drop dashboard', () => {
  const previousCache = globalThis.__ddcRuntimeLayoutCache;
  const previousLast = globalThis.__ddcLastRuntimeLayoutPayload;
  try {
    globalThis.__ddcRuntimeLayoutCache = new Map([
      ['layout_previous', { cards: [{ id: 'old-card' }] }],
      ['default', { cards: [{ id: 'default-card' }] }],
    ]);
    globalThis.__ddcLastRuntimeLayoutPayload = { cards: [{ id: 'global-last-card' }] };

    const harness = new DashboardIdentityHarness();
    harness.storageKey = 'layout_new';
    harness.config = { type: 'custom:drag-and-drop-card', storage_key: 'layout_new' };
    harness._config = { ...harness.config };
    harness._normalizeDashboardPayload_ = (value) => value;
    harness._cloneJson_ = (value) => structuredClone(value);

    assert.deepEqual(harness._runtimeLayoutCacheKeys_(), ['layout_new']);
    assert.equal(harness._readRuntimeLayoutCache_(), null);
  } finally {
    globalThis.__ddcRuntimeLayoutCache = previousCache;
    globalThis.__ddcLastRuntimeLayoutPayload = previousLast;
  }
});

test('the empty dashboard widget is visible immediately in HA dashboard edit mode but not inside the compact card preview', () => {
  const harness = new DashboardIdentityHarness();
  harness._isHaEditorBlockingEmptyState_ = () => true;
  harness._isInHaEditorPreview = () => false;

  assert.equal(harness._shouldShowEmptyDashboardPlaceholder_(), true);

  harness._isInHaEditorPreview = () => true;
  assert.equal(harness._shouldShowEmptyDashboardPlaceholder_(), false);
});

test('community dashboard storage identity does not depend on the previously visited dashboard route', () => {
  const previousWindow = globalThis.window;
  try {
    globalThis.window = { location: { pathname: '/old-dashboard/home' } };
    const first = resolveDashboardStrategyStorageKey({ title: 'Kitchen panel' }, { config: { location_name: 'Home' } });
    globalThis.window.location.pathname = '/kitchen-panel/home';
    const refreshed = resolveDashboardStrategyStorageKey({ title: 'Kitchen panel' }, { config: { location_name: 'Home' } });
    const otherDashboard = resolveDashboardStrategyStorageKey({ title: 'Bedroom panel' }, { config: { location_name: 'Home' } });

    assert.equal(refreshed, first);
    assert.notEqual(otherDashboard, first);
  } finally {
    globalThis.window = previousWindow;
  }
});
