/*
 * Lovelace dashboard converter.
 *
 * Imports an existing Home Assistant Lovelace config as a copy. The flow is deliberately split into
 * source parsing, an inspectable import plan, responsive layout packing, validation, and an atomic
 * apply step so malformed or partially supported dashboards cannot leave the current canvas broken.
 */

import { load as loadYaml } from 'js-yaml';

const DASHBOARD_CONVERTER_MODAL_ID = 'ddc-dashboard-converter-modal';
const DASHBOARD_CONVERTER_MAX_SOURCE_CHARS = 5_000_000;
const DASHBOARD_CONVERTER_MAX_CARDS = 2_000;

const converterMethods = {
  _dashboardConverterSlug_(value, fallback = 'tab') {
    const slug = String(value || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 48);
    return slug || fallback;
  },

  _parseDashboardConverterText_(text = '') {
    const raw = String(text || '').trim();
    if (!raw) throw new Error('Paste a Lovelace dashboard config first.');
    if (raw.length > DASHBOARD_CONVERTER_MAX_SOURCE_CHARS) {
      throw new Error('This dashboard config is too large to import safely (maximum 5 MB).');
    }
    try {
      return JSON.parse(raw);
    } catch (jsonErr) {
      try {
        return loadYaml(raw);
      } catch (yamlErr) {
        throw new Error(`Could not parse as JSON or YAML: ${yamlErr?.message || yamlErr || jsonErr?.message || jsonErr}`);
      }
    }
  },

  _normalizeDashboardConverterConfig_(source = null) {
    if (!source || typeof source !== 'object') throw new Error('The imported dashboard config is empty.');
    if (Array.isArray(source)) return { title: 'Imported dashboard', views: source };
    if (Array.isArray(source.views)) return source;
    if (Array.isArray(source?.config?.views)) return source.config;
    if (Array.isArray(source?.lovelace?.views)) return source.lovelace;
    if (Array.isArray(source?.lovelace?.config?.views)) return source.lovelace.config;
    if (Array.isArray(source.cards)) {
      return {
        title: source.title || 'Imported dashboard',
        views: [{
          title: source.title || 'Imported',
          path: source.path || 'imported',
          icon: source.icon || 'mdi:view-dashboard-outline',
          cards: source.cards,
        }],
      };
    }
    throw new Error('Could not find a Lovelace views array in this config.');
  },

  _normalizeDashboardConverterTabId_(view = {}, index = 0, used = new Set()) {
    const base = this._dashboardConverterSlug_(view.path || view.url_path || view.title || `view-${index + 1}`, `view-${index + 1}`);
    let id = base;
    let suffix = 2;
    while (used.has(id)) id = `${base}-${suffix++}`;
    used.add(id);
    return id;
  },

  _dashboardConverterCardId_(viewIndex = 0, cardIndex = 0) {
    if (typeof this._genLayoutCardId_ === 'function') return this._genLayoutCardId_();
    const cardKey = Number.isFinite(Number(cardIndex)) ? Number(cardIndex) + 1 : String(cardIndex || 'card');
    return `imported-${viewIndex + 1}-${cardKey}-${Date.now().toString(36)}`;
  },

  _normalizeDashboardConverterBadgeCard_(badge) {
    if (!badge) return null;
    if (typeof badge === 'string') return { type: 'entity', entity: badge };
    if (typeof badge !== 'object') return null;
    if (badge.entity) return { type: 'entity', entity: badge.entity, name: badge.name, icon: badge.icon };
    return null;
  },

  _dashboardConverterViewLayoutMode_(view = {}) {
    const type = String(view?.type || '').trim().toLowerCase();
    if (type === 'panel' || view?.panel === true) return 'panel';
    if (type === 'custom:horizontal-layout' || type === 'horizontal') return 'horizontal';
    if (type === 'custom:vertical-layout' || type === 'vertical') return 'vertical';
    if (type === 'custom:masonry-layout' || type === 'masonry') return 'masonry';
    return 'grid';
  },

  _dashboardConverterLayoutType_(card = {}) {
    const layout = card?.layout;
    const layoutType = card?.layout_type ?? card?.layoutType ?? (typeof layout === 'string' ? layout : layout?.type);
    return String(layoutType || '').trim().toLowerCase();
  },

  _dashboardConverterLayoutCardMode_(card = {}) {
    if (String(card?.type || '').trim().toLowerCase() !== 'custom:layout-card') return false;
    const layoutType = this._dashboardConverterLayoutType_(card);
    if (!layoutType || layoutType === 'default' || layoutType.includes('horizontal')) return 'horizontal';
    if (layoutType.includes('vertical')) return 'vertical';
    if (layoutType.includes('masonry')) return 'masonry';
    return null;
  },

  _dashboardConverterLayoutOptions_(source = {}) {
    const layout = source?.layout;
    const options = layout && typeof layout === 'object' && !Array.isArray(layout) ? { ...layout } : {};
    [
      'width',
      'column_width',
      'columnWidth',
      'column-width',
      'max_width',
      'max_cols',
      'max-width',
      'maxCols',
      'max-cols',
      'columns',
      'rtl',
      'column_widths',
      'columnWidths',
      'column-widths',
      'margin',
      'padding',
      'height',
      'card_margin',
      'cardMargin',
      'card-margin',
      'min_height',
      'minHeight',
      'min-height',
    ].forEach((key) => {
      if (options[key] === undefined && source?.[key] !== undefined) options[key] = source[key];
    });
    return options;
  },

  _dashboardConverterPixelValue_(value, fallback = null, relativeTo = null) {
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    const raw = String(value ?? '')
      .trim()
      .replace(/!important/ig, '')
      .replace(/;+\s*$/g, '')
      .replace(/^['"]|['"]$/g, '')
      .trim();
    if (!raw) return fallback;
    if (raw.endsWith('%') && Number(relativeTo) > 0) {
      const pct = Number.parseFloat(raw);
      return Number.isFinite(pct) ? (relativeTo * pct) / 100 : fallback;
    }
    const length = raw.match(/^(-?\d+(?:\.\d+)?)(px|rem|em)?$/i);
    if (!length) return fallback;
    const parsed = Number.parseFloat(length[1]);
    if (!Number.isFinite(parsed)) return fallback;
    const unit = String(length[2] || 'px').toLowerCase();
    if (unit === 'rem' || unit === 'em') return parsed * 16;
    return parsed;
  },

  _dashboardConverterColumnWidthList_(columnWidths = null, columns = 1, fallbackWidth = 300, available = null) {
    if (!columnWidths) return Array(columns).fill(fallbackWidth);
    const tokens = Array.isArray(columnWidths)
      ? columnWidths
      : String(columnWidths)
          .trim()
          .split(/\s+/)
          .filter(Boolean);
    if (!tokens.length) return Array(columns).fill(fallbackWidth);
    return Array.from({ length: columns }, (_, index) => {
      const token = tokens[index] ?? tokens[tokens.length - 1];
      return Math.max(120, Math.round(this._dashboardConverterPixelValue_(token, fallbackWidth, available)));
    });
  },

  _dashboardConverterCssBox_(value = null, fallback = '0px') {
    const raw = String(value || fallback || '0px').trim();
    const clean = raw.startsWith('var(') ? fallback : raw;
    const parts = String(clean || '0px').split(/\s+/).filter(Boolean);
    const values = [0, 1, 2, 3].map((index) => {
      const token =
        parts[index]
        ?? (index === 2 ? parts[0] : null)
        ?? (index === 3 ? parts[1] : null)
        ?? parts[0]
        ?? '0px';
      return this._dashboardConverterPixelValue_(token, 0) || 0;
    });
    const [top, right, bottom, left] = values;
    return { top, right, bottom, left };
  },

  _dashboardConverterStyleText_(value, depth = 0) {
    if (value == null || depth > 4) return '';
    if (typeof value === 'string') return value;
    if (Array.isArray(value)) {
      return value.map((item) => this._dashboardConverterStyleText_(item, depth + 1)).filter(Boolean).join('\n');
    }
    if (typeof value === 'object') {
      return Object.entries(value).map(([key, item]) => {
        if (typeof item === 'string' || typeof item === 'number') return `${key}: ${item}`;
        return this._dashboardConverterStyleText_(item, depth + 1);
      }).filter(Boolean).join('\n');
    }
    return '';
  },

  _dashboardConverterCleanCssValue_(value = '') {
    return String(value ?? '')
      .trim()
      .replace(/!important/ig, '')
      .replace(/;+\s*$/g, '')
      .replace(/^['"]|['"]$/g, '')
      .trim();
  },

  _dashboardConverterCssDeclaration_(styleText = '', prop = '') {
    const name = String(prop || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (!name) return '';
    const match = String(styleText || '').match(new RegExp(`(?:^|[;\\n{}\\s])\\s*${name}\\s*:\\s*([^;\\n}]+)`, 'i'));
    return match ? this._dashboardConverterCleanCssValue_(match[1]) : '';
  },

  _dashboardConverterColorFromCssValue_(value = '') {
    const raw = this._dashboardConverterCleanCssValue_(value);
    if (!raw || /^(none|initial|inherit|unset|0)$/i.test(raw)) return '';
    const direct = raw.match(/^(#[0-9a-f]{3,8}\b|rgba?\([^)]+\)|hsla?\([^)]+\)|color-mix\([^)]+\)|var\([^)]+\)|transparent\b)$/i);
    if (direct) return raw;
    const candidates = raw.match(/#[0-9a-f]{3,8}\b|rgba?\([^)]+\)|hsla?\([^)]+\)|color-mix\([^)]+\)|var\([^)]+\)|\b[a-z]+\b/ig) || [];
    const skip = new Set(['solid', 'dashed', 'dotted', 'double', 'groove', 'ridge', 'inset', 'outset', 'none', 'thin', 'medium', 'thick']);
    for (let i = candidates.length - 1; i >= 0; i -= 1) {
      const candidate = candidates[i];
      if (!skip.has(String(candidate).toLowerCase())) return candidate;
    }
    return '';
  },

  _dashboardConverterBackgroundUrl_(value = '') {
    const raw = this._dashboardConverterCleanCssValue_(value);
    if (!raw) return '';
    const urlMatch = raw.match(/url\(\s*(['"]?)(.*?)\1\s*\)/i);
    if (urlMatch?.[2]) return this._dashboardConverterCleanCssValue_(urlMatch[2]);
    if (/^(https?:\/\/|\/|\.{1,2}\/|local\/|media-source:\/\/|data:image\/)/i.test(raw) && !/\s/.test(raw)) return raw;
    return '';
  },

  _dashboardConverterCardStyleHints_(card = {}) {
    const styleText = [
      this._dashboardConverterStyleText_(card?.card_mod?.style),
      this._dashboardConverterStyleText_(card?.style),
      this._dashboardConverterStyleText_(card?.styles),
    ].filter(Boolean).join('\n');
    if (!styleText) return {};
    const background =
      this._dashboardConverterCssDeclaration_(styleText, '--ha-card-background')
      || this._dashboardConverterCssDeclaration_(styleText, '--card-background-color')
      || this._dashboardConverterCssDeclaration_(styleText, 'background')
      || this._dashboardConverterCssDeclaration_(styleText, 'background-color');
    const textColor =
      this._dashboardConverterCssDeclaration_(styleText, '--primary-text-color')
      || this._dashboardConverterCssDeclaration_(styleText, 'color');
    const borderColor =
      this._dashboardConverterCssDeclaration_(styleText, 'border-color')
      || this._dashboardConverterColorFromCssValue_(this._dashboardConverterCssDeclaration_(styleText, 'border'));
    const shadow = this._dashboardConverterCssDeclaration_(styleText, 'box-shadow');
    const out = {};
    if (background && !/^none$/i.test(background)) out.background = background;
    if (textColor) out.text_color = textColor;
    if (borderColor) out.border_color = borderColor;
    if (shadow) out.card_shadow = /^none$/i.test(shadow) ? 'off' : 'on';
    return this._normalizePerCardStyle_?.(out) || out;
  },

  _dashboardConverterEntryStyle_(item = {}) {
    const style = item?.cardStyle || item?.card_style || null;
    if (!style || typeof style !== 'object' || !Object.keys(style).length) return {};
    return { card_style: this._cloneJson_?.(style) || { ...style } };
  },

  _dashboardConverterBackgroundOptionsFromValue_(value = '', styleText = '') {
    const raw = this._dashboardConverterCleanCssValue_(value);
    if (!raw) return {};
    const url = this._dashboardConverterBackgroundUrl_(raw);
    if (url) {
      return {
        background_mode: 'image',
        background_image: {
          src: url,
          repeat: this._dashboardConverterCssDeclaration_(styleText, 'background-repeat') || 'no-repeat',
          size: this._dashboardConverterCssDeclaration_(styleText, 'background-size') || 'cover',
          position: this._dashboardConverterCssDeclaration_(styleText, 'background-position') || 'center center',
          attachment: this._dashboardConverterCssDeclaration_(styleText, 'background-attachment') || 'scroll',
          opacity: 1,
        },
      };
    }
    return { container_background: raw };
  },

  _dashboardConverterDashboardStyleOptions_(config = {}, views = []) {
    const candidates = [];
    const pushValue = (value, styleText = '') => {
      if (value == null) return;
      if (typeof value === 'object' && !Array.isArray(value)) {
        const src = value.src || value.url || value.image || value.path;
        if (src) {
          candidates.push({
            background_mode: 'image',
            background_image: {
              src: String(src).trim(),
              repeat: value.repeat || 'no-repeat',
              size: value.size || 'cover',
              position: value.position || 'center center',
              attachment: value.attachment || 'scroll',
              opacity: value.opacity ?? 1,
            },
          });
          return;
        }
      }
      const next = this._dashboardConverterBackgroundOptionsFromValue_(value, styleText);
      if (Object.keys(next).length) candidates.push(next);
    };

    const configStyleText = [
      this._dashboardConverterStyleText_(config?.card_mod?.style),
      this._dashboardConverterStyleText_(config?.style),
    ].filter(Boolean).join('\n');
    pushValue(config.background ?? config.background_image ?? config.backgroundImage, configStyleText);
    const configBgCss = this._dashboardConverterCssDeclaration_(configStyleText, 'background-image')
      || this._dashboardConverterCssDeclaration_(configStyleText, 'background')
      || this._dashboardConverterCssDeclaration_(configStyleText, 'background-color');
    pushValue(configBgCss, configStyleText);

    for (const view of views) {
      const viewStyleText = [
        this._dashboardConverterStyleText_(view?.card_mod?.style),
        this._dashboardConverterStyleText_(view?.style),
      ].filter(Boolean).join('\n');
      pushValue(view?.background ?? view?.background_image ?? view?.backgroundImage, viewStyleText);
      const viewBgCss = this._dashboardConverterCssDeclaration_(viewStyleText, 'background-image')
        || this._dashboardConverterCssDeclaration_(viewStyleText, 'background')
        || this._dashboardConverterCssDeclaration_(viewStyleText, 'background-color');
      pushValue(viewBgCss, viewStyleText);
    }

    return candidates.find((candidate) => candidate.background_mode === 'image')
      || candidates.find((candidate) => candidate.container_background)
      || {};
  },

  _dashboardConverterIsAutoEntitiesCard_(card = {}) {
    return String(card?.type || '').trim().toLowerCase() === 'custom:auto-entities';
  },

  _dashboardConverterGlobMatches_(value = '', pattern = '') {
    const raw = String(pattern ?? '').trim();
    if (!raw || raw === '*') return true;
    const text = String(value ?? '');
    if (raw.startsWith('/') && raw.endsWith('/') && raw.length > 2) {
      try { return new RegExp(raw.slice(1, -1), 'i').test(text); } catch {}
    }
    const escaped = raw.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.');
    return new RegExp(`^${escaped}$`, 'i').test(text);
  },

  _dashboardConverterValueMatches_(actual, expected) {
    if (Array.isArray(expected)) return expected.some((item) => this._dashboardConverterValueMatches_(actual, item));
    if (expected == null) return true;
    const actualText = String(actual ?? '');
    const expectedText = String(expected ?? '').trim();
    if (!expectedText || expectedText === '*') return true;
    const comparison = expectedText.match(/^(<=|>=|<|>|!=|=)\s*(-?\d+(?:\.\d+)?)$/);
    if (comparison) {
      const actualNum = Number(actualText);
      const expectedNum = Number(comparison[2]);
      if (!Number.isFinite(actualNum) || !Number.isFinite(expectedNum)) return false;
      const op = comparison[1];
      if (op === '<') return actualNum < expectedNum;
      if (op === '<=') return actualNum <= expectedNum;
      if (op === '>') return actualNum > expectedNum;
      if (op === '>=') return actualNum >= expectedNum;
      if (op === '!=') return actualNum !== expectedNum;
      return actualNum === expectedNum;
    }
    if (expectedText.includes('*') || expectedText.includes('?')) {
      return this._dashboardConverterGlobMatches_(actualText, expectedText);
    }
    return actualText.toLowerCase() === expectedText.toLowerCase();
  },

  _dashboardConverterEntityMatchesAutoFilter_(stateObj = {}, filter = {}) {
    if (!stateObj?.entity_id) return false;
    if (typeof filter === 'string') return this._dashboardConverterGlobMatches_(stateObj.entity_id, filter);
    if (!filter || typeof filter !== 'object') return false;
    let checks = 0;
    let failed = false;
    const check = (ok) => {
      checks += 1;
      if (!ok) failed = true;
    };
    const entityId = String(stateObj.entity_id || '');
    const domain = entityId.split('.')[0] || '';
    const attrs = stateObj.attributes || {};
    if (filter.entity_id !== undefined) check(this._dashboardConverterValueMatches_(entityId, filter.entity_id));
    if (filter.entity !== undefined) check(this._dashboardConverterValueMatches_(entityId, filter.entity));
    if (filter.domain !== undefined) check(this._dashboardConverterValueMatches_(domain, filter.domain));
    if (filter.state !== undefined) check(this._dashboardConverterValueMatches_(stateObj.state, filter.state));
    if (filter.name !== undefined) check(this._dashboardConverterValueMatches_(attrs.friendly_name || entityId, filter.name));
    if (filter.device_class !== undefined) check(this._dashboardConverterValueMatches_(attrs.device_class, filter.device_class));
    if (filter.unit_of_measurement !== undefined) check(this._dashboardConverterValueMatches_(attrs.unit_of_measurement, filter.unit_of_measurement));
    if (filter.attributes && typeof filter.attributes === 'object') {
      Object.entries(filter.attributes).forEach(([key, value]) => {
        check(this._dashboardConverterValueMatches_(attrs?.[key], value));
      });
    }
    return checks > 0 && !failed;
  },

  _dashboardConverterAutoEntitiesCount_(card = {}) {
    if (!this._dashboardConverterIsAutoEntitiesCard_(card)) return null;
    const states = this.hass?.states && typeof this.hass.states === 'object' ? Object.values(this.hass.states) : [];
    if (!states.length) return null;
    const filter = card.filter || {};
    const include = Array.isArray(filter.include) ? filter.include : [];
    if (!include.length) return null;
    const exclude = Array.isArray(filter.exclude) ? filter.exclude : [];
    const matches = new Map();
    include.forEach((rule) => {
      states.forEach((stateObj) => {
        if (this._dashboardConverterEntityMatchesAutoFilter_(stateObj, rule)) {
          matches.set(stateObj.entity_id, stateObj);
        }
      });
    });
    if (exclude.length && matches.size) {
      for (const [entityId, stateObj] of Array.from(matches.entries())) {
        if (exclude.some((rule) => this._dashboardConverterEntityMatchesAutoFilter_(stateObj, rule))) {
          matches.delete(entityId);
        }
      }
    }
    return matches.size;
  },

  _dashboardConverterAutoEntitiesHeightEstimate_(card = {}, width = 300) {
    if (!this._dashboardConverterIsAutoEntitiesCard_(card)) return null;
    const count = this._dashboardConverterAutoEntitiesCount_(card);
    const include = Array.isArray(card?.filter?.include) ? card.filter.include.length : 0;
    const rows = Number.isFinite(count) ? count : Math.max(8, Math.min(32, include * 6 || 12));
    const nestedType = String(card?.card?.type || card?.card_param || 'entities').toLowerCase();
    const titlePad = (card?.card?.title || card?.title) ? 72 : 44;
    if (nestedType.includes('grid')) {
      const columns = Math.max(1, Number(card?.card?.columns || (Number(width) > 720 ? 4 : 2)) || 2);
      return Math.max(180, Math.min(7200, titlePad + Math.ceil(rows / columns) * 170 + 32));
    }
    if (nestedType.includes('glance')) {
      const columns = Number(width) > 720 ? 6 : 3;
      return Math.max(160, Math.min(7200, titlePad + Math.ceil(rows / columns) * 74 + 32));
    }
    return Math.max(180, Math.min(7200, titlePad + rows * 44 + 36));
  },

  _dashboardConverterAspectRatio_(value = null) {
    const raw = String(value ?? '').trim();
    if (!raw) return null;
    const colon = raw.match(/^(\d+(?:\.\d+)?)\s*[:/]\s*(\d+(?:\.\d+)?)$/);
    if (colon) {
      const w = Number(colon[1]);
      const h = Number(colon[2]);
      return w > 0 && h > 0 ? w / h : null;
    }
    const numeric = Number(raw);
    return Number.isFinite(numeric) && numeric > 0 ? numeric : null;
  },

  _dashboardConverterCardSizeHints_(card = {}) {
    const styleText = [
      this._dashboardConverterStyleText_(card?.card_mod?.style),
      this._dashboardConverterStyleText_(card?.style),
      this._dashboardConverterStyleText_(card?.styles),
    ].filter(Boolean).join('\n');
    const readCssPx = (prop) => {
      const re = new RegExp(`(?:^|[;\\n{}\\s])${prop}\\s*:\\s*([^;\\n}]+)`, 'i');
      const match = styleText.match(re);
      return match ? this._dashboardConverterPixelValue_(match[1], null) : null;
    };
    const height =
      this._dashboardConverterPixelValue_(card?.height, null)
      ?? this._dashboardConverterPixelValue_(card?.min_height ?? card?.minHeight, null)
      ?? this._dashboardConverterPixelValue_(card?.grid_options?.height, null)
      ?? readCssPx('height')
      ?? readCssPx('min-height')
      ?? readCssPx('max-height');
    const width =
      this._dashboardConverterPixelValue_(card?.width, null)
      ?? this._dashboardConverterPixelValue_(card?.min_width ?? card?.minWidth, null)
      ?? this._dashboardConverterPixelValue_(card?.max_width ?? card?.maxWidth, null)
      ?? this._dashboardConverterPixelValue_(card?.grid_options?.width, null)
      ?? readCssPx('width')
      ?? readCssPx('min-width')
      ?? readCssPx('max-width');
    const aspectRatio = this._dashboardConverterAspectRatio_(
      card?.aspect_ratio
      ?? card?.image_aspect_ratio
      ?? card?.grid_options?.aspect_ratio
      ?? card?.card_mod?.aspect_ratio
    );
    const gridColumns = Number(card?.grid_options?.columns);
    const gridRows = Number(card?.grid_options?.rows);
    return {
      width: Number.isFinite(width) && width > 0 ? width : null,
      height: Number.isFinite(height) && height > 0 ? height : null,
      explicitWidth: Number.isFinite(width) && width > 0,
      explicitHeight: Number.isFinite(height) && height > 0,
      aspectRatio,
      gridColumns: Number.isFinite(gridColumns) && gridColumns > 0 ? gridColumns : null,
      gridRows: Number.isFinite(gridRows) && gridRows > 0 ? gridRows : null,
    };
  },

  _dashboardConverterIsDdcCard_(card = {}) {
    return String(card?.type || '').trim().toLowerCase() === 'custom:drag-and-drop-card';
  },

  _dashboardConverterIsStructuralCard_(card = {}) {
    const type = String(card?.type || '').trim().toLowerCase();
    return [
      'conditional',
      'custom:state-switch',
      'state-switch',
      'hui-element',
    ].includes(type);
  },

  _dashboardConverterAddWarning_(diagnostics = null, code = 'warning', message = '', context = {}) {
    if (!diagnostics || !Array.isArray(diagnostics.warnings) || !message) return;
    const warning = {
      code,
      message: String(message),
      ...(context?.view ? { view: String(context.view) } : {}),
      ...(context?.path ? { path: String(context.path) } : {}),
    };
    const signature = `${warning.code}|${warning.view || ''}|${warning.path || ''}|${warning.message}`;
    if (diagnostics.__warningSignatures?.has(signature)) return;
    diagnostics.__warningSignatures?.add(signature);
    diagnostics.warnings.push(warning);
  },

  _sanitizeDashboardConverterNestedCards_(value, diagnostics = null, context = {}) {
    if (Array.isArray(value)) {
      return value
        .map((child, index) => {
          if (!child || typeof child !== 'object' || !child.type) return this._cloneJson_?.(child) ?? child;
          return this._sanitizeDashboardConverterCard_(child, diagnostics, {
            ...context,
            path: `${context.path || 'card'}[${index}]`,
          });
        })
        .filter((child) => child != null);
    }
    if (!value || typeof value !== 'object') return value;
    if (value.type) return this._sanitizeDashboardConverterCard_(value, diagnostics, context);
    const out = {};
    Object.entries(value).forEach(([key, child]) => {
      if (child && typeof child === 'object' && child.type) {
        const sanitized = this._sanitizeDashboardConverterCard_(child, diagnostics, {
          ...context,
          path: `${context.path || 'card'}.${key}`,
        });
        if (sanitized) out[key] = sanitized;
      } else {
        out[key] = this._cloneJson_?.(child) ?? child;
      }
    });
    return out;
  },

  _sanitizeDashboardConverterCard_(card = {}, diagnostics = null, context = {}) {
    if (!card || typeof card !== 'object' || Array.isArray(card)) {
      if (diagnostics) diagnostics.invalid_cards += 1;
      this._dashboardConverterAddWarning_(diagnostics, 'invalid-card', 'Skipped a malformed card entry.', context);
      return null;
    }
    const type = String(card.type || '').trim();
    if (!type) {
      if (diagnostics) diagnostics.invalid_cards += 1;
      this._dashboardConverterAddWarning_(diagnostics, 'missing-card-type', 'Skipped a card without a type.', context);
      return null;
    }
    if (this._dashboardConverterIsDdcCard_(card)) {
      if (diagnostics) diagnostics.skipped_drag_drop_cards += 1;
      this._dashboardConverterAddWarning_(
        diagnostics,
        'recursive-ddc-card',
        'Skipped an existing Drag & Drop Card to prevent a recursive dashboard import.',
        context
      );
      return null;
    }

    const cloned = this._cloneJson_?.(card) || JSON.parse(JSON.stringify(card));
    const nestedKeys = ['card', 'cards', 'default', 'states'];
    nestedKeys.forEach((key) => {
      if (!(key in cloned)) return;
      const sanitized = this._sanitizeDashboardConverterNestedCards_(cloned[key], diagnostics, {
        ...context,
        path: `${context.path || type}.${key}`,
      });
      if (sanitized == null || (Array.isArray(sanitized) && !sanitized.length)) delete cloned[key];
      else if (sanitized && typeof sanitized === 'object' && !Array.isArray(sanitized) && !Object.keys(sanitized).length) delete cloned[key];
      else cloned[key] = sanitized;
    });

    const normalizedType = type.toLowerCase();
    if (normalizedType === 'conditional' && !cloned.card) {
      this._dashboardConverterAddWarning_(diagnostics, 'empty-conditional', 'Skipped a conditional card whose nested card could not be imported.', context);
      return null;
    }
    if ((normalizedType === 'custom:state-switch' || normalizedType === 'state-switch') && !cloned.states && !cloned.default) {
      this._dashboardConverterAddWarning_(diagnostics, 'empty-state-switch', 'Skipped a state-switch card with no importable states.', context);
      return null;
    }
    return cloned;
  },

  _dashboardConverterStructuralChildSources_(card = {}) {
    const sources = [];
    const collect = (value) => {
      if (!value) return;
      if (Array.isArray(value)) {
        sources.push(value);
        return;
      }
      if (typeof value !== 'object') return;
      if (value.type) {
        sources.push([value]);
        return;
      }
      Object.values(value).forEach(collect);
    };
    collect(card.card);
    collect(card.cards);
    collect(card.states);
    collect(card.state);
    collect(card.default);
    return sources;
  },

  _collectDashboardConverterCardsFromList_(sourceCards = [], options = {}) {
    const out = [];
    const source = Array.isArray(sourceCards) ? sourceCards : [];
    source.forEach((card, index) => {
      const sanitized = this._sanitizeDashboardConverterCard_(card, options.diagnostics || null, {
        view: options.viewTitle || '',
        path: `${options.path || 'cards'}[${index}]`,
      });
      if (!sanitized) return;
      const type = String(sanitized.type || '').trim().toLowerCase();
      if (options.preserveLayoutBreaks || type !== 'custom:layout-break') out.push(sanitized);
    });
    return out;
  },

  _collectDashboardConverterCardsForView_(view = {}) {
    const cards = [];
    const badges = Array.isArray(view.badges)
      ? view.badges.map((badge) => this._normalizeDashboardConverterBadgeCard_(badge)).filter(Boolean)
      : [];
    if (badges.length) {
      cards.push({
        type: 'glance',
        title: 'Badges',
        entities: badges
          .map((badge) => badge.entity ? { entity: badge.entity, name: badge.name, icon: badge.icon } : null)
          .filter(Boolean),
      });
    }

    if (Array.isArray(view.cards)) cards.push(...this._collectDashboardConverterCardsFromList_(view.cards, { preserveLayoutBreaks: true }));

    if (Array.isArray(view.sections)) {
      view.sections.forEach((section) => {
        const sectionTitle = String(section?.title || '').trim();
        if (sectionTitle) {
          cards.push({
            type: 'markdown',
            content: `### ${sectionTitle}`,
          });
        }
        if (Array.isArray(section?.cards)) cards.push(...this._collectDashboardConverterCardsFromList_(section.cards, { preserveLayoutBreaks: true }));
      });
    }

    return cards.filter((card) => card && typeof card === 'object');
  },

  _countDashboardConverterSkippedDdcCards_(view = {}) {
    let count = 0;
    const visit = (card) => {
      if (!card || typeof card !== 'object') return;
      if (this._dashboardConverterIsDdcCard_(card)) {
        count += 1;
        return;
      }
      this._dashboardConverterStructuralChildSources_(card).forEach((source) => source.forEach(visit));
    };
    if (Array.isArray(view.cards)) view.cards.forEach(visit);
    if (Array.isArray(view.sections)) {
      view.sections.forEach((section) => {
        if (Array.isArray(section?.cards)) section.cards.forEach(visit);
      });
    }
    return count;
  },

  _buildDashboardConverterImportPlan_(sourceConfig = {}) {
    const config = this._normalizeDashboardConverterConfig_(sourceConfig);
    const sourceViews = Array.isArray(config.views) ? config.views : [];
    if (!sourceViews.length) throw new Error('This dashboard has no views to convert.');

    const diagnostics = {
      warnings: [],
      invalid_cards: 0,
      skipped_drag_drop_cards: 0,
      empty_views: 0,
      custom_card_types: new Set(),
      __warningSignatures: new Set(),
    };
    const usedTabIds = new Set();
    const tabs = [];
    const views = [];
    let cardCount = 0;

    sourceViews.forEach((view, viewIndex) => {
      const title = String(view?.title || view?.path || `View ${viewIndex + 1}`).trim() || `View ${viewIndex + 1}`;
      const tabId = this._normalizeDashboardConverterTabId_(view, viewIndex, usedTabIds);
      const layoutMode = this._dashboardConverterViewLayoutMode_(view);
      const viewLayoutOptions = this._dashboardConverterLayoutOptions_(view);
      const blocks = [];
      let blockIndex = 0;

      const addBlock = (cards = [], mode = layoutMode, layoutOptions = {}, source = 'view') => {
        const normalizedCards = (Array.isArray(cards) ? cards : []).filter((card) => card && typeof card === 'object');
        if (!normalizedCards.length) return;
        normalizedCards.forEach((card) => {
          const type = String(card.type || '').trim().toLowerCase();
          if (type.startsWith('custom:')) diagnostics.custom_card_types.add(type);
          if (type !== 'custom:layout-break') cardCount += 1;
        });
        blocks.push({
          id: `${tabId}:${source}:${blockIndex++}`,
          mode: mode || 'grid',
          layoutOptions: layoutOptions || {},
          cards: normalizedCards,
          source,
        });
      };

      const badges = Array.isArray(view?.badges)
        ? view.badges.map((badge) => this._normalizeDashboardConverterBadgeCard_(badge)).filter(Boolean)
        : [];
      if (badges.length) {
        addBlock([{
          type: 'glance',
          title: 'Badges',
          entities: badges
            .map((badge) => badge.entity ? { entity: badge.entity, name: badge.name, icon: badge.icon } : null)
            .filter(Boolean),
        }], 'grid', {}, 'badges');
      }

      const addTopLevelCards = (sourceCards = [], source = 'view-cards', path = 'cards') => {
        const cards = this._collectDashboardConverterCardsFromList_(sourceCards, {
          preserveLayoutBreaks: true,
          diagnostics,
          viewTitle: title,
          path,
        });
        let nativeCards = [];
        const flushNative = () => {
          if (!nativeCards.length) return;
          addBlock(nativeCards, layoutMode, viewLayoutOptions, source);
          nativeCards = [];
        };
        cards.forEach((card) => {
          const layoutCardMode = this._dashboardConverterLayoutCardMode_(card);
          if (layoutCardMode && Array.isArray(card.cards)) {
            flushNative();
            addBlock(card.cards, layoutCardMode, this._dashboardConverterLayoutOptions_(card), 'layout-card');
            return;
          }
          nativeCards.push(card);
        });
        flushNative();
      };

      if (Array.isArray(view?.cards)) addTopLevelCards(view.cards, 'view-cards', `views[${viewIndex}].cards`);

      if (Array.isArray(view?.sections)) {
        view.sections.forEach((section, sectionIndex) => {
          const sectionCards = [];
          const sectionTitle = String(section?.title || '').trim();
          if (sectionTitle) {
            sectionCards.push({
              type: 'markdown',
              content: `## ${sectionTitle}`,
              grid_options: { columns: 12, rows: 1 },
            });
          }
          sectionCards.push(...this._collectDashboardConverterCardsFromList_(section?.cards, {
            preserveLayoutBreaks: true,
            diagnostics,
            viewTitle: title,
            path: `views[${viewIndex}].sections[${sectionIndex}].cards`,
          }));
          addBlock(sectionCards, 'grid', this._dashboardConverterLayoutOptions_(section), `section-${sectionIndex + 1}`);
        });
      }

      const visibleCards = blocks.reduce((count, block) => (
        count + block.cards.filter((card) => String(card?.type || '').toLowerCase() !== 'custom:layout-break').length
      ), 0);
      if (!visibleCards) {
        diagnostics.empty_views += 1;
        this._dashboardConverterAddWarning_(diagnostics, 'empty-view', `“${title}” contains no importable cards.`, { view: title });
      }
      if (view?.subview === true) {
        this._dashboardConverterAddWarning_(diagnostics, 'subview-as-tab', `“${title}” is a subview and will be imported as a normal tab.`, { view: title });
      }
      if (layoutMode === 'panel' && visibleCards > 1) {
        this._dashboardConverterAddWarning_(diagnostics, 'multi-card-panel', `“${title}” is a panel view with multiple cards; they will be stacked full-width.`, { view: title });
      }

      tabs.push({
        id: tabId,
        label: title,
        ...(view?.icon ? { icon: view.icon } : {}),
      });
      views.push({
        index: viewIndex,
        tabId,
        title,
        layoutMode,
        blocks,
        cardCount: visibleCards,
      });
    });

    if (!cardCount) throw new Error('No Lovelace cards were found to convert.');
    if (cardCount > DASHBOARD_CONVERTER_MAX_CARDS) {
      throw new Error(`This dashboard contains ${cardCount} cards. The safe import limit is ${DASHBOARD_CONVERTER_MAX_CARDS}.`);
    }

    return {
      config,
      tabs,
      views,
      cardCount,
      diagnostics: {
        warnings: diagnostics.warnings,
        invalid_cards: diagnostics.invalid_cards,
        skipped_drag_drop_cards: diagnostics.skipped_drag_drop_cards,
        empty_views: diagnostics.empty_views,
        custom_card_types: Array.from(diagnostics.custom_card_types).sort(),
      },
    };
  },

  _estimateDashboardConverterCardSize_(card = {}, context = {}) {
    const type = String(card?.type || '').toLowerCase();
    const entitiesCount = Array.isArray(card.entities) ? card.entities.length : 0;
    const nestedCount = Array.isArray(card.cards) ? card.cards.length : 0;
    const panel = !!context.panel;
    const hints = this._dashboardConverterCardSizeHints_(card);
    const autoEntitiesHeight = this._dashboardConverterAutoEntitiesHeightEstimate_(card, hints.width || context.width || 340);
    const withHints = (estimate = {}) => {
      const next = { ...estimate };
      if (hints.gridColumns) next.span = Math.max(Number(next.span || 1), Math.ceil(hints.gridColumns / 4));
      if (hints.gridRows) next.height = Math.max(Number(next.height || 0), hints.gridRows * 56);
      if (hints.width) {
        if (hints.width >= 980) next.full = true;
        next.span = Math.max(Number(next.span || 1), hints.width >= 620 ? 2 : 1);
        next.width = hints.width;
      }
      if (hints.height) next.height = hints.height;
      if (hints.aspectRatio) next.aspectRatio = hints.aspectRatio;
      return next;
    };

    if (panel) return withHints({ span: 4, height: 640, full: true });
    if (autoEntitiesHeight) return withHints({ span: 1, height: autoEntitiesHeight });
    if (type.includes('picture') || type.includes('map') || type.includes('iframe') || type.includes('webpage')) {
      return withHints({ span: 2, height: 360 });
    }
    if (type.includes('grid')) {
      const columns = Math.max(1, Number(card.columns || 2) || 2);
      const rows = Math.max(1, Math.ceil(nestedCount / columns));
      return withHints({ span: Math.min(2, columns), height: Math.max(220, rows * 170 + 56) });
    }
    if (type.includes('horizontal-stack')) return withHints({ span: 2, height: Math.max(220, 170 + Math.ceil(nestedCount / 3) * 70) });
    if (type.includes('vertical-stack')) return withHints({ span: 1, height: Math.max(240, nestedCount * 145) });
    if (type.includes('entities')) return withHints({ span: 1, height: Math.max(220, Math.min(620, 96 + entitiesCount * 42)) });
    if (type.includes('glance')) return withHints({ span: 1, height: Math.max(170, Math.min(360, 120 + Math.ceil(entitiesCount / 3) * 64)) });
    if (type.includes('history') || type.includes('statistics') || type.includes('logbook')) return withHints({ span: 2, height: 320 });
    if (type.includes('calendar') || type.includes('todo')) return withHints({ span: 2, height: 360 });
    if (type.includes('thermostat') || type.includes('humidifier') || type.includes('media-control') || type.includes('weather')) return withHints({ span: 1, height: 300 });
    if (type.includes('markdown')) return withHints({ span: 1, height: Math.max(140, Math.min(340, 120 + String(card.content || '').length / 6)) });
    if (type.includes('button') || type.includes('tile') || type.includes('entity')) return withHints({ span: 1, height: 170 });
    return withHints({ span: 1, height: 240 });
  },

  _dashboardConverterCardHeightForWidth_(card = {}, width = 300, estimate = null, context = {}, depth = 0) {
    const type = String(card?.type || '').toLowerCase();
    const safeWidth = Math.max(120, Number(width || 300) || 300);
    const hints = this._dashboardConverterCardSizeHints_(card);
    if (hints.explicitHeight) return Math.max(80, Math.round(hints.height));

    const currentEstimate = estimate || this._estimateDashboardConverterCardSize_(card, context);
    const autoEntitiesHeight = this._dashboardConverterAutoEntitiesHeightEstimate_(card, safeWidth);
    if (autoEntitiesHeight) return Math.max(100, Math.round(autoEntitiesHeight));
    if (currentEstimate?.aspectRatio) {
      return Math.max(80, Math.round(safeWidth / Math.max(0.05, currentEstimate.aspectRatio)));
    }

    const children = depth < 4 && Array.isArray(card?.cards) ? card.cards.filter((child) => child && typeof child === 'object') : [];
    if (children.length) {
      const gap = 12;
      if (type.includes('vertical-stack')) {
        const childTotal = children.reduce((sum, child) => (
          sum + this._dashboardConverterCardHeightForWidth_(child, safeWidth, null, { panel: false }, depth + 1)
        ), 0);
        return Math.max(140, Math.round(childTotal + gap * Math.max(0, children.length - 1)));
      }
      if (type.includes('horizontal-stack')) {
        const childWidth = Math.max(120, (safeWidth - gap * Math.max(0, children.length - 1)) / Math.max(1, children.length));
        const childMax = children.reduce((max, child) => Math.max(
          max,
          this._dashboardConverterCardHeightForWidth_(child, childWidth, null, { panel: false }, depth + 1)
        ), 0);
        return Math.max(140, Math.round(childMax));
      }
      if (type.includes('grid')) {
        const columns = Math.max(1, Number(card.columns || 2) || 2);
        const childWidth = Math.max(120, (safeWidth - gap * Math.max(0, columns - 1)) / columns);
        const rows = [];
        children.forEach((child, index) => {
          const row = Math.floor(index / columns);
          rows[row] = Math.max(
            rows[row] || 0,
            this._dashboardConverterCardHeightForWidth_(child, childWidth, null, { panel: false }, depth + 1)
          );
        });
        return Math.max(160, Math.round(rows.reduce((sum, height) => sum + height, 0) + gap * Math.max(0, rows.length - 1) + 40));
      }
    }

    let height = Number(currentEstimate?.height || 240) || 240;
    if (safeWidth >= 1200) {
      if (type.includes('picture') || type.includes('map') || type.includes('iframe') || type.includes('webpage')) {
        height = Math.max(height, Math.round(safeWidth * 0.38));
      } else if (type.includes('history') || type.includes('statistics') || type.includes('logbook')) {
        height = Math.max(height, 360);
      } else if (type.includes('calendar') || type.includes('todo')) {
        height = Math.max(height, 420);
      } else if (type.startsWith('custom:')) {
        height = Math.max(height, 320);
      } else if (type.includes('button') || type.includes('tile') || type.includes('entity')) {
        height = Math.max(height, 220);
      }
    }
    return Math.max(100, Math.round(height));
  },

  _dashboardConverterViewportWidth_(variantKey = 'desktop_landscape') {
    const primaryKey = this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape';
    const readResponsiveWidth = () => {
      try {
        const { profile, orientation } = this._splitResponsiveLayoutKey_(variantKey);
        const viewport = this._getResponsiveViewportProfile_?.(profile, orientation);
        const width = Number(viewport?.width || 0);
        if (Number.isFinite(width) && width > 0) return width;
      } catch {}
      return 0;
    };

    // A fixed desktop canvas describes the primary import surface, not every
    // responsive variant. Tablet/mobile layouts must use their own viewport
    // widths or all generated variants become identical to desktop.
    if (variantKey !== primaryKey) {
      const responsiveWidth = readResponsiveWidth();
      if (responsiveWidth > 0) return responsiveWidth;
    }
    try {
      const mode = this._normalizeContainerSizeMode_?.(this.containerSizeMode || this._config?.container_size_mode);
      if (mode === 'preset' || mode === 'fixed' || mode === 'fixed_custom') {
        const fixed = this._resolveFixedSize?.();
        const fixedWidth = Number(fixed?.w || fixed?.width || 0);
        if (Number.isFinite(fixedWidth) && fixedWidth > 0) return fixedWidth;
        const size = this._getContainerSize?.() || {};
        const width = Number(size.w || size.width || 0);
        if (Number.isFinite(width) && width > 0) return Math.max(500, width);
      }
    } catch {}
    const responsiveWidth = readResponsiveWidth();
    if (responsiveWidth > 0) return responsiveWidth;
    try {
      const size = this._getContainerSize?.() || {};
      const width = Number(size.w || size.width || 0);
      if (Number.isFinite(width) && width > 0) return Math.max(500, width);
    } catch {}
    return 1430;
  },

  _dashboardConverterFixedSizeForOptions_(options = {}) {
    const mode = this._normalizeContainerSizeMode_?.(options.container_size_mode || this.containerSizeMode || this._config?.container_size_mode);
    if (mode === 'fixed_custom') {
      return {
        w: Math.max(100, Number(options.container_fixed_width || this.containerFixedWidth || this._config?.container_fixed_width || 0) || 100),
        h: Math.max(100, Number(options.container_fixed_height || this.containerFixedHeight || this._config?.container_fixed_height || 0) || 100),
      };
    }
    if (mode === 'preset') {
      const presets = this.constructor?._sizePresets?.() || [];
      const preset = presets.find((item) => item.key === (options.container_preset || this.containerPreset || this._config?.container_preset))
        || presets.find((item) => item.key === 'fhd')
        || { w: 1920, h: 1080 };
      let w = Number(preset.w) || 1920;
      let h = Number(preset.h) || 1080;
      const orient = String(options.container_preset_orientation || this.containerPresetOrient || this._config?.container_preset_orientation || 'auto').toLowerCase();
      if (orient === 'portrait' && w > h) [w, h] = [h, w];
      if (orient === 'landscape' && h > w) [w, h] = [h, w];
      return { w, h };
    }
    return null;
  },

  _dashboardConverterLayoutBounds_(responsiveLayouts = {}, primaryCards = []) {
    let maxRight = 0;
    let maxBottom = 0;
    let count = 0;
    const visitEntry = (entry = {}) => {
      if (!entry || typeof entry !== 'object') return;
      const x = Number(entry?.position?.x ?? entry.x ?? 0) || 0;
      const y = Number(entry?.position?.y ?? entry.y ?? 0) || 0;
      const width = Math.max(0, Number(entry?.size?.width ?? entry.width ?? 0) || 0);
      const height = Math.max(0, Number(entry?.size?.height ?? entry.height ?? 0) || 0);
      if (!width && !height) return;
      maxRight = Math.max(maxRight, x + width);
      maxBottom = Math.max(maxBottom, y + height);
      count += 1;
    };
    const visitLayout = (layout = null) => {
      if (Array.isArray(layout)) {
        layout.forEach(visitEntry);
        return;
      }
      if (!layout || typeof layout !== 'object') return;
      if (Array.isArray(layout.cards)) layout.cards.forEach(visitEntry);
      else Object.values(layout).forEach(visitLayout);
    };
    visitLayout(primaryCards);
    visitLayout(responsiveLayouts);
    return {
      width: Math.ceil(maxRight),
      height: Math.ceil(maxBottom),
      cards: count,
    };
  },

  _dashboardConverterInflateCanvasOptions_(options = {}, responsiveLayouts = {}, primaryCards = []) {
    const mode = this._normalizeContainerSizeMode_?.(options.container_size_mode || this.containerSizeMode || this._config?.container_size_mode);
    const bounds = this._dashboardConverterLayoutBounds_(responsiveLayouts, primaryCards);
    const fixed = this._dashboardConverterFixedSizeForOptions_(options);
    if (!bounds.cards || mode === 'auto' || !fixed) return { options, bounds };
    const grid = Math.max(1, Number(this.gridSize || this._config?.grid || 10) || 10);
    const pad = Math.max(64, grid * 4);
    const requiredWidth = Math.ceil(Math.max(fixed.w, bounds.width + pad) / grid) * grid;
    const requiredHeight = Math.ceil(Math.max(fixed.h, bounds.height + pad) / grid) * grid;
    if (requiredWidth <= fixed.w && requiredHeight <= fixed.h) return { options, bounds };
    return {
      bounds,
      options: {
        ...options,
        container_size_mode: 'fixed_custom',
        container_fixed_width: requiredWidth,
        container_fixed_height: requiredHeight,
      },
    };
  },

  _dashboardConverterColumnLayoutMetrics_(layoutOptions = {}, canvasWidth = 1430, fallbackMaxCols = 4) {
    const canvasInset = canvasWidth <= 720 ? 16 : 24;
    const layoutMargin = this._dashboardConverterCssBox_(layoutOptions.margin, '0px 4px 0px 4px');
    const layoutPadding = this._dashboardConverterCssBox_(layoutOptions.padding, '4px 0px 4px 0px');
    const cardMargin = this._dashboardConverterCssBox_(layoutOptions.card_margin ?? layoutOptions.cardMargin ?? layoutOptions['card-margin'], '4px 4px 8px 4px');
    const gap = Math.max(0, cardMargin.left + cardMargin.right);
    const rowGap = Math.max(0, cardMargin.top + cardMargin.bottom);
    const edgeLeft = canvasInset + layoutMargin.left + layoutPadding.left;
    const edgeRight = canvasInset + layoutMargin.right + layoutPadding.right;
    const edgeTop = canvasInset + layoutMargin.top + layoutPadding.top + cardMargin.top;
    const edgeBottom = canvasInset + layoutMargin.bottom + layoutPadding.bottom + cardMargin.bottom;
    const available = Math.max(180, canvasWidth - edgeLeft - edgeRight);
    const rawMaxCols = this._dashboardConverterPixelValue_(
      layoutOptions.max_cols ?? layoutOptions.maxCols ?? layoutOptions['max-cols'] ?? layoutOptions.columns,
      fallbackMaxCols
    );
    const maxCols = Math.max(1, Math.floor(Number.isFinite(rawMaxCols) && rawMaxCols > 0 ? rawMaxCols : fallbackMaxCols));
    const maxWidthValue = layoutOptions.max_width ?? layoutOptions.maxWidth ?? layoutOptions['max-width'];
    const explicitWidthValue = layoutOptions.width
      ?? layoutOptions.column_width
      ?? layoutOptions.columnWidth
      ?? layoutOptions['column-width']
      ?? (maxCols === 1 ? maxWidthValue : undefined);
    const explicitWidth = this._dashboardConverterPixelValue_(explicitWidthValue, null, available);
    const hasExplicitWidth = Number.isFinite(explicitWidth) && explicitWidth > 0;
    const columnWidthsValue = layoutOptions.column_widths ?? layoutOptions.columnWidths ?? layoutOptions['column-widths'];
    const hasExplicitColumnWidths = columnWidthsValue !== undefined && columnWidthsValue !== null;
    const explicitMaxWidth = this._dashboardConverterPixelValue_(maxWidthValue, null, available);
    const hasExplicitMaxWidth = maxCols === 1 && Number.isFinite(explicitMaxWidth) && explicitMaxWidth > 0;
    const desiredWidth = Math.max(
      120,
      this._dashboardConverterPixelValue_(explicitWidthValue, 300, available)
    );
    const columnsByWidth = Math.max(1, Math.floor((available + gap) / (desiredWidth + gap)));
    const columns = Math.max(1, Math.min(maxCols, columnsByWidth));
    const preserveSingleColumnWidth = maxCols === 1 && (hasExplicitWidth || hasExplicitColumnWidths || hasExplicitMaxWidth);
    const maxColumnWidth =
      this._dashboardConverterPixelValue_(maxWidthValue, null, available) > 0
        ? this._dashboardConverterPixelValue_(maxWidthValue, null, available)
        : Math.max(500, desiredWidth * 1.5);
    const columnWidth = Math.max(
      120,
      Math.round(preserveSingleColumnWidth
        ? desiredWidth
        : Math.min(desiredWidth, maxColumnWidth, (available - gap * (columns - 1)) / columns))
    );
    const rawColumnWidths = this._dashboardConverterColumnWidthList_(
      columnWidthsValue,
      columns,
      columnWidth,
      available
    );
    const totalRawWidth = rawColumnWidths.reduce((sum, width) => sum + width, 0) + gap * (columns - 1);
    const scale = !preserveSingleColumnWidth && totalRawWidth > available
      ? Math.max(0.1, (available - gap * (columns - 1)) / Math.max(1, totalRawWidth - gap * (columns - 1)))
      : 1;
    const columnWidths = rawColumnWidths.map((width) => Math.max(120, Math.round(width * scale)));
    const usedWidth = columnWidths.reduce((sum, width) => sum + width, 0) + gap * (columns - 1);
    const startX = edgeLeft + Math.max(0, Math.round((available - usedWidth) / 2));
    const columnOffsets = columnWidths.reduce((offsets, width, index) => {
      offsets.push(index === 0 ? 0 : offsets[index - 1] + columnWidths[index - 1] + gap);
      return offsets;
    }, []);
    return {
      margin: canvasInset,
      gap,
      rowGap,
      columns,
      columnWidth,
      columnWidths,
      columnOffsets,
      startX,
      edgeTop,
      edgeBottom,
      sourceWidth: desiredWidth,
      preserveSingleColumnWidth,
    };
  },

  _packDashboardConverterGridBlock_(group = [], metrics = {}, offsetY = 0) {
    const { columns, columnWidth, margin, gap } = metrics;
    const heights = Array(columns).fill(offsetY + margin);
    const visibleGroup = group.filter((item) => String(item.card?.type || '').toLowerCase() !== 'custom:layout-break');
    const entries = visibleGroup.map((item) => {
      const estimate = this._estimateDashboardConverterCardSize_(item.card, { panel: item.panel });
      const sizeHints = this._dashboardConverterCardSizeHints_(item.card);
      const widthSpan = estimate.width
        ? Math.ceil((estimate.width + gap) / Math.max(1, columnWidth + gap))
        : 1;
      const sectionGridSpan = sizeHints.gridColumns
        ? Math.max(1, Math.ceil((sizeHints.gridColumns / 12) * columns))
        : 0;
      const requestedSpan = Math.max(Number(estimate.span || 0), widthSpan, sectionGridSpan, 1);
      const span = estimate.full ? columns : Math.max(1, Math.min(columns, requestedSpan));
      let bestCol = 0;
      let bestY = Infinity;
      for (let col = 0; col <= columns - span; col += 1) {
        const y = Math.max(...heights.slice(col, col + span));
        if (y < bestY) {
          bestY = y;
          bestCol = col;
        }
      }
      const slotWidth = Math.max(180, Math.round(columnWidth * span + gap * (span - 1)));
      const width = Math.max(180, Math.round(Math.min(estimate.width || slotWidth, slotWidth)));
      const height = this._dashboardConverterCardHeightForWidth_(item.card, width, estimate, { panel: item.panel });
      const x = margin + bestCol * (columnWidth + gap);
      const y = Number.isFinite(bestY) ? bestY : offsetY + margin;
      for (let col = bestCol; col < bestCol + span; col += 1) heights[col] = y + height + gap;
      return {
        id: item.id,
        card: this._cloneJson_?.(item.card) || JSON.parse(JSON.stringify(item.card)),
        position: { x, y },
        size: { width, height },
        z: item.z,
        tabId: item.tabId,
        ...this._dashboardConverterEntryStyle_(item),
      };
    });
    const bottom = entries.reduce((max, entry) => Math.max(max, entry.position.y + entry.size.height), offsetY);
    return { entries, bottom };
  },

  _packDashboardConverterPanelBlock_(group = [], metrics = {}, offsetY = 0) {
    const { canvasWidth, margin, gap } = metrics;
    const width = Math.max(180, Math.round(canvasWidth - margin * 2));
    let y = offsetY + margin;
    const visibleGroup = group.filter((item) => String(item.card?.type || '').toLowerCase() !== 'custom:layout-break');
    const entries = visibleGroup.map((item) => {
      const estimate = this._estimateDashboardConverterCardSize_(item.card, { panel: false });
      const minPanelHeight = visibleGroup.length === 1 ? Math.max(360, Math.round(canvasWidth * 0.42)) : 180;
      const height = Math.max(
        minPanelHeight,
        this._dashboardConverterCardHeightForWidth_(item.card, width, estimate, { panel: false })
      );
      const entry = {
        id: item.id,
        card: this._cloneJson_?.(item.card) || JSON.parse(JSON.stringify(item.card)),
        position: { x: margin, y },
        size: { width, height },
        z: item.z,
        tabId: item.tabId,
        ...this._dashboardConverterEntryStyle_(item),
      };
      y += height + gap;
      return entry;
    });
    const bottom = entries.reduce((max, entry) => Math.max(max, entry.position.y + entry.size.height), offsetY);
    return { entries, bottom };
  },

  _packDashboardConverterColumnBlock_(group = [], metrics = {}, offsetY = 0, mode = 'horizontal') {
    const cards = group.filter((item) => String(item.card?.type || '').toLowerCase() !== 'custom:layout-break');
    if (!cards.length) return { entries: [], bottom: offsetY };
    const { canvasWidth } = metrics;
    const layoutOptions = cards[0]?.layoutOptions || {};
    const base = this._dashboardConverterColumnLayoutMetrics_(layoutOptions, canvasWidth, 4);
    const columns = Math.max(1, Math.min(base.columns, cards.length));
    const usedWidth = (base.columnWidths || []).slice(0, columns).reduce((sum, width) => sum + width, 0) + base.gap * (columns - 1);
    const available = Math.max(180, canvasWidth - base.margin * 2);
    const startX = base.startX + Math.max(0, Math.round((((base.columnWidths || []).reduce((sum, width) => sum + width, 0) + base.gap * (base.columns - 1)) - usedWidth) / 2));
    const heights = Array(columns).fill(offsetY + base.edgeTop);
    const rtl = layoutOptions.rtl === true || String(layoutOptions.rtl || '').toLowerCase() === 'true';
    let nextColumn = 0;
    const entries = [];

    group.forEach((item) => {
      if (String(item.card?.type || '').toLowerCase() === 'custom:layout-break') {
        nextColumn = mode === 'vertical' ? Math.min(columns - 1, nextColumn + 1) : 0;
        return;
      }
      const forcedColumn = Math.floor(Number(item.card?.view_layout?.column ?? item.card?.viewLayout?.column) || 0);
      const column = forcedColumn >= 1 && forcedColumn <= columns ? forcedColumn - 1 : nextColumn;
      const visualColumn = rtl ? columns - 1 - column : column;
      const estimate = this._estimateDashboardConverterCardSize_(item.card, { panel: false });
      const x = startX + (base.columnOffsets?.[visualColumn] || 0);
      const y = heights[column];
      const width = base.columnWidths?.[visualColumn] || base.columnWidth;
      const height = this._dashboardConverterCardHeightForWidth_(item.card, width, estimate, { panel: false });
      entries.push({
        id: item.id,
        card: this._cloneJson_?.(item.card) || JSON.parse(JSON.stringify(item.card)),
        position: { x, y },
        size: { width, height },
        z: item.z,
        tabId: item.tabId,
        ...this._dashboardConverterEntryStyle_(item),
      });
      heights[column] = y + height + base.rowGap;
      if (mode === 'vertical') {
        nextColumn = column;
      } else if (mode === 'masonry') {
        nextColumn = heights.indexOf(Math.min(...heights));
      } else {
        nextColumn = (column + 1) % columns;
      }
    });

    const bottom = entries.reduce((max, entry) => Math.max(max, entry.position.y + entry.size.height), offsetY) + base.edgeBottom;
    return { entries, bottom };
  },

  _packDashboardConverterHorizontalBlock_(group = [], metrics = {}, offsetY = 0) {
    return this._packDashboardConverterColumnBlock_(group, metrics, offsetY, 'horizontal');
  },

  _packDashboardConverterItems_(items = [], variantKey = 'desktop_landscape') {
    const canvasWidth = this._dashboardConverterViewportWidth_(variantKey);
    const compact = canvasWidth <= 720;
    const margin = compact ? 16 : 24;
    const gap = compact ? 14 : 24;
    const desiredColumnWidth = compact ? Math.max(220, canvasWidth - margin * 2) : 340;
    const columns = compact ? 1 : Math.max(1, Math.min(4, Math.floor((canvasWidth - margin * 2 + gap) / (desiredColumnWidth + gap))));
    const columnWidth = Math.max(180, Math.floor((canvasWidth - margin * 2 - gap * (columns - 1)) / columns));
    const metrics = { canvasWidth, compact, margin, gap, columns, columnWidth };
    const groups = new Map();
    items.forEach((item) => {
      const tabId = item.tabId || 'default';
      if (!groups.has(tabId)) groups.set(tabId, []);
      groups.get(tabId).push(item);
    });

    let globalIndex = 0;
    return Array.from(groups.values()).flatMap((group) => {
      const blocks = new Map();
      group.forEach((item) => {
        const blockId = item.layoutBlockId || `${item.tabId || 'default'}:grid`;
        if (!blocks.has(blockId)) {
          blocks.set(blockId, {
            mode: item.layoutBlockMode || item.layoutMode || 'grid',
            items: [],
          });
        }
        blocks.get(blockId).items.push({ ...item, z: 6 + globalIndex });
        globalIndex += 1;
      });

      let offsetY = 0;
      return Array.from(blocks.values()).flatMap((block) => {
        const mode = block.mode || 'grid';
        const packed =
          mode === 'panel'
            ? this._packDashboardConverterPanelBlock_(block.items, metrics, offsetY)
            : mode === 'horizontal'
              ? this._packDashboardConverterHorizontalBlock_(block.items, metrics, offsetY)
              : mode === 'vertical' || mode === 'masonry'
                ? this._packDashboardConverterColumnBlock_(block.items, metrics, offsetY, mode)
              : this._packDashboardConverterGridBlock_(block.items, metrics, offsetY);
        offsetY = packed.bottom > offsetY ? packed.bottom + gap : offsetY;
        return packed.entries;
      });
    });
  },

  _dashboardConverterNextFrame_() {
    return new Promise((resolve) => {
      const schedule = typeof requestAnimationFrame === 'function'
        ? requestAnimationFrame
        : (callback) => setTimeout(callback, 0);
      schedule(() => resolve());
    });
  },

  async _dashboardConverterWaitForMeasuredRender_(delayMs = 0) {
    await this._dashboardConverterNextFrame_();
    await this._dashboardConverterNextFrame_();
    if (delayMs > 0) await new Promise((resolve) => setTimeout(resolve, delayMs));
    await this._dashboardConverterNextFrame_();
  },

  _dashboardConverterMeasureImportedCardHeight_(wrap) {
    if (!wrap || wrap.dataset?.ddcDeferred === 'true') return null;
    const current = Math.max(1, Number.parseFloat(wrap.style.height || '') || wrap.getBoundingClientRect?.().height || 0);
    const candidates = [wrap.scrollHeight || 0, wrap.getBoundingClientRect?.().height || 0];
    const cardEl = wrap.firstElementChild;
    if (cardEl) {
      candidates.push(cardEl.scrollHeight || 0, cardEl.getBoundingClientRect?.().height || 0);
      const roots = [cardEl.shadowRoot, cardEl];
      roots.forEach((root) => {
        try {
          const haCard = root?.querySelector?.('ha-card');
          if (haCard) candidates.push(haCard.scrollHeight || 0, haCard.getBoundingClientRect?.().height || 0);
          const cardContent = root?.querySelector?.('.card-content, hui-entities-card, hui-grid-card, hui-glance-card');
          if (cardContent) candidates.push(cardContent.scrollHeight || 0, cardContent.getBoundingClientRect?.().height || 0);
        } catch {}
      });
    }
    const measured = Math.ceil(Math.max(...candidates.filter((value) => Number.isFinite(value) && value > 0)));
    if (!Number.isFinite(measured) || measured <= current + 8) return null;
    const grid = Math.max(1, Number(this.gridSize || this._config?.grid || 10) || 10);
    return Math.ceil((measured + 8) / grid) * grid;
  },

  _dashboardConverterEntriesOverlapX_(a = {}, b = {}) {
    const ax = Number(a?.position?.x || 0) || 0;
    const bx = Number(b?.position?.x || 0) || 0;
    const aw = Math.max(1, Number(a?.size?.width || 0) || 0);
    const bw = Math.max(1, Number(b?.size?.width || 0) || 0);
    return ax < bx + bw - 4 && bx < ax + aw - 4;
  },

  _dashboardConverterApplyMeasuredCardHeights_(measurements = new Map(), layoutKey = '') {
    if (!measurements?.size || !this._responsiveLayouts) return false;
    const activeKey = layoutKey || this._activeResponsiveLayoutKey || this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape';
    const sourceEntries = Array.isArray(this._responsiveLayouts?.[activeKey])
      ? this._responsiveLayouts[activeKey]
      : [];
    if (!sourceEntries.length) return false;
    const entries = sourceEntries.map((entry) => this._normalizeSavedCardEntry_(entry, entry));
    const byId = new Map(entries.map((entry) => [String(entry.id || ''), entry]));
    const changes = Array.from(measurements.entries())
      .map(([id, height]) => ({ id: String(id), height: Number(height), entry: byId.get(String(id)) }))
      .filter((item) => item.entry && Number.isFinite(item.height) && item.height > Number(item.entry.size?.height || 0) + 8)
      .sort((a, b) => (Number(a.entry.position?.y || 0) - Number(b.entry.position?.y || 0)));
    if (!changes.length) return false;

    let changed = false;
    changes.forEach(({ entry, height }) => {
      const oldHeight = Math.max(1, Number(entry.size?.height || 0) || 1);
      const nextHeight = Math.max(oldHeight, Math.round(height));
      const delta = nextHeight - oldHeight;
      if (delta <= 0) return;
      const oldBottom = Number(entry.position?.y || 0) + oldHeight;
      entry.size = { ...(entry.size || {}), height: nextHeight };
      changed = true;
      entries.forEach((candidate) => {
        if (!candidate || candidate.id === entry.id) return;
        if (String(candidate.tabId || '') !== String(entry.tabId || '')) return;
        if (!this._dashboardConverterEntriesOverlapX_(entry, candidate)) return;
        const candidateY = Number(candidate.position?.y || 0) || 0;
        if (candidateY + 2 < oldBottom) return;
        candidate.position = {
          ...(candidate.position || {}),
          y: Math.round(candidateY + delta),
        };
      });
    });
    if (!changed) return false;

    this._responsiveLayouts[activeKey] = entries.map((entry) => this._normalizeSavedCardEntry_(entry, entry));
    if (this._shouldUseSharedResponsiveLayout_?.()) {
      const primaryKey = this._getPrimaryResponsiveLayoutKey_?.() || activeKey;
      const shared = this._responsiveLayouts[activeKey].map((entry) => this._normalizeSavedCardEntry_(entry, entry));
      (this._responsiveLayoutVariantKeys_?.() || [primaryKey]).forEach((variantKey) => {
        this._responsiveLayouts[variantKey] = shared.map((entry) => this._normalizeSavedCardEntry_(this._cloneJson_?.(entry) || entry, entry));
      });
    }

    const liveMap = new Map(this._responsiveLayouts[activeKey].map((entry) => [String(entry.id || ''), entry]));
    this.cardContainer?.querySelectorAll?.('.card-wrapper:not(.ddc-placeholder)')?.forEach((wrap) => {
      const entry = liveMap.get(String(wrap.dataset?.layoutCardId || ''));
      if (!entry) return;
      wrap.style.height = `${entry.size.height}px`;
      this._setCardPosition?.(wrap, entry.position?.x || 0, entry.position?.y || 0);
    });
    return true;
  },

  _dashboardConverterGrowFixedCanvasToLayouts_() {
    if (!this._responsiveLayouts || !this._config) return false;
    const primaryKey = this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape';
    const primaryCards = this._responsiveLayouts?.[primaryKey] || [];
    const inflated = this._dashboardConverterInflateCanvasOptions_(this._config, this._responsiveLayouts, primaryCards);
    const next = inflated.options || this._config;
    const changed =
      String(next.container_size_mode || '') !== String(this._config.container_size_mode || '')
      || Number(next.container_fixed_width || 0) !== Number(this._config.container_fixed_width || 0)
      || Number(next.container_fixed_height || 0) !== Number(this._config.container_fixed_height || 0);
    if (!changed) return false;
    this._config = { ...(this._config || {}), ...next };
    this.containerSizeMode = this._normalizeContainerSizeMode_?.(next.container_size_mode) || next.container_size_mode || this.containerSizeMode;
    this.containerFixedWidth = Number(next.container_fixed_width || 0) || this.containerFixedWidth;
    this.containerFixedHeight = Number(next.container_fixed_height || 0) || this.containerFixedHeight;
    try {
      this._applyContainerSizingFromConfig?.(true);
      this._applyAutoScale?.();
    } catch {}
    return true;
  },

  async _settleDashboardConverterImportedCardHeights_(payload = {}) {
    if (!this.cardContainer || !this._responsiveLayouts) return false;
    const activeKey = this._shouldUseSharedResponsiveLayout_?.()
      ? (this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape')
      : (this._activeResponsiveLayoutKey || this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape');
    let changed = false;
    for (const delay of [0, 120, 320]) {
      await this._dashboardConverterWaitForMeasuredRender_(delay);
      const measurements = new Map();
      this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)').forEach((wrap) => {
        if (wrap.style.display === 'none' || wrap.classList.contains('ddc-hidden') || wrap.inert === true) return;
        const id = String(wrap.dataset?.layoutCardId || '').trim();
        if (!id) return;
        const height = this._dashboardConverterMeasureImportedCardHeight_(wrap);
        if (height) measurements.set(id, height);
      });
      if (this._dashboardConverterApplyMeasuredCardHeights_(measurements, activeKey)) {
        changed = true;
        this._dashboardConverterGrowFixedCanvasToLayouts_();
        this._resizeContainer?.();
        this._applyAutoScale?.();
        try { this._renderConnectors_?.(); } catch {}
      }
    }
    if (changed && payload?.summary) payload.summary.measured_height_adjustments = true;
    return changed;
  },

  _dispatchDashboardConverterConfigChanged_() {
    const cfg = {
      type: 'custom:drag-and-drop-card',
      ...(this._config || {}),
    };
    this._deleteParkedSidebarOptions_?.(cfg);
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: cfg },
      bubbles: true,
      composed: true,
    }));
  },

  _applyDashboardConverterTabs_(options = {}) {
    const tabs = Array.isArray(options.tabs)
      ? options.tabs.map((tab, index) => ({
          id: String(tab?.id || tab?.label || `tab_${index + 1}`).trim() || `tab_${index + 1}`,
          label: String(tab?.label || tab?.id || `Tab ${index + 1}`).trim(),
          icon: tab?.icon || '',
          label_mode: tab?.label_mode || tab?.labelMode || 'both',
        }))
      : [];
    if (!tabs.length) return false;
    const validTabIds = new Set(tabs.map((tab) => tab.id));
    const requestedDefault = String(options.default_tab || '').trim();
    this.tabs = tabs;
    this.defaultTab = validTabIds.has(requestedDefault) ? requestedDefault : tabs[0].id;
    this.activeTab = validTabIds.has(this.activeTab) ? this.activeTab : this.defaultTab;
    if ('hide_tabs_when_single' in options) this.hideTabsWhenSingle = options.hide_tabs_when_single !== false;
    if ('tabs_position' in options) this.tabsPosition = this._normalizeTabsPosition_?.(options.tabs_position) || options.tabs_position || this.tabsPosition;
    return true;
  },

  _dashboardConverterPayloadTabMap_(payload = {}) {
    const validTabIds = new Set((Array.isArray(payload?.options?.tabs) ? payload.options.tabs : [])
      .map((tab) => String(tab?.id || '').trim())
      .filter(Boolean));
    const map = new Map();
    const visitEntry = (entry = {}) => {
      const id = String(entry?.id || '').trim();
      const tabId = String(entry?.tabId || entry?.tab_id || '').trim();
      if (id && tabId && (!validTabIds.size || validTabIds.has(tabId))) map.set(id, tabId);
    };
    const visitLayouts = (layouts = null) => {
      if (!layouts || typeof layouts !== 'object') return;
      Object.values(layouts).forEach((value) => {
        if (Array.isArray(value)) value.forEach(visitEntry);
        else if (Array.isArray(value?.cards)) value.cards.forEach(visitEntry);
        else if (value && typeof value === 'object') visitLayouts(value);
      });
    };
    if (Array.isArray(payload.cards)) payload.cards.forEach(visitEntry);
    visitLayouts(payload.responsive_layouts);
    return map;
  },

  _restoreDashboardConverterTabAssignments_(payload = {}) {
    const tabMap = this._dashboardConverterPayloadTabMap_?.(payload) || new Map();
    if (!tabMap.size) return false;
    let changed = false;
    Object.keys(this._responsiveLayouts || {}).forEach((variantKey) => {
      const entries = Array.isArray(this._responsiveLayouts?.[variantKey]) ? this._responsiveLayouts[variantKey] : [];
      this._responsiveLayouts[variantKey] = entries.map((entry) => {
        const tabId = tabMap.get(String(entry?.id || '').trim());
        if (!tabId || entry.tabId === tabId) return entry;
        changed = true;
        return { ...entry, tabId };
      });
    });
    this.cardContainer?.querySelectorAll?.('.card-wrapper:not(.ddc-placeholder)')?.forEach((wrap) => {
      const tabId = tabMap.get(String(wrap?.dataset?.layoutCardId || '').trim());
      if (!tabId || wrap.dataset.tabId === tabId) return;
      wrap.dataset.tabId = tabId;
      changed = true;
      try { this._addTabSelectorToChip?.(wrap, tabId); } catch {}
    });
    return changed;
  },

  _createDashboardConverterSnapshot_(payload = {}) {
    const primaryKey = this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape';
    const layouts = this._normalizeResponsiveLayouts_(
      payload.cards || [],
      this._responsiveLayouts || payload.responsive_layouts || null
    );
    const primaryCards = layouts?.[primaryKey] || payload.cards || [];
    const options = {
      ...(payload.options || {}),
      ...(this._exportableOptions?.() || {}),
      tabs: this._cloneJson_?.(this.tabs || payload.options?.tabs || []) || [],
      default_tab: this.defaultTab || payload.options?.default_tab || this.tabs?.[0]?.id || 'default',
      storage_key: this.storageKey || this._config?.storage_key || payload.options?.storage_key || undefined,
    };
    Object.keys(options).forEach((key) => options[key] === undefined && delete options[key]);
    return this._normalizeDashboardPayload_?.({
      version: 3,
      updated_at: new Date().toISOString(),
      options,
      cards: this._cloneJson_?.(primaryCards) || primaryCards,
      responsive_layouts: this._cloneJson_?.(
        this._serializeResponsiveLayouts_(layouts, primaryCards)
      ) || payload.responsive_layouts,
      packages: this._exportDashboardPackages_?.() || [],
    });
  },

  async _persistDashboardConverterSnapshot_(snapshot = {}) {
    const normalized = this._normalizeDashboardPayload_?.(snapshot) || snapshot;
    if (!Array.isArray(normalized?.cards) || !normalized.cards.length) {
      throw new Error('Refusing to persist an empty converted dashboard snapshot.');
    }
    try { this._writeRuntimeLayoutCache_?.(normalized); } catch {}
    try { localStorage.setItem(`ddc_local_${this.storageKey || 'default'}`, JSON.stringify(normalized)); } catch {}

    let backend = 'local';
    if (this.storageKey && this._backendOK) {
      try {
        await this._saveLayoutToBackend(this.storageKey, normalized);
        this._clearPendingDashboardReplacement_?.();
        this.__lastSyncedDashboardPayload = this._cloneJson_?.(normalized) || normalized;
        backend = 'saved';
      } catch (err) {
        this._markPendingDashboardReplacement_?.();
        backend = 'pending';
        console.warn('[drag-and-drop-card] Converted dashboard backend commit is pending', err);
      }
    } else if (this.storageKey) {
      this._markPendingDashboardReplacement_?.();
      backend = 'pending';
    }
    return { snapshot: normalized, backend };
  },

  async _persistDashboardConverterConfig_() {
    let persisted = false;
    try {
      persisted = (await this._persistThisCardConfigToStorage_?.()) === true;
    } catch (err) {
      console.warn('[drag-and-drop-card] Could not persist converted dashboard config to Lovelace storage', err);
    }
    // Notify Home Assistant only after the direct storage transaction. Emitting
    // this first can synchronously re-run setConfig halfway through the import.
    try { this._dispatchDashboardConverterConfigChanged_?.(); } catch {}
    return persisted;
  },

  _convertLovelaceDashboardToDdc_(sourceConfig = {}) {
    const plan = this._buildDashboardConverterImportPlan_(sourceConfig);
    const { config, tabs } = plan;
    const views = Array.isArray(config.views) ? config.views : [];
    const items = [];
    plan.views.forEach((viewPlan) => {
      viewPlan.blocks.forEach((block, blockIndex) => {
        block.cards.forEach((card, cardIndex) => {
          const isLayoutBreak = String(card?.type || '').toLowerCase() === 'custom:layout-break';
          items.push({
            id: this._dashboardConverterCardId_(viewPlan.index, `${blockIndex}-${cardIndex}`),
            tabId: viewPlan.tabId,
            card: this._cloneJson_?.(card) || JSON.parse(JSON.stringify(card)),
            cardStyle: this._dashboardConverterCardStyleHints_(card),
            layoutMode: viewPlan.layoutMode,
            layoutBlockMode: block.mode,
            layoutBlockId: block.id,
            layoutOptions: block.layoutOptions || {},
            panel: block.mode === 'panel',
            isLayoutBreak,
          });
        });
      });
    });
    const variantKeys = this._responsiveLayoutVariantKeys_?.() || ['desktop_landscape'];
    const responsiveLayouts = {};
    variantKeys.forEach((variantKey) => {
      responsiveLayouts[variantKey] = this._packDashboardConverterItems_(items, variantKey);
    });
    const primaryKey = this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape';
    const primaryCards = responsiveLayouts[primaryKey] || Object.values(responsiveLayouts)[0] || [];
    let options = {
      tabs,
      default_tab: tabs[0]?.id || 'imported',
      hide_tabs_when_single: tabs.length <= 1,
      tabs_position: this._normalizeTabsPosition_?.(this.tabsPosition || 'top') || 'top',
      layers_enabled: false,
      layers: [],
      connectors: [],
      responsive_connectors: {},
      sidebar_enabled: false,
      sidebar_cards: [],
      background_mode: 'none',
      container_background: 'transparent',
      apply_background_to_page: false,
      container_size_mode: this._normalizeContainerSizeMode_?.(this.containerSizeMode || this._config?.container_size_mode || 'preset') || 'preset',
      container_preset: this.containerPreset || this._config?.container_preset || 'fhd',
      container_preset_orientation: this.containerPresetOrient || this._config?.container_preset_orientation || 'auto',
      auto_resize_cards: !!this.autoResizeCards,
    };
    const currentFixedWidth = Number(this.containerFixedWidth || this._config?.container_fixed_width || 0);
    const currentFixedHeight = Number(this.containerFixedHeight || this._config?.container_fixed_height || 0);
    if (Number.isFinite(currentFixedWidth) && currentFixedWidth > 0) options.container_fixed_width = currentFixedWidth;
    if (Number.isFinite(currentFixedHeight) && currentFixedHeight > 0) options.container_fixed_height = currentFixedHeight;

    options = {
      ...options,
      ...this._dashboardConverterDashboardStyleOptions_(config, views),
    };
    const inflated = this._dashboardConverterInflateCanvasOptions_(options, responsiveLayouts, primaryCards);
    options = inflated.options;

    return {
      version: 3,
      kind: 'ddc-converted-lovelace-dashboard',
      source_title: config.title || 'Imported dashboard',
      options,
      cards: primaryCards,
      responsive_layouts: responsiveLayouts,
      summary: {
        views: tabs.length,
        cards: plan.cardCount,
        canvas_width: options.container_fixed_width || inflated.bounds?.width || null,
        canvas_height: options.container_fixed_height || inflated.bounds?.height || null,
        skipped_drag_drop_cards: plan.diagnostics.skipped_drag_drop_cards,
        invalid_cards: plan.diagnostics.invalid_cards,
        empty_views: plan.diagnostics.empty_views,
        custom_card_types: plan.diagnostics.custom_card_types,
        warnings: plan.diagnostics.warnings,
        view_details: plan.views.map((view) => ({
          id: view.tabId,
          title: view.title,
          cards: view.cardCount,
          layout: view.layoutMode,
        })),
      },
    };
  },

  _validateConvertedDashboardPayload_(payload = {}) {
    if (!payload || typeof payload !== 'object') throw new Error('The converter did not produce a dashboard payload.');
    const tabs = Array.isArray(payload?.options?.tabs) ? payload.options.tabs : [];
    const tabIds = new Set(tabs.map((tab) => String(tab?.id || '').trim()).filter(Boolean));
    if (!tabIds.size) throw new Error('The converted dashboard has no valid tabs.');
    if (tabIds.size !== tabs.length) throw new Error('The converted dashboard contains duplicate or empty tab IDs.');

    const primaryCards = Array.isArray(payload.cards) ? payload.cards : [];
    if (!primaryCards.length) throw new Error('The converted dashboard has no cards.');
    if (primaryCards.length > DASHBOARD_CONVERTER_MAX_CARDS) {
      throw new Error(`The converted dashboard exceeds the ${DASHBOARD_CONVERTER_MAX_CARDS}-card safety limit.`);
    }

    const validateEntries = (entries = [], label = 'layout') => {
      const ids = new Set();
      entries.forEach((entry, index) => {
        const id = String(entry?.id || '').trim();
        const type = String(entry?.card?.type || '').trim();
        const tabId = String(entry?.tabId || entry?.tab_id || '').trim();
        const numbers = [entry?.position?.x, entry?.position?.y, entry?.size?.width, entry?.size?.height].map(Number);
        if (!id || ids.has(id)) throw new Error(`${label} contains a duplicate or empty card ID at position ${index + 1}.`);
        if (!type) throw new Error(`${label} contains a card without a type at position ${index + 1}.`);
        if (!tabIds.has(tabId)) throw new Error(`${label} contains a card assigned to an unknown tab.`);
        if (!numbers.every(Number.isFinite) || numbers[2] <= 0 || numbers[3] <= 0) {
          throw new Error(`${label} contains an invalid card position or size.`);
        }
        ids.add(id);
      });
      return ids;
    };

    const primaryIds = validateEntries(primaryCards, 'Primary layout');
    const responsiveLayouts = payload.responsive_layouts && typeof payload.responsive_layouts === 'object'
      ? payload.responsive_layouts
      : {};
    Object.entries(responsiveLayouts).forEach(([key, value]) => {
      const entries = Array.isArray(value) ? value : (Array.isArray(value?.cards) ? value.cards : null);
      if (!entries) throw new Error(`Responsive layout “${key}” has an invalid format.`);
      const ids = validateEntries(entries, `Responsive layout “${key}”`);
      if (ids.size !== primaryIds.size || Array.from(primaryIds).some((id) => !ids.has(id))) {
        throw new Error(`Responsive layout “${key}” does not contain the same cards as the primary layout.`);
      }
    });
    return payload;
  },

  _captureDashboardConverterRuntimeSnapshot_() {
    const clone = (value) => this._cloneJson_?.(value) || JSON.parse(JSON.stringify(value ?? null));
    const primaryKey = this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape';
    const livePrimary = this._responsiveLayouts?.[primaryKey] || this._captureCurrentLayoutEntries_?.() || [];
    return {
      config: clone(this._config || {}),
      responsiveLayouts: clone(this._responsiveLayouts || this._normalizeResponsiveLayouts_?.(livePrimary, null) || {}),
      responsiveConnectors: clone(this._responsiveConnectors || {}),
      tabs: clone(this.tabs || []),
      defaultTab: this.defaultTab,
      activeTab: this.activeTab,
      activeResponsiveLayoutKey: this._activeResponsiveLayoutKey,
      activeResponsiveProfile: this._activeResponsiveProfile,
      packages: clone(this._dashboardPackages || []),
      activeLayerIds: clone(this.activeLayerIds || []),
    };
  },

  async _restoreDashboardConverterRuntimeSnapshot_(snapshot = null) {
    if (!snapshot) return false;
    const clone = (value) => this._cloneJson_?.(value) || JSON.parse(JSON.stringify(value ?? null));
    this._config = clone(snapshot.config || {});
    this.config = { ...(this.config || {}), ...(this._config || {}) };
    this.tabs = clone(snapshot.tabs || []);
    this.defaultTab = snapshot.defaultTab || this.tabs[0]?.id || 'default';
    this.activeTab = snapshot.activeTab || this.defaultTab;
    this._responsiveLayouts = clone(snapshot.responsiveLayouts || {});
    this._responsiveConnectors = clone(snapshot.responsiveConnectors || {});
    this._activeResponsiveLayoutKey = snapshot.activeResponsiveLayoutKey || this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape';
    this._activeResponsiveProfile = snapshot.activeResponsiveProfile || 'desktop';
    this._setDashboardPackages_?.(snapshot.packages || []);
    this.activeLayerIds = clone(snapshot.activeLayerIds || []);
    const previousSuppressResponsiveRebuild = !!this.__suppressResponsiveRebuild;
    this.__suppressResponsiveRebuild = true;
    try { this._applyImportedOptions?.(this._config, true); } finally { this.__suppressResponsiveRebuild = previousSuppressResponsiveRebuild; }
    const entries = this._responsiveLayouts?.[this._activeResponsiveLayoutKey]
      || this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_?.()]
      || [];
    await this._buildCardsFromEntries_?.(entries, 0, { replaceExisting: true });
    try { this._renderTabs?.(); this._renderLayersBar_?.(); this._applyActiveTab?.(); this._applyVisibility_?.(); } catch {}
    try { this._renderConnectors_?.(); this._syncEmptyStateUI?.(); this._resizeContainer?.(); this._applyAutoScale?.(); } catch {}
    return true;
  },

  async _applyConvertedDashboardPayload_(payload = {}) {
    this._validateConvertedDashboardPayload_(payload);
    if (this.__dashboardConverterImporting) throw new Error('A dashboard import is already running.');
    if (!payload.summary || typeof payload.summary !== 'object') payload.summary = {};
    const cards = Array.isArray(payload.cards) ? payload.cards : [];

    const realCards = this.cardContainer?.querySelectorAll?.('.card-wrapper:not(.ddc-placeholder)') || [];
    if (realCards.length) {
      const ok = window.confirm?.(`Replace the current Drag & Drop canvas with ${payload.summary?.cards || cards.length} imported cards across ${payload.summary?.views || payload.options?.tabs?.length || 1} tabs?`);
      if (!ok) return false;
    }

    const rollbackSnapshot = this._captureDashboardConverterRuntimeSnapshot_?.();
    this.__dashboardConverterImporting = true;
    const previousImportingDashboard = !!this.__ddcImportingDashboard;
    this.__ddcImportingDashboard = true;

    try {

    this._hideEmptyPlaceholder?.();
    this._responsiveConnectors = this._normalizeResponsiveConnectorLayouts_?.([], null) || {};
    this._selectedConnectorId = null;
    this._connectorDraft = null;
    this._setDashboardPackages_?.([]);
    this.activeLayerIds = [];
    this._setDashboardLayers_?.([], { refresh: false, persist: false });
    this.sidebarCards = [];

    const options = payload.options || {};
    this._applyDashboardConverterTabs_?.(options);
    const previousSuppressResponsiveRebuild = !!this.__suppressResponsiveRebuild;
    this.__suppressResponsiveRebuild = true;
    try {
      this._applyImportedOptions?.(options, true);
    } finally {
      this.__suppressResponsiveRebuild = previousSuppressResponsiveRebuild;
    }
    this._applyDashboardConverterTabs_?.(options);
    this.activeTab = this.defaultTab;
    try { localStorage.setItem(`ddc_lasttab_${this.storageKey}`, this.activeTab); } catch {}
    this._responsiveLayouts = this._normalizeResponsiveLayouts_(cards, payload.responsive_layouts || null);
    const primaryCards = this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_?.()] || cards;
    this._config = {
      ...(this._config || {}),
      ...options,
      cards: this._cloneJson_?.(primaryCards) || primaryCards,
      responsive_layouts: this._cloneJson_?.(this._serializeResponsiveLayouts_(this._responsiveLayouts, primaryCards)) || payload.responsive_layouts,
    };

    this._applyOptionsToDom?.(this._config);
    const importContainerMode = this._normalizeContainerSizeMode_?.(this.containerSizeMode || this._config?.container_size_mode);
    if (importContainerMode !== 'auto') {
      try {
        this._applyContainerSizingFromConfig?.(true);
        this._applyAutoScale?.();
      } catch {}
    }
    const targetProfile = this._getRequestedResponsiveProfile_?.() || 'desktop';
    const targetOrientation = this._getRequestedResponsiveOrientation_?.(targetProfile) || 'landscape';
    const activeLayoutKey = this._getRuntimeResponsiveLayoutKey_?.(targetProfile, targetOrientation)
      || this._getResponsiveLayoutKey_?.(targetProfile, targetOrientation)
      || this._getPrimaryResponsiveLayoutKey_?.()
      || 'desktop_landscape';
    this._activeResponsiveProfile = targetProfile;
    this._activeResponsiveLayoutKey = activeLayoutKey;
    const activeEntries = this._responsiveLayouts?.[activeLayoutKey] || primaryCards;
    if (activeEntries.length) {
      await this._buildCardsFromEntries_?.(activeEntries, 0, { replaceExisting: true });
    }
    this._restoreDashboardConverterTabAssignments_?.(payload);
    this._resizeContainer?.();
    try { this._syncTabsPlacement_?.(); this._renderTabs?.(); this._renderLayersBar_?.(); this._applyActiveTab?.(); } catch {}
    try { this._applyVisibility_?.(); } catch {}
    try { this._syncTabsWidth_?.(); } catch {}
    try { await this._settleDashboardConverterImportedCardHeights_?.(payload); } catch (err) { console.warn('[drag-and-drop-card] Could not settle imported card heights', err); }
    try { this._renderConnectors_?.(); } catch {}
    try { this._syncEmptyStateUI?.(); } catch {}
    this._restoreDashboardConverterTabAssignments_?.(payload);
    const committedSnapshot = this._createDashboardConverterSnapshot_?.(payload);
    const committedPrimary = committedSnapshot?.cards || primaryCards;
    this._responsiveLayouts = this._normalizeResponsiveLayouts_(
      committedPrimary,
      committedSnapshot?.responsive_layouts || null
    );
    this._config = {
      ...(this._config || {}),
      ...(committedSnapshot?.options || options),
      cards: this._cloneJson_?.(committedPrimary) || committedPrimary,
      responsive_layouts: this._cloneJson_?.(committedSnapshot?.responsive_layouts) || payload.responsive_layouts,
    };
    this.config = { ...(this.config || {}), ...(this._config || {}) };
    const previousSaveSuppressResponsiveMemoryPersist = !!this.__suppressResponsiveMemoryPersist;
    this.__suppressResponsiveMemoryPersist = true;
    try {
      const commit = await this._persistDashboardConverterSnapshot_?.(committedSnapshot);
      payload.summary.persisted_to_backend = commit?.backend || 'local';
      payload.summary.persisted_to_lovelace = await this._persistDashboardConverterConfig_?.();
    } finally {
      this.__suppressResponsiveMemoryPersist = previousSaveSuppressResponsiveMemoryPersist;
    }
    const persistenceNote = payload.summary?.persisted_to_lovelace === false
      ? ' The layout is safe locally and will sync to the backend, but Home Assistant could not persist the card config automatically.'
      : '';
    this._toast?.(`Converted ${payload.summary?.cards || cards.length} cards across ${payload.summary?.views || options.tabs?.length || 1} tabs.${persistenceNote}`);
    return true;
    } catch (err) {
      try { await this._restoreDashboardConverterRuntimeSnapshot_?.(rollbackSnapshot); } catch (rollbackErr) {
        console.warn('[drag-and-drop-card] Dashboard import rollback failed', rollbackErr);
      }
      throw err;
    } finally {
      this.__ddcImportingDashboard = previousImportingDashboard;
      this.__dashboardConverterImporting = false;
    }
  },

  async _fetchDashboardConverterDashboardList_() {
    if (!this.hass?.callWS) return [];
    const result = await this.hass.callWS({ type: 'lovelace/dashboards/list' });
    const dashboards = Array.isArray(result) ? result : (Array.isArray(result?.dashboards) ? result.dashboards : []);
    return [
      { title: 'Overview', url_path: null, icon: 'mdi:home-assistant' },
      ...dashboards,
    ].map((dashboard, index) => ({
      id: String(dashboard.id ?? dashboard.url_path ?? dashboard.urlPath ?? index),
      title: String(dashboard.title || dashboard.name || dashboard.url_path || dashboard.urlPath || 'Dashboard'),
      url_path: dashboard.url_path ?? dashboard.urlPath ?? dashboard.path ?? null,
      icon: dashboard.icon || 'mdi:view-dashboard-outline',
    }));
  },

  async _fetchDashboardConverterDashboardConfig_(urlPath = null) {
    if (!this.hass?.callWS) throw new Error('Home Assistant dashboard API is not available here.');
    const payload = { type: 'lovelace/config' };
    if (urlPath) payload.url_path = urlPath;
    return await this.hass.callWS(payload);
  },

  _dashboardConverterSourcePreviewModel_(sourceConfig = {}, requestedViewId = '') {
    const config = this._normalizeDashboardConverterConfig_(sourceConfig);
    const sourceViews = Array.isArray(config.views) ? config.views : [];
    const usedViewIds = new Set();
    const views = sourceViews.map((view, index) => ({
      id: this._normalizeDashboardConverterTabId_(view, index, usedViewIds),
      label: String(view?.title || view?.path || `View ${index + 1}`).trim() || `View ${index + 1}`,
      icon: String(view?.icon || '').trim(),
      layout: this._dashboardConverterViewLayoutMode_(view),
      cards: this._collectDashboardConverterCardsForView_(view)
        .filter((card) => String(card?.type || '').toLowerCase() !== 'custom:layout-break'),
    }));
    const requested = String(requestedViewId || '').trim();
    const activeView = views.find((view) => view.id === requested) || views[0] || null;
    const cards = (activeView?.cards || []).slice(0, 24);
    return {
      title: String(config.title || 'Lovelace dashboard').trim(),
      views: views.map(({ cards: viewCards, ...view }) => ({ ...view, cardCount: viewCards.length })),
      activeViewId: activeView?.id || '',
      activeViewLabel: activeView?.label || 'Dashboard',
      layout: activeView?.layout || 'grid',
      cards,
      hiddenCardCount: Math.max(0, (activeView?.cards?.length || 0) - cards.length),
    };
  },

  _dashboardConverterPreviewModel_(converted = {}, requestedTabId = '') {
    const tabs = (Array.isArray(converted?.options?.tabs) ? converted.options.tabs : [])
      .map((tab, index) => ({
        id: String(tab?.id || `tab-${index + 1}`).trim() || `tab-${index + 1}`,
        label: String(tab?.label || tab?.id || `Tab ${index + 1}`).trim(),
        icon: String(tab?.icon || '').trim(),
      }));
    const validTabIds = new Set(tabs.map((tab) => tab.id));
    const fallbackTabId = String(converted?.options?.default_tab || tabs[0]?.id || '').trim();
    const activeTabId = validTabIds.has(String(requestedTabId || '').trim())
      ? String(requestedTabId).trim()
      : (validTabIds.has(fallbackTabId) ? fallbackTabId : tabs[0]?.id || '');

    const layouts = converted?.responsive_layouts && typeof converted.responsive_layouts === 'object'
      ? converted.responsive_layouts
      : {};
    const preferredLayoutKey = this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape';
    const availableLayoutKey = Array.isArray(layouts[preferredLayoutKey])
      ? preferredLayoutKey
      : Object.keys(layouts).find((key) => Array.isArray(layouts[key])) || '';
    const sourceEntries = availableLayoutKey
      ? layouts[availableLayoutKey]
      : (Array.isArray(converted?.cards) ? converted.cards : []);
    const allEntries = sourceEntries.filter((entry) => entry && typeof entry === 'object');
    const visibleEntries = allEntries.filter((entry) => !activeTabId || String(entry?.tabId || entry?.tab_id || '') === activeTabId);
    const bounds = allEntries.reduce((result, entry) => {
      const x = Math.max(0, Number(entry?.position?.x || 0) || 0);
      const y = Math.max(0, Number(entry?.position?.y || 0) || 0);
      const width = Math.max(1, Number(entry?.size?.width || 0) || 1);
      const height = Math.max(1, Number(entry?.size?.height || 0) || 1);
      result.width = Math.max(result.width, x + width);
      result.height = Math.max(result.height, y + height);
      return result;
    }, { width: 0, height: 0 });
    const canvasWidth = Math.max(
      320,
      Number(converted?.options?.container_fixed_width || converted?.summary?.canvas_width || 0) || 0,
      Math.ceil(bounds.width + 24),
    );
    const canvasHeight = Math.max(
      240,
      Number(converted?.options?.container_fixed_height || converted?.summary?.canvas_height || 0) || 0,
      Math.ceil(bounds.height + 24),
    );
    const entries = visibleEntries.slice(0, 80).map((entry, index) => {
      const card = entry?.card && typeof entry.card === 'object' ? entry.card : {};
      const entity = String(card.entity || card.camera_image || '').trim();
      const type = String(card.type || 'card').replace(/^custom:/i, '').replace(/-card$/i, '').replace(/[-_]+/g, ' ').trim();
      const domain = entity.includes('.') ? entity.split('.')[0].toLowerCase() : '';
      const category = domain || (/light|lamp/i.test(type) ? 'light' : /climate|thermostat/i.test(type) ? 'climate' : /media/i.test(type) ? 'media' : /camera|picture/i.test(type) ? 'camera' : /sensor|graph|history|statistics/i.test(type) ? 'sensor' : 'generic');
      const markdownTitle = String(card.content || '').split('\n').find((line) => line.trim())?.replace(/^#+\s*/, '') || '';
      const label = String(card.title || card.name || markdownTitle || entity || type || `Card ${index + 1}`).trim();
      return {
        id: String(entry.id || `preview-${index + 1}`),
        x: Math.max(0, Number(entry?.position?.x || 0) || 0),
        y: Math.max(0, Number(entry?.position?.y || 0) || 0),
        width: Math.max(1, Number(entry?.size?.width || 0) || 1),
        height: Math.max(1, Number(entry?.size?.height || 0) || 1),
        label,
        type: type || 'card',
        category,
      };
    });
    const layoutLabel = String(availableLayoutKey || 'dashboard').replace(/_/g, ' ');
    return {
      tabs,
      activeTabId,
      layoutKey: availableLayoutKey,
      layoutLabel,
      canvasWidth,
      canvasHeight,
      entries,
      hiddenCardCount: Math.max(0, visibleEntries.length - entries.length),
    };
  },

  _dashboardConverterModalStyles_() {
    return `
      <style>
        .ddc-converter-overlay{position:fixed;inset:0;z-index:10000;display:grid;place-items:center;padding:clamp(12px,3vw,32px);background:rgba(8,12,18,.58);backdrop-filter:blur(14px) saturate(.8);-webkit-backdrop-filter:blur(14px) saturate(.8);}
        .ddc-converter-dialog{--ddc-import-surface:color-mix(in oklab,var(--card-background-color,#15202b) 94%,var(--primary-background-color,#edf3f7) 6%);--ddc-import-raised:color-mix(in oklab,var(--card-background-color,#15202b) 87%,var(--primary-background-color,#edf3f7) 13%);--ddc-import-line:color-mix(in oklab,var(--divider-color,rgba(128,145,160,.3)) 82%,transparent);width:min(1040px,calc(100vw - 28px));height:min(780px,calc(100vh - 32px));display:grid;grid-template-rows:auto minmax(0,1fr) auto;overflow:hidden;border-radius:22px;border:1px solid var(--ddc-import-line);background:var(--ddc-import-surface);box-shadow:0 32px 90px rgba(0,0,0,.38),0 2px 0 color-mix(in oklab,var(--primary-text-color,#fff) 7%,transparent) inset;color:var(--primary-text-color,#e8eef3);font-family:var(--paper-font-body1_-_font-family,"Avenir Next","Segoe UI",sans-serif);}
        .ddc-converter-head{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:20px;padding:24px 28px 20px;border-bottom:1px solid var(--ddc-import-line);}
        .ddc-converter-heading{min-width:0}.ddc-converter-eyebrow{display:flex;align-items:center;gap:8px;margin-bottom:6px;color:var(--primary-color,#3ca5dd);font-size:11px;font-weight:800;letter-spacing:.09em;text-transform:uppercase}.ddc-converter-eyebrow ha-icon{width:17px}.ddc-converter-title{margin:0;font-size:clamp(20px,2.4vw,28px);font-weight:760;letter-spacing:-.025em;line-height:1.14}.ddc-converter-subtitle{max-width:680px;margin:7px 0 0;color:var(--secondary-text-color,#9eacb8);font-size:13px;line-height:1.5}
        .ddc-converter-close{align-self:start;width:40px;height:40px;padding:0;border-radius:11px;}
        .ddc-converter-progress{grid-column:1/-1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:8px;counter-reset:step;}
        .ddc-converter-step{position:relative;display:flex;align-items:center;gap:9px;min-width:0;padding-top:12px;color:var(--secondary-text-color,#9eacb8);font-size:12px;font-weight:700;transition:color .18s ease}.ddc-converter-step::before{content:"";position:absolute;inset:0 0 auto;height:3px;border-radius:3px;background:var(--ddc-import-line);transition:background .18s ease}.ddc-converter-step b{display:grid;place-items:center;width:21px;height:21px;flex:none;border-radius:7px;background:var(--ddc-import-raised);color:inherit;font-size:11px}.ddc-converter-step.is-active{color:var(--primary-text-color,#e8eef3)}.ddc-converter-step.is-active::before,.ddc-converter-step.is-complete::before{background:var(--primary-color,#3ca5dd)}.ddc-converter-step.is-complete{color:var(--primary-color,#3ca5dd)}
        .ddc-converter-body{min-height:0;display:grid;grid-template-columns:minmax(0,1.08fr) minmax(330px,.92fr);overflow:hidden;}
        .ddc-converter-source{min-width:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:22px;padding:26px 28px;overflow:auto;}
        .ddc-converter-source-tabs{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;padding:5px;border-radius:14px;background:color-mix(in oklab,var(--primary-background-color,#0d151d) 65%,transparent);border:1px solid var(--ddc-import-line);}
        .ddc-converter-source-tab{min-width:0;min-height:46px;display:flex;align-items:center;justify-content:center;gap:8px;padding:0 10px;border:0;border-radius:10px;background:transparent;color:var(--secondary-text-color,#9eacb8);font:720 12px/1 inherit;cursor:pointer;transition:background .16s ease,color .16s ease,transform .16s ease}.ddc-converter-source-tab:hover{color:var(--primary-text-color,#e8eef3);background:color-mix(in oklab,var(--primary-text-color,#fff) 5%,transparent)}.ddc-converter-source-tab[aria-selected="true"]{background:var(--ddc-import-raised);color:var(--primary-text-color,#e8eef3);box-shadow:0 1px 0 color-mix(in oklab,var(--primary-text-color,#fff) 7%,transparent) inset,0 6px 18px rgba(0,0,0,.09)}.ddc-converter-source-tab ha-icon{width:18px;color:currentColor}
        .ddc-converter-source-panel{display:grid;align-content:start;gap:18px;animation:ddc-import-panel-in .22s cubic-bezier(.22,1,.36,1)}.ddc-converter-source-panel[hidden]{display:none}.ddc-converter-section-head{display:grid;gap:5px}.ddc-converter-section-head h3{margin:0;font-size:18px;line-height:1.25;letter-spacing:-.015em}.ddc-converter-section-head p{margin:0;color:var(--secondary-text-color,#9eacb8);font-size:13px;line-height:1.5}
        .ddc-converter-field{display:grid;gap:8px}.ddc-converter-field label{font-size:11px;font-weight:800;color:var(--secondary-text-color,#9eacb8);letter-spacing:.055em;text-transform:uppercase}.ddc-converter-select,.ddc-converter-textarea{width:100%;box-sizing:border-box;border:1px solid var(--ddc-import-line);border-radius:12px;background:color-mix(in oklab,var(--primary-background-color,#0d151d) 74%,transparent);color:var(--primary-text-color,#e8eef3);font:520 14px/1.48 inherit;outline:none;transition:border-color .16s ease,box-shadow .16s ease}.ddc-converter-select{min-height:48px;padding:0 14px}.ddc-converter-select:focus,.ddc-converter-textarea:focus{border-color:color-mix(in oklab,var(--primary-color,#3ca5dd) 72%,transparent);box-shadow:0 0 0 3px color-mix(in oklab,var(--primary-color,#3ca5dd) 17%,transparent)}.ddc-converter-textarea{min-height:310px;resize:vertical;padding:14px;font-family:"SFMono-Regular",Consolas,"Liberation Mono",monospace;font-size:12px;tab-size:2}
        .ddc-converter-source-note{display:flex;align-items:flex-start;gap:9px;padding:12px 13px;border-radius:11px;background:color-mix(in oklab,var(--primary-color,#3ca5dd) 8%,transparent);color:var(--secondary-text-color,#9eacb8);font-size:12px;line-height:1.45}.ddc-converter-source-note ha-icon{width:17px;flex:none;color:var(--primary-color,#3ca5dd)}
        .ddc-converter-dropzone{min-height:250px;display:grid;place-items:center;padding:30px;border:1.5px dashed color-mix(in oklab,var(--primary-color,#3ca5dd) 42%,var(--ddc-import-line));border-radius:16px;background:color-mix(in oklab,var(--primary-color,#3ca5dd) 4%,transparent);color:inherit;text-align:center;cursor:pointer;transition:border-color .18s ease,background .18s ease,transform .18s ease}.ddc-converter-dropzone:hover,.ddc-converter-dropzone.is-dragging{border-color:var(--primary-color,#3ca5dd);background:color-mix(in oklab,var(--primary-color,#3ca5dd) 9%,transparent);transform:translateY(-1px)}.ddc-converter-drop-inner{display:grid;justify-items:center;gap:8px}.ddc-converter-drop-icon{display:grid;place-items:center;width:48px;height:48px;border-radius:14px;background:var(--ddc-import-raised);color:var(--primary-color,#3ca5dd);box-shadow:0 10px 24px rgba(0,0,0,.1)}.ddc-converter-drop-icon ha-icon{width:23px}.ddc-converter-drop-inner strong{font-size:15px}.ddc-converter-drop-inner span{max-width:300px;color:var(--secondary-text-color,#9eacb8);font-size:12px;line-height:1.45}.ddc-converter-file-name{color:var(--primary-color,#3ca5dd)!important;font-weight:750;overflow-wrap:anywhere}
        .ddc-converter-review{min-width:0;display:grid;grid-template-rows:minmax(0,1fr);padding:26px 28px;border-left:1px solid var(--ddc-import-line);background:color-mix(in oklab,var(--primary-background-color,#0d151d) 34%,transparent);overflow:auto}.ddc-converter-review-empty{align-self:center;display:grid;justify-items:start;gap:12px;max-width:340px;color:var(--secondary-text-color,#9eacb8)}.ddc-converter-review-empty-mark{display:grid;place-items:center;width:42px;height:42px;border-radius:13px;background:var(--ddc-import-raised);color:var(--primary-color,#3ca5dd)}.ddc-converter-review-empty h3{margin:0;color:var(--primary-text-color,#e8eef3);font-size:18px}.ddc-converter-review-empty p{margin:0;font-size:13px;line-height:1.55}.ddc-converter-review-ready{display:grid;align-content:start;gap:18px;animation:ddc-import-panel-in .26s cubic-bezier(.22,1,.36,1)}.ddc-converter-review-ready[hidden],.ddc-converter-review-empty[hidden]{display:none}.ddc-converter-review-head{display:grid;gap:6px}.ddc-converter-review-kicker{color:var(--primary-color,#3ca5dd);font-size:11px;font-weight:800;letter-spacing:.07em;text-transform:uppercase}.ddc-converter-review-head h3{margin:0;font-size:21px;letter-spacing:-.02em;line-height:1.2}.ddc-converter-review-head p{margin:0;color:var(--secondary-text-color,#9eacb8);font-size:12px;line-height:1.5}
        .ddc-converter-source-preview{display:grid;align-content:start;gap:14px;animation:ddc-import-panel-in .24s cubic-bezier(.22,1,.36,1)}.ddc-converter-source-preview[hidden]{display:none}.ddc-converter-source-preview-head{display:grid;gap:5px}.ddc-converter-source-preview-kicker{display:flex;align-items:center;gap:7px;color:var(--success-color,#47a36b);font-size:10px;font-weight:800;letter-spacing:.07em;text-transform:uppercase}.ddc-converter-source-preview-kicker ha-icon{width:15px}.ddc-converter-source-preview-head h3{margin:0;font-size:20px;letter-spacing:-.02em;line-height:1.2}.ddc-converter-source-preview-head p{margin:0;color:var(--secondary-text-color,#9eacb8);font-size:12px;line-height:1.5}.ddc-converter-source-window{overflow:hidden;border:1px solid var(--ddc-import-line);border-radius:14px;background:color-mix(in oklab,var(--primary-background-color,#0d151d) 82%,transparent);box-shadow:0 14px 34px rgba(0,0,0,.12)}.ddc-converter-source-window-bar{display:flex;align-items:center;gap:6px;padding:8px 10px;border-bottom:1px solid var(--ddc-import-line)}.ddc-converter-source-window-dot{width:5px;height:5px;border-radius:50%;background:color-mix(in oklab,var(--secondary-text-color,#9eacb8) 44%,transparent)}.ddc-converter-source-window-title{margin-left:3px;overflow:hidden;color:var(--secondary-text-color,#9eacb8);font-size:9px;font-weight:700;text-overflow:ellipsis;white-space:nowrap}.ddc-converter-source-preview-tabs{display:flex;gap:3px;padding:7px 8px 0;overflow-x:auto;scrollbar-width:none}.ddc-converter-source-preview-tabs::-webkit-scrollbar{display:none}.ddc-converter-source-preview-tab{display:inline-flex;align-items:center;gap:5px;padding:6px 8px;border:0;border-radius:7px 7px 2px 2px;background:transparent;color:var(--secondary-text-color,#9eacb8);font:720 9px/1 inherit;white-space:nowrap;cursor:pointer;transition:background .16s ease,color .16s ease}.ddc-converter-source-preview-tab:hover{color:var(--primary-text-color,#e8eef3);background:color-mix(in oklab,var(--primary-text-color,#fff) 5%,transparent)}.ddc-converter-source-preview-tab[aria-selected="true"]{background:var(--ddc-import-raised);color:var(--primary-text-color,#e8eef3)}.ddc-converter-source-preview-tab ha-icon{width:12px;height:12px}.ddc-converter-source-preview-stage{position:relative;height:260px;overflow:hidden;background:color-mix(in oklab,var(--primary-background-color,#0d151d) 91%,transparent)}.ddc-converter-source-preview-canvas{position:absolute;inset:12px auto auto 12px;width:1080px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));align-items:start;gap:18px;transform-origin:top left;pointer-events:none}.ddc-converter-source-preview-canvas.panel{grid-template-columns:1fr}.ddc-converter-source-preview-canvas.vertical{grid-template-columns:repeat(2,minmax(0,1fr))}.ddc-converter-source-preview-card{min-width:0}.ddc-converter-source-preview-card>*{display:block;max-width:100%}.ddc-converter-source-preview-empty{position:absolute;inset:0;display:grid;place-items:center;padding:30px;color:var(--secondary-text-color,#9eacb8);font-size:11px;text-align:center}.ddc-converter-source-preview-loading{position:absolute;inset:0;z-index:2;display:grid;place-items:center;background:color-mix(in oklab,var(--primary-background-color,#0d151d) 92%,transparent);color:var(--secondary-text-color,#9eacb8)}.ddc-converter-source-preview-loading[hidden]{display:none}.ddc-converter-source-preview-loading span{display:grid;justify-items:center;gap:10px;font-size:11px}.ddc-converter-source-preview-loading i{width:22px;height:22px;border:2px solid color-mix(in oklab,var(--primary-color,#3ca5dd) 22%,transparent);border-top-color:var(--primary-color,#3ca5dd);border-radius:50%;animation:ddc-import-spin .8s linear infinite}.ddc-converter-source-preview-note{display:flex;align-items:flex-start;gap:7px;color:var(--secondary-text-color,#9eacb8);font-size:10px;line-height:1.45}.ddc-converter-source-preview-note ha-icon{width:14px;flex:none;color:var(--primary-color,#3ca5dd)}
        .ddc-converter-mini-preview{overflow:hidden;border:1px solid var(--ddc-import-line);border-radius:14px;background:color-mix(in oklab,var(--primary-background-color,#0d151d) 72%,transparent);box-shadow:0 12px 30px rgba(0,0,0,.08)}.ddc-converter-mini-head{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 11px;border-bottom:1px solid var(--ddc-import-line)}.ddc-converter-mini-title{display:flex;align-items:center;gap:7px;font-size:10px;font-weight:800;letter-spacing:.055em;text-transform:uppercase}.ddc-converter-mini-title ha-icon{width:15px;color:var(--primary-color,#3ca5dd)}.ddc-converter-mini-meta{overflow:hidden;color:var(--secondary-text-color,#9eacb8);font-size:9px;text-overflow:ellipsis;text-transform:capitalize;white-space:nowrap}.ddc-converter-mini-tabs{display:flex;gap:3px;padding:7px 8px 0;overflow-x:auto;scrollbar-width:none}.ddc-converter-mini-tabs::-webkit-scrollbar{display:none}.ddc-converter-mini-tabs:empty{display:none}.ddc-converter-mini-tab{min-width:0;display:inline-flex;align-items:center;gap:5px;padding:5px 8px;border:0;border-radius:7px 7px 3px 3px;background:transparent;color:var(--secondary-text-color,#9eacb8);font:720 9px/1 inherit;white-space:nowrap;cursor:pointer;transition:background .16s ease,color .16s ease}.ddc-converter-mini-tab:hover{color:var(--primary-text-color,#e8eef3);background:color-mix(in oklab,var(--primary-text-color,#fff) 5%,transparent)}.ddc-converter-mini-tab[aria-selected="true"]{background:var(--ddc-import-raised);color:var(--primary-text-color,#e8eef3)}.ddc-converter-mini-tab ha-icon{width:12px;height:12px}.ddc-converter-mini-stage{height:190px;display:grid;place-items:center;overflow:hidden;padding:10px;background:linear-gradient(color-mix(in oklab,var(--divider-color,rgba(128,145,160,.25)) 18%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in oklab,var(--divider-color,rgba(128,145,160,.25)) 18%,transparent) 1px,transparent 1px),color-mix(in oklab,var(--primary-background-color,#0d151d) 82%,transparent);background-size:10px 10px}.ddc-converter-mini-canvas{width:100%;height:100%;filter:drop-shadow(0 8px 14px rgba(0,0,0,.16))}.ddc-converter-mini-canvas-bg{fill:color-mix(in oklab,var(--card-background-color,#15202b) 91%,var(--primary-background-color,#0d151d) 9%);stroke:var(--ddc-import-line);stroke-width:1;vector-effect:non-scaling-stroke}.ddc-converter-mini-card{fill:color-mix(in oklab,var(--ddc-import-raised) 94%,transparent);stroke:color-mix(in oklab,var(--primary-text-color,#fff) 16%,transparent);stroke-width:1;vector-effect:non-scaling-stroke}.ddc-converter-mini-card-accent{fill:color-mix(in oklab,var(--primary-color,#3ca5dd) 64%,var(--ddc-import-raised))}.ddc-converter-mini-card-accent.light{fill:color-mix(in oklab,var(--warning-color,#d99a28) 72%,var(--ddc-import-raised))}.ddc-converter-mini-card-accent.climate{fill:color-mix(in oklab,#5b9bcf 72%,var(--ddc-import-raised))}.ddc-converter-mini-card-accent.media{fill:color-mix(in oklab,#8b78b5 66%,var(--ddc-import-raised))}.ddc-converter-mini-card-accent.camera{fill:color-mix(in oklab,#648d7d 68%,var(--ddc-import-raised))}.ddc-converter-mini-card-accent.sensor{fill:color-mix(in oklab,#6f9a78 66%,var(--ddc-import-raised))}.ddc-converter-mini-card-title{fill:var(--primary-text-color,#e8eef3);font-weight:750}.ddc-converter-mini-card-type{fill:var(--secondary-text-color,#9eacb8);font-weight:600;text-transform:capitalize}.ddc-converter-mini-more{display:flex;justify-content:center;padding:0 10px 9px;color:var(--secondary-text-color,#9eacb8);font-size:9px}.ddc-converter-mini-more[hidden]{display:none}
        .ddc-converter-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.ddc-converter-stat{display:grid;gap:2px;padding:11px;border-radius:11px;background:var(--ddc-import-raised);border:1px solid color-mix(in oklab,var(--ddc-import-line) 75%,transparent)}.ddc-converter-stat strong{font-size:18px;line-height:1.15;letter-spacing:-.02em}.ddc-converter-stat span{color:var(--secondary-text-color,#9eacb8);font-size:10px;font-weight:750;text-transform:uppercase;letter-spacing:.045em}.ddc-converter-stat.warning strong{color:var(--warning-color,#d99a28)}
        .ddc-converter-review-label{margin:0 0 8px;color:var(--secondary-text-color,#9eacb8);font-size:10px;font-weight:800;letter-spacing:.065em;text-transform:uppercase}.ddc-converter-view-list,.ddc-converter-warning-list{display:grid;gap:7px}.ddc-converter-view{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:10px;padding:10px 11px;border-radius:11px;background:color-mix(in oklab,var(--ddc-import-raised) 82%,transparent);border:1px solid color-mix(in oklab,var(--ddc-import-line) 68%,transparent);font-size:12px}.ddc-converter-view-icon{display:grid;place-items:center;width:29px;height:29px;border-radius:9px;background:color-mix(in oklab,var(--primary-color,#3ca5dd) 11%,transparent);color:var(--primary-color,#3ca5dd)}.ddc-converter-view-icon ha-icon{width:16px}.ddc-converter-view-copy{min-width:0;display:grid;gap:2px}.ddc-converter-view-copy strong{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px}.ddc-converter-view-copy small{color:var(--secondary-text-color,#9eacb8);font-size:10px;text-transform:capitalize}.ddc-converter-view-count{color:var(--secondary-text-color,#9eacb8);font-size:11px;font-weight:700;white-space:nowrap}.ddc-converter-warning{display:flex;gap:8px;align-items:flex-start;padding:9px 10px;border-radius:10px;background:color-mix(in oklab,var(--warning-color,#d99a28) 10%,transparent);color:var(--primary-text-color,#e8eef3);font-size:11px;line-height:1.45}.ddc-converter-warning ha-icon{width:16px;flex:none;color:var(--warning-color,#d99a28)}
        .ddc-converter-status-wrap{display:grid;gap:7px}.ddc-converter-status{display:flex;align-items:flex-start;gap:8px;margin:0;color:var(--secondary-text-color,#9eacb8);font-size:12px;line-height:1.45}.ddc-converter-status ha-icon{width:16px;flex:none;color:var(--primary-color,#3ca5dd)}.ddc-converter-error{margin:0;padding:10px 11px;border-radius:10px;background:color-mix(in oklab,var(--error-color,#d94b55) 10%,transparent);color:var(--error-color,#d94b55);font-size:12px;line-height:1.45}
        .ddc-converter-foot{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:16px 28px;border-top:1px solid var(--ddc-import-line);background:color-mix(in oklab,var(--ddc-import-surface) 96%,transparent)}.ddc-converter-footnote{display:flex;align-items:center;gap:8px;min-width:0;color:var(--secondary-text-color,#9eacb8);font-size:11px}.ddc-converter-footnote ha-icon{width:16px;flex:none;color:var(--success-color,#47a36b)}.ddc-converter-actions{display:flex;align-items:center;gap:9px;flex:none}
        .ddc-converter-btn{min-height:42px;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:0 15px;border:1px solid var(--ddc-import-line);border-radius:11px;background:var(--ddc-import-raised);color:var(--primary-text-color,#e8eef3);font:740 12px/1 inherit;cursor:pointer;transition:transform .16s ease,background .16s ease,border-color .16s ease,opacity .16s ease}.ddc-converter-btn:hover:not(:disabled){transform:translateY(-1px);border-color:color-mix(in oklab,var(--primary-color,#3ca5dd) 42%,var(--ddc-import-line))}.ddc-converter-btn.primary{min-width:154px;border-color:color-mix(in oklab,var(--primary-color,#3ca5dd) 72%,transparent);background:var(--primary-color,#2386bd);color:var(--text-primary-color,#f7fbff);box-shadow:0 10px 24px color-mix(in oklab,var(--primary-color,#3ca5dd) 19%,transparent)}.ddc-converter-btn.primary:hover:not(:disabled){background:color-mix(in oklab,var(--primary-color,#2386bd) 88%,var(--primary-text-color,#fff) 12%)}.ddc-converter-btn.ghost{background:transparent}.ddc-converter-btn.icon{width:42px;padding:0}.ddc-converter-btn:disabled{opacity:.45;cursor:not-allowed}.ddc-converter-dialog[aria-busy="true"] .ddc-converter-btn{pointer-events:none}
        @keyframes ddc-import-panel-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}@keyframes ddc-import-spin{to{transform:rotate(360deg)}}
        @media (prefers-reduced-motion:reduce){.ddc-converter-source-panel,.ddc-converter-review-ready,.ddc-converter-source-preview{animation:none}.ddc-converter-source-preview-loading i{animation:none}.ddc-converter-btn,.ddc-converter-source-tab,.ddc-converter-dropzone,.ddc-converter-mini-tab,.ddc-converter-source-preview-tab{transition:none}}
        @media (max-width:780px){.ddc-converter-overlay{align-items:end;padding:8px}.ddc-converter-dialog{width:100%;height:min(94vh,860px);border-radius:20px 20px 12px 12px}.ddc-converter-head{padding:19px 18px 16px}.ddc-converter-subtitle{display:none}.ddc-converter-body{display:block;overflow:auto}.ddc-converter-source,.ddc-converter-review{overflow:visible;padding:20px 18px}.ddc-converter-review{border-left:0;border-top:1px solid var(--ddc-import-line)}.ddc-converter-source-tabs{grid-template-columns:1fr}.ddc-converter-source-tab{justify-content:flex-start;padding:0 14px}.ddc-converter-dropzone{min-height:190px}.ddc-converter-foot{align-items:stretch;padding:13px 18px}.ddc-converter-footnote{display:none}.ddc-converter-actions{width:100%}.ddc-converter-actions .ddc-converter-btn{flex:1}.ddc-converter-actions .ddc-converter-btn.ghost{flex:0 0 auto}}
      </style>
    `;
  },

  _openDashboardConverter_() {
    if (!this.shadowRoot) return;
    this.shadowRoot.getElementById?.(DASHBOARD_CONVERTER_MODAL_ID)?.remove?.();

    const overlay = document.createElement('div');
    overlay.id = DASHBOARD_CONVERTER_MODAL_ID;
    overlay.className = 'ddc-converter-overlay';
    overlay.innerHTML = `
      ${this._dashboardConverterModalStyles_()}
      <div class="ddc-converter-dialog" role="dialog" aria-modal="true" aria-labelledby="ddc-converter-title">
        <div class="ddc-converter-head">
          <div class="ddc-converter-heading">
            <div class="ddc-converter-eyebrow"><ha-icon icon="mdi:transit-transfer"></ha-icon><span>Lovelace transfer assistant</span></div>
            <h2 class="ddc-converter-title" id="ddc-converter-title">Import Existing Lovelace Dashboard</h2>
            <p class="ddc-converter-subtitle">Choose a source, review how every view will be rebuilt, then create an editable Drag &amp; Drop copy.</p>
          </div>
          <button type="button" class="ddc-converter-btn icon ghost ddc-converter-close" data-action="close" aria-label="Close import assistant"><ha-icon icon="mdi:close"></ha-icon></button>
          <div class="ddc-converter-progress" aria-label="Import progress">
            <span class="ddc-converter-step is-active" data-phase="source"><b>1</b><span>Choose source</span></span>
            <span class="ddc-converter-step" data-phase="review"><b>2</b><span>Review structure</span></span>
            <span class="ddc-converter-step" data-phase="import"><b>3</b><span>Import copy</span></span>
          </div>
        </div>
        <div class="ddc-converter-body">
          <section class="ddc-converter-source" aria-label="Dashboard source">
            <div class="ddc-converter-source-tabs" role="tablist" aria-label="Choose import source">
              <button type="button" class="ddc-converter-source-tab" role="tab" aria-selected="true" aria-controls="ddc-source-home-assistant" data-source-mode="ha"><ha-icon icon="mdi:home-assistant"></ha-icon><span>Home Assistant</span></button>
              <button type="button" class="ddc-converter-source-tab" role="tab" aria-selected="false" aria-controls="ddc-source-upload" data-source-mode="upload"><ha-icon icon="mdi:file-upload-outline"></ha-icon><span>Upload file</span></button>
              <button type="button" class="ddc-converter-source-tab" role="tab" aria-selected="false" aria-controls="ddc-source-paste" data-source-mode="paste"><ha-icon icon="mdi:code-json"></ha-icon><span>Paste YAML</span></button>
            </div>

            <div class="ddc-converter-source-panel" id="ddc-source-home-assistant" role="tabpanel" data-source-panel="ha">
              <div class="ddc-converter-section-head">
                <h3>Select a dashboard</h3>
                <p>We read the Lovelace configuration directly from Home Assistant and leave the original untouched.</p>
              </div>
              <div class="ddc-converter-field">
                <label for="ddc-converter-source">Available dashboards</label>
                <select id="ddc-converter-source" class="ddc-converter-select"><option value="">Loading dashboards...</option></select>
              </div>
              <div class="ddc-converter-source-note"><ha-icon icon="mdi:shield-check-outline"></ha-icon><span>This imports a copy. The selected dashboard and its YAML are never changed.</span></div>
            </div>

            <div class="ddc-converter-source-panel" id="ddc-source-upload" role="tabpanel" data-source-panel="upload" hidden>
              <div class="ddc-converter-section-head">
                <h3>Upload a Lovelace file</h3>
                <p>Use a YAML or JSON export up to 5 MB. Drop it below or browse from this device.</p>
              </div>
              <input type="file" accept=".yaml,.yml,.json,application/json,text/yaml,text/plain" hidden data-file-input>
              <button type="button" class="ddc-converter-dropzone" data-action="file">
                <span class="ddc-converter-drop-inner">
                  <span class="ddc-converter-drop-icon"><ha-icon icon="mdi:tray-arrow-up"></ha-icon></span>
                  <strong>Drop a dashboard file here</strong>
                  <span>or click to choose YAML / JSON</span>
                  <span class="ddc-converter-file-name" data-file-name hidden></span>
                </span>
              </button>
            </div>

            <div class="ddc-converter-source-panel" id="ddc-source-paste" role="tabpanel" data-source-panel="paste" hidden>
              <div class="ddc-converter-section-head">
                <h3>Paste raw Lovelace configuration</h3>
                <p>Paste the complete dashboard config. Both YAML and JSON are detected automatically.</p>
              </div>
              <div class="ddc-converter-field">
                <label for="ddc-converter-text">Lovelace YAML or JSON</label>
                <textarea id="ddc-converter-text" class="ddc-converter-textarea" spellcheck="false" aria-describedby="ddc-converter-paste-help"></textarea>
              </div>
              <div class="ddc-converter-source-note" id="ddc-converter-paste-help"><ha-icon icon="mdi:information-outline"></ha-icon><span>Tip: open Raw configuration editor in Home Assistant and copy the complete dashboard.</span></div>
            </div>
          </section>

          <aside class="ddc-converter-review" aria-label="Import review">
            <div class="ddc-converter-review-empty" data-review-empty>
              <span class="ddc-converter-review-empty-mark"><ha-icon icon="mdi:view-dashboard-outline"></ha-icon></span>
              <h3>Your import map will appear here</h3>
              <p>Review tabs, card totals, responsive layout choices and anything that needs attention before the canvas changes.</p>
            </div>
            <div class="ddc-converter-source-preview" data-source-preview hidden>
              <div class="ddc-converter-source-preview-head">
                <span class="ddc-converter-source-preview-kicker"><ha-icon icon="mdi:eye-outline"></ha-icon><span>Current Lovelace dashboard</span></span>
                <h3 data-source-preview-title>Dashboard preview</h3>
                <p>This is the selected dashboard before Drag &amp; Drop conversion.</p>
              </div>
              <div class="ddc-converter-source-window">
                <div class="ddc-converter-source-window-bar">
                  <i class="ddc-converter-source-window-dot"></i><i class="ddc-converter-source-window-dot"></i><i class="ddc-converter-source-window-dot"></i>
                  <span class="ddc-converter-source-window-title" data-source-preview-window-title>Lovelace</span>
                </div>
                <div class="ddc-converter-source-preview-tabs" data-source-preview-tabs role="tablist" aria-label="Current Lovelace view"></div>
                <div class="ddc-converter-source-preview-stage" data-source-preview-stage>
                  <div class="ddc-converter-source-preview-loading" data-source-preview-loading hidden><span><i></i><b>Loading live cards…</b></span></div>
                </div>
              </div>
              <div class="ddc-converter-source-preview-note"><ha-icon icon="mdi:cursor-default-click-outline"></ha-icon><span>Preview cards are read-only. Use the tabs above to inspect each current Lovelace view.</span></div>
            </div>
            <div class="ddc-converter-review-ready" data-review-ready hidden>
              <div class="ddc-converter-review-head">
                <span class="ddc-converter-review-kicker">Ready to rebuild</span>
                <h3 data-review-title>Imported dashboard</h3>
                <p data-review-copy>Each Lovelace view becomes a Drag &amp; Drop tab.</p>
              </div>
              <div class="ddc-converter-mini-preview" data-dashboard-preview>
                <div class="ddc-converter-mini-head">
                  <span class="ddc-converter-mini-title"><ha-icon icon="mdi:monitor-dashboard"></ha-icon><span>Layout preview</span></span>
                  <span class="ddc-converter-mini-meta" data-preview-meta></span>
                </div>
                <div class="ddc-converter-mini-tabs" data-preview-tabs role="tablist" aria-label="Preview dashboard tab"></div>
                <div class="ddc-converter-mini-stage" data-preview-stage></div>
                <div class="ddc-converter-mini-more" data-preview-more hidden></div>
              </div>
              <div class="ddc-converter-stats" data-preview>
                <div class="ddc-converter-stat"><strong>0</strong><span>Tabs</span></div>
                <div class="ddc-converter-stat"><strong>0</strong><span>Cards</span></div>
                <div class="ddc-converter-stat warning"><strong>0</strong><span>Warnings</span></div>
              </div>
              <div data-view-section>
                <p class="ddc-converter-review-label">Import map</p>
                <div class="ddc-converter-view-list" data-view-list></div>
              </div>
              <div data-warning-section hidden>
                <p class="ddc-converter-review-label">Needs attention</p>
                <div class="ddc-converter-warning-list" data-warning-list></div>
              </div>
            </div>
            <div class="ddc-converter-status-wrap">
              <p class="ddc-converter-status" data-status aria-live="polite"><ha-icon icon="mdi:information-outline"></ha-icon><span>Choose a source to begin.</span></p>
              <p class="ddc-converter-error" data-error role="alert" hidden></p>
            </div>
          </aside>
        </div>
        <div class="ddc-converter-foot">
          <div class="ddc-converter-footnote"><ha-icon icon="mdi:check-decagram-outline"></ha-icon><span>Your original Lovelace dashboard stays exactly as it is.</span></div>
          <div class="ddc-converter-actions">
            <button type="button" class="ddc-converter-btn ghost" data-action="close">Cancel</button>
            <button type="button" class="ddc-converter-btn primary" data-action="review"><ha-icon icon="mdi:arrow-right"></ha-icon><span>Review dashboard</span></button>
            <button type="button" class="ddc-converter-btn primary" data-action="convert" hidden disabled><ha-icon icon="mdi:import"></ha-icon><span>Import dashboard copy</span></button>
          </div>
        </div>
      </div>
    `;

    let previewTimer = 0;
    let previewPayload = null;
    let sourceMode = 'ha';
    let loadedDashboardConfig = null;
    let loadedDashboardUrlPath = null;
    let uploadedSourceText = '';
    let sourcePreviewSequence = 0;
    let sourcePreviewRenderSequence = 0;
    let sourcePreviewLoading = false;
    let sourcePreviewResizeObserver = null;
    const previouslyFocused = this.shadowRoot.activeElement || document.activeElement;
    const dialog = overlay.querySelector('.ddc-converter-dialog');
    const sourceSelect = overlay.querySelector('#ddc-converter-source');
    const textInput = overlay.querySelector('#ddc-converter-text');
    const fileInput = overlay.querySelector('[data-file-input]');
    const fileNameEl = overlay.querySelector('[data-file-name]');
    const dropzone = overlay.querySelector('.ddc-converter-dropzone');
    const statusEl = overlay.querySelector('[data-status]');
    const statusTextEl = statusEl?.querySelector?.('span') || statusEl;
    const errorEl = overlay.querySelector('[data-error]');
    const previewEl = overlay.querySelector('[data-preview]');
    const viewListEl = overlay.querySelector('[data-view-list]');
    const warningListEl = overlay.querySelector('[data-warning-list]');
    const warningSectionEl = overlay.querySelector('[data-warning-section]');
    const reviewEmptyEl = overlay.querySelector('[data-review-empty]');
    const sourcePreviewEl = overlay.querySelector('[data-source-preview]');
    const sourcePreviewTitleEl = overlay.querySelector('[data-source-preview-title]');
    const sourcePreviewWindowTitleEl = overlay.querySelector('[data-source-preview-window-title]');
    const sourcePreviewTabsEl = overlay.querySelector('[data-source-preview-tabs]');
    const sourcePreviewStageEl = overlay.querySelector('[data-source-preview-stage]');
    const sourcePreviewLoadingEl = overlay.querySelector('[data-source-preview-loading]');
    const reviewReadyEl = overlay.querySelector('[data-review-ready]');
    const reviewTitleEl = overlay.querySelector('[data-review-title]');
    const reviewCopyEl = overlay.querySelector('[data-review-copy]');
    const previewTabsEl = overlay.querySelector('[data-preview-tabs]');
    const previewStageEl = overlay.querySelector('[data-preview-stage]');
    const previewMetaEl = overlay.querySelector('[data-preview-meta]');
    const previewMoreEl = overlay.querySelector('[data-preview-more]');
    const reviewBtn = overlay.querySelector('[data-action="review"]');
    const convertBtn = overlay.querySelector('[data-action="convert"]');

    if (textInput) {
      textInput.placeholder = [
        'title: Wall panel',
        'views:',
        '  - title: Home',
        '    path: home',
        '    cards:',
        '      - type: entities',
        '        entities:',
        '          - light.living_room',
      ].join('\n');
    }

    const close = ({ force = false } = {}) => {
      if (!force && dialog?.getAttribute?.('aria-busy') === 'true') return;
      if (previewTimer) clearTimeout(previewTimer);
      sourcePreviewSequence += 1;
      sourcePreviewResizeObserver?.disconnect?.();
      overlay.remove();
      requestAnimationFrame(() => previouslyFocused?.focus?.());
    };
    const setError = (message = '') => {
      if (!errorEl) return;
      errorEl.hidden = !message;
      errorEl.textContent = message;
    };
    const setStatus = (message = '') => {
      if (statusTextEl) statusTextEl.textContent = message;
    };
    const setPhase = (phase = 'source') => {
      const order = ['source', 'review', 'import'];
      const current = Math.max(0, order.indexOf(phase));
      overlay.querySelectorAll('[data-phase]').forEach((step) => {
        const index = order.indexOf(step.dataset.phase);
        step.classList.toggle('is-active', index === current);
        step.classList.toggle('is-complete', index < current);
      });
    };
    const sourceIsReady = () => {
      if (sourceMode === 'ha') {
        return !!sourceSelect
          && sourceSelect.dataset.available === 'true'
          && !sourcePreviewLoading
          && !!loadedDashboardConfig
          && loadedDashboardUrlPath === (sourceSelect.value || '');
      }
      if (sourceMode === 'upload') return !!uploadedSourceText.trim();
      return !!String(textInput?.value || '').trim();
    };
    const updateActions = () => {
      const busy = dialog?.getAttribute?.('aria-busy') === 'true';
      if (reviewBtn) {
        reviewBtn.hidden = !!previewPayload;
        reviewBtn.disabled = busy || !sourceIsReady();
      }
      if (convertBtn) {
        convertBtn.hidden = !previewPayload;
        convertBtn.disabled = busy || !previewPayload;
        const label = convertBtn.querySelector('span');
        if (label && previewPayload) label.textContent = `Import ${previewPayload.summary?.cards || previewPayload.cards?.length || 0} cards`;
      }
    };
    const resetReview = () => {
      sourcePreviewLoading = false;
      sourcePreviewRenderSequence += 1;
      if (reviewEmptyEl) reviewEmptyEl.hidden = false;
      if (sourcePreviewEl) sourcePreviewEl.hidden = true;
      if (reviewReadyEl) reviewReadyEl.hidden = true;
      if (sourcePreviewLoadingEl) sourcePreviewLoadingEl.hidden = true;
      sourcePreviewTabsEl?.replaceChildren?.();
      sourcePreviewStageEl?.querySelectorAll?.('.ddc-converter-source-preview-canvas,.ddc-converter-source-preview-empty')?.forEach?.((node) => node.remove());
      sourcePreviewResizeObserver?.disconnect?.();
      sourcePreviewResizeObserver = null;
      previewTabsEl?.replaceChildren?.();
      previewStageEl?.replaceChildren?.();
      if (previewMetaEl) previewMetaEl.textContent = '';
      if (previewMoreEl) {
        previewMoreEl.hidden = true;
        previewMoreEl.textContent = '';
      }
      viewListEl?.replaceChildren?.();
      warningListEl?.replaceChildren?.();
      if (warningSectionEl) warningSectionEl.hidden = true;
    };
    const invalidatePreview = (message = '') => {
      previewPayload = null;
      resetReview();
      setPhase('source');
      if (message) setStatus(message);
      updateActions();
    };
    const setBusy = (busy = false) => {
      dialog?.setAttribute?.('aria-busy', busy ? 'true' : 'false');
      overlay.querySelectorAll('button,select,textarea').forEach((control) => { control.disabled = busy; });
      updateActions();
    };
    const setSourcePreviewLoading = (loading = false, label = 'Loading live cards…') => {
      sourcePreviewLoading = !!loading;
      if (sourcePreviewEl) sourcePreviewEl.hidden = false;
      if (reviewEmptyEl) reviewEmptyEl.hidden = true;
      if (reviewReadyEl) reviewReadyEl.hidden = true;
      if (sourcePreviewLoadingEl) {
        sourcePreviewLoadingEl.hidden = !loading;
        const copy = sourcePreviewLoadingEl.querySelector('b');
        if (copy) copy.textContent = label;
      }
      updateActions();
    };
    const fitSourcePreviewCanvas = () => {
      const canvas = sourcePreviewStageEl?.querySelector?.('.ddc-converter-source-preview-canvas');
      if (!canvas || !sourcePreviewStageEl) return;
      const canvasWidth = Math.max(640, Number(canvas.dataset.canvasWidth || 1080) || 1080);
      const availableWidth = Math.max(1, Number(sourcePreviewStageEl.clientWidth || 0) - 24);
      const scale = Math.max(0.18, Math.min(0.58, availableWidth / canvasWidth));
      const renderedWidth = canvasWidth * scale;
      canvas.style.left = `${Math.max(12, Math.round((sourcePreviewStageEl.clientWidth - renderedWidth) / 2))}px`;
      canvas.style.transform = `scale(${scale})`;
      canvas.style.minHeight = `${Math.ceil((Math.max(1, sourcePreviewStageEl.clientHeight) - 24) / scale)}px`;
    };
    const renderSourcePreview = async (sourceConfig = {}, requestedViewId = '') => {
      if (!sourcePreviewTabsEl || !sourcePreviewStageEl) return null;
      const renderSequence = ++sourcePreviewRenderSequence;
      const model = this._dashboardConverterSourcePreviewModel_(sourceConfig, requestedViewId);
      setSourcePreviewLoading(true, 'Rendering current Lovelace view…');
      setError('');
      if (sourcePreviewTitleEl) sourcePreviewTitleEl.textContent = model.title || 'Lovelace dashboard';
      if (sourcePreviewWindowTitleEl) sourcePreviewWindowTitleEl.textContent = model.activeViewLabel;
      sourcePreviewTabsEl.replaceChildren();
      model.views.forEach((view) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'ddc-converter-source-preview-tab';
        button.dataset.sourcePreviewView = view.id;
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', String(view.id === model.activeViewId));
        button.tabIndex = view.id === model.activeViewId ? 0 : -1;
        if (view.icon) {
          const icon = document.createElement('ha-icon');
          icon.setAttribute('icon', view.icon);
          button.appendChild(icon);
        }
        const label = document.createElement('span');
        label.textContent = view.label;
        button.appendChild(label);
        const selectView = async (viewId) => {
          await renderSourcePreview(sourceConfig, viewId);
          requestAnimationFrame(() => {
            Array.from(sourcePreviewTabsEl.querySelectorAll('[data-source-preview-view]'))
              .find((candidate) => candidate.dataset.sourcePreviewView === viewId)
              ?.focus?.();
          });
        };
        button.addEventListener('click', () => selectView(view.id));
        button.addEventListener('keydown', (event) => {
          if (!['ArrowLeft', 'ArrowRight'].includes(event.key) || model.views.length < 2) return;
          event.preventDefault();
          const currentIndex = model.views.findIndex((candidate) => candidate.id === view.id);
          const delta = event.key === 'ArrowRight' ? 1 : -1;
          const nextView = model.views[(currentIndex + delta + model.views.length) % model.views.length];
          if (nextView) selectView(nextView.id);
        });
        sourcePreviewTabsEl.appendChild(button);
      });

      sourcePreviewStageEl.querySelectorAll('.ddc-converter-source-preview-canvas,.ddc-converter-source-preview-empty').forEach((node) => node.remove());
      if (!model.cards.length) {
        const empty = document.createElement('div');
        empty.className = 'ddc-converter-source-preview-empty';
        empty.textContent = 'This Lovelace view has no previewable cards.';
        sourcePreviewStageEl.appendChild(empty);
      } else {
        const canvas = document.createElement('div');
        canvas.className = `ddc-converter-source-preview-canvas ${model.layout}`;
        canvas.dataset.canvasWidth = model.layout === 'panel' ? '960' : '1080';
        sourcePreviewStageEl.appendChild(canvas);
        const renderedCards = await Promise.all(model.cards.map(async (card) => {
          const wrap = document.createElement('div');
          wrap.className = 'ddc-converter-source-preview-card';
          const element = await this._createCardSafely_(card);
          element.dataset.dashboardSourcePreviewCard = 'true';
          try { element.hass = this.hass; } catch {}
          wrap.appendChild(element);
          return wrap;
        }));
        if (renderSequence !== sourcePreviewRenderSequence || !overlay.isConnected) return null;
        canvas.append(...renderedCards);
        if (model.hiddenCardCount > 0) {
          const more = document.createElement('div');
          more.className = 'ddc-converter-source-preview-card';
          more.textContent = `+ ${model.hiddenCardCount} more cards`;
          more.style.cssText = 'padding:24px;border:1px dashed var(--divider-color);border-radius:12px;color:var(--secondary-text-color);text-align:center;';
          canvas.appendChild(more);
        }
      }
      if (renderSequence !== sourcePreviewRenderSequence || !overlay.isConnected) return null;
      sourcePreviewResizeObserver?.disconnect?.();
      if (typeof ResizeObserver === 'function' && sourcePreviewStageEl) {
        sourcePreviewResizeObserver = new ResizeObserver(() => fitSourcePreviewCanvas());
        sourcePreviewResizeObserver.observe(sourcePreviewStageEl);
      }
      requestAnimationFrame(() => fitSourcePreviewCanvas());
      setSourcePreviewLoading(false);
      return model;
    };
    const loadSelectedDashboardPreview = async () => {
      if (!sourceSelect || sourceSelect.dataset.available !== 'true') return null;
      const urlPath = sourceSelect.value || '';
      const sequence = ++sourcePreviewSequence;
      loadedDashboardConfig = null;
      loadedDashboardUrlPath = null;
      setSourcePreviewLoading(true, 'Reading the selected dashboard…');
      setError('');
      setStatus('Loading the current Lovelace dashboard preview…');
      try {
        const config = await this._fetchDashboardConverterDashboardConfig_(urlPath || null);
        if (sequence !== sourcePreviewSequence || !overlay.isConnected) return null;
        loadedDashboardConfig = config;
        loadedDashboardUrlPath = urlPath;
        const model = await renderSourcePreview(config);
        if (sequence !== sourcePreviewSequence || !overlay.isConnected) return null;
        setStatus(`Previewing “${model?.activeViewLabel || 'dashboard'}” as it currently appears in Lovelace. Review it when you are ready.`);
        return config;
      } catch (error) {
        if (sequence !== sourcePreviewSequence) return null;
        setSourcePreviewLoading(false);
        if (sourcePreviewEl) sourcePreviewEl.hidden = true;
        if (reviewEmptyEl) reviewEmptyEl.hidden = false;
        setStatus('The selected dashboard preview could not be loaded.');
        setError(String(error?.message || error));
        return null;
      } finally {
        if (sequence === sourcePreviewSequence) {
          sourcePreviewLoading = false;
          if (sourcePreviewLoadingEl) sourcePreviewLoadingEl.hidden = true;
          updateActions();
        }
      }
    };
    const renderDashboardPreview = (converted = null, requestedTabId = '') => {
      if (!converted || !previewTabsEl || !previewStageEl) return;
      const model = this._dashboardConverterPreviewModel_(converted, requestedTabId);
      previewTabsEl.replaceChildren();
      model.tabs.forEach((tab) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'ddc-converter-mini-tab';
        button.dataset.previewTabId = tab.id;
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', String(tab.id === model.activeTabId));
        button.tabIndex = tab.id === model.activeTabId ? 0 : -1;
        button.disabled = dialog?.getAttribute?.('aria-busy') === 'true';
        button.title = `Preview ${tab.label}`;
        if (tab.icon) {
          const icon = document.createElement('ha-icon');
          icon.setAttribute('icon', tab.icon);
          button.appendChild(icon);
        }
        const label = document.createElement('span');
        label.textContent = tab.label;
        button.appendChild(label);
        const selectTab = (tabId) => {
          renderDashboardPreview(converted, tabId);
          requestAnimationFrame(() => {
            Array.from(previewTabsEl.querySelectorAll('[data-preview-tab-id]'))
              .find((candidate) => candidate.dataset.previewTabId === tabId)
              ?.focus?.();
          });
        };
        button.addEventListener('click', () => selectTab(tab.id));
        button.addEventListener('keydown', (event) => {
          if (!['ArrowLeft', 'ArrowRight'].includes(event.key) || model.tabs.length < 2) return;
          event.preventDefault();
          const currentIndex = model.tabs.findIndex((candidate) => candidate.id === tab.id);
          const delta = event.key === 'ArrowRight' ? 1 : -1;
          const nextTab = model.tabs[(currentIndex + delta + model.tabs.length) % model.tabs.length];
          if (nextTab) selectTab(nextTab.id);
        });
        previewTabsEl.appendChild(button);
      });

      const svgNamespace = 'http://www.w3.org/2000/svg';
      const createSvgElement = (name, attributes = {}) => {
        const element = document.createElementNS(svgNamespace, name);
        Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, String(value)));
        return element;
      };
      const svg = createSvgElement('svg', {
        class: 'ddc-converter-mini-canvas',
        viewBox: `0 0 ${model.canvasWidth} ${model.canvasHeight}`,
        preserveAspectRatio: 'xMidYMid meet',
        role: 'img',
        'aria-label': `Preview of ${model.tabs.find((tab) => tab.id === model.activeTabId)?.label || 'dashboard'} layout`,
      });
      svg.appendChild(createSvgElement('rect', {
        class: 'ddc-converter-mini-canvas-bg',
        x: 0,
        y: 0,
        width: model.canvasWidth,
        height: model.canvasHeight,
        rx: Math.max(18, Math.min(model.canvasWidth, model.canvasHeight) * 0.025),
      }));
      model.entries.forEach((entry) => {
        const group = createSvgElement('g');
        const title = createSvgElement('title');
        title.textContent = `${entry.label} · ${entry.type}`;
        group.appendChild(title);
        const radius = Math.max(10, Math.min(28, Math.min(entry.width, entry.height) * 0.08));
        group.appendChild(createSvgElement('rect', {
          class: 'ddc-converter-mini-card',
          x: entry.x,
          y: entry.y,
          width: entry.width,
          height: entry.height,
          rx: radius,
        }));
        const accentWidth = Math.max(8, Math.min(18, entry.width * 0.035));
        group.appendChild(createSvgElement('rect', {
          class: `ddc-converter-mini-card-accent ${entry.category}`,
          x: entry.x,
          y: entry.y,
          width: accentWidth,
          height: entry.height,
          rx: Math.min(radius, accentWidth / 2),
        }));
        if (entry.width >= 150 && entry.height >= 62) {
          const padding = Math.max(18, Math.min(34, Math.min(entry.width, entry.height) * 0.12));
          const fontSize = Math.max(26, Math.min(46, entry.width * 0.085));
          const maxChars = Math.max(5, Math.floor((entry.width - padding * 2) / (fontSize * 0.58)));
          const shortLabel = entry.label.length > maxChars ? `${entry.label.slice(0, Math.max(1, maxChars - 1))}…` : entry.label;
          const label = createSvgElement('text', {
            class: 'ddc-converter-mini-card-title',
            x: entry.x + padding,
            y: entry.y + padding + fontSize * 0.72,
            'font-size': fontSize,
          });
          label.textContent = shortLabel;
          group.appendChild(label);
          if (entry.height >= fontSize * 2.6) {
            const detail = createSvgElement('text', {
              class: 'ddc-converter-mini-card-type',
              x: entry.x + padding,
              y: entry.y + padding + fontSize * 1.75,
              'font-size': Math.max(20, fontSize * 0.68),
            });
            detail.textContent = entry.type;
            group.appendChild(detail);
          }
        }
        svg.appendChild(group);
      });
      if (!model.entries.length) {
        const empty = createSvgElement('text', {
          class: 'ddc-converter-mini-card-type',
          x: model.canvasWidth / 2,
          y: model.canvasHeight / 2,
          'font-size': Math.max(28, model.canvasWidth * 0.025),
          'text-anchor': 'middle',
        });
        empty.textContent = 'This tab has no cards';
        svg.appendChild(empty);
      }
      previewStageEl.replaceChildren(svg);
      if (previewMetaEl) previewMetaEl.textContent = `${model.layoutLabel} · ${Math.round(model.canvasWidth)} × ${Math.round(model.canvasHeight)}`;
      if (previewMoreEl) {
        previewMoreEl.hidden = model.hiddenCardCount <= 0;
        previewMoreEl.textContent = model.hiddenCardCount > 0 ? `+ ${model.hiddenCardCount} more cards in this tab` : '';
      }
    };
    const renderPreview = (converted = null) => {
      if (!previewEl || !converted) return;
      const stats = converted.summary || {};
      const warnings = Array.isArray(stats.warnings) ? stats.warnings : [];
      const values = [stats.views || 0, stats.cards || 0, warnings.length];
      previewEl.querySelectorAll('strong').forEach((node, index) => { node.textContent = String(values[index] ?? 0); });
      if (reviewTitleEl) reviewTitleEl.textContent = converted.source_title || 'Imported dashboard';
      if (reviewCopyEl) {
        const customTypes = Array.isArray(stats.custom_card_types) ? stats.custom_card_types.length : 0;
        reviewCopyEl.textContent = customTypes
          ? `Views become tabs. ${customTypes} custom card type${customTypes === 1 ? '' : 's'} will be preserved as installed.`
          : 'Each Lovelace view becomes a tab with responsive, draggable card placement.';
      }
      renderDashboardPreview(converted);
      viewListEl?.replaceChildren?.();
      (Array.isArray(stats.view_details) ? stats.view_details : []).forEach((view) => {
        const row = document.createElement('div');
        row.className = 'ddc-converter-view';
        const iconWrap = document.createElement('span');
        iconWrap.className = 'ddc-converter-view-icon';
        const icon = document.createElement('ha-icon');
        icon.setAttribute('icon', 'mdi:tab');
        iconWrap.appendChild(icon);
        const copy = document.createElement('span');
        copy.className = 'ddc-converter-view-copy';
        const title = document.createElement('strong');
        title.textContent = view.title || view.id || 'View';
        const detail = document.createElement('small');
        detail.textContent = `${String(view.layout || 'grid')} layout · tab “${view.id}”`;
        copy.append(title, detail);
        const count = document.createElement('span');
        count.className = 'ddc-converter-view-count';
        count.textContent = `${Number(view.cards || 0)} card${Number(view.cards || 0) === 1 ? '' : 's'}`;
        row.append(iconWrap, copy, count);
        viewListEl?.appendChild(row);
      });
      warningListEl?.replaceChildren?.();
      warnings.slice(0, 8).forEach((warning) => {
        const row = document.createElement('div');
        row.className = 'ddc-converter-warning';
        const icon = document.createElement('ha-icon');
        icon.setAttribute('icon', 'mdi:alert-outline');
        const message = document.createElement('span');
        message.textContent = warning.message || String(warning);
        row.append(icon, message);
        warningListEl?.appendChild(row);
      });
      if (warnings.length > 8) {
        const more = document.createElement('div');
        more.className = 'ddc-converter-warning';
        more.textContent = `And ${warnings.length - 8} more warnings.`;
        warningListEl?.appendChild(more);
      }
      if (warningSectionEl) warningSectionEl.hidden = !warnings.length;
      if (reviewEmptyEl) reviewEmptyEl.hidden = true;
      if (sourcePreviewEl) sourcePreviewEl.hidden = true;
      sourcePreviewResizeObserver?.disconnect?.();
      sourcePreviewResizeObserver = null;
      if (reviewReadyEl) reviewReadyEl.hidden = false;
      setPhase('review');
    };
    const readCurrentSource = () => {
      if (sourceMode === 'ha') {
        if (!loadedDashboardConfig || loadedDashboardUrlPath !== (sourceSelect?.value || '')) {
          throw new Error('Select and review a Home Assistant dashboard first.');
        }
        return loadedDashboardConfig;
      }
      if (sourceMode === 'upload') return this._parseDashboardConverterText_(uploadedSourceText);
      return this._parseDashboardConverterText_(textInput?.value || '');
    };
    const previewCurrent = () => {
      setError('');
      const converted = this._convertLovelaceDashboardToDdc_(readCurrentSource());
      this._validateConvertedDashboardPayload_(converted);
      previewPayload = converted;
      renderPreview(converted);
      const warningCount = converted.summary?.warnings?.length || 0;
      setStatus(`${converted.summary.cards} cards are ready${warningCount ? ` with ${warningCount} item${warningCount === 1 ? '' : 's'} to review` : ''}.`);
      updateActions();
      return converted;
    };
    const analyzeCurrentSource = async () => {
      if (sourceMode === 'ha') {
        const urlPath = sourceSelect?.value || '';
        if (!loadedDashboardConfig || loadedDashboardUrlPath !== urlPath) {
          setStatus('Reading the selected dashboard from Home Assistant…');
          loadedDashboardConfig = await this._fetchDashboardConverterDashboardConfig_(urlPath || null);
          loadedDashboardUrlPath = urlPath;
        }
      }
      return previewCurrent();
    };
    const setSourceMode = (mode = 'ha', { focus = false } = {}) => {
      if (!['ha', 'upload', 'paste'].includes(mode)) return;
      sourceMode = mode;
      overlay.querySelectorAll('[data-source-mode]').forEach((button) => {
        const selected = button.dataset.sourceMode === mode;
        button.setAttribute('aria-selected', String(selected));
        button.tabIndex = selected ? 0 : -1;
      });
      overlay.querySelectorAll('[data-source-panel]').forEach((panel) => {
        panel.hidden = panel.dataset.sourcePanel !== mode;
      });
      setError('');
      invalidatePreview(
        mode === 'ha'
          ? 'Select a Home Assistant dashboard, then review its structure.'
          : mode === 'upload'
            ? (uploadedSourceText ? 'The selected file is ready to review.' : 'Drop a YAML or JSON dashboard file to continue.')
            : 'Paste Lovelace YAML or JSON. It will be analyzed automatically.'
      );
      if (focus) {
        const target = mode === 'ha' ? sourceSelect : mode === 'upload' ? dropzone : textInput;
        requestAnimationFrame(() => target?.focus?.());
      }
      if (mode === 'ha' && sourceSelect?.dataset?.available === 'true') {
        requestAnimationFrame(() => loadSelectedDashboardPreview());
      }
    };
    const acceptFile = async (file) => {
      if (!file) return;
      uploadedSourceText = '';
      if (fileNameEl) {
        fileNameEl.hidden = true;
        fileNameEl.textContent = '';
      }
      setSourceMode('upload');
      try {
        setBusy(true);
        setError('');
        setStatus('Reading and analyzing the dashboard file…');
        if (file.size > DASHBOARD_CONVERTER_MAX_SOURCE_CHARS) throw new Error('This file is larger than the 5 MB import limit.');
        uploadedSourceText = await file.text();
        if (fileNameEl) {
          fileNameEl.hidden = false;
          fileNameEl.textContent = `${file.name} · ${Math.max(1, Math.round(file.size / 1024))} KB`;
        }
        previewCurrent();
      } catch (err) {
        invalidatePreview('The file could not be analyzed.');
        setError(String(err?.message || err));
      } finally {
        setBusy(false);
        if (fileInput) fileInput.value = '';
      }
    };

    overlay.addEventListener('click', (ev) => { if (ev.target === overlay) close(); });
    overlay.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape') {
        ev.preventDefault();
        close();
        return;
      }
      if (ev.key === 'Tab') {
        const focusable = Array.from(overlay.querySelectorAll('button:not([disabled]):not([hidden]),select:not([disabled]),textarea:not([disabled])'))
          .filter((element) => !element.closest('[hidden]') && element.tabIndex >= 0);
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const activeElement = this.shadowRoot?.activeElement || document.activeElement;
        if (ev.shiftKey && activeElement === first) { ev.preventDefault(); last.focus(); }
        else if (!ev.shiftKey && activeElement === last) { ev.preventDefault(); first.focus(); }
      }
    });
    overlay.querySelectorAll('[data-action="close"]').forEach((btn) => btn.addEventListener('click', close));
    overlay.querySelectorAll('[data-source-mode]').forEach((button) => {
      button.addEventListener('click', () => setSourceMode(button.dataset.sourceMode, { focus: true }));
      button.addEventListener('keydown', (ev) => {
        if (!['ArrowLeft', 'ArrowRight'].includes(ev.key)) return;
        ev.preventDefault();
        const modes = ['ha', 'upload', 'paste'];
        const delta = ev.key === 'ArrowRight' ? 1 : -1;
        const next = modes[(modes.indexOf(sourceMode) + delta + modes.length) % modes.length];
        setSourceMode(next, { focus: true });
      });
    });
    overlay.querySelector('[data-action="file"]')?.addEventListener('click', () => fileInput?.click?.());
    fileInput?.addEventListener('change', () => acceptFile(fileInput.files?.[0]));
    ['dragenter', 'dragover'].forEach((eventName) => dropzone?.addEventListener(eventName, (ev) => {
      ev.preventDefault();
      dropzone.classList.add('is-dragging');
    }));
    ['dragleave', 'drop'].forEach((eventName) => dropzone?.addEventListener(eventName, (ev) => {
      ev.preventDefault();
      dropzone.classList.remove('is-dragging');
    }));
    dropzone?.addEventListener('drop', (ev) => acceptFile(ev.dataTransfer?.files?.[0]));
    textInput?.addEventListener('input', () => {
      invalidatePreview(String(textInput.value || '').trim() ? 'Analyzing pasted Lovelace configuration…' : 'Paste Lovelace YAML or JSON to continue.');
      setError('');
      if (previewTimer) clearTimeout(previewTimer);
      if (!String(textInput.value || '').trim()) return;
      previewTimer = setTimeout(() => {
        try { previewCurrent(); } catch (err) {
          invalidatePreview('The pasted configuration needs attention.');
          setError(String(err?.message || err));
        }
      }, 420);
    });
    sourceSelect?.addEventListener('change', async () => {
      sourcePreviewSequence += 1;
      setError('');
      invalidatePreview('Selection updated. Loading its current Lovelace preview…');
      await loadSelectedDashboardPreview();
    });
    reviewBtn?.addEventListener('click', async () => {
      try {
        setBusy(true);
        setError('');
        await analyzeCurrentSource();
      } catch (err) {
        invalidatePreview('We could not build an import map from this source.');
        setError(String(err?.message || err));
      } finally {
        setBusy(false);
      }
    });
    convertBtn?.addEventListener('click', async () => {
      try {
        if (!previewPayload) return;
        setPhase('import');
        setBusy(true);
        setError('');
        setStatus('Building responsive layouts and saving the imported dashboard…');
        const ok = await this._applyConvertedDashboardPayload_(previewPayload);
        if (ok !== false) {
          setBusy(false);
          close({ force: true });
        }
        else {
          setPhase('review');
          setStatus('Import cancelled. Your current dashboard was not changed.');
        }
      } catch (err) {
        setPhase('review');
        setError(String(err?.message || err));
        setStatus('Import failed. The previous dashboard was restored.');
      } finally {
        if (overlay.isConnected) setBusy(false);
      }
    });

    this.shadowRoot.appendChild(overlay);
    setSourceMode('ha');
    setBusy(true);
    setStatus('Finding Home Assistant dashboards…');
    requestAnimationFrame(() => overlay.querySelector('[data-action="close"]')?.focus?.());
    this._fetchDashboardConverterDashboardList_()
      .then((dashboards) => {
        if (!sourceSelect) return;
        sourceSelect.replaceChildren();
        if (!dashboards.length) throw new Error('No dashboards returned');
        dashboards.forEach((dashboard) => {
          const option = document.createElement('option');
          option.value = dashboard.url_path || '';
          option.textContent = dashboard.title;
          sourceSelect.appendChild(option);
        });
        sourceSelect.dataset.available = 'true';
        setStatus('Loading the selected dashboard preview…');
        loadSelectedDashboardPreview();
      })
      .catch(() => {
        if (sourceSelect) {
          const option = document.createElement('option');
          option.value = '';
          option.textContent = 'Dashboard picker unavailable';
          sourceSelect.replaceChildren(option);
          sourceSelect.dataset.available = 'false';
        }
        setSourceMode('upload');
        setStatus('Dashboard access is unavailable here. Upload a file or paste its YAML instead.');
      })
      .finally(() => setBusy(false));
  },
};

export function installDashboardConverterMethods(proto) {
  for (const [name, value] of Object.entries(converterMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
