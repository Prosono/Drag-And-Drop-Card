import test from 'node:test';
import assert from 'node:assert/strict';
import { installInteractBehaviorMethods } from '../src/interactions/drag-interactions.js';
import { installTouchPan } from '../src/interactions/touch-pan.js';
import { installGridSelectPatch } from '../src/interactions/grid-selection.js';
function setup(t, editMode = true) {
  const handlers = new Map(), timers = new Map(), frames = new Map();
  let autoFrame = true;
  const frame = () => { for (const [id, fn] of [...frames]) { frames.delete(id); fn(); } };
  const win = { addEventListener: (type, fn) => handlers.set(type, fn), removeEventListener: type => handlers.delete(type) };
  const doc = { addEventListener() {}, removeEventListener() {} };
  let timerId = 0, rings = 0;
  for (const [key, value] of Object.entries({ window: win, document: doc,
    requestAnimationFrame: fn => { frames.set(++timerId, fn); return timerId; },
    cancelAnimationFrame: id => frames.delete(id),
    setTimeout: fn => { timers.set(++timerId, fn); return timerId; }, clearTimeout: id => timers.delete(id) })) {
    const old = Object.getOwnPropertyDescriptor(globalThis, key);
    Object.defineProperty(globalThis, key, { configurable: true, value });
    t.after(() => old ? Object.defineProperty(globalThis, key, old) : delete globalThis[key]);
  }
  class Host {}
  installGridSelectPatch(Host);
  const host = new Host();
  const container = {}, scroll = { scrollLeft: 100, scrollTop: 200 };
  let created = null;
  Object.assign(host, { cardContainer: container, editMode, isConnected: true, allowed: true, empty: true,
    _gridCanvas: {}, _gridCellSize: 10,
    _getMiddleMousePanPrimaryTarget_: () => scroll, _getMiddleMousePanAxisTarget_: () => scroll,
    _canEditDashboard_() { return this.allowed; }, _emptySpaceAt_() { return this.empty; },
    _locToCell_: (x, y) => ({ col: Math.floor(x / 10), row: Math.floor(y / 10) }),
    _markGridDirty() {}, _toggleEditMode(value) { this.editMode = value; },
    _promptNewCardForRect_: rect => { created = rect; },
    __makePressRing: () => { rings++; return { remove: () => rings-- }; },
  });
  const cleanup = installTouchPan(host);
  const emit = (type, x = 100, y = 100, id = 1, extra = {}) => {
    const event = { type, pointerId: id, pointerType: 'touch', clientX: x, clientY: y,
      cancelable: true, composedPath: () => [container], preventDefault() { this.prevented = true; },
      stopImmediatePropagation() { this.stopped = true; }, ...extra };
    handlers.get(type)?.(event); if (autoFrame) frame(); return event;
  };
  const hold = () => { for (const [id, fn] of [...timers]) { timers.delete(id); fn(); } };
  return { host, scroll, emit, hold, cleanup, handlers, timers, frames, frame, batch: () => { autoFrame = false; }, rings: () => rings, created: () => created };
}
for (const edit of [true, false]) test(`one finger pans diagonally with editMode=${edit} without creating cards`, t => {
  const f = setup(t, edit);
  f.emit('pointerdown');
  f.emit('pointermove', 60, 30);
  assert.deepEqual(f.scroll, { scrollLeft: 140, scrollTop: 270 });
  assert.equal(f.rings(), 0); assert.equal(f.timers.size, 0);
  f.emit('pointermove', 120, 140);
  assert.deepEqual(f.scroll, { scrollLeft: 80, scrollTop: 160 });
  f.emit('pointerup', 120, 140);
  assert.equal(f.created(), null);
  assert.equal(f.emit('click', 120, 140, 1, { detail: 1 }).prevented, true);
});
test('hold on empty edit canvas arms selection; drag and release creates the chosen rectangle', t => {
  const f = setup(t);
  f.emit('pointerdown', 20, 30); f.hold();
  assert.equal(f.host.__touchAreaSelecting, true); assert.equal(f.rings(), 0);
  f.emit('pointermove', 60, 80); f.emit('pointerup', 60, 80);
  assert.deepEqual(f.created(), { x: 20, y: 30, w: 50, h: 60 });
  assert.deepEqual(f.scroll, { scrollLeft: 100, scrollTop: 200 });
  assert.equal(f.host.__touchAreaSelecting, false);
});
test('view-mode hold enters editing but does not immediately start drawing', t => {
  const f = setup(t, false); f.emit('pointerdown'); f.hold();
  assert.equal(f.host.editMode, true);
  f.emit('pointermove', 30, 30); f.emit('pointerup', 30, 30);
  assert.equal(f.created(), null);
});
test('tapping cards stays available, holding cards or restricted canvas never arms creation', t => {
  const f = setup(t); f.host.empty = false; f.emit('pointerdown'); f.hold(); f.emit('pointerup');
  assert.equal(f.emit('click', 100, 100, 1, { detail: 1 }).prevented, undefined);
  f.host.empty = true; f.host.allowed = false; f.emit('pointerdown');
  assert.equal(f.rings(), 0); f.hold(); assert.equal(f.created(), null);
});
for (const cancel of ['pointercancel', 'blur', 'location-changed', 'pagehide']) test(`${cancel} aborts area selection and clears rings`, t => {
  const f = setup(t); f.emit('pointerdown'); f.hold(); f.emit('pointermove', 200, 200); f.emit(cancel);
  assert.equal(f.created(), null); assert.equal(f.rings(), 0); assert.equal(f.host.__touchAreaSelecting, false);
});
test('second finger cancels creation and pans instead; cleanup removes listeners', t => {
  const f = setup(t); f.emit('pointerdown'); f.hold();
  f.emit('pointerdown', 200, 100, 2);
  assert.equal(f.host.__touchAreaSelecting, false);
  f.emit('pointermove', 50, 50, 1); f.emit('pointermove', 150, 50, 2);
  assert.deepEqual(f.scroll, { scrollLeft: 150, scrollTop: 250 });
  f.emit('pointerup', 150, 50, 2); f.emit('pointerup', 50, 50, 1);
  assert.equal(f.created(), null);
  f.cleanup(); assert.equal(f.handlers.size, 0); assert.equal(f.rings(), 0);
});

test('shared scroller gets an atomic instant diagonal update and restores scroll preferences', t => {
  const f = setup(t);
  const calls = [];
  f.scroll.style = { scrollBehavior: 'smooth', scrollSnapType: 'x mandatory' };
  f.scroll.scrollTo = options => {
    calls.push(options);
    f.scroll.scrollLeft = options.left; f.scroll.scrollTop = options.top;
  };
  f.emit('pointerdown'); f.emit('pointermove', 40, 20);
  assert.deepEqual(calls, [{ left: 160, top: 280, behavior: 'instant' }]);
  assert.equal(f.scroll.style.scrollBehavior, 'auto');
  assert.equal(f.scroll.style.scrollSnapType, 'x mandatory');
  f.emit('pointerup', 40, 20);
  assert.equal(f.scroll.style.scrollBehavior, 'smooth');
  assert.equal(f.scroll.style.scrollSnapType, 'x mandatory');
});

test('touch selection uses a visible DOM rectangle even outside light-grid mode', t => {
  const f = setup(t);
  f.host._gridLightMode = false;
  f.host._gridSelectionEl = { style: {} };
  f.host._gridHoverEl = { style: {} };
  f.host._ensureGridDomOverlays_ = () => {};
  f.emit('pointerdown', 20, 30); f.hold();
  f.emit('pointermove', 70, 90);
  f.host._updateGridDomOverlays_();
  const style = f.host._gridSelectionEl.style;
  assert.equal(style.display, 'block');
  assert.equal(style.transform, 'translate(20px, 30px)');
  assert.equal(style.width, '60px'); assert.equal(style.height, '70px');
  assert.equal(style.zIndex, '2147483000');
  f.emit('pointercancel');
  assert.equal(style.display, 'none');
});

test('separate horizontal and vertical scrollers move together in edit mode', t => {
  const f = setup(t, true);
  const vertical = { scrollLeft: 0, scrollTop: 200 };
  f.host._getMiddleMousePanAxisTarget_ = (_, axis) => axis === 'x' ? f.scroll : vertical;
  f.emit('pointerdown', 100, 100);
  f.emit('pointermove', 60, 30);
  assert.equal(f.scroll.scrollLeft, 140);
  assert.equal(vertical.scrollTop, 270);
  assert.equal(f.scroll.scrollTop, 200);
  f.emit('pointermove', 40, 70);
  assert.equal(f.scroll.scrollLeft, 160);
  assert.equal(vertical.scrollTop, 230);
  f.emit('pointerup', 40, 70);
});

test('view-mode pan does not jump back after an external scroll adjustment', t => {
  const f = setup(t, false);
  f.emit('pointerdown', 100, 100);
  f.emit('pointermove', 80, 80);
  assert.equal(f.scroll.scrollTop, 220);
  // Mobile viewport/layout adjustment during the gesture.
  f.scroll.scrollTop = 300;
  f.emit('pointermove', 70, 70);
  assert.equal(f.scroll.scrollTop, 310);
  f.emit('pointerup', 70, 70);
});

test('reversing direction at an edge immediately moves the canvas', t => {
  const f = setup(t);
  f.scroll.scrollLeft = 0; f.scroll.scrollTop = 0;
  f.emit('pointerdown', 100, 100);
  f.emit('pointermove', 180, 180);
  assert.equal(f.scroll.scrollTop, 0);
  f.emit('pointermove', 170, 170);
  assert.equal(f.scroll.scrollTop, 10);
  assert.equal(f.scroll.scrollLeft, 10);
  f.cleanup();
});

test('direct touch grid events cannot create a card without completing a hold', t => {
  const f = setup(t);
  f.host._onGridPointerDown({ pointerType: 'touch', pointerId: 7, clientX: 10, clientY: 10 });
  f.host._onGridPointerMove({ pointerType: 'touch', pointerId: 7, clientX: 200, clientY: 200 });
  f.host._onGridPointerUp({ pointerType: 'touch', pointerId: 7, clientX: 200, clientY: 200 });
  assert.equal(f.created(), null);
  // A leftover selection flag alone must not authorize a different finger.
  f.host.__touchAreaSelecting = true; f.host.__touchAreaPointerId = 1;
  f.host._onGridPointerDown({ pointerType: 'touch', pointerId: 7, clientX: 10, clientY: 10 });
  assert.equal(f.host._gridDown, false);
});

test('compatibility mouse events after panning cannot start grid creation', t => {
  const f = setup(t); f.emit('pointerdown'); f.emit('pointermove', 20, 20); f.emit('pointerup', 20, 20);
  assert.equal(f.emit('mousedown', 20, 20, 1, { pointerType: 'mouse' }).prevented, true);
  f.host._onGridPointerDown({ pointerType: 'mouse', pointerId: 2, button: 0, clientX: 10, clientY: 10 });
  f.host._onGridPointerMove({ pointerType: 'mouse', pointerId: 2, clientX: 200, clientY: 200 });
  f.host._onGridPointerUp({ pointerType: 'mouse', pointerId: 2, button: 0 });
  assert.equal(f.created(), null);
});

test('touch movement cancels the hold even when pointermove is missing', t => {
  const f = setup(t); f.emit('pointerdown', 100, 100);
  f.emit('touchmove', 0, 0, 1, { touches: [{ clientX: 40, clientY: 30 }] });
  f.hold();
  assert.equal(f.host.__touchAreaSelecting, false);
  assert.equal(f.timers.size, 0);
  assert.deepEqual(f.scroll, { scrollLeft: 160, scrollTop: 270 });
  f.emit('pointerup', 40, 30);
  assert.equal(f.created(), null);
});

test('ordinary mouse drag still creates a card without holding', t => {
  const f = setup(t);
  f.host._onGridPointerDown({ pointerType: 'mouse', pointerId: 3, button: 0, clientX: 20, clientY: 30, currentTarget: {} });
  f.host._onGridPointerMove({ pointerType: 'mouse', pointerId: 3, clientX: 60, clientY: 80 });
  f.host._onGridPointerUp({ pointerType: 'mouse', pointerId: 3, button: 0 });
  assert.deepEqual(f.created(), { x: 20, y: 30, w: 50, h: 60 });
});

test('hold over a card cannot start area creation even if document hit-testing sees a shadow host', t => {
  const f = setup(t);
  const card = { matches: selector => selector.includes('.card-wrapper') };
  f.emit('pointerdown', 100, 100, 1, { composedPath: () => [card, f.host.cardContainer] });
  f.hold();
  assert.equal(f.timers.size, 0);
  assert.equal(f.rings(), 0);
  assert.notEqual(f.host.__touchAreaSelecting, true);
  f.emit('pointermove', 40, 40);
  assert.equal(f.scroll.scrollTop, 200);
  f.emit('pointerup', 40, 40);
  assert.equal(f.created(), null);
});

test('empty-space detection uses the DDC shadow root and rejects outside hits', t => {
  const f = setup(t);
  delete f.host._emptySpaceAt_;
  const card = { closest: () => ({}) }, blank = { closest: () => null };
  f.host.cardContainer.contains = el => el === card || el === blank;
  f.host.shadowRoot = { elementFromPoint: () => card };
  assert.equal(f.host._emptySpaceAt_(20, 20), false);
  f.host.shadowRoot.elementFromPoint = () => blank;
  assert.equal(f.host._emptySpaceAt_(20, 20), true);
  f.host.shadowRoot.elementFromPoint = () => ({ closest: () => null });
  assert.equal(f.host._emptySpaceAt_(20, 20), false);
});

for (const type of ['touchend', 'touchcancel']) test(`${type} clears a pending hold without a pointer release`, t => {
  const f = setup(t); f.emit('pointerdown');
  f.emit(type, 100, 100, 1, { touches: [] });
  f.hold();
  assert.equal(f.timers.size, 0); assert.equal(f.rings(), 0);
  assert.equal(f.created(), null); assert.equal(f.host.__touchAreaSelecting, false);
});

test('touch-only completion after hold opens the card picker once, even with a later pointerup', t => {
  const f = setup(t); let count = 0;
  f.host._promptNewCardForRect_ = () => count++;
  f.emit('pointerdown', 20, 30); f.hold(); f.emit('pointermove', 60, 80);
  f.emit('touchend', 60, 80, 1, { touches: [] });
  f.emit('pointerup', 60, 80);
  assert.equal(count, 1); assert.equal(f.rings(), 0);
});

test('a burst of pointer and duplicate touch movements produces one scroll write per frame', t => {
  const f = setup(t); f.batch();
  const writes = [];
  f.scroll.scrollTo = options => { writes.push(options); f.scroll.scrollLeft = options.left; f.scroll.scrollTop = options.top; };
  f.emit('pointerdown', 100, 100);
  for (let i = 1; i <= 20; i++) {
    f.emit('pointermove', 100 - i, 100 - i * 2);
    f.emit('touchmove', 0, 0, 1, { touches: [{ clientX: 100 - i, clientY: 100 - i * 2 }] });
  }
  assert.equal(writes.length, 0); assert.equal(f.frames.size, 1);
  f.frame();
  assert.deepEqual(writes, [{ left: 120, top: 240, behavior: 'instant' }]);
  f.emit('touchmove', 0, 0, 1, { touches: [{ clientX: 80, clientY: 60 }] });
  assert.equal(f.frames.size, 0);
});

test('release flushes the last movement and cleanup cancels queued movement', t => {
  const f = setup(t); f.batch();
  f.emit('pointerdown'); f.emit('pointermove', 50, 40);
  f.emit('pointerup', 50, 40);
  assert.deepEqual(f.scroll, { scrollLeft: 150, scrollTop: 260 });
  assert.equal(f.frames.size, 0);
  f.emit('pointerdown'); f.emit('pointermove', 40, 30); f.cleanup(); f.frame();
  assert.deepEqual(f.scroll, { scrollLeft: 150, scrollTop: 260 });
  assert.equal(f.frames.size, 0);
});

 test('pointer cancellation discards queued scrolling', t => {
  const f = setup(t); f.batch();
  f.emit('pointerdown'); f.emit('pointermove', 40, 30); f.emit('pointercancel'); f.frame();
  assert.deepEqual(f.scroll, { scrollLeft: 100, scrollTop: 200 });
  assert.equal(f.frames.size, 0);
});

for (const part of ['card', 'resize handle', 'edit button', 'delete button']) {
  test(`edit-mode ${part} receives touch events without canvas panning`, t => {
    const f = setup(t);
    const wrap = { matches: selector => selector === '.card-wrapper:not(.ddc-placeholder)' };
    const extra = { composedPath: () => [{}, wrap, f.host.cardContainer] };
    for (const type of ['pointerdown', 'touchstart', 'pointermove', 'touchmove', 'pointerup', 'touchend', 'click']) {
      const ev = f.emit(type, type.includes('move') ? 30 : 100, 40, 1, { ...extra, touches: [], detail: 1 });
      assert.equal(ev.stopped, undefined, type);
      assert.equal(ev.prevented, undefined, type);
    }
    assert.deepEqual(f.scroll, { scrollLeft: 100, scrollTop: 200 });
    assert.equal(f.rings(), 0);
    assert.equal(f.created(), null);
    f.emit('pointerdown'); f.emit('pointermove', 20, 30);
    assert.deepEqual(f.scroll, { scrollLeft: 180, scrollTop: 270 });
  });
}

test('a deliberate card tap immediately after panning is not swallowed', t => {
  const f = setup(t);
  f.emit('pointerdown'); f.emit('pointermove', 20, 30); f.emit('pointerup');
  const wrap = { matches: selector => selector.includes('.card-wrapper') };
  const extra = { composedPath: () => [wrap, f.host.cardContainer], detail: 1 };
  assert.equal(f.emit('pointerdown', 100, 100, 2, extra).stopped, undefined);
  f.emit('pointerup', 100, 100, 2, extra);
  assert.equal(f.emit('click', 100, 100, 2, extra).stopped, undefined);
});

test('a canvas pan stays owned even when the finger crosses a card', t => {
  const f = setup(t);
  f.emit('pointerdown');
  const extra = { composedPath: () => [{ matches: selector => selector.includes('.card-wrapper') }, f.host.cardContainer] };
  assert.equal(f.emit('pointermove', 20, 30, 1, extra).stopped, true);
  assert.deepEqual(f.scroll, { scrollLeft: 180, scrollTop: 270 });
});

test('view-mode dragging over cards still pans', t => {
  const f = setup(t, false);
  const extra = { composedPath: () => [{ matches: selector => selector.includes('.card-wrapper') }, f.host.cardContainer] };
  f.emit('pointerdown', 100, 100, 1, extra);
  f.emit('pointermove', 20, 30, 1, extra);
  assert.deepEqual(f.scroll, { scrollLeft: 180, scrollTop: 270 });
});

test('card selection responds to touch pointerdown and leaves resize controls alone', t => {
  const f = setup(t);
  installInteractBehaviorMethods(f.host);
  const handlers = new Map();
  const wrap = { dataset: {}, addEventListener: (name, fn) => handlers.set(name, fn) };
  window.interact = () => ({ draggable() {}, resizable() {} });
  f.host._selection = new Set();
  f.host._clearSelection = () => f.host._selection.clear();
  f.host._toggleSelection = card => f.host._selection.add(card);
  f.host._initCardInteract(wrap);
  const select = handlers.get('pointerdown');
  assert.equal(typeof select, 'function');
  select({ pointerType: 'touch', button: 0, target: { closest: () => null } });
  assert.equal(f.host._selection.has(wrap), true);
  f.host._selection.clear();
  select({ pointerType: 'touch', button: 0, target: { closest: selector => selector === '.resize-handle' } });
  assert.equal(f.host._selection.size, 0);
});

for (const selector of ['ha-control-slider', 'ha-control-circular-slider', 'ha-slider', 'input[type="range"]', '[role="slider"]']) {
  test(`${selector} keeps its complete gesture in view mode, including nested shadow content`, t => {
    const f = setup(t, false);
    const control = { matches: selectors => selectors.split(', ').includes(selector) };
    const nested = { composedPath: () => [{}, {}, control, {}, f.host.cardContainer] };
    assert.equal(f.emit('pointerdown', 100, 100, 1, nested).stopped, undefined);
    assert.equal(f.emit('touchstart', 100, 100, 1, nested).stopped, undefined);
    f.hold();
    // The drag continues even when subsequent events target blank canvas.
    for (const type of ['pointermove', 'touchmove', 'mousedown', 'mousemove']) {
      const event = f.emit(type, 20, 30, 1, { touches: [{ clientX: 20, clientY: 30 }], sourceCapabilities: { firesTouchEvents: true } });
      assert.equal(event.stopped, undefined, type);
      assert.equal(event.prevented, undefined, type);
    }
    assert.equal(f.emit('pointerup', 20, 30).stopped, undefined);
    assert.equal(f.emit('touchend', 20, 30, 1, { touches: [] }).stopped, undefined);
    assert.equal(f.emit('click', 20, 30, 1, { ...nested, detail: 1 }).stopped, undefined);
    assert.deepEqual(f.scroll, { scrollLeft: 100, scrollTop: 200 });
    assert.equal(f.host.editMode, false);
    assert.equal(f.rings(), 0);
    assert.equal(f.created(), null);
    f.emit('pointerdown'); f.emit('pointermove', 20, 30);
    assert.deepEqual(f.scroll, { scrollLeft: 180, scrollTop: 270 });
  });
}

test('a slider touch after panning is accepted, but crossing a slider during a pan does not transfer ownership', t => {
  const f = setup(t, false);
  const control = { matches: selectors => selectors.includes('ha-control-slider') };
  const extra = { composedPath: () => [control, f.host.cardContainer], detail: 1 };
  f.emit('pointerdown');
  assert.equal(f.emit('pointermove', 20, 30, 1, extra).stopped, true);
  f.emit('pointerup');
  assert.equal(f.emit('click', 20, 30, 1, extra).stopped, true);
  assert.equal(f.emit('pointerdown', 100, 100, 2, extra).stopped, undefined);
  f.emit('pointerup', 100, 100, 2, extra);
  assert.equal(f.emit('click', 100, 100, 2, extra).stopped, undefined);
});

for (const finish of ['pointercancel', 'touchcancel', 'blur']) {
  test(`delegated slider gesture releases ownership on ${finish}`, t => {
    const f = setup(t, false);
    const extra = { composedPath: () => [{ matches: () => true }, f.host.cardContainer] };
    f.emit('pointerdown', 100, 100, 1, extra);
    f.emit(finish);
    f.emit('pointerdown'); f.emit('pointermove', 20, 30);
    assert.deepEqual(f.scroll, { scrollLeft: 180, scrollTop: 270 });
  });
}

test('second finger cannot turn an active slider adjustment into a canvas pan', t => {
  const f = setup(t, false);
  const extra = { composedPath: () => [{ matches: () => true }, f.host.cardContainer] };
  f.emit('pointerdown', 100, 100, 1, extra);
  assert.equal(f.emit('pointerdown', 200, 100, 2).stopped, undefined);
  f.emit('pointerup', 100, 100, 1);
  assert.equal(f.emit('pointermove', 50, 30, 2).stopped, undefined);
  assert.deepEqual(f.scroll, { scrollLeft: 100, scrollTop: 200 });
  f.emit('pointerup', 50, 30, 2);
  f.emit('pointerdown'); f.emit('pointermove', 20, 30);
  assert.deepEqual(f.scroll, { scrollLeft: 180, scrollTop: 270 });
});
