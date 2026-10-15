import test from 'node:test';
import assert from 'node:assert/strict';
import { installInputInteractionMethods } from '../src/interactions/input-handlers.js';

test('horizontal canvas and vertical HA scroller resolve across nested shadow roots', t => {
  const el = (x, y, overflowX = 'auto', overflowY = 'auto') => ({ nodeType: 1,
    scrollWidth: 300 + x, clientWidth: 300, scrollHeight: 500 + y, clientHeight: 500,
    overflowX, overflowY });
  const page = el(0, 2000, 'visible', 'visible');
  for (const [key, value] of Object.entries({ document: { scrollingElement: page }, window: {
    getComputedStyle(node) { assert.equal(node.nodeType, 1, 'only Elements have computed styles'); return node; },
  } })) {
    const old = Object.getOwnPropertyDescriptor(globalThis, key);
    Object.defineProperty(globalThis, key, { configurable: true, value });
    t.after(() => old ? Object.defineProperty(globalThis, key, old) : delete globalThis[key]);
  }
  const haScroller = el(0, 1200);
  const haHost = el(0, 0); haHost.parentElement = haScroller;
  const haShadow = { nodeType: 11, host: haHost };
  const host = el(0, 0); host.parentNode = haShadow; host.getRootNode = () => haShadow;
  installInputInteractionMethods(host);
  const shadow = { nodeType: 11, host };
  const outer = el(900, 0, 'auto', 'hidden'); outer.parentNode = shadow; outer.getRootNode = () => shadow;
  host.cardContainer = el(0, 0);
  assert.equal(host._getMiddleMousePanAxisTarget_(outer, 'x'), outer);
  assert.equal(host._getMiddleMousePanAxisTarget_(outer, 'y'), haScroller);
  // Edit handles/transformed content can overflow a hidden canvas viewport.
  outer.scrollHeight = 900;
  host.cardContainer.scrollHeight = 1800;
  host.cardContainer.overflowY = 'hidden';
  assert.equal(host._getMiddleMousePanAxisTarget_(outer, 'y'), haScroller);
  assert.equal(host._getMiddleMousePanAxisTarget_(outer, 'x'), outer);
  // If HA delegates scrolling to the document, visible overflow must be accepted.
  haScroller.scrollHeight = haScroller.clientHeight;
  assert.equal(host._getMiddleMousePanAxisTarget_(outer, 'y'), page);
});
