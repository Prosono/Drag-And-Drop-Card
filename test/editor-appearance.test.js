import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import {
  installDashboardVisualMethods,
  normalizeEditorThemeMode,
} from '../src/dashboard/visuals.js';

class EditorAppearanceHarness {
  constructor() {
    this.attributes = new Map();
    this.shadowRoot = {
      querySelector: () => null,
      querySelectorAll: () => [],
    };
    this.storageKey = 'living-room';
    this.editorThemeMode = 'light';
    this.__editorThemePreferenceLoadedForKey = '';
    this.editMode = false;
    this.hass = { selectedTheme: { dark: true } };
  }

  setAttribute(name, value) {
    this.attributes.set(name, String(value));
  }

  removeAttribute(name) {
    this.attributes.delete(name);
  }

  getAttribute(name) {
    return this.attributes.get(name) ?? null;
  }
}

installDashboardVisualMethods(EditorAppearanceHarness.prototype);

function withLocalStorage(run) {
  const previous = globalThis.localStorage;
  const values = new Map();
  globalThis.localStorage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, String(value)),
  };
  try {
    return run(values);
  } finally {
    if (previous === undefined) delete globalThis.localStorage;
    else globalThis.localStorage = previous;
  }
}

test('editor appearance defaults to light and normalizes supported aliases', () => {
  assert.equal(normalizeEditorThemeMode(undefined), 'light');
  assert.equal(normalizeEditorThemeMode('DARK'), 'dark');
  assert.equal(normalizeEditorThemeMode('follow-dashboard'), 'dashboard');
  assert.equal(normalizeEditorThemeMode('unexpected'), 'light');
});

test('editor appearance is local to a dashboard and only active in edit mode', () => {
  withLocalStorage((values) => {
    const harness = new EditorAppearanceHarness();
    assert.equal(harness._getEditorThemeMode_(), 'light');

    harness.editMode = true;
    harness._applyEditorAppearance_();
    assert.equal(harness.getAttribute('data-ddc-editor-theme'), 'light');
    assert.equal(harness.getAttribute('data-ddc-editor-resolved-theme'), 'light');

    harness._setEditorThemeMode_('dashboard');
    assert.equal(values.get('ddc_editor_theme_mode_living-room'), 'dashboard');
    assert.equal(harness.getAttribute('data-ddc-editor-theme'), 'dashboard');
    assert.equal(harness.getAttribute('data-ddc-editor-resolved-theme'), 'dark');

    harness.editMode = false;
    harness._clearEditorAppearance_();
    assert.equal(harness.getAttribute('data-ddc-editor-theme'), null);
    assert.equal(harness.getAttribute('data-ddc-editor-resolved-theme'), null);
  });
});

test('editor palette is scoped to editing surfaces instead of dashboard cards', async () => {
  const source = await readFile(new URL('../src/dashboard/shell-template.js', import.meta.url), 'utf8');
  assert.match(source, /data-ddc-editor-theme="light"\]\) \.ddc-toolbar/);
  assert.match(source, /data-ddc-editor-theme="light"\]\) \.modal/);
  assert.match(source, /data-ddc-editor-theme="dark"\]\) \.ddc-card-edit-actions/);
  assert.match(source, /data-ddc-editor-theme="light"\]\) \.ddc-card-settings/);
  assert.match(source, /\.smart-picker-modal\[data-ddc-theme="light"\]/);
  assert.match(source, /--mdc-text-field-fill-color:var\(--input-fill-color\)/);
  assert.match(source, /--ha-color-form-background:#edf2f7/);
  assert.match(source, /--ha-switch-background-color:#dce3eb/);
  assert.match(source, /data-ddc-theme="light"\] \.picker-search\{/);
  assert.doesNotMatch(source, /data-ddc-editor-theme="light"\]\) \.card-wrapper\s*[,\{]/);
});

test('HTML card code workspace stays dark when the surrounding editor is light', async () => {
  const source = await readFile(new URL('../src/cards/internal-cards/html-card/index.js', import.meta.url), 'utf8');
  assert.match(source, /--ddc-code-surface:#090d12/);
  assert.match(source, /\.code-shell\{[\s\S]*?background:var\(--ddc-code-surface\)/);
  assert.match(source, /\.code-shell\{[\s\S]*?color-scheme:dark/);
  assert.match(source, /\.code-highlight\{[\s\S]*?color:var\(--ddc-code-text\)/);
  assert.match(source, /\.code-gutter\{[\s\S]*?background:var\(--ddc-code-surface-raised\)/);
});

test('settings selection previews immediately but only persists on save', async () => {
  const source = await readFile(new URL('../src/dashboard/settings-controller.js', import.meta.url), 'utf8');
  assert.match(source, /selEditorThemeMode\?\.addEventListener\('change'/);
  assert.match(source, /_setEditorThemeMode_\?\.\(previewMode, \{ persist: false \}\)/);
  assert.match(source, /_setEditorThemeMode_\?\.\(newEditorThemeMode, \{ persist: true \}\)/);
  assert.match(source, /_setEditorThemeMode_\?\.\(initialEditorThemeMode, \{ persist: false \}\)/);
});
