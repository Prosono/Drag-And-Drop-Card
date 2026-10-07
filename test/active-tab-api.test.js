import test from 'node:test';
import assert from 'node:assert/strict';
import { installDashboardApiMethods } from '../src/dashboard/api.js';
import { installTabsLayoutMethods } from '../src/layout/tabs.js';

class TabsApiHarness extends EventTarget {
  constructor() {
    super();
    this.tabs = [{ id: 'home', label: 'Home' }, { id: 'lights', label: 'Lights' }, { id: 'climate', label: 'Climate' }];
    this.activeTab = 'lights';
    this.defaultTab = 'home';
    this.storageKey = 'test-tabs';
    this._config = {};
    this.options = { tabs: this.tabs, default_tab: 'home', animate_cards: false };
    this.dirtyCount = 0;
    this.saved = [];
  }
  _exportableOptions() { return structuredClone(this.options); }
  _applyImportedOptions(patch) {
    this.options = { ...this.options, ...structuredClone(patch) };
    if (patch.tabs) this.tabs = patch.tabs;
    if (patch.default_tab) this.defaultTab = patch.default_tab;
    if (!this.tabs.some((tab) => tab.id === this.activeTab)) this.activeTab = this.defaultTab;
  }
  _markDirty() { this.dirtyCount += 1; }
  async _persistDashboardApiSettings_() { this.saved.push(this._exportableOptions()); return { backend: true }; }
  _resetTabsAutoReturnTimer_() {}
  _applyActiveTab() {}
  _renderTabs() {}
  _applyVisibility_() {}
}
const stubs = Object.getOwnPropertyDescriptors(TabsApiHarness.prototype);
installDashboardApiMethods(TabsApiHarness.prototype);
installTabsLayoutMethods(TabsApiHarness.prototype);
Object.defineProperties(TabsApiHarness.prototype, stubs);

function observe(h) {
  const events = [];
  h.addEventListener('ddc:active-tab-changed', (event) => events.push(event));
  return events;
}

test('active_tab is readable in the public API and listed as runtime state', () => {
  const h = new TabsApiHarness();
  const api = h._getDashboardLocalApi_();
  assert.equal(api.settings.get('active_tab'), 'lights');
  assert.equal(api.settings.get('activeTab'), 'lights');
  assert.equal(api.settings.all().active_tab, 'lights');
  assert.equal(api.settings.options().active_tab, 'lights');
  assert.deepEqual(api.settings.list().find((item) => item.key === 'active_tab'), {
    key: 'active_tab', type: 'string', value: 'lights', boolean: false, runtime: true,
  });
  assert.equal(h._exportableOptions().active_tab, undefined);
});

test('navigation switches only the owner, remembers the browser tab, and never persists dashboard state', async (t) => {
  const previous = globalThis.localStorage;
  const stored = new Map();
  globalThis.localStorage = { setItem: (key, value) => stored.set(key, value) };
  t.after(() => {
    if (previous === undefined) delete globalThis.localStorage;
    else globalThis.localStorage = previous;
  });
  const h = new TabsApiHarness();
  const other = new TabsApiHarness();
  const events = observe(h);
  const otherEvents = observe(other);
  const api = h._getDashboardLocalApi_();
  const result = await api.settings.set('active_tab', 'home', { persist: true });
  assert.equal(result.active_tab, 'home');
  assert.equal(h.activeTab, 'home');
  assert.equal(h.defaultTab, 'home');
  assert.equal(other.activeTab, 'lights');
  assert.equal(otherEvents.length, 0);
  assert.equal(stored.get('ddc_lasttab_test-tabs'), 'home');
  assert.equal(h.dirtyCount, 0);
  assert.deepEqual(h.saved, []);
  assert.equal(h._config.active_tab, undefined);
  assert.equal(events.length, 1);
  assert.equal(events[0].bubbles, true);
  assert.equal(events[0].composed, true);
  assert.deepEqual(events[0].detail, { tabId: 'home', previousTabId: 'lights', reason: 'api', storageKey: 'test-tabs' });
});

test('invalid IDs and boolean helpers reject before changing any other settings', async () => {
  const h = new TabsApiHarness();
  const api = h._getDashboardLocalApi_();
  const events = observe(h);
  for (const value of ['Home', 'missing', '', null, undefined, true, 42, {}]) {
    await assert.rejects(api.settings.setMany({ animate_cards: true, active_tab: value }, { persist: true }), /Unknown active_tab/);
  }
  await assert.rejects(api.settings.toggle('active_tab'), /Unknown active_tab/);
  await assert.rejects(api.settings.enable('active_tab'), /Unknown active_tab/);
  await assert.rejects(api.settings.disable('active_tab'), /Unknown active_tab/);
  assert.equal(h.activeTab, 'lights');
  assert.equal(h.options.animate_cards, false);
  assert.equal(h.dirtyCount, 0);
  assert.deepEqual(h.saved, []);
  assert.equal(events.length, 0);
});

test('selecting the current tab does not emit events or mark the layout dirty', async () => {
  const h = new TabsApiHarness();
  const events = observe(h);
  let settingsEvents = 0;
  h._getDashboardLocalApi_().settings.subscribe(() => settingsEvents++);
  await h._getDashboardLocalApi_().settings.set('active_tab', 'lights');
  assert.equal(events.length, 0);
  assert.equal(settingsEvents, 0);
  assert.equal(h.dirtyCount, 0);
});

test('mixed setMany persists ordinary options but excludes active_tab', async () => {
  const h = new TabsApiHarness();
  const api = h._getDashboardLocalApi_();
  const settingsEvents = [];
  const off = api.settings.subscribe((detail) => settingsEvents.push(detail));
  await api.settings.setMany({ animate_cards: true, active_tab: 'climate' }, { persist: true });
  assert.equal(h.activeTab, 'climate');
  assert.equal(h.defaultTab, 'home');
  assert.equal(h.saved.length, 1);
  assert.equal(h.saved[0].animate_cards, true);
  assert.equal(h.saved[0].active_tab, undefined);
  assert.equal(settingsEvents.length, 1);
  assert.equal(settingsEvents[0].before.active_tab, 'lights');
  assert.equal(settingsEvents[0].after.active_tab, 'climate');
  off();
});

test('setMany can introduce a new tab and select it with one navigation event', async () => {
  const h = new TabsApiHarness();
  const events = observe(h);
  await h._getDashboardLocalApi_().settings.setMany({ tabs: [{ id: 'new' }], default_tab: 'new', active_tab: 'new' });
  assert.equal(h.activeTab, 'new');
  assert.equal(events.length, 1);
  assert.equal(events[0].detail.previousTabId, 'lights');
  assert.equal(events[0].detail.tabId, 'new');
});

test('tab bar and automatic-return paths emit the same public event', async () => {
  const h = new TabsApiHarness();
  const events = observe(h);
  await h._switchActiveTab_('climate');
  await h._switchActiveTab_('home', { reason: 'auto-return' });
  assert.deepEqual(events.map((event) => [event.detail.tabId, event.detail.reason]), [
    ['climate', 'tab-change'], ['home', 'auto-return'],
  ]);
});

test('a superseded slow navigation cannot emit a stale completion event', async () => {
  const h = new TabsApiHarness();
  const pending = new Map();
  h._applyActiveTab = () => new Promise((resolve) => pending.set(h.activeTab, resolve));
  const events = observe(h);
  const api = h._getDashboardLocalApi_();
  const first = api.settings.set('active_tab', 'home');
  const second = api.settings.set('active_tab', 'climate');
  pending.get('climate')();
  await second;
  pending.get('home')();
  const staleResult = await first;
  assert.equal(h.activeTab, 'climate');
  assert.equal(staleResult.active_tab, 'climate');
  assert.deepEqual(events.map((event) => event.detail.tabId), ['climate']);
});
