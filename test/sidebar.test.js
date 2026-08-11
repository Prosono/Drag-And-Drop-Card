import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import { installSidebarMethods } from '../src/layout/sidebar.js';
import { installConfigHelperMethods } from '../src/core/config-normalization.js';

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

test('Sidebar settings expose Minimal, Essentials and Canvas with live preview', async () => {
  const template = await readFile(new URL('../src/dashboard/settings-template.js', import.meta.url), 'utf8');
  const controller = await readFile(new URL('../src/dashboard/settings-controller.js', import.meta.url), 'utf8');

  assert.match(template, /data-settings-tab="sidebar"/);
  assert.match(template, /name="ddc-sidebar-type" value="minimal"/);
  assert.match(template, /name="ddc-sidebar-type" value="essentials"/);
  assert.match(template, /name="ddc-sidebar-type" value="canvas"/);
  assert.match(template, /id="ddc-sidebar-preview"/);
  assert.match(controller, /updateSidebarSettingsPreview/);
  assert.match(controller, /this\._renderSidebar_\?\.\(\)/);
});
