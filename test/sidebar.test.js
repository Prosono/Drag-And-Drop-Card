import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import { installSidebarMethods } from '../src/layout/sidebar.js';
import { installConfigHelperMethods } from '../src/core/config-normalization.js';
import { buildTabButtonMarkup } from '../src/layout/tabs.js';

class SidebarHarness {}
installSidebarMethods(SidebarHarness.prototype);

test('Sidebar types normalize to the three purpose-based designs', () => {
  const harness = new SidebarHarness();

  assert.equal(harness._normalizeSidebarType_('navigation'), 'minimal');
  assert.equal(harness._normalizeSidebarType_('standard'), 'essentials');
  assert.equal(harness._normalizeSidebarType_('workspace'), 'canvas');
  assert.equal(harness._normalizeSidebarType_('unexpected'), 'minimal');

  assert.equal(harness._getEffectiveSidebarHeader_('minimal', 'weather'), 'none');
  assert.equal(harness._getEffectiveSidebarHeader_('essentials', 'weather'), 'weather');
  assert.equal(harness._getEffectiveSidebarHeader_('essentials', 'clock'), 'date_time');
  assert.equal(harness._getEffectiveSidebarHeader_('canvas', 'none'), 'none');
  assert.equal(harness._getEffectiveSidebarHeader_('canvas', 'weather'), 'clock');
});

test('Sidebar navigation is global whenever the dashboard Sidebar is enabled', () => {
  const harness = new SidebarHarness();
  harness.sidebarEnabled = false;
  assert.equal(harness._isSidebarNavigationActive_(), false);

  harness.sidebarEnabled = true;
  harness.sidebarType = 'canvas';
  harness.sidebarHeader = 'clock';
  assert.equal(harness._isSidebarNavigationActive_(), true);
  assert.equal(harness._sidebarHasItem_('navigation'), true);
});

test('Sidebar tabs use dedicated rail markup without changing standard tabs', () => {
  const tab = { id: 'lights', label: 'Lights', icon: 'mdi:lightbulb-outline' };
  const standard = buildTabButtonMarkup(tab, 1);
  const sidebar = buildTabButtonMarkup(tab, 1, { sidebar: true });

  assert.match(standard, /ddc-tab-label/);
  assert.doesNotMatch(standard, /ddc-sidebar-tab/);
  assert.match(sidebar, /ddc-sidebar-tab-indicator/);
  assert.match(sidebar, /ddc-sidebar-tab-icon/);
  assert.match(sidebar, /ddc-sidebar-tab-arrow/);
  assert.match(sidebar, />02</);
});

test('Sidebar mast uses the header allowed by the selected structure', () => {
  const harness = new SidebarHarness();
  const previousDocument = globalThis.document;
  const created = [];
  globalThis.document = {
    createElement() {
      const element = {
        className: '',
        dataset: {},
        attributes: {},
        innerHTML: '',
        setAttribute(name, value) { this.attributes[name] = value; },
        querySelectorAll() { return []; },
      };
      created.push(element);
      return element;
    },
  };
  try {
    harness.sidebarType = 'essentials';
    harness.sidebarHeader = 'clock';
    harness._safe = value => String(value ?? '');
    harness._getSidebarWeatherData_ = () => ({});
    harness._formatSidebarWeekday_ = () => 'Tuesday';
    harness._formatSidebarTime_ = () => '19:42';
    harness._formatSidebarLongDate_ = () => '11 August 2026';

    const mast = harness._createSidebarHeader_(new Date('2026-08-11T19:42:00'));

    assert.equal(created.length, 1);
    assert.equal(mast.dataset.sidebarHeader, 'date_time');
    assert.match(mast.className, /ddc-sidebar-mast-date_time/);
    assert.match(mast.innerHTML, /19:42/);
    assert.doesNotMatch(mast.innerHTML, /live-pill|header-stats/);
  } finally {
    if (previousDocument === undefined) delete globalThis.document;
    else globalThis.document = previousDocument;
  }
});

test('Sidebar card layout is retained in dashboard configuration', () => {
  const harness = new SidebarHarness();
  const entries = [{
    id: 'sidebar-card-1',
    card: { type: 'entity', entity: 'light.kitchen' },
    position: { x: 20, y: 40 },
    size: { width: 180, height: 120 },
  }];
  harness._captureSidebarLayoutEntries_ = () => entries;
  harness._normalizeSidebarCards_ = value => value;
  harness._cloneJson_ = value => JSON.parse(JSON.stringify(value));
  harness._sidebarCardsRenderSignature_ = value => JSON.stringify(value);
  harness._config = {};
  harness.sidebarHost = { dataset: {} };

  const stored = harness._syncSidebarLayoutToConfig_();

  assert.deepEqual(stored, entries);
  assert.deepEqual(harness.sidebarCards, entries);
  assert.deepEqual(harness._config.sidebar_cards, entries);
  assert.equal(harness.sidebarHost.dataset.sidebarCardsSignature, JSON.stringify(entries));
});

test('dashboard option normalization preserves Sidebar data', () => {
  class ConfigHarness {}
  installConfigHelperMethods(ConfigHarness);
  const harness = new ConfigHarness();
  const cards = [{ id: 'sidebar-card-1', card: { type: 'button' } }];

  assert.deepEqual(harness._normalizeDashboardOptions_({
    sidebar_enabled: true,
    sidebar_type: 'canvas',
    sidebar_header: 'clock',
    sidebar_cards: cards,
  }), {
    sidebar_enabled: true,
    sidebar_type: 'canvas',
    sidebar_header: 'clock',
    sidebar_cards: cards,
  });
});

test('Sidebar settings stay implemented but are hidden while the feature is deferred', async () => {
  const template = await readFile(new URL('../src/dashboard/settings-template.js', import.meta.url), 'utf8');
  const controller = await readFile(new URL('../src/dashboard/settings-controller.js', import.meta.url), 'utf8');
  const settingsStyles = await readFile(new URL('../src/styles/dashboard-settings-styles.js', import.meta.url), 'utf8');
  const shell = await readFile(new URL('../src/dashboard/shell-template.js', import.meta.url), 'utf8');
  const tabs = await readFile(new URL('../src/layout/tabs.js', import.meta.url), 'utf8');

  assert.match(template, /id="ddc-settings-tab-sidebar"[^>]*data-settings-tab="sidebar"[^>]*data-feature-status="deferred"[^>]*aria-hidden="true"[^>]*hidden/);
  assert.match(controller, /filter\(\(btn\) => !btn\.hidden && btn\.getAttribute\('aria-hidden'\) !== 'true'\)/);
  assert.match(template, /name="ddc-sidebar-type" value="minimal"/);
  assert.match(template, /name="ddc-sidebar-type" value="essentials"/);
  assert.match(template, /name="ddc-sidebar-type" value="canvas"/);
  assert.match(template, /id="ddc-sidebar-preview"/);
  assert.match(template, /class="sidebar-studio-layout"/);
  assert.match(template, /class="sidebar-blueprint-index">01/);
  assert.match(controller, /updateSidebarSettingsPreview/);
  assert.match(controller, /this\._renderSidebar_\?\.\(\)/);
  assert.match(settingsStyles, /Sidebar Studio — architectural control-rail redesign/);
  assert.match(settingsStyles, /\.sidebar-preview-nav-icon/);
  assert.match(shell, /Sidebar control rail — solid, architectural, and purpose-led/);
  assert.match(shell, /--ddc-rail-active:oklch/);
  assert.match(shell, /\.ddc-tabs-sidebar \.ddc-sidebar-tab/);
  assert.match(tabs, /if \(sidebarNavActive\)/);
  assert.match(tabs, /buildTabButtonMarkup/);
});
