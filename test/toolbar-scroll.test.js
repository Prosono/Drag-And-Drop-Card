import test from 'node:test';
import assert from 'node:assert/strict';
import { installToolbarBehaviorMethods } from '../src/dashboard/toolbar-controller.js';

test('toolbar scroll follows chrome without remeasuring sizes; resize still measures', () => {
  const saved = { window: globalThis.window, requestAnimationFrame: globalThis.requestAnimationFrame,
    cancelAnimationFrame: globalThis.cancelAnimationFrame, ResizeObserver: globalThis.ResizeObserver };
  const listeners = new Map(), frames = new Map();
  let id = 0, gutters = 0, heights = 0, positions = 0, tops = 0;
  globalThis.window = { addEventListener: (type, fn) => listeners.set(type, fn),
    removeEventListener: type => listeners.delete(type), setInterval: () => 1, clearInterval() {} };
  globalThis.ResizeObserver = class { observe() {} disconnect() {} };
  globalThis.requestAnimationFrame = fn => { frames.set(++id, fn); return id; };
  globalThis.cancelAnimationFrame = key => frames.delete(key);
  const flush = () => { const jobs = [...frames.values()]; frames.clear(); jobs.forEach(fn => fn()); };
  try {
    const host = {};
    installToolbarBehaviorMethods(host);
    host._computeHaSidebarGutters_ = () => gutters++;
    host._computeHaTopGutter_ = () => tops++;
    host._refreshToolbarOpenHeight_ = () => heights++;
    host._syncToolbarFollowPosition_ = () => positions++;
    host._installToolbarFollowListeners_();
    flush();
    assert.equal(heights, 1);
    listeners.get('scroll')({ composedPath: () => [host] });
    assert.equal(frames.size, 0);
    for (let i = 0; i < 20; i++) listeners.get('scroll')({ composedPath: () => [] });
    assert.equal(frames.size, 1);
    flush();
    assert.equal(gutters, 1);
    assert.equal(heights, 1);
    assert.equal(tops, 2);
    assert.equal(positions, 2);
    listeners.get('scroll')({});
    listeners.get('resize')({});
    flush();
    assert.equal(gutters, 2);
    assert.equal(heights, 2);
    listeners.get('scroll')({});
    host._removeToolbarFollowListeners_();
    assert.equal(frames.size, 0);
    assert.equal(listeners.size, 0);
  } finally { Object.assign(globalThis, saved); }
});
