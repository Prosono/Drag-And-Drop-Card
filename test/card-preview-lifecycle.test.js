import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

import { mountCardPreviewElement } from '../src/cards/smart-card-picker.js';

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
