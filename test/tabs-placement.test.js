import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import { installTabsLayoutMethods, moveTabById } from '../src/layout/tabs.js';
import {
  installConfigHelperMethods,
  normalizeCardOverflow,
  normalizeTabsSize,
} from '../src/core/config-normalization.js';
import { installCardBuilderMethods } from '../src/cards/card-renderer.js';

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

test('tabs can be moved earlier and later without mutating the source list', () => {
  const source = [{ id: 'home' }, { id: 'energy' }, { id: 'media' }];

  const movedEarlier = moveTabById(source, 'media', -1);
  const movedLater = moveTabById(movedEarlier, 'home', 1);

  assert.deepEqual(source.map((tab) => tab.id), ['home', 'energy', 'media']);
  assert.deepEqual(movedEarlier.map((tab) => tab.id), ['home', 'media', 'energy']);
  assert.deepEqual(movedLater.map((tab) => tab.id), ['media', 'home', 'energy']);
});

test('tab moves at list boundaries are safe no-ops', () => {
  const source = [{ id: 'home' }, { id: 'energy' }];

  assert.deepEqual(moveTabById(source, 'home', -1), source);
  assert.deepEqual(moveTabById(source, 'energy', 1), source);
  assert.deepEqual(moveTabById(source, 'missing', 1), source);
});

test('tab bar sizing stays within touch-friendly limits and updates CSS tokens', () => {
  const values = new Map();
  const harness = new TabsHarness();
  harness.style = {
    setProperty(name, value) {
      values.set(name, value);
    },
  };
  harness.tabsSize = 65;

  harness._syncTabsSize_();

  assert.equal(harness.tabsSize, 80);
  assert.equal(values.get('--ddc-tabs-button-height'), '44.8px');
  assert.equal(values.get('--ddc-tabs-icon-size'), '19.2px');

  harness.tabsSize = 150;
  harness._syncTabsSize_();
  assert.equal(harness.tabsSize, 140);
  assert.equal(values.get('--ddc-tabs-button-height'), '78.4px');
});

test('tab and card overflow options normalize legacy aliases', () => {
  class ConfigHarness {}
  installConfigHelperMethods(ConfigHarness);
  const harness = new ConfigHarness();

  assert.equal(normalizeTabsSize('115'), 115);
  assert.equal(normalizeTabsSize('invalid'), 100);
  assert.equal(normalizeCardOverflow('HIDDEN'), 'hidden');
  assert.equal(normalizeCardOverflow('scroll'), 'auto');
  assert.deepEqual(
    harness._normalizeDashboardOptions_({
      tabsSize: 125,
      default_card_overflow: 'visible',
    }),
    {
      tabs_size: 125,
      card_overflow: 'visible',
    },
  );
});

test('dashboard card overflow is exposed as the wrapper CSS default', () => {
  class OverflowHarness {}
  installConfigHelperMethods(OverflowHarness);
  installCardBuilderMethods(OverflowHarness.prototype);
  const values = new Map();
  const harness = new OverflowHarness();
  harness.cardOverflow = 'hidden';
  harness.style = {
    setProperty(name, value) {
      values.set(name, value);
    },
  };

  harness._syncCardOverflow_();

  assert.equal(harness.cardOverflow, 'hidden');
  assert.equal(values.get('--ddc-card-overflow'), 'hidden');
});

test('fixed tab bars center between both Home Assistant side gutters', async () => {
  const source = await readFile(
    new URL('../src/dashboard/shell-template.js', import.meta.url),
    'utf8',
  );

  assert.doesNotMatch(
    source,
    /left:\s*calc\(var\(--ddc-left-gutter,\s*0px\)\s*\+\s*50%\)/,
  );
  assert.match(
    source,
    /\.ddc-root\.ddc-fixed-canvas-tabs-bottom[\s\S]*?left:\s*calc\(var\(--ddc-left-gutter,\s*0px\)\s*\+\s*12px\)\s*!important;[\s\S]*?right:\s*calc\(var\(--ddc-right-gutter,\s*0px\)\s*\+\s*12px\)\s*!important;/,
  );
});
