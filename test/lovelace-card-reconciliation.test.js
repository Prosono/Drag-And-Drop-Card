import test from 'node:test';
import assert from 'node:assert/strict';

import {
  LOVELACE_CARD_CONFIG_BASELINE_KEY,
  reconcileLovelaceCardConfig,
} from '../src/storage/lovelace-card-reconciliation.js';

const entry = (id, entity, x = 0) => ({
  id,
  card: {
    type: 'entities',
    entities: [entity],
  },
  position: { x, y: 20 },
  size: { width: 240, height: 180 },
  tabId: 'home',
});

const snapshot = (...cards) => ({
  version: 3,
  options: { grid: 10 },
  cards,
  responsive_layouts: {
    desktop: { landscape: { cards: structuredClone(cards) } },
    tablet: { landscape: { cards: structuredClone(cards) } },
  },
});

const lovelaceCard = (...cards) => ({
  type: 'custom:drag-and-drop-card',
  storage_key: 'layout_PAD',
  cards,
});

test('legacy backend snapshot accepts Lovelace card content and preserves backend geometry', () => {
  const backend = snapshot(entry('list', 'todo.old', 640));
  const canonical = lovelaceCard(entry('list', 'todo.updated', 10));

  const result = reconcileLovelaceCardConfig(backend, canonical);

  assert.equal(result.legacy, true);
  assert.equal(result.contentChanged, true);
  assert.deepEqual(result.snapshot.cards[0].card.entities, ['todo.updated']);
  assert.equal(result.snapshot.cards[0].position.x, 640);
  assert.deepEqual(
    result.snapshot.responsive_layouts.tablet.landscape.cards[0].card.entities,
    ['todo.updated']
  );
  assert.ok(result.snapshot[LOVELACE_CARD_CONFIG_BASELINE_KEY]);
});

test('backend-only card edits remain authoritative while canonical Lovelace content is unchanged', () => {
  const canonical = lovelaceCard(entry('list', 'todo.original', 10));
  const migrated = reconcileLovelaceCardConfig(
    snapshot(entry('list', 'todo.original', 640)),
    canonical
  ).snapshot;
  migrated.cards[0].card.entities = ['todo.edited-inside-ddc'];
  migrated.responsive_layouts.desktop.landscape.cards[0].card.entities = ['todo.edited-inside-ddc'];

  const result = reconcileLovelaceCardConfig(migrated, canonical);

  assert.equal(result.contentChanged, false);
  assert.deepEqual(result.snapshot.cards[0].card.entities, ['todo.edited-inside-ddc']);
});

test('a later lovelace/config/save change replaces stale backend card content', () => {
  const original = lovelaceCard(entry('list', 'todo.original', 10));
  const migrated = reconcileLovelaceCardConfig(
    snapshot(entry('list', 'todo.original', 640)),
    original
  ).snapshot;
  migrated.cards[0].card.entities = ['todo.stale-backend'];

  const externallyUpdated = lovelaceCard(entry('list', 'todo.external-update', 10));
  const result = reconcileLovelaceCardConfig(migrated, externallyUpdated);

  assert.equal(result.legacy, false);
  assert.equal(result.contentChanged, true);
  assert.deepEqual(result.snapshot.cards[0].card.entities, ['todo.external-update']);
  assert.equal(result.snapshot.cards[0].position.x, 640);
});

test('external additions and deletions reconcile card membership by stable id', () => {
  const first = entry('first', 'sensor.first', 100);
  const removed = entry('removed', 'sensor.removed', 200);
  const original = lovelaceCard(first, removed);
  const migrated = reconcileLovelaceCardConfig(snapshot(first, removed), original).snapshot;

  const added = entry('added', 'sensor.added', 300);
  const result = reconcileLovelaceCardConfig(migrated, lovelaceCard(first, added));

  assert.deepEqual(result.snapshot.cards.map((card) => card.id), ['first', 'added']);
  assert.deepEqual(
    result.snapshot.responsive_layouts.desktop.landscape.cards.map((card) => card.id),
    ['first']
  );
});

test('missing embedded cards property never clears a backend-only layout', () => {
  const backend = snapshot(entry('list', 'todo.backend', 640));
  const result = reconcileLovelaceCardConfig(backend, {
    type: 'custom:drag-and-drop-card',
    storage_key: 'layout_PAD',
  });

  assert.equal(result.changed, false);
  assert.deepEqual(result.snapshot.cards[0].card.entities, ['todo.backend']);
});
