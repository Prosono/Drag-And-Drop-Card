/*
 * Internal table card and editor.
 *
 * The table card renders a configurable grid of text, entity, badge, icon, and button cells. The editor
 * manages cell content, spans, visual style, and Home Assistant action options.
 */

import { DDC_TABLE_CARD_EDITOR_TAG } from '../element-tags.js';
import {
  __ddcLineIsActive__,
  __ddcLineNormalizeNumber__,
  __ddcTableEscapeAttr__,
  __ddcTableEscapeHtml__,
} from '../shared-helpers.js';

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


export class DdcTableCard extends HTMLElement {
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
export class DdcTableCardEditor extends HTMLElement {
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
