import { __ddcLineSplitTokens__ } from './defaults.js';

/* Connector line model, editing, rendering, and responsive connector helpers. */
const connectorMethods = {
  _defaultConnectorConfig_() {
    return {
      entity: '',
      active_states: 'on,home,open,playing,charging,active,>0',
      arrows: 'end',
      arrow_size: 18,
      flow_direction: 'auto',
      line_style: 'solid',
      thickness: 8,
      animate_mode: 'active',
      animation_style: 'flow',
      animation_speed: 1,
      active_color: 'var(--primary-color, #ff9800)',
      inactive_color: 'rgba(100, 116, 139, 0.5)',
      glow: true,
      rounded: true,
      z: 5,
    };
  },

  _normalizeConnectorAnimationStyle_(style = 'flow') {
    const value = String(style || 'flow').trim().toLowerCase().replace(/_/g, '-');
    const aliases = {
      dash: 'flow',
      dashes: 'flow',
      current: 'flow',
      stream: 'flow',
      particle: 'particles',
      dots: 'particles',
      dot: 'particles',
      arrow: 'arrows',
      chevron: 'arrows',
      chevrons: 'arrows',
      'flowing-arrows': 'arrows',
      'pulse-arrows': 'pulse-arrows',
      'arrows-pulse': 'pulse-arrows',
    };
    const normalized = aliases[value] || value;
    return ['flow', 'pulse', 'particles', 'arrows', 'pulse-arrows'].includes(normalized) ? normalized : 'flow';
  },

  _normalizeConnectorPoint_(point = {}, fallback = null) {
    const source = point || fallback || {};
    const x = Number(source.x ?? fallback?.x ?? 0) || 0;
    const y = Number(source.y ?? fallback?.y ?? 0) || 0;
    return { x, y };
  },

  _normalizeConnectorAnchor_(anchor = '', fallback = 'right') {
    const value = String(anchor || fallback || '').trim().toLowerCase().replace(/_/g, '-');
    const aliases = {
      n: 'top',
      north: 'top',
      t: 'top',
      e: 'right',
      east: 'right',
      r: 'right',
      s: 'bottom',
      south: 'bottom',
      b: 'bottom',
      w: 'left',
      west: 'left',
      l: 'left',
    };
    const normalized = aliases[value] || value;
    return ['top', 'right', 'bottom', 'left'].includes(normalized) ? normalized : fallback;
  },

  _getConnectorAnchorVector_(anchor = 'right') {
    const side = this._normalizeConnectorAnchor_(anchor, 'right');
    return ({
      top: { x: 0, y: -1, axis: 'y' },
      right: { x: 1, y: 0, axis: 'x' },
      bottom: { x: 0, y: 1, axis: 'y' },
      left: { x: -1, y: 0, axis: 'x' },
    })[side];
  },

  _getConnectorGridSize_() {
    const explicit = Number(
      this.connectorGridSize
      ?? this._config?.connector_grid_size
      ?? this._config?.connector_grid
      ?? this._config?.line_grid_size
      ?? this._config?.line_grid
    );
    if (Number.isFinite(explicit) && explicit > 0) return Math.max(1, explicit);
    const base = Number(this.gridSize ?? this._config?.grid ?? 10) || 10;
    return Math.max(5, Math.round(base / 4) || 5);
  },

  _getCardAnchorPoint_(wrap, anchor = 'right', { edge = false } = {}) {
    const side = this._normalizeConnectorAnchor_(anchor, 'right');
    if (edge) {
      const rect = this._getCardWrapperCanvasRect_(wrap);
      if (!rect) return null;
      const halfW = rect.width / 2;
      const halfH = rect.height / 2;
      if (side === 'top') return { x: rect.x + halfW, y: rect.y, anchor: side, wrap };
      if (side === 'right') return { x: rect.x + rect.width, y: rect.y + halfH, anchor: side, wrap };
      if (side === 'bottom') return { x: rect.x + halfW, y: rect.y + rect.height, anchor: side, wrap };
      return { x: rect.x, y: rect.y + halfH, anchor: side, wrap };
    }
    const anchorEl = wrap?.querySelector?.(`.ddc-card-anchor[data-anchor="${side}"]`);
    const anchorRect = anchorEl?.getBoundingClientRect?.();
    const layer = this._ensureConnectorsLayer_?.();
    const layerRect = layer?.getBoundingClientRect?.() || this.cardContainer?.getBoundingClientRect?.();
    if (
      anchorRect
      && layerRect
      && anchorRect.width > 0
      && anchorRect.height > 0
      && layerRect.width > 0
      && layerRect.height > 0
    ) {
      const canvas = this._getConnectorCanvasSize_?.() || {};
      const rectScaleX = canvas.width ? (layerRect.width / canvas.width) : 0;
      const rectScaleY = canvas.height ? (layerRect.height / canvas.height) : 0;
      const sx = rectScaleX > 0 ? rectScaleX : (this.__pointerScaleX || 1);
      const sy = rectScaleY > 0 ? rectScaleY : (this.__pointerScaleY || 1);
      return {
        x: ((anchorRect.left + (anchorRect.width / 2) - layerRect.left) / sx),
        y: ((anchorRect.top + (anchorRect.height / 2) - layerRect.top) / sy),
        anchor: side,
        wrap,
      };
    }
  
    const rect = this._getCardWrapperCanvasRect_(wrap);
    if (!rect) return null;
    const cssOffset = typeof getComputedStyle === 'function'
      ? (parseFloat(getComputedStyle(wrap)?.getPropertyValue?.('--ddc-anchor-offset')) || 14)
      : 14;
    const inset = Math.max(0, Math.min(cssOffset, rect.width / 2, rect.height / 2));
    const halfW = rect.width / 2;
    const halfH = rect.height / 2;
    if (side === 'top') return { x: rect.x + halfW, y: rect.y + inset, anchor: side, wrap };
    if (side === 'right') return { x: rect.x + rect.width - inset, y: rect.y + halfH, anchor: side, wrap };
    if (side === 'bottom') return { x: rect.x + halfW, y: rect.y + rect.height - inset, anchor: side, wrap };
    return { x: rect.x + inset, y: rect.y + halfH, anchor: side, wrap };
  },

  _getConnectorAnchorHit_(point = {}, { tabId = null, exclude = null, tolerance = null } = {}) {
    if (!this.cardContainer) return null;
    const currentTab = this._normalizeTabId(tabId || this.activeTab || this.defaultTab);
    const scale = Math.max(this.__pointerScaleX || 1, this.__pointerScaleY || 1, 0.0001);
    const hitRadius = Number(tolerance) || Math.max(18, 26 / scale);
    const px = Number(point?.x) || 0;
    const py = Number(point?.y) || 0;
    let best = null;
  
    const wraps = Array.from(this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)'));
    wraps.forEach((wrap) => {
      if (!wrap?.dataset?.layoutCardId) return;
      if (exclude?.cardId && String(wrap.dataset.layoutCardId) === String(exclude.cardId)) {
        if (!exclude.allowSameCard) return;
      }
      const wrapTab = this._normalizeTabId(wrap.dataset.tabId || this.defaultTab);
      if (wrapTab !== currentTab) return;
      if (!this._isWrapVisibleForActiveLayers_(wrap)) return;
      if (!this.editMode && !this._shouldWrapDisplayForCurrentContext_(wrap)) return;
      ['top', 'right', 'bottom', 'left'].forEach((anchor) => {
        if (
          exclude?.cardId
          && String(wrap.dataset.layoutCardId) === String(exclude.cardId)
          && String(exclude.anchor || '') === anchor
        ) return;
        const pos = this._getCardAnchorPoint_(wrap, anchor);
        if (!pos) return;
        const dx = pos.x - px;
        const dy = pos.y - py;
        const distanceSq = (dx * dx) + (dy * dy);
        if (distanceSq > hitRadius * hitRadius) return;
        if (!best || distanceSq < best.distanceSq) {
          best = {
            wrap,
            cardId: wrap.dataset.layoutCardId,
            anchor,
            point: { x: pos.x, y: pos.y },
            distanceSq,
          };
        }
      });
    });
    return best;
  },

  _clearConnectorAnchorHover_() {
    try {
      this.cardContainer?.querySelectorAll?.('.ddc-card-anchor.is-hot')
        .forEach((el) => el.classList.remove('is-hot'));
    } catch {}
    this.__connectorAnchorHover = null;
  },

  _setConnectorAnchorHover_(hit = null) {
    const prev = this.__connectorAnchorHover;
    if (
      prev
      && hit
      && prev.cardId === hit.cardId
      && prev.anchor === hit.anchor
    ) return;
    this._clearConnectorAnchorHover_?.();
    if (!hit?.wrap || !hit.anchor) return;
    const anchorEl = hit.wrap.querySelector?.(`.ddc-card-anchor[data-anchor="${hit.anchor}"]`);
    anchorEl?.classList?.add?.('is-hot');
    this.__connectorAnchorHover = { cardId: hit.cardId, anchor: hit.anchor };
  },

  _isConnectorAutoRoute_(connector = {}) {
    return !!(
      connector.auto_route
      ?? connector.autoRoute
      ?? (connector.sourceAnchor || connector.source_anchor || connector.targetAnchor || connector.target_anchor)
    );
  },

  _buildAutoConnectorRoute_(start = {}, end = {}, sourceAnchor = 'right', targetAnchor = 'left') {
    const s = this._normalizeConnectorPoint_(start);
    const e = this._normalizeConnectorPoint_(end);
    const sourceSide = this._normalizeConnectorAnchor_(sourceAnchor, 'right');
    const targetSide = this._normalizeConnectorAnchor_(targetAnchor, 'left');
    const sv = this._getConnectorAnchorVector_(sourceSide);
    const tv = this._getConnectorAnchorVector_(targetSide);
    const gs = Math.max(1, Number(this._getConnectorGridSize_?.() || 10) || 10);
    const terminalStub = Math.max(18, Math.min(gs * 1.5, 72));
    const snap = (value) => Math.round((Number(value) || 0) / gs) * gs;
    const snapOutward = (value, direction) => {
      const n = Number(value) || 0;
      if (direction > 0) return Math.ceil((n - 0.001) / gs) * gs;
      if (direction < 0) return Math.floor((n + 0.001) / gs) * gs;
      return snap(n);
    };
    const buildTerminal = (point, vector) => {
      const anchorPoint = this._normalizeConnectorPoint_(point);
      const portPoint = {
        x: anchorPoint.x + (vector.x * terminalStub),
        y: anchorPoint.y + (vector.y * terminalStub),
      };
      if (vector.axis === 'x') {
        const gridY = snap(anchorPoint.y);
        const gridPoint = {
          x: snapOutward(portPoint.x, vector.x),
          y: gridY,
        };
        return [anchorPoint, portPoint, { x: portPoint.x, y: gridY }, gridPoint];
      }
      const gridX = snap(anchorPoint.x);
      const gridPoint = {
        x: gridX,
        y: snapOutward(portPoint.y, vector.y),
      };
      return [anchorPoint, portPoint, { x: gridX, y: portPoint.y }, gridPoint];
    };
    const sourceTerminal = buildTerminal(s, sv);
    const targetTerminal = buildTerminal(e, tv);
    const startGrid = sourceTerminal[sourceTerminal.length - 1];
    const endGrid = targetTerminal[targetTerminal.length - 1];
    let gridRoute;
  
    if (sv.axis === 'x' && tv.axis === 'x') {
      const midX = snap((startGrid.x + endGrid.x) / 2);
      gridRoute = [startGrid, { x: midX, y: startGrid.y }, { x: midX, y: endGrid.y }, endGrid];
    } else if (sv.axis === 'y' && tv.axis === 'y') {
      const midY = snap((startGrid.y + endGrid.y) / 2);
      gridRoute = [startGrid, { x: startGrid.x, y: midY }, { x: endGrid.x, y: midY }, endGrid];
    } else if (sv.axis === 'x') {
      gridRoute = [startGrid, { x: startGrid.x, y: endGrid.y }, endGrid];
    } else {
      gridRoute = [startGrid, { x: endGrid.x, y: startGrid.y }, endGrid];
    }
  
    const points = [
      ...sourceTerminal,
      ...gridRoute.slice(1),
      ...targetTerminal.slice().reverse().slice(1),
    ];
  
    return points.filter((point, index, list) => {
      const prev = list[index - 1];
      return !prev || prev.x !== point.x || prev.y !== point.y;
    });
  },

  _getConnectorRenderPoints_(connector = {}, { draft = false } = {}) {
    const sourceAnchor = this._normalizeConnectorAnchor_(connector.sourceAnchor || connector.source_anchor || '', '');
    const targetAnchor = this._normalizeConnectorAnchor_(connector.targetAnchor || connector.target_anchor || '', '');
    const sourceCardId = String(connector.sourceCardId || connector.source_card_id || '').trim();
    const targetCardId = String(connector.targetCardId || connector.target_card_id || '').trim();
    const stored = (Array.isArray(connector.points) ? connector.points : [])
      .map((point) => this._normalizeConnectorPoint_(point))
      .filter((point) => Number.isFinite(point.x) && Number.isFinite(point.y));
    const points = stored.length >= 2 ? stored : [
      this._normalizeConnectorPoint_(stored[0] || { x: 0, y: 0 }),
      this._normalizeConnectorPoint_(
        stored[1] || { x: this._getConnectorGridSize_() * 6, y: 0 },
        { x: this._getConnectorGridSize_() * 6, y: 0 }
      ),
    ];
    const sourceWrap = sourceCardId ? this._getWrapperByLayoutCardId_(sourceCardId) : null;
    const targetWrap = targetCardId ? this._getWrapperByLayoutCardId_(targetCardId) : null;
    const useCardEdge = !draft && !this.editMode;
    const startAnchor = sourceWrap && sourceAnchor ? this._getCardAnchorPoint_(sourceWrap, sourceAnchor, { edge: useCardEdge }) : null;
    const endAnchor = targetWrap && targetAnchor ? this._getCardAnchorPoint_(targetWrap, targetAnchor, { edge: useCardEdge }) : null;
    const start = startAnchor ? { x: startAnchor.x, y: startAnchor.y } : points[0];
    const end = endAnchor ? { x: endAnchor.x, y: endAnchor.y } : points[points.length - 1];
  
    if ((draft || this._isConnectorAutoRoute_(connector)) && startAnchor && endAnchor) {
      return this._buildAutoConnectorRoute_(start, end, sourceAnchor, targetAnchor);
    }
  
    const next = points.map((point) => ({ ...point }));
    next[0] = { ...start };
    next[next.length - 1] = { ...end };
    return next;
  },

  _connectorPointsEqual_(a = [], b = [], tolerance = 0.5) {
    if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return false;
    return a.every((point, index) => {
      const other = b[index] || {};
      return Math.abs((Number(point?.x) || 0) - (Number(other?.x) || 0)) <= tolerance
        && Math.abs((Number(point?.y) || 0) - (Number(other?.y) || 0)) <= tolerance;
    });
  },

  _syncAnchoredConnectorPointsForCurrentLayout_({ reason = null, render = false } = {}) {
    let changed = false;
    const entries = this._getCurrentConnectorEntries_() || [];
    const next = entries.map((entry) => {
      const hasAnchor = !!(
        entry.sourceAnchor
        || entry.source_anchor
        || entry.targetAnchor
        || entry.target_anchor
      );
      if (!hasAnchor) return entry;
      const points = this._getConnectorRenderPoints_(entry);
      if (!Array.isArray(points) || points.length < 2) return entry;
      const nextPoints = this._isConnectorAutoRoute_(entry)
        ? [points[0], points[points.length - 1]]
        : points;
      if (this._connectorPointsEqual_(entry.points || [], nextPoints)) return entry;
      changed = true;
      return { ...entry, points: nextPoints };
    });
    if (changed) {
      this._setCurrentConnectorEntries_(next, { reason, render });
    } else if (render) {
      this._renderConnectors_?.();
    }
    return changed;
  },

  _scheduleConnectorsRender_({ syncAnchors = false, settle = false, deferFirst = false } = {}) {
    this.__connectorRenderSyncAnchors = !!(this.__connectorRenderSyncAnchors || syncAnchors);
    if (settle) {
      try { clearTimeout(this.__connectorRenderSettleTimer1); } catch {}
      try { clearTimeout(this.__connectorRenderSettleTimer2); } catch {}
      this.__connectorRenderSettleTimer1 = setTimeout(() => {
        this.__connectorRenderSettleTimer1 = 0;
        this._scheduleConnectorsRender_?.({ syncAnchors });
      }, 80);
      this.__connectorRenderSettleTimer2 = setTimeout(() => {
        this.__connectorRenderSettleTimer2 = 0;
        this._scheduleConnectorsRender_?.({ syncAnchors });
      }, 240);
      if (deferFirst) return;
    }
    if (this.__connectorRenderRAF) return;
    this.__connectorRenderRAF = requestAnimationFrame(() => {
      this.__connectorRenderRAF = 0;
      const shouldSync = !!this.__connectorRenderSyncAnchors;
      this.__connectorRenderSyncAnchors = false;
      if (shouldSync) this._syncAnchoredConnectorPointsForCurrentLayout_?.({ reason: null, render: false });
      this._renderConnectors_?.();
      requestAnimationFrame(() => this._renderConnectors_?.());
    });
  },

  _normalizeConnectorCardIds_(value, extras = []) {
    const out = [];
    const add = (item) => {
      if (item === null || item === undefined) return;
      if (Array.isArray(item)) {
        item.forEach(add);
        return;
      }
      String(item)
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean)
        .forEach((id) => {
          if (!out.includes(id)) out.push(id);
        });
    };
    add(value);
    add(extras);
    return out;
  },

  _getCardWrapperCanvasRect_(wrap) {
    if (!wrap) return null;
    const x = parseFloat(wrap.getAttribute('data-x')) || 0;
    const y = parseFloat(wrap.getAttribute('data-y')) || 0;
    const width = parseFloat(wrap.style.width) || wrap.getBoundingClientRect?.().width || 0;
    const height = parseFloat(wrap.style.height) || wrap.getBoundingClientRect?.().height || 0;
    return { x, y, width, height };
  },

  _getWrapperByLayoutCardId_(cardId) {
    const id = String(cardId || '').trim();
    if (!id || !this.cardContainer) return null;
    return Array.from(this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)'))
      .find((wrap) => String(wrap.dataset.layoutCardId || '') === id) || null;
  },

  _getConnectorScopeWrappersFromSelection_(tabId = null) {
    const currentTab = this._normalizeTabId(tabId || this.activeTab || this.defaultTab);
    const selection = Array.from(this._selection || []);
    return selection.filter((wrap) => {
      if (!wrap || wrap.classList?.contains('ddc-placeholder')) return false;
      if (!wrap.dataset?.layoutCardId) return false;
      const wrapTab = this._normalizeTabId(wrap.dataset.tabId || this.defaultTab);
      if (wrapTab !== currentTab) return false;
      return this._isWrapVisibleForActiveLayers_(wrap);
    });
  },

  _getConnectorPointOwnerWrapper_(point = {}, { tabId = null } = {}) {
    if (!this.cardContainer || !point) return null;
    const currentTab = this._normalizeTabId(tabId || this.activeTab || this.defaultTab);
    const tolerance = Math.max(6, Number(this.gridSize || 10) * 0.35);
    const candidates = Array.from(this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)'))
      .filter((wrap) => {
        if (!wrap.dataset?.layoutCardId) return false;
        const wrapTab = this._normalizeTabId(wrap.dataset.tabId || this.defaultTab);
        if (wrapTab !== currentTab) return false;
        if (!this._isWrapVisibleForActiveLayers_(wrap)) return false;
        if (!this.editMode && !this._shouldWrapDisplayForCurrentContext_(wrap)) return false;
        const rect = this._getCardWrapperCanvasRect_(wrap);
        if (!rect) return false;
        const x = Number(point.x) || 0;
        const y = Number(point.y) || 0;
        return x >= rect.x - tolerance
          && x <= rect.x + rect.width + tolerance
          && y >= rect.y - tolerance
          && y <= rect.y + rect.height + tolerance;
      })
      .sort((a, b) => (parseInt(b.style.zIndex || '0', 10) || 0) - (parseInt(a.style.zIndex || '0', 10) || 0));
    return candidates[0] || null;
  },

  _getConnectorScopeFromWrappers_(wrappers = [], { tabId = null } = {}) {
    const picked = [];
    (Array.isArray(wrappers) ? wrappers : []).forEach((wrap) => {
      if (!wrap?.dataset?.layoutCardId) return;
      if (!picked.includes(wrap)) picked.push(wrap);
    });
    const cardIds = picked.map((wrap) => wrap.dataset.layoutCardId).filter(Boolean);
    const sourceCardId = cardIds[0] || '';
    const targetCardId = cardIds[1] || sourceCardId || '';
    const layerIds = [];
    picked.forEach((wrap) => {
      this._getWrapperLayerIds_(wrap).forEach((id) => {
        if (!layerIds.includes(id)) layerIds.push(id);
      });
    });
    if (!layerIds.length && this.layersEnabled && Array.isArray(this.activeLayerIds) && this.activeLayerIds.length) {
      this.activeLayerIds.forEach((id) => {
        if (id && !layerIds.includes(id)) layerIds.push(id);
      });
    }
    return {
      tabId: this._normalizeTabId(tabId || picked[0]?.dataset?.tabId || this.activeTab || this.defaultTab),
      cardIds,
      sourceCardId,
      targetCardId,
      layerIds,
    };
  },

  _inferConnectorScopeFromPoints_(points = [], { tabId = null } = {}) {
    const currentTab = this._normalizeTabId(tabId || this.activeTab || this.defaultTab);
    const list = Array.isArray(points) ? points : [];
    const wrappers = [];
    const first = list[0];
    const last = list[list.length - 1];
    [first, last].forEach((point) => {
      const wrap = this._getConnectorPointOwnerWrapper_(point, { tabId: currentTab });
      if (wrap && !wrappers.includes(wrap)) wrappers.push(wrap);
    });
    return this._getConnectorScopeFromWrappers_(wrappers, { tabId: currentTab });
  },

  _getConnectorScopeForNewConnector_(points = [], { tabId = null } = {}) {
    const currentTab = this._normalizeTabId(tabId || this.activeTab || this.defaultTab);
    const selected = this._getConnectorScopeWrappersFromSelection_(currentTab);
    if (selected.length) return this._getConnectorScopeFromWrappers_(selected.slice(0, 2), { tabId: currentTab });
    return this._inferConnectorScopeFromPoints_(points, { tabId: currentTab });
  },

  _normalizeConnectorEntry_(entry = {}, fallback = null) {
    const source = this._cloneJson_(entry) || {};
    const fallbackEntry = fallback || {};
    const defaults = this._defaultConnectorConfig_();
    const id = String(source.id || fallbackEntry.id || `connector_${crypto?.randomUUID?.() || Math.random().toString(36).slice(2)}`);
    const tabId = this._normalizeTabId(
      source.tabId
      || source.tab_id
      || fallbackEntry.tabId
      || fallbackEntry.tab_id
      || this.activeTab
      || this.defaultTab
    );
    const rawPoints = Array.isArray(source.points) && source.points.length
      ? source.points
      : (Array.isArray(fallbackEntry.points) ? fallbackEntry.points : []);
    const points = rawPoints
      .map((point, index) => this._normalizeConnectorPoint_(point, rawPoints[index]))
      .filter((point) => Number.isFinite(point.x) && Number.isFinite(point.y));
    const normalizedPoints = points.length >= 2
      ? points
      : [
          this._normalizeConnectorPoint_(points[0] || { x: 0, y: 0 }),
          this._normalizeConnectorPoint_(
            points[1] || points[0] || { x: this._getConnectorGridSize_() * 6, y: 0 },
            { x: this._getConnectorGridSize_() * 6, y: 0 }
          )
        ];
    const sourceCardId = String(
      source.sourceCardId
      || source.source_card_id
      || fallbackEntry.sourceCardId
      || fallbackEntry.source_card_id
      || ''
    ).trim();
    const targetCardId = String(
      source.targetCardId
      || source.target_card_id
      || fallbackEntry.targetCardId
      || fallbackEntry.target_card_id
      || ''
    ).trim();
    const sourceAnchor = this._normalizeConnectorAnchor_(
      source.sourceAnchor
      || source.source_anchor
      || fallbackEntry.sourceAnchor
      || fallbackEntry.source_anchor
      || '',
      ''
    );
    const targetAnchor = this._normalizeConnectorAnchor_(
      source.targetAnchor
      || source.target_anchor
      || fallbackEntry.targetAnchor
      || fallbackEntry.target_anchor
      || '',
      ''
    );
    let cardIds = this._normalizeConnectorCardIds_(
      source.cardIds
      || source.card_ids
      || source.anchorCardIds
      || source.anchor_card_ids
      || source.cardId
      || source.card_id
      || fallbackEntry.cardIds
      || fallbackEntry.card_ids
      || fallbackEntry.anchorCardIds
      || fallbackEntry.anchor_card_ids
      || fallbackEntry.cardId
      || fallbackEntry.card_id
      || [],
      [sourceCardId, targetCardId]
    );
    let layerIds = this._normalizeCardLayerIds_(
      source.layerIds
      || source.layer_ids
      || fallbackEntry.layerIds
      || fallbackEntry.layer_ids
      || []
    );
    if (!cardIds.length && this.cardContainer) {
      const inferred = this._inferConnectorScopeFromPoints_(normalizedPoints, { tabId });
      cardIds = inferred.cardIds || [];
      if (!layerIds.length) layerIds = inferred.layerIds || [];
    }
    const out = {
      ...defaults,
      ...fallbackEntry,
      ...source,
      id,
      tabId,
      points: normalizedPoints,
    };
    if (sourceAnchor) {
      out.sourceAnchor = sourceAnchor;
      out.source_anchor = sourceAnchor;
    } else {
      delete out.sourceAnchor;
      delete out.source_anchor;
    }
    if (targetAnchor) {
      out.targetAnchor = targetAnchor;
      out.target_anchor = targetAnchor;
    } else {
      delete out.targetAnchor;
      delete out.target_anchor;
    }
    if (out.sourceAnchor && out.targetAnchor && out.auto_route == null && out.autoRoute == null) {
      out.auto_route = true;
    } else if (out.autoRoute != null && out.auto_route == null) {
      out.auto_route = !!out.autoRoute;
    }
    if (cardIds.length) {
      out.cardIds = cardIds;
      out.sourceCardId = sourceCardId || cardIds[0];
      out.targetCardId = targetCardId || cardIds[1] || cardIds[0];
    } else {
      delete out.cardIds;
      delete out.card_ids;
      delete out.sourceCardId;
      delete out.source_card_id;
      delete out.targetCardId;
      delete out.target_card_id;
    }
    if (layerIds.length) out.layerIds = layerIds;
    else {
      delete out.layerIds;
      delete out.layer_ids;
    }
    out.thickness = Math.max(2, Math.min(28, Number(out.thickness) || defaults.thickness));
    out.arrow_size = Math.max(6, Math.min(56, Number(out.arrow_size ?? out.arrowSize) || defaults.arrow_size));
    {
      const z = Math.round(Number(out.z ?? out.zIndex ?? out.z_index ?? defaults.z));
      out.z = Number.isFinite(z) ? Math.max(1, Math.min(9999, z)) : defaults.z;
      delete out.zIndex;
      delete out.z_index;
    }
    {
      const speed = Number(out.animation_speed ?? defaults.animation_speed);
      out.animation_speed = Number.isFinite(speed) ? Math.max(0, Math.min(8, speed)) : defaults.animation_speed;
    }
    out.entity = String(out.entity || '').trim();
    out.active_states = String(out.active_states ?? defaults.active_states).trim();
    out.arrows = ['none', 'start', 'end', 'both'].includes(String(out.arrows || '').toLowerCase())
      ? String(out.arrows).toLowerCase()
      : defaults.arrows;
    out.flow_direction = ['auto', 'forward', 'reverse'].includes(String(out.flow_direction || '').toLowerCase())
      ? String(out.flow_direction).toLowerCase()
      : defaults.flow_direction;
    out.line_style = ['solid', 'dashed', 'dotted'].includes(String(out.line_style || '').toLowerCase())
      ? String(out.line_style).toLowerCase()
      : defaults.line_style;
    out.animate_mode = ['never', 'active', 'always'].includes(String(out.animate_mode || '').toLowerCase())
      ? String(out.animate_mode).toLowerCase()
      : defaults.animate_mode;
    out.animation_style = this._normalizeConnectorAnimationStyle_(out.animation_style ?? out.animationStyle ?? defaults.animation_style);
    out.glow = out.glow !== false;
    out.rounded = out.rounded !== false;
    return out;
  },

  _normalizeResponsiveConnectorLayouts_(connectors = [], responsiveConnectors = null) {
    const variants = this._responsiveLayoutVariantKeys_();
    const baseConnectors = Array.isArray(connectors) ? connectors : [];
    const sourceLayouts = responsiveConnectors || {};
    const normalized = {};
  
    const resolveVariantEntries = (profile, orientation) => {
      const variantKey = this._getResponsiveLayoutKey_(profile, orientation);
      const direct = sourceLayouts?.[variantKey];
      if (Array.isArray(direct)) return direct;
      if (Array.isArray(direct?.connectors)) return direct.connectors;
      const grouped = sourceLayouts?.[profile];
      const nested = grouped?.[orientation];
      if (Array.isArray(nested)) return nested;
      if (Array.isArray(nested?.connectors)) return nested.connectors;
      if (Array.isArray(grouped)) return grouped;
      if (Array.isArray(grouped?.connectors)) return grouped.connectors;
      return null;
    };
  
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
            || baseConnectors;
      normalized[variantKey] = (Array.isArray(working) ? working : []).map((entry) => {
        const fallbackEntry = normalized[this._getPrimaryResponsiveLayoutKey_()]?.find?.((candidate) => candidate.id === entry?.id) || null;
        return this._normalizeConnectorEntry_(entry, fallbackEntry);
      });
    };
  
    const desktopSource = resolveVariantEntries('desktop', 'landscape') || baseConnectors;
    normalized.desktop_landscape = desktopSource.map((entry) => this._normalizeConnectorEntry_(entry));
    buildVariant('tablet', 'landscape', ['tablet_portrait', 'desktop_landscape']);
    buildVariant('tablet', 'portrait', ['tablet_landscape', 'desktop_landscape']);
    buildVariant('mobile', 'landscape', ['mobile_portrait', 'desktop_landscape']);
    buildVariant('mobile', 'portrait', ['mobile_landscape', 'desktop_landscape']);
  
    variants.forEach((variantKey) => {
      normalized[variantKey] = (normalized[variantKey] || []).map((entry) => this._normalizeConnectorEntry_(entry));
    });
  
    return normalized;
  },

  _serializeResponsiveConnectorLayouts_(layouts = null, fallbackConnectors = null) {
    const normalized = this._normalizeResponsiveConnectorLayouts_(fallbackConnectors || [], layouts || this._responsiveConnectors);
    const desktopLandscape = normalized.desktop_landscape || fallbackConnectors || [];
    const tabletLandscape = normalized.tablet_landscape || desktopLandscape;
    const tabletPortrait = normalized.tablet_portrait || tabletLandscape;
    const mobileLandscape = normalized.mobile_landscape || desktopLandscape;
    const mobilePortrait = normalized.mobile_portrait || mobileLandscape;
    return {
      desktop: {
        connectors: this._cloneJson_(desktopLandscape),
        landscape: { connectors: this._cloneJson_(desktopLandscape) },
      },
      tablet: {
        connectors: this._cloneJson_(tabletLandscape),
        landscape: { connectors: this._cloneJson_(tabletLandscape) },
        portrait: { connectors: this._cloneJson_(tabletPortrait) },
      },
      mobile: {
        connectors: this._cloneJson_(mobileLandscape),
        landscape: { connectors: this._cloneJson_(mobileLandscape) },
        portrait: { connectors: this._cloneJson_(mobilePortrait) },
      },
    };
  },

  _syncConnectorLayoutsToConfig_() {
    try {
      if (!this._config) this._config = {};
      const serialized = this._serializeResponsiveConnectorLayouts_(this._responsiveConnectors);
      this._config.connectors = this._cloneJson_(serialized?.desktop?.landscape?.connectors || serialized?.desktop?.connectors || []);
      this._config.responsive_connectors = this._cloneJson_(serialized);
    } catch (err) {
      console.warn('[ddc] Failed to sync connector layouts to config', err);
    }
  },

  _getCurrentConnectorLayoutKey_() {
    return this._activeResponsiveLayoutKey
      || this._getRequestedResponsiveLayoutKey_?.()
      || this._getPrimaryResponsiveLayoutKey_();
  },

  _getCurrentConnectorEntries_() {
    if (!this._responsiveConnectors) {
      this._responsiveConnectors = this._normalizeResponsiveConnectorLayouts_(this._config?.connectors || [], this._config?.responsive_connectors || null);
    }
    const layoutKey = this._getCurrentConnectorLayoutKey_();
    if (!Array.isArray(this._responsiveConnectors[layoutKey])) {
      this._responsiveConnectors[layoutKey] = [];
    }
    return this._responsiveConnectors[layoutKey];
  },

  _setCurrentConnectorEntries_(entries, { reason = 'connector-change', render = true } = {}) {
    if (!this._responsiveConnectors) {
      this._responsiveConnectors = this._normalizeResponsiveConnectorLayouts_(this._config?.connectors || [], this._config?.responsive_connectors || null);
    }
    const layoutKey = this._getCurrentConnectorLayoutKey_();
    this._responsiveConnectors[layoutKey] = (Array.isArray(entries) ? entries : []).map((entry) => this._normalizeConnectorEntry_(entry));
    this._syncConnectorLayoutsToConfig_?.();
    if (render) this._renderConnectors_?.();
    if (reason) this._queueSave?.(reason);
    return this._responsiveConnectors[layoutKey];
  },

  _updateCurrentConnectorEntries_(updater, { reason = 'connector-change', render = true } = {}) {
    const current = this._cloneJson_(this._getCurrentConnectorEntries_()) || [];
    const next = typeof updater === 'function' ? updater(current) : updater;
    return this._setCurrentConnectorEntries_(Array.isArray(next) ? next : current, { reason, render });
  },

  _ensureConnectorsLayer_() {
    if (!this.cardContainer) return null;
    let layer = this.cardContainer.querySelector('#ddcConnectorsLayer');
    if (layer && layer.namespaceURI === 'http://www.w3.org/2000/svg') {
      const replacement = document.createElement('div');
      replacement.id = 'ddcConnectorsLayer';
      replacement.className = 'ddc-connectors-layer';
      replacement.setAttribute('aria-hidden', 'true');
      layer.replaceWith(replacement);
      layer = replacement;
    }
    if (!layer) {
      layer = document.createElement('div');
      layer.id = 'ddcConnectorsLayer';
      layer.className = 'ddc-connectors-layer';
      layer.setAttribute('aria-hidden', 'true');
      this.cardContainer.appendChild(layer);
    }
    layer.style.display = '';
    return layer;
  },

  _sizeConnectorsLayer_(layer, width = 1, height = 1) {
    if (!layer) return;
    const safeWidth = Math.max(1, Math.round(Number(width) || 1));
    const safeHeight = Math.max(1, Math.round(Number(height) || 1));
    layer.setAttribute('width', String(safeWidth));
    layer.setAttribute('height', String(safeHeight));
    layer.setAttribute('viewBox', `0 0 ${safeWidth} ${safeHeight}`);
    layer.style.setProperty('--ddc-connectors-width', `${safeWidth}px`);
    layer.style.setProperty('--ddc-connectors-height', `${safeHeight}px`);
    layer.style.width = `${safeWidth}px`;
    layer.style.height = `${safeHeight}px`;
  },

  _getConnectorCanvasSize_() {
    const c = this.cardContainer;
    if (!c) return { width: 1, height: 1 };
    const width = Math.max(
      1,
      parseFloat(c.style.width) || c.scrollWidth || c.offsetWidth || c.getBoundingClientRect?.().width || 1
    );
    const height = Math.max(
      1,
      parseFloat(c.style.height) || c.scrollHeight || c.offsetHeight || c.getBoundingClientRect?.().height || 1
    );
    return {
      width: Math.round(width),
      height: Math.round(height),
    };
  },

  _eventToConnectorPoint_(ev) {
    const layer = this._ensureConnectorsLayer_?.();
    const rect = layer?.getBoundingClientRect?.() || this.cardContainer?.getBoundingClientRect?.();
    if (!rect) return { x: 0, y: 0 };
    const sx = this.__pointerScaleX || 1;
    const sy = this.__pointerScaleY || 1;
    return {
      x: ((ev.clientX - rect.left) / sx),
      y: ((ev.clientY - rect.top) / sy),
    };
  },

  _snapConnectorPoint_(point) {
    const gs = Math.max(1, Number(this._getConnectorGridSize_?.() || 10) || 10);
    return {
      x: Math.round((Number(point?.x) || 0) / gs) * gs,
      y: Math.round((Number(point?.y) || 0) / gs) * gs,
    };
  },

  _snapConnectorPointToCellOrigin_(point) {
    const gs = Math.max(1, Number(this._getConnectorGridSize_?.() || 10) || 10);
    return {
      x: Math.floor((Number(point?.x) || 0) / gs) * gs,
      y: Math.floor((Number(point?.y) || 0) / gs) * gs,
    };
  },

  _buildConnectorPathData_(points = []) {
    if (!Array.isArray(points) || points.length < 2) return '';
    return points
      .map((point, index) => `${index === 0 ? 'M' : 'L'} ${Number(point.x) || 0} ${Number(point.y) || 0}`)
      .join(' ');
  },

  _buildConnectorArrowHeadPath_(tip = {}, from = {}, { size = 12, width = 8 } = {}) {
    const tx = Number(tip?.x);
    const ty = Number(tip?.y);
    const fx = Number(from?.x);
    const fy = Number(from?.y);
    if (![tx, ty, fx, fy].every(Number.isFinite)) return '';
  
    const dx = tx - fx;
    const dy = ty - fy;
    const len = Math.hypot(dx, dy);
    if (len < 0.001) return '';
  
    const arrowSize = Math.max(6, Number(size) || 12);
    const arrowWidth = Math.max(5, Number(width) || 8);
    const ux = dx / len;
    const uy = dy / len;
    const px = -uy;
    const py = ux;
    const half = arrowWidth / 2;
    const baseX = tx - (ux * arrowSize);
    const baseY = ty - (uy * arrowSize);
    const notchX = tx - (ux * arrowSize * 0.44);
    const notchY = ty - (uy * arrowSize * 0.44);
    const fmt = (value) => `${Math.round((Number(value) || 0) * 100) / 100}`;
  
    return [
      `M ${fmt(tx)} ${fmt(ty)}`,
      `L ${fmt(baseX + (px * half))} ${fmt(baseY + (py * half))}`,
      `Q ${fmt(notchX)} ${fmt(notchY)} ${fmt(baseX - (px * half))} ${fmt(baseY - (py * half))}`,
      'Z',
    ].join(' ');
  },

  _splitConnectorStateRules_(value) {
    return String(value || '')
      .split(',')
      .map((token) => token.trim())
      .filter(Boolean);
  },

  _isTruthyConnectorState_(stateValue) {
    const state = String(stateValue ?? '').trim().toLowerCase();
    if (!state) return false;
    return !['0', 'off', 'false', 'closed', 'idle', 'unavailable', 'unknown', 'none'].includes(state);
  },

  _matchesConnectorStateRule_(stateValue, rule) {
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
    if (loweredToken === 'truthy') return this._isTruthyConnectorState_(stateValue);
    if (loweredToken === 'falsy') return !this._isTruthyConnectorState_(stateValue);
    if (loweredToken === '!off') return lowered !== 'off';
    return lowered === loweredToken;
  },

  _isConnectorStateActive_(stateValue, activeStates) {
    const tokens = this._splitConnectorStateRules_(activeStates);
    if (!tokens.length) return this._isTruthyConnectorState_(stateValue);
    return tokens.some((rule) => this._matchesConnectorStateRule_(stateValue, rule));
  },

  _getConnectorResolvedState_(connector = {}) {
    const entityId = String(connector.entity || '').trim();
    const entity = entityId ? this.hass?.states?.[entityId] : null;
    const stateValue = entity?.state ?? '';
    const active = entityId ? this._isConnectorStateActive_(stateValue, connector.active_states) : true;
    const numericState = Number(stateValue);
    const flowDirection = String(connector.flow_direction || 'auto').toLowerCase();
    const reverse = flowDirection === 'reverse'
      || (flowDirection === 'auto' && Number.isFinite(numericState) && numericState < 0);
    const animateMode = String(connector.animate_mode || 'active').toLowerCase();
    const speed = Number(connector.animation_speed ?? this._defaultConnectorConfig_().animation_speed);
    const hasMotion = Number.isFinite(speed) && speed > 0;
    const animate = hasMotion && (animateMode === 'always' || (animateMode === 'active' && active));
    return { active, reverse, animate, stateValue };
  },

  _getConnectorHassSignature_() {
    const currentTab = this._normalizeTabId(this.activeTab || this.defaultTab);
    const entries = (this._getCurrentConnectorEntries_?.() || []).filter((entry) => {
      return this._connectorMatchesCurrentContext_?.(entry, currentTab);
    });
    if (!entries.length) return '';
    return entries.map((entry) => {
      const entityId = String(entry.entity || '').trim();
      const entity = entityId ? this.hass?.states?.[entityId] : null;
      const stateValue = entity?.state ?? '';
      const resolved = this._getConnectorResolvedState_(entry);
      const speed = Number(entry.animation_speed ?? this._defaultConnectorConfig_().animation_speed) || 0;
      return [
        entry.id || '',
        entityId,
        String(stateValue),
        resolved.active ? 1 : 0,
        resolved.animate ? 1 : 0,
        resolved.reverse ? 1 : 0,
        String(entry.active_states ?? ''),
        String(entry.animate_mode || ''),
        String(entry.flow_direction || ''),
        String(entry.animation_style || entry.animationStyle || ''),
        String(speed),
      ].join('\u001f');
    }).join('\u001e');
  },

  _pointToSegmentDistance_(point, start, end) {
    const dx = (end.x - start.x);
    const dy = (end.y - start.y);
    if (!dx && !dy) {
      const px = point.x - start.x;
      const py = point.y - start.y;
      return { distanceSq: px * px + py * py, t: 0 };
    }
    const tRaw = (((point.x - start.x) * dx) + ((point.y - start.y) * dy)) / ((dx * dx) + (dy * dy));
    const t = Math.max(0, Math.min(1, tRaw));
    const projX = start.x + (dx * t);
    const projY = start.y + (dy * t);
    const px = point.x - projX;
    const py = point.y - projY;
    return { distanceSq: px * px + py * py, t };
  },

  _insertConnectorPointAtEvent_(connectorId, ev) {
    const point = this._snapConnectorPointToCellOrigin_(this._eventToConnectorPoint_(ev));
    let changed = false;
    this._updateCurrentConnectorEntries_((entries) => entries.map((entry) => {
      if (entry.id !== connectorId) return entry;
      const next = this._normalizeConnectorEntry_(entry);
      const points = Array.isArray(next.points) ? [...next.points] : [];
      if (points.length < 2) return next;
      let bestIndex = 0;
      let bestDistance = Infinity;
      for (let i = 0; i < points.length - 1; i++) {
        const probe = this._pointToSegmentDistance_(point, points[i], points[i + 1]);
        if (probe.distanceSq < bestDistance) {
          bestDistance = probe.distanceSq;
          bestIndex = i;
        }
      }
      points.splice(bestIndex + 1, 0, point);
      changed = true;
      return { ...next, points, auto_route: false };
    }), { reason: changed ? 'connector-junction-add' : null, render: true });
    if (changed) this._selectedConnectorId = connectorId;
  },

  _insertConnectorMidpoint_(connectorId) {
    let changed = false;
    this._updateCurrentConnectorEntries_((entries) => entries.map((entry) => {
      if (entry.id !== connectorId) return entry;
      const next = this._normalizeConnectorEntry_(entry);
      const points = Array.isArray(next.points) ? [...next.points] : [];
      if (points.length < 2) return next;
      let bestIndex = 0;
      let bestLengthSq = -1;
      for (let i = 0; i < points.length - 1; i++) {
        const dx = (points[i + 1].x - points[i].x);
        const dy = (points[i + 1].y - points[i].y);
        const lenSq = (dx * dx) + (dy * dy);
        if (lenSq > bestLengthSq) {
          bestLengthSq = lenSq;
          bestIndex = i;
        }
      }
      const gs = Math.max(1, Number(this._getConnectorGridSize_?.() || 10) || 10);
      const start = points[bestIndex];
      const end = points[bestIndex + 1];
      const midpoint = this._snapConnectorPoint_({
        x: (start.x + end.x) / 2,
        y: (start.y + end.y) / 2,
      });
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      let bendPoint = midpoint;
      if (Math.abs(dx) >= Math.abs(dy)) {
        const offset = Math.max(gs * 2, Math.round(Math.abs(dx) / 6 / gs) * gs || (gs * 2));
        bendPoint = this._snapConnectorPoint_({
          x: midpoint.x,
          y: midpoint.y + (offset * (bestIndex % 2 === 0 ? 1 : -1)),
        });
      } else {
        const offset = Math.max(gs * 2, Math.round(Math.abs(dy) / 6 / gs) * gs || (gs * 2));
        bendPoint = this._snapConnectorPoint_({
          x: midpoint.x + (offset * (bestIndex % 2 === 0 ? 1 : -1)),
          y: midpoint.y,
        });
      }
      if (points.some((point) => point.x === bendPoint.x && point.y === bendPoint.y)) {
        bendPoint = this._snapConnectorPoint_({
          x: midpoint.x + gs,
          y: midpoint.y + gs,
        });
      }
      points.splice(bestIndex + 1, 0, bendPoint);
      changed = true;
      return { ...next, points, auto_route: false };
    }), { reason: changed ? 'connector-junction-add' : null, render: true });
    if (changed) this._selectedConnectorId = connectorId;
  },

  _getConnectorById_(connectorId) {
    return (this._getCurrentConnectorEntries_() || []).find((entry) => entry.id === connectorId) || null;
  },

  _getConnectorZ_(connector = {}) {
    const z = Math.round(Number(connector.z ?? connector.zIndex ?? connector.z_index ?? this._defaultConnectorConfig_().z));
    return Number.isFinite(z) ? Math.max(1, Math.min(9999, z)) : this._defaultConnectorConfig_().z;
  },

  _connectorZRange_() {
    const entries = this._getCurrentConnectorEntries_?.() || [];
    let min = Infinity;
    let max = -Infinity;
    entries.forEach((entry) => {
      const z = this._getConnectorZ_(entry);
      min = Math.min(min, z);
      max = Math.max(max, z);
    });
    this.cardContainer?.querySelectorAll?.('.card-wrapper:not(.ddc-placeholder)')?.forEach((wrap) => {
      const z = Math.round(Number(wrap.style?.zIndex || 0));
      if (!Number.isFinite(z)) return;
      min = Math.min(min, z);
      max = Math.max(max, z);
    });
    if (!Number.isFinite(min)) min = this._defaultConnectorConfig_().z;
    if (!Number.isFinite(max)) max = this._defaultConnectorConfig_().z;
    return { min, max };
  },

  _setConnectorZ_(connectorId, z, { reason = 'connector-z-change', render = true } = {}) {
    const id = String(connectorId || '').trim();
    const nextZ = Math.round(Number(z));
    if (!id || !Number.isFinite(nextZ)) return false;
    let changed = false;
    this._updateCurrentConnectorEntries_((entries) => entries.map((entry) => {
      if (entry.id !== id) return entry;
      const normalizedZ = Math.max(1, Math.min(9999, nextZ));
      changed = normalizedZ !== this._getConnectorZ_(entry);
      return { ...entry, z: normalizedZ };
    }), { reason: changed ? reason : null, render });
    if (changed) this._selectedConnectorId = id;
    return changed;
  },

  _adjustConnectorZ_(connectorId, delta = 0) {
    const connector = this._getConnectorById_(connectorId);
    if (!connector) return false;
    return this._setConnectorZ_(connectorId, this._getConnectorZ_(connector) + (Number(delta) || 0));
  },

  _moveConnectorZ_(connectorId, mode = 'front') {
    const connector = this._getConnectorById_(connectorId);
    if (!connector) return false;
    const { min, max } = this._connectorZRange_();
    if (mode === 'front') return this._setConnectorZ_(connectorId, max + 1);
    if (mode === 'back') return this._setConnectorZ_(connectorId, min - 1);
    return false;
  },

  _findConnectorEndpointAtAnchor_(cardId, anchor = 'right', { tabId = null } = {}) {
    const safeCardId = String(cardId || '').trim();
    const safeAnchor = this._normalizeConnectorAnchor_(anchor, '');
    if (!safeCardId || !safeAnchor) return null;
    const currentTab = this._normalizeTabId(tabId || this.activeTab || this.defaultTab);
    const matches = [];
    (this._getCurrentConnectorEntries_() || []).forEach((entry) => {
      if (!this._connectorMatchesCurrentContext_?.(entry, currentTab)) return;
      const sourceId = String(entry.sourceCardId || entry.source_card_id || '').trim();
      const targetId = String(entry.targetCardId || entry.target_card_id || '').trim();
      const sourceAnchor = this._normalizeConnectorAnchor_(entry.sourceAnchor || entry.source_anchor || '', '');
      const targetAnchor = this._normalizeConnectorAnchor_(entry.targetAnchor || entry.target_anchor || '', '');
      if (sourceId === safeCardId && sourceAnchor === safeAnchor) {
        matches.push({ connector: entry, side: 'source' });
      }
      if (targetId === safeCardId && targetAnchor === safeAnchor) {
        matches.push({ connector: entry, side: 'target' });
      }
    });
    if (!matches.length) return null;
    const selected = matches.find((match) => match.connector?.id && match.connector.id === this._selectedConnectorId);
    if (selected) return selected;
    return matches.length === 1 ? matches[0] : null;
  },

  _buildConnectorEndpointMove_(entry = {}, side = 'target', point = {}, hit = null) {
    const movingSource = side === 'source';
    const livePoints = this._getConnectorRenderPoints_(entry);
    const storedPoints = Array.isArray(entry.points) ? entry.points : [];
    const points = (Array.isArray(livePoints) && livePoints.length >= 2 ? livePoints : storedPoints)
      .map((item) => this._normalizeConnectorPoint_(item));
    if (points.length < 2) return entry;
  
    const endpointIndex = movingSource ? 0 : points.length - 1;
    const nextPoint = hit?.point
      ? this._normalizeConnectorPoint_(hit.point)
      : this._snapConnectorPointToCellOrigin_(point);
    points[endpointIndex] = nextPoint;
  
    const next = { ...entry };
    const hitCardId = String(hit?.cardId || '').trim();
    const hitAnchor = this._normalizeConnectorAnchor_(hit?.anchor || '', '');
    if (movingSource) {
      if (hitCardId && hitAnchor) {
        next.sourceCardId = hitCardId;
        next.source_card_id = hitCardId;
        next.sourceAnchor = hitAnchor;
        next.source_anchor = hitAnchor;
      } else {
        delete next.sourceCardId;
        delete next.source_card_id;
        delete next.sourceAnchor;
        delete next.source_anchor;
      }
    } else if (hitCardId && hitAnchor) {
      next.targetCardId = hitCardId;
      next.target_card_id = hitCardId;
      next.targetAnchor = hitAnchor;
      next.target_anchor = hitAnchor;
    } else {
      delete next.targetCardId;
      delete next.target_card_id;
      delete next.targetAnchor;
      delete next.target_anchor;
    }
  
    const sourceId = String(next.sourceCardId || next.source_card_id || '').trim();
    const targetId = String(next.targetCardId || next.target_card_id || '').trim();
    const sourceAnchor = this._normalizeConnectorAnchor_(next.sourceAnchor || next.source_anchor || '', '');
    const targetAnchor = this._normalizeConnectorAnchor_(next.targetAnchor || next.target_anchor || '', '');
    const cardIds = this._normalizeConnectorCardIds_([sourceId, targetId || sourceId]);
    if (cardIds.length) next.cardIds = cardIds;
    else {
      delete next.cardIds;
      delete next.card_ids;
    }
  
    const anchoredAtBothEnds = !!(sourceId && targetId && sourceAnchor && targetAnchor);
    next.auto_route = anchoredAtBothEnds;
    next.points = anchoredAtBothEnds
      ? [points[0], points[points.length - 1]]
      : points;
    return next;
  },

  _applyConnectorEndpointMove_(connectorId, side = 'target', point = {}, hit = null, { reason = null, render = true } = {}) {
    const id = String(connectorId || '').trim();
    if (!id) return false;
    let changed = false;
    this._updateCurrentConnectorEntries_((entries) => entries.map((entry) => {
      if (entry.id !== id) return entry;
      changed = true;
      return this._buildConnectorEndpointMove_(entry, side, point, hit);
    }), { reason, render });
    return changed;
  },

  _getConnectorScopedCardIds_(connector = {}) {
    return this._normalizeConnectorCardIds_(connector.cardIds || connector.card_ids || connector.anchorCardIds || connector.anchor_card_ids || [], [
      connector.sourceCardId || connector.source_card_id,
      connector.targetCardId || connector.target_card_id,
    ]);
  },

  _ensureResponsiveConnectorsMemory_() {
    if (!this._responsiveConnectors) {
      this._responsiveConnectors = this._normalizeResponsiveConnectorLayouts_(
        this._config?.connectors || [],
        this._config?.responsive_connectors || null
      );
    }
    return this._responsiveConnectors;
  },

  _collectConnectorLayoutsForCard_(cardId) {
    const id = String(cardId || '').trim();
    const out = {};
    if (!id) return out;
    this._ensureResponsiveConnectorsMemory_?.();
    this._ensureConnectorScopesForCurrentLayout_?.({ render: false });
    (this._responsiveLayoutVariantKeys_?.() || Object.keys(this._responsiveConnectors || {})).forEach((variantKey) => {
      const entries = Array.isArray(this._responsiveConnectors?.[variantKey]) ? this._responsiveConnectors[variantKey] : [];
      const matches = entries
        .filter((entry) => this._getConnectorScopedCardIds_(entry).includes(id))
        .map((entry) => this._normalizeConnectorEntry_(entry));
      if (matches.length) out[variantKey] = matches;
    });
    return out;
  },

  _remapSingleCardConnector_(connector = {}, {
    oldCardId = '',
    newCardId = '',
    sourceEntry = {},
    importedEntry = {},
    connectorIdMap = null,
  } = {}) {
    const nextCardId = String(newCardId || '').trim();
    if (!connector || !nextCardId) return null;
    const prevCardId = String(oldCardId || '').trim();
    const scopedIds = this._getConnectorScopedCardIds_(connector);
    if (prevCardId && scopedIds.length && !scopedIds.includes(prevCardId)) return null;
  
    const oldConnectorId = String(connector.id || `connector_${Math.random().toString(36).slice(2)}`);
    if (connectorIdMap && !connectorIdMap.has(oldConnectorId)) {
      connectorIdMap.set(oldConnectorId, `connector_${crypto?.randomUUID?.() || Math.random().toString(36).slice(2)}`);
    }
    const nextConnectorId = connectorIdMap?.get(oldConnectorId) || `connector_${crypto?.randomUUID?.() || Math.random().toString(36).slice(2)}`;
    const sourcePos = sourceEntry?.position || {};
    const targetPos = importedEntry?.position || {};
    const dx = (Number(targetPos.x) || 0) - (Number(sourcePos.x) || 0);
    const dy = (Number(targetPos.y) || 0) - (Number(sourcePos.y) || 0);
    const points = (Array.isArray(connector.points) ? connector.points : [])
      .map((point) => this._normalizeConnectorPoint_({
        x: (Number(point?.x) || 0) + dx,
        y: (Number(point?.y) || 0) + dy,
      }));
    const importedLayerIds = this._normalizeCardLayerIds_(importedEntry.layerIds || importedEntry.layer_ids || []);
    const connectorLayerIds = this._normalizeCardLayerIds_(connector.layerIds || connector.layer_ids || []);
    const layerIds = connectorLayerIds.length ? connectorLayerIds : importedLayerIds;
    return this._normalizeConnectorEntry_({
      ...this._cloneJson_(connector),
      id: nextConnectorId,
      tabId: this._normalizeTabId(importedEntry.tabId || importedEntry.tab_id || this.activeTab || this.defaultTab),
      cardIds: [nextCardId],
      sourceCardId: nextCardId,
      targetCardId: nextCardId,
      ...(layerIds.length ? { layerIds } : {}),
      points,
    });
  },

  _isConnectorLayerVisible_(connector = {}) {
    if (!this.layersEnabled) return true;
    const layerIds = this._normalizeCardLayerIds_(connector.layerIds || connector.layer_ids || []);
    if (!layerIds.length) return true;
    const active = Array.isArray(this.activeLayerIds) ? this.activeLayerIds : [];
    if (!active.length) return false;
    return layerIds.some((id) => active.includes(id));
  },

  _connectorMatchesCurrentContext_(connector = {}, currentTab = null) {
    const activeTab = this._normalizeTabId(currentTab || this.activeTab || this.defaultTab);
    const connectorTab = this._normalizeTabId(connector.tabId || connector.tab_id || activeTab);
    if (connectorTab !== activeTab) return false;
    if (!this._isConnectorLayerVisible_(connector)) return false;
  
    const cardIds = this._normalizeConnectorCardIds_(connector.cardIds || connector.card_ids || connector.anchorCardIds || connector.anchor_card_ids || [], [
      connector.sourceCardId || connector.source_card_id,
      connector.targetCardId || connector.target_card_id,
    ]);
    if (!cardIds.length) return true;
  
    return cardIds.every((cardId) => {
      const wrap = this._getWrapperByLayoutCardId_(cardId);
      if (!wrap) return false;
      const wrapTab = this._normalizeTabId(wrap.dataset.tabId || this.defaultTab);
      if (wrapTab !== activeTab) return false;
      if (!this._isWrapVisibleForActiveLayers_(wrap)) return false;
      return this.editMode ? true : this._shouldWrapDisplayForCurrentContext_(wrap);
    });
  },

  _refreshConnectorScope_(connectorId, { reason = 'connector-scope', render = true } = {}) {
    let changed = false;
    this._updateCurrentConnectorEntries_((entries) => entries.map((entry) => {
      if (entry.id !== connectorId) return entry;
      const next = this._normalizeConnectorEntry_(entry);
      const inferred = this._inferConnectorScopeFromPoints_(next.points || [], { tabId: next.tabId });
      if (!inferred.cardIds?.length) return next;
      changed = true;
      return {
        ...next,
        tabId: inferred.tabId || next.tabId,
        cardIds: inferred.cardIds,
        sourceCardId: inferred.sourceCardId || inferred.cardIds[0],
        targetCardId: inferred.targetCardId || inferred.cardIds[1] || inferred.cardIds[0],
        ...(inferred.layerIds?.length ? { layerIds: inferred.layerIds } : {}),
      };
    }), { reason: changed ? reason : null, render });
    return changed;
  },

  _syncConnectorsForCardScopeChange_(wrap, { reason = 'connector-scope-card-change', render = true } = {}) {
    const cardId = String(wrap?.dataset?.layoutCardId || '').trim();
    if (!cardId) return;
    const tabId = this._normalizeTabId(wrap.dataset.tabId || this.activeTab || this.defaultTab);
    const cardLayerIds = this._getWrapperLayerIds_(wrap);
    let changed = false;
    this._updateCurrentConnectorEntries_((entries) => entries.map((entry) => {
      const cardIds = this._normalizeConnectorCardIds_(entry.cardIds || entry.card_ids || [], [
        entry.sourceCardId || entry.source_card_id,
        entry.targetCardId || entry.target_card_id,
      ]);
      if (!cardIds.includes(cardId)) return entry;
      changed = true;
      const ownerLayerIds = [];
      cardIds.forEach((id) => {
        const owner = this._getWrapperByLayoutCardId_(id);
        const layers = owner ? this._getWrapperLayerIds_(owner) : (id === cardId ? cardLayerIds : []);
        layers.forEach((layerId) => {
          if (!ownerLayerIds.includes(layerId)) ownerLayerIds.push(layerId);
        });
      });
      return {
        ...entry,
        tabId,
        ...(ownerLayerIds.length ? { layerIds: ownerLayerIds } : { layerIds: undefined }),
      };
    }), { reason: changed ? reason : null, render });
  },

  _moveConnectorsForCardDeltas_(deltas = [], { reason = null, render = true } = {}) {
    const deltaMap = new Map();
    (Array.isArray(deltas) ? deltas : []).forEach((item) => {
      const id = String(item?.id || '').trim();
      const dx = Number(item?.dx) || 0;
      const dy = Number(item?.dy) || 0;
      if (!id || (!dx && !dy)) return;
      deltaMap.set(id, { dx, dy });
    });
    if (!deltaMap.size) return false;
    let changed = false;
    this._updateCurrentConnectorEntries_((entries) => entries.map((entry) => {
      const cardIds = this._normalizeConnectorCardIds_(entry.cardIds || entry.card_ids || [], [
        entry.sourceCardId || entry.source_card_id,
        entry.targetCardId || entry.target_card_id,
      ]);
      if (!cardIds.some((id) => deltaMap.has(id))) return entry;
      const points = Array.isArray(entry.points) ? entry.points.map((point) => ({ ...point })) : [];
      if (points.length < 2) return entry;
      const sourceId = String(entry.sourceCardId || entry.source_card_id || cardIds[0] || '').trim();
      const targetId = String(entry.targetCardId || entry.target_card_id || cardIds[1] || sourceId || '').trim();
      const sourceAnchored = !!(sourceId && this._normalizeConnectorAnchor_(entry.sourceAnchor || entry.source_anchor || '', ''));
      const targetAnchored = !!(targetId && this._normalizeConnectorAnchor_(entry.targetAnchor || entry.target_anchor || '', ''));
      const autoAnchored = this._isConnectorAutoRoute_(entry) && sourceAnchored && targetAnchored;
      if (autoAnchored) return entry;
  
      const movePoint = (index, delta) => {
        if (!points[index] || !delta) return false;
        points[index].x += delta.dx;
        points[index].y += delta.dy;
        return true;
      };
  
      const allIdsMoved = cardIds.length && cardIds.every((id) => deltaMap.has(id));
      if (cardIds.length === 1 && deltaMap.has(cardIds[0])) {
        const delta = deltaMap.get(cardIds[0]);
        if (sourceAnchored || targetAnchored) {
          let localChanged = false;
          if (sourceAnchored && targetAnchored && sourceId === targetId) {
            for (let i = 1; i < points.length - 1; i++) movePoint(i, delta);
            localChanged = points.length > 2;
          }
          if (localChanged) changed = true;
          return localChanged ? { ...entry, points } : entry;
        } else {
          points.forEach((point) => {
            point.x += delta.dx;
            point.y += delta.dy;
          });
          changed = true;
        }
        return { ...entry, points };
      }
      if (allIdsMoved) {
        const firstDelta = deltaMap.get(cardIds[0]);
        const sameDelta = cardIds.every((id) => {
          const delta = deltaMap.get(id);
          return delta && delta.dx === firstDelta.dx && delta.dy === firstDelta.dy;
        });
        if (sameDelta) {
          points.forEach((point, index) => {
            if (index === 0 && sourceAnchored) return;
            if (index === points.length - 1 && targetAnchored) return;
            point.x += firstDelta.dx;
            point.y += firstDelta.dy;
          });
          changed = true;
          return { ...entry, points };
        }
      }
      const sourceDelta = sourceId ? deltaMap.get(sourceId) : null;
      const targetDelta = targetId ? deltaMap.get(targetId) : null;
      if (sourceDelta && !sourceAnchored) {
        movePoint(0, sourceDelta);
        changed = true;
      }
      if (targetDelta && !targetAnchored) {
        movePoint(points.length - 1, targetDelta);
        changed = true;
      }
      return { ...entry, points };
    }), { reason: changed ? reason : null, render });
    return changed;
  },

  _removeConnectorsForCardIds_(cardIds = [], { reason = 'connector-card-delete', render = true } = {}) {
    const ids = this._normalizeConnectorCardIds_(cardIds);
    if (!ids.length || !this._responsiveConnectors) return false;
    let changed = false;
    const variants = this._responsiveLayoutVariantKeys_?.() || Object.keys(this._responsiveConnectors || {});
    variants.forEach((variantKey) => {
      const entries = Array.isArray(this._responsiveConnectors?.[variantKey]) ? this._responsiveConnectors[variantKey] : [];
      const next = entries.filter((entry) => {
        const connectorIds = this._normalizeConnectorCardIds_(entry.cardIds || entry.card_ids || [], [
          entry.sourceCardId || entry.source_card_id,
          entry.targetCardId || entry.target_card_id,
        ]);
        return !connectorIds.some((id) => ids.includes(id));
      });
      if (next.length !== entries.length) {
        changed = true;
        this._responsiveConnectors[variantKey] = next;
      }
    });
    if (changed) {
      this._syncConnectorLayoutsToConfig_?.();
      if (render) this._renderConnectors_?.();
      if (reason) this._queueSave?.(reason);
    }
    return changed;
  },

  _ensureConnectorScopesForCurrentLayout_({ render = false } = {}) {
    const entries = this._getCurrentConnectorEntries_() || [];
    let changed = false;
    const next = entries.map((entry) => {
      const cardIds = this._normalizeConnectorCardIds_(entry.cardIds || entry.card_ids || [], [
        entry.sourceCardId || entry.source_card_id,
        entry.targetCardId || entry.target_card_id,
      ]);
      if (cardIds.length) return entry;
      const normalized = this._normalizeConnectorEntry_(entry);
      const inferred = this._inferConnectorScopeFromPoints_(normalized.points || [], { tabId: normalized.tabId });
      if (!inferred.cardIds?.length) return normalized;
      changed = true;
      return {
        ...normalized,
        tabId: inferred.tabId || normalized.tabId,
        cardIds: inferred.cardIds,
        sourceCardId: inferred.sourceCardId || inferred.cardIds[0],
        targetCardId: inferred.targetCardId || inferred.cardIds[1] || inferred.cardIds[0],
        ...(inferred.layerIds?.length ? { layerIds: inferred.layerIds } : {}),
      };
    });
    if (changed) this._setCurrentConnectorEntries_(next, { reason: null, render });
    return changed;
  },

  _getConnectorVisibleRect_() {
    const container = this.cardContainer;
    const { width, height } = this._getConnectorCanvasSize_();
    if (!container) {
      return { left: 0, top: 0, width, height };
    }
    return {
      left: Math.max(0, Number(container.scrollLeft || 0) || 0),
      top: Math.max(0, Number(container.scrollTop || 0) || 0),
      width: Math.max(1, Math.min(width, Number(container.clientWidth || width) || width)),
      height: Math.max(1, Math.min(height, Number(container.clientHeight || height) || height)),
    };
  },

  _createConnectorAtViewport_({ openSettings = true } = {}) {
    if (!this.editMode) return null;
    const currentTab = this._normalizeTabId(this.activeTab || this.defaultTab);
    const gs = Math.max(1, Number(this._getConnectorGridSize_?.() || 10) || 10);
    const { left, top, width, height } = this._getConnectorVisibleRect_();
    const span = Math.max(gs * 6, Math.min(gs * 16, Math.round((width * 0.26) / gs) * gs || (gs * 8)));
    const centerX = left + (width / 2);
    const centerY = top + (height / 2);
    const start = this._snapConnectorPoint_({ x: centerX - (span / 2), y: centerY });
    const end = this._snapConnectorPoint_({ x: centerX + (span / 2), y: centerY });
    const scope = this._getConnectorScopeForNewConnector_([start, end], { tabId: currentTab });
    const connector = this._normalizeConnectorEntry_({
      ...this._defaultConnectorConfig_(),
      id: `connector_${crypto?.randomUUID?.() || Math.random().toString(36).slice(2)}`,
      tabId: scope.tabId || currentTab,
      ...(scope.cardIds?.length ? {
        cardIds: scope.cardIds,
        sourceCardId: scope.sourceCardId || scope.cardIds[0],
        targetCardId: scope.targetCardId || scope.cardIds[1] || scope.cardIds[0],
      } : {}),
      ...(scope.layerIds?.length ? { layerIds: scope.layerIds } : {}),
      points: [start, end],
    });
    this._connectorDraft = null;
    this._connectorDrawMode = false;
    this._selectedConnectorId = connector.id;
    this._setCurrentConnectorEntries_(
      [...this._getCurrentConnectorEntries_(), connector],
      { reason: 'connector-add', render: true }
    );
    if (openSettings) {
      requestAnimationFrame(() => this._openConnectorSettings_?.(connector.id));
    }
    return connector.id;
  },

  _isConnectorSettingsOpen_() {
    const panel = this.shadowRoot?.querySelector?.('#connectorInspector');
    return !!panel && !panel.hidden && panel.classList.contains('is-open');
  },

  _setConnectorDrawMode_(on, { finalize = true } = {}) {
    const next = !!on;
    if (!next && this._connectorDraft?.points?.length >= 2 && finalize) {
      this._finalizeConnectorDraft_({ openSettings: false });
    } else if (!next) {
      this._cancelConnectorDraft_({ keepMode: true });
    }
    this._connectorDrawMode = next;
    if (!next) this._connectorDraft = null;
    this._syncConnectorUiState_?.();
    this._renderConnectors_?.();
  },

  _toggleConnectorDrawMode_() {
    if (!this.editMode) return;
    this._setConnectorDrawMode_?.(!this._connectorDrawMode, { finalize: true });
  },

  _cancelConnectorDraft_({ keepMode = false } = {}) {
    this._connectorDraft = null;
    if (!keepMode) this._connectorDrawMode = false;
    this._syncConnectorUiState_?.();
    this._renderConnectors_?.();
  },

  _finalizeConnectorDraft_({ openSettings = true } = {}) {
    const draft = this._connectorDraft;
    if (!draft || !Array.isArray(draft.points) || draft.points.length < 2) {
      this._cancelConnectorDraft_();
      return;
    }
    const tabId = this._normalizeTabId(draft.tabId || this.activeTab || this.defaultTab);
    const scope = this._getConnectorScopeForNewConnector_(draft.points, { tabId });
    const connector = this._normalizeConnectorEntry_({
      ...this._defaultConnectorConfig_(),
      ...(draft.settings || {}),
      id: `connector_${crypto?.randomUUID?.() || Math.random().toString(36).slice(2)}`,
      tabId: scope.tabId || tabId,
      ...(scope.cardIds?.length ? {
        cardIds: scope.cardIds,
        sourceCardId: scope.sourceCardId || scope.cardIds[0],
        targetCardId: scope.targetCardId || scope.cardIds[1] || scope.cardIds[0],
      } : {}),
      ...(scope.layerIds?.length ? { layerIds: scope.layerIds } : {}),
      points: draft.points,
    });
    this._selectedConnectorId = connector.id;
    this._connectorDraft = null;
    this._connectorDrawMode = false;
    this._setCurrentConnectorEntries_([
      ...this._getCurrentConnectorEntries_(),
      connector,
    ], { reason: 'connector-add', render: true });
    this._syncConnectorUiState_?.();
    if (openSettings) {
      requestAnimationFrame(() => this._openConnectorSettings_?.(connector.id));
    }
  },

  _syncConnectorUiState_() {
    const btn = this.lineModeBtn;
    this.cardContainer?.classList.toggle('ddc-connector-draw-mode', !!this._connectorDrawMode);
    if (!btn) return;
    const active = !!this._connectorDrawMode;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
    btn.setAttribute('data-tooltip', active ? 'Finish connector' : 'Add connector line');
    btn.setAttribute('title', active ? 'Finish connector' : 'Add connector line');
    const label = btn.querySelector('.label');
    if (label) label.textContent = active ? 'Finish Line' : 'Add Line';
  },

  _startConnectorEndpointReconnect_(connector, side = 'target', wrap, anchor = 'right', ev = null) {
    if (!this.editMode || !connector?.id || !wrap?.dataset?.layoutCardId) return false;
    ev?.preventDefault?.();
    ev?.stopPropagation?.();
  
    const connectorId = String(connector.id || '').trim();
    const movingSide = side === 'source' ? 'source' : 'target';
    const startAnchor = this._normalizeConnectorAnchor_(anchor, 'right');
    const startPoint = this._getCardAnchorPoint_(wrap, startAnchor);
    const startCardId = String(wrap.dataset.layoutCardId || '').trim();
    if (!connectorId || !startPoint || !startCardId) return false;
  
    const tabId = this._normalizeTabId(wrap.dataset.tabId || connector.tabId || connector.tab_id || this.activeTab || this.defaultTab);
    const startAnchorEl = wrap.querySelector?.(`.ddc-card-anchor[data-anchor="${startAnchor}"]`);
    const originalConnector = this._cloneJson_(connector);
    const start = { x: startPoint.x, y: startPoint.y };
    const hitOptions = { tabId };
    let lastPoint = ev ? this._eventToConnectorPoint_(ev) : start;
    let lastHit = null;
    let movedEnough = false;
  
    const restoreOriginal = ({ render = true } = {}) => {
      this._updateCurrentConnectorEntries_((entries) => entries.map((entry) => {
        if (entry.id !== connectorId) return entry;
        return this._cloneJson_(originalConnector);
      }), { reason: null, render });
    };
  
    const cleanup = () => {
      try { window.removeEventListener('pointermove', onMove, true); } catch {}
      try { window.removeEventListener('pointerup', finish, true); } catch {}
      try { window.removeEventListener('pointercancel', cancel, true); } catch {}
      this.cardContainer?.classList?.remove?.('ddc-connector-anchor-dragging');
      startAnchorEl?.classList?.remove?.('is-dragging');
      this._clearConnectorAnchorHover_?.();
    };
  
    const applyMove = (point, hit, { render = true } = {}) => {
      this._applyConnectorEndpointMove_(connectorId, movingSide, point, hit, { reason: null, render });
      this._selectedConnectorId = connectorId;
    };
  
    const onMove = (moveEv) => {
      moveEv.preventDefault?.();
      lastPoint = this._eventToConnectorPoint_(moveEv);
      lastHit = this._getConnectorAnchorHit_(lastPoint, hitOptions);
      this._setConnectorAnchorHover_?.(lastHit);
      const end = lastHit?.point || lastPoint;
      const dx = (end.x - start.x);
      const dy = (end.y - start.y);
      movedEnough = movedEnough || (((dx * dx) + (dy * dy)) > 36);
      if (movedEnough) applyMove(lastPoint, lastHit, { render: true });
    };
  
    const finish = (upEv) => {
      const endProbe = upEv ? this._eventToConnectorPoint_(upEv) : lastPoint;
      const hit = this._getConnectorAnchorHit_(endProbe, hitOptions) || lastHit;
      const end = hit?.point || endProbe || lastPoint;
      const dx = (end.x - start.x);
      const dy = (end.y - start.y);
      movedEnough = movedEnough || (((dx * dx) + (dy * dy)) > 36);
      cleanup();
  
      this._selectedConnectorId = connectorId;
      if (!movedEnough) {
        restoreOriginal({ render: true });
        return;
      }
  
      applyMove(endProbe, hit, { render: false });
      this._queueSave?.('connector-anchor-change');
      this._renderConnectors_?.();
      requestAnimationFrame(() => this._openConnectorSettings_?.(connectorId));
    };
  
    const cancel = () => {
      cleanup();
      this._selectedConnectorId = connectorId;
      restoreOriginal({ render: true });
    };
  
    this._ensureConnectorsLayer_?.();
    this._closeConnectorSettings_?.();
    this._connectorDrawMode = false;
    this._connectorDraft = null;
    this._selectedConnectorId = connectorId;
    this.cardContainer?.classList?.add?.('ddc-connector-anchor-dragging');
    startAnchorEl?.classList?.add?.('is-dragging');
    this._syncConnectorUiState_?.();
    this._renderConnectors_?.();
  
    try { window.addEventListener('pointermove', onMove, true); } catch {}
    try { window.addEventListener('pointerup', finish, true); } catch {}
    try { window.addEventListener('pointercancel', cancel, true); } catch {}
    return true;
  },

  _startConnectorAnchorDrag_(wrap, anchor = 'right', ev = null) {
    if (!this.editMode || !wrap?.dataset?.layoutCardId) return;
    ev?.preventDefault?.();
    ev?.stopPropagation?.();
    const sourceAnchor = this._normalizeConnectorAnchor_(anchor, 'right');
    const sourcePoint = this._getCardAnchorPoint_(wrap, sourceAnchor);
    if (!sourcePoint) return;
    const sourceCardId = String(wrap.dataset.layoutCardId || '').trim();
    const tabId = this._normalizeTabId(wrap.dataset.tabId || this.activeTab || this.defaultTab);
    const sourceAnchorEl = wrap.querySelector?.(`.ddc-card-anchor[data-anchor="${sourceAnchor}"]`);
    const start = { x: sourcePoint.x, y: sourcePoint.y };
    const existingEndpoint = this._findConnectorEndpointAtAnchor_(sourceCardId, sourceAnchor, { tabId });
    if (existingEndpoint?.connector?.id) {
      this._startConnectorEndpointReconnect_(existingEndpoint.connector, existingEndpoint.side, wrap, sourceAnchor, ev);
      return;
    }
    const defaults = this._defaultConnectorConfig_();
    const hitOptions = {
      tabId,
      exclude: { cardId: sourceCardId, anchor: sourceAnchor, allowSameCard: true },
    };
    let lastPoint = ev ? this._eventToConnectorPoint_(ev) : start;
    let lastHit = null;
  
    this._ensureConnectorsLayer_?.();
    this._closeConnectorSettings_?.();
    this._selectedConnectorId = null;
    this._connectorDrawMode = false;
    this.cardContainer?.classList?.add?.('ddc-connector-anchor-dragging');
    sourceAnchorEl?.classList?.add?.('is-dragging');
  
    const updateDraft = (point, hit = null) => {
      const end = hit?.point || point || start;
      const settings = {
        ...defaults,
        sourceCardId,
        sourceAnchor,
        cardIds: hit?.cardId ? [sourceCardId, hit.cardId] : [sourceCardId],
        ...(hit?.cardId ? {
          targetCardId: hit.cardId,
          targetAnchor: hit.anchor,
          auto_route: true,
        } : {
          auto_route: false,
        }),
      };
      this._connectorDraft = {
        tabId,
        points: [start],
        cursor: { x: end.x, y: end.y },
        settings,
      };
      this._setConnectorAnchorHover_?.(hit);
      this._renderConnectors_?.();
    };
  
    const onMove = (moveEv) => {
      moveEv.preventDefault?.();
      lastPoint = this._eventToConnectorPoint_(moveEv);
      lastHit = this._getConnectorAnchorHit_(lastPoint, hitOptions);
      updateDraft(lastPoint, lastHit);
    };
  
    const finish = (upEv) => {
      try { window.removeEventListener('pointermove', onMove, true); } catch {}
      try { window.removeEventListener('pointerup', finish, true); } catch {}
      try { window.removeEventListener('pointercancel', cancel, true); } catch {}
      this.cardContainer?.classList?.remove?.('ddc-connector-anchor-dragging');
      sourceAnchorEl?.classList?.remove?.('is-dragging');
  
      const endProbe = upEv ? this._eventToConnectorPoint_(upEv) : lastPoint;
      const hit = this._getConnectorAnchorHit_(endProbe, hitOptions) || lastHit;
      const end = hit?.point || endProbe || lastPoint;
      const dx = (end.x - start.x);
      const dy = (end.y - start.y);
      const movedEnough = ((dx * dx) + (dy * dy)) > 36;
  
      this._clearConnectorAnchorHover_?.();
      this._connectorDraft = null;
      if (!movedEnough) {
        this._renderConnectors_?.();
        return;
      }
  
      const connector = this._normalizeConnectorEntry_({
        ...defaults,
        id: `connector_${crypto?.randomUUID?.() || Math.random().toString(36).slice(2)}`,
        tabId,
        points: [start, { x: end.x, y: end.y }],
        cardIds: hit?.cardId ? [sourceCardId, hit.cardId] : [sourceCardId],
        sourceCardId,
        sourceAnchor,
        ...(hit?.cardId ? {
          targetCardId: hit.cardId,
          targetAnchor: hit.anchor,
          auto_route: true,
        } : {
          auto_route: false,
        }),
      });
      this._selectedConnectorId = connector.id;
      this._setCurrentConnectorEntries_([
        ...this._getCurrentConnectorEntries_(),
        connector,
      ], { reason: 'connector-add', render: true });
      requestAnimationFrame(() => this._openConnectorSettings_?.(connector.id));
    };
  
    const cancel = () => {
      try { window.removeEventListener('pointermove', onMove, true); } catch {}
      try { window.removeEventListener('pointerup', finish, true); } catch {}
      try { window.removeEventListener('pointercancel', cancel, true); } catch {}
      this.cardContainer?.classList?.remove?.('ddc-connector-anchor-dragging');
      sourceAnchorEl?.classList?.remove?.('is-dragging');
      this._clearConnectorAnchorHover_?.();
      this._connectorDraft = null;
      this._renderConnectors_?.();
    };
  
    updateDraft(lastPoint, null);
    try { window.addEventListener('pointermove', onMove, true); } catch {}
    try { window.addEventListener('pointerup', finish, true); } catch {}
    try { window.addEventListener('pointercancel', cancel, true); } catch {}
  },

  _openConnectorSettings_(connectorId) {
    const connector = this._getCurrentConnectorEntries_().find((entry) => entry.id === connectorId);
    if (!connector) return;
    const panel = this.shadowRoot?.querySelector?.('#connectorInspector');
    if (!panel) return;
    try { this.__connectorInspectorCleanup?.(); } catch {}
    this.__connectorInspectorCleanup = null;
    const resolved = this._getConnectorResolvedState_?.(connector) || { active: true, animate: false };
    const lineStyle = String(connector.line_style || 'solid').toLowerCase();
    const animationStyle = this._normalizeConnectorAnimationStyle_(connector.animation_style ?? connector.animationStyle ?? this._defaultConnectorConfig_().animation_style);
    const animationStyleLabel = ({
      flow: 'flow',
      pulse: 'pulse',
      particles: 'particles',
      arrows: 'flowing arrows',
      'pulse-arrows': 'pulse + arrows',
    })[animationStyle] || 'flow';
    const previewColor = String(
      (resolved.active ? connector.active_color : connector.inactive_color)
      || (resolved.active ? 'var(--primary-color, #ff9800)' : 'rgba(148,163,184,.48)')
    ).trim();
    const previewFill = (() => {
      if (lineStyle === 'dotted') {
        return `repeating-linear-gradient(90deg, ${previewColor} 0 8px, transparent 8px 20px)`;
      }
      if (lineStyle === 'dashed') {
        return `repeating-linear-gradient(90deg, ${previewColor} 0 26px, transparent 26px 40px)`;
      }
      return previewColor;
    })();
    const arrowSize = Math.max(6, Math.min(56, Number(connector.arrow_size ?? connector.arrowSize) || this._defaultConnectorConfig_().arrow_size));
    const previewSummary = connector.entity
      ? `${resolved.active ? 'Currently active' : 'Currently idle'} · ${resolved.animate ? 'animated' : 'static'}`
      : `Manual connector · ${resolved.animate ? 'animated' : 'static'}`;
    const pointCount = Array.isArray(connector.points) ? connector.points.length : 0;
    const connectorZ = this._getConnectorZ_(connector);
    const entityOptions = Object.keys(this.hass?.states || {})
      .sort((a, b) => a.localeCompare(b));
    const buildEntityOptionMarkup = () => entityOptions
      .map((entityId) => `<option value="${this._safe(entityId)}"></option>`)
      .join('');
    const getConnectorStateSuggestions = (entityId = '') => {
      const safeEntityId = String(entityId || '').trim();
      const entity = safeEntityId ? this.hass?.states?.[safeEntityId] : null;
      if (!entity) return [];
      const suggestions = [];
      const seen = new Set();
      const add = (value) => {
        const token = String(value ?? '').trim();
        if (!token) return;
        const key = token.toLowerCase();
        if (seen.has(key)) return;
        seen.add(key);
        suggestions.push(token);
      };
      const domain = String((safeEntityId.split('.')[0] || '')).toLowerCase();
      const stateValue = String(entity.state ?? '').trim();
      const loweredState = stateValue.toLowerCase();
      if (stateValue && !['unknown', 'unavailable', 'none', 'null'].includes(loweredState)) add(stateValue);
      if (Array.isArray(entity.attributes?.options)) {
        entity.attributes.options.forEach(add);
      }
      switch (domain) {
        case 'binary_sensor':
        case 'input_boolean':
        case 'switch':
        case 'light':
        case 'fan':
        case 'automation':
        case 'script':
          ['on', 'off'].forEach(add);
          break;
        case 'lock':
          ['locked', 'unlocking', 'unlocked', 'locking', 'jammed'].forEach(add);
          break;
        case 'cover':
          ['open', 'opening', 'closed', 'closing'].forEach(add);
          break;
        case 'person':
        case 'device_tracker':
          ['home', 'not_home'].forEach(add);
          break;
        case 'media_player':
          ['playing', 'paused', 'idle', 'off', 'standby', 'buffering'].forEach(add);
          break;
        case 'alarm_control_panel':
          ['disarmed', 'armed_home', 'armed_away', 'armed_night', 'armed_vacation', 'triggered'].forEach(add);
          break;
        case 'climate':
          ['off', 'heat', 'cool', 'heat_cool', 'auto', 'dry', 'fan_only'].forEach(add);
          break;
        case 'sun':
          ['above_horizon', 'below_horizon'].forEach(add);
          break;
        default:
          break;
      }
      const numericState = Number(stateValue);
      if (Number.isFinite(numericState)) {
        ['>0', '=0', '<0', '!=0'].forEach(add);
      }
      return suggestions.slice(0, 18);
    };
    const describeConnectorEntity = (entityId = '') => {
      const safeEntityId = String(entityId || '').trim();
      const entity = safeEntityId ? this.hass?.states?.[safeEntityId] : null;
      if (!safeEntityId) {
        return {
          entityText: 'Browse Home Assistant entities and bind this connector to one of them.',
          stateText: 'Pick an entity to get smart state suggestions from Home Assistant.',
        };
      }
      if (!entity) {
        return {
          entityText: 'Entity not found in Home Assistant right now.',
          stateText: 'You can still type custom state rules manually, for example on, open, or >0.',
        };
      }
      const domain = String((safeEntityId.split('.')[0] || '')).replace(/_/g, ' ');
      const stateValue = String(entity.state ?? '').trim() || 'unknown';
      const unit = String(entity.attributes?.unit_of_measurement || '').trim();
      const optionCount = Array.isArray(entity.attributes?.options) ? entity.attributes.options.length : 0;
      return {
        entityText: `${domain.charAt(0).toUpperCase()}${domain.slice(1)} entity${optionCount ? ` • ${optionCount} option${optionCount === 1 ? '' : 's'}` : ''}`,
        stateText: `Current state: ${stateValue}${unit ? ` ${unit}` : ''}. Use suggestions below or type custom rules like >0.`,
      };
    };
    const toggleConnectorStateToken = (value, token) => {
      const safeToken = String(token || '').trim();
      const tokens = (__ddcLineSplitTokens__(value) || []).map((entry) => String(entry || '').trim()).filter(Boolean);
      const existingIndex = tokens.findIndex((entry) => entry.toLowerCase() === safeToken.toLowerCase());
      if (existingIndex >= 0) {
        tokens.splice(existingIndex, 1);
      } else {
        tokens.push(safeToken);
      }
      return tokens.join(',');
    };
    this.__connectorSettingsModal = panel;
    this.__connectorInspectorId = connectorId;
    panel.hidden = false;
    panel.classList.add('is-open');
    panel.innerHTML = `
      <div class="ddc-connector-inspector-card">
        <div class="ddc-connector-inspector-head">
          <div>
            <div class="ddc-connector-inspector-kicker">Line editor</div>
            <h3>Connector</h3>
            <p>${this._safe(previewSummary)}</p>
          </div>
          <button class="icon-btn ddc-connector-close" id="connectorCloseBtn" type="button" title="Close">
            <ha-icon icon="mdi:close"></ha-icon>
          </button>
        </div>
        <div class="ddc-connector-preview">
          <div class="ddc-connector-preview-line">
            <span
              class="ddc-connector-preview-stroke is-style-${animationStyle}${connector.glow !== false ? ' is-glow' : ''}${resolved.animate ? ' is-animated' : ''}"
              style="height:${Math.max(4, Number(connector.thickness || 10))}px;color:${this._safe(previewColor)};background:${this._safe(previewFill)};"
            ></span>
          </div>
          <div class="ddc-connector-preview-copy">
            <strong>${this._safe(previewSummary)}</strong>
            <span>${pointCount} point${pointCount === 1 ? '' : 's'} · z ${connectorZ} · ${this._safe(animationStyleLabel)} · ${this._safe(String(connector.arrows || 'end'))} arrow${String(connector.arrows || 'end') === 'both' ? 's' : ''} · ${Math.round(arrowSize)}px</span>
          </div>
        </div>
  
        <div class="ddc-connector-tabs" role="tablist" aria-label="Connector settings">
          <button class="ddc-connector-tab is-active" type="button" role="tab" aria-selected="true" data-connector-tab="behavior">
            <ha-icon icon="mdi:tune-variant"></ha-icon><span>Behavior</span>
          </button>
          <button class="ddc-connector-tab" type="button" role="tab" aria-selected="false" data-connector-tab="appearance">
            <ha-icon icon="mdi:palette-outline"></ha-icon><span>Appearance</span>
          </button>
          <button class="ddc-connector-tab" type="button" role="tab" aria-selected="false" data-connector-tab="shape">
            <ha-icon icon="mdi:vector-polyline-edit"></ha-icon><span>Shape</span>
          </button>
        </div>
  
        <section class="ddc-connector-section is-active" data-connector-panel="behavior">
          <div class="ddc-connector-section-head">
            <div class="ddc-connector-section-title">Behavior</div>
            <p>Drive line activity from Home Assistant state and control flow direction.</p>
          </div>
          <datalist id="connectorEntityList">${buildEntityOptionMarkup()}</datalist>
          <datalist id="connectorStateList"></datalist>
          <div class="ddc-connector-inspector-grid">
            <div class="ddc-connector-field full">
              <span>Entity</span>
              <div class="ddc-connector-entity-host" id="connectorEntityHost"></div>
              <div class="ddc-connector-entity-meta" id="connectorEntityMeta"></div>
            </div>
            <label class="ddc-connector-field full">
              <span>Active states</span>
              <input id="connectorStates" class="input" type="text" list="connectorStateList" value="${this._safe(connector.active_states || '')}" placeholder="on,>0,charging" />
              <div class="ddc-connector-inline-actions">
                <select id="connectorStateQuickPick" class="input ddc-connector-state-picker">
                  <option value="">Choose state from selected entity…</option>
                </select>
                <button class="btn secondary compact" id="connectorStateClearBtn" type="button">
                  <ha-icon icon="mdi:close-circle-outline"></ha-icon><span>Clear</span>
                </button>
              </div>
              <div class="ddc-connector-state-meta" id="connectorStateMeta"></div>
              <div class="ddc-connector-state-suggestions" id="connectorStateSuggestions"></div>
            </label>
            <label class="ddc-connector-field">
              <span>Arrows</span>
              <select id="connectorArrows" class="input">
                <option value="none">None</option>
                <option value="start">Start</option>
                <option value="end">End</option>
                <option value="both">Both</option>
              </select>
            </label>
            <label class="ddc-connector-field">
              <span>Flow direction</span>
              <select id="connectorFlowDirection" class="input">
                <option value="auto">Auto</option>
                <option value="forward">Forward</option>
                <option value="reverse">Reverse</option>
              </select>
            </label>
            <label class="ddc-connector-field">
              <span>Animate</span>
              <select id="connectorAnimateMode" class="input">
                <option value="never">Never</option>
                <option value="active">When active</option>
                <option value="always">Always</option>
              </select>
            </label>
            <label class="ddc-connector-field">
              <span>Animation style</span>
              <select id="connectorAnimationStyle" class="input">
                <option value="flow">Flow</option>
                <option value="pulse">Pulse</option>
                <option value="particles">Particles</option>
                <option value="arrows">Flowing arrows</option>
                <option value="pulse-arrows">Pulse + arrows</option>
              </select>
            </label>
            <label class="ddc-connector-field">
              <span>Animation speed</span>
              <input id="connectorSpeed" class="input" type="number" min="0" max="8" step="0.1" value="${Number(connector.animation_speed ?? this._defaultConnectorConfig_().animation_speed)}" />
            </label>
          </div>
        </section>
  
        <section class="ddc-connector-section" data-connector-panel="appearance" hidden>
          <div class="ddc-connector-section-head">
            <div class="ddc-connector-section-title">Appearance</div>
            <p>Match the connector to the dashboard style and make active states easier to read.</p>
          </div>
          <div class="ddc-connector-inspector-grid">
            <label class="ddc-connector-field">
              <span>Line style</span>
              <select id="connectorLineStyle" class="input">
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
              </select>
            </label>
            <label class="ddc-connector-field">
              <span>Thickness</span>
              <input id="connectorThickness" class="input" type="number" min="2" max="28" step="1" value="${Number(connector.thickness || 10)}" />
            </label>
            <label class="ddc-connector-field">
              <span>Arrow size</span>
              <input id="connectorArrowSize" class="input" type="number" min="6" max="56" step="1" value="${Math.round(arrowSize)}" />
            </label>
            <label class="ddc-connector-field">
              <span>Active color</span>
              <input id="connectorActiveColor" class="input" type="text" value="${this._safe(connector.active_color || '')}" />
            </label>
            <label class="ddc-connector-field">
              <span>Inactive color</span>
              <input id="connectorInactiveColor" class="input" type="text" value="${this._safe(connector.inactive_color || '')}" />
            </label>
          </div>
          <div class="ddc-connector-toggles">
            <label class="ddc-toggle-row">
              <input id="connectorGlow" type="checkbox" ${connector.glow !== false ? 'checked' : ''} />
              <span>Glow</span>
            </label>
            <label class="ddc-toggle-row">
              <input id="connectorRounded" type="checkbox" ${connector.rounded !== false ? 'checked' : ''} />
              <span>Rounded corners</span>
            </label>
          </div>
        </section>
  
        <section class="ddc-connector-section" data-connector-panel="shape" hidden>
          <div class="ddc-connector-section-head">
            <div class="ddc-connector-section-title">Shape</div>
            <p>Auto-routed lines stay clean. Add a bend only when you want manual control.</p>
          </div>
          <div class="ddc-connector-actions">
            <button class="btn secondary" id="connectorAddBendBtn" type="button">
              <ha-icon icon="mdi:vector-polyline-edit"></ha-icon><span>Add bend</span>
            </button>
          </div>
          <div class="ddc-connector-layer-order">
            <div class="ddc-connector-section-title">Layer order</div>
            <div class="ddc-connector-z-actions" role="group" aria-label="Line layer order">
              <button class="btn secondary compact" id="connectorSendBackwardBtn" type="button" title="Send backward">
                <ha-icon icon="mdi:arrange-send-backward"></ha-icon><span>Back</span>
              </button>
              <button class="btn secondary compact" id="connectorBringForwardBtn" type="button" title="Bring forward">
                <ha-icon icon="mdi:arrange-bring-forward"></ha-icon><span>Forward</span>
              </button>
              <button class="btn secondary compact" id="connectorSendToBackBtn" type="button" title="Send to back">
                <ha-icon icon="mdi:arrange-send-to-back"></ha-icon><span>To back</span>
              </button>
              <button class="btn secondary compact" id="connectorBringToFrontBtn" type="button" title="Bring to front">
                <ha-icon icon="mdi:arrange-bring-to-front"></ha-icon><span>To front</span>
              </button>
            </div>
            <label class="ddc-connector-field">
              <span>Z-index</span>
              <input id="connectorZIndex" class="input" type="number" min="1" max="9999" step="1" value="${connectorZ}" />
            </label>
          </div>
          <p class="ddc-connector-help">Corner handles are always shown for selected routed lines. Layer order controls how lines stack against other lines.</p>
        </section>
  
        <div class="ddc-connector-footer-actions">
          <button class="btn danger" id="connectorDeleteBtn" type="button">
            <ha-icon icon="mdi:trash-can-outline"></ha-icon><span>Delete line</span>
          </button>
        </div>
      </div>`;
  
    const $ = (sel) => panel.querySelector(sel);
    $('#connectorArrows').value = String(connector.arrows || 'end');
    $('#connectorFlowDirection').value = String(connector.flow_direction || 'auto');
    $('#connectorLineStyle').value = String(connector.line_style || 'solid');
    $('#connectorAnimateMode').value = String(connector.animate_mode || 'active');
    $('#connectorAnimationStyle').value = animationStyle;
    const setConnectorTab = (tabName = 'behavior') => {
      const activeTab = ['behavior', 'appearance', 'shape'].includes(tabName) ? tabName : 'behavior';
      panel.querySelectorAll('[data-connector-tab]').forEach((btn) => {
        const active = btn.dataset.connectorTab === activeTab;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', String(active));
      });
      panel.querySelectorAll('[data-connector-panel]').forEach((section) => {
        const active = section.dataset.connectorPanel === activeTab;
        section.hidden = !active;
        section.classList.toggle('is-active', active);
      });
    };
    panel.querySelectorAll('[data-connector-tab]').forEach((btn) => {
      btn.addEventListener('click', () => setConnectorTab(btn.dataset.connectorTab || 'behavior'));
    });
    const entityHost = $('#connectorEntityHost');
    const entityMeta = $('#connectorEntityMeta');
    const statesInput = $('#connectorStates');
    const stateMeta = $('#connectorStateMeta');
    const stateSuggestions = $('#connectorStateSuggestions');
    const stateList = $('#connectorStateList');
    const stateQuickPick = $('#connectorStateQuickPick');
    let entityInput = null;
    let currentConnector = this._getConnectorById_(connectorId) || connector;
    panel.dataset.connectorId = connectorId;
  
    const patchConnector = (patch, reason = 'connector-update') => {
      this._updateCurrentConnectorEntries_((entries) => entries.map((entry) => {
        if (entry.id !== connectorId) return entry;
        const nextPatch = typeof patch === 'function' ? patch(entry) : patch;
        return { ...entry, ...nextPatch };
      }), { reason, render: true });
      currentConnector = this._getConnectorById_(connectorId) || currentConnector;
      this._selectedConnectorId = connectorId;
    };
    const readEntityValue = () => {
      if (!entityInput) return '';
      return String(entityInput.value || entityInput.getAttribute?.('value') || '').trim();
    };
    const renderConnectorStateHelpers = (entityId = readEntityValue()) => {
      const info = describeConnectorEntity(entityId);
      if (entityMeta) entityMeta.textContent = info.entityText;
      if (stateMeta) stateMeta.textContent = info.stateText;
      const suggestions = getConnectorStateSuggestions(entityId);
      const activeTokens = (__ddcLineSplitTokens__(statesInput?.value || '') || [])
        .map((entry) => String(entry || '').trim())
        .filter(Boolean);
      const activeTokenSet = new Set(activeTokens.map((entry) => entry.toLowerCase()));
      if (stateList) {
        stateList.innerHTML = suggestions
          .map((token) => `<option value="${this._safe(token)}"></option>`)
          .join('');
      }
      if (stateQuickPick) {
        const selectedToken = suggestions.find((token) => activeTokenSet.has(String(token).toLowerCase())) || '';
        stateQuickPick.innerHTML = [
          '<option value="">Animate when state is…</option>',
          ...suggestions.map((token) => `<option value="${this._safe(token)}">${this._safe(token)}</option>`)
        ].join('');
        stateQuickPick.disabled = !suggestions.length;
        stateQuickPick.value = selectedToken;
      }
      if (!stateSuggestions || !statesInput) return;
      stateSuggestions.innerHTML = suggestions.length
        ? suggestions.map((token) => {
            const active = activeTokenSet.has(String(token).toLowerCase());
            return `<button type="button" class="ddc-connector-state-chip${active ? ' is-active' : ''}" data-token="${this._safe(token)}">${this._safe(token)}</button>`;
          }).join('')
        : `<div class="ddc-connector-state-empty">No obvious state choices found for this entity yet.</div>`;
      stateSuggestions.querySelectorAll('.ddc-connector-state-chip').forEach((btn) => {
        btn.addEventListener('click', () => {
          const token = btn.dataset.token || '';
          const nextValue = toggleConnectorStateToken(statesInput.value || '', token);
          statesInput.value = nextValue;
          patchConnector({ active_states: nextValue || '' });
          renderConnectorStateHelpers(entityId);
        });
      });
    };
  
    const mountConnectorEntityInput = () => {
      if (!entityHost) return;
      entityHost.innerHTML = '';
      if (customElements.get('ha-entity-picker')) {
        const picker = document.createElement('ha-entity-picker');
        picker.hass = this.hass;
        picker.value = String(currentConnector.entity || '');
        picker.setAttribute('label', 'Choose entity');
        picker.removeAttribute('hide-clear-icon');
        entityInput = picker;
        entityHost.appendChild(picker);
        picker.addEventListener('value-changed', (ev) => {
          ev.stopPropagation();
          const nextValue = String(ev.detail?.value || ev.detail || ev.target?.value || '').trim();
          patchConnector({ entity: nextValue || '' });
          renderConnectorStateHelpers(nextValue);
        });
        return;
      }
  
      const input = document.createElement('input');
      input.id = 'connectorEntity';
      input.className = 'input';
      input.type = 'text';
      input.value = String(currentConnector.entity || '');
      input.placeholder = 'sensor.example_power';
      input.setAttribute('list', 'connectorEntityList');
      entityInput = input;
      entityHost.appendChild(input);
      input.addEventListener('input', (ev) => {
        const nextValue = String(ev.target?.value || '').trim();
        patchConnector({ entity: nextValue || '' });
        renderConnectorStateHelpers(nextValue);
      });
    };
    mountConnectorEntityInput();
    if (!customElements.get('ha-entity-picker')) {
      customElements.whenDefined('ha-entity-picker').then(() => {
        if (!panel.isConnected || panel.dataset.connectorId !== connectorId) return;
        currentConnector = this._getConnectorById_(connectorId) || currentConnector;
        mountConnectorEntityInput();
        renderConnectorStateHelpers(String(currentConnector.entity || '').trim());
      }).catch(() => {});
    }
    const applyConnectorFieldChange = (target, eventType = 'input') => {
      if (!target || !target.id) return false;
      switch (target.id) {
        case 'connectorStates':
          patchConnector({ active_states: target.value || '' });
          renderConnectorStateHelpers();
          return true;
        case 'connectorArrows':
          patchConnector({ arrows: target.value || 'end' });
          return true;
        case 'connectorFlowDirection':
          patchConnector({ flow_direction: target.value || 'auto' });
          return true;
        case 'connectorLineStyle':
          patchConnector({ line_style: target.value || 'solid' });
          return true;
        case 'connectorAnimateMode':
          patchConnector({ animate_mode: target.value || 'active' });
          return true;
        case 'connectorAnimationStyle':
          patchConnector({ animation_style: this._normalizeConnectorAnimationStyle_(target.value) });
          return true;
        case 'connectorThickness':
          patchConnector({ thickness: Number(target.value) || currentConnector.thickness });
          return true;
        case 'connectorArrowSize':
          patchConnector({ arrow_size: Number(target.value) || currentConnector.arrow_size || this._defaultConnectorConfig_().arrow_size });
          return true;
        case 'connectorSpeed':
          {
            const speed = Number(target.value);
            patchConnector({ animation_speed: Number.isFinite(speed) ? Math.max(0, Math.min(8, speed)) : currentConnector.animation_speed });
          }
          return true;
        case 'connectorZIndex':
          {
            const z = Math.round(Number(target.value));
            if (!Number.isFinite(z)) return false;
            patchConnector({ z: Math.max(1, Math.min(9999, z)) }, 'connector-z-change');
          }
          return true;
        case 'connectorActiveColor':
          patchConnector({ active_color: target.value || currentConnector.active_color });
          return true;
        case 'connectorInactiveColor':
          patchConnector({ inactive_color: target.value || currentConnector.inactive_color });
          return true;
        case 'connectorStateQuickPick':
          if (eventType !== 'change' || !target.value) return false;
          {
            const token = String(target.value || '').trim();
            if (statesInput) statesInput.value = token;
            patchConnector({ active_states: token });
            renderConnectorStateHelpers();
          }
          return true;
        case 'connectorGlow':
          if (eventType !== 'change') return false;
          patchConnector({ glow: !!target.checked });
          return true;
        case 'connectorRounded':
          if (eventType !== 'change') return false;
          patchConnector({ rounded: !!target.checked });
          return true;
        default:
          return false;
      }
    };
  
    const delegatedConnectorInputHandler = (ev) => {
      if (!ev.target || !panel.contains(ev.target)) return;
      applyConnectorFieldChange(ev.target, 'input');
    };
    const delegatedConnectorChangeHandler = (ev) => {
      if (!ev.target || !panel.contains(ev.target)) return;
      applyConnectorFieldChange(ev.target, 'change');
    };
  
    panel.addEventListener('input', delegatedConnectorInputHandler);
    panel.addEventListener('change', delegatedConnectorChangeHandler);
    this.__connectorInspectorCleanup = () => {
      try { panel.removeEventListener('input', delegatedConnectorInputHandler); } catch {}
      try { panel.removeEventListener('change', delegatedConnectorChangeHandler); } catch {}
    };
  
    try {
      renderConnectorStateHelpers(String(currentConnector.entity || '').trim());
    } catch (err) {
      console.warn('[ddc] Failed to render connector entity/state helpers', err);
    }
  
    $('#connectorCloseBtn')?.addEventListener('click', () => this._closeConnectorSettings_?.());
    $('#connectorStateClearBtn')?.addEventListener('click', () => {
      if (statesInput) statesInput.value = '';
      patchConnector({ active_states: '' });
      renderConnectorStateHelpers();
    });
    $('#connectorDeleteBtn')?.addEventListener('click', () => {
      this._setCurrentConnectorEntries_(
        this._getCurrentConnectorEntries_().filter((entry) => entry.id !== connectorId),
        { reason: 'connector-delete', render: true }
      );
      this._selectedConnectorId = null;
      this._closeConnectorSettings_?.();
    });
    $('#connectorAddBendBtn')?.addEventListener('click', () => {
      this._insertConnectorMidpoint_?.(connectorId);
      this._selectedConnectorId = connectorId;
      this._renderConnectors_?.();
      requestAnimationFrame(() => this._openConnectorSettings_?.(connectorId));
    });
    const syncConnectorZInput = () => {
      currentConnector = this._getConnectorById_(connectorId) || currentConnector;
      const zInput = $('#connectorZIndex');
      if (zInput) zInput.value = String(this._getConnectorZ_(currentConnector));
    };
    $('#connectorSendBackwardBtn')?.addEventListener('click', () => {
      this._adjustConnectorZ_?.(connectorId, -1);
      syncConnectorZInput();
    });
    $('#connectorBringForwardBtn')?.addEventListener('click', () => {
      this._adjustConnectorZ_?.(connectorId, 1);
      syncConnectorZInput();
    });
    $('#connectorSendToBackBtn')?.addEventListener('click', () => {
      this._moveConnectorZ_?.(connectorId, 'back');
      syncConnectorZInput();
    });
    $('#connectorBringToFrontBtn')?.addEventListener('click', () => {
      this._moveConnectorZ_?.(connectorId, 'front');
      syncConnectorZInput();
    });
  },

  _closeConnectorSettings_() {
    const panel = this.shadowRoot?.querySelector?.('#connectorInspector');
    if (panel) {
      panel.hidden = true;
      panel.classList.remove('is-open');
      panel.innerHTML = '';
    }
    try { this.__connectorInspectorCleanup?.(); } catch {}
    this.__connectorInspectorCleanup = null;
    this.__connectorSettingsModal = null;
    this.__connectorInspectorId = null;
  },

  _renderConnectors_() {
    const layer = this._ensureConnectorsLayer_();
    if (!layer) return;
    const { width, height } = this._getConnectorCanvasSize_();
    this._sizeConnectorsLayer_(layer, width, height);
    layer.innerHTML = '';
  
    const svgNs = 'http://www.w3.org/2000/svg';
    const createConnectorSurface = (className = 'ddc-connector-surface', z = 5) => {
      const surface = document.createElementNS(svgNs, 'svg');
      surface.setAttribute('class', className);
      this._sizeConnectorsLayer_(surface, width, height);
      const safeZ = Math.max(1, Math.min(100000, Math.round(Number(z) || 1)));
      surface.style.zIndex = String(safeZ);
      return surface;
    };
  
    const currentTab = this._normalizeTabId(this.activeTab || this.defaultTab);
    this._ensureConnectorScopesForCurrentLayout_?.({ render: false });
    const connectors = (this._getCurrentConnectorEntries_() || [])
      .map((entry, index) => ({ entry, index }))
      .filter(({ entry }) => this._connectorMatchesCurrentContext_(entry, currentTab))
      .sort((a, b) => {
        const za = this._getConnectorZ_(a.entry);
        const zb = this._getConnectorZ_(b.entry);
        return za === zb ? a.index - b.index : za - zb;
      })
      .map(({ entry }) => entry);
    if (this._selectedConnectorId && !connectors.some((entry) => entry.id === this._selectedConnectorId)) {
      this._selectedConnectorId = null;
      this._closeConnectorSettings_?.();
    }
  
    if (this.editMode && this._connectorDrawMode) {
      const captureSurface = createConnectorSurface('ddc-connector-capture-surface', 100000);
      const capture = document.createElementNS(svgNs, 'rect');
      capture.setAttribute('x', '0');
      capture.setAttribute('y', '0');
      capture.setAttribute('width', String(width));
      capture.setAttribute('height', String(height));
      capture.setAttribute('class', 'ddc-connector-capture');
      capture.addEventListener('pointermove', (ev) => {
        if (!this._connectorDrawMode) return;
        if (!this._connectorDraft?.points?.length) return;
        this._connectorDraft.cursor = this._snapConnectorPointToCellOrigin_(this._eventToConnectorPoint_(ev));
        this._renderConnectors_();
      });
      capture.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        const point = this._snapConnectorPointToCellOrigin_(this._eventToConnectorPoint_(ev));
        const finishOnThisClick = Number(ev.detail || 0) >= 2;
        if (!this._connectorDraft?.points?.length) {
          this._connectorDraft = {
            tabId: currentTab,
            points: [point],
            cursor: point,
            settings: this._defaultConnectorConfig_(),
          };
        } else {
          const points = [...this._connectorDraft.points];
          const last = points[points.length - 1];
          if (!last || last.x !== point.x || last.y !== point.y) points.push(point);
          this._connectorDraft = { ...this._connectorDraft, points, cursor: point };
        }
        if (finishOnThisClick && this._connectorDraft?.points?.length >= 2) {
          this._finalizeConnectorDraft_({ openSettings: true });
          return;
        }
        this._renderConnectors_();
      });
      capture.addEventListener('dblclick', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (this._connectorDraft?.points?.length >= 2) {
          this._finalizeConnectorDraft_({ openSettings: true });
        }
      });
      captureSurface.appendChild(capture);
      layer.appendChild(captureSurface);
    }
  
    const renderConnector = (connector, { draft = false } = {}) => {
      const points = this._getConnectorRenderPoints_(connector, { draft });
      if (points.length < 2) return;
      const sourceAnchor = this._normalizeConnectorAnchor_(connector.sourceAnchor || connector.source_anchor || '', '');
      const targetAnchor = this._normalizeConnectorAnchor_(connector.targetAnchor || connector.target_anchor || '', '');
      const hasAnchors = !!(sourceAnchor || targetAnchor);
      const autoRoute = this._isConnectorAutoRoute_(connector);
      const state = draft
        ? { active: true, reverse: false, animate: true }
        : this._getConnectorResolvedState_(connector);
      const color = state.active ? String(connector.active_color || this._defaultConnectorConfig_().active_color) : String(connector.inactive_color || this._defaultConnectorConfig_().inactive_color);
      const thickness = Math.max(2, Math.min(28, Number(connector.thickness) || 10));
      const rounded = connector.rounded !== false;
      const lineStyle = String(connector.line_style || '').toLowerCase();
      const arrows = String(connector.arrows || 'end').toLowerCase();
      const arrowSize = Math.max(6, Math.min(56, Number(connector.arrow_size ?? connector.arrowSize) || this._defaultConnectorConfig_().arrow_size));
      const animationStyle = this._normalizeConnectorAnimationStyle_(connector.animation_style ?? connector.animationStyle ?? this._defaultConnectorConfig_().animation_style);
      const hideBaseStroke = state.animate && !draft && ['particles', 'arrows', 'pulse-arrows'].includes(animationStyle);
      const showStartArrow = !hideBaseStroke && (arrows === 'start' || arrows === 'both');
      const showEndArrow = !hideBaseStroke && (arrows === 'end' || arrows === 'both');
      const hasVisibleArrow = showStartArrow || showEndArrow;
      const strokeLinecap = (rounded || lineStyle === 'dotted') ? 'round' : 'square';
      const connectorStrokeLinecap = (hasVisibleArrow && lineStyle !== 'dotted') ? 'butt' : strokeLinecap;
      const strokeLinejoin = rounded ? 'round' : 'miter';
      const dasharray = lineStyle === 'dashed'
        ? `${Math.max(8, thickness * 1.65)} ${Math.max(6, thickness * 1.05)}`
        : (lineStyle === 'dotted'
            ? `0 ${Math.max(8, thickness * 1.35)}`
            : '');
      const d = this._buildConnectorPathData_(points);
      const selected = this._selectedConnectorId === connector.id;
      const connectorZ = draft ? 100000 : this._getConnectorZ_(connector);
      const surface = createConnectorSurface(
        `ddc-connector-surface${selected ? ' is-selected' : ''}${draft ? ' is-draft' : ''}`,
        connectorZ
      );
  
      const group = document.createElementNS(svgNs, 'g');
      group.setAttribute('class', `ddc-connector ${state.active ? 'is-active' : 'is-idle'} ${draft ? 'is-draft' : ''} ${hasAnchors ? 'is-anchored' : ''} ${autoRoute ? 'is-auto-route' : ''} is-animation-${animationStyle} ${selected ? 'is-selected' : ''}`);
      group.setAttribute('color', color);
      group.dataset.z = String(connectorZ);
  
      if (selected && !draft) {
        const selectionColor = String(connector.active_color || this._defaultConnectorConfig_().active_color);
        const selection = document.createElementNS(svgNs, 'path');
        selection.setAttribute('class', 'ddc-connector-selection');
        selection.setAttribute('d', d);
        selection.setAttribute('stroke', selectionColor);
        selection.setAttribute('color', selectionColor);
        selection.setAttribute('stroke-width', String(Math.max(thickness + 10, thickness * 2.05)));
        selection.setAttribute('stroke-linecap', 'round');
        selection.setAttribute('stroke-linejoin', 'round');
        group.appendChild(selection);
      }
  
      if (!hideBaseStroke) {
        const track = document.createElementNS(svgNs, 'path');
        track.setAttribute('class', 'ddc-connector-track');
        track.setAttribute('d', d);
        track.setAttribute('stroke-width', String(thickness));
        track.setAttribute('stroke-linecap', connectorStrokeLinecap);
        track.setAttribute('stroke-linejoin', strokeLinejoin);
        if (dasharray) track.setAttribute('stroke-dasharray', dasharray);
        group.appendChild(track);
  
        const line = document.createElementNS(svgNs, 'path');
        line.setAttribute('class', `ddc-connector-line ${connector.glow !== false ? 'is-glow' : ''}`);
        line.setAttribute('d', d);
        line.setAttribute('stroke', color);
        line.setAttribute('color', color);
        line.setAttribute('stroke-width', String(thickness));
        line.setAttribute('stroke-linecap', connectorStrokeLinecap);
        line.setAttribute('stroke-linejoin', strokeLinejoin);
        if (dasharray) line.setAttribute('stroke-dasharray', dasharray);
        group.appendChild(line);
      }
  
      const hit = document.createElementNS(svgNs, 'path');
      hit.setAttribute('class', 'ddc-connector-hit');
      hit.setAttribute('d', d);
      hit.setAttribute('stroke-width', String(Math.max(18, thickness + 14)));
      hit.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (!this.editMode || draft) return;
        this._selectedConnectorId = connector.id;
        if (draft) return;
        if (ev.shiftKey) {
          this._insertConnectorPointAtEvent_(connector.id, ev);
          this._selectedConnectorId = connector.id;
          this._openConnectorSettings_?.(connector.id);
          this._renderConnectors_();
          return;
        }
        this._openConnectorSettings_?.(connector.id);
        this._renderConnectors_();
      });
      hit.addEventListener('dblclick', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        if (!this.editMode || draft) return;
        this._insertConnectorPointAtEvent_(connector.id, ev);
        this._selectedConnectorId = connector.id;
        this._openConnectorSettings_?.(connector.id);
        this._renderConnectors_();
      });
      if (state.animate) {
        const speedFactor = Math.max(0, Math.min(8, Number(connector.animation_speed ?? this._defaultConnectorConfig_().animation_speed) || 0));
        const duration = speedFactor > 0 ? Math.max(0.2, Math.min(24, 1.6 / speedFactor)) : 0;
        const movingDuration = Math.max(2.4, duration * 2.35);
        const particleDuration = Math.max(3.0, duration * 2.75);
        const flowDash = Math.max(18, thickness * 2.4);
        const flowGap = Math.max(10, thickness * 1.35);
        const appendFlow = () => {
          const flow = document.createElementNS(svgNs, 'path');
          flow.setAttribute('class', `ddc-connector-flow ${state.reverse ? 'reverse' : 'forward'}`);
          flow.setAttribute('d', d);
          flow.setAttribute('stroke-width', String(Math.max(2, thickness * 0.48)));
          flow.setAttribute('stroke-linecap', connectorStrokeLinecap);
          flow.setAttribute('stroke-linejoin', strokeLinejoin);
          flow.setAttribute('stroke-dasharray', `${flowDash} ${flowGap}`);
          flow.style.setProperty('--ddc-connector-flow-cycle', `${flowDash + flowGap}`);
          flow.style.animationDuration = `${duration}s`;
          group.appendChild(flow);
        };
        const appendPulse = () => {
          const pulse = document.createElementNS(svgNs, 'path');
          pulse.setAttribute('class', 'ddc-connector-pulse');
          pulse.setAttribute('d', d);
          pulse.setAttribute('stroke', color);
          pulse.setAttribute('color', color);
          pulse.setAttribute('stroke-width', String(Math.max(thickness + 4, thickness * 1.55)));
          pulse.setAttribute('stroke-linecap', strokeLinecap);
          pulse.setAttribute('stroke-linejoin', strokeLinejoin);
          pulse.style.setProperty('--ddc-connector-pulse-width', `${Math.max(thickness + 6, thickness * 1.8)}`);
          pulse.style.animationDuration = `${Math.max(0.7, duration * 1.12)}s`;
          group.appendChild(pulse);
        };
        const appendMovingArrows = () => {
          const movingArrowCount = Math.max(2, Math.min(4, Math.round((points.length + 1) / 2)));
          const movingArrowSize = Math.max(7, Math.min(20, arrowSize * 0.62));
          const movingArrowWidth = Math.max(5, movingArrowSize * 0.72);
          const pathData = [
            `M ${Math.round(movingArrowSize * 0.58 * 100) / 100} 0`,
            `L ${Math.round(-movingArrowSize * 0.42 * 100) / 100} ${Math.round(-movingArrowWidth * 0.5 * 100) / 100}`,
            `L ${Math.round(-movingArrowSize * 0.14 * 100) / 100} 0`,
            `L ${Math.round(-movingArrowSize * 0.42 * 100) / 100} ${Math.round(movingArrowWidth * 0.5 * 100) / 100}`,
            'Z',
          ].join(' ');
          for (let i = 0; i < movingArrowCount; i += 1) {
            const movingArrow = document.createElementNS(svgNs, 'path');
            movingArrow.setAttribute('class', 'ddc-connector-moving-arrow');
            movingArrow.setAttribute('d', pathData);
            movingArrow.setAttribute('fill', color);
            movingArrow.setAttribute('stroke', 'rgba(255,255,255,.62)');
            movingArrow.setAttribute('stroke-width', String(Math.max(0.8, Math.min(1.4, thickness * 0.12))));
            movingArrow.setAttribute('stroke-linejoin', 'round');
            const motion = document.createElementNS(svgNs, 'animateMotion');
            motion.setAttribute('path', d);
            motion.setAttribute('dur', `${movingDuration}s`);
            motion.setAttribute('repeatCount', 'indefinite');
            motion.setAttribute('calcMode', 'linear');
            motion.setAttribute('keyTimes', '0;1');
            motion.setAttribute('keyPoints', state.reverse ? '1;0' : '0;1');
            motion.setAttribute('rotate', state.reverse ? 'auto-reverse' : 'auto');
            motion.setAttribute('begin', `${-(movingDuration / movingArrowCount) * i}s`);
            movingArrow.appendChild(motion);
            group.appendChild(movingArrow);
          }
        };
        const appendParticles = () => {
          let seed = 2166136261;
          const seedText = `${connector.id || 'connector'}:${d}:${points.length}`;
          for (let i = 0; i < seedText.length; i += 1) {
            seed ^= seedText.charCodeAt(i);
            seed = Math.imul(seed, 16777619) >>> 0;
          }
          const rand = () => {
            seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
            return seed / 4294967296;
          };
          const particleCount = Math.max(9, Math.min(18, (points.length * 2) + 7));
          const clumpCount = Math.max(2, Math.min(4, Math.round(points.length / 2) || 2));
          const particleBaseRadius = Math.max(1.5, Math.min(4.8, thickness * 0.27));
          const clumps = Array.from({ length: clumpCount }, (_, index) => {
            const base = (index + 0.5) / clumpCount;
            return (base + ((rand() - 0.5) * 0.16) + 1) % 1;
          }).sort((a, b) => a - b);
          for (let i = 0; i < particleCount; i += 1) {
            const clump = clumps[i % clumpCount] ?? 0;
            const clumpSpread = 0.035 + (rand() * 0.055);
            const offset = (clump + ((rand() - 0.5) * clumpSpread) + 1) % 1;
            const radiusScale = 0.46 + (rand() * 1.12);
            const opacityPeak = 0.58 + (rand() * 0.4);
            const opacityRest = 0.12 + (rand() * 0.18);
            const particleDelay = -(particleDuration * offset);
            const particle = document.createElementNS(svgNs, 'circle');
            particle.setAttribute('class', 'ddc-connector-particle');
            particle.setAttribute('r', String(Math.max(1.2, particleBaseRadius * radiusScale)));
            particle.setAttribute('fill', color);
            particle.setAttribute('stroke', 'rgba(255,255,255,.66)');
            particle.setAttribute('stroke-width', String(Math.max(0.35, Math.min(1.05, thickness * 0.075 * radiusScale))));
            const motion = document.createElementNS(svgNs, 'animateMotion');
            motion.setAttribute('path', d);
            motion.setAttribute('dur', `${particleDuration}s`);
            motion.setAttribute('repeatCount', 'indefinite');
            motion.setAttribute('calcMode', 'linear');
            motion.setAttribute('keyTimes', '0;1');
            motion.setAttribute('keyPoints', state.reverse ? '1;0' : '0;1');
            motion.setAttribute('begin', `${particleDelay}s`);
            const fade = document.createElementNS(svgNs, 'animate');
            fade.setAttribute('attributeName', 'opacity');
            fade.setAttribute('dur', `${particleDuration}s`);
            fade.setAttribute('repeatCount', 'indefinite');
            fade.setAttribute('values', `.03;${opacityPeak.toFixed(2)};${opacityRest.toFixed(2)};.03`);
            fade.setAttribute('keyTimes', '0;.16;.7;1');
            fade.setAttribute('begin', `${particleDelay}s`);
            particle.appendChild(motion);
            particle.appendChild(fade);
            group.appendChild(particle);
          }
        };
        if (animationStyle === 'pulse' || animationStyle === 'pulse-arrows') appendPulse();
        if (animationStyle === 'particles') appendParticles();
        if (animationStyle === 'arrows' || animationStyle === 'pulse-arrows') appendMovingArrows();
        if (animationStyle === 'flow') appendFlow();
      }
  
      const appendArrowHead = (className, tipIndex, step) => {
        const tip = points[tipIndex];
        if (!tip) return;
        let from = null;
        for (let i = tipIndex + step; i >= 0 && i < points.length; i += step) {
          const candidate = points[i];
          if (!candidate) continue;
          if (Math.abs((candidate.x || 0) - (tip.x || 0)) > 0.001 || Math.abs((candidate.y || 0) - (tip.y || 0)) > 0.001) {
            from = candidate;
            break;
          }
        }
        if (!from) return;
        const arrowPath = this._buildConnectorArrowHeadPath_(tip, from, {
          size: arrowSize,
          width: Math.max(6, Math.min(32, arrowSize * 0.72)),
        });
        if (!arrowPath) return;
        const arrow = document.createElementNS(svgNs, 'path');
        arrow.setAttribute('class', `ddc-connector-arrowhead ${className}`);
        arrow.setAttribute('d', arrowPath);
        arrow.setAttribute('fill', color);
        arrow.setAttribute('stroke', 'rgba(255,255,255,.62)');
        arrow.setAttribute('stroke-width', String(Math.max(0.7, Math.min(1.35, thickness * 0.13))));
        arrow.setAttribute('stroke-linejoin', 'round');
        group.appendChild(arrow);
      };
      if (showStartArrow) appendArrowHead('is-start', 0, 1);
      if (showEndArrow) appendArrowHead('is-end', points.length - 1, -1);
      if (!draft) group.appendChild(hit);
  
      const getSegmentAxis = (a = {}, b = {}) => {
        const dx = Math.abs((Number(b.x) || 0) - (Number(a.x) || 0));
        const dy = Math.abs((Number(b.y) || 0) - (Number(a.y) || 0));
        if (dx <= 0.001 && dy <= 0.001) return '';
        return dx >= dy ? 'x' : 'y';
      };
      const isCornerHandle = (index) => {
        const prev = points[index - 1];
        const point = points[index];
        const next = points[index + 1];
        if (!prev || !point || !next) return false;
        const prevAxis = getSegmentAxis(prev, point);
        const nextAxis = getSegmentAxis(point, next);
        const cross = (
          (((Number(point.x) || 0) - (Number(prev.x) || 0)) * ((Number(next.y) || 0) - (Number(point.y) || 0)))
          - (((Number(point.y) || 0) - (Number(prev.y) || 0)) * ((Number(next.x) || 0) - (Number(point.x) || 0)))
        );
        return (!!prevAxis && !!nextAxis && prevAxis !== nextAxis) || Math.abs(cross) > 0.5;
      };
      const lastIndex = points.length - 1;
      const autoCornerIndexes = points
        .map((_, index) => index)
        .filter((index) => index > 0 && index < lastIndex && isCornerHandle(index));
      const cornerIndexSet = new Set(autoCornerIndexes);
      const autoFallbackIndexes = points
        .map((_, index) => index)
        .filter((index) => index > 1 && index < lastIndex - 1);
      const autoRouteHandleIndexes = new Set(
        autoCornerIndexes.length
          ? autoCornerIndexes
          : (autoCornerIndexes.length ? autoCornerIndexes : autoFallbackIndexes)
      );
      const generatedTerminalGuard = hasAnchors && (autoRoute || points.length >= 5)
        ? Math.min(3, Math.max(1, Math.floor((points.length - 3) / 2)))
        : 0;
      const editableHandles = points
        .map((point, index) => ({ point, index }))
        .filter(({ index }) => {
          if (draft) return false;
          const isEndpoint = index === 0 || index === lastIndex;
          if (isEndpoint && ((index === 0 && sourceAnchor) || (index === lastIndex && targetAnchor))) return false;
          if (autoRoute) return autoRouteHandleIndexes.has(index);
          if (generatedTerminalGuard && !cornerIndexSet.has(index) && sourceAnchor && index > 0 && index <= generatedTerminalGuard) return false;
          if (generatedTerminalGuard && !cornerIndexSet.has(index) && targetAnchor && index < lastIndex && index >= lastIndex - generatedTerminalGuard) return false;
          return true;
        });
      if (selected && this.editMode && editableHandles.length) {
        editableHandles.forEach(({ point, index }) => {
          const handleSize = Math.max(11, Math.min(22, thickness * 1.15));
          const handleRadius = Math.max(3, Math.min(7, handleSize * 0.32));
          const handle = document.createElementNS(svgNs, 'rect');
          handle.setAttribute('class', 'ddc-connector-handle');
          handle.setAttribute('x', String(point.x - (handleSize / 2)));
          handle.setAttribute('y', String(point.y - (handleSize / 2)));
          handle.setAttribute('width', String(handleSize));
          handle.setAttribute('height', String(handleSize));
          handle.setAttribute('rx', String(handleRadius));
          handle.setAttribute('ry', String(handleRadius));
          handle.addEventListener('pointerdown', (ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              const isEndpoint = index === 0 || index === points.length - 1;
              const dragBasePoints = points.map((p) => ({ x: Number(p.x) || 0, y: Number(p.y) || 0 }));
              const dragTabId = this._normalizeTabId(connector.tabId || connector.tab_id || this.activeTab || this.defaultTab);
              this.__connectorPointDrag = { connectorId: connector.id, pointIndex: index };
              const onMove = (moveEv) => {
                if (!this.__connectorPointDrag) return;
                const rawPoint = this._eventToConnectorPoint_(moveEv);
                const hit = isEndpoint ? this._getConnectorAnchorHit_(rawPoint, { tabId: dragTabId }) : null;
                const nextPoint = hit?.point || this._snapConnectorPointToCellOrigin_(rawPoint);
                this._setConnectorAnchorHover_?.(hit);
                this._updateCurrentConnectorEntries_((entries) => entries.map((entry) => {
                  if (entry.id !== connector.id) return entry;
                  const nextPoints = dragBasePoints.map((p) => ({ ...p }));
                  nextPoints[index] = nextPoint;
                  const patch = {
                    ...entry,
                    points: nextPoints,
                    auto_route: false,
                  };
                  if (isEndpoint && index === 0) {
                    delete patch.sourceAnchor;
                    delete patch.source_anchor;
                    delete patch.sourceCardId;
                    delete patch.source_card_id;
                  }
                  if (isEndpoint && index === points.length - 1) {
                    delete patch.targetAnchor;
                    delete patch.target_anchor;
                    delete patch.targetCardId;
                    delete patch.target_card_id;
                  }
                  if (isEndpoint) {
                    patch.cardIds = this._normalizeConnectorCardIds_([
                      patch.sourceCardId || patch.source_card_id,
                      patch.targetCardId || patch.target_card_id,
                    ]);
                  }
                  return patch;
                }), { reason: null, render: true });
              };
              const onUp = () => {
                window.removeEventListener('pointermove', onMove, true);
                window.removeEventListener('pointerup', onUp, true);
                window.removeEventListener('pointercancel', onUp, true);
                this.__connectorPointDrag = null;
                const latest = this._getConnectorById_(connector.id);
                const latestPoints = Array.isArray(latest?.points) ? latest.points : dragBasePoints;
                if (isEndpoint) {
                  const endpoint = latestPoints[index] || dragBasePoints[index] || point;
                  const hit = this._getConnectorAnchorHit_(endpoint, { tabId: dragTabId });
                  if (hit?.cardId) {
                    this._updateCurrentConnectorEntries_((entries) => entries.map((entry) => {
                      if (entry.id !== connector.id) return entry;
                      const nextPoints = (Array.isArray(entry.points) ? entry.points : latestPoints).map((p) => ({ ...p }));
                      nextPoints[index] = { ...hit.point };
                      const nextSourceId = index === 0
                        ? hit.cardId
                        : String(entry.sourceCardId || entry.source_card_id || '').trim();
                      const nextTargetId = index === 0
                        ? String(entry.targetCardId || entry.target_card_id || '').trim()
                        : hit.cardId;
                      const ids = this._normalizeConnectorCardIds_([nextSourceId, nextTargetId || nextSourceId]);
                      const patch = {
                        ...entry,
                        points: nextPoints,
                        cardIds: ids,
                      };
                      if (index === 0) {
                        patch.sourceCardId = hit.cardId;
                        patch.sourceAnchor = hit.anchor;
                        patch.source_anchor = hit.anchor;
                      } else {
                        patch.targetCardId = hit.cardId;
                        patch.targetAnchor = hit.anchor;
                        patch.target_anchor = hit.anchor;
                      }
                      if (patch.sourceAnchor && patch.targetAnchor) patch.auto_route = true;
                      return patch;
                    }), { reason: null, render: false });
                  } else {
                    this._refreshConnectorScope_?.(connector.id, { reason: 'connector-anchor-change', render: false });
                  }
                }
                this._clearConnectorAnchorHover_?.();
                this._queueSave?.('connector-point-move');
                this._renderConnectors_?.();
              };
              window.addEventListener('pointermove', onMove, true);
              window.addEventListener('pointerup', onUp, true);
              window.addEventListener('pointercancel', onUp, true);
          });
          handle.addEventListener('dblclick', (ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              if (autoRoute) return;
              if (index === 0 || index === points.length - 1 || points.length <= 2) return;
              this._setCurrentConnectorEntries_((this._getCurrentConnectorEntries_() || []).map((entry) => {
                if (entry.id !== connector.id) return entry;
                const nextPoints = Array.isArray(entry.points) ? [...entry.points] : points.map((p) => ({ ...p }));
                nextPoints.splice(index, 1);
                return { ...entry, points: nextPoints };
              }), { reason: 'connector-junction-remove', render: true });
          });
          group.appendChild(handle);
        });
      }
  
      surface.appendChild(group);
      layer.appendChild(surface);
    };
  
    connectors.forEach((connector) => renderConnector(connector));
  
    if (this._connectorDraft?.points?.length) {
      const draftConnector = {
        ...this._defaultConnectorConfig_(),
        ...(this._connectorDraft.settings || {}),
        id: 'draft',
        points: this._connectorDraft.cursor
          ? [...this._connectorDraft.points, this._connectorDraft.cursor]
          : [...this._connectorDraft.points],
      };
      renderConnector(draftConnector, { draft: true });
    }
  },
};

export function installConnectorMethods(proto) {
  for (const [name, value] of Object.entries(connectorMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
