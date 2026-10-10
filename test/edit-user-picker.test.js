import test from 'node:test';
import assert from 'node:assert/strict';
import { editUserChoices, setupEditUserPicker } from '../src/dashboard/edit-user-picker.js';

test('user choices use names, identify administrators and preserve unavailable selections', () => {
  const selected = new Set(['missing', 'tablet']);
  const choices = editUserChoices([
    { id: 'tablet', name: 'Wall tablet', is_active: true },
    { id: 'admin', name: 'Owner', group_ids: ['system-admin'] },
    { id: 'service', name: 'Service', system_generated: true },
  ], selected);
  assert.equal(choices.length, 3);
  assert.equal(choices.find(user => user.id === 'admin').admin, true);
  assert.equal(choices.find(user => user.id === 'missing').unavailable, true);
  assert.deepEqual([...selected], ['missing', 'tablet']);
});

test('failed loading preserves selected users and permits retry; non-admin does not request list', async () => {
  const elements = Object.fromEntries(['#ddc-edit-users', '#ddc-edit-users-status', '#ddc-edit-users-retry'].map(id => [id, {
    setAttribute() {}, removeAttribute() {}, addEventListener() {}, hidden: true,
  }]));
  const modal = { isConnected: true, querySelector: id => elements[id] };
  const selected = new Set(['tablet']);
  let calls = 0;
  const hass = { user: { is_admin: true }, callWS: async message => {
    assert.equal(message.type, 'config/auth/list'); calls++; throw Error('offline');
  } };
  const picker = setupEditUserPicker(modal, hass, selected);
  await picker.load();
  await picker.load();
  assert.equal(calls, 2);
  assert.deepEqual([...selected], ['tablet']);
  assert.equal(elements['#ddc-edit-users-retry'].hidden, false);
  await setupEditUserPicker(modal, { ...hass, user: { is_admin: false } }, selected).load();
  assert.equal(calls, 2);
});
