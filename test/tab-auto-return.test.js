import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import {
  installTabsLayoutMethods,
  normalizeTabsAutoReturnDelay,
  resolveTabsAutoReturnTarget,
  shouldDeferTabAutoReturnToScreensaver,
} from '../src/layout/tabs.js';

class TabsAutoReturnHarness {}
installTabsLayoutMethods(TabsAutoReturnHarness.prototype);

function createHarness(overrides = {}) {
  return Object.assign(new TabsAutoReturnHarness(), {
    tabs: [
      { id: 'home', label: 'Home' },
      { id: 'lights', label: 'Lights' },
    ],
    defaultTab: 'home',
    activeTab: 'lights',
    tabsAutoReturnEnabled: true,
    tabsAutoReturnTab: 'home',
    tabsAutoReturnDelay: 5 * 60 * 1000,
    screenSaverEnabled: false,
    screenSaverDelay: 15 * 60 * 1000,
    screensaverActive: false,
    editMode: false,
    isConnected: true,
  }, overrides);
}

test('tab auto-return normalization keeps the setting in a safe minute range', () => {
  assert.equal(normalizeTabsAutoReturnDelay(undefined), 5 * 60 * 1000);
  assert.equal(normalizeTabsAutoReturnDelay(10), 60 * 1000);
  assert.equal(normalizeTabsAutoReturnDelay(30 * 60 * 60 * 1000), 24 * 60 * 60 * 1000);
});

test('tab auto-return target falls back to the configured default and then the first tab', () => {
  const tabs = [{ id: 'home' }, { id: 'lights' }];
  assert.equal(resolveTabsAutoReturnTarget(tabs, 'lights', 'home'), 'lights');
  assert.equal(resolveTabsAutoReturnTarget(tabs, 'missing', 'home'), 'home');
  assert.equal(resolveTabsAutoReturnTarget(tabs, 'missing', 'missing-too'), 'home');
});

test('screen saver wins when it is due before or with automatic tab return', () => {
  assert.equal(shouldDeferTabAutoReturnToScreensaver({
    screenSaverEnabled: true,
    screenSaverDelay: 2 * 60 * 1000,
    tabsAutoReturnDelay: 5 * 60 * 1000,
  }), true);
  assert.equal(shouldDeferTabAutoReturnToScreensaver({
    screenSaverEnabled: true,
    screenSaverDelay: 5 * 60 * 1000,
    tabsAutoReturnDelay: 5 * 60 * 1000,
  }), true);
  assert.equal(shouldDeferTabAutoReturnToScreensaver({
    screenSaverEnabled: true,
    screenSaverDelay: 10 * 60 * 1000,
    tabsAutoReturnDelay: 5 * 60 * 1000,
  }), false);
});

test('idle timer returns to the selected tab and then remains stopped on that tab', async () => {
  const harness = createHarness();
  const originalSetTimeout = globalThis.setTimeout;
  const originalClearTimeout = globalThis.clearTimeout;
  let scheduled = null;
  globalThis.setTimeout = (callback, delay) => {
    scheduled = { callback, delay };
    return 91;
  };
  globalThis.clearTimeout = () => {};
  try {
    const switched = [];
    harness._switchActiveTab_ = async (tabId, options) => {
      switched.push({ tabId, reason: options?.reason });
      harness.activeTab = tabId;
      harness._resetTabsAutoReturnTimer_();
      return true;
    };

    assert.equal(harness._resetTabsAutoReturnTimer_(), true);
    assert.equal(scheduled.delay, 5 * 60 * 1000);
    scheduled.callback();
    await Promise.resolve();

    assert.deepEqual(switched, [{ tabId: 'home', reason: 'auto-return' }]);
    assert.equal(harness.activeTab, 'home');
    assert.equal(harness.__tabsAutoReturnTimer, null);
  } finally {
    globalThis.setTimeout = originalSetTimeout;
    globalThis.clearTimeout = originalClearTimeout;
  }
});

test('auto return is paused during editing, an active screen saver, and when screen saver wins', () => {
  assert.equal(createHarness({ editMode: true })._resetTabsAutoReturnTimer_(), false);
  assert.equal(createHarness({ screensaverActive: true })._resetTabsAutoReturnTimer_(), false);
  assert.equal(createHarness({
    screenSaverEnabled: true,
    screenSaverDelay: 2 * 60 * 1000,
  })._resetTabsAutoReturnTimer_(), false);
});

test('tab auto-return settings are exposed in UI, lifecycle, persistence, and API', async () => {
  const [template, lifecycle, api, loader] = await Promise.all([
    readFile(new URL('../src/dashboard/settings-template.js', import.meta.url), 'utf8'),
    readFile(new URL('../src/core/config-lifecycle.js', import.meta.url), 'utf8'),
    readFile(new URL('../src/dashboard/api.js', import.meta.url), 'utf8'),
    readFile(new URL('../src/core/layout-loader.js', import.meta.url), 'utf8'),
  ]);
  assert.match(template, /ddc-setting-tabsAutoReturnEnabled/);
  assert.match(template, /ddc-setting-tabsAutoReturnTab/);
  assert.match(template, /ddc-setting-tabsAutoReturnMinutes/);
  assert.match(template, /The screen saver always takes priority/);
  assert.match(lifecycle, /config\.tabs_auto_return_enabled/);
  assert.match(api, /tabs_auto_return_delay/);
  assert.match(loader, /tabs_auto_return_tab/);
});
