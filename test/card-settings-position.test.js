import test from 'node:test';
import assert from 'node:assert/strict';

import { installCardSettingsMenuMethods } from '../src/cards/card-options-menu.js';
import { installLayoutGeometryMethods } from '../src/layout/geometry.js';

class PositionHarness {}
installCardSettingsMenuMethods(PositionHarness.prototype);
installLayoutGeometryMethods(PositionHarness.prototype);

function createWrapper() {
  const attributes = new Map([
    ['data-x', '20'],
    ['data-y', '30'],
    ['data-x-raw', '20'],
    ['data-y-raw', '30'],
  ]);
  return {
    dataset: { layoutCardId: 'card-1' },
    offsetWidth: 100,
    offsetHeight: 80,
    classList: { contains: () => false },
    style: {
      width: '100px',
      height: '80px',
      removeProperty() {},
    },
    getAttribute(name) { return attributes.has(name) ? attributes.get(name) : null; },
    setAttribute(name, value) { attributes.set(name, String(value)); },
    getBoundingClientRect() { return { width: 100, height: 80 }; },
  };
}

test('card settings applies, constrains and persists editable X/Y coordinates', () => {
  const harness = new PositionHarness();
  harness.gridSize = 10;
  harness._getCanvasEdgeBufferPx_ = () => 0;
  harness._isContainerFixed = () => false;
  const calls = [];
  harness._moveConnectorsForCardDeltas_ = (deltas) => calls.push(['connectors', deltas]);
  harness._syncAnchoredConnectorPointsForCurrentLayout_ = () => calls.push(['sync-anchors']);
  harness._scheduleConnectorsRender_ = () => calls.push(['render-connectors']);
  harness._resizeContainer = () => calls.push(['resize']);
  harness._persistCurrentResponsiveProfileToMemory_ = () => calls.push(['persist-profile']);
  harness._queueSave = (reason) => calls.push(['save', reason]);
  const wrap = createWrapper();

  const result = harness._updateCardPositionFromSettings_(wrap, { x: '47', y: '-5' });

  assert.deepEqual(result, { x: 50, y: 0 });
  assert.equal(wrap.getAttribute('data-x'), '50');
  assert.equal(wrap.getAttribute('data-y'), '0');
  assert.equal(wrap.getAttribute('data-x-raw'), '50');
  assert.equal(wrap.getAttribute('data-y-raw'), '0');
  assert.deepEqual(calls.find(([name]) => name === 'connectors'), [
    'connectors',
    [{ id: 'card-1', dx: 30, dy: -30 }],
  ]);
  assert.ok(calls.some(([name]) => name === 'persist-profile'));
  assert.ok(calls.some(([name, reason]) => name === 'save' && reason === 'card-position-change'));
});
