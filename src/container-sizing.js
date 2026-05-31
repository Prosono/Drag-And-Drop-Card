/* Container sizing, fixed canvas bounds, and outer grid buffer helpers. */
const containerSizingMethods = {
  _isContainerFixed() { return (this.containerSizeMode === 'fixed_custom' || this.containerSizeMode === 'preset' || this.containerSizeMode === 'fixed'); },

  _resolveFixedSize() {
    if (this.containerSizeMode === 'fixed_custom') {
      const w = Math.max(100, Number(this.containerFixedWidth || 0));
      const h = Math.max(100, Number(this.containerFixedHeight || 0));
      return { w, h };
    }
    if (this.containerSizeMode === 'preset') {
      const p = this.constructor._sizePresets().find(x => x.key === this.containerPreset) ||
                this.constructor._sizePresets().find(x => x.key === 'fhd');
      if (!p) return { w: 1920, h: 1080 };
      let w = p.w, h = p.h;
      if (this.containerPresetOrient === 'portrait' && w > h) [w,h] = [h,w];
      if (this.containerPresetOrient === 'landscape' && h > w) [w,h] = [h,w];
      return { w, h };
    }
    return null;
  },

  _applyContainerSizingFromConfig(initial=false) {
    // set container size according to mode
    const c = this.cardContainer; if (!c) return;
  
    if (this._isContainerFixed()) {
      const { w, h } = this._resolveFixedSize();
      c.style.width  = `${w}px`;
      c.style.height = `${h}px`;
      // ensure overflow hidden (hard lock)
      c.style.overflow = 'hidden';
      if (!initial) this._dbgPush?.('size', 'Applied fixed size', { w, h, mode: this.containerSizeMode, preset:this.containerPreset, orient:this.containerPresetOrient });
      // pull any existing cards back inside
      this._clampAllCardsInside();
    } else {
      // dynamic — let _resizeContainer compute; clear inline to allow growth/shrink
      c.style.overflow = 'hidden';
      // keep width/height managed by _resizeContainer
      if (!initial) this._dbgPush?.('size', 'Applied dynamic size');
      this._resizeContainer();
    }
  },

  _getContainerSize() {
    const c = this.cardContainer; if (!c) return { w:0, h:0 };
    const w = parseFloat(getComputedStyle(c).width) || c.getBoundingClientRect().width;
    const h = parseFloat(getComputedStyle(c).height) || c.getBoundingClientRect().height;
    return { w, h };
  },

  _normalizeOuterGridBufferCells_(value = 1) {
    const n = Number(value);
    if (!Number.isFinite(n)) return 1;
    return Math.max(1, Math.min(10, Math.round(n)));
  },

  _getOuterGridBufferPx_() {
    if (!this.outerGridBuffer) return 0;
    const grid = Math.max(0, Number(this.gridSize || this._config?.grid || 0) || 0);
    const cells = this._normalizeOuterGridBufferCells_(this.outerGridBufferCells ?? this._config?.outer_grid_buffer_cells ?? 1);
    return grid * cells;
  },

  _getCanvasEdgeBufferPx_() {
    return Math.max(0, Number(this._getOuterGridBufferPx_?.() || 0) || 0);
  },

  _clampAllCardsInside() {
    if (!this._isContainerFixed()) return;
    const { w: cw, h: ch } = this._getContainerSize();
    const edgeBuffer = this._getCanvasEdgeBufferPx_?.() || 0;
    const wraps = this.cardContainer.querySelectorAll('.card-wrapper');
    wraps.forEach(w => {
      const x = parseFloat(w.getAttribute('data-x')) || 0;
      const y = parseFloat(w.getAttribute('data-y')) || 0;
      const ww = parseFloat(w.style.width)  || w.getBoundingClientRect().width;
      const hh = parseFloat(w.style.height) || w.getBoundingClientRect().height;
  
      const minX = edgeBuffer;
      const minY = edgeBuffer;
      const maxX = Math.max(minX, cw - edgeBuffer - ww);
      const maxY = Math.max(minY, ch - edgeBuffer - hh);
      const nx = Math.max(minX, Math.min(x, maxX));
      const ny = Math.max(minY, Math.min(y, maxY));
      let nw = Math.min(ww, Math.max(this.gridSize || 1, cw - (edgeBuffer * 2)));
      let nh = Math.min(hh, Math.max(this.gridSize || 1, ch - (edgeBuffer * 2)));
  
      // if width/height exceed box, shrink then re-clamp pos
      if (nw !== ww || nh !== hh) {
        w.style.width  = `${nw}px`;
        w.style.height = `${nh}px`;
      }
      const nx2 = Math.max(minX, Math.min(nx, Math.max(minX, cw - edgeBuffer - nw)));
      const ny2 = Math.max(minY, Math.min(ny, Math.max(minY, ch - edgeBuffer - nh)));
      this._setCardPosition(w, nx2, ny2);
    });
  }
};

export function installContainerSizingMethods(proto) {
  for (const [name, value] of Object.entries(containerSizingMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
