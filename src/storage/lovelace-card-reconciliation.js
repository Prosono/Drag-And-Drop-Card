/*
 * Reconcile the card content embedded in Lovelace with the layout snapshot
 * stored by the Drag & Drop backend.
 *
 * The backend remains authoritative for canvas state (position, size, tabs,
 * layers, etc.). Lovelace is authoritative for nested card configuration
 * changes made through Home Assistant's standard lovelace/config/save API.
 */

export const LOVELACE_CARD_CONFIG_BASELINE_KEY = 'lovelace_card_config_baseline';

const RESPONSIVE_VARIANTS = [
  ['desktop_landscape', 'desktop', 'landscape'],
  ['tablet_landscape', 'tablet', 'landscape'],
  ['tablet_portrait', 'tablet', 'portrait'],
  ['mobile_landscape', 'mobile', 'landscape'],
  ['mobile_portrait', 'mobile', 'portrait'],
];

function clone(value) {
  if (value === undefined) return undefined;
  try { return JSON.parse(JSON.stringify(value)); } catch { return value; }
}

function stableValue(value, seen = new WeakSet()) {
  if (Array.isArray(value)) return value.map((item) => stableValue(item, seen));
  if (!value || typeof value !== 'object') return value;
  if (seen.has(value)) return null;
  seen.add(value);
  const out = {};
  Object.keys(value).sort().forEach((key) => {
    if (value[key] !== undefined) out[key] = stableValue(value[key], seen);
  });
  seen.delete(value);
  return out;
}

function stableStringify(value) {
  try { return JSON.stringify(stableValue(value)); } catch { return '' + value; }
}

function hashValue(value) {
  const serialized = stableStringify(value);
  let hash = 0x811c9dc5;
  for (let index = 0; index < serialized.length; index += 1) {
    hash ^= serialized.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return `v1:${serialized.length}:${(hash >>> 0).toString(16).padStart(8, '0')}`;
}

function entryId(entry) {
  return String(entry?.id ?? '').trim();
}

function hasNestedCardConfig(entry) {
  return !!entry
    && typeof entry === 'object'
    && (
      Object.prototype.hasOwnProperty.call(entry, 'card')
      || Object.prototype.hasOwnProperty.call(entry, 'config')
    );
}

function nestedCardConfig(entry) {
  if (!entry || typeof entry !== 'object') return undefined;
  if (Object.prototype.hasOwnProperty.call(entry, 'card')) return entry.card;
  if (Object.prototype.hasOwnProperty.call(entry, 'config')) return entry.config;
  return undefined;
}

function configHashMap(entries = [], { explicitOnly = false } = {}) {
  const pairs = [];
  (Array.isArray(entries) ? entries : []).forEach((entry) => {
    const id = entryId(entry);
    if (!id || (explicitOnly && !hasNestedCardConfig(entry))) return;
    pairs.push([id, hashValue(nestedCardConfig(entry) ?? null)]);
  });
  pairs.sort(([left], [right]) => left.localeCompare(right));
  return Object.fromEntries(pairs);
}

function entryMap(entries = [], { explicitOnly = false } = {}) {
  const out = new Map();
  (Array.isArray(entries) ? entries : []).forEach((entry) => {
    const id = entryId(entry);
    if (!id || (explicitOnly && !hasNestedCardConfig(entry))) return;
    out.set(id, entry);
  });
  return out;
}

function resolveResponsiveEntries(layouts, variantKey, profile, orientation) {
  if (!layouts || typeof layouts !== 'object') return null;
  const direct = layouts[variantKey];
  if (Array.isArray(direct)) return direct;
  if (Array.isArray(direct?.cards)) return direct.cards;

  const grouped = layouts[profile];
  const oriented = grouped?.[orientation];
  if (Array.isArray(oriented)) return oriented;
  if (Array.isArray(oriented?.cards)) return oriented.cards;
  if (Array.isArray(grouped)) return grouped;
  if (Array.isArray(grouped?.cards)) return grouped.cards;
  return null;
}

function analyzeLovelaceCardConfig(config = {}) {
  const cards = Array.isArray(config?.cards) ? config.cards : [];
  const responsiveLayouts = config?.responsive_layouts || config?.responsiveLayouts || null;
  const responsive = {};
  const responsiveEntries = {};

  RESPONSIVE_VARIANTS.forEach(([variantKey, profile, orientation]) => {
    const entries = resolveResponsiveEntries(responsiveLayouts, variantKey, profile, orientation) || [];
    responsive[variantKey] = configHashMap(entries, { explicitOnly: true });
    responsiveEntries[variantKey] = entryMap(entries, { explicitOnly: true });
  });

  return {
    baseline: {
      version: 1,
      has_cards: Array.isArray(config?.cards),
      primary: configHashMap(cards),
      responsive,
    },
    primaryEntries: entryMap(cards),
    responsiveEntries,
  };
}

export function createLovelaceCardConfigBaseline(config = {}) {
  return analyzeLovelaceCardConfig(config).baseline;
}

export function lovelaceCardConfigSignature(config = {}) {
  return stableStringify(createLovelaceCardConfigBaseline(config));
}

function isValidBaseline(value) {
  return !!value
    && typeof value === 'object'
    && Number(value.version) === 1
    && value.primary
    && typeof value.primary === 'object';
}

function changedIds(previous = {}, current = {}, { legacy = false } = {}) {
  const ids = new Set();
  Object.entries(current || {}).forEach(([id, hash]) => {
    if (legacy || !Object.prototype.hasOwnProperty.call(previous || {}, id) || previous[id] !== hash) {
      ids.add(id);
    }
  });
  return ids;
}

function deletedIds(previous = {}, current = {}, { legacy = false } = {}) {
  if (legacy) return new Set();
  return new Set(
    Object.keys(previous || {}).filter((id) => !Object.prototype.hasOwnProperty.call(current || {}, id))
  );
}

function applyNestedCardConfig(targetEntry, sourceEntry) {
  if (!targetEntry || !sourceEntry || !hasNestedCardConfig(sourceEntry)) return targetEntry;
  const next = { ...targetEntry };
  const value = clone(nestedCardConfig(sourceEntry));
  if (
    Object.prototype.hasOwnProperty.call(sourceEntry, 'card')
    || Object.prototype.hasOwnProperty.call(targetEntry, 'card')
    || !Object.prototype.hasOwnProperty.call(targetEntry, 'config')
  ) {
    next.card = value;
    delete next.config;
  } else {
    next.config = value;
  }
  return next;
}

function patchEntryArray(entries, sourceEntries, changed, deleted, fallbackEntries = null) {
  if (!Array.isArray(entries)) return { entries, changed: false };
  let didChange = false;
  const source = sourceEntries instanceof Map ? sourceEntries : new Map();
  const fallback = fallbackEntries instanceof Map ? fallbackEntries : new Map();
  const next = [];

  entries.forEach((entry) => {
    const id = entryId(entry);
    if (id && deleted.has(id)) {
      didChange = true;
      return;
    }
    const sourceEntry = source.get(id) || fallback.get(id);
    if (id && changed.has(id) && sourceEntry && hasNestedCardConfig(sourceEntry)) {
      const patched = applyNestedCardConfig(entry, sourceEntry);
      if (stableStringify(patched) !== stableStringify(entry)) didChange = true;
      next.push(patched);
      return;
    }
    next.push(entry);
  });

  return { entries: next, changed: didChange };
}

function patchAllResponsiveEntryArrays(value, sourceEntries, changed, deleted) {
  if (Array.isArray(value)) {
    const looksLikeEntries = value.some((entry) => entry && typeof entry === 'object' && entryId(entry));
    if (looksLikeEntries) return patchEntryArray(value, sourceEntries, changed, deleted).entries;
    return value.map((item) => patchAllResponsiveEntryArrays(item, sourceEntries, changed, deleted));
  }
  if (!value || typeof value !== 'object') return value;
  const out = {};
  Object.entries(value).forEach(([key, child]) => {
    out[key] = patchAllResponsiveEntryArrays(child, sourceEntries, changed, deleted);
  });
  return out;
}

function replaceResolvedResponsiveEntries(layouts, variantKey, profile, orientation, replacement) {
  if (!layouts || typeof layouts !== 'object') return false;
  const direct = layouts[variantKey];
  if (Array.isArray(direct)) {
    layouts[variantKey] = replacement;
    return true;
  }
  if (direct && Array.isArray(direct.cards)) {
    direct.cards = replacement;
    return true;
  }
  const grouped = layouts[profile];
  const oriented = grouped?.[orientation];
  if (Array.isArray(oriented)) {
    grouped[orientation] = replacement;
    return true;
  }
  if (oriented && Array.isArray(oriented.cards)) {
    oriented.cards = replacement;
    return true;
  }
  if (Array.isArray(grouped)) {
    layouts[profile] = replacement;
    return true;
  }
  if (grouped && Array.isArray(grouped.cards)) {
    grouped.cards = replacement;
    return true;
  }
  return false;
}

/**
 * Merge externally changed nested card configs into a backend snapshot.
 * Existing backend geometry is preserved for matching card ids.
 */
export function reconcileLovelaceCardConfig(backendSnapshot = {}, lovelaceConfig = {}) {
  const snapshot = clone(backendSnapshot && typeof backendSnapshot === 'object' ? backendSnapshot : {}) || {};
  const current = analyzeLovelaceCardConfig(lovelaceConfig);
  const previous = snapshot[LOVELACE_CARD_CONFIG_BASELINE_KEY];
  const legacy = !isValidBaseline(previous);

  // A missing cards property is normal for backend-only layouts and must not
  // be interpreted as an external request to delete the saved dashboard.
  if (!current.baseline.has_cards) {
    return {
      snapshot,
      changed: false,
      contentChanged: false,
      legacy,
      baseline: isValidBaseline(previous) ? previous : null,
    };
  }

  const primaryChanged = changedIds(previous?.primary, current.baseline.primary, { legacy });
  const primaryDeleted = deletedIds(previous?.primary, current.baseline.primary, { legacy });
  const originalCards = Array.isArray(snapshot.cards) ? snapshot.cards : [];
  const primaryPatch = patchEntryArray(
    originalCards,
    current.primaryEntries,
    primaryChanged,
    primaryDeleted
  );
  snapshot.cards = primaryPatch.entries;

  const existingIds = new Set(snapshot.cards.map((entry) => entryId(entry)).filter(Boolean));
  current.primaryEntries.forEach((entry, id) => {
    if (!existingIds.has(id) && primaryChanged.has(id)) {
      snapshot.cards.push(clone(entry));
      existingIds.add(id);
    }
  });

  let responsiveChanged = false;
  if (snapshot.responsive_layouts && typeof snapshot.responsive_layouts === 'object') {
    const beforeResponsive = stableStringify(snapshot.responsive_layouts);
    snapshot.responsive_layouts = patchAllResponsiveEntryArrays(
      snapshot.responsive_layouts,
      current.primaryEntries,
      primaryChanged,
      primaryDeleted
    );

    RESPONSIVE_VARIANTS.forEach(([variantKey, profile, orientation]) => {
      const previousVariant = previous?.responsive?.[variantKey] || {};
      const currentVariant = current.baseline.responsive?.[variantKey] || {};
      const variantChanged = changedIds(previousVariant, currentVariant, { legacy });
      const variantRemoved = deletedIds(previousVariant, currentVariant, { legacy });
      const target = resolveResponsiveEntries(snapshot.responsive_layouts, variantKey, profile, orientation);
      if (!Array.isArray(target) || (!variantChanged.size && !variantRemoved.size)) return;

      const fallback = new Map();
      variantRemoved.forEach((id) => {
        const primaryEntry = current.primaryEntries.get(id);
        if (primaryEntry) fallback.set(id, primaryEntry);
      });
      const patched = patchEntryArray(
        target,
        current.responsiveEntries[variantKey],
        new Set([...variantChanged, ...variantRemoved]),
        new Set(),
        fallback
      );
      replaceResolvedResponsiveEntries(
        snapshot.responsive_layouts,
        variantKey,
        profile,
        orientation,
        patched.entries
      );
    });
    responsiveChanged = beforeResponsive !== stableStringify(snapshot.responsive_layouts);
  }

  const previousBaselineString = stableStringify(previous || null);
  snapshot[LOVELACE_CARD_CONFIG_BASELINE_KEY] = clone(current.baseline);
  const baselineChanged = previousBaselineString !== stableStringify(current.baseline);
  const cardsChanged = primaryPatch.changed
    || originalCards.length !== snapshot.cards.length
    || stableStringify(originalCards) !== stableStringify(snapshot.cards);
  const contentChanged = cardsChanged || responsiveChanged;

  return {
    snapshot,
    changed: baselineChanged || contentChanged,
    contentChanged,
    legacy,
    baseline: clone(current.baseline),
  };
}
