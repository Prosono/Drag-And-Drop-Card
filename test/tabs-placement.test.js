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

function createNode() {
  return {
    parentNode: null,
    children: [],
    appendChild(child) {
      child.parentNode?.removeChild?.(child);
      this.children.push(child);
      child.parentNode = this;
      return child;
    },
    insertBefore(child, reference) {
      child.parentNode?.removeChild?.(child);
      const index = this.children.indexOf(reference);
      this.children.splice(index < 0 ? this.children.length : index, 0, child);
      child.parentNode = this;
      return child;
    },
    removeChild(child) {
      const index = this.children.indexOf(child);
      if (index >= 0) this.children.splice(index, 1);
      child.parentNode = null;
      return child;
    },
  };
}

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
      add(name) { classes.add(name); },
      remove(name) { classes.delete(name); },
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

test('fixed dashboard tabs move inside the canvas while editing and return afterwards', () => {
  const { harness, classes, attributes } = createHarness({
    tabs: [{ id: 'home' }, { id: 'lights' }],
    hideTabsWhenSingle: true,
  });
  const root = createNode();
  root.classList = harness.rootEl.classList;
  const tabsBar = createNode();
  const scaleOuter = createNode();
  root.appendChild(tabsBar);
  root.appendChild(scaleOuter);
  harness.rootEl = root;
  harness.tabsBar = tabsBar;
  harness.__scaleOuter = scaleOuter;
  harness.editMode = true;

  harness._syncTabsPlacement_();

  assert.equal(tabsBar.parentNode, scaleOuter);
  assert.equal(classes.has('ddc-edit-canvas-tabs-top'), true);
  assert.equal(classes.has('ddc-fixed-canvas-tabs-top'), false);
  assert.equal(attributes.has('ddc-tabs-edit-canvas'), true);
  assert.equal(attributes.has('ddc-tabs-fixed-canvas'), false);

  harness.editMode = false;
  harness._syncTabsPlacement_();

  assert.equal(tabsBar.parentNode, root);
  assert.equal(root.children.indexOf(tabsBar) < root.children.indexOf(scaleOuter), true);
  assert.equal(classes.has('ddc-edit-canvas-tabs'), false);
  assert.equal(classes.has('ddc-fixed-canvas-tabs-top'), true);
  assert.equal(attributes.has('ddc-tabs-edit-canvas'), false);
  assert.equal(attributes.has('ddc-tabs-fixed-canvas'), true);

  harness.tabsPosition = 'bottom';
  harness.editMode = true;
  harness._syncTabsPlacement_();

  assert.equal(tabsBar.parentNode, scaleOuter);
  assert.equal(classes.has('ddc-edit-canvas-tabs-top'), false);
  assert.equal(classes.has('ddc-edit-canvas-tabs-bottom'), true);
  assert.equal(classes.has('ddc-fixed-canvas-tabs-bottom'), false);
});

test('Sidebar tabs stay mounted in the Sidebar navigation slot', () => {
  const { harness, classes } = createHarness({
    tabs: [{ id: 'home' }, { id: 'lights' }],
    hideTabsWhenSingle: true,
  });
  const root = createNode();
  root.classList = harness.rootEl.classList;
  const tabsBar = createNode();
  const scaleOuter = createNode();
  const sidebarHost = createNode();
  const navigation = createNode();
  sidebarHost.querySelector = selector => selector === '.ddc-sidebar-navigation' ? navigation : null;
  sidebarHost.appendChild(navigation);
  root.appendChild(sidebarHost);
  root.appendChild(tabsBar);
  root.appendChild(scaleOuter);
  harness.rootEl = root;
  harness.tabsBar = tabsBar;
  harness.__scaleOuter = scaleOuter;
  harness.sidebarHost = sidebarHost;
  harness._isSidebarEnabled_ = () => true;
  harness._isSidebarNavigationActive_ = () => true;

  harness._syncTabsPlacement_();

  assert.equal(tabsBar.parentNode, navigation);
  assert.equal(classes.has('ddc-sidebar-layout'), true);
  assert.equal(classes.has('ddc-tabs-bottom-layout'), false);

  harness._syncTabsPlacement_();
  assert.equal(tabsBar.parentNode, navigation);
  assert.equal(navigation.children.filter(child => child === tabsBar).length, 1);
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

test('tab bar sizing supports 1–1000 percent and updates CSS tokens', () => {
  const values = new Map();
  const harness = new TabsHarness();
  harness.style = {
    setProperty(name, value) {
      values.set(name, value);
    },
  };
  harness.tabsSize = 0;

  harness._syncTabsSize_();

  assert.equal(harness.tabsSize, 1);
  assert.equal(values.get('--ddc-tabs-button-height'), '0.56px');
  assert.equal(values.get('--ddc-tabs-icon-size'), '0.24px');

  harness.tabsSize = 1001;
  harness._syncTabsSize_();
  assert.equal(harness.tabsSize, 1000);
  assert.equal(values.get('--ddc-tabs-button-height'), '560px');
});

test('tab and card overflow options normalize legacy aliases', () => {
  class ConfigHarness {}
  installConfigHelperMethods(ConfigHarness);
  const harness = new ConfigHarness();

  assert.equal(normalizeTabsSize('115'), 115);
  for (const value of [1, 65, 150, 777, 1000]) assert.equal(normalizeTabsSize(value), value);
  for (const value of [undefined, null, '', ' ']) assert.equal(normalizeTabsSize(value), 100);
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

test('canvas-anchored tabs track both axes and release listeners when disabled', () => {
  const oldWindow = globalThis.window;
  const oldGetComputedStyle = globalThis.getComputedStyle;
  const listeners = new Map();
  globalThis.window = {addEventListener: (name, fn) => listeners.set(name, fn), removeEventListener: name => listeners.delete(name)};
  globalThis.getComputedStyle = () => ({position: 'fixed'});
  try {
    const host = new TabsHarness();
    const values = new Map(), classes = new Set();
    let rect = {left: 120, top: 80, width: 600, bottom: 480};
    host.tabsCenterOnCanvas = true;
    host.style = {setProperty: (key, value) => values.set(key, value)};
    host.tabsBar = {classList: {toggle: (key, on) => on ? classes.add(key) : classes.delete(key), remove: key => classes.delete(key)}};
    host.cardContainer = {getBoundingClientRect: () => rect};
    host._syncTabsCanvasCenter_();
    assert.equal(values.get('--ddc-tabs-canvas-center'), '420px');
    assert.equal(values.get('--ddc-tabs-canvas-top'), '80px');
    assert.equal(values.get('--ddc-tabs-canvas-bottom'), '480px');
    rect = {left: 100, top: 20, width: 300, bottom: 220};
    listeners.get('scroll')();
    assert.equal(values.get('--ddc-tabs-canvas-center'), '250px');
    assert.equal(values.get('--ddc-tabs-canvas-bottom'), '220px');
    host.tabsCenterOnCanvas = false;
    host._syncTabsCanvasCenter_();
    assert.equal(classes.size, 0);
    assert.equal(listeners.size, 0);
  } finally {
    globalThis.window = oldWindow;
    globalThis.getComputedStyle = oldGetComputedStyle;
  }
});

test('tab changes leave none/image and mounted media backgrounds untouched', () => {
  const host=new TabsHarness();
  let mode='none', applied=0;
  host._getDashboardBackgroundMode_=()=>mode;
  host._applyBackgroundFromConfig=()=>applied++;
  host._ensureTabBackground_();
  mode='image';host._ensureTabBackground_();
  mode='youtube';host.__ytWrap={isConnected:true};host._ensureTabBackground_();
  mode='particles';host.__particlesHost={isConnected:true};host._ensureTabBackground_();
  assert.equal(applied,0);
  host.__particlesHost.isConnected=false;host._ensureTabBackground_();
  assert.equal(applied,1);
});

test('selection-only updates preserve tab buttons and rebuild when configuration changes', () => {
  const h=new TabsHarness();
  h.tabs=[{id:'a',icon:'custom:one'},{id:'b',icon:'custom:two'}];
  h.activeTab='a';
  const button=(id,active)=>{
    const classes=new Set(active?['active']:[]),attrs={};
    return {dataset:{tabId:id},attrs,classList:{contains:k=>classes.has(k),toggle:(k,on)=>on?classes.add(k):classes.delete(k)},setAttribute:(k,v)=>attrs[k]=v};
  };
  const a=button('a',true),b=button('b',false),buttons=[a,b];
  h.tabsBar={querySelector:()=>({}),querySelectorAll:()=>buttons};
  h.__renderedTabsBar=h.tabsBar;
  h.__renderedTabsSignature=h._tabRenderSignature_();
  let renders=0,centered;
  h._renderTabs=()=>renders++;
  h._centerTabButtonInScroller_=btn=>centered=btn;
  h._updateTabOverflowShadows_=()=>{};
  h.activeTab='b';h._updateActiveTabSelection_();
  assert.equal(renders,0);
  assert.equal(centered,b);
  assert.equal(a.attrs['aria-selected'],'false');
  assert.equal(a.attrs.tabindex,'-1');
  assert.equal(b.attrs['aria-selected'],'true');
  assert.equal(b.attrs.tabindex,'0');
  h.tabs[1].icon='custom:changed';h._updateActiveTabSelection_();
  assert.equal(renders,1);
});
