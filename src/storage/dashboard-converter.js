/*
 * Lovelace dashboard converter.
 *
 * This MVP imports an existing Home Assistant Lovelace config as a copy, converts views to DDC tabs,
 * and places each top-level Lovelace card as a draggable card on the dashboard canvas.
 */

import { load as loadYaml } from 'js-yaml';

const DASHBOARD_CONVERTER_MODAL_ID = 'ddc-dashboard-converter-modal';

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
      'max_width',
      'max_cols',
      'maxCols',
      'columns',
      'rtl',
      'column_widths',
      'margin',
      'padding',
      'height',
      'card_margin',
      'min_height',
    ].forEach((key) => {
      if (options[key] === undefined && source?.[key] !== undefined) options[key] = source[key];
    });
    return options;
  },

  _dashboardConverterPixelValue_(value, fallback = null, relativeTo = null) {
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    const raw = String(value ?? '').trim();
    if (!raw) return fallback;
    if (raw.endsWith('%') && Number(relativeTo) > 0) {
      const pct = Number.parseFloat(raw);
      return Number.isFinite(pct) ? (relativeTo * pct) / 100 : fallback;
    }
    if (!/^-?\d+(?:\.\d+)?(?:px)?$/i.test(raw)) return fallback;
    const parsed = Number.parseFloat(raw.replace(/px$/i, ''));
    return Number.isFinite(parsed) ? parsed : fallback;
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
      ?? this._dashboardConverterPixelValue_(card?.grid_options?.height, null)
      ?? readCssPx('height')
      ?? readCssPx('min-height');
    const width =
      this._dashboardConverterPixelValue_(card?.width, null)
      ?? this._dashboardConverterPixelValue_(card?.grid_options?.width, null)
      ?? readCssPx('width')
      ?? readCssPx('min-width');
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
      aspectRatio,
      gridColumns: Number.isFinite(gridColumns) && gridColumns > 0 ? gridColumns : null,
      gridRows: Number.isFinite(gridRows) && gridRows > 0 ? gridRows : null,
    };
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

    if (Array.isArray(view.cards)) cards.push(...view.cards);

    if (Array.isArray(view.sections)) {
      view.sections.forEach((section) => {
        const sectionTitle = String(section?.title || '').trim();
        if (sectionTitle) {
          cards.push({
            type: 'markdown',
            content: `### ${sectionTitle}`,
          });
        }
        if (Array.isArray(section?.cards)) cards.push(...section.cards);
      });
    }

    return cards
      .filter((card) => card && typeof card === 'object')
      .filter((card) => String(card.type || '').toLowerCase() !== 'custom:drag-and-drop-card')
      .map((card) => this._cloneJson_?.(card) || JSON.parse(JSON.stringify(card)));
  },

  _estimateDashboardConverterCardSize_(card = {}, context = {}) {
    const type = String(card?.type || '').toLowerCase();
    const entitiesCount = Array.isArray(card.entities) ? card.entities.length : 0;
    const nestedCount = Array.isArray(card.cards) ? card.cards.length : 0;
    const panel = !!context.panel;
    const hints = this._dashboardConverterCardSizeHints_(card);
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

  _dashboardConverterViewportWidth_(variantKey = 'desktop_landscape') {
    try {
      const { profile, orientation } = this._splitResponsiveLayoutKey_(variantKey);
      const viewport = this._getResponsiveViewportProfile_?.(profile, orientation);
      const width = Number(viewport?.width || 0);
      if (Number.isFinite(width) && width > 0) return width;
    } catch {}
    const size = this._getContainerSize?.() || {};
    return Math.max(500, Number(size.w || size.width || 1430) || 1430);
  },

  _dashboardConverterColumnLayoutMetrics_(layoutOptions = {}, canvasWidth = 1430, fallbackMaxCols = 4) {
    const canvasInset = canvasWidth <= 720 ? 16 : 24;
    const layoutMargin = this._dashboardConverterCssBox_(layoutOptions.margin, '0px 4px 0px 4px');
    const layoutPadding = this._dashboardConverterCssBox_(layoutOptions.padding, '4px 0px 4px 0px');
    const cardMargin = this._dashboardConverterCssBox_(layoutOptions.card_margin, '4px 4px 8px 4px');
    const gap = Math.max(0, cardMargin.left + cardMargin.right);
    const rowGap = Math.max(0, cardMargin.top + cardMargin.bottom);
    const edgeLeft = canvasInset + layoutMargin.left + layoutPadding.left;
    const edgeRight = canvasInset + layoutMargin.right + layoutPadding.right;
    const edgeTop = canvasInset + layoutMargin.top + layoutPadding.top + cardMargin.top;
    const edgeBottom = canvasInset + layoutMargin.bottom + layoutPadding.bottom + cardMargin.bottom;
    const available = Math.max(180, canvasWidth - edgeLeft - edgeRight);
    const desiredWidth = Math.max(
      120,
      this._dashboardConverterPixelValue_(layoutOptions.width ?? layoutOptions.column_width, 300, available)
    );
    const rawMaxCols = this._dashboardConverterPixelValue_(
      layoutOptions.max_cols ?? layoutOptions.maxCols ?? layoutOptions.columns,
      fallbackMaxCols
    );
    const maxCols = Math.max(1, Math.floor(Number.isFinite(rawMaxCols) && rawMaxCols > 0 ? rawMaxCols : fallbackMaxCols));
    const columnsByWidth = Math.max(1, Math.floor((available + gap) / (desiredWidth + gap)));
    const columns = Math.max(1, Math.min(maxCols, columnsByWidth));
    const maxColumnWidth =
      this._dashboardConverterPixelValue_(layoutOptions.max_width ?? layoutOptions.maxWidth, null, available) > 0
        ? this._dashboardConverterPixelValue_(layoutOptions.max_width ?? layoutOptions.maxWidth, null, available)
        : Math.max(500, desiredWidth * 1.5);
    const columnWidth = Math.max(
      120,
      Math.round(Math.min(desiredWidth, maxColumnWidth, (available - gap * (columns - 1)) / columns))
    );
    const rawColumnWidths = this._dashboardConverterColumnWidthList_(
      layoutOptions.column_widths,
      columns,
      columnWidth,
      available
    );
    const totalRawWidth = rawColumnWidths.reduce((sum, width) => sum + width, 0) + gap * (columns - 1);
    const scale = totalRawWidth > available ? Math.max(0.1, (available - gap * (columns - 1)) / Math.max(1, totalRawWidth - gap * (columns - 1))) : 1;
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
    };
  },

  _packDashboardConverterGridBlock_(group = [], metrics = {}, offsetY = 0) {
    const { columns, columnWidth, margin, gap } = metrics;
    const heights = Array(columns).fill(offsetY + margin);
    const visibleGroup = group.filter((item) => String(item.card?.type || '').toLowerCase() !== 'custom:layout-break');
    const entries = visibleGroup.map((item) => {
      const estimate = this._estimateDashboardConverterCardSize_(item.card, { panel: item.panel });
      const widthSpan = estimate.width
        ? Math.ceil((estimate.width + gap) / Math.max(1, columnWidth + gap))
        : 1;
      const span = estimate.full ? columns : Math.max(1, Math.min(columns, Number(estimate.span || widthSpan) || widthSpan));
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
      const heightFromAspect = estimate.aspectRatio ? width / estimate.aspectRatio : null;
      const height = Math.max(120, Math.round(Number(heightFromAspect || estimate.height || 240)));
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
      const heightFromAspect = estimate.aspectRatio ? width / estimate.aspectRatio : null;
      const height = Math.max(120, Math.round(Math.max(Number(heightFromAspect || estimate.height || 240), minPanelHeight)));
      const entry = {
        id: item.id,
        card: this._cloneJson_?.(item.card) || JSON.parse(JSON.stringify(item.card)),
        position: { x: margin, y },
        size: { width, height },
        z: item.z,
        tabId: item.tabId,
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
      const heightFromAspect = estimate.aspectRatio ? width / estimate.aspectRatio : null;
      const height = Math.max(120, Math.round(Number(heightFromAspect || estimate.height || 240)));
      entries.push({
        id: item.id,
        card: this._cloneJson_?.(item.card) || JSON.parse(JSON.stringify(item.card)),
        position: { x, y },
        size: { width, height },
        z: item.z,
        tabId: item.tabId,
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

  async _persistDashboardConverterConfig_() {
    try {
      this._dispatchDashboardConverterConfigChanged_?.();
    } catch {}
    try {
      await this._persistThisCardConfigToStorage_?.();
      return true;
    } catch (err) {
      console.warn('[drag-and-drop-card] Could not persist converted dashboard config to Lovelace storage', err);
      return false;
    }
  },

  _convertLovelaceDashboardToDdc_(sourceConfig = {}) {
    const config = this._normalizeDashboardConverterConfig_(sourceConfig);
    const views = Array.isArray(config.views) ? config.views : [];
    if (!views.length) throw new Error('This dashboard has no views to convert.');

    const usedTabIds = new Set();
    const tabs = [];
    const items = [];
    let visibleItemCount = 0;
    views.forEach((view, viewIndex) => {
      const tabId = this._normalizeDashboardConverterTabId_(view, viewIndex, usedTabIds);
      const layoutMode = this._dashboardConverterViewLayoutMode_(view);
      const viewLayoutOptions = this._dashboardConverterLayoutOptions_(view);
      const title = String(view.title || view.path || `View ${viewIndex + 1}`).trim();
      tabs.push({
        id: tabId,
        label: title || `View ${viewIndex + 1}`,
        ...(view.icon ? { icon: view.icon } : {}),
      });
      const cards = this._collectDashboardConverterCardsForView_(view);
      let gridBlockIndex = 0;
      cards.forEach((card, cardIndex) => {
        const layoutCardMode = this._dashboardConverterLayoutCardMode_(card);
        if (layoutCardMode && Array.isArray(card.cards)) {
          const layoutOptions = this._dashboardConverterLayoutOptions_(card);
          card.cards.forEach((childCard, childIndex) => {
            if (!childCard || typeof childCard !== 'object') return;
            if (String(childCard.type || '').toLowerCase() === 'custom:drag-and-drop-card') return;
            const isLayoutBreak = String(childCard.type || '').toLowerCase() === 'custom:layout-break';
            items.push({
              id: this._dashboardConverterCardId_(viewIndex, `${cardIndex}-${childIndex}`),
              tabId,
              card: this._cloneJson_?.(childCard) || JSON.parse(JSON.stringify(childCard)),
              layoutMode: layoutCardMode,
              layoutBlockMode: layoutCardMode,
              layoutBlockId: `${tabId}:layout-card:${cardIndex}`,
              layoutOptions,
              isLayoutBreak,
            });
            if (!isLayoutBreak) visibleItemCount += 1;
          });
          gridBlockIndex += 1;
          return;
        }

        const blockMode =
          layoutMode === 'panel'
            ? 'panel'
            : (layoutMode === 'horizontal' || layoutMode === 'vertical' || layoutMode === 'masonry' ? layoutMode : 'grid');
        const isLayoutBreak = String(card.type || '').toLowerCase() === 'custom:layout-break';
        items.push({
          id: this._dashboardConverterCardId_(viewIndex, cardIndex),
          tabId,
          card,
          layoutMode,
          layoutBlockMode: blockMode,
          layoutBlockId: blockMode === 'grid' ? `${tabId}:grid:${gridBlockIndex}` : `${tabId}:${blockMode}:0`,
          layoutOptions: blockMode === 'horizontal' || blockMode === 'vertical' || blockMode === 'masonry' ? viewLayoutOptions : {},
          panel: layoutMode === 'panel',
          isLayoutBreak,
        });
        if (!isLayoutBreak) visibleItemCount += 1;
      });
    });

    if (!visibleItemCount) throw new Error('No Lovelace cards were found to convert.');
    const variantKeys = this._responsiveLayoutVariantKeys_?.() || ['desktop_landscape'];
    const responsiveLayouts = {};
    variantKeys.forEach((variantKey) => {
      responsiveLayouts[variantKey] = this._packDashboardConverterItems_(items, variantKey);
    });
    const primaryKey = this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape';
    const primaryCards = responsiveLayouts[primaryKey] || Object.values(responsiveLayouts)[0] || [];
    const options = {
      tabs,
      default_tab: tabs[0]?.id || 'imported',
      hide_tabs_when_single: tabs.length <= 1,
      tabs_position: this._normalizeTabsPosition_?.(this.tabsPosition || 'top') || 'top',
      container_size_mode: this._normalizeContainerSizeMode_?.(this.containerSizeMode || this._config?.container_size_mode || 'preset') || 'preset',
      container_preset: this.containerPreset || this._config?.container_preset || 'fhd',
      container_preset_orientation: this.containerPresetOrient || this._config?.container_preset_orientation || 'auto',
      auto_resize_cards: !!this.autoResizeCards,
    };

    return {
      version: 3,
      kind: 'ddc-converted-lovelace-dashboard',
      source_title: config.title || 'Imported dashboard',
      options,
      cards: primaryCards,
      responsive_layouts: responsiveLayouts,
      summary: {
        views: tabs.length,
        cards: visibleItemCount,
        skipped_drag_drop_cards: views.reduce((count, view) => {
          const all = [
            ...(Array.isArray(view.cards) ? view.cards : []),
            ...(Array.isArray(view.sections) ? view.sections.flatMap((section) => Array.isArray(section?.cards) ? section.cards : []) : []),
          ];
          return count + all.filter((card) => String(card?.type || '').toLowerCase() === 'custom:drag-and-drop-card').length;
        }, 0),
      },
    };
  },

  async _applyConvertedDashboardPayload_(payload = {}) {
    const cards = Array.isArray(payload.cards) ? payload.cards : [];
    if (!cards.length) throw new Error('The converted dashboard has no cards.');

    const realCards = this.cardContainer?.querySelectorAll?.('.card-wrapper:not(.ddc-placeholder)') || [];
    if (realCards.length) {
      const ok = window.confirm?.('Replace the current Drag & Drop canvas with the converted dashboard copy?');
      if (!ok) return false;
    }

    this._hideEmptyPlaceholder?.();
    this.cardContainer?.querySelectorAll?.('.card-wrapper:not(.ddc-placeholder)')?.forEach((node) => node.remove());
    this._responsiveConnectors = this._normalizeResponsiveConnectorLayouts_?.([], null) || {};
    this._selectedConnectorId = null;
    this._connectorDraft = null;

    const options = payload.options || {};
    this._applyImportedOptions?.(options, true);
    this._responsiveLayouts = this._normalizeResponsiveLayouts_(cards, payload.responsive_layouts || null);
    const primaryCards = this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_?.()] || cards;
    this._config = {
      ...(this._config || {}),
      ...options,
      cards: this._cloneJson_?.(primaryCards) || primaryCards,
      responsive_layouts: this._cloneJson_?.(this._serializeResponsiveLayouts_(this._responsiveLayouts, primaryCards)) || payload.responsive_layouts,
    };

    await this._syncResponsiveProfileForViewport_?.({ force: true });
    this._applyOptionsToDom?.(this._config);
    this._resizeContainer?.();
    try { this._syncTabsPlacement_?.(); this._renderTabs?.(); this._renderLayersBar_?.(); this._applyActiveTab?.(); } catch {}
    try { this._applyVisibility_?.(); } catch {}
    try { this._syncTabsWidth_?.(); } catch {}
    try { this._renderConnectors_?.(); } catch {}
    try { this._syncEmptyStateUI?.(); } catch {}
    try { await this._saveLayout?.(true); } catch { this._queueSave?.('dashboard-converter'); }
    await this._persistDashboardConverterConfig_?.();
    this._toast?.(`Converted ${payload.summary?.cards || cards.length} cards across ${payload.summary?.views || options.tabs?.length || 1} tabs.`);
    return true;
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

  _dashboardConverterModalStyles_() {
    return `
      <style>
        .ddc-converter-overlay{position:fixed;inset:0;z-index:10000;display:grid;place-items:center;padding:24px;background:rgba(0,0,0,.48);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);}
        .ddc-converter-dialog{width:min(920px,calc(100vw - 32px));max-height:min(86vh,860px);display:grid;grid-template-rows:auto minmax(0,1fr) auto;overflow:hidden;border-radius:24px;border:1px solid color-mix(in oklab,var(--divider-color,rgba(255,255,255,.16)) 72%,transparent);background:color-mix(in oklab,var(--card-background-color,#111827) 92%,var(--primary-background-color,#050812) 8%);box-shadow:0 28px 70px rgba(0,0,0,.42);color:var(--primary-text-color,#f8fafc);}
        .ddc-converter-head,.ddc-converter-foot{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 20px;border-bottom:1px solid color-mix(in oklab,var(--divider-color,rgba(255,255,255,.14)) 70%,transparent);}
        .ddc-converter-foot{border-top:1px solid color-mix(in oklab,var(--divider-color,rgba(255,255,255,.14)) 70%,transparent);border-bottom:0;}
        .ddc-converter-title{display:flex;align-items:center;gap:12px;font-weight:850;font-size:18px;}
        .ddc-converter-title ha-icon{color:var(--primary-color,#03a9f4);}
        .ddc-converter-body{display:grid;gap:16px;padding:18px 20px;overflow:auto;}
        .ddc-converter-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,.55fr);gap:16px;}
        .ddc-converter-field{display:grid;gap:8px;}
        .ddc-converter-field label{font-size:12px;font-weight:800;color:var(--secondary-text-color,#9ca3af);text-transform:uppercase;letter-spacing:0;}
        .ddc-converter-row{display:flex;gap:8px;align-items:center;}
        .ddc-converter-select,.ddc-converter-textarea{width:100%;box-sizing:border-box;border-radius:14px;border:1px solid color-mix(in oklab,var(--divider-color,rgba(255,255,255,.16)) 78%,transparent);background:color-mix(in oklab,var(--primary-background-color,#050812) 72%,transparent);color:var(--primary-text-color,#f8fafc);font:500 14px/1.45 "Segoe UI",-apple-system,BlinkMacSystemFont,sans-serif;}
        .ddc-converter-select{height:42px;padding:0 12px;}
        .ddc-converter-textarea{min-height:320px;resize:vertical;padding:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;}
        .ddc-converter-card{display:grid;gap:10px;align-content:start;border-radius:18px;border:1px solid color-mix(in oklab,var(--divider-color,rgba(255,255,255,.16)) 70%,transparent);background:linear-gradient(180deg,rgba(255,255,255,.045),rgba(255,255,255,.015));padding:14px;}
        .ddc-converter-card strong{font-size:14px;}
        .ddc-converter-card p,.ddc-converter-status{margin:0;color:var(--secondary-text-color,#9ca3af);font-size:13px;line-height:1.45;}
        .ddc-converter-stats{display:grid;gap:8px;}
        .ddc-converter-stat{display:flex;justify-content:space-between;gap:12px;padding:9px 10px;border-radius:12px;background:rgba(255,255,255,.04);font-size:13px;}
        .ddc-converter-btn{min-height:40px;display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:999px;border:1px solid color-mix(in oklab,var(--divider-color,rgba(255,255,255,.16)) 76%,transparent);background:color-mix(in oklab,var(--card-background-color,#111827) 86%,transparent);color:var(--primary-text-color,#f8fafc);font:750 13px/1 "Segoe UI",-apple-system,BlinkMacSystemFont,sans-serif;padding:0 14px;cursor:pointer;}
        .ddc-converter-btn.primary{border-color:color-mix(in oklab,var(--primary-color,#03a9f4) 58%,transparent);background:linear-gradient(180deg,color-mix(in oklab,var(--primary-color,#03a9f4) 90%,#fff 10%),color-mix(in oklab,var(--primary-color,#03a9f4) 74%,#022033 26%));color:#fff;box-shadow:0 14px 28px color-mix(in oklab,var(--primary-color,#03a9f4) 22%,transparent);}
        .ddc-converter-btn.icon{width:40px;padding:0;}
        .ddc-converter-btn:disabled{opacity:.55;cursor:not-allowed;}
        .ddc-converter-error{color:var(--error-color,#ef4444);font-size:13px;}
        @media (max-width:760px){.ddc-converter-overlay{padding:12px;align-items:end}.ddc-converter-dialog{width:100%;max-height:92vh;border-radius:22px}.ddc-converter-grid{grid-template-columns:1fr}.ddc-converter-foot{flex-wrap:wrap}.ddc-converter-foot .ddc-converter-row{width:100%;justify-content:flex-end}}
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
      <div class="ddc-converter-dialog" role="dialog" aria-modal="true" aria-label="Import existing dashboard">
        <div class="ddc-converter-head">
          <div class="ddc-converter-title"><ha-icon icon="mdi:view-dashboard-edit-outline"></ha-icon><span>Import existing dashboard</span></div>
          <button type="button" class="ddc-converter-btn icon" data-action="close" aria-label="Close"><ha-icon icon="mdi:close"></ha-icon></button>
        </div>
        <div class="ddc-converter-body">
          <div class="ddc-converter-grid">
            <div class="ddc-converter-field">
              <label for="ddc-converter-source">Existing Home Assistant dashboards</label>
              <div class="ddc-converter-row">
                <select id="ddc-converter-source" class="ddc-converter-select"><option value="">Loading dashboards...</option></select>
                <button type="button" class="ddc-converter-btn" data-action="load"><ha-icon icon="mdi:download"></ha-icon><span>Load</span></button>
              </div>
              <label for="ddc-converter-text">Or paste/upload Lovelace YAML or JSON</label>
              <textarea id="ddc-converter-text" class="ddc-converter-textarea" spellcheck="false"></textarea>
            </div>
            <aside class="ddc-converter-card">
              <strong>Conversion preview</strong>
              <p>Views become tabs. Top-level Lovelace cards become draggable cards. The original dashboard is not modified.</p>
              <div class="ddc-converter-stats" data-preview>
                <div class="ddc-converter-stat"><span>Views</span><strong>0</strong></div>
                <div class="ddc-converter-stat"><span>Cards</span><strong>0</strong></div>
                <div class="ddc-converter-stat"><span>Skipped DDC cards</span><strong>0</strong></div>
              </div>
              <p class="ddc-converter-status" data-status>Choose a dashboard or paste Lovelace config to preview it.</p>
              <p class="ddc-converter-error" data-error hidden></p>
            </aside>
          </div>
        </div>
        <div class="ddc-converter-foot">
          <div class="ddc-converter-row">
            <input type="file" accept=".yaml,.yml,.json,application/json,text/yaml,text/plain" hidden data-file-input>
            <button type="button" class="ddc-converter-btn" data-action="file"><ha-icon icon="mdi:file-upload-outline"></ha-icon><span>Upload file</span></button>
            <button type="button" class="ddc-converter-btn" data-action="preview"><ha-icon icon="mdi:eye-outline"></ha-icon><span>Preview</span></button>
          </div>
          <div class="ddc-converter-row">
            <button type="button" class="ddc-converter-btn" data-action="close">Cancel</button>
            <button type="button" class="ddc-converter-btn primary" data-action="convert"><ha-icon icon="mdi:import"></ha-icon><span>Convert into Drag & Drop</span></button>
          </div>
        </div>
      </div>
    `;

    const close = () => overlay.remove();
    const sourceSelect = overlay.querySelector('#ddc-converter-source');
    const textInput = overlay.querySelector('#ddc-converter-text');
    const fileInput = overlay.querySelector('[data-file-input]');
    const statusEl = overlay.querySelector('[data-status]');
    const errorEl = overlay.querySelector('[data-error]');
    const previewEl = overlay.querySelector('[data-preview]');
    let loadedDashboardConfig = null;
    let loadedDashboardUrlPath = null;

    if (textInput) {
      textInput.placeholder = [
        'views:',
        '  - title: Home',
        '    cards:',
        '      - type: entities',
        '        entities:',
        '          - light.living_room',
      ].join('\n');
    }

    const setError = (message = '') => {
      if (!errorEl) return;
      errorEl.hidden = !message;
      errorEl.textContent = message;
    };
    const setStatus = (message = '') => { if (statusEl) statusEl.textContent = message; };
    const renderPreview = (converted = null) => {
      if (!previewEl || !converted) return;
      const stats = converted.summary || {};
      const values = [stats.views || 0, stats.cards || 0, stats.skipped_drag_drop_cards || 0];
      previewEl.querySelectorAll('strong').forEach((node, index) => { node.textContent = String(values[index] ?? 0); });
    };
    const readCurrentSource = () => {
      if (loadedDashboardConfig && loadedDashboardUrlPath === sourceSelect?.value && !String(textInput?.value || '').trim()) {
        return loadedDashboardConfig;
      }
      return this._parseDashboardConverterText_(textInput?.value || '');
    };
    const previewCurrent = () => {
      setError('');
      const converted = this._convertLovelaceDashboardToDdc_(readCurrentSource());
      renderPreview(converted);
      setStatus(`Ready to import ${converted.summary.cards} cards across ${converted.summary.views} tabs.`);
      return converted;
    };

    overlay.addEventListener('click', (ev) => {
      if (ev.target === overlay) close();
    });
    overlay.querySelectorAll('[data-action="close"]').forEach((btn) => btn.addEventListener('click', close));
    overlay.querySelector('[data-action="file"]')?.addEventListener('click', () => fileInput?.click?.());
    fileInput?.addEventListener('change', async () => {
      const file = fileInput.files?.[0];
      if (!file) return;
      textInput.value = await file.text();
      loadedDashboardConfig = null;
      loadedDashboardUrlPath = null;
      try { previewCurrent(); } catch (err) { setError(String(err?.message || err)); }
    });
    textInput?.addEventListener('input', () => {
      loadedDashboardConfig = null;
      loadedDashboardUrlPath = null;
    });
    overlay.querySelector('[data-action="preview"]')?.addEventListener('click', () => {
      try { previewCurrent(); } catch (err) { setError(String(err?.message || err)); }
    });
    overlay.querySelector('[data-action="load"]')?.addEventListener('click', async () => {
      const urlPath = sourceSelect?.value || '';
      try {
        setError('');
        setStatus('Loading dashboard config...');
        loadedDashboardConfig = await this._fetchDashboardConverterDashboardConfig_(urlPath || null);
        loadedDashboardUrlPath = urlPath;
        textInput.value = '';
        const converted = this._convertLovelaceDashboardToDdc_(loadedDashboardConfig);
        renderPreview(converted);
        setStatus(`Loaded ${converted.summary.cards} cards from the selected dashboard.`);
      } catch (err) {
        loadedDashboardConfig = null;
        loadedDashboardUrlPath = null;
        setError(String(err?.message || err));
        setStatus('Could not load that dashboard. Paste YAML/JSON instead.');
      }
    });
    overlay.querySelector('[data-action="convert"]')?.addEventListener('click', async () => {
      try {
        setError('');
        const converted = previewCurrent();
        setStatus('Converting dashboard...');
        const ok = await this._applyConvertedDashboardPayload_(converted);
        if (ok !== false) close();
      } catch (err) {
        setError(String(err?.message || err));
        setStatus('Conversion failed.');
      }
    });

    this.shadowRoot.appendChild(overlay);
    this._fetchDashboardConverterDashboardList_()
      .then((dashboards) => {
        if (!sourceSelect) return;
        sourceSelect.innerHTML = '';
        if (!dashboards.length) {
          const opt = document.createElement('option');
          opt.value = '';
          opt.textContent = 'Dashboard picker unavailable';
          sourceSelect.appendChild(opt);
          setStatus('Dashboard picker is unavailable here. Paste or upload Lovelace config instead.');
          return;
        }
        dashboards.forEach((dashboard) => {
          const opt = document.createElement('option');
          opt.value = dashboard.url_path || '';
          opt.textContent = dashboard.title;
          sourceSelect.appendChild(opt);
        });
        setStatus('Choose a dashboard and click Load, or paste/upload config.');
      })
      .catch(() => {
        if (sourceSelect) {
          sourceSelect.innerHTML = '<option value="">Dashboard picker unavailable</option>';
        }
        setStatus('Dashboard picker is unavailable here. Paste or upload Lovelace config instead.');
      });
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
