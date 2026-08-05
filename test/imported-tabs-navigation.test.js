import test from 'node:test';
import assert from 'node:assert/strict';

import { installTabsLayoutMethods } from '../src/layout/tabs.js';

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
