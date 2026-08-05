import test from 'node:test';
import assert from 'node:assert/strict';

import { installTabsLayoutMethods } from '../src/layout/tabs.js';
import { resolveConfiguredActiveTab } from '../src/core/config-lifecycle.js';

class ImportedTabsHarness {
  constructor() {
    this.tabs = [
      { id: 'home', label: 'Home' },
      { id: 'climate', label: 'Climate' },
    ];
    this.defaultTab = 'home';
    this.activeTab = 'home';
    this._activeResponsiveLayoutKey = 'desktop_landscape';
    this._responsiveLayouts = {
      desktop_landscape: [
        { id: 'home-card', tabId: 'home' },
        { id: 'climate-card', tabId: 'climate' },
      ],
    };
    this.wrappers = [
      { dataset: { layoutCardId: 'home-card', tabId: 'home' } },
      { dataset: { layoutCardId: 'climate-card', tabId: 'home' } },
    ];
    this.cardContainer = {
      querySelectorAll: () => this.wrappers,
    };
  }

  _getPrimaryResponsiveLayoutKey_() {
    return 'desktop_landscape';
  }
}

installTabsLayoutMethods(ImportedTabsHarness.prototype);

test('tab switching restores imported card membership from the active responsive layout', () => {
  const harness = new ImportedTabsHarness();

  const changed = harness._syncWrapperTabAssignmentsFromActiveLayout_();

  assert.equal(changed, 1);
  assert.equal(harness.wrappers[0].dataset.tabId, 'home');
  assert.equal(harness.wrappers[1].dataset.tabId, 'climate');
});

test('the latest rapid tab switch wins when an older destination hydrates later', async () => {
  const harness = new ImportedTabsHarness();
  const pending = new Map();
  harness._applyActiveTab = ({ transitionSeq }) => new Promise((resolve) => pending.set(transitionSeq, resolve));
  harness._renderTabs = () => {};
  harness._applyVisibility_ = () => {};
  harness._syncEmptyStateUI = () => {};

  const climateSwitch = harness._switchActiveTab_('climate');
  assert.equal(harness.activeTab, 'climate');
  assert.equal(harness.__tabTransitionTarget, 'climate');

  const homeSwitch = harness._switchActiveTab_('home');
  assert.equal(harness.activeTab, 'home');
  assert.equal(harness.__tabTransitionTarget, 'home');
  assert.equal(harness.__tabTransitionActive, true);

  pending.get(1)?.();
  await climateSwitch;
  assert.equal(harness.activeTab, 'home');
  assert.equal(harness.__tabTransitionTarget, 'home');
  assert.equal(harness.__tabTransitionActive, true);

  pending.get(2)?.();
  assert.equal(await homeSwitch, true);
  assert.equal(harness.activeTab, 'home');
  assert.equal(harness.__tabTransitionTarget, null);
  assert.equal(harness.__tabTransitionActive, false);
});

test('same-dashboard config refresh preserves the selected or transitioning tab', () => {
  const tabs = [
    { id: 'home' },
    { id: 'climate' },
    { id: 'security' },
  ];

  assert.equal(resolveConfiguredActiveTab({
    tabs,
    defaultTab: 'home',
    previousActiveTab: 'climate',
    persistedActiveTab: 'home',
    sameDashboard: true,
  }), 'climate');

  assert.equal(resolveConfiguredActiveTab({
    tabs,
    defaultTab: 'home',
    previousActiveTab: 'climate',
    persistedActiveTab: 'home',
    transitionTarget: 'security',
    sameDashboard: true,
  }), 'security');
});

test('active deferred cards hydrate even when a rebuild committed them already visible', async () => {
  const harness = new ImportedTabsHarness();
  let hydrationArgument = Symbol('not-called');
  harness.cardContainer = {
    querySelectorAll: () => harness.wrappers,
  };
  harness._applyWrapDisplayState_ = () => ({
    becameVisible: false,
    visible: true,
  });
  harness._hydrateVisibleDeferredCards_ = (argument) => {
    hydrationArgument = argument;
    return Promise.resolve(1);
  };
  harness._clearSelection = () => {};
  harness._animateCards = () => {};

  await harness._applyActiveTab({ reason: 'tab-change' });

  assert.equal(hydrationArgument, undefined);
});
