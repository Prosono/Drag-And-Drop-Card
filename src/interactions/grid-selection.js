/*
 * Canvas grid rendering and grid-cell selection behavior.
 *
 * The grid overlay powers click-drag creation of new cards and keeps grid visuals aligned with the
 * current zoom, canvas size, and edit mode state.
 */

export function installGridSelectPatch(DragAndDropCard) {
  Object.assign(DragAndDropCard.prototype, {
    /* === GRID SELECT PATCH START (hooks & builder) === */
    _updateGridButtonsVisibility() {
      const inEdit = !!this.editMode;
      const grid = Number(this._config?.grid ?? this._options?.grid ?? 10);
      // Show the selectable overlay when the grid size is reasonably large.  The
      // original threshold of 20px resulted in the overlay never activating
      // for most default configurations (typically 10px).  Lower the threshold
      // so that any grid size above 10px will enable the drag‑select overlay.
      const bigEnough = grid >= 10;
      const cont = this.cardContainer;
      // When not in edit mode or the grid is too small, destroy the overlay
      // and fall back to the traditional dotted grid lines (grid-on class).
      if (!inEdit || !bigEnough) {
        this._destroyGridCanvas();
        // restore underlying grid lines only when editing
        if (cont) cont.classList.toggle('grid-on', inEdit);
        return;
      }
      // In edit mode with a sufficiently large grid, build or update the
      // selection overlay.  Hide the underlying CSS grid lines to avoid
      // misaligned double grids.
      this._buildOrUpdateGridCanvas();
      if (cont) cont.classList.remove('grid-on');
    },

    _requestGridButtonsUpdateSoon() {
      clearTimeout(this._gridLayoutT);
      this._gridLayoutT = setTimeout(() => this._updateGridButtonsVisibility(), 50);
    },

    _buildOrUpdateGridCanvas() {
      const container = this.cardContainer;
      if (!container || !container.isConnected) return;

      const gridSize = Number(this._config?.grid ?? this._options?.grid ?? 10);
      this._gridCellSize = gridSize;

      if (!this._gridCanvas) {
        const c = document.createElement('canvas');
        c.className = 'ddc-grid-canvas';
        // behind cards: insert as first child
        container.insertBefore(c, container.firstChild || null);
        this._gridCanvas = c;
        this._gridCtx = c.getContext('2d');

        c.addEventListener('pointerdown', (ev)=>this._onGridPointerDown(ev), { passive: true });
        c.addEventListener('pointermove', (ev)=>this._onGridPointerMove(ev), { passive: true });
        c.addEventListener('pointerup',   (ev)=>this._onGridPointerUp(ev),   { passive: true });
        c.addEventListener('pointercancel', (ev)=>this._onGridPointerCancel(ev), { passive: true });
        c.addEventListener('lostpointercapture', (ev)=>this._onGridPointerCancel(ev), { passive: true });
      }

      // size canvas to container (retina-aware).  When the card
      // container is scaled (auto-resize in dynamic mode), its
      // boundingClientRect returns the *visual* size (already
      // multiplied by the scale factor).  If we use that width
      // directly as the canvas size, the canvas will be scaled a
      // second time by the container’s transform.  This results in the
      // selectable overlay being too large and misaligned.  Instead,
      // compute the unscaled width/height by dividing by the current
      // container scale.  The canvas is then sized to the unscaled
      // dimensions; after the parent’s transform applies, the canvas
      // expands to the correct visual size.
      const rect = container.getBoundingClientRect();
      const { sx, sy } = this._getContainerScale_();
      // guard against invalid scale values (e.g., 0 or NaN)
      const invSX = sx && isFinite(sx) ? (1 / sx) : 1;
      const invSY = sy && isFinite(sy) ? (1 / sy) : 1;
      const unscaledW = rect.width  * invSX;
      const unscaledH = rect.height * invSY;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const bufferW = Math.max(1, Math.round(unscaledW * dpr));
      const bufferH = Math.max(1, Math.round(unscaledH * dpr));
      const bufferArea = bufferW * bufferH;
      const useLightGrid = bufferArea > 12000000 || unscaledW > 5000 || unscaledH > 5000;
      this._gridLightMode = !!useLightGrid;
      this._gridCanvas.classList.toggle('ddc-grid-canvas--light', this._gridLightMode);
      this._gridCanvas.style.setProperty('--ddc-grid-cell-size', `${gridSize}px`);
      this._gridCanvas.style.setProperty('--ddc-grid-major-size', `${gridSize * 4}px`);
      this._gridCanvas.style.setProperty('--ddc-grid-super-size', `${gridSize * 8}px`);
      this._gridCanvas.style.setProperty('--ddc-grid-half-major-offset', `${gridSize * 2}px`);

      // Assign the canvas buffer dimensions using the unscaled size.  For very
      // large dashboards, keep the backing bitmap tiny and let CSS render the
      // grid lines; otherwise every hover move has to clear/repaint millions of
      // pixels in edit mode.
      this._gridCanvas.width  = this._gridLightMode ? 1 : bufferW;
      this._gridCanvas.height = this._gridLightMode ? 1 : bufferH;
      // Set the CSS size to the unscaled dimensions so that after
      // scaling the canvas fills the visual space exactly
      this._gridCanvas.style.width  = unscaledW + 'px';
      this._gridCanvas.style.height = unscaledH + 'px';

      // Compute the number of columns/rows based on the unscaled width.
      // Dividing by the grid size in design units ensures that the
      // overlay grid matches the underlying design grid regardless of
      // scaling.  Use Math.ceil here so that partial cells at the
      // right/bottom edges are included, preventing gaps when the
      // canvas size is not an exact multiple of the grid size.
      this._gridCols = Math.max(1, Math.ceil(unscaledW  / gridSize));
      this._gridRows = Math.max(1, Math.ceil(unscaledH / gridSize));

      if (this._gridLightMode) {
        this._gridTile = null;
        this._ensureGridDomOverlays_();
      } else {
        this._destroyGridDomOverlays_();
        // glass tile for full cell
        this._buildGridTile_(gridSize, dpr);
      }
      this._markGridDirty();
    },

    _destroyGridCanvas() {
      cancelAnimationFrame(this._gridRAF);
      this._gridRAF = 0;
      if (this._gridCanvas?.parentElement) this._gridCanvas.parentElement.removeChild(this._gridCanvas);
      this._gridCanvas = null;
      this._gridCtx = null;
      this._gridTile = null;
      this._gridLightMode = false;
      this._gridDown = false;
      this._gridPointerId = null;
      this._gridHoverCol = this._gridHoverRow = -1;
      this._destroyGridDomOverlays_();
    },
    /* === GRID SELECT PATCH END (hooks & builder) === */

    /* === GRID SELECT PATCH START (rendering) === */
    // Draw a subtle blueprint tile in CSS-space units so it stays aligned
    // with the interactive grid even when the dashboard is scaled.
    _buildGridTile_(gridSize, _dpr) {
      const cell = Math.max(1, Math.round(gridSize));
      const majorEvery = 4;
      const tw = Math.max(1, cell * majorEvery);
      const th = tw;

      const off = document.createElement('canvas');
      off.width = tw;
      off.height = th;
      const ctx = off.getContext('2d');

      ctx.clearRect(0, 0, tw, th);
      ctx.lineCap = 'butt';
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let i = 1; i < majorEvery; i++) {
        const p = i * cell + 0.5;
        ctx.moveTo(p, 0);
        ctx.lineTo(p, th);
        ctx.moveTo(0, p);
        ctx.lineTo(tw, p);
      }
      ctx.strokeStyle = 'rgba(125, 211, 252, 0.12)';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0.5, 0);
      ctx.lineTo(0.5, th);
      ctx.moveTo(0, 0.5);
      ctx.lineTo(tw, 0.5);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.26)';
      ctx.stroke();

      const tick = Math.min(8, Math.max(3, cell * 0.35));
      ctx.beginPath();
      ctx.moveTo(0.5, tick);
      ctx.lineTo(0.5, 0.5);
      ctx.lineTo(tick, 0.5);
      ctx.strokeStyle = 'rgba(186, 230, 253, 0.20)';
      ctx.stroke();

      this._gridTile = off;
    },

    _ensureGridDomOverlays_() {
      const container = this.cardContainer;
      if (!container || !container.isConnected) return;
      if (!this._gridHoverEl) {
        const hover = document.createElement('div');
        hover.className = 'ddc-grid-hover-cell';
        container.appendChild(hover);
        this._gridHoverEl = hover;
      }
      if (!this._gridSelectionEl) {
        const selection = document.createElement('div');
        selection.className = 'ddc-grid-selection-rect';
        container.appendChild(selection);
        this._gridSelectionEl = selection;
      }
    },

    _destroyGridDomOverlays_() {
      try { this._gridHoverEl?.remove?.(); } catch {}
      try { this._gridSelectionEl?.remove?.(); } catch {}
      this._gridHoverEl = null;
      this._gridSelectionEl = null;
    },

    _positionGridDomOverlay_(el, visible, x = 0, y = 0, w = 0, h = 0) {
      if (!el) return;
      if (!visible) {
        el.style.display = 'none';
        return;
      }
      el.style.display = 'block';
      el.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
      el.style.width = `${Math.max(0, Math.round(w))}px`;
      el.style.height = `${Math.max(0, Math.round(h))}px`;
    },

    _updateGridDomOverlays_() {
      if (!this._gridLightMode) return;
      this._ensureGridDomOverlays_();
      const grid = this._gridCellSize || 10;

      const hasHover = this._gridHoverCol >= 0 && this._gridHoverRow >= 0;
      this._positionGridDomOverlay_(
        this._gridHoverEl,
        hasHover,
        this._gridHoverCol * grid,
        this._gridHoverRow * grid,
        grid,
        grid
      );

      const hasSelection = this._gridDown
        && this._gridStartCol >= 0
        && this._gridStartRow >= 0
        && this._gridCurrCol >= 0
        && this._gridCurrRow >= 0;
      if (!hasSelection) {
        this._positionGridDomOverlay_(this._gridSelectionEl, false);
        return;
      }

      const minCol = Math.min(this._gridStartCol, this._gridCurrCol);
      const maxCol = Math.max(this._gridStartCol, this._gridCurrCol);
      const minRow = Math.min(this._gridStartRow, this._gridCurrRow);
      const maxRow = Math.max(this._gridStartRow, this._gridCurrRow);
      this._positionGridDomOverlay_(
        this._gridSelectionEl,
        true,
        minCol * grid,
        minRow * grid,
        (maxCol - minCol + 1) * grid,
        (maxRow - minRow + 1) * grid
      );
    },

    _markGridDirty() {
      if (this._gridDirty) return;
      this._gridDirty = true;
      this._gridRAF = requestAnimationFrame(() => {
        this._gridDirty = false;
        this._renderGridCanvas_();
      });
    },

    _renderGridCanvas_() {
      const c = this._gridCanvas; if (!c) return;
      if (this._gridLightMode) {
        this._updateGridDomOverlays_();
        return;
      }
      this._destroyGridDomOverlays_();
      const ctx = this._gridCtx;
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const grid = this._gridCellSize || 10;

      ctx.clearRect(0, 0, c.width, c.height);
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.fillStyle = 'rgba(8, 47, 73, 0.035)';
      ctx.fillRect(0, 0, c.width / dpr, c.height / dpr);
      ctx.restore();

      if (this._gridTile) {
        const pat = ctx.createPattern(this._gridTile, 'repeat');
        // Offset the pattern by the container's padding so the rendered
        // squares align perfectly with the underlying CSS grid lines.
        // Draw the grid pattern starting at the canvas origin (0,0).
        // The selectable cells use the same grid origin (0,0) relative to
        // the canvas, so aligning the pattern origin with the canvas
        // origin ensures that the visual grid exactly matches the
        // interactive grid.  No translation is needed; simply fill the
        // entire canvas with the repeating pattern.
        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.fillStyle = pat;
        ctx.fillRect(0, 0, c.width / dpr, c.height / dpr);
        ctx.restore();
      }

      if (this._gridHoverCol >= 0 && this._gridHoverRow >= 0) {
        ctx.save();
        ctx.scale(dpr, dpr);

        const x = this._gridHoverCol * grid;
        const y = this._gridHoverRow * grid;
        const w = grid;
        const h = grid;

        ctx.fillStyle = 'rgba(125, 211, 252, 0.10)';
        ctx.fillRect(x, y, w, h);
        ctx.strokeStyle = 'rgba(125, 211, 252, 0.42)';
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 0.5, y + 0.5, Math.max(0, w - 1), Math.max(0, h - 1));
        ctx.strokeStyle = 'rgba(224, 242, 254, 0.55)';
        this._drawBlueprintCorners_(ctx, x + 0.5, y + 0.5, Math.max(0, w - 1), Math.max(0, h - 1), Math.min(7, grid * 0.45));
        ctx.restore();
      }

      // Selection rectangle – full grid cells, no insets
      if (this._gridDown && this._gridStartCol >= 0 && this._gridStartRow >= 0 &&
          this._gridCurrCol  >= 0 && this._gridCurrRow  >= 0) {

        const minCol = Math.min(this._gridStartCol, this._gridCurrCol);
        const maxCol = Math.max(this._gridStartCol, this._gridCurrCol);
        const minRow = Math.min(this._gridStartRow, this._gridCurrRow);
        const maxRow = Math.max(this._gridStartRow, this._gridCurrRow);

        const x = minCol * grid;
        const y = minRow * grid;
        const w = (maxCol - minCol + 1) * grid;
        const h = (maxRow - minRow + 1) * grid;

        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.13)';
        ctx.fillRect(x, y, w, h);
        ctx.strokeStyle = 'rgba(147, 197, 253, 0.58)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([Math.max(4, grid * 0.35), Math.max(3, grid * 0.22)]);
        ctx.strokeRect(x + 0.75, y + 0.75, Math.max(0, w - 1.5), Math.max(0, h - 1.5));
        ctx.setLineDash([]);
        ctx.strokeStyle = 'rgba(224, 242, 254, 0.66)';
        this._drawBlueprintCorners_(ctx, x + 0.75, y + 0.75, Math.max(0, w - 1.5), Math.max(0, h - 1.5), Math.min(14, Math.max(6, grid * 0.55)));
        ctx.restore();
      }
    },

    _drawBlueprintCorners_(ctx, x, y, w, h, len) {
      const l = Math.max(3, Math.min(len, w / 2, h / 2));
      ctx.beginPath();
      ctx.moveTo(x, y + l);
      ctx.lineTo(x, y);
      ctx.lineTo(x + l, y);
      ctx.moveTo(x + w - l, y);
      ctx.lineTo(x + w, y);
      ctx.lineTo(x + w, y + l);
      ctx.moveTo(x + w, y + h - l);
      ctx.lineTo(x + w, y + h);
      ctx.lineTo(x + w - l, y + h);
      ctx.moveTo(x + l, y + h);
      ctx.lineTo(x, y + h);
      ctx.lineTo(x, y + h - l);
      ctx.stroke();
    },

    _roundRect_(ctx, x, y, w, h, r) {
      const rr = Math.min(r, w/2, h/2);
      ctx.beginPath();
      ctx.moveTo(x+rr, y);
      ctx.arcTo(x+w, y, x+w, y+h, rr);
      ctx.arcTo(x+w, y+h, x, y+h, rr);
      ctx.arcTo(x, y+h, x, y, rr);
      ctx.arcTo(x, y, x+w, y, rr);
      ctx.closePath();
    },
    /* === GRID SELECT PATCH END (rendering) === */

    /* === GRID SELECT PATCH START (interaction) === */
    _emptySpaceAt_(clientX, clientY) {
      const el = document.elementFromPoint(clientX, clientY);
      return !el || !el.closest || !el.closest('.card-wrapper, .resize-handle, .ddc-chip, .shield');
    },

    _locToCell_(clientX, clientY) {
      const c = this._gridCanvas;
      if (!c) return { col: -1, row: -1 };
      const rect = c.getBoundingClientRect();
      const { sx, sy } = this._getContainerScale_();
      const x = (clientX - rect.left) / (sx || 1);
      const y = (clientY - rect.top)  / (sy || 1);
      const grid = this._gridCellSize || 10;
      const col = Math.min(this._gridCols - 1, Math.max(0, Math.floor(x / grid)));
      const row = Math.min(this._gridRows - 1, Math.max(0, Math.floor(y / grid)));
      return { col, row };
    },

    _onGridPointerDown(ev) {
      if (ev.pointerType === 'mouse' && ev.button !== 0) {
        this._gridDown = false;
        this._gridPointerId = null;
        this._gridHoverCol = this._gridHoverRow = -1;
        this._markGridDirty();
        return;
      }
      if (this.__middleMousePanState) return;
      if (!this._emptySpaceAt_(ev.clientX, ev.clientY)) return;
      const { col, row } = this._locToCell_(ev.clientX, ev.clientY);
      this._gridDown = true;
      this._gridPointerId = ev.pointerId;
      this._gridStartCol = col;
      this._gridStartRow = row;
      this._gridCurrCol = col;
      this._gridCurrRow = row;
      this._markGridDirty();
      ev.currentTarget.setPointerCapture?.(ev.pointerId);
    },

    _onGridPointerMove(ev) {
      if (this.__middleMousePanState || (ev.pointerType === 'mouse' && (ev.buttons & 4))) return;
      const { col: hcol, row: hrow } = this._locToCell_(ev.clientX, ev.clientY);
      if (hcol !== this._gridHoverCol || hrow !== this._gridHoverRow) {
        this._gridHoverCol = hcol;
        this._gridHoverRow = hrow;
        this._markGridDirty();
      }
      if (!this._gridDown) return;
      if (this._gridPointerId != null && ev.pointerId !== this._gridPointerId) return;
      const { col, row } = this._locToCell_(ev.clientX, ev.clientY);
      if (col !== this._gridCurrCol || row !== this._gridCurrRow) {
        this._gridCurrCol = col;
        this._gridCurrRow = row;
        this._markGridDirty();
      }
    },

    async _onGridPointerUp(ev) {
      if (ev?.pointerType === 'mouse' && ev.button !== 0) {
        this._onGridPointerCancel();
        return;
      }
      if (!this._gridDown) return;
      if (this._gridPointerId != null && ev?.pointerId !== this._gridPointerId) return;
      this._gridDown = false;
      this._gridPointerId = null;

      const minCol = Math.min(this._gridStartCol, this._gridCurrCol);
      const maxCol = Math.max(this._gridStartCol, this._gridCurrCol);
      const minRow = Math.min(this._gridStartRow, this._gridCurrRow);
      const maxRow = Math.max(this._gridStartRow, this._gridCurrRow);
      const cellsCount = (maxCol - minCol + 1) * (maxRow - minRow + 1);

      if (cellsCount < 2) { this._markGridDirty(); return; }

      const grid = this._gridCellSize || 10;
      const x = minCol * grid;
      const y = minRow * grid;
      const w = (maxCol - minCol + 1) * grid;
      const h = (maxRow - minRow + 1) * grid;

      this._markGridDirty();
      this._promptNewCardForRect_({ x, y, w, h });
    },

    _onGridPointerCancel() {
      this._gridDown = false;
      this._gridPointerId = null;
      this._gridHoverCol = this._gridHoverRow = -1;
      this._markGridDirty();
    },
    /* === GRID SELECT PATCH END (interaction) === */

    /* === GRID SELECT PATCH START (lifecycle wiring) === */
    _installGridObservers_() {
      try {
        if (this.__gridRO) this.__gridRO.disconnect();
        this.__gridRO = new ResizeObserver(() => this._requestGridButtonsUpdateSoon());
        if (this.cardContainer) this.__gridRO.observe(this.cardContainer);
      } catch {}
      clearInterval(this.__gridPollT);
      this.__gridPrevEditMode = undefined;
      this.__gridPollT = setInterval(() => {
        const now = !!this.editMode;
        if (now !== this.__gridPrevEditMode) {
          this.__gridPrevEditMode = now;
          this._updateGridButtonsVisibility();
        }
      }, 300);
    },

    _uninstallGridObservers_() {
      try { this.__gridRO?.disconnect?.(); } catch {}
      this.__gridRO = null;
      clearInterval(this.__gridPollT);
      this.__gridPollT = null;
    },
    /* === GRID SELECT PATCH END (lifecycle wiring) === */

    /* === GRID SELECT PATCH START (helpers) === */
    // Map a canvas-space rect (x,y,w,h) into the container/card coordinate space
    _gridRectToCardRect_({ x, y, w, h }) {
      const container = this.cardContainer;
      const canvas = this._gridCanvas;
      if (!container || !canvas) return { x, y, w, h };

      // In dynamic modes the selection coordinates (x,y,w,h) are
      // expressed in unscaled design units (grid cell multiples).  When
      // the container is scaled via a CSS transform, we must *not*
      // divide by the scale factor here: the design units already
      // correspond to the unscaled layout.  Instead simply add the
      // container’s padding, border and scroll offsets.  This differs
      // from the original implementation which divided by the scale to
      // compensate for a canvas sized to the scaled dimensions.
      const scrollX = container.scrollLeft || 0;
      const scrollY = container.scrollTop  || 0;

      const cx = x + scrollX;
      const cy = y + scrollY;
      const cw = w;
      const ch = h;

      return { x: cx, y: cy, w: cw, h: ch };
    },

    // Get container's transform scale (matrix or matrix3d). Defaults to 1 if none.
    _getContainerScale_() {
      const el = this.cardContainer;
      if (!el) return { sx: 1, sy: 1 };
      const t = getComputedStyle(el).transform;
      if (!t || t === 'none') return { sx: 1, sy: 1 };

      const m2d = t.match(/matrix\(([^)]+)\)/);
      if (m2d) {
        const [a,, , d] = m2d[1].split(',').map(v => parseFloat(v.trim()));
        return { sx: (isFinite(a) && a) ? a : 1, sy: (isFinite(d) && d) ? d : 1 };
      }
      const m3d = t.match(/matrix3d\(([^)]+)\)/);
      if (m3d) {
        const p = m3d[1].split(',').map(v => parseFloat(v.trim()));
        return { sx: (isFinite(p[0]) && p[0]) ? p[0] : 1, sy: (isFinite(p[5]) && p[5]) ? p[5] : 1 };
      }
      return { sx: 1, sy: 1 };
    },

    // Convert a canvas-space rect (x,y,w,h) to container's absolute-position CSS pixels
    _canvasRectToContainerRect_({ x, y, w, h }) {
      const container = this.cardContainer;
      const canvas = this._gridCanvas;
      if (!container || !canvas) return { x, y, w, h };

      const contCS = getComputedStyle(container);
      const bL   = parseFloat(contCS.borderLeftWidth) || 0;
      const bT   = parseFloat(contCS.borderTopWidth)  || 0;
      const { sx, sy } = this._getContainerScale_();

      const canvRect = canvas.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();

      const viewportX = canvRect.left + x;
      const viewportY = canvRect.top  + y;

      let dx = viewportX - contRect.left;
      let dy = viewportY - contRect.top;

      // border-box → padding-box
      dx -= bL;
      dy -= bT;



      const invSX = sx ? 1 / sx : 1;
      const invSY = sy ? 1 / sy : 1;

      const outX = dx * invSX;
      const outY = dy * invSY;
      const outW = (w * invSX);
      const outH = (h * invSY);

      return { x: outX, y: outY, w: outW, h: outH };
    },
    /* === GRID SELECT PATCH END (helpers) === */

    /* === GRID SELECT PATCH START (add card bridge) === */
    // Store the selection rect and let the normal picker flow run.
    // The shim below will place the card at this rect instead of the default spot.
    /* === GRID SELECT PATCH START (add card bridge) === */
    // Store the selection rect and let the normal picker flow run.
    // The shim below will place the card at this rect instead of the default spot.
    async _promptNewCardForRect_({ x, y, w, h }) {
      try {
        const g = this._gridCellSize || Number(this._config?.grid ?? this._options?.grid ?? 10);
        const snap = v => Math.round(v / g) * g;
        const sx = snap(x), sy = snap(y), sw = Math.max(g, snap(w)), sh = Math.max(g, snap(h));

        // Map the snapped canvas-space rect into the card container coordinate space.
        // When the layout is scaled (auto-resize in dynamic mode), the
        // container may be transformed and scrolled, so we use the
        // grid-to-card mapping which compensates for padding, borders, scroll
        // and scale.  In strict auto size mode the container is resized
        // instead of transformed, so we fall back to the canvas→container
        // mapping that accounts for differences between the canvas and
        // container bounding boxes.  If neither helper exists we use the
        // snapped values directly.
        let mapped;
        try {
          const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
          if (mode === 'auto' && typeof this._canvasRectToContainerRect_ === 'function') {
            mapped = this._canvasRectToContainerRect_({ x: sx, y: sy, w: sw, h: sh });
          } else if (typeof this._gridRectToCardRect_ === 'function') {
            mapped = this._gridRectToCardRect_({ x: sx, y: sy, w: sw, h: sh });
          } else {
            mapped = { x: sx, y: sy, w: sw, h: sh };
          }
        } catch {
          mapped = { x: sx, y: sy, w: sw, h: sh };
        }

        const finalRect = {
          x: Math.round(mapped.x),
          y: Math.round(mapped.y),
          w: Math.round(mapped.w),
          h: Math.round(mapped.h),
        };

        // --- NEW: if 2+ cards already in this area, do NOT open the picker ---
        try {
          const cont = this.cardContainer;
          if (cont) {
            const wraps = Array.from(
              cont.querySelectorAll('.card-wrapper:not(.ddc-placeholder)')
            );

            const intersects = (r1, r2) => !(
              r2.x >= r1.x + r1.w ||
              r2.x + r2.w <= r1.x ||
              r2.y >= r1.y + r1.h ||
              r2.y + r2.h <= r1.y
            );

            let hitCount = 0;

            for (const wEl of wraps) {
              // Only consider cards that are visible in the current tab/layer context.
              if (!this._isWrapperVisibleForOverlap_?.(wEl)) continue;

              const wx = parseFloat(wEl.getAttribute('data-x')) || 0;
              const wy = parseFloat(wEl.getAttribute('data-y')) || 0;
              const ww = parseFloat(wEl.style.width)  || wEl.getBoundingClientRect().width;
              const wh = parseFloat(wEl.style.height) || wEl.getBoundingClientRect().height;

              const cardRect = { x: wx, y: wy, w: ww, h: wh };

              if (intersects(finalRect, cardRect)) {
                hitCount++;
                if (hitCount >= 2) break;
              }
            }

            if (hitCount >= 2) {
              // Too many cards already in this selection area: abort add
              this.__pendingAddRect = null;
              try { this._toast?.('Area already contains multiple cards.'); } catch {}
              return;
            }
          }
        } catch (err) {
          console.warn('[ddc] selection-area card count check failed', err);
        }
        // --- END NEW LOGIC ---

        // Normal flow: store rect and open HA card picker
        this.__pendingAddRect = finalRect;
        await this._openSmartPicker('add', null, null);
      } catch (e) {
        console.warn('[ddc] _promptNewCardForRect_ failed', e);
      }
    }
/* === GRID SELECT PATCH END (add card bridge) === */
    /* === GRID SELECT PATCH END (add card bridge) === */
  });

  // --- BEGIN: selection-rect placement shim ---
if (!DragAndDropCard.prototype.__addPickedPatched) {
  const __origAddPicked = DragAndDropCard.prototype._addPickedCardToLayout;

  DragAndDropCard.prototype._addPickedCardToLayout = async function (cardConfig) {
    // If a selection rect is pending, place the new card exactly there.
    if (this && this.__pendingAddRect) {
      const { x, y, w, h } = this.__pendingAddRect;
      this.__pendingAddRect = null; // consume it

      try { this._hideEmptyPlaceholder?.(); } catch {}

      const cardEl = await this._createCard(cardConfig);
      const wrap   = this._makeWrapper(cardEl);

      // Determine mode: auto vs everything else
      const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode || this._config?.container_size_mode);

      // In auto mode we use 0 offset; otherwise 11 px up/left
      const isAuto = mode === 'auto';
      const offX   = isAuto ? -11 : 11;
      const offY   = isAuto ? -11 : 11;

      const posX = Math.round(x) - offX;
      const posY = Math.round(y) - offY;

      this._setCardPosition(wrap, posX, posY);
      wrap.style.width  = `${Math.round(w)}px`;
      wrap.style.height = `${Math.round(h)}px`;

      // Ensure new cards are above the grid overlay
      {
        const nextVal = this._highestZ() + 1;
        wrap.style.zIndex = String(Math.max(nextVal, 6));
      }

      wrap.dataset.tabId = this._normalizeTabId(this.activeTab || this.defaultTab);
      this.cardContainer.appendChild(wrap);

      try { this._rebuildOnce?.(wrap.firstElementChild); } catch {}
      try { this._initCardInteract?.(wrap); } catch {}
      try { this._resizeContainer?.(); } catch {}
      try { this._queueSave?.('add'); } catch {}
      try { this._toast?.('Card added to selection.'); } catch {}
      try { this._syncEmptyStateUI?.(); } catch {}
      try { this._applyVisibility_?.(); } catch {}

      // Keep your existing auto-resize / grid refresh behaviour
      requestAnimationFrame(() => {
        try {
          const modeNow = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode || this._config?.container_size_mode);

          if (modeNow === 'auto' || this.autoResizeCards) {
            this._applyAutoScale?.();
          }
          this._requestGridButtonsUpdateSoon?.();
        } catch {}
      });

      return; // handled by shim
    }

    // Fallback to the original behavior (no selection rect)
    return await __origAddPicked.call(this, cardConfig);
  };

  DragAndDropCard.prototype.__addPickedPatched = true;
}
  // --- END: selection-rect placement shim ---

}
