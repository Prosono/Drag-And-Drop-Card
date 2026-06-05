/*
 * Responsive layout model, viewport profiles, packages, and active layout switching.
 *
 * This module keeps desktop, tablet, and mobile layout variants synchronized while preserving the active
 * profile/orientation selected by viewport or preview controls.
 */

/* Responsive layout model, viewport profiles, packages, and active layout switching. */
const responsiveModelMethods = {
  _genLayoutCardId_() {
    const token =
      globalThis.crypto?.randomUUID?.() ||
      `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
    return `ddc_card_${token}`;
  },

  _responsiveProfileKeys_() {
    return ['desktop', 'tablet', 'mobile'];
  },

  _responsiveLayoutVariantKeys_() {
    return [
      'desktop_landscape',
      'tablet_landscape',
      'tablet_portrait',
      'mobile_landscape',
      'mobile_portrait',
    ];
  },

  _defaultResponsivePreviewOrientations_() {
    return {
      desktop: 'landscape',
      tablet: 'landscape',
      mobile: 'portrait',
    };
  },

  _normalizeResponsiveOrientation_(profile = 'desktop', orientation = null) {
    if (profile === 'desktop') return 'landscape';
    return String(orientation || '').toLowerCase() === 'landscape' ? 'landscape' : 'portrait';
  },

  _getResponsiveLayoutKey_(profile = 'desktop', orientation = null) {
    const baseProfile = this._responsiveProfileKeys_().includes(profile) ? profile : 'desktop';
    return `${baseProfile}_${this._normalizeResponsiveOrientation_(baseProfile, orientation)}`;
  },

  _splitResponsiveLayoutKey_(layoutKey = 'desktop_landscape') {
    const [rawProfile = 'desktop', rawOrientation = 'landscape'] = String(layoutKey || 'desktop_landscape').split('_');
    const profile = this._responsiveProfileKeys_().includes(rawProfile) ? rawProfile : 'desktop';
    const orientation = this._normalizeResponsiveOrientation_(profile, rawOrientation);
    return { profile, orientation, key: this._getResponsiveLayoutKey_(profile, orientation) };
  },

  _getPrimaryResponsiveLayoutKey_() {
    return 'desktop_landscape';
  },

  _shouldUseSharedResponsiveLayout_() {
    const rawMode = String(this.containerSizeMode || this.container_size_mode || this._config?.container_size_mode || '').toLowerCase();
    const mode = this._normalizeContainerSizeMode_?.(rawMode) || rawMode;
    return rawMode === 'fixed' || mode === 'fixed_custom' || mode === 'preset';
  },

  _getRuntimeResponsiveLayoutKey_(profile = 'desktop', orientation = null) {
    if (this._shouldUseSharedResponsiveLayout_?.()) return this._getPrimaryResponsiveLayoutKey_();
    const baseProfile = this._responsiveProfileKeys_().includes(profile) ? profile : 'desktop';
    return this._getResponsiveLayoutKey_(baseProfile, orientation);
  },

  _ensureResponsivePreviewOrientations_() {
    const defaults = this._defaultResponsivePreviewOrientations_();
    const next = { ...defaults, ...(this._responsivePreviewOrientations || {}) };
    next.desktop = 'landscape';
    next.tablet = this._normalizeResponsiveOrientation_('tablet', next.tablet);
    next.mobile = this._normalizeResponsiveOrientation_('mobile', next.mobile);
    this._responsivePreviewOrientations = next;
    return next;
  },

  _getStoredResponsivePreviewOrientation_(profile = 'desktop') {
    const orientations = this._ensureResponsivePreviewOrientations_();
    return this._normalizeResponsiveOrientation_(profile, orientations?.[profile]);
  },

  _setStoredResponsivePreviewOrientation_(profile = 'desktop', orientation = null) {
    const orientations = this._ensureResponsivePreviewOrientations_();
    const nextOrientation = this._normalizeResponsiveOrientation_(profile, orientation);
    this._responsivePreviewOrientations = {
      ...orientations,
      [profile]: nextOrientation,
    };
    return nextOrientation;
  },

  _defaultResponsiveViewportProfiles_() {
    return {
      desktop_landscape: { width: 1430, height: 896 },
      tablet_landscape: { width: 1295, height: 923 },
      tablet_portrait: { width: 923, height: 1295 },
      mobile_landscape: { width: 1080, height: 500 },
      mobile_portrait: { width: 500, height: 1080 },
    };
  },

  _defaultResponsiveViewportAspectLocks_() {
    return {
      desktop: true,
      tablet: true,
      mobile: true,
    };
  },

  _normalizeResponsiveViewportAspectLocks_(locks = null) {
    const defaults = this._defaultResponsiveViewportAspectLocks_();
    const source = (locks && typeof locks === 'object') ? locks : {};
    const readBool = (value, fallback) => {
      if (value === false || value === 0 || value === 'false' || value === '0') return false;
      if (value === true || value === 1 || value === 'true' || value === '1') return true;
      return fallback;
    };

    return this._responsiveProfileKeys_().reduce((out, profile) => {
      out[profile] = readBool(source?.[profile], defaults[profile]);
      return out;
    }, {});
  },

  _isResponsiveViewportAspectLocked_(profile = 'desktop') {
    const split = this._splitResponsiveLayoutKey_(profile);
    const baseProfile = this._responsiveProfileKeys_().includes(profile) ? profile : split.profile;
    const locks = this._normalizeResponsiveViewportAspectLocks_(this.responsiveViewportAspectLocks);
    return locks?.[baseProfile] !== false;
  },

  _setResponsiveViewportAspectLocked_(profile = 'desktop', locked = true) {
    const split = this._splitResponsiveLayoutKey_(profile);
    const baseProfile = this._responsiveProfileKeys_().includes(profile) ? profile : split.profile;
    const next = this._normalizeResponsiveViewportAspectLocks_({
      ...(this.responsiveViewportAspectLocks || {}),
      [baseProfile]: locked !== false,
    });
    this.responsiveViewportAspectLocks = next;
    this._config = {
      ...(this._config || {}),
      responsive_viewport_aspect_locks: this._cloneJson_(next),
    };
    this._syncResponsiveViewportFields_?.();
    this._syncViewportPreviewUI_?.();
    this._applyAutoScale?.();
    try { if (!this._isInHaEditorPreview()) this._queueSave?.('responsive-viewport-aspect-lock'); } catch {}
    return next[baseProfile] !== false;
  },

  _getDefaultResponsiveViewportProfile_(profile = 'desktop', orientation = null) {
    const defaults = this._defaultResponsiveViewportProfiles_();
    return defaults[this._getResponsiveLayoutKey_(profile, orientation)] || defaults[this._getPrimaryResponsiveLayoutKey_()];
  },

  _normalizeResponsiveViewportProfiles_(profiles = null) {
    const source = (profiles && typeof profiles === 'object') ? profiles : {};
    const out = {};
  
    const resolveSource = (profile, orientation) => {
      const variantKey = this._getResponsiveLayoutKey_(profile, orientation);
      const direct = source?.[variantKey];
      if (direct && typeof direct === 'object') return direct;
  
      const grouped = source?.[profile];
      if (grouped && typeof grouped === 'object') {
        const nested = grouped?.[orientation];
        if (nested && typeof nested === 'object') return nested;
        if (
          Number.isFinite(Number(grouped.width))
          || Number.isFinite(Number(grouped.height))
        ) {
          return grouped;
        }
      }
  
      return null;
    };
  
    this._responsiveLayoutVariantKeys_().forEach((variantKey) => {
      const { profile, orientation } = this._splitResponsiveLayoutKey_(variantKey);
      const fallback = this._getDefaultResponsiveViewportProfile_(profile, orientation);
      const raw = resolveSource(profile, orientation) || fallback;
      const locked = this._getLockedResponsiveViewportProfile_(
        profile,
        {
          width: Number(raw?.width ?? fallback.width) || fallback.width,
          height: Number(raw?.height ?? fallback.height) || fallback.height,
        },
        'width',
        orientation
      );
      out[variantKey] = { width: locked.width, height: locked.height };
    });
    return out;
  },

  _legacyResponsiveViewportProfiles_() {
    return {
      desktop: { width: 1440, height: 900 },
      tablet: { width: 834, height: 1194 },
      mobile: { width: 390, height: 844 },
    };
  },

  _isLegacyResponsiveViewportProfiles_(profiles = null) {
    try {
      if (!profiles || typeof profiles !== 'object') return false;
      if (this._responsiveLayoutVariantKeys_().some((key) => Object.prototype.hasOwnProperty.call(profiles, key))) {
        return false;
      }
      const legacy = this._legacyResponsiveViewportProfiles_();
      return this._responsiveProfileKeys_().every((profile) => {
        const current = profiles?.[profile] || {};
        const prev = legacy?.[profile] || {};
        return Number(current.width) === Number(prev.width) && Number(current.height) === Number(prev.height);
      });
    } catch {
      return false;
    }
  },

  _lockResponsiveViewportValue_(value = 0) {
    return Math.max(240, Math.min(6000, Math.round(Number(value || 0) || 0)));
  },

  _getLockedResponsiveViewportProfile_(profile = 'desktop', viewport = null, preferAxis = 'width', orientation = null) {
    const split = this._splitResponsiveLayoutKey_(profile);
    const baseProfile = this._responsiveProfileKeys_().includes(profile) ? profile : split.profile;
    const nextOrientation = this._normalizeResponsiveOrientation_(baseProfile, orientation ?? split.orientation);
    const fallback = this._getDefaultResponsiveViewportProfile_(baseProfile, nextOrientation);
    const raw = viewport || fallback || {};
    let width = this._lockResponsiveViewportValue_(raw.width || fallback.width || 0);
    let height = this._lockResponsiveViewportValue_(raw.height || fallback.height || 0);
    const aspectLocked = this._isResponsiveViewportAspectLocked_?.(baseProfile) !== false;
    if (!width) width = fallback.width || 390;
    if (!height) height = fallback.height || 844;
    if (aspectLocked && nextOrientation === 'landscape' && height > width) [width, height] = [height, width];
    if (aspectLocked && nextOrientation === 'portrait' && width > height) [width, height] = [height, width];
    const lock = aspectLocked
      ? this._getPreviewDeviceFrameLock_?.(baseProfile, width, height, { orientation: nextOrientation })
      : null;
    if (lock?.ratio) {
      if (preferAxis === 'height') {
        width = this._lockResponsiveViewportValue_(height * lock.ratio);
      } else {
        height = this._lockResponsiveViewportValue_(width / lock.ratio);
      }
    }
    if (aspectLocked && nextOrientation === 'landscape' && height > width) [width, height] = [height, width];
    if (aspectLocked && nextOrientation === 'portrait' && width > height) [width, height] = [height, width];
    return {
      width,
      height,
      orientation: lock?.orientation || nextOrientation,
      ratio: lock?.ratio || null,
    };
  },

  _ensureResponsiveViewportProfileLock_(profile = 'desktop', preferAxis = 'width', orientation = null) {
    if (!this._responsiveProfileKeys_().includes(profile)) return null;
    const nextOrientation = this._normalizeResponsiveOrientation_(profile, orientation ?? this._getRequestedResponsiveOrientation_?.(profile));
    const key = this._getResponsiveLayoutKey_(profile, nextOrientation);
    const current = this._normalizeResponsiveViewportProfiles_(this.responsiveViewportProfiles)?.[key] || {};
    const locked = this._getLockedResponsiveViewportProfile_(profile, current, preferAxis, nextOrientation);
    const needsUpdate =
      Number(current.width) !== Number(locked.width)
      || Number(current.height) !== Number(locked.height);
    if (needsUpdate) {
      const next = this._normalizeResponsiveViewportProfiles_({
        ...(this.responsiveViewportProfiles || {}),
        [key]: { width: locked.width, height: locked.height },
      });
      this.responsiveViewportProfiles = next;
      this._config = {
        ...(this._config || {}),
        responsive_viewports: this._cloneJson_(this._serializeResponsiveViewportProfiles_(next)),
      };
    }
    return locked;
  },

  _getResponsiveViewportProfile_(profile = 'desktop', orientation = null) {
    const normalized = this._normalizeResponsiveViewportProfiles_(this.responsiveViewportProfiles);
    const split = this._splitResponsiveLayoutKey_(profile);
    const baseProfile = this._responsiveProfileKeys_().includes(profile) ? profile : split.profile;
    const nextOrientation = this._normalizeResponsiveOrientation_(baseProfile, orientation ?? split.orientation ?? this._getRequestedResponsiveOrientation_?.(baseProfile));
    const key = this._getResponsiveLayoutKey_(baseProfile, nextOrientation);
    return this._getLockedResponsiveViewportProfile_(
      baseProfile,
      normalized[key] || normalized[this._getPrimaryResponsiveLayoutKey_()],
      'width',
      nextOrientation
    );
  },

  _serializeResponsiveViewportProfiles_(profiles = null) {
    const normalized = this._normalizeResponsiveViewportProfiles_(profiles || this.responsiveViewportProfiles);
    return {
      desktop: {
        landscape: this._cloneJson_(normalized.desktop_landscape),
      },
      tablet: {
        landscape: this._cloneJson_(normalized.tablet_landscape),
        portrait: this._cloneJson_(normalized.tablet_portrait),
      },
      mobile: {
        landscape: this._cloneJson_(normalized.mobile_landscape),
        portrait: this._cloneJson_(normalized.mobile_portrait),
      },
    };
  },

  _normalizeSavedCardEntry_(entry = {}, fallback = null) {
    const normalized = (entry && typeof entry === 'object') ? { ...entry } : {};
    const fallbackEntry = fallback || {};
    const defaultWidth = 14 * Math.max(1, Number(this.gridSize || 10) || 10);
    const defaultHeight = 10 * Math.max(1, Number(this.gridSize || 10) || 10);
    const id = normalized.id || fallbackEntry.id || this._genLayoutCardId_();
    const x = Number(normalized?.position?.x ?? fallbackEntry?.position?.x ?? 0) || 0;
    const y = this._clampYToCanvasTop_(
      Number(normalized?.position?.y ?? fallbackEntry?.position?.y ?? 0) || 0
    );
    const width = Math.max(
      1,
      Number(normalized?.size?.width ?? fallbackEntry?.size?.width ?? defaultWidth) || defaultWidth
    );
    const height = Math.max(
      1,
      Number(normalized?.size?.height ?? fallbackEntry?.size?.height ?? defaultHeight) || defaultHeight
    );
    const zRaw = Number(normalized?.z ?? fallbackEntry?.z ?? 6);
    const z = Number.isFinite(zRaw) ? Math.max(1, Math.round(zRaw)) : 6;
    const tabId = this._normalizeTabId(
      normalized.tabId
      || normalized.tab_id
      || fallbackEntry.tabId
      || fallbackEntry.tab_id
      || this.defaultTab
    );
    const layerIds = this._normalizeCardLayerIds_(
      normalized.layerIds
      || normalized.layer_ids
      || fallbackEntry.layerIds
      || fallbackEntry.layer_ids
      || []
    );
    const out = {
      ...normalized,
      id,
      position: { x, y },
      size: { width, height },
      z,
      tabId,
    };
    if (layerIds.length) out.layerIds = layerIds;
    else {
      delete out.layerIds;
      delete out.layer_ids;
    }
    if (!out.card && fallbackEntry.card) out.card = fallbackEntry.card;
    if (out.card && typeof out.card === 'object') out.card = this._sanitizeCardConfigForStorage_(out.card);
    if (out.card?.type === 'custom:ddc-html-card') out.card = this._applyHtmlCardConfigOverride_(out.card);
    if (!out.card_style && fallbackEntry.card_style) out.card_style = this._cloneJson_(fallbackEntry.card_style);
    if (!out.cardStyle && fallbackEntry.cardStyle) out.cardStyle = this._cloneJson_(fallbackEntry.cardStyle);
    if (!out.overflow && fallbackEntry.overflow) out.overflow = fallbackEntry.overflow;
    return out;
  },

  _normalizeResponsiveLayouts_(cards = [], responsiveLayouts = null) {
    const variants = this._responsiveLayoutVariantKeys_();
    const baseCards = Array.isArray(cards) ? cards : [];
    const sourceLayouts = responsiveLayouts || {};
    const normalized = {};
  
    const resolveVariantEntries = (profile, orientation) => {
      const variantKey = this._getResponsiveLayoutKey_(profile, orientation);
      const direct = sourceLayouts?.[variantKey];
      if (Array.isArray(direct)) return direct;
      if (Array.isArray(direct?.cards)) return direct.cards;
  
      const grouped = sourceLayouts?.[profile];
      const nested = grouped?.[orientation];
      if (Array.isArray(nested)) return nested;
      if (Array.isArray(nested?.cards)) return nested.cards;
  
      if (Array.isArray(grouped)) return grouped;
      if (Array.isArray(grouped?.cards)) return grouped.cards;
      return null;
    };
  
    const baseById = new Map(baseCards.map((entry) => [entry?.id, entry]));
    const buildVariant = (profile, orientation, fallbacks = []) => {
      const variantKey = this._getResponsiveLayoutKey_(profile, orientation);
      const source = resolveVariantEntries(profile, orientation);
      const working =
        (Array.isArray(source) && source.length)
        ? source
        : fallbacks
            .map((fallbackKey) => normalized?.[fallbackKey])
            .find((candidate) => Array.isArray(candidate) && candidate.length)
          || normalized[this._getPrimaryResponsiveLayoutKey_()]
          || baseCards;
      normalized[variantKey] = (Array.isArray(working) ? working : []).map((entry) => {
        const fallback = normalized[this._getPrimaryResponsiveLayoutKey_()]?.find?.((candidate) => candidate.id === entry?.id) || null;
        return this._normalizeSavedCardEntry_(entry, fallback);
      });
    };
  
    const desktopSource = resolveVariantEntries('desktop', 'landscape') || baseCards;
    normalized.desktop_landscape = desktopSource.map((entry) => this._normalizeSavedCardEntry_(entry, baseById.get(entry?.id)));
    buildVariant('tablet', 'landscape', ['tablet_portrait', 'desktop_landscape']);
    buildVariant('tablet', 'portrait', ['tablet_landscape', 'desktop_landscape']);
    buildVariant('mobile', 'landscape', ['mobile_portrait', 'desktop_landscape']);
    buildVariant('mobile', 'portrait', ['mobile_landscape', 'desktop_landscape']);
  
    const allIds = new Set();
    variants.forEach((variantKey) => {
      (normalized[variantKey] || []).forEach((entry) => allIds.add(entry.id));
    });
  
    variants.forEach((variantKey) => {
      const map = new Map((normalized[variantKey] || []).map((entry) => [entry.id, entry]));
      allIds.forEach((id) => {
        if (map.has(id)) return;
        const fallback = variants
          .map((candidate) => normalized[candidate]?.find?.((entry) => entry.id === id))
          .find(Boolean);
        if (fallback) map.set(id, this._normalizeSavedCardEntry_(fallback, fallback));
      });
      normalized[variantKey] = Array.from(map.values());
    });

    if (this._shouldUseSharedResponsiveLayout_?.()) {
      const primaryKey = this._getPrimaryResponsiveLayoutKey_();
      const shared = (normalized[primaryKey] || baseCards || []).map((entry) => this._normalizeSavedCardEntry_(entry, entry));
      variants.forEach((variantKey) => {
        normalized[variantKey] = shared.map((entry) => this._normalizeSavedCardEntry_(entry, entry));
      });
    }
  
    return normalized;
  },

  _cardConfigsMatchForResponsiveSerialization_(card = null, fallbackCard = null) {
    if (card === fallbackCard) return true;
    if (!card || !fallbackCard || typeof card !== 'object' || typeof fallbackCard !== 'object') return false;
    if (card.type !== fallbackCard.type) return false;

    if (card.type === 'custom:ddc-html-card') {
      if (String(card.title || '') !== String(fallbackCard.title || '')) return false;
      if (String(card.html || '') !== String(fallbackCard.html || '')) return false;
      if (String(card.css || '') !== String(fallbackCard.css || '')) return false;
      if (String(card.js || '') !== String(fallbackCard.js || '')) return false;
      if (!!card.rerun_on_hass_update !== !!fallbackCard.rerun_on_hass_update) return false;

      const rest = (source) => {
        const {
          type,
          title,
          html,
          css,
          js,
          rerun_on_hass_update,
          ...other
        } = source || {};
        return other;
      };
      try { return JSON.stringify(rest(card)) === JSON.stringify(rest(fallbackCard)); } catch { return false; }
    }

    try { return JSON.stringify(card) === JSON.stringify(fallbackCard); } catch { return false; }
  },

  _compactResponsiveEntriesForSerialization_(entries = [], desktopById = new Map()) {
    return (Array.isArray(entries) ? entries : []).map((entry) => {
      const desktopEntry = desktopById.get(entry?.id);
      const canOmitCard = !!(
        desktopEntry?.card
        && entry?.card
        && this._cardConfigsMatchForResponsiveSerialization_(entry.card, desktopEntry.card)
      );
      if (!canOmitCard) return this._cloneJson_(entry);

      const { card, ...rest } = entry || {};
      return this._cloneJson_(rest);
    });
  },

  _serializeResponsiveLayouts_(layouts = null, fallbackCards = null) {
    const normalized = this._normalizeResponsiveLayouts_(fallbackCards || [], layouts || this._responsiveLayouts);
    const desktopLandscape = normalized.desktop_landscape || fallbackCards || [];
    const desktopById = new Map((desktopLandscape || []).map((entry) => [entry?.id, entry]));
    const sharedMode = this._shouldUseSharedResponsiveLayout_?.();
    const tabletLandscape = sharedMode ? desktopLandscape : (normalized.tablet_landscape || desktopLandscape);
    const tabletPortrait = sharedMode ? desktopLandscape : (normalized.tablet_portrait || tabletLandscape);
    const mobileLandscape = sharedMode ? desktopLandscape : (normalized.mobile_landscape || desktopLandscape);
    const mobilePortrait = sharedMode ? desktopLandscape : (normalized.mobile_portrait || mobileLandscape);
    return {
      desktop: {
        cards: this._compactResponsiveEntriesForSerialization_(desktopLandscape, desktopById),
        landscape: { cards: this._compactResponsiveEntriesForSerialization_(desktopLandscape, desktopById) },
      },
      tablet: {
        cards: this._compactResponsiveEntriesForSerialization_(tabletLandscape, desktopById),
        landscape: { cards: this._compactResponsiveEntriesForSerialization_(tabletLandscape, desktopById) },
        portrait: { cards: this._compactResponsiveEntriesForSerialization_(tabletPortrait, desktopById) },
      },
      mobile: {
        cards: this._compactResponsiveEntriesForSerialization_(mobileLandscape, desktopById),
        landscape: { cards: this._compactResponsiveEntriesForSerialization_(mobileLandscape, desktopById) },
        portrait: { cards: this._compactResponsiveEntriesForSerialization_(mobilePortrait, desktopById) },
      },
    };
  },

  _layoutSnapshotTimestamp_(snapshot = null) {
    const raw =
      snapshot?.updated_at
      ?? snapshot?.updatedAt
      ?? snapshot?.saved_at
      ?? snapshot?.savedAt
      ?? snapshot?.meta?.updated_at
      ?? snapshot?.meta?.updatedAt
      ?? null;
    if (typeof raw === 'number' && Number.isFinite(raw)) return raw;
    if (typeof raw === 'string' && raw.trim()) {
      const parsed = Date.parse(raw);
      if (Number.isFinite(parsed)) return parsed;
      const numeric = Number(raw);
      if (Number.isFinite(numeric)) return numeric;
    }
    return 0;
  },

  _slugifyPackageToken_(value, fallback = 'package') {
    const raw = String(value ?? '')
      .trim()
      .toLowerCase()
      .replace(/\.ya?ml$/i, '');
    const slug = raw.replace(/[^a-z0-9_-]+/g, '_').replace(/^_+|_+$/g, '');
    return slug || fallback;
  },

  _normalizeDashboardPackages_(packages = []) {
    if (!Array.isArray(packages)) return [];
    const usedFilenames = new Set();
  
    return packages
      .map((pkg, index) => {
        if (!pkg || typeof pkg !== 'object') return null;
  
        const rawId = pkg.id || pkg.package_id || `package_${index + 1}`;
        const id = String(rawId).trim() || `package_${index + 1}`;
        const rawName = pkg.name || pkg.title || pkg.filename || id;
        const name = String(rawName).trim() || id;
        const filenameBase = this._slugifyPackageToken_(
          pkg.filename || name || id,
          `package_${index + 1}`
        );
  
        let filename = `${filenameBase}.yaml`;
        let suffix = 2;
        while (usedFilenames.has(filename)) {
          filename = `${filenameBase}_${suffix++}.yaml`;
        }
        usedFilenames.add(filename);
  
        const yaml = String(pkg.yaml ?? pkg.content ?? pkg.body ?? '').replace(/\r\n/g, '\n');
  
        return {
          ...this._cloneJson_(pkg),
          id,
          name,
          filename,
          yaml,
          enabled: pkg.enabled !== false,
        };
      })
      .filter(Boolean);
  },

  _setDashboardPackages_(packages = []) {
    this._dashboardPackages = this._normalizeDashboardPackages_(packages);
    return this._dashboardPackages;
  },

  _exportDashboardPackages_() {
    return this._cloneJson_(this._normalizeDashboardPackages_(this._dashboardPackages));
  },

  _captureCurrentLayoutEntries_() {
    if (!this.cardContainer) return [];
    return Array.from(this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)')).map((w) => {
      const x = parseFloat(w.getAttribute('data-x')) || 0;
      const y = parseFloat(w.getAttribute('data-y')) || 0;
      const width = parseFloat(w.style.width) || w.getBoundingClientRect().width;
      const height = parseFloat(w.style.height) || w.getBoundingClientRect().height;
      const z = parseInt(w.style.zIndex || '1', 10);
      const cardCfg = this._extractCardConfig(w.firstElementChild);
      const tabId = w.dataset.tabId || this.defaultTab;
      const overflow = (w.style.overflow && w.style.overflow !== '') ? w.style.overflow : null;
      const layerIds = this._getWrapperLayerIds_(w);
      const entry = {
        id: w.dataset.layoutCardId || this._genLayoutCardId_(),
        card: cardCfg,
        position: { x, y },
        size: { width, height },
        z,
        tabId,
      };
      if (layerIds.length) entry.layerIds = layerIds;
      const cardStyle = this._extractPerCardStyle_(w);
      if (Object.keys(cardStyle).length) entry.card_style = cardStyle;
      if (overflow) entry.overflow = overflow;
      return entry;
    });
  },

  _syncResponsiveLayoutMembership_(sourceLayoutKey = null) {
    if (!this._responsiveLayouts) return;
    const variants = this._responsiveLayoutVariantKeys_();
    const origin = variants.includes(sourceLayoutKey)
      ? sourceLayoutKey
      : (
          this._shouldUseSharedResponsiveLayout_?.()
            ? this._getPrimaryResponsiveLayoutKey_()
            : (this._activeResponsiveLayoutKey || this._getRequestedResponsiveLayoutKey_?.() || this._getPrimaryResponsiveLayoutKey_())
        );
    const sourceEntries = Array.isArray(this._responsiveLayouts?.[origin]) ? this._responsiveLayouts[origin] : [];
    const sourceIds = new Set(sourceEntries.map((entry) => entry.id));
    const sourceMap = new Map(sourceEntries.map((entry) => [entry.id, entry]));

    if (this._shouldUseSharedResponsiveLayout_?.()) {
      const shared = sourceEntries.map((entry) => this._normalizeSavedCardEntry_(entry, entry));
      variants.forEach((variantKey) => {
        this._responsiveLayouts[variantKey] = shared.map((entry) => this._normalizeSavedCardEntry_(this._cloneJson_?.(entry) || entry, entry));
      });
      return;
    }
  
    variants.forEach((variantKey) => {
      if (variantKey === origin) return;
      const current = Array.isArray(this._responsiveLayouts?.[variantKey]) ? this._responsiveLayouts[variantKey] : [];
      const next = current
        .filter((entry) => sourceIds.has(entry.id))
        .map((entry) => this._normalizeSavedCardEntry_(entry, sourceMap.get(entry.id)));
      sourceEntries.forEach((entry) => {
        if (next.some((candidate) => candidate.id === entry.id)) return;
        next.push(this._normalizeSavedCardEntry_(entry, entry));
      });
      this._responsiveLayouts[variantKey] = next;
    });
  },

  _persistCurrentResponsiveProfileToMemory_({ syncMembership = true } = {}) {
    if (this._loading || !this.cardContainer) return;
    if (!this._responsiveLayouts && !this.cardContainer.querySelector('.card-wrapper:not(.ddc-placeholder)')) return;
    const layoutKey = this._shouldUseSharedResponsiveLayout_?.()
      ? this._getPrimaryResponsiveLayoutKey_()
      : (this._activeResponsiveLayoutKey || this._getRequestedResponsiveLayoutKey_?.() || this._getPrimaryResponsiveLayoutKey_());
    if (!layoutKey) return;
    if (!this._responsiveLayouts) {
      this._responsiveLayouts = this._normalizeResponsiveLayouts_(this._captureCurrentLayoutEntries_(), null);
    }
    this._responsiveLayouts[layoutKey] = this._captureCurrentLayoutEntries_();
    if (syncMembership) this._syncResponsiveLayoutMembership_(layoutKey);
  },

  _updateCardConfigAcrossResponsiveLayouts_(layoutCardId, cardConfig) {
    const id = String(layoutCardId || '').trim();
    if (!id) return false;
    if ((!this._responsiveLayouts || typeof this._responsiveLayouts !== 'object') && this.cardContainer) {
      try {
        const entries = this._captureCurrentLayoutEntries_();
        if (entries.length) this._responsiveLayouts = this._normalizeResponsiveLayouts_(entries, null);
      } catch {}
    }
    if (!this._responsiveLayouts || typeof this._responsiveLayouts !== 'object') return false;
    const cleanConfig = this._sanitizeCardConfigForStorage_(cardConfig || {});
    let changed = false;
    const variantKeys = this._responsiveLayoutVariantKeys_?.() || Object.keys(this._responsiveLayouts || {});
    variantKeys.forEach((variantKey) => {
      const entries = Array.isArray(this._responsiveLayouts?.[variantKey]) ? this._responsiveLayouts[variantKey] : null;
      if (!entries) return;
      this._responsiveLayouts[variantKey] = entries.map((entry) => {
        if (String(entry?.id || '') !== id) return entry;
        changed = true;
        return {
          ...entry,
          card: this._cloneCardConfig_(cleanConfig),
        };
      });
    });
    return changed;
  },

  _syncLiveCardConfigsIntoResponsiveLayouts_() {
    if (!this.cardContainer) return false;
    if (!this._responsiveLayouts || typeof this._responsiveLayouts !== 'object') {
      try {
        const entries = this._captureCurrentLayoutEntries_();
        if (!entries.length) return false;
        this._responsiveLayouts = this._normalizeResponsiveLayouts_(entries, null);
      } catch {
        return false;
      }
    }
  
    let changed = false;
    const wraps = Array.from(this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)'));
    wraps.forEach((wrap) => {
      const id = String(wrap?.dataset?.layoutCardId || '').trim();
      if (!id) return;
      const cardCfg = this._extractCardConfig(wrap.firstElementChild);
      if (!cardCfg || typeof cardCfg !== 'object' || !Object.keys(cardCfg).length) return;
      try { wrap.dataset.cfg = JSON.stringify(cardCfg); } catch {}
      try {
        if (wrap.firstElementChild) wrap.firstElementChild.__ddcSourceConfig = this._cloneCardConfig_(cardCfg);
      } catch {}
      changed = this._updateCardConfigAcrossResponsiveLayouts_(id, cardCfg) || changed;
    });
    return changed;
  },

  _getRealViewportMetrics_() {
    const vv = window.visualViewport;
    const width = Math.max(
      1,
      Math.round(vv?.width || window.innerWidth || document.documentElement?.clientWidth || 1)
    );
    const height = Math.max(
      1,
      Math.round(vv?.height || window.innerHeight || document.documentElement?.clientHeight || 1)
    );
    return {
      width,
      height,
      shortEdge: Math.min(width, height),
      longEdge: Math.max(width, height),
      isPortrait: height >= width,
    };
  },

  _getResponsiveProfileLabel_(profile = 'desktop') {
    return ({
      desktop: 'Desktop',
      tablet: 'Tablet',
      mobile: 'Mobile',
    })[profile] || 'Desktop';
  },

  _getActualResponsiveProfile_() {
    const viewport = this._getRealViewportMetrics_?.() || { width: 0, height: 0, shortEdge: 0, longEdge: 0 };
    const width = Math.max(1, Number(viewport.width || 0) || 0);
    const shortEdge = Math.max(1, Number(viewport.shortEdge || Math.min(viewport.width || 0, viewport.height || 0)) || 0);
    const longEdge = Math.max(1, Number(viewport.longEdge || Math.max(viewport.width || 0, viewport.height || 0)) || 0);
  
    let touchLikeDevice = false;
    try {
      const coarse = !!window.matchMedia?.('(pointer: coarse)')?.matches;
      const noHover = !!window.matchMedia?.('(hover: none)')?.matches;
      const touchPoints = Number(navigator?.maxTouchPoints || 0) || 0;
      touchLikeDevice = (coarse || touchPoints > 1) && noHover;
    } catch {}
  
    // On real handheld / tablet devices we classify by the shortest edge so
    // phones stay "mobile" even in landscape, and tablets stay "tablet" even
    // in portrait. Width-only logic caused orientation flips to load the wrong
    // responsive layout on actual devices.
    if (touchLikeDevice) {
      if (shortEdge < 600) return 'mobile';
      if (shortEdge < 1024 || longEdge < 1400) return 'tablet';
      return 'desktop';
    }
  
    // Fallback for desktop browsers and non-touch environments: width-based
    // breakpoints still make sense there because the browser window itself is
    // usually the thing we want to adapt to.
    if (width < 768) return 'mobile';
    if (width < 1180) return 'tablet';
    return 'desktop';
  },

  _getRequestedResponsiveProfile_() {
    const previewMode = String(this.viewportPreviewMode || 'live').toLowerCase();
    const sizeMode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
    if (sizeMode === 'auto' && this.editMode && (previewMode === 'desktop' || previewMode === 'tablet' || previewMode === 'mobile')) {
      return previewMode;
    }
    return this._getActualResponsiveProfile_?.() || 'desktop';
  },

  _getRequestedResponsiveOrientation_(profile = null) {
    const baseProfile = this._responsiveProfileKeys_().includes(profile)
      ? profile
      : (this._getRequestedResponsiveProfile_?.() || 'desktop');
    if (baseProfile === 'desktop') return 'landscape';
  
    const previewMode = String(this.viewportPreviewMode || 'live').toLowerCase();
    const sizeMode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
    if (sizeMode === 'auto' && this.editMode && previewMode === baseProfile) {
      return this._getStoredResponsivePreviewOrientation_(baseProfile);
    }
  
    return (this._getRealViewportMetrics_?.()?.isPortrait ?? true) ? 'portrait' : 'landscape';
  },

  _getRequestedResponsiveLayoutKey_() {
    const profile = this._getRequestedResponsiveProfile_?.() || 'desktop';
    const orientation = this._getRequestedResponsiveOrientation_?.(profile) || 'landscape';
    return this._getRuntimeResponsiveLayoutKey_?.(profile, orientation) || this._getResponsiveLayoutKey_(profile, orientation);
  },

  async _activateResponsiveProfile_(profile, { force = false } = {}) {
    const next = this._responsiveProfileKeys_().includes(profile) ? profile : 'desktop';
    const nextOrientation = this._getRequestedResponsiveOrientation_?.(next) || 'landscape';
    const nextLayoutKey = this._getRuntimeResponsiveLayoutKey_?.(next, nextOrientation) || this._getResponsiveLayoutKey_(next, nextOrientation);
    const prev = this._activeResponsiveProfile || null;
    const prevLayoutKey = this._activeResponsiveLayoutKey || this._getRuntimeResponsiveLayoutKey_?.(prev || 'desktop', 'landscape') || this._getResponsiveLayoutKey_(prev || 'desktop', 'landscape');
    if (!force && prevLayoutKey === nextLayoutKey) {
      this._syncViewportPreviewUI_?.();
      return;
    }
  
    if (prevLayoutKey && prevLayoutKey !== nextLayoutKey) {
      this._persistCurrentResponsiveProfileToMemory_();
    }
  
    this._activeResponsiveProfile = next;
    this._activeResponsiveLayoutKey = nextLayoutKey;
    this._setStoredResponsivePreviewOrientation_(next, nextOrientation);
    const ticket = ++this.__responsiveSwitchSeq;
    if (!this._responsiveLayouts) {
      this._responsiveLayouts = this._normalizeResponsiveLayouts_(this._captureCurrentLayoutEntries_(), null);
    }
    const entries = this._responsiveLayouts?.[nextLayoutKey] || [];
    await this._buildCardsFromEntries_(entries, ticket);
    if (ticket !== this.__responsiveSwitchSeq) return;
    this._syncViewportPreviewUI_?.();
  },

  async _syncResponsiveProfileForViewport_({ force = false } = {}) {
    if (this.__ddcImportingDashboard) {
      this._syncViewportPreviewUI_?.();
      return;
    }
    if (this.__booting) return;
    if (!this._responsiveLayouts && !this.cardContainer?.querySelector?.('.card-wrapper')) {
      this._syncViewportPreviewUI_?.();
      return;
    }
    const next = this._getRequestedResponsiveProfile_?.() || 'desktop';
    const nextLayoutKey = this._getRequestedResponsiveLayoutKey_?.() || this._getPrimaryResponsiveLayoutKey_();
    if (!force && nextLayoutKey === this._activeResponsiveLayoutKey) {
      this._syncViewportPreviewUI_?.();
      return;
    }
    await this._activateResponsiveProfile_(next, { force });
  },
};

export function installResponsiveModelMethods(proto) {
  for (const [name, value] of Object.entries(responsiveModelMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
