import test from 'node:test';
import assert from 'node:assert/strict';

import { installEditModeMethods } from '../src/interactions/edit-mode.js';

class EditModeLifecycleHarness {
  constructor(editMode = false) {
    this.editMode = editMode;
    this.renderRoot = { querySelector: () => null };
    this.shadowRoot = { querySelector: () => null };
    this.cardContainer = {
      classList: { toggle() {} },
      querySelectorAll: () => [],
    };
    this.persistCalls = 0;
    this.responsiveSyncs = [];
  }

  _persistCurrentResponsiveProfileToMemory_() {
    this.persistCalls += 1;
  }

  _syncResponsiveProfileForViewport_(options) {
    this.responsiveSyncs.push(options);
  }
}

installEditModeMethods(EditModeLifecycleHarness.prototype);

test('view-mode synchronization does not force a responsive card rebuild', () => {
  const harness = new EditModeLifecycleHarness(false);

  harness._toggleEditMode(false);

  assert.equal(harness.persistCalls, 0);
  assert.deepEqual(harness.responsiveSyncs, [{ force: false }]);
});

test('a real edit-mode exit persists and rebuilds the active responsive layout', () => {
  const harness = new EditModeLifecycleHarness(true);

  harness._toggleEditMode(false);

  assert.equal(harness.persistCalls, 1);
  assert.deepEqual(harness.responsiveSyncs, [{ force: true }]);
});
