// Internal Drag & Drop Card companion custom cards.
// Extracted from drag-and-drop-card.js without behavior changes.

import { __ddcHtmlDefaultConfig__, __ddcLineSplitTokens__ } from './defaults.js';

  const DDC_HTML_CARD_TAG = 'ddc-html-card';
  const DDC_HTML_CARD_EDITOR_TAG = 'ddc-html-card-editor';
  const DDC_LINE_CARD_TAG = 'ddc-line-card';
  const DDC_LINE_CARD_EDITOR_TAG = 'ddc-line-card-editor';
  const DDC_TABLE_CARD_TAG = 'ddc-table-card';
  const DDC_TABLE_CARD_EDITOR_TAG = 'ddc-table-card-editor';
  const DDC_ICON_CARD_TAG = 'ddc-icon-card';
  const DDC_ICON_CARD_EDITOR_TAG = 'ddc-icon-card-editor';
  const DDC_TEXT_CARD_TAG = 'ddc-text-card';
  const DDC_TEXT_CARD_EDITOR_TAG = 'ddc-text-card-editor';
  const __DDC_HTML_ASYNC_FUNCTION__ = Object.getPrototypeOf(async function () {}).constructor;
  const __DDC_INTERNAL_CARD_TAGS__ = {
    'custom:ddc-html-card': DDC_HTML_CARD_TAG,
    'custom:ddc-line-card': DDC_LINE_CARD_TAG,
    'custom:ddc-table-card': DDC_TABLE_CARD_TAG,
    'custom:ddc-icon-card': DDC_ICON_CARD_TAG,
    'custom:ddc-text-card': DDC_TEXT_CARD_TAG
  };

  function __createDdcInternalCardElement__(cfg, hass) {
    const type = String(cfg?.type || '');
    const tag = __DDC_INTERNAL_CARD_TAGS__[type];
    if (!tag) return null;
    const el = document.createElement(tag);
    try { el.setConfig?.(cfg); } catch {}
    try { el.hass = hass; } catch {}
    return el;
  }

  function __ddcLineClamp__(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function __ddcLineNormalizeNumber__(value, fallback, min = -Infinity, max = Infinity) {
    const num = Number(value);
    if (!Number.isFinite(num)) return fallback;
    return __ddcLineClamp__(num, min, max);
  }

  function __ddcLineEscapeHtml__(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function __ddcLineEscapeAttr__(value) {
    return __ddcLineEscapeHtml__(value).replace(/"/g, '&quot;');
  }

  function __ddcLineIsTruthyState__(stateValue) {
    const state = String(stateValue ?? '').trim().toLowerCase();
    if (!state) return false;
    return !['0', 'off', 'false', 'closed', 'idle', 'unavailable', 'unknown', 'none'].includes(state);
  }

  function __ddcLineMatchesStateRule__(stateValue, rule) {
    const state = String(stateValue ?? '').trim();
    const lowered = state.toLowerCase();
    const token = String(rule ?? '').trim();
    if (!token) return false;

    const cmp = token.match(/^(>=|<=|>|<|==|=|!=)\s*(-?\d+(?:\.\d+)?)$/);
    if (cmp) {
      const current = Number(state);
      const target = Number(cmp[2]);
      if (!Number.isFinite(current) || !Number.isFinite(target)) return false;
      switch (cmp[1]) {
        case '>': return current > target;
        case '<': return current < target;
        case '>=': return current >= target;
        case '<=': return current <= target;
        case '=':
        case '==': return current === target;
        case '!=': return current !== target;
        default: return false;
      }
    }

    const loweredToken = token.toLowerCase();
    if (loweredToken === 'truthy') return __ddcLineIsTruthyState__(stateValue);
    if (loweredToken === 'falsy') return !__ddcLineIsTruthyState__(stateValue);
    if (loweredToken === '!off') return lowered !== 'off';
    return lowered === loweredToken;
  }

  function __ddcLineIsActive__(stateValue, activeStates) {
    const tokens = __ddcLineSplitTokens__(activeStates);
    if (!tokens.length) return __ddcLineIsTruthyState__(stateValue);
    return tokens.some((rule) => __ddcLineMatchesStateRule__(stateValue, rule));
  }

  function __ddcTableDefaultCell__(index = 0, columns = 3) {
    const row = Math.floor(index / Math.max(1, columns));
    const col = index % Math.max(1, columns);
    if (row === 0) {
      const headerLabels = ['Label', 'State', 'Action'];
      return {
        type: 'text',
        text: headerLabels[col] || `Column ${col + 1}`,
        icon: '',
        entity: '',
        align: col === 0 ? 'left' : 'center',
        col_span: 1,
        row_span: 1,
        active_states: 'on,home,open,playing,charging,active,>0',
        active_color: 'var(--primary-color, #ff9800)',
        inactive_color: 'rgba(148, 163, 184, 0.18)',
        button_action: 'more-info'
      };
    }
    return {
      type: row === 1 && col === 2 ? 'button' : (row === 1 && col === 1 ? 'entity' : (col === 1 ? 'badge' : 'text')),
      text: row === 1 && col === 0 ? 'Primary' : '',
      icon: row === 2 && col === 0 ? 'mdi:flash' : '',
      entity: '',
      align: col === 0 ? 'left' : 'center',
      col_span: 1,
      row_span: 1,
      active_states: 'on,home,open,playing,charging,active,>0',
      active_color: 'var(--primary-color, #ff9800)',
      inactive_color: 'rgba(148, 163, 184, 0.18)',
      button_action: 'more-info'
    };
  }

  function __ddcTableNormalizeCell__(cell = {}, index = 0, columns = 3, rows = 18) {
    const fallback = __ddcTableDefaultCell__(index, columns);
    const safeColumns = Math.max(1, Number(columns || 3) || 3);
    const safeRows = Math.max(1, Number(rows || 18) || 18);
    const row = Math.floor(index / safeColumns);
    const col = index % safeColumns;
    const maxColSpan = Math.max(1, safeColumns - col);
    const maxRowSpan = Math.max(1, safeRows - row);
    return {
      ...fallback,
      ...(cell || {}),
      type: String(cell?.type || fallback.type || 'text').toLowerCase(),
      text: String(cell?.text ?? fallback.text ?? ''),
      icon: String(cell?.icon ?? fallback.icon ?? ''),
      entity: String(cell?.entity ?? fallback.entity ?? ''),
      align: String(cell?.align || fallback.align || 'left').toLowerCase(),
      col_span: Math.round(__ddcLineNormalizeNumber__(cell?.col_span ?? cell?.colSpan ?? fallback.col_span ?? 1, 1, 1, maxColSpan)),
      row_span: Math.round(__ddcLineNormalizeNumber__(cell?.row_span ?? cell?.rowSpan ?? fallback.row_span ?? 1, 1, 1, maxRowSpan)),
      active_states: String(cell?.active_states ?? fallback.active_states ?? 'on,home,open,playing,charging,active,>0'),
      active_color: String(cell?.active_color ?? fallback.active_color ?? 'var(--primary-color, #ff9800)'),
      inactive_color: String(cell?.inactive_color ?? fallback.inactive_color ?? 'rgba(148, 163, 184, 0.18)'),
      button_action: String(cell?.button_action || fallback.button_action || 'more-info').toLowerCase()
    };
  }

  function __ddcTableEnsureCells__(rows = 3, columns = 3, cells = []) {
    const total = Math.max(1, Math.min(144, Number(rows || 3) * Number(columns || 3)));
    const source = Array.isArray(cells) ? cells : [];
    return Array.from({ length: total }, (_, index) => {
      return __ddcTableNormalizeCell__(source[index], index, columns, rows);
    });
  }

  function __ddcTableCanPlaceSpan__(occupied, rows, columns, row, col, rowSpan, colSpan) {
    for (let y = row; y < row + rowSpan; y++) {
      if (y < 0 || y >= rows) return false;
      for (let x = col; x < col + colSpan; x++) {
        if (x < 0 || x >= columns) return false;
        const index = (y * columns) + x;
        if (occupied[index] != null) return false;
      }
    }
    return true;
  }

  function __ddcTableBuildLayout__(rows = 3, columns = 3, cells = []) {
    const safeRows = Math.max(1, Math.min(18, Number(rows || 3) || 3));
    const safeColumns = Math.max(1, Math.min(12, Number(columns || 3) || 3));
    const normalizedCells = __ddcTableEnsureCells__(safeRows, safeColumns, cells || []);
    const occupied = Array.from({ length: safeRows * safeColumns }, () => null);
    const items = [];

    normalizedCells.forEach((cell, index) => {
      const row = Math.floor(index / safeColumns);
      const col = index % safeColumns;
      const occupiedBy = occupied[index];
      if (occupiedBy != null) {
        items.push({
          cell,
          index,
          row,
          col,
          rowSpan: 1,
          colSpan: 1,
          hidden: true,
          coveredBy: occupiedBy
        });
        return;
      }

      const desiredRowSpan = Math.round(Math.max(1, Math.min(Number(cell.row_span || 1) || 1, safeRows - row)));
      const desiredColSpan = Math.round(Math.max(1, Math.min(Number(cell.col_span || 1) || 1, safeColumns - col)));
      let bestRowSpan = 1;
      let bestColSpan = 1;
      let bestScore = -1;

      for (let rs = 1; rs <= desiredRowSpan; rs++) {
        for (let cs = 1; cs <= desiredColSpan; cs++) {
          if (!__ddcTableCanPlaceSpan__(occupied, safeRows, safeColumns, row, col, rs, cs)) continue;
          const area = rs * cs;
          const closeness = (rs / desiredRowSpan) + (cs / desiredColSpan);
          const score = (area * 10) + closeness;
          if (score > bestScore) {
            bestScore = score;
            bestRowSpan = rs;
            bestColSpan = cs;
          }
        }
      }

      for (let y = row; y < row + bestRowSpan; y++) {
        for (let x = col; x < col + bestColSpan; x++) {
          occupied[(y * safeColumns) + x] = index;
        }
      }

      items.push({
        cell,
        index,
        row,
        col,
        rowSpan: bestRowSpan,
        colSpan: bestColSpan,
        hidden: false,
        coveredBy: null
      });
    });

    return { rows: safeRows, columns: safeColumns, cells: normalizedCells, items };
  }

  function __ddcTableNormalizeConfig__(config = {}) {
    const fallback = DdcTableCard.getStubConfig();
    const rows = __ddcLineNormalizeNumber__(config?.rows, fallback.rows, 1, 18);
    const columns = __ddcLineNormalizeNumber__(config?.columns, fallback.columns, 1, 12);
    return {
      ...fallback,
      ...(config || {}),
      title: String(config?.title || ''),
      rows,
      columns,
      header_row: config?.header_row !== false,
      border: config?.border !== false,
      radius: __ddcLineNormalizeNumber__(config?.radius, fallback.radius, 0, 40),
      spacing: __ddcLineNormalizeNumber__(config?.spacing, fallback.spacing, 0, 32),
      cells: __ddcTableEnsureCells__(rows, columns, config?.cells || [])
    };
  }

  function __ddcTableCloneConfig__(config = {}) {
    return {
      ...config,
      cells: Array.isArray(config?.cells) ? config.cells.map((cell) => ({ ...cell })) : []
    };
  }

  function __ddcTableEscapeAttr__(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function __ddcTableEscapeHtml__(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function __ddcTextVariantPreset__(variant) {
    switch (String(variant || '').toLowerCase()) {
      case 'header':
        return { font_size: 14, bold: true, letter_spacing: 0.16, line_height: 1.1 };
      case 'h1':
        return { font_size: 56, bold: true, letter_spacing: -0.06, line_height: 0.96 };
      case 'h2':
        return { font_size: 44, bold: true, letter_spacing: -0.045, line_height: 1.02 };
      case 'h3':
        return { font_size: 34, bold: true, letter_spacing: -0.03, line_height: 1.08 };
      case 'h4':
        return { font_size: 26, bold: true, letter_spacing: -0.018, line_height: 1.14 };
      case 'paragraph':
      case 'p':
        return { font_size: 18, bold: false, letter_spacing: 0, line_height: 1.58 };
      case 'small':
        return { font_size: 13, bold: false, letter_spacing: 0.02, line_height: 1.42 };
      case 'title':
      default:
        return { font_size: 42, bold: true, letter_spacing: -0.03, line_height: 1.05 };
    }
  }

  function __ddcTextInlineMarkup__(value) {
    let html = __ddcTableEscapeHtml__(String(value ?? ''));
    html = html.replace(/\*\*\*([\s\S]+?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*([\s\S]+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
    return html;
  }

  function __ddcTextRichMarkup__(value) {
    const lines = String(value ?? '').replace(/\r\n?/g, '\n').split('\n');
    const blocks = [];
    lines.forEach((raw) => {
      const line = String(raw ?? '').trimEnd();
      const trimmed = line.trim();
      if (!trimmed) {
        blocks.push('<div class="ddc-rich-break" aria-hidden="true"></div>');
        return;
      }
      if (trimmed.startsWith('###### ')) {
        blocks.push(`<div class="ddc-rich-line ddc-rich-small">${__ddcTextInlineMarkup__(trimmed.slice(7))}</div>`);
        return;
      }
      if (trimmed.startsWith('##### ')) {
        blocks.push(`<div class="ddc-rich-line ddc-rich-header">${__ddcTextInlineMarkup__(trimmed.slice(6))}</div>`);
        return;
      }
      if (trimmed.startsWith('#### ')) {
        blocks.push(`<h4 class="ddc-rich-line">${__ddcTextInlineMarkup__(trimmed.slice(5))}</h4>`);
        return;
      }
      if (trimmed.startsWith('### ')) {
        blocks.push(`<h3 class="ddc-rich-line">${__ddcTextInlineMarkup__(trimmed.slice(4))}</h3>`);
        return;
      }
      if (trimmed.startsWith('## ')) {
        blocks.push(`<h2 class="ddc-rich-line">${__ddcTextInlineMarkup__(trimmed.slice(3))}</h2>`);
        return;
      }
      if (trimmed.startsWith('# ')) {
        blocks.push(`<h1 class="ddc-rich-line">${__ddcTextInlineMarkup__(trimmed.slice(2))}</h1>`);
        return;
      }
      blocks.push(`<p class="ddc-rich-line">${__ddcTextInlineMarkup__(trimmed)}</p>`);
    });
    return blocks.join('');
  }

  function __ddcTextSanitizeRichHtml__(value) {
    const html = String(value ?? '');
    if (!html.trim()) return '';
    const tpl = document.createElement('template');
    tpl.innerHTML = html;
    const allowedTags = new Set([
      'p', 'div', 'br',
      'h1', 'h2', 'h3', 'h4',
      'blockquote', 'pre', 'code',
      'ul', 'ol', 'li',
      'strong', 'b', 'em', 'i', 'u', 's', 'small',
      'span', 'a'
    ]);

    const sanitizeNode = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return document.createTextNode(node.textContent || '');
      }
      if (node.nodeType !== Node.ELEMENT_NODE) {
        return document.createDocumentFragment();
      }
      const tag = String(node.tagName || '').toLowerCase();
      const safeTag = tag === 'b' ? 'strong' : tag === 'i' ? 'em' : tag;
      const children = Array.from(node.childNodes).map((child) => sanitizeNode(child));
      if (!allowedTags.has(tag)) {
        const fragment = document.createDocumentFragment();
        children.forEach((child) => fragment.appendChild(child));
        return fragment;
      }
      const el = document.createElement(safeTag);
      if (safeTag === 'a') {
        const href = String(node.getAttribute('href') || '').trim();
        if (/^(https?:|mailto:|tel:|\/)/i.test(href)) {
          el.setAttribute('href', href);
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noreferrer noopener');
        }
      }
      children.forEach((child) => el.appendChild(child));
      return el;
    };

    const out = document.createElement('div');
    Array.from(tpl.content.childNodes).forEach((node) => out.appendChild(sanitizeNode(node)));
    return out.innerHTML;
  }

  class DdcLineCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._config = null;
      this._hass = null;
      this._shellReady = false;
    }

    static getStubConfig() {
      return {
        type: 'custom:ddc-line-card',
        title: '',
        entity: '',
        active_states: 'on,home,open,playing,charging,active,>0',
        direction: 'horizontal',
        arrows: 'end',
        flow_direction: 'auto',
        line_style: 'solid',
        thickness: 10,
        animate_mode: 'active',
        animation_speed: 1.8,
        active_color: 'var(--primary-color, #ff9800)',
        inactive_color: 'rgba(148, 163, 184, 0.42)',
        glow: true,
        rounded: true
      };
    }

    static async getConfigElement() {
      return document.createElement(DDC_LINE_CARD_EDITOR_TAG);
    }

    async getConfigElement() {
      return document.createElement(DDC_LINE_CARD_EDITOR_TAG);
    }

    setConfig(config) {
      this._config = {
        ...DdcLineCard.getStubConfig(),
        ...(config || {})
      };
      this._renderCard_();
    }

    set hass(hass) {
      this._hass = hass;
      this._renderCard_();
    }

    get hass() {
      return this._hass;
    }

    connectedCallback() {
      if (this._config) this._renderCard_();
    }

    getCardSize() {
      return 1;
    }

    _ensureShell_() {
      if (this._shellReady || !this.shadowRoot) return;
      this.shadowRoot.innerHTML = `
        <style>
          :host{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            color:var(--primary-text-color);
          }
          ha-card{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            background:transparent;
            box-shadow:none;
            border-radius:inherit;
            overflow:visible;
          }
          .shell{
            position:relative;
            width:100%;
            height:100%;
            min-height:100%;
            padding:6px;
            box-sizing:border-box;
            --ddc-line-active: var(--primary-color, #ff9800);
            --ddc-line-inactive: rgba(148, 163, 184, 0.42);
            --ddc-line-thickness: 10;
            --ddc-line-speed: 1.8s;
          }
          .line-title{
            position:absolute;
            top:8px;
            left:10px;
            z-index:2;
            max-width:calc(100% - 20px);
            padding:6px 10px;
            border-radius:999px;
            background:rgba(15, 23, 42, 0.58);
            backdrop-filter:blur(8px);
            border:1px solid rgba(255,255,255,.08);
            color:rgba(248, 250, 252, 0.96);
            font-size:.76rem;
            font-weight:700;
            letter-spacing:.04em;
            text-transform:uppercase;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;
          }
          .canvas{
            position:relative;
            width:100%;
            height:100%;
            min-height:100%;
          }
          svg{
            width:100%;
            height:100%;
            display:block;
            overflow:visible;
          }
          .track,
          .line,
          .flow{
            fill:none;
            vector-effect:non-scaling-stroke;
            stroke-width:var(--ddc-line-thickness);
          }
          .track{
            stroke:var(--ddc-line-inactive);
            opacity:.35;
          }
          .line{
            stroke:var(--ddc-line-color, var(--ddc-line-inactive));
            filter:none;
          }
          .shell.is-glow .line{
            filter:drop-shadow(0 0 10px color-mix(in srgb, var(--ddc-line-color, var(--ddc-line-inactive)) 42%, transparent));
          }
          .flow{
            stroke:rgba(255,255,255,.92);
            stroke-linecap:round;
            opacity:0;
          }
          .shell.is-animating .flow{
            opacity:.86;
            animation:ddc-line-flow var(--ddc-line-speed) linear infinite;
          }
          .shell.is-animating .flow.reverse{
            animation-direction:reverse;
          }
          .endpoint{
            fill:var(--ddc-line-color, var(--ddc-line-inactive));
            opacity:.96;
          }
          .shell:not(.show-start-dot) .endpoint.start,
          .shell:not(.show-end-dot) .endpoint.end{
            display:none;
          }
          .shell.is-idle .endpoint{
            opacity:.68;
          }
          @keyframes ddc-line-flow{
            from { stroke-dashoffset: var(--ddc-line-flow-cycle, 54); }
            to { stroke-dashoffset: 0; }
          }
        </style>
        <ha-card>
          <div class="shell">
            <div class="line-title" hidden></div>
            <div class="canvas"></div>
          </div>
        </ha-card>`;
      this._shellEl = this.shadowRoot.querySelector('.shell');
      this._titleEl = this.shadowRoot.querySelector('.line-title');
      this._canvasEl = this.shadowRoot.querySelector('.canvas');
      this._shellReady = true;
    }

    _resolveDirection_() {
      const requested = String(this._config?.direction || 'horizontal').toLowerCase();
      if (requested !== 'auto') return requested;
      const rect = this.getBoundingClientRect();
      return rect.width >= rect.height ? 'horizontal' : 'vertical';
    }

    _buildPath_(direction) {
      const m = 10;
      switch (direction) {
        case 'vertical':
          return { path: `M 50 ${m} L 50 ${100 - m}`, start: [50, m], end: [50, 100 - m] };
        case 'diagonal-up':
          return { path: `M ${m} ${100 - m} L ${100 - m} ${m}`, start: [m, 100 - m], end: [100 - m, m] };
        case 'diagonal-down':
          return { path: `M ${m} ${m} L ${100 - m} ${100 - m}`, start: [m, m], end: [100 - m, 100 - m] };
        case 'elbow-right-down':
          return { path: `M ${m} ${m + 2} L 68 ${m + 2} L 68 ${100 - m} L ${100 - m} ${100 - m}`, start: [m, m + 2], end: [100 - m, 100 - m] };
        case 'elbow-right-up':
          return { path: `M ${m} ${100 - m} L 68 ${100 - m} L 68 ${m} L ${100 - m} ${m}`, start: [m, 100 - m], end: [100 - m, m] };
        case 'elbow-left-down':
          return { path: `M ${100 - m} ${m} L 32 ${m} L 32 ${100 - m} L ${m} ${100 - m}`, start: [100 - m, m], end: [m, 100 - m] };
        case 'elbow-left-up':
          return { path: `M ${100 - m} ${100 - m} L 32 ${100 - m} L 32 ${m} L ${m} ${m}`, start: [100 - m, 100 - m], end: [m, m] };
        case 'horizontal':
        default:
          return { path: `M ${m} 50 L ${100 - m} 50`, start: [m, 50], end: [100 - m, 50] };
      }
    }

    _getLineStyle_(style, thickness, rounded) {
      const normalized = String(style || 'solid').toLowerCase();
      const cap = rounded || normalized === 'dotted' ? 'round' : 'square';
      const join = rounded ? 'round' : 'miter';
      let dasharray = '';
      if (normalized === 'dashed') {
        dasharray = `${Math.max(8, thickness * 1.65)} ${Math.max(6, thickness * 1.05)}`;
      } else if (normalized === 'dotted') {
        dasharray = `0 ${Math.max(8, thickness * 1.35)}`;
      }
      return { cap, join, dasharray };
    }

    _renderCard_() {
      if (!this._config) return;
      this._ensureShell_();
      if (!this._shellEl || !this._canvasEl) return;

      const cfg = this._config || {};
      const entityId = String(cfg.entity || '').trim();
      const entity = entityId ? this._hass?.states?.[entityId] : null;
      const stateValue = entity?.state ?? '';
      const active = entityId ? __ddcLineIsActive__(stateValue, cfg.active_states) : true;
      const thickness = __ddcLineNormalizeNumber__(cfg.thickness, 10, 2, 28);
      const activeColor = String(cfg.active_color || 'var(--primary-color, #ff9800)');
      const inactiveColor = String(cfg.inactive_color || 'rgba(148, 163, 184, 0.42)');
      const animateMode = String(cfg.animate_mode || 'active').toLowerCase();
      const shouldAnimate = animateMode === 'always' || (animateMode === 'active' && active);
      const speed = `${__ddcLineNormalizeNumber__(cfg.animation_speed, 1.8, 0.4, 8).toFixed(2)}s`;
      const direction = this._resolveDirection_();
      const arrows = String(cfg.arrows || 'end').toLowerCase();
      const flowDirection = String(cfg.flow_direction || 'auto').toLowerCase();
      const numericState = Number(stateValue);
      const resolvedFlowDirection = flowDirection === 'auto'
        ? ((Number.isFinite(numericState) && numericState < 0) ? 'reverse' : 'forward')
        : (flowDirection === 'reverse' ? 'reverse' : 'forward');
      const rounded = cfg.rounded !== false;
      const showStartArrow = arrows === 'start' || arrows === 'both';
      const showEndArrow = arrows === 'end' || arrows === 'both';
      const currentColor = active ? activeColor : inactiveColor;
      const { path, start, end } = this._buildPath_(direction);
      const { cap, join, dasharray } = this._getLineStyle_(cfg.line_style, thickness, rounded);
      const flowDashLength = Math.max(18, thickness * 2.4);
      const flowGapLength = Math.max(10, thickness * 1.35);
      const flowDash = `${flowDashLength} ${flowGapLength}`;
      const title = String(cfg.title || '').trim();
      const markerStart = showStartArrow ? 'url(#ddc-line-arrow-start)' : 'none';
      const markerEnd = showEndArrow ? 'url(#ddc-line-arrow-end)' : 'none';

      this._shellEl.style.setProperty('--ddc-line-active', activeColor);
      this._shellEl.style.setProperty('--ddc-line-inactive', inactiveColor);
      this._shellEl.style.setProperty('--ddc-line-color', currentColor);
      this._shellEl.style.setProperty('--ddc-line-thickness', `${thickness}`);
      this._shellEl.style.setProperty('--ddc-line-speed', speed);
      this._shellEl.style.setProperty('--ddc-line-flow-cycle', `${flowDashLength + flowGapLength}`);
      this._shellEl.classList.toggle('is-active', active);
      this._shellEl.classList.toggle('is-idle', !active);
      this._shellEl.classList.toggle('is-animating', shouldAnimate);
      this._shellEl.classList.toggle('is-glow', cfg.glow !== false);
      this._shellEl.classList.toggle('show-start-dot', !showStartArrow);
      this._shellEl.classList.toggle('show-end-dot', !showEndArrow);

      this._titleEl.hidden = !title;
      this._titleEl.textContent = title;

      this._canvasEl.innerHTML = `
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="presentation" aria-hidden="true">
          <defs>
            <marker id="ddc-line-arrow-end" markerWidth="12" markerHeight="12" refX="10.4" refY="6" orient="auto" markerUnits="strokeWidth">
              <path d="M 0 0 L 12 6 L 0 12 z" fill="${__ddcLineEscapeAttr__(currentColor)}"></path>
            </marker>
            <marker id="ddc-line-arrow-start" markerWidth="12" markerHeight="12" refX="1.6" refY="6" orient="auto-start-reverse" markerUnits="strokeWidth">
              <path d="M 12 0 L 0 6 L 12 12 z" fill="${__ddcLineEscapeAttr__(currentColor)}"></path>
            </marker>
          </defs>
          <path
            class="track"
            d="${path}"
            stroke-linecap="${cap}"
            stroke-linejoin="${join}"
            ${dasharray ? `stroke-dasharray="${dasharray}"` : ''}
          ></path>
          <path
            class="line"
            d="${path}"
            marker-start="${markerStart}"
            marker-end="${markerEnd}"
            stroke-linecap="${cap}"
            stroke-linejoin="${join}"
            ${dasharray ? `stroke-dasharray="${dasharray}"` : ''}
          ></path>
          <path
            class="flow ${resolvedFlowDirection === 'reverse' ? 'reverse' : 'forward'}"
            d="${path}"
            marker-start="${showStartArrow && resolvedFlowDirection === 'reverse' ? markerStart : 'none'}"
            marker-end="${showEndArrow && resolvedFlowDirection !== 'reverse' ? markerEnd : 'none'}"
            stroke-dasharray="${flowDash}"
            stroke-linecap="${cap}"
            stroke-linejoin="${join}"
          ></path>
          <circle class="endpoint start" cx="${start[0]}" cy="${start[1]}" r="${Math.max(2.8, Math.min(7.5, thickness * 0.52))}"></circle>
          <circle class="endpoint end" cx="${end[0]}" cy="${end[1]}" r="${Math.max(2.8, Math.min(7.5, thickness * 0.52))}"></circle>
        </svg>`;
    }
  }

  class DdcLineCardEditor extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._config = DdcLineCard.getStubConfig();
      this._emitTimer = null;
      this._configSig = '';
    }

    setConfig(config) {
      const next = {
        ...DdcLineCard.getStubConfig(),
        ...(config || {})
      };
      const sig = JSON.stringify(next);
      if (sig === this._configSig) return;
      this._configSig = sig;
      this._config = next;
      this._renderEditor_();
    }

    set hass(hass) {
      this._hass = hass;
      if (!this.shadowRoot.childElementCount) this._renderEditor_();
    }

    _queueEmit_() {
      clearTimeout(this._emitTimer);
      this._emitTimer = setTimeout(() => {
        this.dispatchEvent(new CustomEvent('config-changed', {
          detail: { config: { ...this._config } }
        }));
      }, 120);
    }

    _bindText_(selector, key) {
      const input = this.shadowRoot.querySelector(selector);
      if (!input) return;
      input.addEventListener('input', () => {
        this._config[key] = input.value;
        this._queueEmit_();
      });
    }

    _bindSelect_(selector, key) {
      const input = this.shadowRoot.querySelector(selector);
      if (!input) return;
      input.addEventListener('change', () => {
        this._config[key] = input.value;
        this._queueEmit_();
      });
    }

    _bindNumber_(selector, key) {
      const input = this.shadowRoot.querySelector(selector);
      if (!input) return;
      const commit = () => {
        const val = input.value === '' ? '' : Number(input.value);
        this._config[key] = Number.isFinite(val) ? val : this._config[key];
        this._queueEmit_();
      };
      input.addEventListener('change', commit);
      input.addEventListener('blur', commit);
    }

    _bindCheckbox_(selector, key) {
      const input = this.shadowRoot.querySelector(selector);
      if (!input) return;
      input.addEventListener('change', () => {
        this._config[key] = !!input.checked;
        this._queueEmit_();
      });
    }

    _renderEditor_() {
      const cfg = this._config || DdcLineCard.getStubConfig();
      const entityOptions = Object.keys(this._hass?.states || {})
        .sort((a, b) => a.localeCompare(b))
        .map((entityId) => `<option value="${__ddcLineEscapeAttr__(entityId)}"></option>`)
        .join('');

      this.shadowRoot.innerHTML = `
        <style>
          :host{
            display:block;
            color:var(--primary-text-color);
          }
          .editor{
            display:grid;
            gap:14px;
          }
          .intro{
            display:grid;
            gap:8px;
            padding:14px 16px;
            border-radius:16px;
            background:rgba(255,255,255,.025);
            border:1px solid rgba(255,255,255,.08);
            line-height:1.5;
            color:var(--secondary-text-color, #94a3b8);
          }
          .intro strong{
            color:var(--primary-text-color);
          }
          .grid{
            display:grid;
            gap:14px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
          .field{
            display:grid;
            gap:8px;
            min-width:0;
          }
          .field.full{
            grid-column:1 / -1;
          }
          label{
            display:grid;
            gap:6px;
            font-size:.9rem;
            font-weight:650;
          }
          .hint{
            font-size:.78rem;
            color:var(--secondary-text-color, #94a3b8);
            font-weight:500;
            line-height:1.45;
          }
          input[type="text"], input[type="number"], select{
            width:100%;
            box-sizing:border-box;
            border-radius:14px;
            border:1px solid rgba(255,255,255,.1);
            background:rgba(4,9,18,.82);
            color:var(--primary-text-color);
            padding:12px 14px;
            outline:none;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
            font:inherit;
          }
          input[type="text"]:focus,
          input[type="number"]:focus,
          select:focus{
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, rgba(255,255,255,.12));
            box-shadow:
              0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent),
              inset 0 1px 0 rgba(255,255,255,.04);
          }
          .toggles{
            display:flex;
            align-items:center;
            gap:12px;
            flex-wrap:wrap;
          }
          .switch{
            display:inline-flex;
            align-items:center;
            gap:10px;
            min-height:48px;
            padding:0 14px;
            border-radius:14px;
            border:1px solid rgba(255,255,255,.08);
            background:rgba(255,255,255,.03);
          }
          @media (max-width: 760px){
            .grid{
              grid-template-columns:1fr;
            }
            .field.full{
              grid-column:auto;
            }
          }
        </style>
        <div class="editor">
          <div class="intro">
            <strong>Connect cards with a live line</strong>
            <span>Use this as a transparent overlay card between other cards. You can animate the line, switch arrows, and tie the active style to a Home Assistant entity state.</span>
          </div>

          <datalist id="ddc-line-entities">${entityOptions}</datalist>

          <div class="grid">
            <label class="field">
              <span>Title</span>
              <input id="title" type="text" value="${__ddcLineEscapeAttr__(cfg.title || '')}" placeholder="Optional label">
            </label>

            <label class="field">
              <span>Entity</span>
              <input id="entity" type="text" list="ddc-line-entities" value="${__ddcLineEscapeAttr__(cfg.entity || '')}" placeholder="sensor.energy_flow">
              <span class="hint">Used to decide active state and auto flow direction.</span>
            </label>

            <label class="field full">
              <span>Active states</span>
              <input id="active_states" type="text" value="${__ddcLineEscapeAttr__(cfg.active_states || '')}" placeholder="on,home,open,>0">
              <span class="hint">Comma-separated. Supports exact states and numeric rules like <code>&gt;0</code>, <code>&lt;=10</code>.</span>
            </label>

            <label class="field">
              <span>Direction</span>
              <select id="direction">
                ${this._option_('horizontal', 'Horizontal', cfg.direction)}
                ${this._option_('vertical', 'Vertical', cfg.direction)}
                ${this._option_('diagonal-down', 'Diagonal down', cfg.direction)}
                ${this._option_('diagonal-up', 'Diagonal up', cfg.direction)}
                ${this._option_('elbow-right-down', 'Elbow right down', cfg.direction)}
                ${this._option_('elbow-right-up', 'Elbow right up', cfg.direction)}
                ${this._option_('elbow-left-down', 'Elbow left down', cfg.direction)}
                ${this._option_('elbow-left-up', 'Elbow left up', cfg.direction)}
                ${this._option_('auto', 'Auto (width/height)', cfg.direction)}
              </select>
            </label>

            <label class="field">
              <span>Arrows</span>
              <select id="arrows">
                ${this._option_('none', 'No arrows', cfg.arrows)}
                ${this._option_('start', 'Arrow at start', cfg.arrows)}
                ${this._option_('end', 'Arrow at end', cfg.arrows)}
                ${this._option_('both', 'Arrow at both ends', cfg.arrows)}
              </select>
            </label>

            <label class="field">
              <span>Flow direction</span>
              <select id="flow_direction">
                ${this._option_('auto', 'Auto from entity value', cfg.flow_direction)}
                ${this._option_('forward', 'Forward', cfg.flow_direction)}
                ${this._option_('reverse', 'Reverse', cfg.flow_direction)}
              </select>
            </label>

            <label class="field">
              <span>Line style</span>
              <select id="line_style">
                ${this._option_('solid', 'Solid', cfg.line_style)}
                ${this._option_('dashed', 'Dashed', cfg.line_style)}
                ${this._option_('dotted', 'Dotted', cfg.line_style)}
              </select>
            </label>

            <label class="field">
              <span>Animate</span>
              <select id="animate_mode">
                ${this._option_('active', 'Only when active', cfg.animate_mode)}
                ${this._option_('always', 'Always', cfg.animate_mode)}
                ${this._option_('never', 'Never', cfg.animate_mode)}
              </select>
            </label>

            <label class="field">
              <span>Thickness</span>
              <input id="thickness" type="number" min="2" max="28" step="1" value="${__ddcLineEscapeAttr__(cfg.thickness ?? 10)}">
            </label>

            <label class="field">
              <span>Animation speed (s)</span>
              <input id="animation_speed" type="number" min="0.4" max="8" step="0.1" value="${__ddcLineEscapeAttr__(cfg.animation_speed ?? 1.8)}">
            </label>

            <label class="field">
              <span>Active color</span>
              <input id="active_color" type="text" value="${__ddcLineEscapeAttr__(cfg.active_color || '')}" placeholder="var(--primary-color)">
            </label>

            <label class="field">
              <span>Inactive color</span>
              <input id="inactive_color" type="text" value="${__ddcLineEscapeAttr__(cfg.inactive_color || '')}" placeholder="rgba(148,163,184,.42)">
            </label>

            <div class="field full">
              <span>Toggles</span>
              <div class="toggles">
                <label class="switch">
                  <input id="glow" type="checkbox" ${cfg.glow !== false ? 'checked' : ''}>
                  <span>Glow</span>
                </label>
                <label class="switch">
                  <input id="rounded" type="checkbox" ${cfg.rounded !== false ? 'checked' : ''}>
                  <span>Rounded corners / caps</span>
                </label>
              </div>
            </div>
          </div>
        </div>`;

      this._bindText_('#title', 'title');
      this._bindText_('#entity', 'entity');
      this._bindText_('#active_states', 'active_states');
      this._bindText_('#active_color', 'active_color');
      this._bindText_('#inactive_color', 'inactive_color');
      this._bindSelect_('#direction', 'direction');
      this._bindSelect_('#arrows', 'arrows');
      this._bindSelect_('#flow_direction', 'flow_direction');
      this._bindSelect_('#line_style', 'line_style');
      this._bindSelect_('#animate_mode', 'animate_mode');
      this._bindNumber_('#thickness', 'thickness');
      this._bindNumber_('#animation_speed', 'animation_speed');
      this._bindCheckbox_('#glow', 'glow');
      this._bindCheckbox_('#rounded', 'rounded');
    }

    _option_(value, label, current) {
      return `<option value="${__ddcLineEscapeAttr__(value)}" ${String(current || '') === value ? 'selected' : ''}>${__ddcLineEscapeHtml__(label)}</option>`;
    }
  }

  class DdcTableCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._config = DdcTableCard.getStubConfig();
      this._hass = null;
      this._shellReady = false;
      this._boundCellClick = this._handleCellClick_.bind(this);
    }

    static getStubConfig() {
      return {
        type: 'custom:ddc-table-card',
        title: '',
        rows: 3,
        columns: 3,
        header_row: true,
        border: true,
        radius: 16,
        spacing: 8,
        cells: __ddcTableEnsureCells__(3, 3, [])
      };
    }

    static async getConfigElement() {
      return document.createElement(DDC_TABLE_CARD_EDITOR_TAG);
    }

    async getConfigElement() {
      return document.createElement(DDC_TABLE_CARD_EDITOR_TAG);
    }

    setConfig(config) {
      this._config = __ddcTableNormalizeConfig__(config);
      this._renderCard_();
    }

    set hass(hass) {
      this._hass = hass;
      this._renderCard_();
    }

    get hass() {
      return this._hass;
    }

    connectedCallback() {
      if (this._config) this._renderCard_();
    }

    disconnectedCallback() {
      this._gridEl?.removeEventListener?.('click', this._boundCellClick);
    }

    getCardSize() {
      const rows = Number(this._config?.rows || 3) || 3;
      return Math.max(1, Math.ceil((rows + (this._config?.title ? 1 : 0)) / 2));
    }

    _ensureShell_() {
      if (this._shellReady || !this.shadowRoot) return;
      this.shadowRoot.innerHTML = `
        <style>
          :host{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            color:var(--primary-text-color);
          }
          ha-card{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            background:transparent;
            box-shadow:none;
            border-radius:inherit;
            overflow:visible;
          }
          .shell{
            display:grid;
            grid-template-rows:minmax(0, 1fr);
            gap:12px;
            width:100%;
            height:100%;
            min-height:100%;
            padding:8px;
            box-sizing:border-box;
            container-type:size;
            overflow:hidden;
          }
          .shell.has-title{
            grid-template-rows:auto minmax(0, 1fr);
          }
          .title{
            display:none;
            margin:0;
            font-size:1rem;
            font-weight:800;
            letter-spacing:0;
            line-height:1.1;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
          .title.show{
            display:block;
          }
          .table-grid{
            display:grid;
            grid-template-columns:repeat(var(--ddc-table-columns, 3), minmax(0, 1fr));
            grid-template-rows:repeat(var(--ddc-table-rows, 3), minmax(0, 1fr));
            gap:var(--ddc-table-gap, 8px);
            align-content:stretch;
            height:100%;
            min-height:0;
            overflow:hidden;
          }
          .table-cell{
            min-height:0;
            display:grid;
            gap:8px;
            align-content:center;
            justify-items:start;
            padding:14px;
            box-sizing:border-box;
            border-radius:var(--ddc-table-radius, 16px);
            background:var(--ddc-table-cell-fill, rgba(255,255,255,.035));
            border:1px solid var(--ddc-table-cell-border, rgba(255,255,255,.08));
            text-align:left;
            overflow:hidden;
            position:relative;
            min-width:0;
          }
          .table-cell.align-center{
            justify-items:center;
            text-align:center;
          }
          .table-cell.align-right{
            justify-items:end;
            text-align:right;
          }
          .table-cell.no-border{
            border-color:transparent;
          }
          .table-cell.is-header{
            min-height:0;
            align-content:center;
            background:rgba(255,255,255,.055);
            border-color:rgba(255,255,255,.1);
          }
          .table-cell.is-header .cell-text,
          .table-cell.is-header .cell-label{
            font-size:.76rem;
            font-weight:800;
            letter-spacing:.08em;
            text-transform:uppercase;
            color:rgba(241,245,249,.96);
          }
          .table-cell.is-merged{
            align-content:center;
          }
          .cell-stack{
            display:grid;
            gap:6px;
            min-width:0;
            min-height:0;
            width:100%;
          }
          .cell-label{
            font-size:.78rem;
            font-weight:700;
            color:rgba(203,213,225,.88);
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
          .cell-value,
          .cell-text{
            font-size:1rem;
            font-weight:800;
            line-height:1.15;
            overflow:hidden;
            text-overflow:ellipsis;
            overflow-wrap:anywhere;
            display:-webkit-box;
            -webkit-line-clamp:2;
            -webkit-box-orient:vertical;
          }
          .cell-value{
            font-size:1.1rem;
          }
          .cell-meta{
            font-size:.8rem;
            color:rgba(203,213,225,.76);
          }
          .cell-icon-chip{
            width:42px;
            height:42px;
            display:grid;
            place-items:center;
            border-radius:14px;
            background:color-mix(in srgb, var(--ddc-table-cell-tone, rgba(148,163,184,.35)) 22%, rgba(255,255,255,.04));
            color:var(--ddc-table-cell-tone, var(--primary-color, #ff9800));
            flex-shrink:0;
          }
          .cell-icon-chip ha-icon{
            --mdc-icon-size:24px;
            width:24px;
            height:24px;
          }
          .cell-inline{
            display:flex;
            align-items:center;
            gap:10px;
            min-width:0;
            width:100%;
          }
          .cell-badge{
            display:inline-flex;
            align-items:center;
            gap:8px;
            width:fit-content;
            max-width:100%;
            padding:8px 12px;
            border-radius:999px;
            background:color-mix(in srgb, var(--ddc-table-cell-tone, rgba(148,163,184,.4)) 18%, rgba(255,255,255,.04));
            color:var(--ddc-table-cell-tone, var(--primary-color, #ff9800));
            font-size:.82rem;
            font-weight:800;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
          .cell-badge ha-icon{
            --mdc-icon-size:16px;
            width:16px;
            height:16px;
            flex:0 0 auto;
          }
          .cell-button{
            display:inline-flex;
            align-items:center;
            justify-content:center;
            gap:8px;
            min-height:42px;
            width:100%;
            max-width:100%;
            padding:11px 14px;
            border:0;
            border-radius:14px;
            background:linear-gradient(180deg, color-mix(in srgb, var(--ddc-table-cell-tone, var(--primary-color, #ff9800)) 82%, #fff 10%), color-mix(in srgb, var(--ddc-table-cell-tone, var(--primary-color, #ff9800)) 92%, #000 4%));
            color:#fff;
            font:inherit;
            font-weight:800;
            cursor:pointer;
            box-shadow:0 8px 20px color-mix(in srgb, var(--ddc-table-cell-tone, var(--primary-color, #ff9800)) 20%, transparent);
            min-width:0;
          }
          .cell-button:disabled{
            opacity:.52;
            cursor:default;
          }
          .cell-button ha-icon{
            --mdc-icon-size:18px;
            width:18px;
            height:18px;
            flex:0 0 auto;
          }
          .cell-button span{
            min-width:0;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
          @container (max-height: 260px){
            .shell{
              gap:8px;
              padding:6px;
            }
            .table-cell{
              gap:4px;
              padding:8px;
            }
            .cell-icon-chip{
              width:34px;
              height:34px;
              border-radius:10px;
            }
            .cell-icon-chip ha-icon{
              --mdc-icon-size:20px;
              width:20px;
              height:20px;
            }
            .cell-label,
            .cell-meta{
              font-size:.74rem;
            }
            .cell-value,
            .cell-text{
              font-size:.92rem;
            }
            .cell-button{
              min-height:34px;
              padding:8px 10px;
            }
          }
          @media (prefers-reduced-motion: reduce){
            .cell-button{
              transition:none;
            }
          }
        </style>
        <ha-card>
          <div class="shell">
            <h3 class="title"></h3>
            <div class="table-grid"></div>
          </div>
        </ha-card>`;
      this._shellEl = this.shadowRoot.querySelector('.shell');
      this._titleEl = this.shadowRoot.querySelector('.title');
      this._gridEl = this.shadowRoot.querySelector('.table-grid');
      this._gridEl?.addEventListener('click', this._boundCellClick);
      this._shellReady = true;
    }

    _handleCellClick_(ev) {
      const button = ev.target?.closest?.('[data-table-button-index]');
      if (!button) return;
      ev.stopPropagation();
      const index = Number(button.dataset.tableButtonIndex);
      if (!Number.isFinite(index)) return;
      const cell = this._config?.cells?.[index];
      if (!cell) return;
      this._runButtonAction_(cell);
    }

    _fireMoreInfo_(entityId) {
      if (!entityId) return;
      try {
        this.dispatchEvent(new CustomEvent('hass-more-info', {
          detail: { entityId },
          bubbles: true,
          composed: true
        }));
      } catch {}
    }

    _runButtonAction_(cell) {
      const entityId = String(cell?.entity || '').trim();
      const action = String(cell?.button_action || 'more-info').toLowerCase();
      if (!entityId || action === 'none') return;
      if (action === 'toggle') {
        try { this._hass?.callService?.('homeassistant', 'toggle', { entity_id: entityId }); } catch {}
        return;
      }
      this._fireMoreInfo_(entityId);
    }

    _formatEntityState_(entity) {
      if (!entity) return '--';
      const stateValue = String(entity.state ?? '').trim() || '--';
      const unit = String(entity.attributes?.unit_of_measurement || '').trim();
      if (!unit) return stateValue;
      return stateValue.includes(unit) ? stateValue : `${stateValue} ${unit}`;
    }

    _resolveCellContext_(cell) {
      const entityId = String(cell?.entity || '').trim();
      const entity = entityId ? this._hass?.states?.[entityId] : null;
      const stateValue = entity?.state ?? '';
      const active = entityId ? __ddcLineIsActive__(stateValue, cell.active_states) : false;
      const activeColor = String(cell?.active_color || 'var(--primary-color, #ff9800)');
      const inactiveColor = String(cell?.inactive_color || 'rgba(148, 163, 184, 0.18)');
      const tone = active ? activeColor : inactiveColor;
      const fill = entityId
        ? `color-mix(in srgb, ${tone} ${active ? 18 : 12}%, rgba(8, 15, 27, 0.94))`
        : 'rgba(255,255,255,.035)';
      const border = entityId
        ? `color-mix(in srgb, ${tone} ${active ? 52 : 26}%, rgba(255,255,255,.08))`
        : 'rgba(255,255,255,.08)';
      const friendly = String(entity?.attributes?.friendly_name || entityId || '').trim();
      return {
        entity,
        entityId,
        stateValue,
        active,
        tone,
        fill,
        border,
        friendly,
        stateLabel: this._formatEntityState_(entity)
      };
    }

    _renderCellMarkup_(cell, index, columns, layoutItem = null) {
      const context = this._resolveCellContext_(cell);
      const align = ['left', 'center', 'right'].includes(String(cell.align || '').toLowerCase())
        ? String(cell.align).toLowerCase()
        : 'left';
      const row = Math.floor(index / Math.max(1, columns));
      const isHeader = !!this._config?.header_row && row === 0;
      const text = String(cell.text || '').trim();
      const icon = String(cell.icon || context.entity?.attributes?.icon || '').trim();
      const cellType = String(cell.type || 'text').toLowerCase();
      const label = text || context.friendly || `Cell ${index + 1}`;
      const stateLabel = context.stateLabel || '--';
      const classes = [
        'table-cell',
        `align-${align}`,
        isHeader ? 'is-header' : '',
        layoutItem && (layoutItem.colSpan > 1 || layoutItem.rowSpan > 1) ? 'is-merged' : '',
        this._config?.border === false ? 'no-border' : ''
      ].filter(Boolean).join(' ');
      const placement = layoutItem
        ? `grid-column:${layoutItem.col + 1} / span ${layoutItem.colSpan};grid-row:${layoutItem.row + 1} / span ${layoutItem.rowSpan};`
        : '';
      const style = `${placement}--ddc-table-cell-tone:${__ddcTableEscapeAttr__(context.tone)};--ddc-table-cell-fill:${__ddcTableEscapeAttr__(context.fill)};--ddc-table-cell-border:${__ddcTableEscapeAttr__(context.border)};`;
      if (cellType === 'icon') {
        return `
          <article class="${classes}" style="${style}">
            <div class="cell-inline">
              <div class="cell-icon-chip">${icon ? `<ha-icon icon="${__ddcTableEscapeAttr__(icon)}"></ha-icon>` : ''}</div>
              <div class="cell-stack">
                <span class="cell-label">${__ddcTableEscapeHtml__(label)}</span>
                ${context.entityId ? `<span class="cell-meta">${__ddcTableEscapeHtml__(stateLabel)}</span>` : ''}
              </div>
            </div>
          </article>`;
      }
      if (cellType === 'entity') {
        return `
          <article class="${classes}" style="${style}">
            <div class="cell-stack">
              <span class="cell-label">${__ddcTableEscapeHtml__(label)}</span>
              <strong class="cell-value">${__ddcTableEscapeHtml__(stateLabel)}</strong>
            </div>
          </article>`;
      }
      if (cellType === 'badge') {
        return `
          <article class="${classes}" style="${style}">
            <div class="cell-stack">
              ${text ? `<span class="cell-label">${__ddcTableEscapeHtml__(text)}</span>` : ''}
              <span class="cell-badge">${icon ? `<ha-icon icon="${__ddcTableEscapeAttr__(icon)}"></ha-icon>` : ''}${__ddcTableEscapeHtml__(stateLabel)}</span>
            </div>
          </article>`;
      }
      if (cellType === 'button') {
        const buttonLabel = text || context.friendly || 'Open';
        const iconMarkup = icon ? `<ha-icon icon="${__ddcTableEscapeAttr__(icon)}"></ha-icon>` : '';
        return `
          <article class="${classes}" style="${style}">
            <div class="cell-stack">
              <button class="cell-button" type="button" data-table-button-index="${index}" ${context.entityId ? '' : 'disabled'}>
                ${iconMarkup}<span>${__ddcTableEscapeHtml__(buttonLabel)}</span>
              </button>
              ${context.entityId ? `<span class="cell-meta">${__ddcTableEscapeHtml__(stateLabel)}</span>` : `<span class="cell-meta">Assign an entity to enable this button.</span>`}
            </div>
          </article>`;
      }
      return `
        <article class="${classes}" style="${style}">
          <div class="cell-stack">
            <span class="cell-text">${__ddcTableEscapeHtml__(label)}</span>
            ${context.entityId ? `<span class="cell-meta">${__ddcTableEscapeHtml__(stateLabel)}</span>` : ''}
          </div>
        </article>`;
    }

    _renderCard_() {
      this._ensureShell_();
      if (!this._gridEl || !this._titleEl || !this._config) return;
      const cfg = this._config;
      this._titleEl.textContent = String(cfg.title || '').trim();
      this._titleEl.classList.toggle('show', !!String(cfg.title || '').trim());
      this._shellEl?.classList.toggle('has-title', !!String(cfg.title || '').trim());
      this._gridEl.style.setProperty('--ddc-table-columns', `${Math.max(1, Number(cfg.columns || 3) || 3)}`);
      this._gridEl.style.setProperty('--ddc-table-rows', `${Math.max(1, Number(cfg.rows || 3) || 3)}`);
      this._gridEl.style.setProperty('--ddc-table-gap', `${Math.max(0, Number(cfg.spacing || 8) || 0)}px`);
      this._gridEl.style.setProperty('--ddc-table-radius', `${Math.max(0, Number(cfg.radius || 16) || 0)}px`);
      const layout = __ddcTableBuildLayout__(cfg.rows || 3, cfg.columns || 3, cfg.cells || []);
      this._gridEl.innerHTML = layout.items
        .filter((item) => !item.hidden)
        .map((item) => this._renderCellMarkup_(item.cell, item.index, cfg.columns || 3, item))
        .join('');
    }
  }

  class DdcTableCardEditor extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._config = DdcTableCard.getStubConfig();
      this._configSig = '';
      this._emitTimer = null;
      this._eventsBound = false;
      this._selectedCellIndex = 0;
      this._onInput = this._handleEditorInput_.bind(this);
      this._onChange = this._handleEditorChange_.bind(this);
      this._onBlur = this._handleEditorBlur_.bind(this);
      this._onClick = this._handleEditorClick_.bind(this);
    }

    setConfig(config) {
      const next = this._normalizeConfig_(config || {});
      const sig = JSON.stringify(next);
      if (sig === this._configSig) return;
      this._configSig = sig;
      this._config = next;
      this._renderEditor_();
    }

    set hass(hass) {
      this._hass = hass;
      if (!this.shadowRoot.childElementCount) this._renderEditor_();
      else this._updatePreview_();
    }

    disconnectedCallback() {
      clearTimeout(this._emitTimer);
      if (!this._eventsBound || !this.shadowRoot) return;
      this.shadowRoot.removeEventListener('input', this._onInput);
      this.shadowRoot.removeEventListener('change', this._onChange);
      this.shadowRoot.removeEventListener('blur', this._onBlur, true);
      this.shadowRoot.removeEventListener('click', this._onClick);
      this._eventsBound = false;
    }

    _normalizeConfig_(config) {
      return __ddcTableNormalizeConfig__(config);
    }

    _queueEmit_() {
      clearTimeout(this._emitTimer);
      this._emitTimer = setTimeout(() => {
        const config = __ddcTableCloneConfig__(this._config);
        this._configSig = JSON.stringify(config);
        this.dispatchEvent(new CustomEvent('config-changed', {
          detail: { config }
        }));
      }, 120);
    }

    _ensureListeners_() {
      if (this._eventsBound || !this.shadowRoot) return;
      this.shadowRoot.addEventListener('input', this._onInput);
      this.shadowRoot.addEventListener('change', this._onChange);
      this.shadowRoot.addEventListener('blur', this._onBlur, true);
      this.shadowRoot.addEventListener('click', this._onClick);
      this._eventsBound = true;
    }

    _handleEditorInput_(ev) {
      const target = ev.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.id === 'tableTitle') {
        this._config.title = target.value || '';
        this._syncControls_();
        this._updatePreview_();
        this._queueEmit_();
        return;
      }
      if (target.id === 'tableRadius' || target.id === 'tableRadiusRange') {
        this._config.radius = __ddcLineNormalizeNumber__(target.value, this._config.radius || 16, 0, 40);
        this._syncControls_();
        this._updatePreview_();
        this._queueEmit_();
        return;
      }
      if (target.id === 'tableSpacing' || target.id === 'tableSpacingRange') {
        this._config.spacing = __ddcLineNormalizeNumber__(target.value, this._config.spacing || 8, 0, 32);
        this._syncControls_();
        this._updatePreview_();
        this._queueEmit_();
        return;
      }
      if (!target.dataset.cellIndex) return;
      this._updateCellField_(target);
    }

    _handleEditorChange_(ev) {
      const target = ev.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.id === 'tableRows' || target.id === 'tableColumns') {
        this._applyDimensionsFromInputs_();
        return;
      }
      if (target.id === 'tableHeaderRow') {
        this._config.header_row = !!target.checked;
        this._updatePreview_();
        this._queueEmit_();
        return;
      }
      if (target.id === 'tableBorder') {
        this._config.border = !!target.checked;
        this._updatePreview_();
        this._queueEmit_();
        return;
      }
      if (target.id === 'tableRadius' || target.id === 'tableRadiusRange') {
        this._config.radius = __ddcLineNormalizeNumber__(target.value, this._config.radius || 16, 0, 40);
        this._syncControls_();
        this._updatePreview_();
        this._queueEmit_();
        return;
      }
      if (target.id === 'tableSpacing' || target.id === 'tableSpacingRange') {
        this._config.spacing = __ddcLineNormalizeNumber__(target.value, this._config.spacing || 8, 0, 32);
        this._syncControls_();
        this._updatePreview_();
        this._queueEmit_();
        return;
      }
      if (!target.dataset.cellIndex) return;
      this._updateCellField_(target);
    }

    _handleEditorBlur_(ev) {
      const target = ev.target;
      if (!(target instanceof HTMLElement)) return;
      if (target.id === 'tableRows' || target.id === 'tableColumns') {
        this._applyDimensionsFromInputs_();
      }
    }

    _applyDimensionsFromInputs_() {
      const rowsInput = this.shadowRoot.querySelector('#tableRows');
      const columnsInput = this.shadowRoot.querySelector('#tableColumns');
      const rows = __ddcLineNormalizeNumber__(rowsInput?.value, this._config.rows || 3, 1, 18);
      const columns = __ddcLineNormalizeNumber__(columnsInput?.value, this._config.columns || 3, 1, 12);
      if (rows === this._config.rows && columns === this._config.columns) return;
      this._config.rows = rows;
      this._config.columns = columns;
      this._config.cells = __ddcTableEnsureCells__(rows, columns, this._config.cells || []);
      this._selectedCellIndex = Math.min(this._selectedCellIndex || 0, this._config.cells.length - 1);
      this._renderEditor_();
      this._queueEmit_();
    }

    _updateCellField_(target) {
      const index = Number(target.dataset.cellIndex);
      const key = String(target.dataset.key || '').trim();
      if (!Number.isFinite(index) || !key || !this._config?.cells?.[index]) return;
      const cell = { ...this._config.cells[index] };
      let value = target.type === 'checkbox' ? !!target.checked : target.value;
      if (['type', 'align', 'button_action'].includes(key)) value = String(value || '').toLowerCase();
      if (key === 'col_span') {
        const col = index % Math.max(1, Number(this._config.columns || 3) || 3);
        const maxColSpan = Math.max(1, (Number(this._config.columns || 3) || 3) - col);
        value = Math.round(__ddcLineNormalizeNumber__(value, cell.col_span || 1, 1, maxColSpan));
      }
      if (key === 'row_span') {
        const row = Math.floor(index / Math.max(1, Number(this._config.columns || 3) || 3));
        const maxRowSpan = Math.max(1, (Number(this._config.rows || 3) || 3) - row);
        value = Math.round(__ddcLineNormalizeNumber__(value, cell.row_span || 1, 1, maxRowSpan));
      }
      if (['text', 'icon', 'entity', 'active_states', 'active_color', 'inactive_color'].includes(key)) value = String(value || '');
      cell[key] = value;
      this._config.cells[index] = __ddcTableNormalizeCell__(cell, index, this._config.columns || 3, this._config.rows || 3);
      const badge = target.closest('.cell-card')?.querySelector('.cell-card-type');
      if (badge && key === 'type') {
        badge.textContent = this._labelForType_(value);
      }
      this._syncCellSpanControls_(index);
      this._refreshCellCoverageUI_();
      this._syncVisualMergeUI_();
      this._updatePreview_();
      this._queueEmit_();
    }

    _syncControls_() {
      if (!this.shadowRoot || !this._config) return;
      const cfg = this._config;
      const setValue = (selector, value) => {
        const el = this.shadowRoot.querySelector(selector);
        if (el && String(el.value) !== String(value)) el.value = String(value);
      };
      const setText = (selector, value) => {
        this.shadowRoot.querySelectorAll(selector).forEach((el) => {
          el.textContent = value;
        });
      };
      setValue('#tableTitle', cfg.title || '');
      setValue('#tableRows', cfg.rows || 3);
      setValue('#tableColumns', cfg.columns || 3);
      setValue('#tableRadius', cfg.radius ?? 16);
      setValue('#tableRadiusRange', cfg.radius ?? 16);
      setValue('#tableSpacing', cfg.spacing ?? 8);
      setValue('#tableSpacingRange', cfg.spacing ?? 8);
      setText('[data-table-size-output]', `${cfg.rows || 3} x ${cfg.columns || 3}`);
      setText('[data-table-radius-output]', `${Math.round(cfg.radius ?? 16)}px`);
      setText('[data-table-spacing-output]', `${Math.round(cfg.spacing ?? 8)}px`);
      this.shadowRoot.querySelectorAll('[data-table-preset]').forEach((btn) => {
        const [rows, columns] = String(btn.dataset.tablePreset || '').split('x').map((value) => Number(value));
        const active = rows === Number(cfg.rows || 3) && columns === Number(cfg.columns || 3);
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
      });
    }

    _updatePreview_() {
      // The live table preview is rendered by the card picker preview pane.
    }

    _updateCellSummary_(index) {
      const cell = this._config?.cells?.[index];
      const card = this.shadowRoot?.querySelector?.(`.cell-card[data-cell-index="${index}"]`);
      if (!cell || !card) return;
      const badge = card.querySelector('.cell-card-type');
      if (badge) badge.textContent = this._labelForType_(cell.type);
      const summary = card.querySelector('[data-cell-summary]');
      if (summary) {
        const label = String(cell.text || cell.entity || cell.icon || `Cell ${index + 1}`).trim();
        summary.textContent = label;
      }
    }

    _syncCellSpanControls_(index) {
      const cell = this._config?.cells?.[index];
      if (!cell || !this.shadowRoot) return;
      const colSpan = Math.max(1, Number(cell.col_span || 1) || 1);
      const rowSpan = Math.max(1, Number(cell.row_span || 1) || 1);
      this.shadowRoot.querySelectorAll(`[data-cell-index="${index}"][data-key="col_span"]`).forEach((el) => {
        if ('value' in el && String(el.value) !== String(colSpan)) el.value = String(colSpan);
      });
      this.shadowRoot.querySelectorAll(`[data-cell-index="${index}"][data-key="row_span"]`).forEach((el) => {
        if ('value' in el && String(el.value) !== String(rowSpan)) el.value = String(rowSpan);
      });
      const colOutput = this.shadowRoot.querySelector(`[data-cell-span-output="${index}:col"]`);
      if (colOutput) colOutput.textContent = `${colSpan} col${colSpan === 1 ? '' : 's'}`;
      const rowOutput = this.shadowRoot.querySelector(`[data-cell-span-output="${index}:row"]`);
      if (rowOutput) rowOutput.textContent = `${rowSpan} row${rowSpan === 1 ? '' : 's'}`;
    }

    _layoutForEditor_() {
      return __ddcTableBuildLayout__(this._config?.rows || 3, this._config?.columns || 3, this._config?.cells || []);
    }

    _visibleOriginForIndex_(index, layout = this._layoutForEditor_()) {
      const safeIndex = Math.max(0, Math.min(Number(index) || 0, (layout.items.length || 1) - 1));
      const item = layout.items[safeIndex];
      if (item?.hidden && Number.isFinite(Number(item.coveredBy))) return Number(item.coveredBy);
      return item ? safeIndex : 0;
    }

    _selectedLayoutItem_(layout = this._layoutForEditor_()) {
      const originIndex = this._visibleOriginForIndex_(this._selectedCellIndex || 0, layout);
      this._selectedCellIndex = originIndex;
      return layout.items[originIndex] || layout.items.find((item) => !item.hidden) || layout.items[0] || null;
    }

    _selectMergeCell_(index, options = {}) {
      if (!this._config?.cells?.length) return;
      const layout = this._layoutForEditor_();
      const originIndex = this._visibleOriginForIndex_(index, layout);
      this._selectedCellIndex = originIndex;
      if (options.openDetails !== false) {
        this.shadowRoot?.querySelectorAll?.('.cell-card').forEach((card) => {
          if (card.dataset.cellIndex === String(originIndex)) card.open = true;
        });
      }
      this._syncVisualMergeUI_();
    }

    _setCellSpan_(index, colSpan, rowSpan) {
      const cell = this._config?.cells?.[index];
      if (!cell) return;
      const columns = Math.max(1, Number(this._config.columns || 3) || 3);
      const rows = Math.max(1, Number(this._config.rows || 3) || 3);
      const row = Math.floor(index / columns);
      const col = index % columns;
      const next = {
        ...cell,
        col_span: Math.round(__ddcLineNormalizeNumber__(colSpan, cell.col_span || 1, 1, Math.max(1, columns - col))),
        row_span: Math.round(__ddcLineNormalizeNumber__(rowSpan, cell.row_span || 1, 1, Math.max(1, rows - row)))
      };
      this._config.cells[index] = __ddcTableNormalizeCell__(next, index, columns, rows);
    }

    _applyVisualMergeAction_(action) {
      if (!this._config?.cells?.length) return;
      const layout = this._layoutForEditor_();
      const item = this._selectedLayoutItem_(layout);
      if (!item || item.hidden) return;
      const cell = this._config.cells[item.index];
      const colSpan = Math.max(1, Number(cell.col_span || item.colSpan || 1) || 1);
      const rowSpan = Math.max(1, Number(cell.row_span || item.rowSpan || 1) || 1);
      const maxColSpan = Math.max(1, (Number(this._config.columns || 3) || 3) - item.col);
      const maxRowSpan = Math.max(1, (Number(this._config.rows || 3) || 3) - item.row);
      let nextColSpan = colSpan;
      let nextRowSpan = rowSpan;

      if (action === 'grow-x') nextColSpan = Math.min(maxColSpan, colSpan + 1);
      if (action === 'shrink-x') nextColSpan = Math.max(1, colSpan - 1);
      if (action === 'grow-y') nextRowSpan = Math.min(maxRowSpan, rowSpan + 1);
      if (action === 'shrink-y') nextRowSpan = Math.max(1, rowSpan - 1);
      if (action === 'reset') {
        nextColSpan = 1;
        nextRowSpan = 1;
      }

      if (nextColSpan === colSpan && nextRowSpan === rowSpan) {
        this._syncVisualMergeUI_();
        return;
      }

      this._setCellSpan_(item.index, nextColSpan, nextRowSpan);
      this._syncCellSpanControls_(item.index);
      this._refreshCellCoverageUI_();
      this._syncVisualMergeUI_();
      this._updatePreview_();
      this._queueEmit_();
    }

    _renderMergeCellButton_(item, selectedIndex) {
      const cell = item.cell || {};
      const label = String(cell.text || cell.entity || cell.icon || `Cell ${item.index + 1}`).trim();
      const sizeLabel = `${item.colSpan} x ${item.rowSpan}`;
      const style = `grid-column:${item.col + 1} / span ${item.colSpan};grid-row:${item.row + 1} / span ${item.rowSpan};`;
      const classes = [
        'merge-cell',
        item.index === selectedIndex ? 'is-selected' : '',
        item.colSpan > 1 || item.rowSpan > 1 ? 'is-merged' : ''
      ].filter(Boolean).join(' ');
      return `
        <button
          class="${classes}"
          type="button"
          style="${style}"
          data-merge-cell="${item.index}"
          data-origin="${item.index}"
          aria-pressed="${item.index === selectedIndex ? 'true' : 'false'}"
          title="Row ${item.row + 1}, Column ${item.col + 1}"
        >
          <span>${__ddcTableEscapeHtml__(label)}</span>
          <small>${__ddcTableEscapeHtml__(sizeLabel)}</small>
        </button>`;
    }

    _renderMergeBoardMarkup_(layout, selectedIndex) {
      return layout.items
        .filter((item) => !item.hidden)
        .map((item) => this._renderMergeCellButton_(item, selectedIndex))
        .join('');
    }

    _syncVisualMergeUI_() {
      if (!this.shadowRoot || !this._config) return;
      const layout = this._layoutForEditor_();
      const selected = this._selectedLayoutItem_(layout);
      const selectedIndex = selected?.index ?? 0;
      const board = this.shadowRoot.querySelector('.merge-board');
      if (board) {
        board.style.setProperty('--merge-columns', `${layout.columns}`);
        board.style.setProperty('--merge-rows', `${layout.rows}`);
        board.innerHTML = this._renderMergeBoardMarkup_(layout, selectedIndex);
      }
      this.shadowRoot.querySelectorAll('.merge-cell').forEach((button) => {
        const rawIndex = Number(button.dataset.mergeCell);
        const originIndex = Number(button.dataset.origin || rawIndex);
        const selectedCell = originIndex === selectedIndex;
        button.classList.toggle('is-selected', selectedCell);
        button.setAttribute('aria-pressed', String(selectedCell));
      });

      const cell = this._config.cells?.[selectedIndex];
      const title = this.shadowRoot.querySelector('[data-merge-selected-title]');
      const meta = this.shadowRoot.querySelector('[data-merge-selected-meta]');
      if (selected && cell) {
        const label = String(cell.text || cell.entity || cell.icon || `Cell ${selected.index + 1}`).trim();
        if (title) title.textContent = `Row ${selected.row + 1} x Column ${selected.col + 1}`;
        if (meta) meta.textContent = `${label} · ${selected.colSpan} x ${selected.rowSpan}`;
      }

      const maxColSpan = selected ? Math.max(1, (Number(this._config.columns || 3) || 3) - selected.col) : 1;
      const maxRowSpan = selected ? Math.max(1, (Number(this._config.rows || 3) || 3) - selected.row) : 1;
      const currentColSpan = selected ? Math.max(1, Number(cell?.col_span || selected.colSpan || 1) || 1) : 1;
      const currentRowSpan = selected ? Math.max(1, Number(cell?.row_span || selected.rowSpan || 1) || 1) : 1;
      const disabled = {
        'grow-x': currentColSpan >= maxColSpan,
        'shrink-x': currentColSpan <= 1,
        'grow-y': currentRowSpan >= maxRowSpan,
        'shrink-y': currentRowSpan <= 1,
        reset: currentColSpan <= 1 && currentRowSpan <= 1
      };
      this.shadowRoot.querySelectorAll('[data-merge-action]').forEach((button) => {
        const action = String(button.dataset.mergeAction || '');
        button.disabled = !!disabled[action];
      });
    }

    _refreshCellCoverageUI_() {
      if (!this.shadowRoot || !this._config) return;
      const layout = this._layoutForEditor_();
      layout.items.forEach((item) => {
        const card = this.shadowRoot.querySelector(`.cell-card[data-cell-index="${item.index}"]`);
        if (!card) return;
        const coveredBy = item.hidden ? layout.items[item.coveredBy] : null;
        card.classList.toggle('is-covered', !!item.hidden);
        if (item.hidden && coveredBy) {
          card.setAttribute('aria-disabled', 'true');
          card.open = false;
          const summary = card.querySelector('[data-cell-summary]');
          if (summary) summary.textContent = `Covered by Row ${coveredBy.row + 1} · Column ${coveredBy.col + 1}`;
          const badge = card.querySelector('.cell-card-type');
          if (badge) badge.textContent = 'Merged';
          return;
        }
        card.removeAttribute('aria-disabled');
        const cell = this._config.cells[item.index];
        const summary = card.querySelector('[data-cell-summary]');
        if (summary) {
          summary.textContent = String(cell.text || cell.entity || cell.icon || `Cell ${item.index + 1}`).trim();
        }
        const badge = card.querySelector('.cell-card-type');
        if (badge) badge.textContent = this._labelForType_(cell.type);
        this._syncCellSpanControls_(item.index);
      });
    }

    _handleEditorClick_(ev) {
      const mergeCell = ev.target?.closest?.('[data-merge-cell]');
      if (mergeCell) {
        ev.preventDefault();
        this._selectMergeCell_(Number(mergeCell.dataset.mergeCell));
        return;
      }

      const mergeAction = ev.target?.closest?.('[data-merge-action]');
      if (mergeAction) {
        ev.preventDefault();
        this._applyVisualMergeAction_(String(mergeAction.dataset.mergeAction || ''));
        return;
      }

      const target = ev.target?.closest?.('[data-table-preset]');
      if (!target) return;
      ev.preventDefault();
      const [rows, columns] = String(target.dataset.tablePreset || '').split('x').map((value) => Number(value));
      if (!Number.isFinite(rows) || !Number.isFinite(columns)) return;
      this._config.rows = __ddcLineNormalizeNumber__(rows, this._config.rows || 3, 1, 18);
      this._config.columns = __ddcLineNormalizeNumber__(columns, this._config.columns || 3, 1, 12);
      this._config.cells = __ddcTableEnsureCells__(this._config.rows, this._config.columns, this._config.cells || []);
      this._selectedCellIndex = Math.min(this._selectedCellIndex || 0, this._config.cells.length - 1);
      this._renderEditor_();
      this._queueEmit_();
    }

    _labelForType_(type) {
      const map = {
        text: 'Text',
        icon: 'Icon',
        entity: 'Entity state',
        badge: 'Badge',
        button: 'Button'
      };
      return map[String(type || 'text').toLowerCase()] || 'Text';
    }

    _renderEditor_() {
      const cfg = this._config || DdcTableCard.getStubConfig();
      const entityOptions = Object.keys(this._hass?.states || {})
        .sort((a, b) => a.localeCompare(b))
        .map((entityId) => `<option value="${__ddcTableEscapeAttr__(entityId)}"></option>`)
        .join('');
      const layout = __ddcTableBuildLayout__(cfg.rows || 3, cfg.columns || 3, cfg.cells || []);
      const selectedItem = this._selectedLayoutItem_(layout);
      const selectedIndex = selectedItem?.index ?? 0;
      const mergeMarkup = this._renderMergeBoardMarkup_(layout, selectedIndex);
      const selectedCell = cfg.cells?.[selectedIndex] || {};
      const selectedLabel = String(selectedCell.text || selectedCell.entity || selectedCell.icon || `Cell ${selectedIndex + 1}`).trim();
      const selectedTitle = selectedItem ? `Row ${selectedItem.row + 1} x Column ${selectedItem.col + 1}` : 'No cell selected';
      const selectedMeta = selectedItem ? `${selectedLabel} · ${selectedItem.colSpan} x ${selectedItem.rowSpan}` : '';
      const cellsMarkup = layout.items.map((item) => {
        const cell = item.cell;
        const index = item.index;
        const row = item.row + 1;
        const col = item.col + 1;
        const maxColSpan = Math.max(1, (Number(cfg.columns || 3) || 3) - item.col);
        const maxRowSpan = Math.max(1, (Number(cfg.rows || 3) || 3) - item.row);
        const colSpan = Math.max(1, Number(cell.col_span || 1) || 1);
        const rowSpan = Math.max(1, Number(cell.row_span || 1) || 1);
        const label = String(cell.text || cell.entity || cell.icon || `Cell ${index + 1}`).trim();
        const open = index < Math.min(3, Number(cfg.columns || 3)) ? 'open' : '';
        const coveredBy = item.hidden ? layout.items[item.coveredBy] : null;
        const coveredLabel = coveredBy ? `Covered by Row ${coveredBy.row + 1} · Column ${coveredBy.col + 1}` : label;
        return `
          <details class="cell-card${item.hidden ? ' is-covered' : ''}" data-cell-index="${index}" ${item.hidden ? 'aria-disabled="true"' : ''} ${item.hidden ? '' : open}>
            <summary class="cell-card-head">
              <div>
                <strong>Row ${row} · Column ${col}</strong>
                <span data-cell-summary>${__ddcTableEscapeHtml__(item.hidden ? coveredLabel : label)}</span>
              </div>
              <span class="cell-card-type">${item.hidden ? 'Merged' : this._labelForType_(cell.type)}</span>
            </summary>
            <div class="cell-grid">
              <label class="field">
                <span>Content type</span>
                <select data-cell-index="${index}" data-key="type">
                  <option value="text" ${cell.type === 'text' ? 'selected' : ''}>Text</option>
                  <option value="icon" ${cell.type === 'icon' ? 'selected' : ''}>Icon</option>
                  <option value="entity" ${cell.type === 'entity' ? 'selected' : ''}>Entity state</option>
                  <option value="badge" ${cell.type === 'badge' ? 'selected' : ''}>Badge</option>
                  <option value="button" ${cell.type === 'button' ? 'selected' : ''}>Button</option>
                </select>
              </label>
              <label class="field">
                <span>Alignment</span>
                <select data-cell-index="${index}" data-key="align">
                  <option value="left" ${cell.align === 'left' ? 'selected' : ''}>Left</option>
                  <option value="center" ${cell.align === 'center' ? 'selected' : ''}>Center</option>
                  <option value="right" ${cell.align === 'right' ? 'selected' : ''}>Right</option>
                </select>
              </label>
              <label class="field">
                <span class="label-line"><span>Merge X</span><output data-cell-span-output="${index}:col">${colSpan} col${colSpan === 1 ? '' : 's'}</output></span>
                <div class="range-row">
                  <input data-cell-index="${index}" data-key="col_span" type="range" min="1" max="${maxColSpan}" step="1" value="${colSpan}" />
                  <input data-cell-index="${index}" data-key="col_span" type="number" min="1" max="${maxColSpan}" step="1" value="${colSpan}" />
                </div>
              </label>
              <label class="field">
                <span class="label-line"><span>Merge Y</span><output data-cell-span-output="${index}:row">${rowSpan} row${rowSpan === 1 ? '' : 's'}</output></span>
                <div class="range-row">
                  <input data-cell-index="${index}" data-key="row_span" type="range" min="1" max="${maxRowSpan}" step="1" value="${rowSpan}" />
                  <input data-cell-index="${index}" data-key="row_span" type="number" min="1" max="${maxRowSpan}" step="1" value="${rowSpan}" />
                </div>
              </label>
              <label class="field full">
                <span>Text / label</span>
                <input data-cell-index="${index}" data-key="text" type="text" value="${__ddcTableEscapeAttr__(cell.text || '')}" placeholder="Title, label or button text" />
              </label>
              <label class="field">
                <span>Icon</span>
                <input data-cell-index="${index}" data-key="icon" type="text" value="${__ddcTableEscapeAttr__(cell.icon || '')}" placeholder="mdi:flash" />
              </label>
              <label class="field">
                <span>Entity</span>
                <input data-cell-index="${index}" data-key="entity" type="text" list="ddcTableEntityList" value="${__ddcTableEscapeAttr__(cell.entity || '')}" placeholder="sensor.example_power" />
              </label>
              <label class="field full">
                <span>State match</span>
                <input data-cell-index="${index}" data-key="active_states" type="text" value="${__ddcTableEscapeAttr__(cell.active_states || '')}" placeholder="on,home,open,playing,charging,active,>0" />
              </label>
              <label class="field">
                <span>Active color</span>
                <input data-cell-index="${index}" data-key="active_color" type="text" value="${__ddcTableEscapeAttr__(cell.active_color || '')}" />
              </label>
              <label class="field">
                <span>Inactive color</span>
                <input data-cell-index="${index}" data-key="inactive_color" type="text" value="${__ddcTableEscapeAttr__(cell.inactive_color || '')}" />
              </label>
              <label class="field">
                <span>Button action</span>
                <select data-cell-index="${index}" data-key="button_action">
                  <option value="none" ${cell.button_action === 'none' ? 'selected' : ''}>None</option>
                  <option value="more-info" ${cell.button_action === 'more-info' ? 'selected' : ''}>More info</option>
                  <option value="toggle" ${cell.button_action === 'toggle' ? 'selected' : ''}>Toggle entity</option>
                </select>
              </label>
            </div>
          </details>`;
      }).join('');

      this.shadowRoot.innerHTML = `
        <style>
          :host{
            display:block;
            color:var(--primary-text-color);
            --ddc-editor-surface:color-mix(in oklab, var(--ha-card-background, #111827) 88%, transparent);
            --ddc-editor-border:color-mix(in oklab, var(--divider-color, rgba(148,163,184,.28)) 72%, transparent);
            --ddc-editor-muted:var(--secondary-text-color, #94a3b8);
          }
          .editor{
            display:grid;
            gap:14px;
          }
          .section{
            display:grid;
            gap:12px;
            padding:14px;
            border-radius:8px;
            background:var(--ddc-editor-surface);
            border:1px solid var(--ddc-editor-border);
          }
          .section-head strong,
          .cell-card-head strong{
            color:var(--primary-text-color);
          }
          .section-head{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:12px;
          }
          .section-title{
            display:grid;
            gap:3px;
            min-width:0;
          }
          .section-title > span,
          .cell-card-head span,
          .hint{
            color:var(--ddc-editor-muted);
          }
          .section-title > span{
            font-size:.82rem;
            font-weight:650;
          }
          .grid{
            display:grid;
            gap:12px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
          .field{
            display:grid;
            gap:8px;
            min-width:0;
            font-size:.9rem;
            font-weight:650;
          }
          .field.full{
            grid-column:1 / -1;
          }
          .label-line{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:10px;
          }
          output{
            color:var(--ddc-editor-muted);
            font-size:.82rem;
            font-weight:650;
          }
          input[type="text"],
          input[type="number"],
          select{
            width:100%;
            box-sizing:border-box;
            min-height:44px;
            border-radius:8px;
            border:1px solid var(--ddc-editor-border);
            background:color-mix(in oklab, var(--ha-card-background, #111827) 86%, #000);
            color:var(--primary-text-color);
            padding:10px 12px;
            outline:none;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
            font:inherit;
          }
          input[type="number"]{
            max-width:94px;
            text-align:right;
            font-variant-numeric:tabular-nums;
          }
          input[type="range"]{
            width:100%;
            min-width:0;
            accent-color:var(--primary-color, #ff9800);
          }
          input[type="text"]:focus,
          input[type="number"]:focus,
          select:focus,
          button:focus-visible,
          summary:focus-visible{
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, var(--ddc-editor-border));
            box-shadow:0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent);
            outline:none;
          }
          .range-row{
            display:grid;
            grid-template-columns:minmax(0, 1fr) 94px;
            align-items:center;
            gap:10px;
          }
          .preset-row{
            display:flex;
            flex-wrap:wrap;
            gap:8px;
          }
          .preset-row button{
            min-height:36px;
            border-radius:8px;
            border:1px solid var(--ddc-editor-border);
            background:rgba(127,127,127,.07);
            color:var(--primary-text-color);
            padding:0 12px;
            font:inherit;
            font-weight:750;
            cursor:pointer;
          }
          .preset-row button.active{
            background:var(--primary-color, #ff9800);
            border-color:var(--primary-color, #ff9800);
            color:var(--text-primary-color, #fff);
          }
          .toggles{
            display:flex;
            flex-wrap:wrap;
            gap:12px;
          }
          .toggle{
            display:inline-flex;
            align-items:center;
            gap:10px;
            min-height:44px;
            padding:0 12px;
            border-radius:8px;
            border:1px solid var(--ddc-editor-border);
            background:rgba(127,127,127,.07);
            font-weight:650;
          }
          .toggle input{
            accent-color:var(--primary-color, #ff9800);
          }
          .merge-section{
            gap:14px;
          }
          .merge-selected-meta{
            flex:0 0 auto;
            max-width:48%;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            color:var(--ddc-editor-muted);
            font-size:.82rem;
            font-weight:750;
          }
          .merge-visual{
            display:grid;
            grid-template-columns:minmax(0, 1fr) auto;
            gap:12px;
            align-items:stretch;
          }
          .merge-board{
            display:grid;
            grid-template-columns:repeat(var(--merge-columns, 3), minmax(42px, 1fr));
            grid-template-rows:repeat(var(--merge-rows, 3), minmax(42px, 1fr));
            gap:6px;
            min-height:220px;
            max-height:520px;
            align-content:start;
            overflow:auto;
            padding:8px;
            border-radius:8px;
            border:1px solid var(--ddc-editor-border);
            background:
              linear-gradient(135deg, color-mix(in oklab, var(--primary-color, #ff9800) 8%, transparent), transparent 56%),
              rgba(127,127,127,.045);
          }
          .merge-cell{
            display:grid;
            align-content:center;
            justify-items:start;
            gap:3px;
            min-width:0;
            min-height:42px;
            padding:9px 10px;
            border-radius:8px;
            border:1px solid var(--ddc-editor-border);
            background:color-mix(in oklab, var(--ha-card-background, #111827) 88%, var(--primary-color, #ff9800) 3%);
            color:var(--primary-text-color);
            font:inherit;
            text-align:left;
            cursor:pointer;
            overflow:hidden;
            transition:border-color .16s ease, background .16s ease, transform .16s ease;
          }
          .merge-cell:hover{
            transform:translateY(-1px);
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 42%, var(--ddc-editor-border));
          }
          .merge-cell span,
          .merge-cell small{
            max-width:100%;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
          .merge-cell span{
            font-size:.84rem;
            font-weight:800;
          }
          .merge-cell small{
            color:var(--ddc-editor-muted);
            font-size:.72rem;
            font-weight:800;
            letter-spacing:.03em;
            text-transform:uppercase;
          }
          .merge-cell.is-merged{
            background:color-mix(in oklab, var(--primary-color, #ff9800) 14%, var(--ha-card-background, #111827));
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 36%, var(--ddc-editor-border));
          }
          .merge-cell.is-covered{
            justify-items:center;
            text-align:center;
            border-style:dashed;
            opacity:.58;
            background:rgba(127,127,127,.035);
          }
          .merge-cell.is-selected{
            border-color:var(--primary-color, #ff9800);
            box-shadow:0 0 0 2px color-mix(in oklab, var(--primary-color, #ff9800) 22%, transparent);
          }
          .merge-toolbar{
            display:grid;
            grid-template-columns:repeat(1, 46px);
            grid-auto-rows:46px;
            gap:8px;
          }
          .merge-toolbar button{
            display:grid;
            place-items:center;
            width:46px;
            min-height:46px;
            border-radius:8px;
            border:1px solid var(--ddc-editor-border);
            background:rgba(127,127,127,.08);
            color:var(--primary-text-color);
            cursor:pointer;
          }
          .merge-toolbar button:hover:not(:disabled){
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 44%, var(--ddc-editor-border));
            background:color-mix(in oklab, var(--primary-color, #ff9800) 12%, transparent);
          }
          .merge-toolbar button:disabled{
            opacity:.38;
            cursor:default;
          }
          .merge-toolbar ha-icon{
            --mdc-icon-size:20px;
            width:20px;
            height:20px;
          }
          .cells{
            display:grid;
            gap:10px;
          }
          .cell-card{
            display:grid;
            border-radius:8px;
            background:rgba(127,127,127,.06);
            border:1px solid var(--ddc-editor-border);
            overflow:hidden;
          }
          .cell-card.is-covered{
            opacity:.68;
            background:rgba(127,127,127,.035);
          }
          .cell-card.is-covered .cell-grid{
            display:none;
          }
          .cell-card.is-covered .cell-card-head{
            cursor:default;
          }
          .cell-card.is-covered .cell-card-type{
            color:var(--ddc-editor-muted);
            background:rgba(127,127,127,.1);
          }
          .cell-card-head{
            display:flex;
            align-items:start;
            justify-content:space-between;
            gap:12px;
            padding:12px 14px;
            cursor:pointer;
            list-style:none;
          }
          .cell-card-head::-webkit-details-marker{
            display:none;
          }
          .cell-card-head > div{
            display:grid;
            gap:4px;
          }
          .cell-card-type{
            display:inline-flex;
            align-items:center;
            flex:0 0 auto;
            padding:6px 10px;
            border-radius:999px;
            background:color-mix(in oklab, var(--primary-color, #ff9800) 12%, transparent);
            color:var(--primary-color, #ff9800);
            font-size:.76rem;
            font-weight:800;
            letter-spacing:.04em;
            text-transform:uppercase;
          }
          .cell-grid{
            display:grid;
            gap:12px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
            padding:0 14px 14px;
          }
          @media (max-width: 760px){
            .grid,
            .cell-grid{
              grid-template-columns:1fr;
            }
            .merge-visual{
              grid-template-columns:1fr;
            }
            .merge-toolbar{
              grid-template-columns:repeat(5, minmax(42px, 1fr));
              grid-auto-rows:44px;
            }
            .merge-toolbar button{
              width:100%;
              min-height:44px;
            }
            .merge-selected-meta{
              max-width:100%;
            }
            .field.full{
              grid-column:auto;
            }
          }
        </style>
        <div class="editor">
          <div class="section">
            <div class="section-head">
              <strong>Table</strong>
            </div>
            <datalist id="ddcTableEntityList">${entityOptions}</datalist>
            <div class="grid">
              <label class="field full">
                <span>Title</span>
                <input id="tableTitle" type="text" value="${__ddcTableEscapeAttr__(cfg.title || '')}" placeholder="Optional title shown above the table" />
              </label>
              <label class="field">
                <span>Rows</span>
                <input id="tableRows" type="number" min="1" max="18" step="1" value="${Number(cfg.rows || 3)}" />
              </label>
              <label class="field">
                <span>Columns</span>
                <input id="tableColumns" type="number" min="1" max="12" step="1" value="${Number(cfg.columns || 3)}" />
              </label>
              <div class="field full">
                <span>Presets</span>
                <div class="preset-row">
                  <button type="button" data-table-preset="2x2" aria-pressed="false">2 x 2</button>
                  <button type="button" data-table-preset="3x3" aria-pressed="false">3 x 3</button>
                  <button type="button" data-table-preset="4x3" aria-pressed="false">4 x 3</button>
                  <button type="button" data-table-preset="5x2" aria-pressed="false">5 x 2</button>
                </div>
              </div>
              <label class="field full">
                <span class="label-line"><span>Corner radius</span><output data-table-radius-output>${Math.round(cfg.radius ?? 16)}px</output></span>
                <div class="range-row">
                  <input id="tableRadiusRange" type="range" min="0" max="40" step="1" value="${Number(cfg.radius || 16)}" />
                  <input id="tableRadius" type="number" min="0" max="40" step="1" value="${Number(cfg.radius || 16)}" />
                </div>
              </label>
              <label class="field full">
                <span class="label-line"><span>Cell spacing</span><output data-table-spacing-output>${Math.round(cfg.spacing ?? 8)}px</output></span>
                <div class="range-row">
                  <input id="tableSpacingRange" type="range" min="0" max="32" step="1" value="${Number(cfg.spacing || 8)}" />
                  <input id="tableSpacing" type="number" min="0" max="32" step="1" value="${Number(cfg.spacing || 8)}" />
                </div>
              </label>
            </div>
            <div class="toggles">
              <label class="toggle">
                <input id="tableHeaderRow" type="checkbox" ${cfg.header_row !== false ? 'checked' : ''} />
                <span>Header row</span>
              </label>
              <label class="toggle">
                <input id="tableBorder" type="checkbox" ${cfg.border !== false ? 'checked' : ''} />
                <span>Cell borders</span>
              </label>
            </div>
          </div>

          <div class="section merge-section">
            <div class="section-head">
              <div class="section-title">
                <strong>Visual merge</strong>
                <span data-merge-selected-title>${__ddcTableEscapeHtml__(selectedTitle)}</span>
              </div>
              <span class="merge-selected-meta" data-merge-selected-meta>${__ddcTableEscapeHtml__(selectedMeta)}</span>
            </div>
            <div class="merge-visual">
              <div
                class="merge-board"
                style="--merge-columns:${Number(cfg.columns || 3)};--merge-rows:${Number(cfg.rows || 3)};"
              >${mergeMarkup}</div>
              <div class="merge-toolbar" aria-label="Merge controls">
                <button type="button" data-merge-action="shrink-x" title="Shrink horizontally" aria-label="Shrink horizontally">
                  <ha-icon icon="mdi:arrow-collapse-horizontal"></ha-icon>
                </button>
                <button type="button" data-merge-action="grow-x" title="Grow horizontally" aria-label="Grow horizontally">
                  <ha-icon icon="mdi:arrow-expand-horizontal"></ha-icon>
                </button>
                <button type="button" data-merge-action="shrink-y" title="Shrink vertically" aria-label="Shrink vertically">
                  <ha-icon icon="mdi:arrow-collapse-vertical"></ha-icon>
                </button>
                <button type="button" data-merge-action="grow-y" title="Grow vertically" aria-label="Grow vertically">
                  <ha-icon icon="mdi:arrow-expand-vertical"></ha-icon>
                </button>
                <button type="button" data-merge-action="reset" title="Reset merge" aria-label="Reset merge">
                  <ha-icon icon="mdi:table-split-cell"></ha-icon>
                </button>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="section-head">
              <strong>Cells</strong>
            </div>
            <div class="cells">${cellsMarkup}</div>
          </div>
        </div>`;

      this._ensureListeners_();
      this._syncControls_();
      this._refreshCellCoverageUI_();
      this._syncVisualMergeUI_();
      this._updatePreview_();
    }
  }

  function __ddcIconNormalizeSizeMode__(value = 'manual') {
    const normalized = String(value || 'manual').trim().toLowerCase().replace(/_/g, '-');
    if (['fit', 'fill', 'auto', 'responsive', 'card', 'card-fit'].includes(normalized)) return 'fit';
    return 'manual';
  }

  function __ddcIconNormalizeConfig__(config = {}) {
    const fallback = DdcIconCard.getStubConfig();
    return {
      ...fallback,
      ...(config || {}),
      icon: String(config?.icon || fallback.icon),
      entity: String(config?.entity || ''),
      size: __ddcLineNormalizeNumber__(config?.size, fallback.size, 20, 320),
      size_mode: __ddcIconNormalizeSizeMode__(
        config?.size_mode
        ?? config?.sizeMode
        ?? (config?.fit_to_card ? 'fit' : fallback.size_mode)
      ),
      color: String(config?.color || fallback.color),
      active_color: String(config?.active_color || fallback.active_color),
      state_based_color: config?.state_based_color !== false,
      glow: config?.glow !== false,
      rotate: __ddcLineNormalizeNumber__(config?.rotate, fallback.rotate, -3600, 3600),
      pulse_when_active: config?.pulse_when_active !== false,
      opacity_based_on_state: !!config?.opacity_based_on_state,
      active_opacity: __ddcLineNormalizeNumber__(config?.active_opacity, fallback.active_opacity, 0, 1),
      inactive_opacity: __ddcLineNormalizeNumber__(config?.inactive_opacity, fallback.inactive_opacity, 0, 1),
      active_states: String(config?.active_states || fallback.active_states),
      click_action: String(config?.click_action || fallback.click_action).toLowerCase()
    };
  }

  function __ddcIconVisualState__(cfg = {}, hass = null) {
    const entityId = String(cfg.entity || '').trim();
    const entity = entityId ? hass?.states?.[entityId] : null;
    const entityIcon = String(entity?.attributes?.icon || '').trim();
    const icon = String(cfg.icon || entityIcon || 'mdi:flash').trim() || 'mdi:flash';
    const hasEntity = !!entityId;
    const isActive = hasEntity ? __ddcLineIsActive__(entity?.state ?? '', cfg.active_states) : false;
    const useStateColor = cfg.state_based_color !== false && hasEntity;
    const currentColor = useStateColor ? (isActive ? cfg.active_color : cfg.color) : cfg.color;
    const opacity = cfg.opacity_based_on_state && hasEntity
      ? (isActive ? cfg.active_opacity : cfg.inactive_opacity)
      : cfg.active_opacity;
    const clickAction = String(cfg.click_action || 'none').toLowerCase();
    const clickable = hasEntity && clickAction !== 'none';
    return {
      icon,
      entityId,
      hasEntity,
      isActive,
      currentColor: String(currentColor || cfg.color || 'var(--primary-color, #ff9800)'),
      opacity: __ddcLineNormalizeNumber__(opacity, 1, 0, 1),
      clickable,
      shouldPulse: !!cfg.pulse_when_active && hasEntity && isActive
    };
  }

  class DdcIconCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._config = DdcIconCard.getStubConfig();
      this._hass = null;
      this._shellReady = false;
      this._boundActivate = this._handleActivate_.bind(this);
      this._boundKeydown = this._handleKeydown_.bind(this);
    }

    static getStubConfig() {
      return {
        type: 'custom:ddc-icon-card',
        icon: 'mdi:flash',
        entity: '',
        size: 96,
        size_mode: 'manual',
        color: 'var(--primary-color, #ff9800)',
        active_color: '#22c55e',
        state_based_color: true,
        glow: true,
        rotate: 0,
        pulse_when_active: true,
        opacity_based_on_state: false,
        active_opacity: 1,
        inactive_opacity: 0.28,
        active_states: 'on,home,open,playing,charging,active,>0',
        click_action: 'none'
      };
    }

    static async getConfigElement() {
      return document.createElement(DDC_ICON_CARD_EDITOR_TAG);
    }

    async getConfigElement() {
      return document.createElement(DDC_ICON_CARD_EDITOR_TAG);
    }

    setConfig(config) {
      this._config = __ddcIconNormalizeConfig__(config);
      this._renderCard_();
    }

    set hass(hass) {
      this._hass = hass;
      this._renderCard_();
    }

    get hass() {
      return this._hass;
    }

    connectedCallback() {
      if (this._config) this._renderCard_();
    }

    disconnectedCallback() {
      this._hitAreaEl?.removeEventListener?.('click', this._boundActivate);
      this._hitAreaEl?.removeEventListener?.('keydown', this._boundKeydown);
    }

    getCardSize() {
      return 2;
    }

    _ensureShell_() {
      if (this._shellReady || !this.shadowRoot) return;
      this.shadowRoot.innerHTML = `
        <style>
          :host{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            color:var(--primary-text-color);
          }
          ha-card{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            background:transparent;
            box-shadow:none;
            border-radius:inherit;
            overflow:visible;
          }
          .shell{
            position:relative;
            display:grid;
            place-items:center;
            width:100%;
            height:100%;
            min-height:100%;
            padding:10px;
            box-sizing:border-box;
            container-type:size;
            isolation:isolate;
            --ddc-icon-size:96px;
            --ddc-icon-available:max(20px, min(calc(100cqw - 20px), calc(100cqh - 20px)));
            --ddc-icon-box-size:min(var(--ddc-icon-size), var(--ddc-icon-available));
            --ddc-icon-color:var(--primary-color, #ff9800);
            --ddc-icon-opacity:1;
            --ddc-icon-rotate:0deg;
          }
          .shell.is-fit{
            --ddc-icon-box-size:var(--ddc-icon-available);
          }
          .hit-area{
            display:grid;
            place-items:center;
            width:100%;
            height:100%;
            min-height:100%;
            border-radius:inherit;
            outline:none;
            cursor:default;
          }
          .hit-area.is-clickable{
            cursor:pointer;
          }
          .hit-area:focus-visible{
            box-shadow:0 0 0 3px color-mix(in oklab, var(--ddc-icon-color) 28%, transparent);
          }
          .icon-wrap{
            position:relative;
            width:var(--ddc-icon-box-size);
            height:var(--ddc-icon-box-size);
            display:grid;
            place-items:center;
            max-width:100%;
            max-height:100%;
          }
          .icon-wrap ha-icon{
            --mdc-icon-size:100%;
            width:100%;
            height:100%;
            color:var(--ddc-icon-color);
            opacity:var(--ddc-icon-opacity);
            transform:rotate(var(--ddc-icon-rotate));
            transform-origin:center;
            filter:drop-shadow(0 0 0 transparent);
            transition:
              color .18s ease,
              opacity .18s ease,
              transform .18s ease,
              filter .18s ease;
          }
          .shell.is-glow .icon-wrap ha-icon{
            filter:drop-shadow(0 0 12px color-mix(in srgb, var(--ddc-icon-color) 38%, transparent));
          }
          .shell.is-pulsing .icon-wrap ha-icon{
            animation:ddc-icon-pulse 1.65s ease-in-out infinite;
          }
          .shell.is-clickable .hit-area:hover ha-icon,
          .shell.is-clickable .hit-area:focus-visible ha-icon{
            opacity:min(1, calc(var(--ddc-icon-opacity) + 0.08));
          }
          @supports not (width: 1cqw){
            .shell{
              --ddc-icon-box-size:min(var(--ddc-icon-size), 100%);
            }
            .shell.is-fit{
              --ddc-icon-box-size:100%;
            }
          }
          @media (prefers-reduced-motion: reduce){
            .icon-wrap ha-icon{
              transition:none;
            }
            .shell.is-pulsing .icon-wrap ha-icon{
              animation:none;
            }
          }
          @keyframes ddc-icon-pulse{
            0%, 100%{
              transform:rotate(var(--ddc-icon-rotate)) scale(1);
            }
            45%{
              transform:rotate(var(--ddc-icon-rotate)) scale(1.08);
            }
            60%{
              transform:rotate(var(--ddc-icon-rotate)) scale(1.03);
            }
          }
        </style>
        <ha-card>
          <div class="shell">
            <div class="hit-area" tabindex="-1" aria-label="Icon card">
              <div class="icon-wrap">
                <ha-icon icon="mdi:flash"></ha-icon>
              </div>
            </div>
          </div>
        </ha-card>`;
      this._shellEl = this.shadowRoot.querySelector('.shell');
      this._hitAreaEl = this.shadowRoot.querySelector('.hit-area');
      this._iconEl = this.shadowRoot.querySelector('ha-icon');
      this._hitAreaEl?.addEventListener('click', this._boundActivate);
      this._hitAreaEl?.addEventListener('keydown', this._boundKeydown);
      this._shellReady = true;
    }

    _fireMoreInfo_(entityId) {
      if (!entityId) return;
      try {
        this.dispatchEvent(new CustomEvent('hass-more-info', {
          detail: { entityId },
          bubbles: true,
          composed: true
        }));
      } catch {}
    }

    _handleKeydown_(ev) {
      if (!ev) return;
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        this._handleActivate_();
      }
    }

    _handleActivate_() {
      const entityId = String(this._config?.entity || '').trim();
      const action = String(this._config?.click_action || 'none').toLowerCase();
      if (!entityId || action === 'none') return;
      if (action === 'toggle') {
        try { this._hass?.callService?.('homeassistant', 'toggle', { entity_id: entityId }); } catch {}
        return;
      }
      this._fireMoreInfo_(entityId);
    }

    _renderCard_() {
      this._ensureShell_();
      if (!this._shellEl || !this._iconEl || !this._hitAreaEl || !this._config) return;
      const cfg = this._config;
      const visual = __ddcIconVisualState__(cfg, this._hass);

      this._iconEl.setAttribute('icon', visual.icon);
      this._shellEl.style.setProperty('--ddc-icon-size', `${Math.round(__ddcLineNormalizeNumber__(cfg.size, 96, 20, 320))}px`);
      this._shellEl.style.setProperty('--ddc-icon-color', visual.currentColor);
      this._shellEl.style.setProperty('--ddc-icon-opacity', `${visual.opacity}`);
      this._shellEl.style.setProperty('--ddc-icon-rotate', `${__ddcLineNormalizeNumber__(cfg.rotate, 0, -3600, 3600)}deg`);
      this._shellEl.classList.toggle('is-fit', __ddcIconNormalizeSizeMode__(cfg.size_mode) === 'fit');
      this._shellEl.classList.toggle('is-glow', cfg.glow !== false);
      this._shellEl.classList.toggle('is-pulsing', visual.shouldPulse);
      this._shellEl.classList.toggle('is-clickable', visual.clickable);
      this._hitAreaEl.classList.toggle('is-clickable', visual.clickable);
      this._hitAreaEl.tabIndex = visual.clickable ? 0 : -1;
      this._hitAreaEl.setAttribute('aria-label', visual.clickable && visual.entityId ? `Icon card for ${visual.entityId}` : 'Icon card');
    }
  }

  class DdcIconCardEditor extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._config = DdcIconCard.getStubConfig();
      this._configSig = '';
      this._emitTimer = null;
    }

    setConfig(config) {
      const next = __ddcIconNormalizeConfig__(config);
      const sig = JSON.stringify(next);
      if (sig === this._configSig) return;
      this._configSig = sig;
      this._config = next;
      this._renderEditor_();
    }

    set hass(hass) {
      this._hass = hass;
      if (!this.shadowRoot.childElementCount) this._renderEditor_();
      else this._updatePreview_();
    }

    disconnectedCallback() {
      clearTimeout(this._emitTimer);
    }

    _queueEmit_() {
      clearTimeout(this._emitTimer);
      this._emitTimer = setTimeout(() => {
        const config = { ...this._config };
        this._configSig = JSON.stringify(config);
        this.dispatchEvent(new CustomEvent('config-changed', {
          detail: { config }
        }));
      }, 120);
    }

    _bindField_(selector, key, type = 'text') {
      const input = this.shadowRoot.querySelector(selector);
      if (!input) return;
      const eventName = type === 'select' || type === 'checkbox' ? 'change' : 'input';
      input.addEventListener(eventName, () => {
        if (type === 'checkbox') {
          this._config[key] = !!input.checked;
        } else if (type === 'number') {
          const defaults = {
            size: [96, 20, 320],
            rotate: [0, -3600, 3600],
            active_opacity: [1, 0, 1],
            inactive_opacity: [0.28, 0, 1]
          };
          const [fallback, min, max] = defaults[key] || [0, -Infinity, Infinity];
          this._config[key] = __ddcLineNormalizeNumber__(input.value, fallback, min, max);
        } else {
          this._config[key] = input.value;
        }
        this._syncControlState_(key);
        this._updatePreview_();
        this._queueEmit_();
      });
    }

    _syncControlState_() {
      if (!this.shadowRoot) return;
      const cfg = this._config || DdcIconCard.getStubConfig();
      const setValue = (selector, value) => {
        const el = this.shadowRoot.querySelector(selector);
        if (el && String(el.value) !== String(value)) el.value = String(value);
      };
      const setText = (selector, value) => {
        this.shadowRoot.querySelectorAll(selector).forEach((el) => {
          el.textContent = value;
        });
      };

      const size = Math.round(__ddcLineNormalizeNumber__(cfg.size, 96, 20, 320));
      const rotate = Math.round(__ddcLineNormalizeNumber__(cfg.rotate, 0, -3600, 3600));
      const activeOpacity = __ddcLineNormalizeNumber__(cfg.active_opacity, 1, 0, 1);
      const inactiveOpacity = __ddcLineNormalizeNumber__(cfg.inactive_opacity, 0.28, 0, 1);
      const sizeMode = __ddcIconNormalizeSizeMode__(cfg.size_mode);
      const sizeDisabled = sizeMode === 'fit';

      setValue('#icon', cfg.icon || '');
      setValue('#entity', cfg.entity || '');
      setValue('#activeStates', cfg.active_states || '');
      setValue('#size', size);
      setValue('#sizeRange', size);
      setValue('#rotate', rotate);
      setValue('#rotateRange', rotate);
      setValue('#color', cfg.color || '');
      setValue('#activeColor', cfg.active_color || '');
      setValue('#activeOpacity', activeOpacity);
      setValue('#activeOpacityRange', activeOpacity);
      setValue('#inactiveOpacity', inactiveOpacity);
      setValue('#inactiveOpacityRange', inactiveOpacity);
      setValue('#clickAction', String(cfg.click_action || 'none').toLowerCase());

      setText('[data-size-output]', `${size}px`);
      setText('[data-size-hint]', sizeDisabled ? 'Follows card frame' : 'Fixed icon size');
      setText('[data-rotate-output]', `${rotate}deg`);
      setText('[data-active-opacity-output]', `${Math.round(activeOpacity * 100)}%`);
      setText('[data-inactive-opacity-output]', `${Math.round(inactiveOpacity * 100)}%`);

      ['#size', '#sizeRange'].forEach((selector) => {
        const el = this.shadowRoot.querySelector(selector);
        if (el) el.disabled = sizeDisabled;
      });
      this.shadowRoot.querySelector('[data-size-control]')?.classList.toggle('is-disabled', sizeDisabled);
      this.shadowRoot.querySelectorAll('[data-ddc-set="size_mode"]').forEach((btn) => {
        const active = String(btn.dataset.value || '') === sizeMode;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
      });

      ['stateBasedColor', 'glow', 'pulseWhenActive', 'opacityBasedOnState'].forEach((id) => {
        const input = this.shadowRoot.querySelector(`#${id}`);
        if (!input) return;
        const key = ({
          stateBasedColor: 'state_based_color',
          glow: 'glow',
          pulseWhenActive: 'pulse_when_active',
          opacityBasedOnState: 'opacity_based_on_state'
        })[id];
        input.checked = !!cfg[key];
      });
    }

    _bindQuickSetters_() {
      this.shadowRoot.querySelectorAll('[data-ddc-set]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const key = btn.dataset.ddcSet;
          if (!key) return;
          this._config[key] = btn.dataset.value || '';
          if (key === 'size_mode') this._config[key] = __ddcIconNormalizeSizeMode__(this._config[key]);
          this._syncControlState_(key);
          this._updatePreview_();
          this._queueEmit_();
        });
      });
    }

    _updatePreview_() {
      if (!this.shadowRoot || !this._config) return;
      const cfg = __ddcIconNormalizeConfig__(this._config);
      const visual = __ddcIconVisualState__(cfg, this._hass);
      const preview = this.shadowRoot.querySelector('.preview-shell');
      const iconEl = this.shadowRoot.querySelector('.preview-icon ha-icon');
      if (!preview || !iconEl) return;

      preview.style.setProperty('--ddc-icon-size', `${Math.round(cfg.size)}px`);
      preview.style.setProperty('--ddc-icon-color', visual.currentColor);
      preview.style.setProperty('--ddc-icon-opacity', `${visual.opacity}`);
      preview.style.setProperty('--ddc-icon-rotate', `${__ddcLineNormalizeNumber__(cfg.rotate, 0, -3600, 3600)}deg`);
      preview.classList.toggle('is-fit', __ddcIconNormalizeSizeMode__(cfg.size_mode) === 'fit');
      preview.classList.toggle('is-glow', cfg.glow !== false);
      preview.classList.toggle('is-pulsing', visual.shouldPulse);
      iconEl.setAttribute('icon', visual.icon);

      const iconName = this.shadowRoot.querySelector('[data-preview-icon]');
      if (iconName) iconName.textContent = visual.icon;
      const stateText = this.shadowRoot.querySelector('[data-preview-state]');
      if (stateText) {
        stateText.textContent = visual.hasEntity
          ? (visual.isActive ? 'Active entity' : 'Inactive entity')
          : 'Static icon';
      }
    }

    _renderEditor_() {
      const cfg = __ddcIconNormalizeConfig__(this._config || DdcIconCard.getStubConfig());
      this._config = cfg;
      const entityOptions = Object.keys(this._hass?.states || {})
        .sort((a, b) => a.localeCompare(b))
        .map((entityId) => `<option value="${__ddcTableEscapeAttr__(entityId)}"></option>`)
        .join('');

      this.shadowRoot.innerHTML = `
        <style>
          :host{
            display:block;
            color:var(--primary-text-color);
            --ddc-editor-surface:color-mix(in oklab, var(--ha-card-background, #111827) 88%, transparent);
            --ddc-editor-border:color-mix(in oklab, var(--divider-color, rgba(148,163,184,.28)) 72%, transparent);
            --ddc-editor-muted:var(--secondary-text-color, #94a3b8);
          }
          .editor{
            display:grid;
            gap:14px;
          }
          .preview-panel,
          .section{
            display:grid;
            gap:12px;
            padding:14px;
            border-radius:8px;
            background:var(--ddc-editor-surface);
            border:1px solid var(--ddc-editor-border);
          }
          .preview-panel{
            grid-template-columns:minmax(138px, 184px) minmax(0, 1fr);
            align-items:stretch;
          }
          .preview-shell{
            display:grid;
            place-items:center;
            min-height:154px;
            border-radius:8px;
            border:1px solid color-mix(in oklab, var(--primary-color, #ff9800) 22%, var(--ddc-editor-border));
            background:
              linear-gradient(135deg, color-mix(in oklab, var(--primary-color, #ff9800) 12%, transparent), transparent 58%),
              color-mix(in oklab, var(--ha-card-background, #111827) 92%, var(--primary-color, #ff9800));
            container-type:size;
            overflow:hidden;
            --ddc-icon-size:96px;
            --ddc-icon-available:max(20px, min(calc(100cqw - 24px), calc(100cqh - 24px)));
            --ddc-icon-box-size:min(var(--ddc-icon-size), var(--ddc-icon-available));
            --ddc-icon-color:var(--primary-color, #ff9800);
            --ddc-icon-opacity:1;
            --ddc-icon-rotate:0deg;
          }
          .preview-shell.is-fit{
            --ddc-icon-box-size:var(--ddc-icon-available);
          }
          .preview-icon{
            display:grid;
            place-items:center;
            width:var(--ddc-icon-box-size);
            height:var(--ddc-icon-box-size);
            max-width:100%;
            max-height:100%;
          }
          .preview-icon ha-icon{
            --mdc-icon-size:100%;
            width:100%;
            height:100%;
            color:var(--ddc-icon-color);
            opacity:var(--ddc-icon-opacity);
            transform:rotate(var(--ddc-icon-rotate));
            transition:color .18s ease, opacity .18s ease, transform .18s ease, filter .18s ease;
          }
          .preview-shell.is-glow .preview-icon ha-icon{
            filter:drop-shadow(0 0 14px color-mix(in srgb, var(--ddc-icon-color) 40%, transparent));
          }
          .preview-shell.is-pulsing .preview-icon ha-icon{
            animation:ddc-editor-icon-pulse 1.65s ease-in-out infinite;
          }
          .preview-meta{
            display:grid;
            align-content:center;
            gap:8px;
            min-width:0;
          }
          .preview-meta strong{
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            font-size:1rem;
          }
          .preview-meta span{
            color:var(--ddc-editor-muted);
            font-size:.86rem;
          }
          .preview-tags{
            display:flex;
            flex-wrap:wrap;
            gap:8px;
            margin-top:4px;
          }
          .preview-tags span{
            min-height:28px;
            display:inline-flex;
            align-items:center;
            padding:0 10px;
            border-radius:999px;
            background:color-mix(in oklab, var(--primary-color, #ff9800) 13%, transparent);
            color:var(--primary-text-color);
            border:1px solid color-mix(in oklab, var(--primary-color, #ff9800) 28%, transparent);
          }
          .section-head{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:12px;
          }
          .section-head strong{
            font-size:.95rem;
          }
          .grid{
            display:grid;
            gap:12px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
          .field{
            display:grid;
            gap:8px;
            min-width:0;
            font-size:.9rem;
            font-weight:650;
          }
          .field.full{
            grid-column:1 / -1;
          }
          .field.is-disabled{
            opacity:.72;
          }
          .label-line{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:10px;
          }
          output,
          .field-hint{
            color:var(--ddc-editor-muted);
            font-size:.82rem;
            font-weight:600;
            white-space:nowrap;
          }
          input[type="text"],
          input[type="number"],
          select{
            width:100%;
            box-sizing:border-box;
            min-height:44px;
            border-radius:8px;
            border:1px solid var(--ddc-editor-border);
            background:color-mix(in oklab, var(--ha-card-background, #111827) 86%, #000);
            color:var(--primary-text-color);
            padding:10px 12px;
            outline:none;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
            font:inherit;
          }
          input[type="number"]{
            max-width:94px;
            text-align:right;
            font-variant-numeric:tabular-nums;
          }
          input[type="range"]{
            width:100%;
            min-width:0;
            accent-color:var(--primary-color, #ff9800);
          }
          input:disabled{
            opacity:.48;
            cursor:not-allowed;
          }
          input[type="text"]:focus,
          input[type="number"]:focus,
          select:focus,
          button:focus-visible{
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, var(--ddc-editor-border));
            box-shadow:0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent);
          }
          .range-row{
            display:grid;
            grid-template-columns:minmax(0, 1fr) 94px;
            align-items:center;
            gap:10px;
          }
          .segmented{
            display:grid;
            grid-template-columns:repeat(2, minmax(0, 1fr));
            gap:4px;
            padding:4px;
            border-radius:10px;
            border:1px solid var(--ddc-editor-border);
            background:rgba(127,127,127,.08);
          }
          button.segment{
            min-height:38px;
            border:0;
            border-radius:7px;
            background:transparent;
            color:var(--ddc-editor-muted);
            font:inherit;
            font-weight:750;
            cursor:pointer;
          }
          button.segment.active{
            background:var(--primary-color, #ff9800);
            color:var(--text-primary-color, #fff);
            box-shadow:0 1px 8px color-mix(in oklab, var(--primary-color, #ff9800) 24%, transparent);
          }
          .swatches{
            display:flex;
            flex-wrap:wrap;
            gap:8px;
          }
          .swatch{
            width:34px;
            height:34px;
            border-radius:8px;
            border:1px solid var(--ddc-editor-border);
            cursor:pointer;
            background:var(--swatch);
          }
          .toggles{
            display:grid;
            gap:10px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
          .toggle{
            display:inline-flex;
            align-items:center;
            gap:10px;
            min-height:44px;
            padding:0 12px;
            border-radius:8px;
            border:1px solid var(--ddc-editor-border);
            background:rgba(127,127,127,.07);
            font-weight:650;
          }
          .toggle input{
            accent-color:var(--primary-color, #ff9800);
          }
          @supports not (width: 1cqw){
            .preview-shell{
              --ddc-icon-box-size:min(var(--ddc-icon-size), 100%);
            }
            .preview-shell.is-fit{
              --ddc-icon-box-size:100%;
            }
          }
          @media (prefers-reduced-motion: reduce){
            .preview-icon ha-icon{
              transition:none;
            }
            .preview-shell.is-pulsing .preview-icon ha-icon{
              animation:none;
            }
          }
          @media (max-width: 760px){
            .preview-panel,
            .grid,
            .toggles{
              grid-template-columns:1fr;
            }
            .preview-shell{
              min-height:132px;
            }
            .field.full{
              grid-column:auto;
            }
          }
          @keyframes ddc-editor-icon-pulse{
            0%, 100%{ transform:rotate(var(--ddc-icon-rotate)) scale(1); }
            45%{ transform:rotate(var(--ddc-icon-rotate)) scale(1.08); }
            60%{ transform:rotate(var(--ddc-icon-rotate)) scale(1.03); }
          }
        </style>
        <div class="editor">
          <section class="preview-panel">
            <div class="preview-shell">
              <div class="preview-icon">
                <ha-icon icon="${__ddcTableEscapeAttr__(cfg.icon || 'mdi:flash')}"></ha-icon>
              </div>
            </div>
            <div class="preview-meta">
              <strong data-preview-icon>${__ddcTableEscapeHtml__(cfg.icon || 'mdi:flash')}</strong>
              <span data-preview-state>Static icon</span>
              <div class="preview-tags">
                <span data-size-output>${Math.round(cfg.size)}px</span>
                <span data-size-hint>Fixed icon size</span>
              </div>
            </div>
          </section>

          <section class="section">
            <div class="section-head"><strong>Source</strong></div>
            <datalist id="ddcIconEntityList">${entityOptions}</datalist>
            <div class="grid">
              <label class="field">
                <span>Icon</span>
                <input id="icon" type="text" value="${__ddcTableEscapeAttr__(cfg.icon || '')}" placeholder="mdi:flash" />
              </label>
              <label class="field">
                <span>Entity</span>
                <input id="entity" type="text" list="ddcIconEntityList" value="${__ddcTableEscapeAttr__(cfg.entity || '')}" placeholder="sensor.example_power" />
              </label>
              <label class="field full">
                <span>Active states</span>
                <input id="activeStates" type="text" value="${__ddcTableEscapeAttr__(cfg.active_states || '')}" placeholder="on,home,open,playing,charging,active,>0" />
              </label>
            </div>
          </section>

          <section class="section">
            <div class="section-head"><strong>Scale</strong></div>
            <div class="grid">
              <div class="field full">
                <span>Size mode</span>
                <div class="segmented" role="group" aria-label="Size mode">
                  <button class="segment" type="button" data-ddc-set="size_mode" data-value="manual" aria-pressed="false">Fixed</button>
                  <button class="segment" type="button" data-ddc-set="size_mode" data-value="fit" aria-pressed="false">Fit card</button>
                </div>
              </div>
              <label class="field full" data-size-control>
                <span class="label-line"><span>Size</span><output data-size-output>${Math.round(cfg.size)}px</output></span>
                <div class="range-row">
                  <input id="sizeRange" type="range" min="20" max="320" step="1" value="${Number(cfg.size || 96)}" />
                  <input id="size" type="number" min="20" max="320" step="1" value="${Number(cfg.size || 96)}" />
                </div>
              </label>
              <label class="field full">
                <span class="label-line"><span>Rotate</span><output data-rotate-output>${Number(cfg.rotate || 0)}deg</output></span>
                <div class="range-row">
                  <input id="rotateRange" type="range" min="-3600" max="3600" step="1" value="${Number(cfg.rotate || 0)}" />
                  <input id="rotate" type="number" min="-3600" max="3600" step="1" value="${Number(cfg.rotate || 0)}" />
                </div>
              </label>
            </div>
          </section>

          <section class="section">
            <div class="section-head"><strong>Color</strong></div>
            <div class="grid">
              <label class="field">
                <span>Base color</span>
                <input id="color" type="text" value="${__ddcTableEscapeAttr__(cfg.color || '')}" placeholder="var(--primary-color)" />
                <span class="swatches" aria-label="Base color presets">
                  <button class="swatch" type="button" title="Primary" aria-label="Primary" data-ddc-set="color" data-value="var(--primary-color, #ff9800)" style="--swatch:var(--primary-color, #ff9800)"></button>
                  <button class="swatch" type="button" title="Amber" aria-label="Amber" data-ddc-set="color" data-value="#f59e0b" style="--swatch:#f59e0b"></button>
                  <button class="swatch" type="button" title="Slate" aria-label="Slate" data-ddc-set="color" data-value="#94a3b8" style="--swatch:#94a3b8"></button>
                </span>
              </label>
              <label class="field">
                <span>Active color</span>
                <input id="activeColor" type="text" value="${__ddcTableEscapeAttr__(cfg.active_color || '')}" placeholder="#22c55e" />
                <span class="swatches" aria-label="Active color presets">
                  <button class="swatch" type="button" title="Green" aria-label="Green" data-ddc-set="active_color" data-value="#22c55e" style="--swatch:#22c55e"></button>
                  <button class="swatch" type="button" title="Blue" aria-label="Blue" data-ddc-set="active_color" data-value="#38bdf8" style="--swatch:#38bdf8"></button>
                  <button class="swatch" type="button" title="Rose" aria-label="Rose" data-ddc-set="active_color" data-value="#fb7185" style="--swatch:#fb7185"></button>
                </span>
              </label>
              <label class="field">
                <span class="label-line"><span>Active opacity</span><output data-active-opacity-output>${Math.round((cfg.active_opacity ?? 1) * 100)}%</output></span>
                <div class="range-row">
                  <input id="activeOpacityRange" type="range" min="0" max="1" step="0.05" value="${Number(cfg.active_opacity ?? 1)}" />
                  <input id="activeOpacity" type="number" min="0" max="1" step="0.05" value="${Number(cfg.active_opacity ?? 1)}" />
                </div>
              </label>
              <label class="field">
                <span class="label-line"><span>Inactive opacity</span><output data-inactive-opacity-output>${Math.round((cfg.inactive_opacity ?? 0.28) * 100)}%</output></span>
                <div class="range-row">
                  <input id="inactiveOpacityRange" type="range" min="0" max="1" step="0.05" value="${Number(cfg.inactive_opacity ?? 0.28)}" />
                  <input id="inactiveOpacity" type="number" min="0" max="1" step="0.05" value="${Number(cfg.inactive_opacity ?? 0.28)}" />
                </div>
              </label>
            </div>
          </section>

          <section class="section">
            <div class="section-head"><strong>State</strong></div>
            <div class="toggles">
              <label class="toggle">
                <input id="stateBasedColor" type="checkbox" ${cfg.state_based_color ? 'checked' : ''}>
                <span>State color</span>
              </label>
              <label class="toggle">
                <input id="glow" type="checkbox" ${cfg.glow ? 'checked' : ''}>
                <span>Glow</span>
              </label>
              <label class="toggle">
                <input id="pulseWhenActive" type="checkbox" ${cfg.pulse_when_active ? 'checked' : ''}>
                <span>Pulse active</span>
              </label>
              <label class="toggle">
                <input id="opacityBasedOnState" type="checkbox" ${cfg.opacity_based_on_state ? 'checked' : ''}>
                <span>State opacity</span>
              </label>
            </div>
          </section>

          <section class="section">
            <div class="section-head"><strong>Action</strong></div>
            <label class="field">
              <span>Click action</span>
              <select id="clickAction">
                <option value="none" ${cfg.click_action === 'none' ? 'selected' : ''}>None</option>
                <option value="more-info" ${cfg.click_action === 'more-info' ? 'selected' : ''}>More info</option>
                <option value="toggle" ${cfg.click_action === 'toggle' ? 'selected' : ''}>Toggle entity</option>
              </select>
            </label>
          </section>
        </div>`;

      this._bindField_('#icon', 'icon');
      this._bindField_('#entity', 'entity');
      this._bindField_('#activeStates', 'active_states');
      this._bindField_('#size', 'size', 'number');
      this._bindField_('#sizeRange', 'size', 'number');
      this._bindField_('#rotate', 'rotate', 'number');
      this._bindField_('#rotateRange', 'rotate', 'number');
      this._bindField_('#color', 'color');
      this._bindField_('#activeColor', 'active_color');
      this._bindField_('#activeOpacity', 'active_opacity', 'number');
      this._bindField_('#activeOpacityRange', 'active_opacity', 'number');
      this._bindField_('#inactiveOpacity', 'inactive_opacity', 'number');
      this._bindField_('#inactiveOpacityRange', 'inactive_opacity', 'number');
      this._bindField_('#clickAction', 'click_action', 'select');
      this._bindField_('#stateBasedColor', 'state_based_color', 'checkbox');
      this._bindField_('#glow', 'glow', 'checkbox');
      this._bindField_('#pulseWhenActive', 'pulse_when_active', 'checkbox');
      this._bindField_('#opacityBasedOnState', 'opacity_based_on_state', 'checkbox');
      this._bindQuickSetters_();
      this._syncControlState_();
      this._updatePreview_();
    }
  }

  class DdcTextCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._config = DdcTextCard.getStubConfig();
      this._hass = null;
      this._shellReady = false;
    }

    static getStubConfig() {
      return {
        type: 'custom:ddc-text-card',
        text: 'Energy overview',
        rich_text: false,
        rich_html: '',
        variant: 'title',
        font_family: '',
        font_size: 42,
        color: 'var(--primary-text-color, #f8fafc)',
        align: 'left',
        bold: true,
        italic: false,
        letter_spacing: -0.03,
        line_height: 1.05
      };
    }

    static async getConfigElement() {
      return document.createElement(DDC_TEXT_CARD_EDITOR_TAG);
    }

    async getConfigElement() {
      return document.createElement(DDC_TEXT_CARD_EDITOR_TAG);
    }

    setConfig(config) {
      const variant = String(config?.variant || 'title').toLowerCase();
      const preset = __ddcTextVariantPreset__(variant);
      this._config = {
        ...DdcTextCard.getStubConfig(),
        ...(config || {}),
        text: String(config?.text || 'Energy overview'),
        rich_text: !!config?.rich_text,
        rich_html: String(config?.rich_html || ''),
        variant,
        font_family: String(config?.font_family || ''),
        font_size: __ddcLineNormalizeNumber__(config?.font_size, preset.font_size, 8, 200),
        color: String(config?.color || 'var(--primary-text-color, #f8fafc)'),
        align: String(config?.align || 'left').toLowerCase(),
        bold: typeof config?.bold === 'boolean' ? config.bold : preset.bold,
        italic: !!config?.italic,
        letter_spacing: __ddcLineNormalizeNumber__(config?.letter_spacing, preset.letter_spacing, -1, 2),
        line_height: __ddcLineNormalizeNumber__(config?.line_height, preset.line_height, 0.7, 3)
      };
      this._renderCard_();
    }

    set hass(hass) {
      this._hass = hass;
      this._renderCard_();
    }

    get hass() {
      return this._hass;
    }

    connectedCallback() {
      if (this._config) this._renderCard_();
    }

    getCardSize() {
      return 2;
    }

    _ensureShell_() {
      if (this._shellReady || !this.shadowRoot) return;
      this.shadowRoot.innerHTML = `
        <style>
          :host{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            color:var(--primary-text-color);
          }
          ha-card{
            display:block;
            width:100%;
            height:100%;
            min-height:100%;
            background:transparent;
            box-shadow:none;
            border-radius:inherit;
            overflow:visible;
          }
          .shell{
            display:grid;
            align-items:center;
            width:100%;
            height:100%;
            min-height:100%;
            padding:10px 12px;
            box-sizing:border-box;
          }
          .copy{
            margin:0;
            width:100%;
            color:var(--ddc-text-color, var(--primary-text-color, #f8fafc));
            font-family:var(--ddc-text-font-family, inherit);
            font-size:var(--ddc-text-size, 42px);
            font-weight:var(--ddc-text-weight, 700);
            font-style:var(--ddc-text-style, normal);
            line-height:var(--ddc-text-line-height, 1.05);
            letter-spacing:var(--ddc-text-letter-spacing, 0em);
            text-align:var(--ddc-text-align, left);
            text-wrap:balance;
            overflow-wrap:anywhere;
          }
          .copy.is-rich{
            display:grid;
            gap:calc(var(--ddc-text-size, 42px) * 0.22);
            text-wrap:pretty;
          }
          .copy.is-rich > *{
            margin:0;
            color:inherit;
            font-family:inherit;
            text-align:inherit;
            line-height:inherit;
            letter-spacing:inherit;
          }
          .copy.is-rich p + p,
          .copy.is-rich p + ul,
          .copy.is-rich p + ol,
          .copy.is-rich ul + p,
          .copy.is-rich ol + p,
          .copy.is-rich blockquote + p,
          .copy.is-rich pre + p{
            margin-top:calc(var(--ddc-text-size, 42px) * 0.18);
          }
          .copy.is-rich h1{
            font-size:calc(var(--ddc-text-size, 42px) * 1.56);
            font-weight:800;
            line-height:0.96;
            letter-spacing:calc(var(--ddc-text-letter-spacing, -0.03em) - 0.025em);
          }
          .copy.is-rich h2{
            font-size:calc(var(--ddc-text-size, 42px) * 1.28);
            font-weight:780;
            line-height:1.02;
            letter-spacing:calc(var(--ddc-text-letter-spacing, -0.03em) - 0.015em);
          }
          .copy.is-rich h3{
            font-size:calc(var(--ddc-text-size, 42px) * 1.08);
            font-weight:760;
            line-height:1.08;
          }
          .copy.is-rich h4{
            font-size:calc(var(--ddc-text-size, 42px) * 0.92);
            font-weight:720;
            line-height:1.14;
          }
          .copy.is-rich p{
            font-size:var(--ddc-text-size, 42px);
          }
          .copy.is-rich small{
            font-size:calc(var(--ddc-text-size, 42px) * 0.74);
            opacity:.82;
            line-height:1.35;
          }
          .copy.is-rich ul,
          .copy.is-rich ol{
            padding-inline-start:1.2em;
            display:grid;
            gap:0.3em;
          }
          .copy.is-rich li{
            margin:0;
          }
          .copy.is-rich blockquote{
            padding:0.22em 0 0.22em 1em;
            border-left:3px solid color-mix(in oklab, var(--primary-color, #ff9800) 52%, rgba(255,255,255,.16));
            color:color-mix(in oklab, var(--ddc-text-color, #f8fafc) 82%, rgba(255,255,255,.36));
          }
          .copy.is-rich pre{
            padding:0.8em 0.95em;
            border-radius:16px;
            background:rgba(255,255,255,.06);
            border:1px solid rgba(255,255,255,.08);
            overflow:auto;
            white-space:pre-wrap;
          }
          .copy.is-rich code{
            font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            font-size:0.92em;
          }
          .copy.is-rich a{
            color:color-mix(in oklab, var(--primary-color, #ff9800) 78%, white 12%);
            text-decoration:underline;
            text-decoration-thickness:0.08em;
          }
          .copy.is-rich strong{
            font-weight:800;
          }
          .copy.is-rich em{
            font-style:italic;
          }
          .copy.variant-header{
            text-transform:uppercase;
          }
          .copy.variant-small{
            opacity:.86;
          }
        </style>
        <ha-card>
          <div class="shell">
            <div class="copy"></div>
          </div>
        </ha-card>`;
      this._shellEl = this.shadowRoot.querySelector('.shell');
      this._copyEl = this.shadowRoot.querySelector('.copy');
      this._shellReady = true;
    }

    _resolveTag_(variant) {
      switch (String(variant || '').toLowerCase()) {
        case 'h1': return 'h1';
        case 'h2': return 'h2';
        case 'h3': return 'h3';
        case 'h4': return 'h4';
        case 'header': return 'div';
        case 'small': return 'small';
        case 'paragraph':
        case 'p': return 'p';
        case 'title':
        default: return 'div';
      }
    }

    _renderCard_() {
      this._ensureShell_();
      if (!this._shellEl || !this._copyEl || !this._config) return;
      const cfg = this._config;
      const tag = this._resolveTag_(cfg.variant);
      const wantsRich = !!cfg.rich_text;
      const align = ['left', 'center', 'right'].includes(String(cfg.align || '').toLowerCase())
        ? String(cfg.align).toLowerCase()
        : 'left';
      const rawText = String(cfg.text || '');
      const text = rawText.trim() || 'Text';
      this._shellEl.style.setProperty('--ddc-text-font-family', String(cfg.font_family || '').trim() || 'inherit');
      this._shellEl.style.setProperty('--ddc-text-size', `${__ddcLineNormalizeNumber__(cfg.font_size, 42, 8, 200)}px`);
      this._shellEl.style.setProperty('--ddc-text-color', String(cfg.color || 'var(--primary-text-color, #f8fafc)'));
      this._shellEl.style.setProperty('--ddc-text-weight', cfg.bold ? '800' : '500');
      this._shellEl.style.setProperty('--ddc-text-style', cfg.italic ? 'italic' : 'normal');
      this._shellEl.style.setProperty('--ddc-text-line-height', `${__ddcLineNormalizeNumber__(cfg.line_height, 1.05, 0.7, 3)}`);
      this._shellEl.style.setProperty('--ddc-text-letter-spacing', `${__ddcLineNormalizeNumber__(cfg.letter_spacing, -0.03, -1, 2)}em`);
      this._shellEl.style.setProperty('--ddc-text-align', align);
      if (wantsRich) {
        if (this._copyEl.tagName.toLowerCase() !== 'div') {
          const replacement = document.createElement('div');
          replacement.className = 'copy';
          this._copyEl.replaceWith(replacement);
          this._copyEl = replacement;
        }
        this._copyEl.className = 'copy is-rich';
        const richHtml = __ddcTextSanitizeRichHtml__(cfg.rich_html || '') || __ddcTextSanitizeRichHtml__(__ddcTextRichMarkup__(rawText));
        this._copyEl.innerHTML = richHtml || '<p>Text</p>';
        return;
      }
      if (this._copyEl.tagName.toLowerCase() !== tag) {
        const replacement = document.createElement(tag);
        replacement.className = 'copy';
        this._copyEl.replaceWith(replacement);
        this._copyEl = replacement;
      }
      this._copyEl.className = `copy variant-${__ddcTableEscapeAttr__(cfg.variant || 'title')}`;
      this._copyEl.textContent = text;
    }
  }

  class DdcTextCardEditor extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._config = DdcTextCard.getStubConfig();
      this._configSig = '';
      this._emitTimer = null;
      this._richSelectionRange = null;
      this._globalRichShortcutGuards = null;
    }

    setConfig(config) {
      const variant = String(config?.variant || 'title').toLowerCase();
      const preset = __ddcTextVariantPreset__(variant);
      const next = {
        ...DdcTextCard.getStubConfig(),
        ...(config || {}),
        text: String(config?.text || 'Energy overview'),
        rich_text: !!config?.rich_text,
        rich_html: String(config?.rich_html || ''),
        variant,
        font_family: String(config?.font_family || ''),
        font_size: __ddcLineNormalizeNumber__(config?.font_size, preset.font_size, 8, 200),
        color: String(config?.color || 'var(--primary-text-color, #f8fafc)'),
        align: String(config?.align || 'left').toLowerCase(),
        bold: typeof config?.bold === 'boolean' ? config.bold : preset.bold,
        italic: !!config?.italic,
        letter_spacing: __ddcLineNormalizeNumber__(config?.letter_spacing, preset.letter_spacing, -1, 2),
        line_height: __ddcLineNormalizeNumber__(config?.line_height, preset.line_height, 0.7, 3)
      };
      const sig = JSON.stringify(next);
      if (sig === this._configSig) return;
      this._configSig = sig;
      this._config = next;
      this._renderEditor_();
    }

    set hass(hass) {
      this._hass = hass;
      if (!this.shadowRoot.childElementCount) this._renderEditor_();
    }

    _markLocalConfigUpdated_() {
      this._configSig = JSON.stringify(this._config || {});
    }

    _queueEmit_() {
      this._markLocalConfigUpdated_();
      clearTimeout(this._emitTimer);
      this._emitTimer = setTimeout(() => {
        this.dispatchEvent(new CustomEvent('config-changed', {
          detail: { config: { ...this._config } }
        }));
      }, 120);
    }

    _bindField_(selector, key, type = 'text') {
      const input = this.shadowRoot.querySelector(selector);
      if (!input) return;
      const eventName = type === 'select' || type === 'checkbox' ? 'change' : 'input';
      input.addEventListener(eventName, () => {
        if (key === 'variant' && type === 'select') {
          this._applyVariantPreset_(input.value);
          return;
        }
        if (type === 'checkbox') {
          this._config[key] = !!input.checked;
        } else if (type === 'number') {
          const defaults = {
            font_size: [42, 8, 200],
            letter_spacing: [-0.03, -1, 2],
            line_height: [1.05, 0.7, 3]
          };
          const [fallback, min, max] = defaults[key] || [0, -Infinity, Infinity];
          this._config[key] = __ddcLineNormalizeNumber__(input.value, fallback, min, max);
        } else {
          this._config[key] = input.value;
        }
        this._queueEmit_();
      });
    }

    _seedRichHtml_() {
      const seeded = __ddcTextSanitizeRichHtml__(this._config?.rich_html || '') || __ddcTextSanitizeRichHtml__(__ddcTextRichMarkup__(this._config?.text || ''));
      this._config.rich_html = seeded;
      this._markLocalConfigUpdated_();
      return seeded;
    }

    _captureRichSelection_() {
      const editor = this.shadowRoot?.querySelector('#richEditor');
      const selection = this.ownerDocument?.getSelection?.();
      if (!editor || !selection || selection.rangeCount < 1) return;
      const range = selection.getRangeAt(0);
      const anchorNode = range.commonAncestorContainer;
      if (editor.contains(anchorNode) || anchorNode === editor) {
        this._richSelectionRange = range.cloneRange();
      }
    }

    _restoreRichSelection_() {
      if (!this._richSelectionRange) return;
      const selection = this.ownerDocument?.getSelection?.();
      if (!selection) return;
      selection.removeAllRanges();
      selection.addRange(this._richSelectionRange);
    }

    _syncRichEditorFromDom_(rewrite = false) {
      const editor = this.shadowRoot?.querySelector('#richEditor');
      if (!editor) return;
      let html = editor.innerHTML || '';
      if (rewrite) {
        html = __ddcTextSanitizeRichHtml__(html);
        if (editor.innerHTML !== html) editor.innerHTML = html;
      }
      this._config.rich_html = html;
      const textContent = String(editor.textContent || '').replace(/\u00a0/g, ' ').trim();
      if (textContent) this._config.text = textContent;
      this._queueEmit_();
    }

    _execRichCommand_(command, value = null) {
      const editor = this.shadowRoot?.querySelector('#richEditor');
      if (!editor) return;
      editor.focus();
      this._restoreRichSelection_();
      try {
        if (command === 'createLink') {
          if (!value) return;
          this.ownerDocument.execCommand('createLink', false, value);
        } else if (command === 'formatBlock') {
          this.ownerDocument.execCommand('formatBlock', false, value);
        } else {
          this.ownerDocument.execCommand(command, false, value);
        }
      } catch {}
      this._captureRichSelection_();
      this._syncRichEditorFromDom_(true);
    }

    _bindRichEditor_() {
      const editor = this.shadowRoot?.querySelector('#richEditor');
      if (!editor) return;
      const stopShortcutBubble = (event) => {
        event.stopPropagation();
        if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
      };
      ['keydown', 'keypress', 'keyup', 'beforeinput', 'input', 'paste'].forEach((eventName) => {
        editor.addEventListener(eventName, stopShortcutBubble);
      });
      const installGlobalShortcutGuards = () => {
        if (this._globalRichShortcutGuards) return;
        const shouldTrap = () => {
          const selection = this.ownerDocument?.getSelection?.();
          const active = this.shadowRoot?.activeElement || this.ownerDocument?.activeElement;
          const inEditor =
            active === editor ||
            editor.contains(active) ||
            (selection?.anchorNode && editor.contains(selection.anchorNode));
          return !!inEditor;
        };
        const guard = (event) => {
          if (!shouldTrap()) return;
          event.stopPropagation();
          if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
        };
        this._globalRichShortcutGuards = { guard };
        ['keydown', 'keypress', 'keyup', 'beforeinput'].forEach((eventName) => {
          window.addEventListener(eventName, guard, true);
          document.addEventListener(eventName, guard, true);
        });
      };
      const removeGlobalShortcutGuards = () => {
        if (!this._globalRichShortcutGuards?.guard) return;
        const { guard } = this._globalRichShortcutGuards;
        ['keydown', 'keypress', 'keyup', 'beforeinput'].forEach((eventName) => {
          window.removeEventListener(eventName, guard, true);
          document.removeEventListener(eventName, guard, true);
        });
        this._globalRichShortcutGuards = null;
      };
      editor.addEventListener('input', () => this._syncRichEditorFromDom_(false));
      editor.addEventListener('keyup', () => this._captureRichSelection_());
      editor.addEventListener('mouseup', () => this._captureRichSelection_());
      editor.addEventListener('focus', () => {
        installGlobalShortcutGuards();
        this._captureRichSelection_();
      });
      editor.addEventListener('blur', () => {
        this._syncRichEditorFromDom_(true);
        setTimeout(() => {
          const active = this.shadowRoot?.activeElement || this.ownerDocument?.activeElement;
          if (!active || !editor.contains(active)) removeGlobalShortcutGuards();
        }, 0);
      }, true);

      this.shadowRoot.querySelectorAll('[data-rich-cmd]').forEach((btn) => {
        btn.addEventListener('mousedown', (event) => event.preventDefault());
        btn.addEventListener('click', () => {
          const cmd = btn.getAttribute('data-rich-cmd');
          if (!cmd) return;
          if (cmd === 'createLink') {
            const url = window.prompt('Link URL', 'https://');
            if (!url) return;
            this._execRichCommand_(cmd, url);
            return;
          }
          this._execRichCommand_(cmd);
        });
      });

      const blockSelect = this.shadowRoot.querySelector('#richBlock');
      if (blockSelect) {
        blockSelect.addEventListener('change', () => {
          const value = String(blockSelect.value || 'P').toUpperCase();
          this._execRichCommand_('formatBlock', value);
        });
      }
    }

    _applyVariantPreset_(variant) {
      const nextVariant = String(variant || 'title').toLowerCase();
      const preset = __ddcTextVariantPreset__(nextVariant);
      this._config.variant = nextVariant;
      this._config.font_size = preset.font_size;
      this._config.bold = preset.bold;
      this._config.letter_spacing = preset.letter_spacing;
      this._config.line_height = preset.line_height;
      this._renderEditor_();
      this._queueEmit_();
    }

    _renderEditor_() {
      const cfg = this._config || DdcTextCard.getStubConfig();
      const richHtml = cfg.rich_text ? this._seedRichHtml_() : '';
      this.shadowRoot.innerHTML = `
        <style>
          :host{
            display:block;
            color:var(--primary-text-color);
          }
          .editor{
            display:grid;
            gap:14px;
          }
          .intro,
          .section{
            display:grid;
            gap:10px;
            padding:14px 16px;
            border-radius:16px;
            background:rgba(255,255,255,.025);
            border:1px solid rgba(255,255,255,.08);
          }
          .intro{
            line-height:1.5;
            color:var(--secondary-text-color, #94a3b8);
          }
          .intro strong,
          .section-head strong{
            color:var(--primary-text-color);
          }
          .section-head{
            display:grid;
            gap:4px;
          }
          .section-head span{
            color:var(--secondary-text-color, #94a3b8);
          }
          .grid{
            display:grid;
            gap:14px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
          .field{
            display:grid;
            gap:8px;
            min-width:0;
          }
          .field.full{
            grid-column:1 / -1;
          }
          label{
            display:grid;
            gap:6px;
            font-size:.9rem;
            font-weight:650;
          }
          input[type="text"],
          input[type="number"],
          textarea,
          select{
            width:100%;
            box-sizing:border-box;
            min-height:46px;
            border-radius:14px;
            border:1px solid rgba(255,255,255,.1);
            background:rgba(4,9,18,.82);
            color:var(--primary-text-color);
            padding:11px 14px;
            outline:none;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
            font:inherit;
          }
          textarea{
            min-height:120px;
            resize:vertical;
            line-height:1.55;
          }
          input[type="text"]:focus,
          input[type="number"]:focus,
          textarea:focus,
          select:focus{
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, rgba(255,255,255,.12));
            box-shadow:
              0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent),
              inset 0 1px 0 rgba(255,255,255,.04);
          }
          .toggles{
            display:grid;
            gap:12px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
          .toggle{
            display:inline-flex;
            align-items:center;
            gap:10px;
            min-height:46px;
            padding:0 14px;
            border-radius:14px;
            border:1px solid rgba(255,255,255,.08);
            background:rgba(255,255,255,.03);
            font-weight:650;
          }
          .toggle.is-disabled{
            opacity:.5;
          }
          .toggle.is-disabled input{
            pointer-events:none;
          }
          .field.is-disabled{
            opacity:.58;
          }
          .field.is-disabled select,
          .field.is-disabled input{
            pointer-events:none;
          }
          .rich-shell{
            display:grid;
            gap:12px;
          }
          .rich-toolbar{
            display:flex;
            flex-wrap:wrap;
            align-items:center;
            gap:8px;
            padding:10px 12px;
            border-radius:16px;
            border:1px solid rgba(255,255,255,.08);
            background:rgba(255,255,255,.03);
          }
          .rich-toolbar select{
            width:auto;
            min-width:148px;
            min-height:42px;
            padding:8px 12px;
            border-radius:12px;
          }
          .rich-divider{
            width:1px;
            align-self:stretch;
            background:rgba(255,255,255,.08);
            margin:0 4px;
          }
          .rich-btn{
            display:grid;
            place-items:center;
            width:42px;
            height:42px;
            padding:0;
            border-radius:12px;
            border:1px solid rgba(255,255,255,.08);
            background:rgba(4,9,18,.82);
            color:var(--primary-text-color);
            cursor:pointer;
            transition:transform .18s ease, border-color .18s ease, background .18s ease;
          }
          .rich-btn:hover{
            transform:translateY(-1px);
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 48%, rgba(255,255,255,.12));
            background:rgba(255,255,255,.06);
          }
          .rich-btn ha-icon{
            --mdc-icon-size:20px;
          }
          .rich-surface{
            min-height:180px;
            padding:16px 18px;
            border-radius:18px;
            border:1px solid rgba(255,255,255,.1);
            background:rgba(4,9,18,.82);
            box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
            outline:none;
            color:var(--primary-text-color);
            line-height:1.55;
            overflow:auto;
          }
          .rich-surface:focus{
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, rgba(255,255,255,.12));
            box-shadow:
              0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent),
              inset 0 1px 0 rgba(255,255,255,.04);
          }
          .rich-surface:empty::before{
            content:attr(data-placeholder);
            color:rgba(148,163,184,.7);
            pointer-events:none;
          }
          .rich-surface > *{
            margin:0;
          }
          .rich-surface > * + *{
            margin-top:.5em;
          }
          .rich-surface h1,
          .rich-surface h2,
          .rich-surface h3,
          .rich-surface h4{
            font-weight:800;
            letter-spacing:-0.03em;
          }
          .rich-surface h1{ font-size:2rem; line-height:1; }
          .rich-surface h2{ font-size:1.65rem; line-height:1.06; }
          .rich-surface h3{ font-size:1.35rem; line-height:1.12; }
          .rich-surface h4{ font-size:1.12rem; line-height:1.18; }
          .rich-surface blockquote{
            padding-left:.9em;
            border-left:3px solid color-mix(in oklab, var(--primary-color, #ff9800) 54%, rgba(255,255,255,.16));
            color:var(--secondary-text-color, #94a3b8);
          }
          .rich-surface pre{
            padding:.8em .9em;
            border-radius:14px;
            background:rgba(255,255,255,.05);
            border:1px solid rgba(255,255,255,.08);
            white-space:pre-wrap;
          }
          .rich-surface code{
            font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          }
          .rich-surface ul,
          .rich-surface ol{
            padding-inline-start:1.3em;
          }
          .rich-note{
            color:var(--secondary-text-color, #94a3b8);
            line-height:1.5;
          }
          @media (max-width: 760px){
            .grid,
            .toggles{
              grid-template-columns:1fr;
            }
            .field.full{
              grid-column:auto;
            }
          }
        </style>
        <div class="editor">
          <div class="intro">
            <strong>Build a pure typography object</strong>
            <span>Use this for hero titles, subtle labels, paragraphs or editorial headers directly inside Drag & Drop Card.</span>
          </div>

          <div class="section">
            <div class="section-head">
              <strong>Copy</strong>
              <span>Choose the content and what kind of text object it should behave like.</span>
            </div>
            <div class="toggles">
              <label class="toggle">
                <input id="richText" type="checkbox" ${cfg.rich_text ? 'checked' : ''}>
                <span>Enable rich text mode</span>
              </label>
            </div>
            <div class="grid">
              ${cfg.rich_text ? `
                <div class="field full">
                  <span>Rich text</span>
                  <div class="rich-shell">
                    <div class="rich-toolbar">
                      <select id="richBlock">
                        <option value="P">Normal</option>
                        <option value="H1">Title / H1</option>
                        <option value="H2">H2</option>
                        <option value="H3">H3</option>
                        <option value="H4">H4</option>
                        <option value="BLOCKQUOTE">Quote</option>
                        <option value="PRE">Code</option>
                      </select>
                      <button class="rich-btn" type="button" data-rich-cmd="bold" title="Bold"><ha-icon icon="mdi:format-bold"></ha-icon></button>
                      <button class="rich-btn" type="button" data-rich-cmd="italic" title="Italic"><ha-icon icon="mdi:format-italic"></ha-icon></button>
                      <button class="rich-btn" type="button" data-rich-cmd="underline" title="Underline"><ha-icon icon="mdi:format-underline"></ha-icon></button>
                      <button class="rich-btn" type="button" data-rich-cmd="strikeThrough" title="Strike"><ha-icon icon="mdi:format-strikethrough-variant"></ha-icon></button>
                      <div class="rich-divider"></div>
                      <button class="rich-btn" type="button" data-rich-cmd="insertUnorderedList" title="Bullet list"><ha-icon icon="mdi:format-list-bulleted"></ha-icon></button>
                      <button class="rich-btn" type="button" data-rich-cmd="insertOrderedList" title="Numbered list"><ha-icon icon="mdi:format-list-numbered"></ha-icon></button>
                      <div class="rich-divider"></div>
                      <button class="rich-btn" type="button" data-rich-cmd="createLink" title="Link"><ha-icon icon="mdi:link-variant"></ha-icon></button>
                      <button class="rich-btn" type="button" data-rich-cmd="unlink" title="Unlink"><ha-icon icon="mdi:link-variant-off"></ha-icon></button>
                      <button class="rich-btn" type="button" data-rich-cmd="removeFormat" title="Clear formatting"><ha-icon icon="mdi:format-clear"></ha-icon></button>
                    </div>
                    <div id="richEditor" class="rich-surface" contenteditable="true" data-placeholder="Write your text here...">${richHtml}</div>
                    <div class="rich-note">Use the toolbar to mix headings, paragraphs, bold, italic, lists, quotes and links in the same text card.</div>
                  </div>
                </div>
              ` : `
                <label class="field full">
                  <span>Text</span>
                  <textarea id="text">${__ddcTableEscapeHtml__(cfg.text || '')}</textarea>
                </label>
              `}
              <label class="field ${cfg.rich_text ? 'is-disabled' : ''}">
                <span>Variant</span>
                <select id="variant" ${cfg.rich_text ? 'disabled' : ''}>
                  <option value="title" ${cfg.variant === 'title' ? 'selected' : ''}>Title</option>
                  <option value="header" ${cfg.variant === 'header' ? 'selected' : ''}>Header</option>
                  <option value="h1" ${cfg.variant === 'h1' ? 'selected' : ''}>H1</option>
                  <option value="h2" ${cfg.variant === 'h2' ? 'selected' : ''}>H2</option>
                  <option value="h3" ${cfg.variant === 'h3' ? 'selected' : ''}>H3</option>
                  <option value="h4" ${cfg.variant === 'h4' ? 'selected' : ''}>H4</option>
                  <option value="paragraph" ${cfg.variant === 'paragraph' ? 'selected' : ''}>Paragraph</option>
                  <option value="small" ${cfg.variant === 'small' ? 'selected' : ''}>Small</option>
                </select>
              </label>
              <label class="field">
                <span>Alignment</span>
                <select id="align">
                  <option value="left" ${cfg.align === 'left' ? 'selected' : ''}>Left</option>
                  <option value="center" ${cfg.align === 'center' ? 'selected' : ''}>Center</option>
                  <option value="right" ${cfg.align === 'right' ? 'selected' : ''}>Right</option>
                </select>
              </label>
            </div>
          </div>

          <div class="section">
            <div class="section-head">
              <strong>Typography</strong>
              <span>Fine-tune the editorial expression of the text object.</span>
            </div>
            <div class="grid">
              <label class="field full">
                <span>Font family</span>
                <input id="fontFamily" type="text" value="${__ddcTableEscapeAttr__(cfg.font_family || '')}" placeholder="e.g. Georgia, 'Avenir Next', var(--paper-font-common-base_-_font-family)" />
              </label>
              <label class="field">
                <span>Font size</span>
                <input id="fontSize" type="number" min="8" max="200" step="1" value="${Number(cfg.font_size || 42)}" />
              </label>
              <label class="field">
                <span>Color</span>
                <input id="color" type="text" value="${__ddcTableEscapeAttr__(cfg.color || '')}" placeholder="var(--primary-text-color)" />
              </label>
              <label class="field">
                <span>Letter spacing</span>
                <input id="letterSpacing" type="number" min="-1" max="2" step="0.01" value="${Number(cfg.letter_spacing ?? -0.03)}" />
              </label>
              <label class="field">
                <span>Line height</span>
                <input id="lineHeight" type="number" min="0.7" max="3" step="0.05" value="${Number(cfg.line_height ?? 1.05)}" />
              </label>
            </div>
            <div class="toggles">
              <label class="toggle ${cfg.rich_text ? 'is-disabled' : ''}">
                <input id="bold" type="checkbox" ${cfg.bold ? 'checked' : ''} ${cfg.rich_text ? 'disabled' : ''}>
                <span>Bold</span>
              </label>
              <label class="toggle ${cfg.rich_text ? 'is-disabled' : ''}">
                <input id="italic" type="checkbox" ${cfg.italic ? 'checked' : ''} ${cfg.rich_text ? 'disabled' : ''}>
                <span>Italic</span>
              </label>
            </div>
          </div>
        </div>`;

      this._bindField_('#richText', 'rich_text', 'checkbox');
      if (cfg.rich_text) this._bindRichEditor_();
      else this._bindField_('#text', 'text');
      this._bindField_('#variant', 'variant', 'select');
      this._bindField_('#align', 'align', 'select');
      this._bindField_('#fontFamily', 'font_family');
      this._bindField_('#fontSize', 'font_size', 'number');
      this._bindField_('#color', 'color');
      this._bindField_('#letterSpacing', 'letter_spacing', 'number');
      this._bindField_('#lineHeight', 'line_height', 'number');
      this._bindField_('#bold', 'bold', 'checkbox');
      this._bindField_('#italic', 'italic', 'checkbox');

      const richToggle = this.shadowRoot.querySelector('#richText');
      if (richToggle) {
        richToggle.addEventListener('change', () => {
          if (richToggle.checked) {
            this._config.bold = false;
            this._config.italic = false;
            this._seedRichHtml_();
          }
          this._renderEditor_();
          this._queueEmit_();
        });
      }
    }
  }

  class DdcHtmlCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._config = null;
      this._hass = null;
      this._styleSig = '';
      this._jsSig = '';
      this._scriptCleanup = null;
      this._scriptUpdate = null;
      this._scriptToken = 0;
      this._rerunTimer = null;
      this._shellReady = false;
      this._liveStatesProxy = null;
      this._pendingScriptReason = '';
      this._scriptHasRun = false;
      this._editPreviewMode = false;
      this._editHassTimer = 0;
      this._editHassLastFlush = 0;
    }

    static getStubConfig() {
      return __ddcHtmlDefaultConfig__();
    }

    static async getConfigElement() {
      return document.createElement(DDC_HTML_CARD_EDITOR_TAG);
    }

    async getConfigElement() {
      return document.createElement(DDC_HTML_CARD_EDITOR_TAG);
    }

    setConfig(config) {
      this._config = {
        type: 'custom:ddc-html-card',
        title: '',
        html: '',
        css: '',
        js: '',
        rerun_on_hass_update: false,
        ...(config || {})
      };
      this._renderCardShell_();
      this._applyTemplate_();
    }

    set hass(hass) {
      this._hass = hass;
      if (!this._config) return;
      if (this._editPreviewMode) {
        this._queueEditModeHassRefresh_('hass');
        return;
      }
      this._applyHassRuntimeUpdate_('hass');
    }

    __ddcSetEditPreviewMode(active = false) {
      const next = !!active;
      if (this._editPreviewMode === next) return;
      this._editPreviewMode = next;
      if (!next) this._flushEditModeHassRefresh_('hass-edit-exit');
    }

    _now_() {
      try {
        return typeof performance !== 'undefined' && typeof performance.now === 'function'
          ? performance.now()
          : Date.now();
      } catch {
        return Date.now();
      }
    }

    _queueEditModeHassRefresh_(reason = 'hass') {
      this._editHassReason = reason;
      if (this._editHassTimer) return;
      const minGap = 280;
      const elapsed = this._now_() - (this._editHassLastFlush || 0);
      const delay = Math.max(0, minGap - elapsed);
      this._editHassTimer = setTimeout(() => {
        this._editHassTimer = 0;
        this._flushEditModeHassRefresh_(this._editHassReason || reason);
      }, delay);
    }

    _flushEditModeHassRefresh_(reason = 'hass-edit') {
      if (this._editHassTimer) {
        clearTimeout(this._editHassTimer);
        this._editHassTimer = 0;
      }
      this._editHassReason = '';
      if (!this._config || !this.isConnected) return;
      this._editHassLastFlush = this._now_();
      this._applyHassRuntimeUpdate_(reason);
    }

    _applyHassRuntimeUpdate_(reason = 'hass') {
      this._dispatchRuntimeUpdate_(reason);
      if (this._scriptUpdate) {
        try {
          this._scriptUpdate(this._buildRuntimeContext_(reason === 'hass' ? 'update' : reason));
        } catch (err) {
          this._showRuntimeError_(err);
        }
        return;
      }
      if (this._config.rerun_on_hass_update && String(this._config.js || '').trim()) {
        clearTimeout(this._rerunTimer);
        this._rerunTimer = setTimeout(
          () => this._runUserScript_(reason === 'hass' ? 'hass-rerun' : `${reason}-rerun`),
          this._editPreviewMode ? 280 : 60
        );
      }
    }

    get hass() {
      return this._hass;
    }

    connectedCallback() {
      if (this._config) this._renderCardShell_();
      const pendingReason = this._pendingScriptReason;
      const hasRunnableScript = String(this._config?.js || '').trim();
      if (pendingReason || (hasRunnableScript && !this._scriptHasRun)) {
        this._pendingScriptReason = '';
        queueMicrotask(() => {
          if (!this.isConnected) return;
          this._runUserScript_(pendingReason || 'connected');
        });
      }
    }

    disconnectedCallback() {
      clearTimeout(this._rerunTimer);
      clearTimeout(this._editHassTimer);
      this._editHassTimer = 0;
      this._pendingScriptReason = '';
      this._scriptHasRun = false;
      this._teardownUserScript_();
    }

    getCardSize() {
      return 4;
    }

    _renderCardShell_() {
      if (!this.shadowRoot) return;
      if (!this._shellReady) {
        this.shadowRoot.innerHTML = `
          <style>
            :host{
              display:block;
              width:100%;
              height:100%;
              min-height:100%;
              color:var(--primary-text-color);
            }
            ha-card{
              display:block;
              width:100%;
              height:100%;
              min-height:100%;
              background:transparent;
              box-shadow:none;
              border-radius:inherit;
              overflow:hidden;
            }
            .shell{
              display:flex;
              flex-direction:column;
              gap:10px;
              height:100%;
              min-height:100%;
              padding:12px;
              box-sizing:border-box;
              overflow:hidden;
            }
            .title{
              display:none;
              margin:0;
              font-size:1rem;
              font-weight:800;
              letter-spacing:0;
              line-height:1.12;
              overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap;
            }
            .title.show{
              display:block;
            }
            .runtime{
              position:relative;
              flex:1 1 auto;
              min-height:0;
              overflow:auto;
            }
            .runtime-content{
              min-height:100%;
              min-width:0;
              box-sizing:border-box;
              overflow-wrap:anywhere;
            }
            .runtime-style-anchor{
              display:none;
            }
            .runtime-error{
              display:none;
              margin-top:12px;
              padding:10px 12px;
              border-radius:12px;
              border:1px solid color-mix(in oklab, var(--error-color, #ef4444) 42%, transparent);
              background:color-mix(in oklab, var(--error-color, #ef4444) 10%, transparent);
              color:var(--error-color, #ef4444);
              font-size:.82rem;
              line-height:1.45;
              white-space:pre-wrap;
            }
            .runtime-error.show{
              display:block;
            }
            .empty{
              display:grid;
              gap:8px;
              padding:14px;
              border-radius:8px;
              border:1px dashed color-mix(in oklab, var(--divider-color, rgba(148,163,184,.28)) 72%, transparent);
              background:rgba(127,127,127,.045);
              color:var(--secondary-text-color, #94a3b8);
              line-height:1.5;
            }
            .empty strong{
              color:var(--primary-text-color);
            }
          </style>
          <ha-card>
            <div class="shell">
              <div class="title"></div>
              <div class="runtime">
                <style class="runtime-style-anchor"></style>
                <div class="runtime-content"></div>
              </div>
              <div class="runtime-error"></div>
            </div>
          </ha-card>`;
        this._titleEl = this.shadowRoot.querySelector('.title');
        this._runtimeEl = this.shadowRoot.querySelector('.runtime');
        this._contentEl = this.shadowRoot.querySelector('.runtime-content');
        this._styleEl = this.shadowRoot.querySelector('.runtime-style-anchor');
        this._errorEl = this.shadowRoot.querySelector('.runtime-error');
        this._shellReady = true;
      }
      const title = String(this._config?.title || '').trim();
      this._titleEl.textContent = title;
      this._titleEl.classList.toggle('show', !!title);
    }

    _applyTemplate_() {
      this._renderCardShell_();
      if (!this._contentEl) return;
      const html = String(this._config?.html || '');
      const css = String(this._config?.css || '');
      const js = String(this._config?.js || '');
      const styleSig = JSON.stringify({ title: this._config?.title || '', html, css });
      const templateChanged = styleSig !== this._styleSig;

      if (templateChanged) {
        this._styleSig = styleSig;
        this._styleEl.textContent = css;
        this._contentEl.innerHTML = html.trim()
          ? html
          : `<div class="empty"><strong>HTML / Web card</strong><span>Add your own HTML, CSS and JavaScript in the visual editor to start building this card.</span></div>`;
      }

      if (js !== this._jsSig || templateChanged) {
        this._jsSig = js;
        this._scriptHasRun = false;
        if (this.isConnected) {
          this._runUserScript_('config');
        } else {
          this._pendingScriptReason = 'config';
          this._showRuntimeError_('');
        }
      } else {
        this._dispatchRuntimeUpdate_('template');
      }
    }

    _resolveDashboardApi_() {
      let api = null;
      try {
        this.dispatchEvent(new CustomEvent('ddc-api-request', {
          detail: {
            source: this,
            receive(value) {
              api = value || null;
            }
          },
          bubbles: true,
          composed: true,
        }));
      } catch {}
      return api;
    }

    _buildRuntimeContext_(reason = 'update') {
      const hass = this._hass;
      const states = this._getLiveStatesProxy_();
      const root = this._contentEl;
      const host = this;
      const ddc = this._resolveDashboardApi_();
      const listeners = [];
      const helpers = {
        ddc,
        dashboard: ddc,
        query(selector, scope = root) {
          return scope?.querySelector?.(selector) || null;
        },
        queryAll(selector, scope = root) {
          return Array.from(scope?.querySelectorAll?.(selector) || []);
        },
        entity(entityId) {
          return host._hass?.states?.[entityId] || null;
        },
        state(entityId) {
          return host._hass?.states?.[entityId]?.state;
        },
        attr(entityId, attr) {
          return host._hass?.states?.[entityId]?.attributes?.[attr];
        },
        callService(domain, service, data = {}, target) {
          return host._hass?.callService?.(domain, service, data, target);
        },
        fire(type, detail = {}) {
          host.dispatchEvent(new CustomEvent(type, { detail, bubbles: true, composed: true }));
        },
        listen(target, eventName, handler, options) {
          if (!target?.addEventListener) return () => {};
          target.addEventListener(eventName, handler, options);
          const cleanup = () => target.removeEventListener(eventName, handler, options);
          listeners.push(cleanup);
          return cleanup;
        },
        requestRerun() {
          host._runUserScript_('manual');
        },
        formatState(entityId) {
          const entity = host._hass?.states?.[entityId];
          if (!entity) return '';
          const friendly = entity.attributes?.friendly_name || entityId;
          return `${friendly}: ${entity.state}`;
        }
      };
      return { hass, states, config: this._config, root, host, helpers, ddc, reason, listeners };
    }

    _getLiveStatesProxy_() {
      if (this._liveStatesProxy) return this._liveStatesProxy;
      const host = this;
      this._liveStatesProxy = new Proxy({}, {
        get(_target, prop) {
          if (prop === Symbol.toStringTag) return 'Object';
          const states = host._hass?.states || {};
          return states[prop];
        },
        has(_target, prop) {
          return prop in (host._hass?.states || {});
        },
        ownKeys() {
          return Reflect.ownKeys(host._hass?.states || {});
        },
        getOwnPropertyDescriptor(_target, prop) {
          const states = host._hass?.states || {};
          if (!(prop in states)) return undefined;
          return {
            value: states[prop],
            writable: false,
            enumerable: true,
            configurable: true
          };
        }
      });
      return this._liveStatesProxy;
    }

    _teardownUserScript_() {
      try { this._scriptCleanup?.(); } catch {}
      this._scriptCleanup = null;
      this._scriptUpdate = null;
    }

    async _runUserScript_(reason = 'config') {
      clearTimeout(this._rerunTimer);
      this._teardownUserScript_();
      this._showRuntimeError_('');
      const source = String(this._config?.js || '').trim();
      if (!source || !this._contentEl) {
        this._dispatchRuntimeUpdate_(reason);
        return;
      }

      const token = ++this._scriptToken;
      this._scriptHasRun = true;
      const ctx = this._buildRuntimeContext_(reason);
      try {
        const runner = new __DDC_HTML_ASYNC_FUNCTION__(
          'hass',
          'states',
          'config',
          'root',
          'host',
          'helpers',
          'ddc',
          'reason',
          `${source}`
        );
        const result = await runner(ctx.hass, ctx.states, ctx.config, ctx.root, ctx.host, ctx.helpers, ctx.ddc, ctx.reason);
        if (token !== this._scriptToken) return;

        if (Array.isArray(ctx.listeners) && ctx.listeners.length) {
          const listenerCleanup = () => {
            ctx.listeners.forEach((off) => {
              try { off?.(); } catch {}
            });
          };
          if (typeof result === 'function') {
            const original = result;
            this._scriptCleanup = () => {
              listenerCleanup();
              original();
            };
          } else if (result && typeof result.destroy === 'function') {
            this._scriptCleanup = () => {
              listenerCleanup();
              result.destroy();
            };
          } else {
            this._scriptCleanup = listenerCleanup;
          }
        } else if (typeof result === 'function') {
          this._scriptCleanup = result;
        } else if (result && typeof result.destroy === 'function') {
          this._scriptCleanup = result.destroy.bind(result);
        }

        if (result && typeof result.update === 'function') {
          this._scriptUpdate = result.update.bind(result);
          try {
            this._scriptUpdate(this._buildRuntimeContext_('after-init'));
          } catch (err) {
            this._showRuntimeError_(err);
          }
        } else {
          this._dispatchRuntimeUpdate_('after-init');
        }
      } catch (err) {
        if (token === this._scriptToken) this._showRuntimeError_(err);
      }
    }

    _dispatchRuntimeUpdate_(reason = 'update') {
      if (!this._contentEl) return;
      try {
        this._contentEl.dispatchEvent(new CustomEvent('ddc-hass-update', {
          detail: this._buildRuntimeContext_(reason),
          bubbles: false,
          composed: false
        }));
      } catch {}
    }

    _showRuntimeError_(err) {
      if (!this._errorEl) return;
      const message = err ? String(err?.stack || err?.message || err) : '';
      this._errorEl.textContent = message;
      this._errorEl.classList.toggle('show', !!message);
    }
  }

  class DdcHtmlCardEditor extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._config = {
        type: 'custom:ddc-html-card',
        title: '',
        html: '',
        css: '',
        js: '',
        rerun_on_hass_update: false
      };
      this._emitTimer = null;
      this._configSig = '';
      this._activeCodeTab = 'html';
      this._codeModal = null;
      this._codeModalCleanup = null;
    }

    setConfig(config) {
      const next = {
        type: 'custom:ddc-html-card',
        title: '',
        html: '',
        css: '',
        js: '',
        rerun_on_hass_update: false,
        ...(config || {})
      };
      const sig = JSON.stringify(next);
      if (sig === this._configSig) return;
      this._configSig = sig;
      this._config = next;
      this._renderEditor_();
    }

    set hass(hass) {
      this._hass = hass;
    }

    disconnectedCallback() {
      clearTimeout(this._emitTimer);
      this._closeCodePopup_();
    }

    _queueEmit_() {
      clearTimeout(this._emitTimer);
      this._emitTimer = setTimeout(() => {
        const config = this._cloneConfig_();
        this._configSig = JSON.stringify(config);
        this.dispatchEvent(new CustomEvent('config-changed', {
          detail: { config }
        }));
      }, 120);
    }

    _cloneConfig_() {
      return {
        type: 'custom:ddc-html-card',
        title: '',
        html: '',
        css: '',
        js: '',
        rerun_on_hass_update: false,
        ...(this._config || {})
      };
    }

    getConfig() {
      return this._cloneConfig_();
    }

    _bindField_(selector, key) {
      const input = this.shadowRoot.querySelector(selector);
      if (!input) return;
      input.addEventListener('input', () => {
        this._config[key] = input.value;
        this._syncPreviewMeta_();
        this._queueEmit_();
      });
    }

    _codeKeys_() {
      return ['html', 'css', 'js'];
    }

    _codeValue_(key) {
      const safeKey = this._normalizeCodeTab_(key);
      return String(this._config?.[safeKey] || '');
    }

    _codeHint_(key) {
      return ({
        html: 'Rendered inside the card body.',
        css: 'Scoped to this card.',
        js: 'Runs inside the card. Use helpers.callService(...) for HA actions.'
      })[this._normalizeCodeTab_(key)] || '';
    }

    _lineNumberText_(value) {
      const count = Math.max(1, String(value || '').split('\n').length);
      return Array.from({ length: count }, (_, index) => String(index + 1)).join('\n');
    }

    _escapeCodeHtml_(value) {
      return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    _wrapToken_(className, value) {
      return `<span class="${className}">${this._escapeCodeHtml_(value)}</span>`;
    }

    _highlightHtmlTag_(token) {
      const match = String(token || '').match(/^(<\/?)([A-Za-z][A-Za-z0-9:-]*)([\s\S]*?)(\/?>)$/);
      if (!match) return this._escapeCodeHtml_(token);
      const [, open, tagName, attrs, close] = match;
      let out = `${this._wrapToken_('tok-punc', open)}${this._wrapToken_('tok-tag', tagName)}`;
      const attrPattern = /([:@A-Za-z_][\w:.-]*)(\s*=\s*)("[^"]*"|'[^']*'|[^\s"'=<>`]+)?/g;
      let last = 0;
      let attrMatch;
      while ((attrMatch = attrPattern.exec(attrs))) {
        out += this._escapeCodeHtml_(attrs.slice(last, attrMatch.index));
        out += this._wrapToken_('tok-attr', attrMatch[1]);
        out += this._wrapToken_('tok-punc', attrMatch[2] || '');
        if (attrMatch[3]) out += this._wrapToken_('tok-string', attrMatch[3]);
        last = attrMatch.index + attrMatch[0].length;
      }
      out += this._escapeCodeHtml_(attrs.slice(last));
      out += this._wrapToken_('tok-punc', close);
      return out;
    }

    _highlightCode_(value, language) {
      const text = String(value || '');
      if (!text) return '<span class="tok-muted"> </span>';
      const lang = this._normalizeCodeTab_(language);
      if (lang === 'html') {
        const pattern = /(<!--[\s\S]*?-->|<\/?[A-Za-z][^>]*?>)/g;
        let out = '';
        let last = 0;
        let match;
        while ((match = pattern.exec(text))) {
          out += this._escapeCodeHtml_(text.slice(last, match.index));
          const token = match[0];
          out += token.startsWith('<!--')
            ? this._wrapToken_('tok-comment', token)
            : this._highlightHtmlTag_(token);
          last = match.index + token.length;
        }
        return out + this._escapeCodeHtml_(text.slice(last)) + (text.endsWith('\n') ? ' ' : '');
      }

      if (lang === 'css') {
        const pattern = /(\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|#[\w-]+|--[\w-]+|-?\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw|s|ms|deg)?\b|[A-Za-z_-][\w-]*(?=\s*:)|[.#][A-Za-z_-][\w-]*|[{}:;(),>+~])/g;
        let out = '';
        let last = 0;
        let match;
        while ((match = pattern.exec(text))) {
          const token = match[0];
          out += this._escapeCodeHtml_(text.slice(last, match.index));
          if (token.startsWith('/*')) out += this._wrapToken_('tok-comment', token);
          else if (/^["']/.test(token)) out += this._wrapToken_('tok-string', token);
          else if (/^#[\w-]+$/.test(token)) out += this._wrapToken_('tok-color', token);
          else if (/^--/.test(token)) out += this._wrapToken_('tok-var', token);
          else if (/^-?\d/.test(token)) out += this._wrapToken_('tok-number', token);
          else if (/^[.#]/.test(token)) out += this._wrapToken_('tok-selector', token);
          else if (/^[A-Za-z_-]/.test(token)) out += this._wrapToken_('tok-prop', token);
          else out += this._wrapToken_('tok-punc', token);
          last = match.index + token.length;
        }
        return out + this._escapeCodeHtml_(text.slice(last)) + (text.endsWith('\n') ? ' ' : '');
      }

      const jsKeywords = new Set([
        'async', 'await', 'break', 'case', 'catch', 'class', 'const', 'continue', 'default',
        'delete', 'do', 'else', 'export', 'extends', 'false', 'finally', 'for', 'from',
        'function', 'if', 'import', 'in', 'instanceof', 'let', 'new', 'null', 'return',
        'switch', 'this', 'throw', 'true', 'try', 'typeof', 'undefined', 'var', 'void',
        'while', 'yield'
      ]);
      const pattern = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|`(?:\\[\s\S]|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b[A-Za-z_$][\w$]*\b|-?\d+(?:\.\d+)?\b|[{}()[\].,:;+\-*\/%=<>!&|?]+)/g;
      let out = '';
      let last = 0;
      let match;
      while ((match = pattern.exec(text))) {
        const token = match[0];
        out += this._escapeCodeHtml_(text.slice(last, match.index));
        if (token.startsWith('//') || token.startsWith('/*')) out += this._wrapToken_('tok-comment', token);
        else if (/^[`"']/.test(token)) out += this._wrapToken_('tok-string', token);
        else if (/^-?\d/.test(token)) out += this._wrapToken_('tok-number', token);
        else if (jsKeywords.has(token)) out += this._wrapToken_('tok-keyword', token);
        else if (/^[A-Za-z_$]/.test(token)) out += this._wrapToken_('tok-ident', token);
        else out += this._wrapToken_('tok-punc', token);
        last = match.index + token.length;
      }
      return out + this._escapeCodeHtml_(text.slice(last)) + (text.endsWith('\n') ? ' ' : '');
    }

    _codeEditorMarkup_(key, value, { expanded = false } = {}) {
      const safeKey = this._normalizeCodeTab_(key);
      const inputId = expanded ? `popup-${safeKey}` : safeKey;
      const label = this._codeTabLabel_(safeKey);
      return `
        <div class="code-editor ${expanded ? 'is-expanded' : ''}" data-code-editor="${safeKey}">
          <div class="code-gutter" aria-hidden="true">
            <pre data-code-lines="${safeKey}">${this._lineNumberText_(value)}</pre>
          </div>
          <div class="code-main">
            <pre class="code-highlight" data-code-highlight="${safeKey}" aria-hidden="true"><code>${this._highlightCode_(value, safeKey)}</code></pre>
            <textarea id="${inputId}" data-code-input="${safeKey}" spellcheck="false" wrap="off" aria-label="${label}">${this._escapeTextarea_(value || '')}</textarea>
          </div>
        </div>`;
    }

    _syncCodeScroll_(input) {
      const editor = input?.closest?.('[data-code-editor]');
      if (!editor) return;
      const highlight = editor.querySelector('[data-code-highlight]');
      const lines = editor.querySelector('[data-code-lines]');
      const x = Number(input.scrollLeft || 0);
      const y = Number(input.scrollTop || 0);
      if (highlight) highlight.style.transform = `translate(${-x}px, ${-y}px)`;
      if (lines) lines.style.transform = `translateY(${-y}px)`;
    }

    _syncCodeEditor_(key) {
      if (!this.shadowRoot) return;
      const safeKey = this._normalizeCodeTab_(key);
      const value = this._codeValue_(safeKey);
      this.shadowRoot.querySelectorAll(`[data-code-input="${safeKey}"]`).forEach((input) => {
        if (document.activeElement !== input && input.value !== value) input.value = value;
      });
      this.shadowRoot.querySelectorAll(`[data-code-highlight="${safeKey}"]`).forEach((el) => {
        el.innerHTML = `<code>${this._highlightCode_(value, safeKey)}</code>`;
      });
      this.shadowRoot.querySelectorAll(`[data-code-lines="${safeKey}"]`).forEach((el) => {
        el.textContent = this._lineNumberText_(value);
      });
      this.shadowRoot.querySelectorAll(`[data-popup-line-count="${safeKey}"]`).forEach((el) => {
        el.textContent = this._lineCountLabel_(value);
      });
      this.shadowRoot.querySelectorAll(`[data-code-input="${safeKey}"]`).forEach((input) => this._syncCodeScroll_(input));
      this._syncPreviewMeta_();
    }

    _syncAllCodeEditors_() {
      this._codeKeys_().forEach((key) => this._syncCodeEditor_(key));
    }

    _setCodeValue_(key, value, source = null) {
      const safeKey = this._normalizeCodeTab_(key);
      this._config[safeKey] = String(value || '');
      this.shadowRoot.querySelectorAll(`[data-code-input="${safeKey}"]`).forEach((input) => {
        if (input !== source && input.value !== this._config[safeKey]) input.value = this._config[safeKey];
      });
      this._syncCodeEditor_(safeKey);
      this._queueEmit_();
    }

    _stopCodeShortcutBubble_(event) {
      event?.stopPropagation?.();
      if (typeof event?.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
    }

    _activeCodeInput_() {
      const active = this.shadowRoot?.activeElement || this.ownerDocument?.activeElement;
      if (!active?.isConnected) return null;
      return active?.matches?.('[data-code-input]') ? active : null;
    }

    _installCodeShortcutGuards_() {
      if (this._globalCodeShortcutGuards) return;
      const guard = (event) => {
        if (!this._activeCodeInput_()) return;
        this._stopCodeShortcutBubble_(event);
      };
      this._globalCodeShortcutGuards = { guard };
      ['keydown', 'keypress', 'keyup', 'beforeinput', 'paste', 'cut'].forEach((eventName) => {
        this.ownerDocument?.addEventListener?.(eventName, guard);
      });
    }

    _removeCodeShortcutGuards_() {
      const guard = this._globalCodeShortcutGuards?.guard;
      if (!guard) return;
      ['keydown', 'keypress', 'keyup', 'beforeinput', 'paste', 'cut'].forEach((eventName) => {
        this.ownerDocument?.removeEventListener?.(eventName, guard);
      });
      this._globalCodeShortcutGuards = null;
    }

    _bindCodeEditors_(root = this.shadowRoot) {
      if (!root) return;
      root.querySelectorAll('[data-code-input]').forEach((input) => {
        if (input.__ddcCodeBound) return;
        input.__ddcCodeBound = true;
        input.addEventListener('input', (event) => {
          this._setCodeValue_(input.dataset.codeInput, input.value, input);
          this._stopCodeShortcutBubble_(event);
        });
        input.addEventListener('scroll', () => this._syncCodeScroll_(input), { passive: true });
        input.addEventListener('keydown', (event) => {
          this._stopCodeShortcutBubble_(event);
          if (event.key !== 'Tab') return;
          event.preventDefault();
          const start = input.selectionStart || 0;
          const end = input.selectionEnd || 0;
          const before = input.value.slice(0, start);
          const after = input.value.slice(end);
          input.value = `${before}  ${after}`;
          input.selectionStart = input.selectionEnd = start + 2;
          input.dispatchEvent(new Event('input', { bubbles: true }));
        });
        ['keypress', 'keyup', 'beforeinput', 'paste', 'cut'].forEach((eventName) => {
          input.addEventListener(eventName, (event) => this._stopCodeShortcutBubble_(event));
        });
        input.addEventListener('focus', () => this._installCodeShortcutGuards_());
        input.addEventListener('blur', () => {
          setTimeout(() => {
            if (!this._activeCodeInput_()) this._removeCodeShortcutGuards_();
          }, 0);
        }, true);
        this._syncCodeScroll_(input);
      });
    }

    _lineCount_(value) {
      const text = String(value || '').trim();
      if (!text) return 0;
      return String(value || '').replace(/\r\n?/g, '\n').split('\n').length;
    }

    _lineLabel_(value, label) {
      const count = this._lineCount_(value);
      return `${count} ${label} line${count === 1 ? '' : 's'}`;
    }

    _lineCountLabel_(value) {
      const count = this._lineCount_(value);
      return `${count} line${count === 1 ? '' : 's'}`;
    }

    _normalizeCodeTab_(tab) {
      const value = String(tab || '').trim().toLowerCase();
      return ['html', 'css', 'js'].includes(value) ? value : 'html';
    }

    _codeTabLabel_(tab) {
      return ({
        html: 'HTML',
        css: 'CSS',
        js: 'JavaScript'
      })[this._normalizeCodeTab_(tab)] || 'HTML';
    }

    _setCodeTab_(tab, { focus = false } = {}) {
      if (!this.shadowRoot) return;
      const active = this._normalizeCodeTab_(tab);
      this._activeCodeTab = active;
      this.shadowRoot.querySelectorAll('[data-code-tab]').forEach((button) => {
        const isActive = button.dataset.codeTab === active;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-selected', String(isActive));
        button.setAttribute('tabindex', isActive ? '0' : '-1');
      });
      this.shadowRoot.querySelectorAll('[data-code-pane]').forEach((pane) => {
        const isActive = pane.dataset.codePane === active;
        pane.hidden = !isActive;
        pane.classList.toggle('is-active', isActive);
      });
      this._syncPreviewMeta_();
      if (focus) {
        requestAnimationFrame(() => {
          this.shadowRoot?.querySelector?.(`#${active === 'js' ? 'js' : active}`)?.focus?.();
        });
      }
    }

    _bindCodeTabs_() {
      const tabs = Array.from(this.shadowRoot.querySelectorAll('[data-code-tab]'));
      tabs.forEach((tab) => {
        tab.addEventListener('click', () => this._setCodeTab_(tab.dataset.codeTab, { focus: true }));
      });
      this.shadowRoot.querySelectorAll('[data-code-expand]').forEach((button) => {
        button.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation();
          this._openCodePopup_(button.dataset.codeExpand);
        });
      });
      const tabList = this.shadowRoot.querySelector('.code-tabs');
      tabList?.addEventListener('keydown', (event) => {
        const order = ['html', 'css', 'js'];
        const current = order.indexOf(this._normalizeCodeTab_(this._activeCodeTab));
        let next = current;
        if (event.key === 'ArrowRight') next = (current + 1) % order.length;
        else if (event.key === 'ArrowLeft') next = (current - 1 + order.length) % order.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = order.length - 1;
        else return;
        event.preventDefault();
        const nextTab = order[next];
        this._setCodeTab_(nextTab);
        this.shadowRoot.querySelector(`[data-code-tab="${nextTab}"]`)?.focus?.();
      });
      this._setCodeTab_(this._activeCodeTab || 'html');
    }

    _closeCodePopup_() {
      try { this._codeModalCleanup?.(); } catch {}
      this._codeModalCleanup = null;
      try { this._codeModal?.remove?.(); } catch {}
      this._codeModal = null;
      if (!this._activeCodeInput_()) this._removeCodeShortcutGuards_();
    }

    _openCodePopup_(tab) {
      if (!this.shadowRoot) return;
      const key = this._normalizeCodeTab_(tab);
      this._activeCodeTab = key;
      this._setCodeTab_(key);
      this._closeCodePopup_();

      const label = this._codeTabLabel_(key);
      const value = this._codeValue_(key);
      const modal = document.createElement('div');
      modal.className = 'code-modal';
      modal.innerHTML = `
        <div class="code-dialog" role="dialog" aria-modal="true" aria-labelledby="ddc-html-code-dialog-title">
          <div class="code-dialog-head">
            <div>
              <strong id="ddc-html-code-dialog-title">${label}</strong>
              <span>${this._codeHint_(key)}</span>
            </div>
            <div class="code-dialog-actions">
              <span class="code-dialog-count" data-popup-line-count="${key}">${this._lineCountLabel_(value)}</span>
              <button class="code-dialog-close" type="button" data-code-modal-close aria-label="Close expanded editor" title="Close">
                <ha-icon icon="mdi:close"></ha-icon>
              </button>
            </div>
          </div>
          <div class="code-dialog-body">
            ${this._codeEditorMarkup_(key, value, { expanded: true })}
          </div>
        </div>`;

      this.shadowRoot.appendChild(modal);
      this._codeModal = modal;
      const close = () => this._closeCodePopup_();
      const closeOnKey = (event) => {
        if (event.key === 'Escape') close();
      };
      modal.querySelector('[data-code-modal-close]')?.addEventListener('click', close);
      modal.addEventListener('pointerdown', (event) => {
        if (event.target === modal) close();
      });
      document.addEventListener('keydown', closeOnKey, true);
      this._codeModalCleanup = () => document.removeEventListener('keydown', closeOnKey, true);
      this._bindCodeEditors_(modal);
      this._syncCodeEditor_(key);
      requestAnimationFrame(() => {
        const input = modal.querySelector(`[data-code-input="${key}"]`);
        input?.focus?.();
        this._syncCodeScroll_(input);
      });
    }

    _syncPreviewMeta_() {
      if (!this.shadowRoot) return;
      const cfg = this._cloneConfig_();
      const setText = (selector, value) => {
        this.shadowRoot.querySelectorAll(selector).forEach((el) => {
          el.textContent = value;
        });
      };
      setText('[data-code-tab-count="html"]', this._lineCountLabel_(cfg.html));
      setText('[data-code-tab-count="css"]', this._lineCountLabel_(cfg.css));
      setText('[data-code-tab-count="js"]', this._lineCountLabel_(cfg.js));
      {
        const active = this._normalizeCodeTab_(this._activeCodeTab);
        const value = active === 'html' ? cfg.html : active === 'css' ? cfg.css : cfg.js;
        setText('[data-code-active-label]', `${this._codeTabLabel_(active)} / ${this._lineCountLabel_(value)}`);
      }
    }

    _renderEditor_() {
      const cfg = this._config || {};
      const activeCodeTab = this._normalizeCodeTab_(this._activeCodeTab);
      this._activeCodeTab = activeCodeTab;
      const isCodeTab = (tab) => activeCodeTab === tab;
      const codeTabAttrs = (tab) => `class="code-tab ${isCodeTab(tab) ? 'is-active' : ''}" type="button" role="tab" data-code-tab="${tab}" aria-controls="code-pane-${tab}" aria-selected="${isCodeTab(tab) ? 'true' : 'false'}" tabindex="${isCodeTab(tab) ? '0' : '-1'}"`;
      const codePaneAttrs = (tab) => `id="code-pane-${tab}" class="code-pane ${isCodeTab(tab) ? 'is-active' : ''}" role="tabpanel" data-code-pane="${tab}" aria-labelledby="code-tab-${tab}"${isCodeTab(tab) ? '' : ' hidden'}`;
      this.shadowRoot.innerHTML = `
        <style>
          :host{
            display:block;
            color:var(--primary-text-color);
            --ddc-editor-surface:color-mix(in oklab, var(--ha-card-background, #111827) 88%, transparent);
            --ddc-editor-border:color-mix(in oklab, var(--divider-color, rgba(148,163,184,.28)) 72%, transparent);
            --ddc-editor-muted:var(--secondary-text-color, #94a3b8);
          }
          .editor{
            display:grid;
            gap:14px;
          }
          .section{
            display:grid;
            gap:12px;
            padding:14px;
            border-radius:8px;
            background:var(--ddc-editor-surface);
            border:1px solid var(--ddc-editor-border);
          }
          .section-head{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:12px;
          }
          .section-head strong{
            font-size:.95rem;
          }
          .section-head span{
            color:var(--ddc-editor-muted);
            font-size:.82rem;
            font-weight:650;
          }
          .grid{
            display:grid;
            gap:12px;
            grid-template-columns:repeat(2, minmax(0, 1fr));
          }
          .field{
            display:grid;
            gap:8px;
            min-width:0;
            font-size:.9rem;
            font-weight:650;
          }
          .field.full{
            grid-column:1 / -1;
          }
          label{
            display:grid;
            gap:8px;
            min-width:0;
          }
          .hint{
            color:var(--ddc-editor-muted);
            font-size:.82rem;
            font-weight:600;
            line-height:1.4;
          }
          input[type="text"], textarea{
            width:100%;
            box-sizing:border-box;
            border-radius:8px;
            border:1px solid var(--ddc-editor-border);
            background:color-mix(in oklab, var(--ha-card-background, #111827) 86%, #000);
            color:var(--primary-text-color);
            padding:12px 14px;
            outline:none;
            box-shadow:inset 0 1px 0 rgba(255,255,255,.03);
            font:inherit;
          }
          input[type="text"]:focus, textarea:focus{
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 58%, rgba(255,255,255,.12));
            box-shadow:
              0 0 0 3px color-mix(in oklab, var(--primary-color, #ff9800) 18%, transparent),
              inset 0 1px 0 rgba(255,255,255,.04);
          }
          textarea{
            min-height:180px;
            resize:vertical;
            font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            font-size:.88rem;
            line-height:1.55;
            tab-size:2;
          }
          .code-shell{
            display:grid;
            border-radius:8px;
            overflow:hidden;
            border:1px solid var(--ddc-editor-border);
            background:color-mix(in oklab, var(--ha-card-background, #111827) 88%, #000);
          }
          .code-tabs{
            display:grid;
            grid-template-columns:repeat(3, minmax(0, 1fr));
            border-bottom:1px solid var(--ddc-editor-border);
            background:rgba(127,127,127,.045);
          }
          .code-tab-item{
            display:grid;
            grid-template-columns:minmax(0, 1fr) 38px;
            min-width:0;
            border-right:1px solid var(--ddc-editor-border);
          }
          .code-tab-item:last-child{
            border-right:0;
          }
          .code-tab{
            appearance:none;
            min-width:0;
            min-height:54px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:10px;
            padding:9px 12px;
            border:0;
            background:transparent;
            color:var(--ddc-editor-muted);
            cursor:pointer;
            font:inherit;
            text-align:left;
            transition:background .16s ease, color .16s ease, box-shadow .16s ease;
          }
          .code-tab:hover{
            background:rgba(127,127,127,.07);
            color:var(--primary-text-color);
          }
          .code-tab:focus-visible{
            outline:2px solid color-mix(in oklab, var(--primary-color, #ff9800) 72%, transparent);
            outline-offset:-2px;
          }
          .code-tab.is-active{
            background:color-mix(in oklab, var(--primary-color, #ff9800) 14%, transparent);
            color:var(--primary-text-color);
            box-shadow:inset 0 -2px 0 var(--primary-color, #ff9800);
          }
          .code-tab-label{
            display:flex;
            align-items:center;
            gap:8px;
            min-width:0;
            font-weight:800;
          }
          .code-tab-label span:last-child{
            min-width:0;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
          .code-tab-mark{
            width:8px;
            height:8px;
            border-radius:999px;
            flex:0 0 auto;
            background:var(--primary-color, #ff9800);
            box-shadow:0 0 0 3px color-mix(in oklab, currentColor 10%, transparent);
          }
          .code-tab[data-code-tab="html"] .code-tab-mark{
            background:#f97316;
          }
          .code-tab[data-code-tab="css"] .code-tab-mark{
            background:#38bdf8;
          }
          .code-tab[data-code-tab="js"] .code-tab-mark{
            background:#facc15;
          }
          .code-tab small{
            flex:0 0 auto;
            color:var(--ddc-editor-muted);
            font-size:.72rem;
            font-weight:750;
            white-space:nowrap;
          }
          .code-tab.is-active small{
            color:var(--primary-text-color);
          }
          .code-expand{
            appearance:none;
            display:grid;
            place-items:center;
            min-width:0;
            min-height:54px;
            border:0;
            border-left:1px solid var(--ddc-editor-border);
            background:transparent;
            color:var(--ddc-editor-muted);
            cursor:pointer;
            transition:background .16s ease, color .16s ease;
          }
          .code-expand:hover,
          .code-expand:focus-visible{
            background:color-mix(in oklab, var(--primary-color, #ff9800) 12%, transparent);
            color:var(--primary-text-color);
            outline:none;
          }
          .code-expand ha-icon{
            --mdc-icon-size:18px;
          }
          .code-body{
            min-height:318px;
          }
          .code-pane{
            display:grid;
            gap:10px;
            padding:12px;
          }
          .code-pane[hidden]{
            display:none !important;
          }
          .code-pane-head{
            display:flex;
            align-items:flex-start;
            justify-content:space-between;
            gap:12px;
          }
          .code-pane-head strong{
            font-size:.9rem;
          }
          .code-pane-head .hint{
            max-width:56%;
            text-align:right;
          }
          .code-editor{
            display:grid;
            grid-template-columns:48px minmax(0, 1fr);
            min-height:286px;
            border-radius:8px;
            overflow:hidden;
            border:1px solid color-mix(in oklab, var(--ddc-editor-border) 82%, transparent);
            background:color-mix(in oklab, var(--ha-card-background, #111827) 80%, #000);
          }
          .code-editor.is-expanded{
            min-height:0;
            height:100%;
          }
          .code-gutter{
            overflow:hidden;
            border-right:1px solid var(--ddc-editor-border);
            background:rgba(127,127,127,.06);
            color:color-mix(in oklab, var(--ddc-editor-muted) 78%, transparent);
            user-select:none;
          }
          .code-gutter pre,
          .code-highlight,
          .code-editor textarea{
            box-sizing:border-box;
            margin:0;
            padding:12px 10px;
            font-family:ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
            font-size:.88rem;
            line-height:1.55;
            tab-size:2;
          }
          .code-gutter pre{
            min-height:100%;
            text-align:right;
            white-space:pre;
            will-change:transform;
          }
          .code-main{
            position:relative;
            min-width:0;
            min-height:286px;
            overflow:hidden;
          }
          .code-editor.is-expanded .code-main{
            min-height:0;
            height:100%;
          }
          .code-highlight{
            position:absolute;
            inset:0;
            min-width:max-content;
            min-height:100%;
            overflow:visible;
            pointer-events:none;
            white-space:pre;
            color:var(--primary-text-color);
            will-change:transform;
          }
          .code-highlight code{
            font:inherit;
          }
          .code-editor textarea{
            position:absolute;
            inset:0;
            width:100%;
            height:100%;
            min-height:0;
            resize:none;
            overflow:auto;
            white-space:pre;
            color:transparent;
            caret-color:var(--primary-text-color);
            background:transparent;
            border:0;
            box-shadow:none;
          }
          .code-editor textarea:focus{
            border-color:transparent;
            box-shadow:inset 0 0 0 2px color-mix(in oklab, var(--primary-color, #ff9800) 52%, transparent);
          }
          .code-editor textarea::selection{
            background:color-mix(in oklab, var(--primary-color, #ff9800) 34%, transparent);
            color:transparent;
          }
          .code-dialog-body::-webkit-scrollbar,
          .code-editor textarea::-webkit-scrollbar{
            width:10px;
            height:10px;
          }
          .code-dialog-body::-webkit-scrollbar-thumb,
          .code-editor textarea::-webkit-scrollbar-thumb{
            border:2px solid transparent;
            border-radius:999px;
            background:color-mix(in oklab, var(--primary-color, #ff9800) 34%, rgba(148,163,184,.46));
            background-clip:padding-box;
          }
          .code-dialog-body::-webkit-scrollbar-track,
          .code-editor textarea::-webkit-scrollbar-track{
            background:rgba(127,127,127,.055);
          }
          .tok-tag{ color:#fb923c; }
          .tok-attr{ color:#38bdf8; }
          .tok-string{ color:#86efac; }
          .tok-keyword{ color:#f59e0b; font-weight:750; }
          .tok-comment{ color:#94a3b8; font-style:italic; }
          .tok-number{ color:#facc15; }
          .tok-prop{ color:#7dd3fc; }
          .tok-selector{ color:#c4b5fd; }
          .tok-color{ color:#fda4af; }
          .tok-var{ color:#f0abfc; }
          .tok-ident{ color:var(--primary-text-color); }
          .tok-punc{ color:color-mix(in oklab, var(--primary-text-color) 66%, transparent); }
          .tok-muted{ color:var(--ddc-editor-muted); }
          .code-modal{
            position:fixed;
            inset:0;
            z-index:100000;
            display:grid;
            place-items:center;
            padding:18px;
            background:rgba(0,0,0,.58);
          }
          .code-dialog{
            width:min(1120px, calc(100vw - 36px));
            height:min(86vh, 820px);
            max-height:calc(100vh - 36px);
            display:grid;
            grid-template-rows:auto minmax(0, 1fr);
            border-radius:10px;
            overflow:hidden;
            border:1px solid color-mix(in oklab, var(--primary-color, #ff9800) 24%, var(--ddc-editor-border));
            background:var(--ha-card-background, #111827);
            box-shadow:0 24px 80px rgba(0,0,0,.44);
          }
          .code-dialog-head{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:14px;
            padding:14px 16px;
            border-bottom:1px solid var(--ddc-editor-border);
            background:rgba(127,127,127,.055);
          }
          .code-dialog-head > div:first-child{
            display:grid;
            gap:3px;
            min-width:0;
          }
          .code-dialog-head strong{
            font-size:1rem;
          }
          .code-dialog-head span{
            color:var(--ddc-editor-muted);
            font-size:.82rem;
            font-weight:650;
          }
          .code-dialog-actions{
            display:flex;
            align-items:center;
            gap:10px;
            flex:0 0 auto;
          }
          .code-dialog-count{
            min-height:30px;
            display:inline-flex;
            align-items:center;
            padding:0 10px;
            border-radius:999px;
            border:1px solid var(--ddc-editor-border);
            background:rgba(127,127,127,.07);
            color:var(--ddc-editor-muted);
            font-size:.8rem;
            font-weight:750;
          }
          .code-dialog-close{
            appearance:none;
            width:38px;
            height:38px;
            display:grid;
            place-items:center;
            border-radius:8px;
            border:1px solid var(--ddc-editor-border);
            background:rgba(127,127,127,.07);
            color:var(--primary-text-color);
            cursor:pointer;
          }
          .code-dialog-close:hover,
          .code-dialog-close:focus-visible{
            border-color:color-mix(in oklab, var(--primary-color, #ff9800) 42%, var(--ddc-editor-border));
            outline:none;
          }
          .code-dialog-close ha-icon{
            --mdc-icon-size:18px;
          }
          .code-dialog-body{
            min-height:0;
            display:grid;
            overflow:auto;
            overscroll-behavior:contain;
            scrollbar-gutter:stable;
            padding:14px;
          }
          .switch{
            display:inline-flex;
            align-items:center;
            gap:10px;
            min-height:44px;
            padding:0 12px;
            border-radius:8px;
            border:1px solid var(--ddc-editor-border);
            background:rgba(127,127,127,.07);
            font-weight:650;
          }
          .switch input{
            accent-color:var(--primary-color, #ff9800);
          }
          @media (max-width: 760px){
            .grid{
              grid-template-columns:1fr;
            }
            .field.full{
              grid-column:auto;
            }
            .code-tabs{
              grid-template-columns:1fr;
            }
            .code-tab-item{
              border-right:0;
              border-bottom:1px solid var(--ddc-editor-border);
            }
            .code-tab-item:last-child{
              border-bottom:0;
            }
            .code-expand{
              border-right:0;
            }
            .code-pane-head{
              display:grid;
            }
            .code-pane-head .hint{
              max-width:none;
              text-align:left;
            }
            .code-pane textarea{
              min-height:248px;
            }
            .code-modal{
              padding:10px;
            }
            .code-dialog{
              width:calc(100vw - 20px);
              height:calc(100vh - 20px);
              max-height:calc(100vh - 20px);
            }
            .code-dialog-head{
              align-items:flex-start;
            }
            .code-editor.is-expanded,
            .code-editor.is-expanded .code-main{
              min-height:0;
              height:100%;
            }
          }
        </style>
        <div class="editor">
          <section class="section">
            <div class="section-head">
              <strong>Source</strong>
              <span>HTML / CSS / JS</span>
            </div>
            <div class="grid">
              <label class="field">
                <span>Card title</span>
                <input id="title" type="text" placeholder="Optional title shown above the custom content" value="${this._escapeHtmlAttr_(cfg.title || '')}">
              </label>
              <label class="switch">
                <input id="rerun" type="checkbox" ${cfg.rerun_on_hass_update ? 'checked' : ''}>
                <span>Re-run JS on state updates</span>
              </label>
            </div>
          </section>

          <section class="section">
            <div class="section-head">
              <strong>Code</strong>
              <span data-code-active-label>${this._codeTabLabel_(activeCodeTab)} / ${this._lineCountLabel_(activeCodeTab === 'html' ? cfg.html : activeCodeTab === 'css' ? cfg.css : cfg.js)}</span>
            </div>
            <div class="code-shell">
              <div class="code-tabs" role="tablist" aria-label="HTML card code sections">
                <div class="code-tab-item">
                  <button id="code-tab-html" ${codeTabAttrs('html')}>
                    <span class="code-tab-label"><span class="code-tab-mark"></span><span>HTML</span></span>
                    <small data-code-tab-count="html">${this._lineCountLabel_(cfg.html)}</small>
                  </button>
                  <button class="code-expand" type="button" data-code-expand="html" title="Open HTML in larger editor" aria-label="Open HTML in larger editor">
                    <ha-icon icon="mdi:plus"></ha-icon>
                  </button>
                </div>
                <div class="code-tab-item">
                  <button id="code-tab-css" ${codeTabAttrs('css')}>
                    <span class="code-tab-label"><span class="code-tab-mark"></span><span>CSS</span></span>
                    <small data-code-tab-count="css">${this._lineCountLabel_(cfg.css)}</small>
                  </button>
                  <button class="code-expand" type="button" data-code-expand="css" title="Open CSS in larger editor" aria-label="Open CSS in larger editor">
                    <ha-icon icon="mdi:plus"></ha-icon>
                  </button>
                </div>
                <div class="code-tab-item">
                  <button id="code-tab-js" ${codeTabAttrs('js')}>
                    <span class="code-tab-label"><span class="code-tab-mark"></span><span>JavaScript</span></span>
                    <small data-code-tab-count="js">${this._lineCountLabel_(cfg.js)}</small>
                  </button>
                  <button class="code-expand" type="button" data-code-expand="js" title="Open JavaScript in larger editor" aria-label="Open JavaScript in larger editor">
                    <ha-icon icon="mdi:plus"></ha-icon>
                  </button>
                </div>
              </div>
              <div class="code-body">
                <div ${codePaneAttrs('html')}>
                  <div class="code-pane-head">
                    <strong>HTML</strong>
                    <span class="hint">Rendered inside the card body.</span>
                  </div>
                  ${this._codeEditorMarkup_('html', cfg.html || '')}
                </div>
                <div ${codePaneAttrs('css')}>
                  <div class="code-pane-head">
                    <strong>CSS</strong>
                    <span class="hint">Scoped to this card.</span>
                  </div>
                  ${this._codeEditorMarkup_('css', cfg.css || '')}
                </div>
                <div ${codePaneAttrs('js')}>
                  <div class="code-pane-head">
                    <strong>JavaScript</strong>
                    <span class="hint">Runs inside the card. Use <code>helpers.callService(...)</code> for HA actions.</span>
                  </div>
                  ${this._codeEditorMarkup_('js', cfg.js || '')}
                </div>
              </div>
            </div>
          </section>
        </div>`;

      this._bindField_('#title', 'title');
      this._bindCodeTabs_();
      this._bindCodeEditors_();
      this._syncAllCodeEditors_();

      const rerun = this.shadowRoot.querySelector('#rerun');
      rerun?.addEventListener('change', () => {
        this._config.rerun_on_hass_update = !!rerun.checked;
        this._syncPreviewMeta_();
        this._queueEmit_();
      });
    }

    _escapeTextarea_(value) {
      return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }

    _escapeHtmlAttr_(value) {
      return String(value)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }
  }


function registerDdcInternalCards() {
    if (!customElements.get(DDC_LINE_CARD_TAG)) {
      customElements.define(DDC_LINE_CARD_TAG, DdcLineCard);
    }
    if (!customElements.get(DDC_LINE_CARD_EDITOR_TAG)) {
      customElements.define(DDC_LINE_CARD_EDITOR_TAG, DdcLineCardEditor);
    }
    if (!customElements.get(DDC_TABLE_CARD_TAG)) {
      customElements.define(DDC_TABLE_CARD_TAG, DdcTableCard);
    }
    if (!customElements.get(DDC_TABLE_CARD_EDITOR_TAG)) {
      customElements.define(DDC_TABLE_CARD_EDITOR_TAG, DdcTableCardEditor);
    }
    if (!customElements.get(DDC_ICON_CARD_TAG)) {
      customElements.define(DDC_ICON_CARD_TAG, DdcIconCard);
    }
    if (!customElements.get(DDC_ICON_CARD_EDITOR_TAG)) {
      customElements.define(DDC_ICON_CARD_EDITOR_TAG, DdcIconCardEditor);
    }
    if (!customElements.get(DDC_TEXT_CARD_TAG)) {
      customElements.define(DDC_TEXT_CARD_TAG, DdcTextCard);
    }
    if (!customElements.get(DDC_TEXT_CARD_EDITOR_TAG)) {
      customElements.define(DDC_TEXT_CARD_EDITOR_TAG, DdcTextCardEditor);
    }
    if (!customElements.get(DDC_HTML_CARD_TAG)) {
      customElements.define(DDC_HTML_CARD_TAG, DdcHtmlCard);
    }
    if (!customElements.get(DDC_HTML_CARD_EDITOR_TAG)) {
      customElements.define(DDC_HTML_CARD_EDITOR_TAG, DdcHtmlCardEditor);
    }
}

export {
  DDC_HTML_CARD_TAG,
  DDC_HTML_CARD_EDITOR_TAG,
  DDC_LINE_CARD_TAG,
  DDC_LINE_CARD_EDITOR_TAG,
  DDC_TABLE_CARD_TAG,
  DDC_TABLE_CARD_EDITOR_TAG,
  DDC_ICON_CARD_TAG,
  DDC_ICON_CARD_EDITOR_TAG,
  DDC_TEXT_CARD_TAG,
  DDC_TEXT_CARD_EDITOR_TAG,
  __createDdcInternalCardElement__,
  DdcLineCard,
  DdcLineCardEditor,
  DdcTableCard,
  DdcTableCardEditor,
  DdcIconCard,
  DdcIconCardEditor,
  DdcTextCard,
  DdcTextCardEditor,
  DdcHtmlCard,
  DdcHtmlCardEditor,
  registerDdcInternalCards
};
