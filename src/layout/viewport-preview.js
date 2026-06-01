/*
 * Responsive viewport preview controls.
 *
 * This module manages live/desktop/tablet/mobile preview state, custom preview dimensions, orientation
 * swapping, and synchronization between preview controls and responsive layout keys.
 */

/* Viewport preview, device frame, responsive viewport fields, and mobile scaling helpers. */
const viewportPreviewMethods = {
  _applyGridVars() {
    const sz = `${this.gridSize || 10}px`;
    // host (inherits down)
    this.style.setProperty('--ddc-grid-size', sz);
    // container (extra robust)
    this.cardContainer?.style.setProperty('--ddc-grid-size', sz);
  },

  _getViewportPreviewPreset_() {
    const mode = String(this.viewportPreviewMode || 'live').toLowerCase();
    const sizeMode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
    if (sizeMode !== 'auto') return null;
    if (!this.editMode || mode === 'live') return null;
    if (!this._responsiveProfileKeys_().includes(mode)) return null;
    const orientation = this._getRequestedResponsiveOrientation_?.(mode) || 'landscape';
    const viewport = this._getResponsiveViewportProfile_(mode, orientation);
    return {
      id: mode,
      width: viewport.width,
      height: viewport.height,
      label: this._getResponsiveProfileLabel_(mode),
      orientation,
    };
  },

  _isExplicitViewportPreview_() {
    return !!this._getViewportPreviewPreset_?.();
  },

  _requestPreviewOutsideCardsSync_() {
    if (this.__previewOutsideCardsRaf) return;
    const raf = typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame
      : (cb) => setTimeout(cb, 16);
    this.__previewOutsideCardsRaf = raf(() => {
      this.__previewOutsideCardsRaf = null;
      this._syncPreviewOutsideCards_?.();
    });
  },

  _syncPreviewOutsideCards_() {
    try {
      const wraps = Array.from(this.cardContainer?.querySelectorAll?.('.card-wrapper:not(.ddc-placeholder)') || []);
      const root = this.rootEl;
      const preview = this._getViewportPreviewPreset_?.();
      if (!this.editMode || !preview?.width || !preview?.height) {
        wraps.forEach((wrap) => wrap.classList?.remove?.('ddc-preview-outside-active'));
        root?.classList?.remove?.('ddc-preview-has-outside-cards');
        return false;
      }
  
      const activeW = Math.max(1, Number(preview.width) || 1);
      const activeH = Math.max(1, Number(preview.height) || 1);
      const scale = Math.max(0.0001, Number(this.__pointerScaleX || this.__pointerScaleY || 1) || 1);
      let hasOutside = false;
  
      wraps.forEach((wrap) => {
        if (!wrap) return;
        if (!this._isWrapperVisibleForOverlap_?.(wrap)) {
          wrap.classList?.remove?.('ddc-preview-outside-active');
          return;
        }
  
        const x = parseFloat(wrap.getAttribute('data-x-raw') || wrap.getAttribute('data-x') || '0') || 0;
        const y = parseFloat(wrap.getAttribute('data-y-raw') || wrap.getAttribute('data-y') || '0') || 0;
        const rect = wrap.getBoundingClientRect?.();
        const width = Math.max(
          0,
          parseFloat(wrap.style.width) ||
            Number(wrap.offsetWidth || 0) ||
            ((Number(rect?.width || 0) || 0) / scale) ||
            0
        );
        const height = Math.max(
          0,
          parseFloat(wrap.style.height) ||
            Number(wrap.offsetHeight || 0) ||
            ((Number(rect?.height || 0) || 0) / scale) ||
            0
        );
        const outside = x < -1 || y < -1 || (x + width) > activeW + 1 || (y + height) > activeH + 1;
        wrap.classList?.toggle?.('ddc-preview-outside-active', outside);
        if (outside) hasOutside = true;
      });
  
      root?.classList?.toggle?.('ddc-preview-has-outside-cards', hasOutside);
      return hasOutside;
    } catch {
      return false;
    }
  },

  _getViewportMetrics_() {
    const preview = this._getViewportPreviewPreset_?.();
    if (preview?.width && preview?.height) {
      return {
        width: preview.width,
        height: preview.height,
        shortEdge: Math.min(preview.width, preview.height),
        longEdge: Math.max(preview.width, preview.height),
        isPortrait: preview.height >= preview.width,
        preview: preview.id,
      };
    }
    return this._getRealViewportMetrics_?.() || {
      width: 1,
      height: 1,
      shortEdge: 1,
      longEdge: 1,
      isPortrait: true,
    };
  },

  _getEffectivePreviewWidth_(measuredWidth = 1) {
    const width = Math.max(1, Number(measuredWidth || 1) || 1);
    const preview = this._getViewportPreviewPreset_?.();
    if (!preview?.width) return width;
    const previewId = String(preview?.id || '').toLowerCase();
    const gutter =
      previewId === 'desktop'
        ? (width <= 1600 ? 72 : Math.min(680, width * 0.34))
        : previewId === 'tablet'
          ? (width <= 1200 ? 64 : Math.min(460, width * 0.28))
          : (width <= 720 ? 24 : Math.min(120, width * 0.12));
    const room = Math.max(1, width - gutter);
    return Math.max(1, Math.min(room, preview.width));
  },

  _getEffectivePreviewHeight_() {
    const preview = this._getViewportPreviewPreset_?.();
    if (!preview?.height) return 0;
    return Math.max(1, Number(preview.height) || 1);
  },

  _getAvailableAutoCanvasViewport_(measuredWidth = 1, fallbackHeight = 1) {
    const rawWidth = Math.max(1, this._getEffectivePreviewWidth_?.(measuredWidth) || measuredWidth || 1);
    const previewHeight = this._getEffectivePreviewHeight_?.() || 0;
    if (previewHeight > 0) {
      return { width: rawWidth, height: previewHeight, isPreview: true };
    }
    const maxLiveWidth = this._normalizeAutoViewportMaxWidth_?.(this.autoViewportMaxWidth ?? this._config?.auto_viewport_max_width) || 0;
    const width = maxLiveWidth > 0 ? Math.min(rawWidth, maxLiveWidth) : rawWidth;
  
    let height = 0;
    try {
      const anchor = this.__scaleOuter || this.cardContainer || this;
      const rect = anchor?.getBoundingClientRect?.();
      const viewportHeight = Math.max(
        1,
        Number(window.visualViewport?.height || 0) ||
          Number(window.innerHeight || 0) ||
          Number(document.documentElement?.clientHeight || 0) ||
          Number(fallbackHeight || 0) ||
          1
      );
      const top = Math.max(0, Number(rect?.top || 0) || 0);
      const remaining = viewportHeight - top - 8;
      if (Number.isFinite(remaining) && remaining > 0) height = remaining;
    } catch {}
  
    return {
      width,
      height: Math.max(1, Number(height || fallbackHeight || 1) || 1),
      isPreview: false,
    };
  },

  _getAutoCanvasMinimumDesignSize_(opts = {}) {
    const preview = opts?.preview || this._getViewportPreviewPreset_?.();
    const includeEditBleed = opts?.includeEditBleed !== false;
    const profile = String(
      preview?.id ||
        this._getRequestedResponsiveProfile_?.() ||
        this._activeResponsiveProfile ||
        this._getActualResponsiveProfile_?.() ||
        'desktop'
    ).toLowerCase();
    const isMobile = profile === 'mobile';
    const orientation =
      preview?.orientation ||
      this._getRequestedResponsiveOrientation_?.(profile) ||
      (profile === 'desktop' ? 'landscape' : 'portrait');
    let viewport = null;
    try {
      viewport = this._getResponsiveViewportProfile_?.(profile, orientation) || null;
    } catch {}
  
    let width = Number(viewport?.width || preview?.width || 0) || 0;
    let height = Number(viewport?.height || preview?.height || 0) || 0;
  
    if (isMobile && (!width || !height)) {
      try {
        const orientation = this._getRequestedResponsiveOrientation_?.('mobile') || 'portrait';
        const viewport = this._getResponsiveViewportProfile_?.('mobile', orientation);
        width = Math.max(1, Number(viewport?.width || width || 0) || 0);
        height = Math.max(1, Number(viewport?.height || height || 0) || 0);
      } catch {}
    }
  
    if (!width || !height) {
      width = isMobile ? Number(preview?.width || 0) || 0 : 1280;
      height = isMobile ? Number(preview?.height || 0) || 0 : 720;
    }
  
    if (!isMobile) {
      width = Math.max(1280, width);
      height = Math.max(720, height);
    }
  
    // While editing, keep some canvas outside the active preview viewport so
    // cards can be positioned just beyond the live frame without changing the
    // frame itself. Mobile is still exempt from the 720p baseline.
    if (includeEditBleed && (this.editMode || this.isEditing) && preview?.width && preview?.height) {
      const previewW = Math.max(1, Number(preview.width) || 1);
      const previewH = Math.max(1, Number(preview.height) || 1);
      const bleedX = Math.min(360, Math.max(160, previewW * 0.25));
      const bleedY = Math.min(260, Math.max(120, previewH * 0.22));
      width = Math.max(width, previewW + bleedX);
      height = Math.max(height, previewH + bleedY);
    }
  
    return { width, height };
  },

  _getAutoCanvasMinimumScale_(designWidth = 1, designHeight = 1, viewportWidth = 0, minimumSize = null) {
    const minimum = minimumSize || this._getAutoCanvasMinimumDesignSize_?.({ includeEditBleed: false }) || { width: 1280, height: 720 };
    const minWidth = Math.max(0, Number(minimum.width ?? 1280) || 0);
    const minHeight = Math.max(0, Number(minimum.height ?? 720) || 0);
    if (minWidth <= 0 && minHeight <= 0) return 0.0001;
    const width = Math.max(1, Number(designWidth || 1) || 1);
    const height = Math.max(1, Number(designHeight || 1) || 1);
    const viewportW = Math.max(0, Number(viewportWidth || 0) || 0);
    if (viewportW > 0 && minWidth > 0) return Math.max(0.0001, Math.min(1, viewportW / minWidth));
    return Math.max(
      0.0001,
      Math.min(
        1,
        Math.max(
          minWidth / width,
          minHeight / height
        )
      )
    );
  },

  _getPreviewDeviceFrameOrientation_(deviceId = null, width = 0, height = 0, forcedOrientation = null) {
    const id = String(deviceId || this._getViewportPreviewPreset_?.()?.id || '').toLowerCase();
    if (id === 'desktop') return 'landscape';
    if (forcedOrientation) return this._normalizeResponsiveOrientation_(id, forcedOrientation);
    const w = Math.max(1, Number(width || this._getViewportPreviewPreset_?.()?.width || 1) || 1);
    const h = Math.max(1, Number(height || this._getViewportPreviewPreset_?.()?.height || 1) || 1);
    return h >= w ? 'portrait' : 'landscape';
  },

  _rotatePreviewDeviceFrameConfig_(config = null, targetOrientation = 'portrait') {
    if (!config) return null;
    const baseOrientation = String(
      config.viewportOrientation
      || ((Number(config.innerHeight || 0) || 0) >= (Number(config.innerWidth || 0) || 0) ? 'portrait' : 'landscape')
    ).toLowerCase();
    const orientation = String(targetOrientation || baseOrientation).toLowerCase();
  
    const base = {
      ...config,
      baseViewportOrientation: baseOrientation,
      orientation,
      displayAssetWidth: Number(config.assetWidth || 1280) || 1280,
      displayAssetHeight: Number(config.assetHeight || 960) || 960,
      displayViewportLeft: Number(config.measuredViewportLeft || 0) || 0,
      displayViewportTop: Number(config.measuredViewportTop || 0) || 0,
      displayViewportWidth: Number(config.measuredViewportWidth || 1) || 1,
      displayViewportHeight: Number(config.measuredViewportHeight || 1) || 1,
      assetRotation: 0,
      viewportInnerWidth: Math.max(1, Number(config.innerWidth || 1) || 1),
      viewportInnerHeight: Math.max(1, Number(config.innerHeight || 1) || 1),
    };
  
    if (orientation === baseOrientation || base.id === 'desktop') return base;
  
    const assetWidth = Math.max(1, Number(config.assetWidth || 1280) || 1280);
    const assetHeight = Math.max(1, Number(config.assetHeight || 960) || 960);
    const viewportLeft = Math.max(0, Number(config.measuredViewportLeft || 0) || 0);
    const viewportTop = Math.max(0, Number(config.measuredViewportTop || 0) || 0);
    const viewportWidth = Math.max(1, Number(config.measuredViewportWidth || 1) || 1);
    const viewportHeight = Math.max(1, Number(config.measuredViewportHeight || 1) || 1);
  
    return {
      ...base,
      orientation,
      displayAssetWidth: assetHeight,
      displayAssetHeight: assetWidth,
      displayViewportLeft: Math.max(0, assetHeight - (viewportTop + viewportHeight)),
      displayViewportTop: viewportLeft,
      displayViewportWidth: viewportHeight,
      displayViewportHeight: viewportWidth,
      assetRotation: 90,
      viewportInnerWidth: Math.max(1, Number(config.innerHeight || 1) || 1),
      viewportInnerHeight: Math.max(1, Number(config.innerWidth || 1) || 1),
    };
  },

  _lockPreviewDeviceFrameViewportRect_(config = null) {
    if (!config) return null;
    const next = { ...config };
    const innerWidth = Math.max(1, Number(next.viewportInnerWidth || next.innerWidth || 1) || 1);
    const innerHeight = Math.max(1, Number(next.viewportInnerHeight || next.innerHeight || 1) || 1);
    const targetRatio = innerWidth / Math.max(1, innerHeight);
    const currentWidth = Math.max(1, Number(next.displayViewportWidth || next.measuredViewportWidth || 1) || 1);
    const currentHeight = Math.max(1, Number(next.displayViewportHeight || next.measuredViewportHeight || 1) || 1);
    const widthFromHeight = Math.max(1, currentHeight * targetRatio);
    const heightFromWidth = Math.max(1, currentWidth / Math.max(0.0001, targetRatio));
    const widthDelta = Math.abs(widthFromHeight - currentWidth);
    const heightDelta = Math.abs(heightFromWidth - currentHeight);
  
    if (widthDelta < heightDelta) {
      const lockedWidth = Math.max(1, Math.round(widthFromHeight));
      next.displayViewportWidth = lockedWidth;
      next.measuredViewportWidth = lockedWidth;
      next.displayViewportHeight = currentHeight;
      next.measuredViewportHeight = currentHeight;
    } else {
      const lockedHeight = Math.max(1, Math.round(heightFromWidth));
      next.displayViewportWidth = currentWidth;
      next.measuredViewportWidth = currentWidth;
      next.displayViewportHeight = lockedHeight;
      next.measuredViewportHeight = lockedHeight;
    }
  
    return next;
  },

  _getPreviewDeviceFrameLock_(deviceId = null, width = 0, height = 0, opts = {}) {
    const config = this._getPreviewDeviceFrameConfig_?.(deviceId, width, height, opts);
    if (!config) return null;
    const viewportWidth = Math.max(1, Number(config.viewportInnerWidth || config.innerWidth || width || 1) || 1);
    const viewportHeight = Math.max(1, Number(config.viewportInnerHeight || config.innerHeight || height || 1) || 1);
    return {
      id: config.id,
      orientation: config.orientation || 'landscape',
      width: viewportWidth,
      height: viewportHeight,
      ratio: Math.max(0.0001, viewportWidth / Math.max(1, viewportHeight)),
    };
  },

  _getPreviewDeviceFrameConfig_(deviceId = null, screenWidth = 0, screenHeight = 0, opts = {}) {
    const id = String(deviceId || this._getViewportPreviewPreset_?.()?.id || '').toLowerCase();
    const presets = {
      mobile: {
        id: 'mobile',
        imageUrl: 'https://i.postimg.cc/9QgSw3WG/iphone-frame.png',
        assetWidth: 1280,
        assetHeight: 960,
        viewportOrientation: 'portrait',
        measuredViewportLeft: 474,
        measuredViewportTop: 120,
        measuredViewportWidth: 332,
        measuredViewportHeight: 721,
        innerWidth: 500,
        innerHeight: 1080,
      },
      tablet: {
        id: 'tablet',
        imageUrl: 'https://i.postimg.cc/137TVx9w/ipad_frame.png',
        assetWidth: 1280,
        assetHeight: 960,
        viewportOrientation: 'landscape',
        measuredViewportLeft: 207,
        measuredViewportTop: 155,
        measuredViewportWidth: 866,
        measuredViewportHeight: 651,
        innerWidth: 1295,
        innerHeight: 923,
      },
      desktop: {
        id: 'desktop',
        imageUrl: 'https://i.postimg.cc/DwpD4V21/macbook_frame.png',
        assetWidth: 1280,
        assetHeight: 960,
        viewportOrientation: 'landscape',
        measuredViewportLeft: 162,
        measuredViewportTop: 181,
        measuredViewportWidth: 956,
        measuredViewportHeight: 598,
        innerWidth: 1430,
        innerHeight: 896,
      },
    };
    const base = presets[id] || null;
    if (!base) return null;
    const orientation = this._getPreviewDeviceFrameOrientation_?.(id, screenWidth, screenHeight, opts?.orientation) || base.viewportOrientation || 'landscape';
    const rotated = this._rotatePreviewDeviceFrameConfig_?.(base, orientation) || base;
    if (this._isResponsiveViewportAspectLocked_?.(id) === false && Number(screenWidth || 0) > 0 && Number(screenHeight || 0) > 0) {
      return {
        ...rotated,
        viewportInnerWidth: Math.max(1, Number(screenWidth || 1) || 1),
        viewportInnerHeight: Math.max(1, Number(screenHeight || 1) || 1),
      };
    }
    return this._lockPreviewDeviceFrameViewportRect_?.(rotated) || rotated;
  },

  _getPreviewDeviceFrameMetrics_(screenWidth = 0, screenHeight = 0, deviceId = null, opts = {}) {
    const config = this._getPreviewDeviceFrameConfig_?.(deviceId, screenWidth, screenHeight, opts);
    if (!config) return null;
  
    const safeScreenWidth = Math.max(1, Number(screenWidth || this._getViewportPreviewPreset_?.()?.width || 1) || 1);
    const safeScreenHeight = Math.max(1, Number(screenHeight || this._getViewportPreviewPreset_?.()?.height || 1) || 1);
    const displayWidth = Math.max(1, Number(opts?.displayWidth || safeScreenWidth) || safeScreenWidth);
    const displayHeight = Math.max(1, Number(opts?.displayHeight || safeScreenHeight) || safeScreenHeight);
    const innerWidth = Math.max(1, Number(config.viewportInnerWidth || config.innerWidth || safeScreenWidth) || safeScreenWidth);
    const innerHeight = Math.max(1, Number(config.viewportInnerHeight || config.innerHeight || safeScreenHeight) || safeScreenHeight);
    const measuredViewportWidth = Math.max(1, Number(config.displayViewportWidth || config.measuredViewportWidth || safeScreenWidth) || safeScreenWidth);
    const measuredViewportHeight = Math.max(1, Number(config.displayViewportHeight || config.measuredViewportHeight || safeScreenHeight) || safeScreenHeight);
    const measuredViewportLeft = Math.max(0, Number(config.displayViewportLeft || config.measuredViewportLeft || 0) || 0);
    const measuredViewportTop = Math.max(0, Number(config.displayViewportTop || config.measuredViewportTop || 0) || 0);
  
    const assetWidth = Math.max(1, Number(config.assetWidth || 1280) || 1280);
    const assetHeight = Math.max(1, Number(config.assetHeight || 960) || 960);
    const displayAssetWidth = Math.max(1, Number(config.displayAssetWidth || assetWidth) || assetWidth);
    const displayAssetHeight = Math.max(1, Number(config.displayAssetHeight || assetHeight) || assetHeight);
    const intrinsicScaleX = measuredViewportWidth / innerWidth;
    const intrinsicScaleY = measuredViewportHeight / innerHeight;
    const intrinsicScale = Math.max(
      0.0001,
      ((Number.isFinite(intrinsicScaleX) ? intrinsicScaleX : 0) + (Number.isFinite(intrinsicScaleY) ? intrinsicScaleY : 0)) / 2
        || intrinsicScaleX
        || intrinsicScaleY
        || 1
    );
    const frameScale = Math.max(0.0001, displayWidth / measuredViewportWidth || 1);
    const frameHeightScale = Math.max(0.0001, displayHeight / measuredViewportHeight || frameScale);
    const logicalAssetWidth = Math.max(1, displayAssetWidth / intrinsicScale);
    const logicalAssetHeight = Math.max(1, displayAssetHeight / intrinsicScale);
    const logicalOriginalAssetWidth = Math.max(1, assetWidth / intrinsicScale);
    const logicalOriginalAssetHeight = Math.max(1, assetHeight / intrinsicScale);
    const renderedViewportWidth = displayWidth;
    const renderedViewportHeight = displayHeight;
    const viewportOffsetX = 0;
    const viewportOffsetY = 0;
    const frameWidth = Math.max(1, displayAssetWidth * frameScale);
    const frameHeight = Math.max(1, displayAssetHeight * frameHeightScale);
    const renderedAssetWidth = Math.max(1, assetWidth * frameScale);
    const renderedAssetHeight = Math.max(1, assetHeight * frameHeightScale);
    const renderedViewportLeft = Math.max(0, measuredViewportLeft * frameScale);
    const renderedViewportTop = Math.max(0, measuredViewportTop * frameHeightScale);
  
    return {
      ...config,
      screenWidth: safeScreenWidth,
      screenHeight: safeScreenHeight,
      displayWidth,
      displayHeight,
      assetWidth,
      assetHeight,
      displayAssetWidth,
      displayAssetHeight,
      innerWidth,
      innerHeight,
      measuredViewportLeft,
      measuredViewportTop,
      measuredViewportWidth,
      measuredViewportHeight,
      viewportLeft: measuredViewportLeft,
      viewportTop: measuredViewportTop,
      viewportWidth: innerWidth,
      viewportHeight: innerHeight,
      logicalAssetWidth,
      logicalAssetHeight,
      intrinsicScaleX,
      intrinsicScaleY,
      intrinsicScale,
      renderScale: frameScale,
      renderScaleX: frameScale,
      renderScaleY: frameHeightScale,
      renderedViewportWidth,
      renderedViewportHeight,
      viewportOffsetX,
      viewportOffsetY,
      frameWidth,
      frameHeight,
      logicalOriginalAssetWidth,
      logicalOriginalAssetHeight,
      renderedAssetWidth,
      renderedAssetHeight,
      renderedViewportLeft,
      renderedViewportTop,
    };
  },

  _applyPreviewDeviceFrame_(screenWidth = 0, screenHeight = 0, deviceId = null, opts = {}) {
    const outer = this.__scaleOuter;
    const root = this.rootEl;
    try { outer?.classList?.remove?.('ddc-preview-shell'); } catch {}
  
    const rootRect = root?.getBoundingClientRect?.() || { left: 0, top: 0 };
    const outerRect = outer?.getBoundingClientRect?.() || {
      left: outer?.offsetLeft || 0,
      top: outer?.offsetTop || 0,
      width: outer?.offsetWidth || Math.max(1, Number(screenWidth || 1) || 1),
      height: outer?.offsetHeight || Math.max(1, Number(screenHeight || 1) || 1),
    };
    const metrics = this._getPreviewDeviceFrameMetrics_?.(screenWidth, screenHeight, deviceId, {
      ...opts,
      displayWidth: Math.max(1, Number(outerRect.width || 1) || 1),
      displayHeight: Math.max(1, Number(outerRect.height || 1) || 1),
    });
  
    if (root) {
      root.classList.toggle('ddc-preview-device-active', !!metrics);
      root.classList.toggle('ddc-preview-device-mobile', metrics?.id === 'mobile');
      root.classList.toggle('ddc-preview-device-tablet', metrics?.id === 'tablet');
      root.classList.toggle('ddc-preview-device-desktop', metrics?.id === 'desktop');
    }
  
    if (!root || !outer || !metrics) {
      if (this.__previewDeviceFrameEl?.isConnected) this.__previewDeviceFrameEl.remove();
      this.__previewDeviceFrameEl = null;
      return metrics || null;
    }
  
    let frame = this.__previewDeviceFrameEl;
    if (!frame || !frame.isConnected) {
      frame = document.createElement('div');
      frame.className = 'ddc-preview-device-frame';
      frame.setAttribute('aria-hidden', 'true');
      const viewportBox = document.createElement('div');
      viewportBox.className = 'ddc-preview-frame-viewport-box';
      frame.appendChild(viewportBox);
      root.insertBefore(frame, outer);
      this.__previewDeviceFrameEl = frame;
    } else if (frame.nextSibling !== outer) {
      root.insertBefore(frame, outer);
    }
  
    const viewportBox = frame.querySelector('.ddc-preview-frame-viewport-box');
    const frameStyle = frame.style;
    frame.dataset.device = metrics.id;
    frame.dataset.orientation = metrics.orientation || 'landscape';
    frameStyle.width = `${Math.max(1, metrics.frameWidth)}px`;
    frameStyle.height = `${Math.max(1, metrics.frameHeight)}px`;
    frameStyle.left = `${Math.round((outerRect.left - rootRect.left) + (metrics.viewportOffsetX || 0) - (metrics.viewportLeft * (metrics.renderScaleX || metrics.renderScale || 1)))}px`;
    frameStyle.top = `${Math.round((outerRect.top - rootRect.top) + (metrics.viewportOffsetY || 0) - (metrics.viewportTop * (metrics.renderScaleY || metrics.renderScale || 1)))}px`;
    frameStyle.setProperty('--ddc-preview-frame-url', `url("${metrics.imageUrl}")`);
    frameStyle.setProperty('--ddc-preview-asset-width', `${Math.max(1, metrics.renderedAssetWidth || metrics.frameWidth)}px`);
    frameStyle.setProperty('--ddc-preview-asset-height', `${Math.max(1, metrics.renderedAssetHeight || metrics.frameHeight)}px`);
    frameStyle.setProperty('--ddc-preview-asset-left', `${Math.round((metrics.frameWidth - (metrics.renderedAssetWidth || metrics.frameWidth)) / 2)}px`);
    frameStyle.setProperty('--ddc-preview-asset-top', `${Math.round((metrics.frameHeight - (metrics.renderedAssetHeight || metrics.frameHeight)) / 2)}px`);
    frameStyle.setProperty('--ddc-preview-asset-rotation', `${Number(metrics.assetRotation || 0) || 0}deg`);
    if (viewportBox) {
      viewportBox.style.left = `${Math.round(metrics.renderedViewportLeft || 0)}px`;
      viewportBox.style.top = `${Math.round(metrics.renderedViewportTop || 0)}px`;
      viewportBox.style.width = `${Math.max(1, metrics.renderedViewportWidth || metrics.screenWidth || 1)}px`;
      viewportBox.style.height = `${Math.max(1, metrics.renderedViewportHeight || metrics.screenHeight || 1)}px`;
      viewportBox.dataset.debug = `${this._getResponsiveProfileLabel_(metrics.id)} ${metrics.orientation || 'landscape'} · ${Math.round(metrics.screenWidth)}×${Math.round(metrics.screenHeight)}`;
    }
    return metrics;
  },

  _syncViewportPreviewUI_() {
    try {
      const group = this.shadowRoot?.querySelector?.('#previewModeControls');
      const section = group?.closest?.('[data-toolbar-panel="view"]') || null;
      const buttons = Array.from(this.shadowRoot?.querySelectorAll?.('[data-preview-mode]') || []);
      const sizeMode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
      const canPreview = sizeMode === 'auto';
      if (!canPreview && String(this.viewportPreviewMode || 'live').toLowerCase() !== 'live') {
        this.viewportPreviewMode = 'live';
      }
      const preview = this._getViewportPreviewPreset_?.();
      const active = preview?.id || 'live';
      const liveProfile = this._getActualResponsiveProfile_?.() || 'desktop';
      const unavailableTooltip = 'Only available in Auto Mode';
  
      if (group) {
        group.style.display = '';
        group.classList.toggle('is-disabled', !canPreview);
        group.dataset.previewAvailable = canPreview ? '1' : '0';
        group.setAttribute('aria-hidden', 'false');
        group.setAttribute('aria-disabled', canPreview ? 'false' : 'true');
      }
      if (section) {
        section.style.display = '';
        section.classList.toggle('is-disabled', !canPreview);
      }
      buttons.forEach((btn) => {
        const mode = String(btn.dataset.previewMode || 'live');
        const on = canPreview && mode === active;
        btn.classList.toggle('is-active', on);
        btn.classList.toggle('is-disabled', !canPreview);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        btn.setAttribute('aria-disabled', canPreview ? 'false' : 'true');
        btn.disabled = false;
        if (!canPreview) {
          btn.title = unavailableTooltip;
          btn.setAttribute('data-tooltip', unavailableTooltip);
        } else if (mode === 'live') {
          btn.dataset.profile = liveProfile;
          btn.title = `Live viewport (${this._getResponsiveProfileLabel_(liveProfile)})`;
          btn.setAttribute('data-tooltip', btn.title);
        } else {
          btn.removeAttribute('data-profile');
          btn.title = this._getResponsiveProfileLabel_(mode || 'desktop');
          btn.setAttribute('data-tooltip', btn.title);
        }
      });
  
      if (this.rootEl) {
        this.rootEl.classList.toggle('ddc-preview-active', !!preview);
        this.rootEl.classList.toggle('ddc-preview-docked-tabs', !!preview);
        if (preview?.width) this.rootEl.style.setProperty('--ddc-preview-width', `${preview.width}px`);
        else this.rootEl.style.removeProperty('--ddc-preview-width');
        if (preview?.height) this.rootEl.style.setProperty('--ddc-preview-height', `${preview.height}px`);
        else this.rootEl.style.removeProperty('--ddc-preview-height');
      }
  
      if (this.__scaleOuter) {
        this.__scaleOuter.style.marginInline = preview ? 'auto' : '';
        this.__scaleOuter.style.maxWidth = preview ? '100%' : '';
      }
  
  	    this._applyPreviewDeviceFrame_?.(
  	      preview?.width || 0,
  	      preview?.height || 0,
  	      preview?.id || null,
  	      { orientation: preview?.orientation || null }
  	    );
  	    this._requestPreviewOutsideCardsSync_?.();
  
  	    if (this.tabsBar && !this._isSidebarNavigationActive_?.()) {
  	      this.tabsBar.style.marginInline = preview ? 'auto' : '';
  	    }
  
      this._syncResponsiveViewportFields_?.();
    } catch {}
  },

  async _setViewportPreviewMode_(mode = 'live') {
    const sizeMode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
    if (sizeMode !== 'auto') {
      this.viewportPreviewMode = 'live';
      this._syncViewportPreviewUI_?.();
      return;
    }
    const normalized = (mode === 'desktop' || mode === 'mobile' || mode === 'tablet') ? mode : 'live';
    this._persistCurrentResponsiveProfileToMemory_();
    this.viewportPreviewMode = normalized;
    if (normalized !== 'live') {
      const orientation = this._getRequestedResponsiveOrientation_?.(normalized) || 'landscape';
      this._ensureResponsiveViewportProfileLock_?.(normalized, 'width', orientation);
    }
    this.__ddcTextLockDirty = true;
    await this._syncResponsiveProfileForViewport_({ force: true });
    this._applyAutoScale?.();
    this._syncTabsWidth_?.();
    this._scheduleTextResizeLockRefresh_?.(true);
  },

  _syncResponsiveViewportFields_() {
    try {
      const widthInput = this.previewWidthInput;
      const heightInput = this.previewHeightInput;
      const ratioLockButton = this.previewRatioLockButton;
      const swapButton = this.previewSwapButton;
      const meta = this.previewMeta;
      if (!widthInput || !heightInput) return;
      const sizeMode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
      if (sizeMode !== 'auto') {
        widthInput.disabled = true;
        heightInput.disabled = true;
        widthInput.title = 'Only available in Auto Mode';
        heightInput.title = 'Only available in Auto Mode';
        if (ratioLockButton) {
          ratioLockButton.disabled = true;
          ratioLockButton.classList.add('is-disabled');
          ratioLockButton.setAttribute('aria-disabled', 'true');
          ratioLockButton.setAttribute('aria-pressed', 'false');
          ratioLockButton.title = 'Only available in Auto Mode';
        }
        if (swapButton) {
          swapButton.disabled = true;
          swapButton.hidden = true;
          swapButton.setAttribute('aria-hidden', 'true');
          swapButton.title = 'Only available in Auto Mode';
        }
        if (meta) meta.textContent = 'Only available in Auto Mode';
        return;
      }
      widthInput.removeAttribute('title');
      heightInput.removeAttribute('title');
      const activeEl = this.shadowRoot?.activeElement;
  
      const previewMode = String(this.viewportPreviewMode || 'live').toLowerCase();
      const editingProfile = this._responsiveProfileKeys_().includes(previewMode) ? previewMode : null;
      const activeProfile = editingProfile || this._activeResponsiveProfile || this._getActualResponsiveProfile_?.() || 'desktop';
      const activeOrientation = this._getRequestedResponsiveOrientation_?.(activeProfile) || 'landscape';
      if (editingProfile) this._ensureResponsiveViewportProfileLock_?.(editingProfile, 'width', activeOrientation);
      const viewport = this._getResponsiveViewportProfile_(activeProfile, activeOrientation);
      const frameLock = this._getPreviewDeviceFrameLock_?.(activeProfile, viewport.width, viewport.height, { orientation: activeOrientation });
      const aspectLocked = this._isResponsiveViewportAspectLocked_?.(activeProfile) !== false;
      if (activeEl !== widthInput) widthInput.value = String(Math.round(viewport.width));
      if (activeEl !== heightInput) heightInput.value = String(Math.round(viewport.height));
  
      const isLive = !editingProfile;
      const canRotate = !!editingProfile && editingProfile !== 'desktop';
      widthInput.disabled = isLive;
      heightInput.disabled = isLive;
      if (ratioLockButton) {
        ratioLockButton.disabled = isLive;
        ratioLockButton.classList.toggle('is-disabled', isLive);
        ratioLockButton.classList.toggle('is-active', !isLive && aspectLocked);
        ratioLockButton.setAttribute('aria-disabled', isLive ? 'true' : 'false');
        ratioLockButton.setAttribute('aria-pressed', (!isLive && aspectLocked) ? 'true' : 'false');
        ratioLockButton.title = isLive
          ? 'Choose a preview size before changing ratio lock'
          : (aspectLocked ? 'Aspect ratio linked' : 'Aspect ratio unlocked');
        ratioLockButton.setAttribute('data-tooltip', ratioLockButton.title);
        const icon = ratioLockButton.querySelector?.('ha-icon');
        if (icon) icon.setAttribute('icon', aspectLocked ? 'mdi:link-variant' : 'mdi:link-variant-off');
      }
      if (swapButton) {
        swapButton.disabled = !canRotate;
        swapButton.hidden = !canRotate;
        swapButton.setAttribute('aria-hidden', canRotate ? 'false' : 'true');
        swapButton.title = canRotate ? 'Swap orientation' : 'Orientation swap is only available for mobile and tablet';
      }
      if (meta) {
        meta.textContent = isLive
          ? `Auto: ${this._getResponsiveProfileLabel_(this._getActualResponsiveProfile_?.() || 'desktop')}`
          : `Editing ${this._getResponsiveProfileLabel_(editingProfile)} · ${frameLock?.orientation === 'portrait' ? 'Portrait' : 'Landscape'} · ${Math.round(viewport.width)}×${Math.round(viewport.height)} · ${aspectLocked ? 'linked ratio' : 'free ratio'}`;
      }
    } catch {}
  },

  _commitResponsiveViewportField_(axis = 'width') {
    try {
      const sizeMode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
      if (sizeMode !== 'auto') {
        this._syncResponsiveViewportFields_?.();
        return;
      }
      const profile = String(this.viewportPreviewMode || 'live').toLowerCase();
      if (!this._responsiveProfileKeys_().includes(profile)) return;
      const input = axis === 'height' ? this.previewHeightInput : this.previewWidthInput;
      if (!input) return;
      const raw = String(input.value || '').trim();
      if (!raw) {
        this._syncResponsiveViewportFields_?.();
        return;
      }
      const parsed = Number(raw);
      if (!Number.isFinite(parsed)) {
        this._syncResponsiveViewportFields_?.();
        return;
      }
      const value = Math.max(240, Math.min(6000, Math.round(parsed)));
      this._updateResponsiveViewportProfile_(profile, { [axis]: value }, {
        preferAxis: axis === 'height' ? 'height' : 'width',
        orientation: this._getRequestedResponsiveOrientation_?.(profile) || 'landscape',
      });
      this._syncResponsiveViewportFields_?.();
    } catch {}
  },

  _updateResponsiveViewportProfile_(profile, patch = {}, opts = {}) {
    if (!this._responsiveProfileKeys_().includes(profile)) return;
    const orientation = this._normalizeResponsiveOrientation_(
      profile,
      opts?.orientation ?? this._getRequestedResponsiveOrientation_?.(profile)
    );
    const variantKey = this._getResponsiveLayoutKey_(profile, orientation);
    const current = this._getResponsiveViewportProfile_(profile, orientation);
    const preferAxis = opts?.preferAxis === 'height' ? 'height' : 'width';
    const aspectLocked = this._isResponsiveViewportAspectLocked_?.(profile) !== false;
    const nextPatch = { ...patch };
    if (aspectLocked && profile === 'desktop') {
      const width = Number(nextPatch.width ?? current.width) || current.width;
      const height = Number(nextPatch.height ?? current.height) || current.height;
      nextPatch.width = Math.max(width, height);
      nextPatch.height = Math.min(width, height);
    }
    const locked = this._getLockedResponsiveViewportProfile_(
      profile,
      {
        ...current,
        ...nextPatch,
      },
      preferAxis,
      orientation
    );
    const next = this._normalizeResponsiveViewportProfiles_({
      ...(this.responsiveViewportProfiles || {}),
      [variantKey]: {
        ...locked,
      },
    });
    this.responsiveViewportProfiles = next;
    this._config = {
      ...(this._config || {}),
      responsive_viewports: this._cloneJson_(this._serializeResponsiveViewportProfiles_(next)),
    };
    this._syncViewportPreviewUI_?.();
    this._applyAutoScale?.();
    this._syncTabsWidth_?.();
    try { if (!this._isInHaEditorPreview()) this._queueSave?.('responsive-viewports'); } catch {}
  },

  _toggleResponsiveViewportAspectLock_() {
    const sizeMode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
    if (sizeMode !== 'auto') {
      this._syncResponsiveViewportFields_?.();
      return;
    }
    const profile = String(this.viewportPreviewMode || 'live').toLowerCase();
    if (!this._responsiveProfileKeys_().includes(profile)) return;
    const nextLocked = this._isResponsiveViewportAspectLocked_?.(profile) === false;
    this._setResponsiveViewportAspectLocked_?.(profile, nextLocked);
    if (nextLocked) {
      const orientation = this._getRequestedResponsiveOrientation_?.(profile) || 'landscape';
      this._ensureResponsiveViewportProfileLock_?.(profile, 'width', orientation);
    }
    this._syncResponsiveViewportFields_?.();
    this._syncViewportPreviewUI_?.();
    this._applyAutoScale?.();
  },

  _swapResponsiveViewportOrientation_() {
    const sizeMode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
    if (sizeMode !== 'auto') {
      this._syncResponsiveViewportFields_?.();
      return;
    }
    const profile = String(this.viewportPreviewMode || 'live').toLowerCase();
    if (!this._responsiveProfileKeys_().includes(profile) || profile === 'desktop') return;
    const currentOrientation = this._getStoredResponsivePreviewOrientation_(profile);
    const nextOrientation = currentOrientation === 'portrait' ? 'landscape' : 'portrait';
    this._setStoredResponsivePreviewOrientation_(profile, nextOrientation);
    this._ensureResponsiveViewportProfileLock_?.(profile, 'width', nextOrientation);
    this._syncResponsiveProfileForViewport_?.({ force: true });
    this._syncResponsiveViewportFields_?.();
    this._syncViewportPreviewUI_?.();
    this._applyAutoScale?.();
  },

  _shouldUseUnscaledPreviewCanvas_() {
    return false;
  },

  _isMobileOptimizeActive_() {
    try {
      if (!this.optimizeForMobile) return false;
      if (this._shouldUseUnscaledPreviewCanvas_?.()) return false;
      const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
      if (mode !== 'auto' || !this.autoResizeCards) return false;
      const vp = this._getViewportMetrics_?.() || { width: 0, shortEdge: 0, isPortrait: false };
      const coarse = window.matchMedia?.('(pointer: coarse)')?.matches;
      return vp.shortEdge <= 900 && (coarse || vp.width <= 820 || vp.isPortrait);
    } catch {
      return false;
    }
  },

  _getMobileScalePlan_(designWidth = 1, baseScale = 1) {
    const vp = this._getViewportMetrics_?.() || { width: 0, isPortrait: false };
    const width = Math.max(1, vp.width || 1);
    const readableFloor = vp.isPortrait
      ? (width <= 390 ? 0.48 : width <= 430 ? 0.52 : width <= 520 ? 0.58 : 0.64)
      : (width <= 820 ? 0.64 : 0.7);
    const maxPanFactor = vp.isPortrait ? 1.85 : 1.45;
    const maxPanScale = Math.max(baseScale, baseScale * maxPanFactor);
    const preferredScale = Math.min(readableFloor, maxPanScale);
    const scale = Math.max(baseScale, preferredScale);
    return {
      scale,
      allowPanX: scale > (baseScale + 1e-3),
    };
  },

  _getMobileTextAssistScale_() {
    const vp = this._getViewportMetrics_?.() || { width: 0, isPortrait: false };
    const width = Math.max(1, vp.width || 1);
    if (vp.isPortrait) {
      if (width <= 390) return 0.78;
      if (width <= 430) return 0.82;
      if (width <= 520) return 0.86;
      return 0.9;
    }
    if (width <= 820) return 0.88;
    return 0.92;
  },
};

export function installViewportPreviewMethods(proto) {
  for (const [name, value] of Object.entries(viewportPreviewMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
