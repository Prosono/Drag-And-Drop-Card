import test from 'node:test';
import assert from 'node:assert/strict';

import { installTabsLayoutMethods } from '../src/layout/tabs.js';

class TabsHarness {}
installTabsLayoutMethods(TabsHarness.prototype);

function createHarness({ tabs, hideTabsWhenSingle, hasLayerMenu = false }) {
  const classes = new Set();
  const attributes = new Set();
  const harness = new TabsHarness();

  harness.tabs = tabs;
  harness.hideTabsWhenSingle = hideTabsWhenSingle;
  harness.tabsPosition = 'top';
  harness.containerSizeMode = 'fixed_custom';
  harness.rootEl = {
    classList: {
      toggle(name, enabled) {
        if (enabled) classes.add(name);
        else classes.delete(name);
      },
    },
  };
  harness._hasLayerMenu_ = () => hasLayerMenu;
  harness._isSidebarEnabled_ = () => false;
  harness._isSidebarNavigationActive_ = () => false;
  harness._isExplicitViewportPreview_ = () => false;
  harness._normalizeContainerSizeMode_ = value => value;
  harness.toggleAttribute = (name, enabled) => {
    if (enabled) attributes.add(name);
    else attributes.delete(name);
  };

  return { harness, classes, attributes };
}

test('hidden single top tab does not enable fixed-canvas tab offset', () => {
  const { harness, classes, attributes } = createHarness({
    tabs: [{ id: 'home' }],
    hideTabsWhenSingle: true,
  });

  harness._syncTabsPlacement_();

  assert.equal(classes.has('ddc-fixed-canvas-tabs-top'), false);
  assert.equal(attributes.has('ddc-top-tabs-fixed-canvas'), false);
});

test('visible top tabs keep fixed-canvas tab placement', () => {
  const { harness, classes, attributes } = createHarness({
    tabs: [{ id: 'home' }],
    hideTabsWhenSingle: false,
  });

  harness._syncTabsPlacement_();

  assert.equal(classes.has('ddc-fixed-canvas-tabs-top'), true);
  assert.equal(attributes.has('ddc-top-tabs-fixed-canvas'), true);
});

test('layer menu keeps the tab bar fixed when the only tab is hidden', () => {
  const { harness, classes, attributes } = createHarness({
    tabs: [{ id: 'home' }],
    hideTabsWhenSingle: true,
    hasLayerMenu: true,
  });

  harness._syncTabsPlacement_();

  assert.equal(classes.has('ddc-fixed-canvas-tabs-top'), true);
  assert.equal(attributes.has('ddc-top-tabs-fixed-canvas'), true);
});
