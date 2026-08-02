import test from 'node:test';
import assert from 'node:assert/strict';

import { installDashboardConverterMethods } from '../src/storage/dashboard-converter.js';

class DashboardConverterHarness {
  constructor() {
    this.gridSize = 10;
    this.tabsPosition = 'top';
    this.containerSizeMode = 'preset';
    this.containerPreset = 'fhd';
    this.containerPresetOrient = 'landscape';
    this.autoResizeCards = false;
    this._config = {};
    this._nextId = 0;
  }

  _genLayoutCardId_() {
    this._nextId += 1;
    return `converted-${this._nextId}`;
  }

  _responsiveLayoutVariantKeys_() {
    return ['desktop_landscape', 'tablet_landscape'];
  }

  _getPrimaryResponsiveLayoutKey_() {
    return 'desktop_landscape';
  }

  _normalizeTabsPosition_(value) {
    return value || 'top';
  }

  _normalizeContainerSizeMode_(value) {
    return value || 'preset';
  }

  _getResponsiveViewportProfile_(profile) {
    return profile === 'tablet'
      ? { width: 1280, height: 800 }
      : { width: 1920, height: 1080 };
  }

  _splitResponsiveLayoutKey_(key) {
    const [profile, orientation] = String(key).split('_');
    return { profile, orientation };
  }
}

installDashboardConverterMethods(DashboardConverterHarness.prototype);

test('dashboard converter parses YAML and unwraps common Lovelace config shapes', () => {
  const harness = new DashboardConverterHarness();
  const parsed = harness._parseDashboardConverterText_(`
title: Wall panel
views:
  - title: Home
    cards:
      - type: entities
        entities:
          - light.kitchen
  `);

  assert.equal(parsed.title, 'Wall panel');
  assert.equal(parsed.views[0].cards[0].type, 'entities');
  assert.equal(
    harness._normalizeDashboardConverterConfig_({ lovelace: { config: parsed } }),
    parsed,
  );
});

test('dashboard converter turns Lovelace views into DDC tabs and responsive cards', () => {
  const harness = new DashboardConverterHarness();
  const converted = harness._convertLovelaceDashboardToDdc_({
    title: 'Wall panel',
    views: [
      {
        title: 'Home',
        path: 'home',
        icon: 'mdi:home',
        cards: [
          { type: 'entities', title: 'Lights', entities: ['light.kitchen'] },
          {
            type: 'horizontal-stack',
            cards: [
              { type: 'button', entity: 'switch.coffee' },
              { type: 'button', entity: 'switch.fan' },
            ],
          },
        ],
      },
      {
        title: 'Climate',
        path: 'climate',
        cards: [{ type: 'thermostat', entity: 'climate.living_room' }],
      },
    ],
  });

  assert.deepEqual(
    converted.options.tabs.map(({ id, label, icon }) => ({ id, label, icon })),
    [
      { id: 'home', label: 'Home', icon: 'mdi:home' },
      { id: 'climate', label: 'Climate', icon: undefined },
    ],
  );
  assert.equal(converted.options.default_tab, 'home');
  assert.equal(converted.summary.views, 2);
  assert.equal(converted.summary.cards, 3);
  assert.equal(converted.responsive_layouts.desktop_landscape.length, 3);
  assert.equal(converted.responsive_layouts.tablet_landscape.length, 3);
  assert.deepEqual(
    new Set(converted.cards.map((entry) => entry.tabId)),
    new Set(['home', 'climate']),
  );
  assert.ok(converted.cards.every((entry) => entry.id && entry.card?.type));
  assert.equal(converted.cards.find((entry) => entry.card.type === 'horizontal-stack')?.card.cards.length, 2);
});

test('dashboard converter skips an existing Drag & Drop card to avoid recursive imports', () => {
  const harness = new DashboardConverterHarness();
  const converted = harness._convertLovelaceDashboardToDdc_({
    views: [{
      title: 'Home',
      cards: [
        { type: 'custom:drag-and-drop-card', storage_key: 'existing' },
        { type: 'tile', entity: 'light.kitchen' },
      ],
    }],
  });

  assert.equal(converted.summary.cards, 1);
  assert.equal(converted.summary.skipped_drag_drop_cards, 1);
  assert.equal(converted.cards[0].card.type, 'tile');
});
