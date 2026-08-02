import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import {
  arrangeSelectionFrames,
  installSelectionMethods,
} from '../src/interactions/selection.js';

test('selected cards align to shared edges and centers', () => {
  const frames = [
    { id: 'a', x: 10, y: 20, width: 40, height: 30 },
    { id: 'b', x: 80, y: 70, width: 20, height: 50 },
    { id: 'c', x: 130, y: 40, width: 60, height: 20 },
  ];

  assert.deepEqual(
    arrangeSelectionFrames(frames, 'align-left').map(({ id, x }) => ({ id, x })),
    [{ id: 'a', x: 10 }, { id: 'b', x: 10 }, { id: 'c', x: 10 }],
  );
  assert.deepEqual(
    arrangeSelectionFrames(frames, 'align-right').map(({ id, x }) => ({ id, x })),
    [{ id: 'a', x: 150 }, { id: 'b', x: 170 }, { id: 'c', x: 130 }],
  );
  assert.deepEqual(
    arrangeSelectionFrames(frames, 'align-top').map(({ id, y }) => ({ id, y })),
    [{ id: 'a', y: 20 }, { id: 'b', y: 20 }, { id: 'c', y: 20 }],
  );
  assert.deepEqual(
    arrangeSelectionFrames(frames, 'align-bottom').map(({ id, y }) => ({ id, y })),
    [{ id: 'a', y: 90 }, { id: 'b', y: 70 }, { id: 'c', y: 100 }],
  );

  const centered = arrangeSelectionFrames(frames, 'align-horizontal-center');
  assert.deepEqual(centered.map((item) => item.x + (item.width / 2)), [100, 100, 100]);
});

test('selected cards can receive equal horizontal and vertical gaps', () => {
  const horizontal = arrangeSelectionFrames([
    { id: 'a', x: 0, y: 0, width: 20, height: 20 },
    { id: 'b', x: 40, y: 0, width: 10, height: 20 },
    { id: 'c', x: 100, y: 0, width: 20, height: 20 },
  ], 'distribute-horizontal');

  assert.deepEqual(horizontal.map((item) => item.x), [0, 55, 100]);
  assert.equal(horizontal[1].x - (horizontal[0].x + horizontal[0].width), 35);
  assert.equal(horizontal[2].x - (horizontal[1].x + horizontal[1].width), 35);

  const vertical = arrangeSelectionFrames([
    { id: 'a', x: 0, y: 0, width: 20, height: 20 },
    { id: 'b', x: 0, y: 50, width: 20, height: 10 },
    { id: 'c', x: 0, y: 120, width: 20, height: 30 },
  ], 'distribute-vertical');

  assert.deepEqual(vertical.map((item) => item.y), [0, 65, 120]);
  assert.equal(vertical[1].y - (vertical[0].y + vertical[0].height), 45);
  assert.equal(vertical[2].y - (vertical[1].y + vertical[1].height), 45);
});

test('arranging the live selection updates raw positions and queues persistence', () => {
  class SelectionHarness {}
  installSelectionMethods(SelectionHarness.prototype);
  const createWrap = (x, y, width, height) => {
    const attributes = new Map([['data-x', String(x)], ['data-y', String(y)]]);
    return {
      isConnected: true,
      dataset: {},
      style: { width: `${width}px`, height: `${height}px` },
      offsetWidth: width,
      offsetHeight: height,
      getAttribute: (name) => attributes.get(name) ?? null,
      setAttribute: (name, value) => attributes.set(name, String(value)),
      getBoundingClientRect: () => ({ width, height }),
      attributes,
    };
  };
  const wraps = [
    createWrap(10, 20, 40, 30),
    createWrap(80, 75, 20, 30),
  ];
  const harness = new SelectionHarness();
  harness._selection = new Set(wraps);
  harness.gridSize = 10;
  harness.__pointerScaleX = 1;
  harness.__pointerScaleY = 1;
  harness._setCardPosition = (wrap, x, y) => {
    wrap.setAttribute('data-x', x);
    wrap.setAttribute('data-y', y);
  };
  let saveReason = '';
  harness._queueSave = (reason) => { saveReason = reason; };

  assert.equal(harness._arrangeSelectedCards_('align-top'), true);
  assert.deepEqual(wraps.map((wrap) => wrap.getAttribute('data-y')), ['20', '20']);
  assert.deepEqual(wraps.map((wrap) => wrap.getAttribute('data-y-raw')), ['20', '20']);
  assert.equal(saveReason, 'selection-align-top');
});

test('edit controls center the card menu and hide the edit shortcut on compact cards', async () => {
  const [renderer, styles, selection] = await Promise.all([
    readFile(new URL('../src/cards/card-renderer.js', import.meta.url), 'utf8'),
    readFile(new URL('../src/dashboard/shell-template.js', import.meta.url), 'utf8'),
    readFile(new URL('../src/interactions/selection.js', import.meta.url), 'utf8'),
  ]);

  assert.match(renderer, /aria-label', 'Open card menu'/);
  assert.match(renderer, /mdi:cog-outline/);
  assert.match(renderer, /aria-label', 'Edit card'/);
  assert.match(renderer, /host\.className = 'ddc-card-edit-actions'/);
  assert.match(renderer, /wrap\.addEventListener\('pointerenter', showForPointer\)/);
  assert.match(renderer, /wrap\.addEventListener\('pointerleave', hideForPointer\)/);
  assert.match(styles, /\.ddc-card-edit-actions\{[\s\S]*?top:50% !important;[\s\S]*?left:50% !important;[\s\S]*?width:max-content !important;[\s\S]*?gap:8px;[\s\S]*?opacity:0 !important;[\s\S]*?visibility:hidden !important;[\s\S]*?transform:translate\(-50%, -50%\)/);
  assert.match(styles, /\.ddc-compact-card-actions,[\s\S]*?position:relative !important;[\s\S]*?inset:auto !important;/);
  assert.match(styles, /\.card-wrapper\.editing \.ddc-card-edit-actions\{\s*display:flex !important;/);
  assert.match(styles, /\.ddc-card-edit-actions\.ddc-card-edit-actions-visible,[\s\S]*?\.card-wrapper\.editing:hover \.ddc-card-edit-actions,[\s\S]*?opacity:1 !important;[\s\S]*?visibility:visible !important;[\s\S]*?pointer-events:auto !important;/);
  assert.doesNotMatch(styles, /\.card-wrapper\.editing:focus-within \.ddc-card-edit-actions/);
  assert.match(styles, /@media \(hover:none\), \(pointer:coarse\)\{[\s\S]*?\.card-wrapper\.editing\.selected \.ddc-card-edit-actions/);
  assert.match(styles, /\.card-wrapper\.editing \.ddc-compact-card-actions\{\s*display:flex;/);
  assert.match(styles, /\.card-wrapper\.editing:not\(\.ddc-compact-edit-ui\) \.ddc-card-edit-shortcut\{ display:flex;/);
  assert.match(styles, /\.resize-handle\{\s*display:none; position:absolute; bottom:4px; width:30px; height:30px;/);
  assert.match(styles, /\.card-wrapper\.editing\.ddc-compact-edit-ui \.resize-handle--br\{[\s\S]*?width:26px;[\s\S]*?height:26px;/);
  assert.match(styles, /\.resize-handle::before\{ content:""; position:absolute; inset:-7px; \}/);
  assert.match(styles, /\.card-wrapper\.editing \.delete-handle\{ display:flex \}/);
  assert.match(selection, /data-selection-arrange="align-left"/);
});
