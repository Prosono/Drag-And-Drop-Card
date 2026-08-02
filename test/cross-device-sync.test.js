import test from 'node:test';
import assert from 'node:assert/strict';

import { selectInitialLayoutSnapshot } from '../src/core/layout-loader.js';
import { mergeDashboardSnapshots } from '../src/storage/layout-persistence.js';
import { formatLiveViewportMeta } from '../src/layout/viewport-preview.js';

const card = (x, entity = 'light.old') => ({
  id: 'lamp',
  x,
  y: 20,
  width: 240,
  height: 180,
  config: { type: 'light', entity },
});

const snapshot = ({ desktopX = 0, tabletX = 10, entity = 'light.old', theme = 'light', updatedAt }) => ({
  version: 3,
  updated_at: updatedAt,
  options: { dashboard_theme: theme, grid: 10 },
  cards: [card(desktopX, entity)],
  responsive_layouts: {
    desktop_landscape: [card(desktopX, entity)],
    tablet_landscape: [card(tabletX, entity)],
  },
  packages: [],
});

test('backend snapshot is authoritative even when the local browser timestamp is newer', () => {
  const backend = snapshot({ updatedAt: '2026-08-01T10:00:00.000Z' });
  const local = snapshot({ desktopX: 900, updatedAt: '2026-08-02T10:00:00.000Z' });

  const selected = selectInitialLayoutSnapshot(backend, local);

  assert.equal(selected.source, 'backend');
  assert.equal(selected.snapshot.cards[0].x, 0);
});

test('three-way merge preserves tablet geometry while accepting PC config and option changes', () => {
  const base = snapshot({ updatedAt: '2026-08-01T10:00:00.000Z' });
  const localTablet = snapshot({ tabletX: 60, updatedAt: '2026-08-01T10:02:00.000Z' });
  const remotePc = snapshot({
    desktopX: 120,
    entity: 'light.ceiling',
    theme: 'dark',
    updatedAt: '2026-08-01T10:03:00.000Z',
  });

  const merged = mergeDashboardSnapshots(base, localTablet, remotePc, '2026-08-01T10:04:00.000Z');

  assert.equal(merged.cards[0].x, 120);
  assert.equal(merged.cards[0].config.entity, 'light.ceiling');
  assert.equal(merged.responsive_layouts.desktop_landscape[0].x, 120);
  assert.equal(merged.responsive_layouts.tablet_landscape[0].x, 60);
  assert.equal(merged.responsive_layouts.tablet_landscape[0].config.entity, 'light.ceiling');
  assert.equal(merged.options.dashboard_theme, 'dark');
  assert.equal(merged.updated_at, '2026-08-01T10:04:00.000Z');
});

test('three-way merge preserves independently added cards from both devices', () => {
  const base = snapshot({ updatedAt: '2026-08-01T10:00:00.000Z' });
  const local = structuredClone(base);
  const remote = structuredClone(base);
  local.cards.push({ ...card(300), id: 'tablet-added' });
  remote.cards.push({ ...card(600), id: 'pc-added' });

  const merged = mergeDashboardSnapshots(base, local, remote, '2026-08-01T10:05:00.000Z');

  assert.deepEqual(merged.cards.map((entry) => entry.id), ['lamp', 'tablet-added', 'pc-added']);
});

test('same-field conflicts favor the device that is currently saving', () => {
  const base = snapshot({ tabletX: 10, updatedAt: '2026-08-01T10:00:00.000Z' });
  const local = snapshot({ tabletX: 80, updatedAt: '2026-08-01T10:01:00.000Z' });
  const remote = snapshot({ tabletX: 40, updatedAt: '2026-08-01T10:02:00.000Z' });

  const merged = mergeDashboardSnapshots(base, local, remote, '2026-08-01T10:03:00.000Z');

  assert.equal(merged.responsive_layouts.tablet_landscape[0].x, 80);
});

test('Live View text reports CSS viewport and describes a configured width cap', () => {
  assert.equal(
    formatLiveViewportMeta({ width: 1295, height: 923, profileLabel: 'Tablet', maxWidth: 2560 }),
    'Live · 1295×923 CSS px · Tablet · width cap 2560px'
  );
});
