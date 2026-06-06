/*
 * Geometry helpers for cards, wrappers, and grid coordinates.
 *
 * These methods convert between DOM rectangles, layout entries, grid cells, and scaled canvas positions
 * used by drag, resize, connectors, and selection.
 */

const layoutGeometryMethods = {
  _adjustZ(wrap, delta) {
    const cur = parseInt(wrap.style.zIndex || '1', 10);
    let next = cur + delta;
    next = Math.max(1, Math.min(9999, next));
    wrap.style.zIndex = String(next);
    this._queueSave('z-change');
  },


  _highestZ() {
    // Default to a baseline of 5 so that newly created cards (which use
    // _highestZ() + 1) start at a z-index of at least 6.  Without this
    // baseline the first few cards would receive very low z-indices (1–4)
    // and appear behind the interactive grid overlay (z-index 5).  By
    // initializing max to 5 the first call returns 5, causing the first
    // wrapper to be assigned 6.  Subsequent wrappers will increment from
    // there, preserving relative ordering.
    let max = 5;
    this.cardContainer.querySelectorAll('.card-wrapper').forEach(w => {
      const z = parseInt(w.style.zIndex || '0', 10);
      if (z > max) max = z;
    });
    return max;
  },


  _setCardPosition(el, x, y) {
    const nx = Math.round(x);
    const ny = Math.max(0, Math.round(y));
    if (el?.classList?.contains?.('ddc-bubble-popup-wrapper') || el?.dataset?.bubblePopupWrapper === 'true') {
      el.style.left = `${nx}px`;
      el.style.top = `${ny}px`;
      el.style.transform = 'none';
    } else {
      el.style.removeProperty('left');
      el.style.removeProperty('top');
      el.style.transform = `translate3d(${nx}px, ${ny}px, 0)`;
    }
    el.setAttribute('data-x', String(nx));
    el.setAttribute('data-y', String(ny));
    this._scheduleConnectorsRender_?.();
    this._requestPreviewOutsideCardsSync_?.();
    // Do NOT touch data-*-raw here; drag/resize
  },


  _numberOr_(value, fallback = 0) {
    const n = Number.parseFloat(value);
    return Number.isFinite(n) ? n : fallback;
  },


  _clampYToCanvasTop_(value = 0) {
    const n = Number(value);
    return Number.isFinite(n) ? Math.max(0, n) : 0;
  },


  _constrainProposedCardsToCanvas_(proposed = [], liveSnap = false, gridSize = this.gridSize) {
    const items = Array.isArray(proposed) ? proposed : [];
    if (!items.length) return items;
    const gs = Math.max(1, Number(gridSize || this.gridSize || 1) || 1);
    const edgeBuffer = this._getCanvasEdgeBufferPx_?.() || 0;
    const numberOr = (value, fallback = 0) => {
      const n = Number(value);
      return Number.isFinite(n) ? n : fallback;
    };
    const snap = (value) => liveSnap ? Math.round(value / gs) * gs : value;
    const readBounds = () => items.reduce((bounds, item) => {
      if (!item) return bounds;
      const rawX = numberOr(item.rawX, numberOr(item.snapX, 0));
      const rawY = numberOr(item.rawY, numberOr(item.snapY, 0));
      const width = Math.max(0, numberOr(item.w, item.el?.getBoundingClientRect?.().width || 0));
      const height = Math.max(0, numberOr(item.h, item.el?.getBoundingClientRect?.().height || 0));
      item.rawX = rawX;
      item.rawY = rawY;
      item.w = width;
      item.h = height;
      bounds.minX = Math.min(bounds.minX, rawX);
      bounds.minY = Math.min(bounds.minY, rawY);
      bounds.maxX = Math.max(bounds.maxX, rawX + width);
      bounds.maxY = Math.max(bounds.maxY, rawY + height);
      return bounds;
    }, { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity });
    const shift = (dx = 0, dy = 0) => {
      if (!dx && !dy) return;
      items.forEach((item) => {
        if (!item) return;
        item.rawX = numberOr(item.rawX, 0) + dx;
        item.rawY = numberOr(item.rawY, 0) + dy;
      });
    };
    let bounds = readBounds();
    if (Number.isFinite(bounds.minX) && bounds.minX < edgeBuffer) shift(edgeBuffer - bounds.minX, 0);
    if (Number.isFinite(bounds.minY) && bounds.minY < edgeBuffer) shift(0, edgeBuffer - bounds.minY);
    let fixedContainerW = 0;
    let fixedContainerH = 0;
    if (this._isContainerFixed?.()) {
      try {
        const { w: cw, h: ch } = this._getContainerSize?.() || {};
        const containerW = Math.max(0, numberOr(cw, 0));
        const containerH = Math.max(0, numberOr(ch, 0));
        fixedContainerW = containerW;
        fixedContainerH = containerH;
        bounds = readBounds();
        const maxRight = Math.max(edgeBuffer, containerW - edgeBuffer);
        const maxBottom = Math.max(edgeBuffer, containerH - edgeBuffer);
        if (containerW > 0 && Number.isFinite(bounds.maxX) && bounds.maxX > maxRight) {
          const groupWidth = bounds.maxX - bounds.minX;
          const availableWidth = Math.max(0, maxRight - edgeBuffer);
          shift(groupWidth <= availableWidth ? maxRight - bounds.maxX : edgeBuffer - bounds.minX, 0);
        }
        bounds = readBounds();
        if (containerH > 0 && Number.isFinite(bounds.maxY) && bounds.maxY > maxBottom) {
          const groupHeight = bounds.maxY - bounds.minY;
          const availableHeight = Math.max(0, maxBottom - edgeBuffer);
          shift(groupHeight <= availableHeight ? maxBottom - bounds.maxY : edgeBuffer - bounds.minY, 0);
        }
      } catch {}
    }
    items.forEach((item) => {
      if (!item) return;
      const maxRawX = fixedContainerW > 0
        ? Math.max(edgeBuffer, fixedContainerW - edgeBuffer - numberOr(item.w, 0))
        : Number.POSITIVE_INFINITY;
      const maxRawY = fixedContainerH > 0
        ? Math.max(edgeBuffer, fixedContainerH - edgeBuffer - numberOr(item.h, 0))
        : Number.POSITIVE_INFINITY;
      item.rawX = Math.min(Math.max(edgeBuffer, numberOr(item.rawX, edgeBuffer)), maxRawX);
      item.rawY = Math.min(Math.max(edgeBuffer, this._clampYToCanvasTop_(numberOr(item.rawY, edgeBuffer))), maxRawY);
      let snapX = Math.min(Math.max(edgeBuffer, snap(item.rawX)), maxRawX);
      let snapY = Math.min(Math.max(edgeBuffer, this._clampYToCanvasTop_(snap(item.rawY))), maxRawY);
      item.snapX = snapX;
      item.snapY = snapY;
    });
    return items;
  },


  _shiftProposedCardsIntoCanvasTop_(proposed = [], liveSnap = false, gridSize = this.gridSize) {
    return this._constrainProposedCardsToCanvas_(proposed, liveSnap, gridSize);
  },
};

export function installLayoutGeometryMethods(proto) {
  for (const [name, value] of Object.entries(layoutGeometryMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
