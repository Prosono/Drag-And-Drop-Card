import test from 'node:test';
import assert from 'node:assert/strict';

import { installScreenSaverMethods } from '../src/media/screensaver.js';

class ScreenSaverHarness {}
installScreenSaverMethods(ScreenSaverHarness.prototype);

function createHarness({ active = true } = {}) {
  let renderCount = 0;
  let resetCount = 0;
  const tabsStyle = {
    display: 'none',
    removeProperty(name) {
      if (name === 'display') this.display = '';
    },
  };
  const tabsBar = { style: tabsStyle };
  const harness = new ScreenSaverHarness();
  harness.screensaverActive = active;
  harness.__savedTabsDisplay = 'none';
  harness.tabsBar = tabsBar;
  harness.shadowRoot = { querySelector: () => tabsBar };
  harness.screenSaverOverlay = { classList: { remove() {} } };
  harness._renderTabs = () => {
    renderCount += 1;
    tabsStyle.display = '';
  };
  harness._syncTabsPlacement_ = () => {};
  harness._syncTabsWidth_ = () => {};
  harness._resetScreensaverTimer = () => { resetCount += 1; };

  return {
    harness,
    tabsStyle,
    get renderCount() { return renderCount; },
    get resetCount() { return resetCount; },
  };
}

test('dismissing the screen saver derives tab visibility from the live tab model', () => {
  const state = createHarness();

  state.harness._deactivateScreenSaver();

  assert.equal(state.harness.screensaverActive, false);
  assert.equal(state.tabsStyle.display, '');
  assert.ok(state.renderCount >= 1);
  assert.equal(state.resetCount, 1);
});

test('screen saver tab restoration is idempotent when duplicate activity events arrive', () => {
  const state = createHarness({ active: false });

  state.harness._deactivateScreenSaver();

  assert.equal(state.tabsStyle.display, '');
  assert.ok(state.renderCount >= 1);
  assert.equal(state.resetCount, 0);
});

test('timer-driven dismissal can restore chrome without scheduling a duplicate timer', () => {
  const state = createHarness();

  state.harness._deactivateScreenSaver({ reschedule: false });

  assert.equal(state.tabsStyle.display, '');
  assert.equal(state.resetCount, 0);
});
