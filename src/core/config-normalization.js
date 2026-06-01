/*
 * Configuration normalization, cloning, storage-key, and sanitization helpers.
 *
 * These helpers protect the rest of the dashboard from legacy option names, unsafe card-mod style
 * values, mutable config objects, and unstable storage keys.
 */

/* Config normalization, cloning, storage keys, and HTML-card override helpers. */
const configStaticMethods = {
  _genKey() {
    const id =
      globalThis.crypto?.randomUUID?.() ||
      `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
    return `layout_${id}`;
  },

  normalizeContainerSizeMode(mode) {
    const value = String(mode ?? '').trim().toLowerCase();
    if (value === 'dynamic') return 'auto';
    if (value === 'auto' || value === 'fixed_custom' || value === 'preset') return value;
    return 'auto';
  },
};

const configHelperMethods = {
  _hashStorageSeed_(value = '') {
    const text = String(value || '');
    let hash = 2166136261;
    for (let i = 0; i < text.length; i += 1) {
      hash ^= text.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(36);
  },

  _deriveStorageKeyFromConfig_(config = {}) {
    const explicit = String(config?.storage_key || config?.storageKey || '').trim();
    if (explicit) return explicit;
    const id = String(config?.id || '').trim();
    if (id) return `layout_${id.replace(/[^a-zA-Z0-9_-]+/g, '_')}`;
    let path = '';
    try { path = this._getCurrentDashboardUrlPath_?.() || window.location?.pathname || ''; } catch {}
    const seed = {
      path,
      type: config?.type || 'custom:drag-and-drop-card',
      cards: Array.isArray(config?.cards) ? config.cards : [],
      tabs: Array.isArray(config?.tabs) ? config.tabs : [],
      default_tab: config?.default_tab || '',
    };
    return `layout_auto_${this._hashStorageSeed_(JSON.stringify(seed))}`;
  },

  _normalizeContainerSizeMode_(mode) {
    return this.constructor.normalizeContainerSizeMode(mode);
  },

  _normalizeAutoViewportMaxWidth_(value) {
    const width = Number(value);
    if (!Number.isFinite(width) || width <= 0) return 0;
    return Math.max(240, Math.min(10000, Math.round(width)));
  },

  _normalizeAutoScaleMax_(value) {
    const scale = Number(value);
    if (!Number.isFinite(scale) || scale <= 0) return 0;
    return Math.max(0.1, Math.min(4, Math.round(scale * 100) / 100));
  },

  _parkedSidebarOptionKeys_() {
    return [
      'sidebar_enabled', 'sidebar_items', 'sidebar_content', 'sidebar_style',
      'sidebar_density', 'sidebar_accent', 'sidebar_header', 'sidebar_header_type',
      'sidebar_canvas_height', 'sidebar_cards', 'sidebar_home_image',
      'sidebar_house_image', 'sidebar_home_image_url', 'sidebar_calendar_entities',
      'sidebar_calendars', 'sidebar_weather_entity', 'sidebar_title',
      'sidebar_user_name', 'sidebar_user_role',
      'sidebarEnabled', 'sidebarItems', 'sidebarContent', 'sidebarStyle',
      'sidebarDensity', 'sidebarAccent', 'sidebarHeader', 'sidebarHeaderType',
      'sidebarCanvasHeight', 'sidebarCards', 'sidebarHomeImage',
      'sidebarHouseImage', 'sidebarCalendarEntities', 'sidebarCalendars',
      'sidebarWeatherEntity', 'sidebarTitle', 'sidebarUserName', 'sidebarUserRole',
    ];
  },

  _deleteParkedSidebarOptions_(target = null) {
    if (!target || typeof target !== 'object') return target;
    for (const key of this._parkedSidebarOptionKeys_()) delete target[key];
    return target;
  },

  _normalizeDashboardOptions_(options = {}, { requireSizeMode = false, forceAutoResize = false } = {}) {
    if (!options || typeof options !== 'object') return {};
    const next = { ...options };
    this._deleteParkedSidebarOptions_(next);
    if (Object.prototype.hasOwnProperty.call(next, 'container_size_mode') || requireSizeMode) {
      const rawMode = String(next.container_size_mode ?? '').trim().toLowerCase();
      next.container_size_mode = this._normalizeContainerSizeMode_(next.container_size_mode);
      if ((forceAutoResize || rawMode === 'dynamic' || rawMode === 'auto') && next.container_size_mode === 'auto') {
        next.auto_resize_cards = true;
      }
    }
    if ('autoViewportMaxWidth' in next && !('auto_viewport_max_width' in next)) {
      next.auto_viewport_max_width = next.autoViewportMaxWidth;
    }
    if ('autoScaleMax' in next && !('auto_scale_max' in next)) {
      next.auto_scale_max = next.autoScaleMax;
    }
    if ('auto_viewport_max_width' in next) {
      next.auto_viewport_max_width = this._normalizeAutoViewportMaxWidth_(next.auto_viewport_max_width);
    }
    if ('auto_scale_max' in next) {
      next.auto_scale_max = this._normalizeAutoScaleMax_(next.auto_scale_max);
    }
    delete next.autoViewportMaxWidth;
    delete next.autoScaleMax;
    return next;
  },

  _normalizeDashboardPayload_(payload = {}) {
    if (!payload || typeof payload !== 'object') return payload;
    const next = { ...payload };
    if (next.options && typeof next.options === 'object') {
      next.options = this._normalizeDashboardOptions_(next.options, { forceAutoResize: true });
    } else if (Object.prototype.hasOwnProperty.call(next, 'container_size_mode')) {
      const normalized = this._normalizeDashboardOptions_(next, { forceAutoResize: true });
      Object.assign(next, normalized);
    }
    this._deleteParkedSidebarOptions_(next);
    return next;
  },

  _cloneJson_(value) {
    try {
      return JSON.parse(JSON.stringify(value));
    } catch {
      return value ?? null;
    }
  },

  _cloneCardConfig_(value = {}) {
    try {
      if (typeof structuredClone === 'function') return structuredClone(value || {});
      return JSON.parse(JSON.stringify(value || {}));
    } catch {
      return { ...(value || {}) };
    }
  },

  _dedupeRepeatedCssBlocks_(css = '') {
    const text = String(css ?? '');
    if (!text.includes('{') || !text.includes('}')) return text;

    const seen = new Set();
    let changed = false;
    const next = text.replace(/([^{}]+\{[^{}]*\})/g, (block) => {
      const open = block.indexOf('{');
      const close = block.lastIndexOf('}');
      if (open < 0 || close <= open) return block;
      const selector = block.slice(0, open).trim().replace(/\s+/g, ' ');
      if (!selector || selector.startsWith('@')) return block;
      const body = block
        .slice(open + 1, close)
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/\s*;\s*/g, ';')
        .replace(/\s*:\s*/g, ':');
      const key = `${selector}{${body}}`;
      if (!body || !seen.has(key)) {
        seen.add(key);
        return block;
      }
      changed = true;
      return '';
    });

    return changed ? next.replace(/\n{3,}/g, '\n\n').trimEnd() : text;
  },

  _sanitizeCardModStyleValue_(value) {
    if (typeof value === 'string') return this._dedupeRepeatedCssBlocks_(value);
    if (Array.isArray(value)) return value.map((item) => this._sanitizeCardModStyleValue_(item));
    if (value && typeof value === 'object') {
      const out = {};
      for (const [key, child] of Object.entries(value)) {
        out[key] = this._sanitizeCardModStyleValue_(child);
      }
      return out;
    }
    return value;
  },

  _sanitizeCardConfigForStorage_(cfg = {}) {
    const clone = this._cloneCardConfig_(cfg);
    const seen = new WeakSet();
    const visit = (node) => {
      if (!node || typeof node !== 'object' || seen.has(node)) return;
      seen.add(node);

      if (node.card_mod && typeof node.card_mod === 'object' && 'style' in node.card_mod) {
        node.card_mod = {
          ...node.card_mod,
          style: this._sanitizeCardModStyleValue_(node.card_mod.style),
        };
      }

      if (node.card && typeof node.card === 'object') visit(node.card);
      if (Array.isArray(node.cards)) node.cards.forEach((card) => visit(card));
    };
    visit(clone);
    return clone;
  },

  _htmlCardConfigHash_(cfg = {}) {
    const source = cfg && typeof cfg === 'object' ? cfg : {};
    return this._hashStorageSeed_(JSON.stringify({
      type: 'custom:ddc-html-card',
      title: source.title || '',
      html: source.html || '',
      css: source.css || '',
      js: source.js || '',
      rerun_on_hass_update: !!source.rerun_on_hass_update,
    }));
  },

  _htmlCardOverrideStoreKey_() {
    return `ddc_html_card_overrides_${this.storageKey || this._deriveStorageKeyFromConfig_(this._config || {}) || 'default'}`;
  },

  _readHtmlCardOverrides_() {
    try {
      const parsed = JSON.parse(localStorage.getItem(this._htmlCardOverrideStoreKey_()) || '{}');
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
      return {};
    }
  },

  _writeHtmlCardOverrides_(overrides = {}) {
    try {
      const entries = Object.entries(overrides || {})
        .filter(([, value]) => value?.config && typeof value.config === 'object')
        .sort((a, b) => String(b[1]?.updated_at || '').localeCompare(String(a[1]?.updated_at || '')))
        .slice(0, 80);
      localStorage.setItem(this._htmlCardOverrideStoreKey_(), JSON.stringify(Object.fromEntries(entries)));
    } catch {}
  },

  _rememberHtmlCardConfigOverride_(fromConfig = {}, toConfig = {}) {
    if (String(fromConfig?.type || '') !== 'custom:ddc-html-card') return false;
    if (String(toConfig?.type || '') !== 'custom:ddc-html-card') return false;
    const fromHash = this._htmlCardConfigHash_(fromConfig);
    const toHash = this._htmlCardConfigHash_(toConfig);
    if (!fromHash || !toHash || fromHash === toHash) return false;
    const overrides = this._readHtmlCardOverrides_();
    overrides[fromHash] = {
      to_hash: toHash,
      updated_at: new Date().toISOString(),
      config: this._sanitizeCardConfigForStorage_(toConfig),
    };
    this._writeHtmlCardOverrides_(overrides);
    return true;
  },

  _applyHtmlCardConfigOverride_(config = {}) {
    if (String(config?.type || '') !== 'custom:ddc-html-card') return config;
    const overrides = this._readHtmlCardOverrides_();
    let current = this._sanitizeCardConfigForStorage_(config);
    const seen = new Set();
    for (let i = 0; i < 8; i += 1) {
      const hash = this._htmlCardConfigHash_(current);
      if (!hash || seen.has(hash)) break;
      seen.add(hash);
      const next = overrides?.[hash]?.config;
      if (!next || typeof next !== 'object') break;
      current = this._sanitizeCardConfigForStorage_({
        ...current,
        ...next,
        type: 'custom:ddc-html-card',
      });
    }
    return current;
  },
};

export function installConfigHelperMethods(CardClass) {
  for (const [name, value] of Object.entries(configStaticMethods)) {
    Object.defineProperty(CardClass, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
  for (const [name, value] of Object.entries(configHelperMethods)) {
    Object.defineProperty(CardClass.prototype, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
