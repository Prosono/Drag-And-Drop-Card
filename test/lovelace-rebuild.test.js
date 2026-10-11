import test from 'node:test';
import assert from 'node:assert/strict';
import { createCardRebuildHandler, dispatchInternalRebuild } from '../src/cards/lovelace-rebuild.js';
import { installCardBuilderMethods } from '../src/cards/card-renderer.js';
import { installInternalLovelaceRebuildBoundary } from '../src/dashboard/shell-bindings.js';

function fixture() {
  const old = { localName: 'hui-error-card' };
  const container = {};
  const wrap = { parentNode: container, isConnected: true, firstElementChild: old,
    dataset: { layoutCardId: 'one', cfg: JSON.stringify({ type: 'custom:late-card' }), tabId: 'climate' },
    style: { width: '200px' }, classList: { toggle() {} },
    replaceChild(next, previous) { assert.equal(this.firstElementChild, previous); this.firstElementChild = next; },
  };
  const host = { cardContainer: container, activeTab: 'climate', hass: { states: {} },
    _sanitizeCardConfigForStorage_: value => structuredClone(value),
    _cloneCardConfig_: value => structuredClone(value),
  };
  installCardBuilderMethods(host);
  const event = { composedPath: () => [old, wrap, container], stopPropagation() {} };
  return { old, wrap, host, event };
}

test('a late custom card rebuild replaces only its placeholder and coalesces duplicate events', async () => {
  const { old, wrap, host, event } = fixture();
  let listener, stopped = 0, created = 0;
  event.stopPropagation = () => stopped++;
  const replacement = { style: {}, requestUpdate() {} };
  host._createCard = async config => { created++; assert.equal(config.type, 'custom:late-card'); return replacement; };
  installInternalLovelaceRebuildBoundary({ addEventListener: (_, fn) => { listener = fn; } }, host);
  const pending = listener(event);
  listener(event);
  await pending;
  assert.equal(created, 1);
  assert.equal(stopped, 2);
  assert.equal(wrap.firstElementChild, replacement);
  assert.equal(replacement.hass, host.hass);
  assert.equal(wrap.style.width, '200px');
  assert.equal(wrap.dataset.tabId, 'climate');
  assert.equal(host.activeTab, 'climate');
  await listener(event); // stale events from the old element
  assert.equal(created, 1);
  assert.notEqual(old, replacement);
});

test('internal card-mod signals and editor or foreign wrapper events do not rebuild', async () => {
  const { host, old, event, wrap } = fixture();
  let created = 0;
  host._replaceEditedCardElement_ = async () => { created++; };
  const handle = createCardRebuildHandler(host);
  old.dispatchEvent = internal => {
    internal.composedPath = event.composedPath;
    handle(internal);
  };
  dispatchInternalRebuild(old);
  await Promise.resolve();
  await handle({ composedPath: () => [wrap, host.cardContainer] });
  wrap.parentNode = {};
  await handle(event);
  assert.equal(created, 0);
});

for (const change of ['removed', 'edited', 'replaced']) {
  test(`in-flight rebuild cannot overwrite a wrapper that was ${change}`, async () => {
    const { host, event, wrap, old } = fixture();
    let finish;
    host._createCard = () => new Promise(resolve => { finish = resolve; });
    const pending = createCardRebuildHandler(host)(event);
    await Promise.resolve();
    if (change === 'removed') wrap.isConnected = false;
    if (change === 'edited') wrap.dataset.cfg = '{"type":"tile"}';
    const edited = {};
    if (change === 'replaced') wrap.firstElementChild = edited;
    finish({ style: {} });
    await pending;
    assert.equal(wrap.firstElementChild, change === 'replaced' ? edited : old);
  });
}

test('a failed rebuild can be retried by a later request', async () => {
  const { host, event } = fixture();
  let attempts = 0;
  host._replaceEditedCardElement_ = async () => { if (++attempts === 1) throw Error('temporary failure'); };
  const handle = createCardRebuildHandler(host);
  await handle(event);
  await handle(event);
  assert.equal(attempts, 2);
});
