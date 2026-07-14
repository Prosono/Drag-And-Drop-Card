import test from 'node:test';
import assert from 'node:assert/strict';

import { installCardSettingsMenuMethods } from '../src/cards/card-options-menu.js';
import { installConnectorMethods } from '../src/interactions/connectors.js';

class CardSettingsHarness {}
installCardSettingsMenuMethods(CardSettingsHarness.prototype);

class ConnectorHarness {}
installConnectorMethods(ConnectorHarness.prototype);

function createWrapper() {
  const classes = new Set();
  const properties = new Map();
  return {
    classes,
    dataset: {},
    classList: {
      toggle(name, enabled) {
        if (enabled) classes.add(name);
        else classes.delete(name);
      },
    },
    style: {
      color: '',
      setProperty(name, value) { properties.set(name, value); },
      removeProperty(name) { properties.delete(name); },
    },
  };
}

test('per-card connector anchor preference is normalized, applied and persisted', () => {
  const harness = new CardSettingsHarness();
  harness._isDashboardThemeOverrideAllDesignActive_ = () => false;
  const wrap = createWrapper();

  const disabled = harness._applyPerCardStyle_(wrap, { connector_anchors: 'OFF' });

  assert.equal(disabled.connector_anchors, 'off');
  assert.equal(wrap.classes.has('ddc-connector-anchors-disabled'), true);
  assert.deepEqual(JSON.parse(wrap.dataset.cardStyle), { connector_anchors: 'off' });

  harness._applyPerCardStyle_(wrap, {});
  assert.equal(wrap.classes.has('ddc-connector-anchors-disabled'), false);
  assert.equal('cardStyle' in wrap.dataset, false);
});

test('disabled card anchors are excluded from connector hit testing', () => {
  const disabledWrap = {
    dataset: { layoutCardId: 'disabled', tabId: 'home' },
    classList: { contains: (name) => name === 'ddc-connector-anchors-disabled' },
  };
  const enabledWrap = {
    dataset: { layoutCardId: 'enabled', tabId: 'home' },
    classList: { contains: () => false },
  };
  const harness = new ConnectorHarness();
  harness.activeTab = 'home';
  harness.defaultTab = 'home';
  harness.editMode = true;
  harness.cardContainer = { querySelectorAll: () => [disabledWrap, enabledWrap] };
  harness._normalizeTabId = (value) => value;
  harness._isWrapVisibleForActiveLayers_ = () => true;
  harness._getCardAnchorPoint_ = (wrap, anchor) => {
    assert.notEqual(wrap, disabledWrap);
    return anchor === 'top'
      ? { x: 10, y: 10, anchor, wrap }
      : { x: 100, y: 100, anchor, wrap };
  };

  const hit = harness._getConnectorAnchorHit_({ x: 10, y: 10 });

  assert.equal(hit?.cardId, 'enabled');
  assert.equal(hit?.anchor, 'top');
});
