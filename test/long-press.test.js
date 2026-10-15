import test from 'node:test';
import assert from 'node:assert/strict';
import { installEditModeMethods } from '../src/interactions/edit-mode.js';

function target() {
  const listeners = new Map();
  return {
    listeners,
    addEventListener(type, fn) { if (!listeners.has(type)) listeners.set(type, new Set()); listeners.get(type).add(fn); },
    removeEventListener(type, fn) { listeners.get(type)?.delete(fn); },
    emit(type, event = {}) { for (const fn of listeners.get(type) || []) fn(event); },
  };
}
function setup(t) {
  const win = target(), doc = target(), cont = target();
  const rings = new Set(), timers = new Map(), frames = new Map();
  let id = 0;
  doc.body = { appendChild: el => rings.add(el) };
  doc.createElement = () => ({ style: {}, querySelector: () => ({ style: {} }), remove() { rings.delete(this); } });
  cont.nodeType = 1;
  cont.contains = el => el === cont;
  for (const [key, value] of Object.entries({ window: win, document: doc,
    setTimeout: fn => { timers.set(++id, fn); return id; }, clearTimeout: id => timers.delete(id),
    requestAnimationFrame: fn => { frames.set(++id, fn); return id; }, cancelAnimationFrame: id => frames.delete(id),
  })) {
    const descriptor = Object.getOwnPropertyDescriptor(globalThis, key);
    Object.defineProperty(globalThis, key, { configurable: true, writable: true, value });
    t.after(() => descriptor ? Object.defineProperty(globalThis, key, descriptor) : delete globalThis[key]);
  }
  class Host {}
  installEditModeMethods(Host.prototype);
  const host = new Host();
  Object.assign(host, { cardContainer: cont, isConnected: true, editMode: false,
    allowed: true, toggles: 0, _canEditDashboard_() { return this.allowed; },
    _isInHaEditorPreview: () => false,
    _toggleEditMode(value) { this.__clearPressTimer?.(); this.editMode = value; this.toggles++; },
  });
  host._installLongPressToEnterEdit();
  const down = (pointerId, isPrimary = true, inside = true) => {
    const event = { pointerId, isPrimary, pointerType: 'touch', clientX: 20, clientY: 20, target: cont };
    win.emit('pointerdown', event);
    if (inside) cont.emit('pointerdown', event);
  };
  const finish = () => { for (const [id, fn] of [...timers]) { timers.delete(id); fn(); } };
  return { host, win, doc, cont, rings, timers, frames, down, finish };
}

test('two-finger taps cancel the hold and leave no orphan ring or timer', t => {
  const f = setup(t);
  f.down(1); assert.equal(f.rings.size, 1);
  f.down(2, false);
  assert.equal(f.rings.size, 0); assert.equal(f.timers.size, 0); assert.equal(f.frames.size, 0);
  f.win.emit('pointerup', { pointerId: 2 }); f.win.emit('pointerup', { pointerId: 1 });
  f.finish(); assert.equal(f.host.toggles, 0);
  f.down(3); f.finish(); assert.equal(f.host.toggles, 1); assert.equal(f.rings.size, 0);
});

test('second finger outside canvas cancels; releasing it does not restart hold', t => {
  const f = setup(t); f.down(1); f.down(2, false, false);
  f.win.emit('pointerup', { pointerId: 2 }); f.finish();
  assert.equal(f.rings.size, 0); assert.equal(f.host.toggles, 0);
});

for (const type of ['pointerup', 'pointercancel', 'blur', 'pagehide', 'location-changed', 'popstate', 'visibilitychange', 'pointermove']) {
  test(`${type} removes the ring and pending work`, t => {
    const f = setup(t); f.down(1);
    if (type === 'visibilitychange') { f.doc.hidden = true; f.doc.emit(type); }
    else f.win.emit(type, { pointerId: 1, clientX: 100, clientY: 100 });
    assert.equal(f.rings.size, 0); assert.equal(f.timers.size, 0);
    f.finish(); assert.equal(f.host.toggles, 0);
  });
}

test('restricted users see no ring, and access is checked again at completion', t => {
  const f = setup(t); f.host.allowed = false; f.down(1);
  assert.equal(f.rings.size, 0); assert.equal(f.timers.size, 0);
  f.cont.emit('dblclick', { target: f.cont }); assert.equal(f.host.toggles, 0);
  f.win.emit('pointerup', { pointerId: 1 });
  f.host.allowed = true; f.down(2); f.host.allowed = false; f.finish();
  assert.equal(f.host.toggles, 0); assert.equal(f.rings.size, 0);
});

test('cleanup removes all listeners and supports reinstall without duplicates', t => {
  const f = setup(t); f.down(1); f.host.__lpCleanup();
  for (const node of [f.win, f.doc, f.cont]) for (const set of node.listeners.values()) assert.equal(set.size, 0);
  assert.equal(f.rings.size, 0); assert.equal(f.timers.size, 0);
  f.host._installLongPressToEnterEdit(); f.host._installLongPressToEnterEdit();
  f.down(2); f.finish(); assert.equal(f.host.toggles, 1);
});
