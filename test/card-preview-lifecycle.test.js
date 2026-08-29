import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import {
  bridgeHaFormCardEditor,
  mergeVisualEditorConfig,
  mountCardPreviewElement,
  readVisualEditorConfig,
  resolveVisualEditorConfigForCommit,
} from '../src/cards/smart-card-picker.js';
import { installCardBuilderMethods } from '../src/cards/card-renderer.js';

function createHost(log) {
  return {
    child: null,
    replaceChildren(element) {
      log.push('connect');
      this.child = element;
      element.connectedCallback?.();
    },
  };
}

test('helper-created custom-card preview receives hass before it is connected', () => {
  const log = [];
  const hass = { states: {} };
  const config = {
    type: 'custom:bubble-card',
    card_type: 'button',
    modules: ['room-card-plus'],
  };
  const element = {
    configApplications: 1, // createCardElement(config) already applied it
    setConfig() {
      this.configApplications += 1;
      log.push('setConfig');
    },
    set hass(value) {
      this._hass = value;
      log.push('hass');
    },
    connectedCallback() {
      log.push('connectedCallback');
      assert.equal(this._hass, hass);
    },
  };
  const host = createHost(log);

  mountCardPreviewElement({
    host,
    element,
    config,
    hass,
    configAlreadyApplied: true,
  });

  assert.equal(element.configApplications, 1);
  assert.equal(host.child, element);
  assert.deepEqual(log, ['hass', 'connect', 'connectedCallback']);
});

test('directly-created DDC preview is configured before hass and connection', () => {
  const log = [];
  const hass = { states: {} };
  const config = { type: 'custom:ddc-text-card', text: 'Hello' };
  const element = {
    setConfig(value) {
      this.config = value;
      log.push('setConfig');
    },
    set hass(value) {
      this._hass = value;
      log.push('hass');
    },
    connectedCallback() {
      log.push('connectedCallback');
      assert.equal(this.config, config);
      assert.equal(this._hass, hass);
    },
  };
  const host = createHost(log);

  mountCardPreviewElement({ host, element, config, hass });

  assert.deepEqual(log, ['setConfig', 'hass', 'connect', 'connectedCallback']);
});

test('edit mode honors the configured card overflow instead of forcing clipping', async () => {
  const source = await readFile(
    new URL('../src/dashboard/shell-template.js', import.meta.url),
    'utf8',
  );

  assert.match(
    source,
    /\.card-wrapper\.editing\s*\{[\s\S]*?overflow:\s*var\(--ddc-card-overflow,\s*auto\);/,
  );
  assert.doesNotMatch(
    source,
    /\.card-wrapper\.editing\s*\{[^}]*overflow:\s*hidden;/,
  );
});

test('picker host exposes Home Assistant editor-preview context to custom cards', async () => {
  const source = await readFile(
    new URL('../src/cards/smart-card-picker.js', import.meta.url),
    'utf8',
  );

  assert.match(
    source,
    /id="cardHost"\s+class="element-preview ddc-element-preview"/,
  );
});

test('visual editor changes preserve YAML-authored fields and update the selected entity', () => {
  const current = {
    type: 'tile',
    entity: 'light.kitchen',
    name: 'Kitchen',
    tap_action: { action: 'toggle' },
  };

  assert.deepEqual(
    mergeVisualEditorConfig(current, 'tile', { entity: 'light.office' }),
    {
      type: 'tile',
      entity: 'light.office',
      name: 'Kitchen',
      tap_action: { action: 'toggle' },
    },
  );
});

test('HA form card editor bridge exposes the latest visual value when saving', () => {
  const listeners = new Map();
  const form = {
    addEventListener(type, listener) {
      listeners.set(type, listener);
    },
  };
  bridgeHaFormCardEditor(form, 'tile', {
    type: 'tile',
    entity: 'light.kitchen',
    name: 'Kitchen',
    tap_action: { action: 'toggle' },
  });

  listeners.get('value-changed')?.({
    detail: { value: { entity: 'light.office' } },
  });

  assert.deepEqual(readVisualEditorConfig(form), {
    type: 'tile',
    entity: 'light.office',
    name: 'Kitchen',
    tap_action: { action: 'toggle' },
  });
});

test('visual editor event keeps show_name false when editor getConfig is stale', () => {
  const staleEditor = {
    getConfig() {
      return {
        type: 'button',
        entity: 'light.office',
        show_name: true,
        show_icon: true,
      };
    },
  };

  assert.deepEqual(
    resolveVisualEditorConfigForCommit(
      {
        type: 'button',
        entity: 'light.office',
        show_name: false,
        show_icon: true,
      },
      'button',
      staleEditor,
      true,
    ),
    {
      type: 'button',
      entity: 'light.office',
      show_name: false,
      show_icon: true,
    },
  );
});

test('visual editor config is still read as a fallback when no change event fires', () => {
  const silentEditor = {
    getConfig() {
      return {
        type: 'button',
        entity: 'light.office',
        show_name: false,
      };
    },
  };

  assert.deepEqual(
    resolveVisualEditorConfigForCommit(
      {
        type: 'button',
        entity: 'light.office',
        show_name: true,
        show_icon: true,
      },
      'button',
      silentEditor,
      false,
    ),
    {
      type: 'button',
      entity: 'light.office',
      show_name: false,
      show_icon: true,
    },
  );
});

test('saving a visual edit replaces and renders only the edited card', async () => {
  const previousRaf = globalThis.requestAnimationFrame;
  globalThis.requestAnimationFrame = (callback) => {
    callback();
    return 1;
  };
  try {
    const oldElement = { id: 'old' };
    let requestedUpdates = 0;
    const newElement = {
      style: {},
      updateComplete: Promise.resolve(),
      requestUpdate() { requestedUpdates += 1; },
      dispatchEvent() { throw new Error('the edit must not bubble ll-rebuild'); },
    };
    class CardHarness {
      constructor() {
        this.hass = { states: { 'light.office': { state: 'on' } } };
      }
      _sanitizeCardConfigForStorage_(config) { return structuredClone(config); }
      _cloneCardConfig_(config) { return structuredClone(config); }
      _hasCardModDeep() { return false; }
      _isBubblePopupCardConfig_() { return false; }
    }
    installCardBuilderMethods(CardHarness.prototype);
    const wrap = {
      firstElementChild: oldElement,
      dataset: { overflow: 'hidden' },
      style: {},
      classList: { toggle() {} },
      replaceChild(next, previous) {
        assert.equal(previous, oldElement);
        this.firstElementChild = next;
      },
    };

    const harness = new CardHarness();
    harness._createCard = async (config) => {
      assert.equal(config.entity, 'light.office');
      return newElement;
    };
    await harness._replaceEditedCardElement_(wrap, {
      type: 'tile',
      entity: 'light.office',
    });

    assert.equal(wrap.firstElementChild, newElement);
    assert.equal(newElement.hass, harness.hass);
    assert.equal(newElement.style.overflow, 'hidden');
    assert.equal(requestedUpdates, 1);
    assert.deepEqual(JSON.parse(wrap.dataset.cfg), {
      type: 'tile',
      entity: 'light.office',
    });
  } finally {
    globalThis.requestAnimationFrame = previousRaf;
  }
});

test('delete handle is a hover-revealed red corner button in edit mode', async () => {
  const [renderer, styles] = await Promise.all([
    readFile(new URL('../src/cards/card-renderer.js', import.meta.url), 'utf8'),
    readFile(new URL('../src/dashboard/shell-template.js', import.meta.url), 'utf8'),
  ]);

  assert.match(renderer, /const delHandle = document\.createElement\('button'\)/);
  assert.match(styles, /\.card-wrapper\.editing \.delete-handle\{ display:flex \}/);
  assert.match(styles, /\.card-wrapper\.editing:hover \.delete-handle,[\s\S]*?opacity:1;[\s\S]*?visibility:visible;/);
  assert.doesNotMatch(styles, /\.card-wrapper\.editing\.ddc-tiny-edit-ui \.delete-handle\{[\s\S]*?display:none/);
});

test('Update closes the card picker before replacement and persistence run', async () => {
  const source = await readFile(
    new URL('../src/cards/smart-card-picker.js', import.meta.url),
    'utf8',
  );
  const start = source.indexOf('const commit = async () =>');
  const end = source.indexOf("cancelTop.addEventListener('click', close)", start);
  const commitSource = source.slice(start, end);
  const closeIndex = commitSource.indexOf('close();');
  const updateIndex = commitSource.indexOf('await onCommit(finalCfg);');

  assert.ok(start >= 0 && end > start);
  assert.ok(closeIndex >= 0 && closeIndex < updateIndex);
  assert.match(commitSource, /window\.setTimeout\(async \(\) => \{/);
  assert.match(commitSource, /if \(!currentConfig \|\| commitInFlight\) return;/);
});
