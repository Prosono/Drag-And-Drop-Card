/*
 * Auto-scale and resize observer management.
 *
 * This module computes the scale that makes dashboard content fit the available container while keeping
 * manual, preset, and responsive preview modes from fighting each other.
 */

const scaleManagerMethods = {
  _requestAutoScaleFromObserver_() {
    if (this.__ddcMovingCard) {
      this.__ddcScaleAfterCardMove = true;
      return;
    }
    if (this.__ddcResizingCard) {
      this.__ddcScaleAfterCardResize = true;
      return;
    }
    this._applyAutoScale?.();
  },


  _scheduleReflowAndScale() {
    if (this.__ddcMovingCard) {
      this.__ddcScaleAfterCardMove = true;
      return;
    }
    if (this.__ddcResizingCard) {
      this.__ddcScaleAfterCardResize = true;
      return;
    }
    if (this.__reflowRAF) return;
    this.__reflowRAF = requestAnimationFrame(() => {
      this.__reflowRAF = null;
      if (this.__ddcMovingCard) {
        this.__ddcScaleAfterCardMove = true;
        return;
      }
      if (this.__ddcResizingCard) {
        this.__ddcScaleAfterCardResize = true;
        return;
      }
      try {
        const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
        if (mode === 'auto') {
          this._resizeContainer?.(); // recompute content extents so d.h grows live
        }
      } catch {}
      try { this._applyAutoScale?.(); } catch {}
    });
  },


  _settleLayoutAfterCardMove_({ syncAnchors = false } = {}) {
    if (this.__ddcMovingCard || this.__ddcResizingCard) {
      this.__ddcScaleAfterCardMove = true;
      return;
    }

    const run = () => {
      if (this.__ddcMovingCard || this.__ddcResizingCard) {
        this.__ddcScaleAfterCardMove = true;
        return;
      }
      try { this._resizeContainer?.(); } catch {}
      try {
        const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
        this._applyAutoScale?.();
      } catch {}
      try { this._requestGridButtonsUpdateSoon?.(); } catch {}
      try { this._scheduleConnectorsRender_?.({ syncAnchors }); } catch {}
    };

    run();
    try { cancelAnimationFrame(this.__postMoveSettleRAF1); } catch {}
    try { cancelAnimationFrame(this.__postMoveSettleRAF2); } catch {}
    this.__postMoveSettleRAF1 = requestAnimationFrame(() => {
      run();
      this.__postMoveSettleRAF2 = requestAnimationFrame(run);
    });
  },


  __ddcBindPointerListeners() {
    if (this.__ddcPtrBound) return;
    this.__ddcPtrBound = true;
    // Use bound methods to allow removeEventListener later if needed
    this.__onDDCPointerDown = (ev) => {
      try {
        // This listener only exists to loosen overflow during a real card
        // drag.  A plain click in edit mode must not kick dynamic reflow/scale.
        if (!this.editMode) return;
        // Only react to primary button/touch
        if (ev.button !== undefined && ev.button !== 0) return;
        const path = ev.composedPath?.() || [];
        let hit = null;
        for (const n of path) {
          if (n && n.classList && n.classList.contains('card-wrapper')) { hit = n; break; }
        }
        if (!hit) return;
        if (ev.target?.closest?.('.resize-handle')) return;
        this.__ddcDragPointer = {
          id: ev.pointerId,
          startX: Number(ev.clientX || 0),
          startY: Number(ev.clientY || 0),
        };
      } catch {}
    };
    this.__onDDCPointerMove = (ev) => {
      try {
        const pending = this.__ddcDragPointer;
        if (!pending && !this.__ddcDragging) return;
        if (pending && ev.pointerId !== pending.id) return;
	        if (!this.__ddcDragging) {
	          const dx = Math.abs(Number(ev.clientX || 0) - pending.startX);
	          const dy = Math.abs(Number(ev.clientY || 0) - pending.startY);
	          if (Math.max(dx, dy) < 4) return;
	          this.__ddcDragging = true;
	          if (this.__scaleOuter && !this._getViewportPreviewPreset_?.()) {
	            this.__prevOverflow = this.__scaleOuter.style.overflow;
	            this.__scaleOuter.style.overflow = 'visible'; // avoid "ceiling" clipping
	          }
	        }
	      } catch {}
    };
    this.__onDDCPointerUp = (ev) => {
      try {
	        this.__ddcDragPointer = null;
	        if (!this.__ddcDragging) return;
	        this.__ddcDragging = false;
	        if (this.__scaleOuter && this.__prevOverflow !== undefined) {
	          this.__scaleOuter.style.overflow = this.__prevOverflow || '';
	        }
	        this.__prevOverflow = undefined;
	      } catch {}
	    };
    // Attach listeners
    try { this.addEventListener('pointerdown', this.__onDDCPointerDown, { passive: true }); } catch {}
    try { this.addEventListener('pointermove', this.__onDDCPointerMove, { passive: true }); } catch {}
    try { window.addEventListener('pointerup', this.__onDDCPointerUp, { passive: true }); } catch {}
    try { window.addEventListener('pointercancel', this.__onDDCPointerUp, { passive: true }); } catch {}
  },


  _ensureScaleWrapper() {
  const c = this.cardContainer;
  if (!c) return;
  if (this.__scaleOuter && this.__scaleOuter.contains(c)) return;

  // Create a layout box that will reflect the *visual* size
  const outer = document.createElement('div');
  outer.className = 'ddc-scale-outer';
  Object.assign(outer.style, {
    position: 'relative',
    width: '100%',
    overflow: 'hidden'
  });

  // Insert wrapper around the current container
  if (c.parentNode) {
    c.parentNode.insertBefore(outer, c);
    outer.appendChild(c);
  }

  // Make the inner container absolutely positioned and transformable
  Object.assign(c.style, {
    position: 'absolute',
    top: '0',
    left: '0',
    transformOrigin: 'top left'
  });

  this.__scaleOuter = outer;
},

  _computeDesignSize() {
    const c = this.cardContainer; if (!c) return { w: 1, h: 1 };
    // If fixed sizing is enabled, use those dimensions as design space
    if (this._isContainerFixed()) {
      const { w, h } = this._resolveFixedSize();
      return { w: Math.max(1, w), h: Math.max(1, h) };
    }
    // Otherwise compute from content extents similar to _resizeContainer
    let maxX = 0, maxY = 0;
    const cards = Array.from(c.querySelectorAll('.card-wrapper'));
    if (!cards.length) {
      const rect = c.getBoundingClientRect();
      return { w: Math.max(1, rect.width || 1), h: Math.max(1, rect.height || 1) };
    }
    for (const wEl of cards) {
      const x = parseFloat(wEl.getAttribute('data-x-raw') || wEl.getAttribute('data-x') || '0') || 0;
      const y = parseFloat(wEl.getAttribute('data-y-raw') || wEl.getAttribute('data-y') || '0') || 0;
      const w = parseFloat(wEl.style.width)  || wEl.getBoundingClientRect().width  || 0;
      const h = parseFloat(wEl.style.height) || wEl.getBoundingClientRect().height || 0;
      const right  = x + w;
      const bottom = y + h;
      if (right  > maxX) maxX = right;
      if (bottom > maxY) maxY = bottom;
    }
    // Round up to grid to avoid half pixels
    const gw = Math.max(1, this.gridSize || 10);
    const outerBuffer = this._getOuterGridBufferPx_?.() || 0;
    maxX = Math.ceil(maxX / gw) * gw;
    maxY = Math.ceil(maxY / gw) * gw;
    return { w: Math.max(1, maxX + outerBuffer), h: Math.max(1, maxY + outerBuffer) };
  },

_startScaleWatch() {
  if (!this.autoResizeCards) return;
  if (this.__scaleRAF) return;

  const tick = () => {
    if (!this.autoResizeCards) {
      this.__scaleRAF = null;
      return;
    }
    if (this.__ddcResizingCard) {
      this.__ddcScaleAfterCardResize = true;
      this.__scaleRAF = requestAnimationFrame(tick);
      return;
    }

    // Safely measure the host width and the available canvas height. Auto mode
    // must react to both axes so the drop area fills the current view.
    let w = 1;
    let h = 1;
    try {
      const rect = this.getBoundingClientRect?.();
      w = Math.max(1, (rect && rect.width) || this.offsetWidth || 1);
    } catch {
      w = Math.max(1, this.offsetWidth || 1);
    }
    try {
      const anchorRect = (this.__scaleOuter || this)?.getBoundingClientRect?.();
      const viewportHeight = Math.max(
        1,
        Number(window.visualViewport?.height || 0) ||
          Number(window.innerHeight || 0) ||
          Number(document.documentElement?.clientHeight || 0) ||
          1
      );
      h = Math.max(1, viewportHeight - Math.max(0, Number(anchorRect?.top || 0) || 0) - 8);
    } catch {
      h = 1;
    }

    const last  = this.__lastScaleW || 0;
    const lastH = this.__lastScaleH || 0;
    const delta = Math.abs(w - last);
    const deltaH = Math.abs(h - lastH);

    // Hysteresis: ignore tiny width changes (scrollbar, rounding, etc.)
    const MIN_DELTA = 20; // px – adjust if you want it more/less sensitive

    if (!last || delta >= MIN_DELTA || !lastH || deltaH >= MIN_DELTA) {
      this.__lastScaleW = w;
      this.__lastScaleH = h;

      const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);

      this._applyAutoScale?.();
    }

    this.__scaleRAF = requestAnimationFrame(tick);
  };

  this.__scaleRAF = requestAnimationFrame(tick);
},


  _stopScaleWatch() {
    if (this.__scaleRAF) {
      try { cancelAnimationFrame(this.__scaleRAF); } catch {}
      this.__scaleRAF = null;
    }
  },




















_setEditControlScale_(scale = 1) {
  const c = this.cardContainer;
  if (!c) return;
  const safeScale = Math.max(0.0001, Number(scale) || 1);
  const inverse = 1 / safeScale;
  const set = (name, value) => c.style.setProperty(name, Number(value).toFixed(5));
  set('--ddc-container-scale', safeScale);
  set('--ddc-edit-ui-scale', inverse);
  set('--ddc-edit-ui-scale-hover', inverse * 1.05);
  set('--ddc-edit-anchor-scale-muted', inverse * 0.76);
  set('--ddc-edit-anchor-scale-idle', inverse * 0.88);
  set('--ddc-edit-anchor-scale-active', inverse * 0.96);
  set('--ddc-edit-anchor-scale-hot', inverse * 1.08);
},


_applyAutoScale() {
  if (this.__ddcMovingCard) {
    this.__ddcScaleAfterCardMove = true;
    return;
  }
  if (this.__ddcResizingCard) {
    this.__ddcScaleAfterCardResize = true;
    return;
  }

  let mode = 'auto';
  try {
    mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
    this.containerSizeMode = mode;
  } catch {}

  const c = this.cardContainer;
  if (!c) return;

  const preview = mode === 'auto' ? this._getViewportPreviewPreset_?.() : null;
  const previewActive = !!(preview?.width && preview?.height);

  try {
    if (this.autoResizeCards || mode === 'auto' || previewActive) {
      if (typeof this._ensureScaleWrapper === 'function') this._ensureScaleWrapper();
    }
  } catch {}

  if (!this.autoResizeCards && mode !== 'auto') {
    const d = (typeof this._computeDesignSize === 'function')
      ? this._computeDesignSize()
      : { w: c.offsetWidth || 1, h: c.offsetHeight || 1 };
    const previewHeight = this._getEffectivePreviewHeight_?.() || 0;
    const isPreview = previewHeight > 0;

    this.removeAttribute('ddc-fixed-ui');
    this.style?.removeProperty?.('--ddc-ui-width');

    const wantW = `${d.w}px`;
    const wantH = `${d.h}px`;
    const sameW = c.style.width === wantW;
    const sameH = c.style.height === wantH;
    const sameT = c.style.transform === 'scale(1)';

    if (!(sameW && sameH && sameT)) {
      c.style.width = wantW;
      c.style.height = wantH;
      c.style.transform = 'scale(1)';
      c.style.transformOrigin = 'top left';
      c.style.position = 'absolute';
      c.style.top = '0';
      c.style.left = '0';

      this.__pointerScaleX = 1;
      this.__pointerScaleY = 1;
      this._setEditControlScale_?.(1);

	      if (this.__scaleOuter) {
	        const pw =
	          (this.parentElement && this.parentElement.getBoundingClientRect?.().width) ||
	          (this.offsetParent && this.offsetParent.getBoundingClientRect?.().width) ||
	          (this.getBoundingClientRect && this.getBoundingClientRect().width) ||
          this.offsetWidth || d.w;
        const outerW = this._getEffectivePreviewWidth_?.(pw) || pw;
        const wantOuterW = `${Math.max(1, outerW)}px`;
	        const wantOuterH = `${Math.max(1, isPreview ? previewHeight : d.h)}px`;
	        if (this.__scaleOuter.style.width  !== wantOuterW) this.__scaleOuter.style.width  = wantOuterW;
	        if (this.__scaleOuter.style.height !== wantOuterH) this.__scaleOuter.style.height = wantOuterH;
	        if (isPreview) this.__scaleOuter.style.overflow = '';
	        this.__scaleOuter.style.overflowX = d.w > outerW ? 'auto' : 'hidden';
	        this.__scaleOuter.style.overflowY = isPreview ? 'auto' : 'hidden';
	        this.__scaleOuter.style.webkitOverflowScrolling = isPreview ? 'touch' : '';
        this.__scaleOuter.style.overscrollBehavior = isPreview ? 'contain' : '';
        this.__scaleOuter.style.marginInline = this._getViewportPreviewPreset_?.() ? 'auto' : '';
        this.__scaleOuter.style.maxWidth = this._getViewportPreviewPreset_?.() ? '100%' : '';
        this._applyPreviewDeviceFrame_?.(outerW, isPreview ? previewHeight : d.h);
      }
    }

    try { this._syncTabsWidth_?.(); } catch {}
    try { this._scheduleTextResizeLockRefresh_?.(); } catch {}
    try { this._syncPreviewOutsideCards_?.(); } catch {}
    try { this._scheduleEmptyPlaceholderCenter_?.(); } catch {}
    return;
  }

  this.removeAttribute('ddc-fixed-ui');
  this.style?.removeProperty?.('--ddc-ui-width');

  const d = (typeof this._computeDesignSize === 'function')
    ? this._computeDesignSize()
    : { w: c.offsetWidth || 1, h: c.offsetHeight || 1 };

  const pw =
    (this.parentElement && this.parentElement.getBoundingClientRect?.().width) ||
    (this.offsetParent && this.offsetParent.getBoundingClientRect?.().width) ||
    (this.getBoundingClientRect && this.getBoundingClientRect().width) ||
    this.offsetWidth || d.w;

  const autoViewport = this._getAvailableAutoCanvasViewport_?.(pw, d.h) || {
    width: Math.max(1, this._getEffectivePreviewWidth_?.(pw) || pw),
    height: Math.max(1, d.h || 1),
    isPreview: false,
  };
  const availableW = Math.max(1, Number(autoViewport.width || 1) || 1);
  const availableH = Math.max(1, Number(autoViewport.height || d.h || 1) || 1);
  const hasPreview = !!autoViewport.isPreview;
  const profile = String(
    preview?.id ||
      this._getRequestedResponsiveProfile_?.() ||
      this._activeResponsiveProfile ||
      this._getActualResponsiveProfile_?.() ||
      'desktop'
  ).toLowerCase();
  const isMobileAutoContext = profile === 'mobile';
  const minimumCanvas = this._getAutoCanvasMinimumDesignSize_?.({ preview, includeEditBleed: true }) || { width: 1280, height: 720 };
  const scaleCanvas = this._getAutoCanvasMinimumDesignSize_?.({ preview, includeEditBleed: false }) || minimumCanvas;
  const minimumW = Math.max(1, Number(minimumCanvas.width ?? 1280) || 1);
  const minimumH = Math.max(1, Number(minimumCanvas.height ?? 720) || 1);
  const scaleMinimumW = Math.max(1, Number(scaleCanvas.width ?? minimumW) || minimumW);
  const scaleMinimumH = Math.max(1, Number(scaleCanvas.height ?? minimumH) || minimumH);

  const unscaledPreview = this._shouldUseUnscaledPreviewCanvas_?.();
	  if (unscaledPreview) {
	    const targetW = Math.max(1, d.w, minimumW, availableW);
	    const targetH = Math.max(1, d.h, minimumH, availableH);
	    if (this.__scaleOuter) {
	      this.__scaleOuter.style.width = `${availableW}px`;
	      this.__scaleOuter.style.height = `${availableH}px`;
	      if (hasPreview) this.__scaleOuter.style.overflow = '';
	      this.__scaleOuter.style.overflowX = 'auto';
	      this.__scaleOuter.style.overflowY = hasPreview ? 'auto' : 'hidden';
	      this.__scaleOuter.style.webkitOverflowScrolling = 'touch';
      this.__scaleOuter.style.overscrollBehavior = hasPreview ? 'contain' : '';
      this.__scaleOuter.style.marginInline = 'auto';
      this.__scaleOuter.style.maxWidth = '100%';
      this._applyPreviewDeviceFrame_?.(availableW, availableH);
    }

    c.style.width = `${targetW}px`;
    c.style.height = `${targetH}px`;
    c.style.transform = 'scale(1)';
    c.style.transformOrigin = 'top left';
    c.style.position = 'absolute';
    c.style.top = '0';
    c.style.left = '0';
    c.style.setProperty('--ddc-scale', '1');
    this.__pointerScaleX = 1;
    this.__pointerScaleY = 1;
    this._setEditControlScale_?.(1);
    this._applyMobileTextAssist_?.(1);
    this._syncTabsWidth_?.();
    this._syncLeftRailViewportPosition_?.();
    try { this._scheduleTextResizeLockRefresh_?.(); } catch {}
    try { this._requestGridButtonsUpdateSoon?.(); } catch {}
    try { this._syncPreviewOutsideCards_?.(); } catch {}
    try { this._scheduleEmptyPlaceholderCenter_?.(); } catch {}
    return;
  }

  const scaleBasisW = isMobileAutoContext
    ? scaleMinimumW
    : Math.max(1, d.w, scaleMinimumW);
  const scaleBasisH = isMobileAutoContext
    ? scaleMinimumH
    : Math.max(1, d.h, scaleMinimumH);
  const baseScale = availableW / scaleBasisW;
  const minimumScale = this._getAutoCanvasMinimumScale_?.(scaleBasisW, scaleBasisH, availableW, scaleCanvas) || 0.0001;
  const mobilePlan = (!hasPreview && !isMobileAutoContext && this._isMobileOptimizeActive_?.())
    ? this._getMobileScalePlan_?.(scaleBasisW, baseScale)
    : null;
  const preferredScale = Math.max(
    minimumScale,
    Number(baseScale) || 0,
    Number(mobilePlan?.scale || 0) || 0
  );
  const maxScale = isMobileAutoContext ? 1.2 : Number.POSITIVE_INFINITY;
  const scale = Math.max(0.0001, Math.min(maxScale, preferredScale || 1));
  const targetDesignW = Math.max(1, d.w, minimumW, availableW / scale);
  const targetDesignH = Math.max(1, d.h, minimumH, availableH / scale);
  const visualW = Math.max(availableW, targetDesignW * scale);
  const visualH = Math.max(availableH, targetDesignH * scale);

	  if (this.__scaleOuter) {
	    this.__scaleOuter.style.width  = `${availableW}px`;
	    this.__scaleOuter.style.height = `${Math.max(1, hasPreview ? availableH : visualH)}px`;
	    if (hasPreview) this.__scaleOuter.style.overflow = '';
	    this.__scaleOuter.style.overflowX = (mobilePlan?.allowPanX || visualW > availableW + 1) ? 'auto' : 'hidden';
	    this.__scaleOuter.style.overflowY = hasPreview ? 'auto' : 'hidden';
    this.__scaleOuter.style.webkitOverflowScrolling = (hasPreview || mobilePlan?.allowPanX) ? 'touch' : '';
    this.__scaleOuter.style.overscrollBehavior = hasPreview ? 'contain' : '';
    this.__scaleOuter.style.marginInline = this._getViewportPreviewPreset_?.() ? 'auto' : '';
    this.__scaleOuter.style.maxWidth = this._getViewportPreviewPreset_?.() ? '100%' : '';
    this._applyPreviewDeviceFrame_?.(availableW, hasPreview ? availableH : visualH);
  }

  c.style.width = `${targetDesignW}px`;
  c.style.height = `${targetDesignH}px`;
  c.style.transform = `scale(${scale})`;
  c.style.transformOrigin = 'top left';
  c.style.position = 'absolute';
  c.style.top = '0';
  c.style.left = '0';

  this.__pointerScaleX = scale || 1;
  this.__pointerScaleY = scale || 1;
  this._setEditControlScale_?.(scale || 1);

  try { this._syncTabsWidth_?.(); } catch {}
  try { this._layoutYtBackground_?.(); } catch {}
  try { this._scheduleTextResizeLockRefresh_?.(); } catch {}
  try { this._requestGridButtonsUpdateSoon?.(); } catch {}
  try { this._syncPreviewOutsideCards_?.(); } catch {}
  try { this._scheduleEmptyPlaceholderCenter_?.(); } catch {}
},

_applyAutoFillNoScale() {
  if (this.__ddcMovingCard) {
    this.__ddcScaleAfterCardMove = true;
    return;
  }
  if (this.__ddcResizingCard) {
    this.__ddcScaleAfterCardResize = true;
    return;
  }
  if (this.__applyingAutoFill) return;
  this.__applyingAutoFill = true;
  try {
    // Ensure the card container is wrapped in a scale wrapper so that
    // horizontal scrolling is isolated to the wrapper. In dynamic mode
    // this wrapper is created by _ensureScaleWrapper(); replicate that
    // behavior here so toolbar and tabs remain outside of the scrolling
    // region but can still track horizontal movement.  If the wrapper
    // already exists, this call is a no-op.
    try { this._ensureScaleWrapper?.(); } catch {}
    const outer = this.__scaleOuter || this.shadowRoot?.querySelector?.('.ddc-scale-outer') || this;
    const inner = this.cardContainer || this.shadowRoot?.querySelector?.('#cardContainer');
    if (!outer || !inner) return;
    const previewHeight = this._getEffectivePreviewHeight_?.() || 0;
    const previewActive = previewHeight > 0;

    // Enable scrolling within the scale wrapper when the card
    // content exceeds the viewport.  We set overflow to "auto" to
    // produce a single scrollbar for both axes; however, we compute
    // the wrapper’s height such that vertical scrolling happens within
    // the wrapper rather than the page.  This ensures the toolbar and
    // tabs remain fixed while the user scrolls the canvas.
    // In auto mode we want horizontal scrolling within the outer wrapper
    // but vertical scrolling should happen at the page level (not within
    // the wrapper).  Mimic dynamic mode by hiding vertical overflow and
    // enabling horizontal overflow.  Setting overflow to hidden first
    // establishes the default, then overflowX is overridden below.
    const hostW =
      (this.parentElement && this.parentElement.getBoundingClientRect?.().width) ||
      (this.offsetParent && this.offsetParent.getBoundingClientRect?.().width) ||
      (this.getBoundingClientRect && this.getBoundingClientRect().width) ||
      this.offsetWidth ||
      this.cardContainer?.offsetWidth ||
      1;
    const autoViewport = this._getAvailableAutoCanvasViewport_?.(hostW, inner?.offsetHeight || 1) || {
      width: this._getEffectivePreviewWidth_?.(hostW) || hostW,
      height: previewHeight || inner?.offsetHeight || 1,
      isPreview: previewActive,
    };
    const previewWidth = Math.max(1, Number(autoViewport.width || 1) || 1);
    const availableScreenH = Math.max(1, Number(autoViewport.height || previewHeight || 1) || 1);
    outer.style.overflow = 'hidden';
    outer.style.overflowX = 'auto';
    outer.style.overflowY = previewActive ? 'auto' : 'hidden';
    outer.style.width = previewActive ? `${Math.max(1, previewWidth)}px` : '100%';
    outer.style.marginInline = previewActive ? 'auto' : '';
    outer.style.maxWidth = previewActive ? '100%' : '';

    // If HA gives us a tiny height, expand to remaining viewport height (not to trigger loops).
    let vb = outer.getBoundingClientRect();
    let availW = Math.max(1, Math.round(vb.width  || 0));
    let availH = Math.max(1, Math.round(availableScreenH || vb.height || 0));
    if (availH < 150) {
      const top = Math.max(0, Math.round(vb.top || 0));
      const viewportH = Math.max(1, window.innerHeight || document.documentElement.clientHeight || 0);
      const remaining = Math.max(1, viewportH - top - 8);
      if (Math.abs(remaining - availH) > 4) {
        outer.style.height = remaining + 'px';
        // re-measure
        vb = outer.getBoundingClientRect();
        availW = Math.max(1, Math.round(vb.width  || 0));
        availH = Math.max(1, Math.round(vb.height || 0));
      }
    }

    // Compute natural content extents just like dynamic
    let maxX = 0, maxY = 0;
    const cards = Array.from(inner.querySelectorAll('.card-wrapper'));
    if (cards.length) {
      for (const w of cards) {
        const x = parseFloat(w.getAttribute('data-x-raw') || w.getAttribute('data-x') || '0') || 0;
        const y = parseFloat(w.getAttribute('data-y-raw') || w.getAttribute('data-y') || '0') || 0;
        const width  = parseFloat(w.style.width)  || w.getBoundingClientRect().width  || 0;
        const height = parseFloat(w.style.height) || w.getBoundingClientRect().height || 0;
        const right  = x + width;
        const bottom = y + height;
        if (right  > maxX) maxX = right;
        if (bottom > maxY) maxY = bottom;
      }
    } else {
      maxX = inner.scrollWidth  || inner.offsetWidth  || availW;
      maxY = inner.scrollHeight || inner.offsetHeight || availH;
    }

    const gs = Number(this.gridSize || 1) || 1;
    const outerBuffer = this._getOuterGridBufferPx_?.() || 0;
    const minimumCanvas = this._getAutoCanvasMinimumDesignSize_?.() || { width: 1280, height: 720 };
    const minimumW = Math.max(1, Number(minimumCanvas.width ?? 1280) || 1);
    const minimumH = Math.max(1, Number(minimumCanvas.height ?? 720) || 1);
    const natW = Math.max(1, Math.round(Math.ceil(maxX/gs) * gs) + outerBuffer);
    const natH = Math.max(1, Math.round(Math.ceil(maxY/gs) * gs) + outerBuffer);

    // Strict rule:
    // - If viewport > natural size, expand inner to viewport (fills space).
    // - Else, inner stays at natural size (so user can scroll to reach overflow).
    const screenAvailW = previewActive ? Math.max(1, previewWidth) : availW;
    const screenAvailH = Math.max(1, availableScreenH || (previewActive ? previewHeight : availH));
    const targetW = Math.max(minimumW, screenAvailW, natW);
    const targetH = Math.max(minimumH, screenAvailH, natH);

    // Apply: NO SCALE. Keep 1:1 pixels so positions are exact.
    inner.style.transform = 'none';
    inner.style.transformOrigin = 'left top';
    this.__pointerScaleX = 1;
    this.__pointerScaleY = 1;
    this._setEditControlScale_?.(1);
    inner.style.width  = `${targetW}px`;
    inner.style.height = `${targetH}px`;
    // In strict auto mode, update the outer container height so that
    // vertical scrolling is isolated to the wrapper rather than the page.
    // We calculate the height available beneath the wrapper's top edge and
    // clamp the wrapper height to that value.  This prevents the wrapper
    // from growing taller than the viewport and avoids a secondary page
    // scrollbar.  When the natural content height exceeds this height,
    // overflow:auto on the wrapper will provide scrollbars.
    if (outer) {
      if (previewActive) {
        outer.style.height = `${previewHeight}px`;
        outer.style.webkitOverflowScrolling = 'touch';
        outer.style.overscrollBehavior = 'contain';
      } else {
        outer.style.height = `${targetH}px`;
        outer.style.webkitOverflowScrolling = '';
        outer.style.overscrollBehavior = '';
      }
      this._applyPreviewDeviceFrame_?.(previewActive ? previewWidth : 0, previewActive ? previewHeight : 0);
    }
    inner.style.position = inner.style.position || 'absolute';
    inner.style.top = '0';
    inner.style.left = '0';

    // In auto mode, the tabs bar should span the viewport width (not the full card width).
    const tb = this.tabsBar;
    if (tb && !this._isSidebarNavigationActive_?.()) {
      tb.style.width = '100%';
      tb.style.maxWidth = '100%';
    }
    try { this._scheduleTextResizeLockRefresh_?.(); } catch {}
  } finally {
    // Recompute the background (e.g. YouTube video) sizing based on the
    // newly updated card dimensions.  Without this call the video
    // background may retain the size from a previous layout state and
    // appear cropped or misaligned in auto mode.
    try { this._layoutYtBackground_?.(); } catch {}

    // Ensure the grid overlay updates to reflect any changes in natural
    // size or viewport fills.  Without this call the overlay may not
    // redraw until the next interaction, leading to partially rendered
    // selection squares after adding a card in auto mode.
    try { this._requestGridButtonsUpdateSoon?.(); } catch {}
    requestAnimationFrame(() => { this.__applyingAutoFill = false; });
  }
},
};

export function installScaleManagerMethods(proto) {
  for (const [name, value] of Object.entries(scaleManagerMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
