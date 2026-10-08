// The canvas frame belongs to this dashboard, independently of its child cards.
export function normalizeContainerRadius(value) {
  if (value == null || value === '') return 12;
  const radius = Number(value);
  return Number.isFinite(radius) ? Math.max(0, Math.min(96, radius)) : 12;
}
