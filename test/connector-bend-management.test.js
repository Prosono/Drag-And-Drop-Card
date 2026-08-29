import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import { installConnectorMethods } from '../src/interactions/connectors.js';

class ConnectorHarness {
  constructor(entry) {
    this.entries = [structuredClone(entry)];
    this.lastSaveReason = null;
    this._cloneJson_ = (value) => structuredClone(value);
    this._normalizeConnectorEntry_ = (value) => value;
    this._getCurrentConnectorEntries_ = () => this.entries;
    this._setCurrentConnectorEntries_ = (entries, options = {}) => {
      this.entries = structuredClone(entries);
      this.lastSaveReason = options.reason || null;
      return this.entries;
    };
  }
}

installConnectorMethods(ConnectorHarness.prototype);

const anchoredConnector = () => ({
  id: 'energy-flow',
  sourceCardId: 'solar',
  targetCardId: 'house',
  sourceAnchor: 'right',
  targetAnchor: 'top',
  auto_route: true,
  points: [{ x: 100, y: 100 }, { x: 500, y: 400 }],
});

test('removing an auto-routed bend keeps the visible route and switches it to manual', () => {
  const harness = new ConnectorHarness(anchoredConnector());
  const visibleRoute = [
    { x: 100, y: 100 },
    { x: 160, y: 100 },
    { x: 260, y: 100 },
    { x: 260, y: 400 },
    { x: 500, y: 400 },
  ];

  const removed = harness._removeConnectorPoint_('energy-flow', 2, {
    renderPoints: visibleRoute,
  });

  assert.equal(removed, true);
  assert.equal(harness.entries[0].auto_route, false);
  assert.deepEqual(harness.entries[0].points, [
    visibleRoute[0],
    visibleRoute[1],
    visibleRoute[3],
    visibleRoute[4],
  ]);
  assert.equal(harness.lastSaveReason, 'connector-junction-remove');
});

test('connector endpoints cannot be removed as bend points', () => {
  const harness = new ConnectorHarness({
    ...anchoredConnector(),
    auto_route: false,
    points: [{ x: 100, y: 100 }, { x: 260, y: 180 }, { x: 500, y: 400 }],
  });

  assert.equal(harness._removeConnectorPoint_('energy-flow', 0), false);
  assert.equal(harness._removeConnectorPoint_('energy-flow', 2), false);
  assert.equal(harness.entries[0].points.length, 3);
  assert.equal(harness.lastSaveReason, null);
});

test('simplify line removes all bends and persists a direct manual route', () => {
  const harness = new ConnectorHarness(anchoredConnector());
  harness._getConnectorById_ = () => harness.entries[0];
  harness._getConnectorRenderPoints_ = () => [
    { x: 100, y: 100 },
    { x: 180, y: 100 },
    { x: 180, y: 400 },
    { x: 500, y: 400 },
  ];

  const simplified = harness._simplifyConnectorRoute_('energy-flow');

  assert.equal(simplified, true);
  assert.equal(harness.entries[0].auto_route, false);
  assert.deepEqual(harness.entries[0].points, [
    { x: 100, y: 100 },
    { x: 500, y: 400 },
  ]);
  assert.equal(harness.lastSaveReason, 'connector-route-simplify');
});

test('adding a bend queues connector persistence', () => {
  const harness = new ConnectorHarness({
    ...anchoredConnector(),
    auto_route: false,
    points: [{ x: 100, y: 100 }, { x: 500, y: 100 }],
  });

  harness._insertConnectorMidpoint_('energy-flow');

  assert.equal(harness.entries[0].points.length, 3);
  assert.equal(harness.entries[0].auto_route, false);
  assert.equal(harness.lastSaveReason, 'connector-junction-add');
});

test('edit mode exposes connector controls without selecting the line first', async () => {
  const [source, shell] = await Promise.all([
    readFile(new URL('../src/interactions/connectors.js', import.meta.url), 'utf8'),
    readFile(new URL('../src/dashboard/shell-template.js', import.meta.url), 'utf8'),
  ]);

  assert.match(source, /if \(this\.editMode && editableHandles\.length\)/);
  assert.doesNotMatch(source, /if \(selected && this\.editMode && editableHandles\.length\)/);
  assert.match(source, /const lineHitWidth = Math\.max\(28, \(thickness \* editUiScale\) \+ 20\) \/ editUiScale/);
  assert.match(source, /const handleSize = handleScreenSize \/ editUiScale/);
  assert.match(source, /class', 'ddc-connector-handle-hit'/);
  assert.match(shell, /\.ddc-connector-handle-hit\{/);
  assert.match(shell, /\.ddc-connector:hover \.ddc-connector-handle/);
});
