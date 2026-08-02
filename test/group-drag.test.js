import test from 'node:test';
import assert from 'node:assert/strict';

import { getRigidGroupDragOffset } from '../src/interactions/drag-interactions.js';
import { installLayoutGeometryMethods } from '../src/layout/geometry.js';

test('live grid snapping produces one identical delta for the entire selection', () => {
  const first = { x: 13, y: 27 };
  const second = { x: 98, y: 64 };
  const offset = getRigidGroupDragOffset(first, 4, 6, true, 10);
  const movedFirst = { x: first.x + offset.dx, y: first.y + offset.dy };
  const movedSecond = { x: second.x + offset.dx, y: second.y + offset.dy };

  assert.deepEqual(offset, { dx: 7, dy: 3 });
  assert.equal(movedFirst.x - first.x, movedSecond.x - second.x);
  assert.equal(movedFirst.y - first.y, movedSecond.y - second.y);
  assert.equal(movedSecond.x - movedFirst.x, second.x - first.x);
  assert.equal(movedSecond.y - movedFirst.y, second.y - first.y);
});

test('canvas constraints preserve selected-card spacing at fixed edges', () => {
  class GeometryHarness {
    constructor() {
      this.gridSize = 10;
    }

    _getCanvasEdgeBufferPx_() { return 0; }
    _isContainerFixed() { return true; }
    _getContainerSize() { return { w: 200, h: 160 }; }
  }
  installLayoutGeometryMethods(GeometryHarness.prototype);
  const harness = new GeometryHarness();
  const proposed = [
    { rawX: 150, rawY: 30, snapX: 150, snapY: 30, w: 60, h: 40 },
    { rawX: 220, rawY: 55, snapX: 220, snapY: 55, w: 50, h: 40 },
  ];
  const originalDx = proposed[1].rawX - proposed[0].rawX;
  const originalDy = proposed[1].rawY - proposed[0].rawY;

  harness._constrainProposedCardsToCanvas_(
    proposed,
    false,
    10,
    { preserveGroupOffsets: true },
  );

  assert.equal(proposed[1].snapX - proposed[0].snapX, originalDx);
  assert.equal(proposed[1].snapY - proposed[0].snapY, originalDy);
  assert.equal(proposed[0].snapX, 80);
});
