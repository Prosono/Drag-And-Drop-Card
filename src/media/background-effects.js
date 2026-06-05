/*
 * Dashboard background image, particles, and YouTube background effects.
 *
 * This module owns media-heavy page/canvas backgrounds and keeps their lifecycle separate from card
 * rendering so effects can be created, refreshed, or destroyed safely.
 */

/* Background image, page background, particles, and YouTube helpers. */
const backgroundEffectsMethods = {
  _isCanvasFillBackgroundFreezeCandidate_() {
    try {
      const mode = this._getDashboardBackgroundMode_?.() || 'none';
      if (mode !== 'none' || this.applyBackgroundToPage) return false;
      const bg = String(this.containerBackground ?? '').trim();
      return !!bg && !/^transparent$/i.test(bg) && /gradient\(/i.test(bg);
    } catch {
      return false;
    }
  },

  _shouldKeepCanvasOverflowClippedDuringCardDrag_() {
    return !!this._isCanvasFillBackgroundFreezeCandidate_?.();
  },

  _freezeCanvasBackgroundDuringResize_() {
    const cont = this.cardContainer;
    if (!cont) return;
    this.__ddcBackgroundFrozenDuringResize = false;
    this.__ddcFillBackgroundFrozenDuringResize = false;
    this.__ddcFreezeContainerImageBackground = false;
    this.__ddcFreezeContainerFillBackground = false;

    try {
      const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
      if (mode !== 'auto') return;
    } catch {
      return;
    }

    try {
      const bgMode = this._getDashboardBackgroundMode_?.() || 'none';
      const bgImage = String(cont.style.getPropertyValue('--ddc-bg-image') || '').trim();
      const hasContainerImage = bgMode === 'image'
        && !this.applyBackgroundToPage
        && cont.classList?.contains?.('has-bg-image')
        && bgImage
        && bgImage !== 'none';
      const hasContainerFill = !!this._isCanvasFillBackgroundFreezeCandidate_?.();
      if (!hasContainerImage && !hasContainerFill) {
        return;
      }
      this.__ddcFreezeContainerImageBackground = !!hasContainerImage;
      this.__ddcFreezeContainerFillBackground = !!hasContainerFill;
    } catch {
      this.__ddcBackgroundFrozenDuringResize = false;
      this.__ddcFillBackgroundFrozenDuringResize = false;
      return;
    }

    try {
      const scaleX = Math.max(0.0001, Number(this.__pointerScaleX) || 1);
      const scaleY = Math.max(0.0001, Number(this.__pointerScaleY) || 1);
      const rect = cont.getBoundingClientRect?.() || {};
      const width =
        parseFloat(cont.style?.width) ||
        (Number(rect.width) ? Number(rect.width) / scaleX : 0) ||
        cont.scrollWidth ||
        cont.offsetWidth ||
        1;
      const height =
        parseFloat(cont.style?.height) ||
        (Number(rect.height) ? Number(rect.height) / scaleY : 0) ||
        cont.scrollHeight ||
        cont.offsetHeight ||
        1;

      cont.style.setProperty('--ddc-resize-bg-width', `${Math.max(1, width)}px`);
      cont.style.setProperty('--ddc-resize-bg-height', `${Math.max(1, height)}px`);
      if (this.__ddcFreezeContainerImageBackground) {
        cont.classList.add('ddc-bg-frozen-during-resize');
        this.__ddcBackgroundFrozenDuringResize = true;
      }
      if (this.__ddcFreezeContainerFillBackground) {
        cont.classList.add('ddc-bg-fill-frozen-during-resize');
        this.__ddcFillBackgroundFrozenDuringResize = true;
      }
    } catch {}
  },

  _unfreezeCanvasBackgroundAfterResize_() {
    const cont = this.cardContainer;
    if (!cont) return;
    try {
      const wasFrozen = !!this.__ddcBackgroundFrozenDuringResize || cont.classList.contains('ddc-bg-frozen-during-resize');
      this.__ddcBackgroundFrozenDuringResize = false;
      this.__ddcFillBackgroundFrozenDuringResize = false;
      this.__ddcFreezeContainerImageBackground = false;
      this.__ddcFreezeContainerFillBackground = false;
      cont.classList.remove('ddc-bg-frozen-during-resize');
      cont.classList.remove('ddc-bg-fill-frozen-during-resize');
      cont.style.removeProperty('--ddc-resize-bg-width');
      cont.style.removeProperty('--ddc-resize-bg-height');
      if (wasFrozen && this._getDashboardBackgroundMode_?.() === 'youtube') this._layoutYtBackground_?.();
    } catch {}
  },

  _getDashboardBackgroundMode_() {
    try {
      const cfg = this._config || {};
      const explicit = String(cfg.background_mode || '').trim().toLowerCase();
      if (explicit) return explicit;
      return cfg.background_image?.src ? 'image' : 'none';
    } catch {
      return 'none';
    }
  },

  _isDashboardMediaBackgroundActive_() {
    const mode = this._getDashboardBackgroundMode_?.() || 'none';
    return !!mode && mode !== 'none';
  },

  _applyBackgroundImageFromConfig() {
  // iOS safety: skip applying huge data URLs that can crash WKWebView
  try {
    const ua = navigator.userAgent || '';
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    if (isIOS && bg && typeof bg.src === 'string' && bg.src.startsWith('data:') && bg.src.length > 300000) {
      console.warn('[drag-and-drop-card] Skipping large inline background on iOS for stability.');
      return;
    }
  } catch (_) {}
    const cfg = this._config || {};
    const bg = cfg.background_image || cfg.bg_image || null;
    const cont = this.cardContainer;
    if (!cont) return;
    const mode = this._getDashboardBackgroundMode_?.() || 'none';
    const usePageImageOnly = !!(
      this.applyBackgroundToPage &&
      mode === 'image'
    );

    if (bg && bg.src) {
      const url = String(bg.src).trim();
      const repeat = (bg.repeat === true || bg.repeat === 'repeat') ? 'repeat' : 'no-repeat';
      const opacity = Math.max(0, Math.min(1, Number(bg.opacity ?? 1)));
      const size = bg.size || 'cover';
      const position = bg.position || 'center center';
      const attachment = bg.attachment || 'scroll';
      const filter = bg.filter || 'none';

      if (usePageImageOnly) {
        cont.style.removeProperty('--ddc-bg-image');
        cont.style.removeProperty('--ddc-bg-repeat');
        cont.style.removeProperty('--ddc-bg-opacity');
        cont.style.removeProperty('--ddc-bg-size');
        cont.style.removeProperty('--ddc-bg-position');
        cont.style.removeProperty('--ddc-bg-attachment');
        cont.style.removeProperty('--ddc-bg-filter');
        cont.classList.remove('has-bg-image');
        cont.classList.add('ddc-page-bg-image-active');
      } else {
        cont.style.setProperty('--ddc-bg-image', url ? `url("${url.replace(/"/g, '\"')}")` : 'none');
        cont.style.setProperty('--ddc-bg-repeat', repeat);
        cont.style.setProperty('--ddc-bg-opacity', String(opacity));
        cont.style.setProperty('--ddc-bg-size', size);
        cont.style.setProperty('--ddc-bg-position', position);
        cont.style.setProperty('--ddc-bg-attachment', attachment);
        cont.style.setProperty('--ddc-bg-filter', filter);
        cont.classList.add('has-bg-image');
        cont.classList.remove('ddc-page-bg-image-active');
      }
    } else {
      cont.style.removeProperty('--ddc-bg-image');
      cont.style.removeProperty('--ddc-bg-repeat');
      cont.style.removeProperty('--ddc-bg-opacity');
      cont.style.removeProperty('--ddc-bg-size');
      cont.style.removeProperty('--ddc-bg-position');
      cont.style.removeProperty('--ddc-bg-attachment');
      cont.style.removeProperty('--ddc-bg-filter');
      cont.classList.remove('has-bg-image');
      cont.classList.remove('ddc-page-bg-image-active');
    }
  },

  /* ========================================================================== */
  /* Unified background driver (image | particles | youtube | none)             */
  /* ========================================================================== */

  _applyBackgroundFromConfig() {
    try {
      const mode = this._getDashboardBackgroundMode_?.() || 'none';
      try { this._applyDashboardThemeStyling_?.(); } catch {}

      if (mode === 'youtube') {
        const cfg = this._config?.background_youtube || {};
        const host = this.applyBackgroundToPage ? this._ensurePageBgHost_?.() : this._ensureBgHost_?.();
        const signature = this._getYouTubeBackgroundSignature_?.(cfg, { host });
        if (host && signature && this.__ytWrap && this.__ytWrap.parentNode === host && this.__ytBackgroundSignature === signature) {
          try { host.style.display = 'block'; } catch {}
          try { this.__ytWrap.style.display = ''; } catch {}
          this._layoutYtBackground_?.();
          this._syncPageBackgroundToView_?.();
          return;
        }
      }

      // Always clear dynamic layers first
      this._destroyParticles_?.();
      this._destroyYouTube_?.();
      this._clearPageDynamicBackground_?.();

      // Clear CSS image if we’re not in image mode
      if (mode !== 'image') {
        const cont = this.cardContainer;
        if (cont) {
          cont.style.removeProperty('--ddc-bg-image');
          cont.style.removeProperty('--ddc-bg-repeat');
          cont.style.removeProperty('--ddc-bg-opacity');
          cont.style.removeProperty('--ddc-bg-size');
          cont.style.removeProperty('--ddc-bg-position');
          cont.style.removeProperty('--ddc-bg-attachment');
          cont.style.removeProperty('--ddc-bg-filter');
          cont.classList.remove('has-bg-image');
        }
      }

      // Route to the correct backend
      if (mode === 'image') {
        this._applyBackgroundImageFromConfig?.();
        this._syncPageBackgroundToView_?.();
        return;
      }

      if (mode === 'particles') {
        const cfg = this._config?.background_particles || {};
        const host = this.applyBackgroundToPage ? this._ensurePageBgHost_?.() : null;
        this._attachParticlesBackground_(cfg, host);
        this._syncPageBackgroundToView_?.();
        return;
      }

      if (mode === 'youtube') {
        const cfg = this._config?.background_youtube || {};
        const host = this.applyBackgroundToPage ? this._ensurePageBgHost_?.() : null;
        this._attachYouTubeBackground_(cfg, host);
        this._syncPageBackgroundToView_?.();
        return;
      }

      // mode === 'none'
      // nothing to do
      this._syncPageBackgroundToView_?.();

    } catch (e) {
      console.warn('[drag-and-drop-card] _applyBackgroundFromConfig failed:', e);
    }
  },

  _getYouTubeBackgroundSignature_(cfg = {}, opts = {}) {
    try {
      const videoId = this._parseYouTubeId_(cfg.video_id || cfg.url);
      if (!videoId) return '';
      const hostMode = opts?.host?.id === 'ddcPageBgHost' || this.applyBackgroundToPage ? 'page' : 'card';
      const start = Number.isFinite(cfg.start) ? Number(cfg.start) : null;
      const end = Number.isFinite(cfg.end) ? Number(cfg.end) : null;
      const opacity = cfg.opacity != null ? Math.max(0, Math.min(1, Number(cfg.opacity))) : 1;
      return JSON.stringify({
        hostMode,
        videoId,
        start,
        end,
        mute: cfg.mute !== false,
        loop: cfg.loop !== false,
        size: String(cfg.size || 'cover'),
        position: String(cfg.position || 'center'),
        attachment: String(cfg.attachment || 'scroll'),
        opacity,
      });
    } catch {
      return '';
    }
  },

  _getPageBackgroundTargets_() {
    const targets = [];
    const seen = new Set();
    const add = (el) => {
      if (!el || seen.has(el)) return;
      seen.add(el);
      targets.push(el);
    };

    try {
      const huiRoot = this._huiRoot?.();
      add(huiRoot);
      add(huiRoot?.shadowRoot?.querySelector?.('#view'));
      add(huiRoot?.shadowRoot?.querySelector?.('ha-app-layout'));
    } catch {}

    try {
      [
        'ha-panel-lovelace',
        'hui-root',
        '#view',
        'hui-view',
        'hui-panel-view',
        'hui-masonry-view',
        'hui-sections-view',
        'ha-app-layout',
        'partial-panel-resolver'
      ].forEach((selector) => {
        (this._deepQueryAll?.(selector) || []).forEach(add);
      });
    } catch {}

    try {
      let node = this;
      while (node) {
        if (node instanceof HTMLElement) add(node);
        const root = node.getRootNode?.();
        const host = root?.host;
        if (!host || host === node) break;
        node = host;
      }
    } catch {}

    return targets.filter((el) => {
      const tag = String(el?.tagName || '').toLowerCase();
      return (
        el?.id === 'view' ||
        tag === 'ha-panel-lovelace' ||
        tag === 'hui-root' ||
        tag === 'hui-view' ||
        tag === 'hui-panel-view' ||
        tag === 'hui-masonry-view' ||
        tag === 'hui-sections-view' ||
        tag === 'ha-app-layout' ||
        tag === 'partial-panel-resolver'
      );
    });
  },

  _rememberPageBackgroundTarget_(el) {
    if (!el) return;
    if (!this.__pageBackgroundPrev) this.__pageBackgroundPrev = new WeakMap();
    if (!this.__pageBackgroundTouched) this.__pageBackgroundTouched = new Set();
    if (!this.__pageBackgroundPrev.has(el)) {
      this.__pageBackgroundPrev.set(el, {
        background: el.style.getPropertyValue('background') || '',
        backgroundColor: el.style.getPropertyValue('background-color') || '',
        backgroundImage: el.style.getPropertyValue('background-image') || '',
        backgroundSize: el.style.getPropertyValue('background-size') || '',
        backgroundRepeat: el.style.getPropertyValue('background-repeat') || '',
        backgroundPosition: el.style.getPropertyValue('background-position') || '',
        backgroundAttachment: el.style.getPropertyValue('background-attachment') || '',
        minHeight: el.style.getPropertyValue('min-height') || '',
        lovelaceBg: el.style.getPropertyValue('--lovelace-background') || '',
      });
    }
    this.__pageBackgroundTouched.add(el);
  },

  _clearPageBackground_() {
    try {
      clearTimeout(this.__pageBackgroundRetryT);
      this.__pageBackgroundRetryT = null;
      this._clearPageDynamicBackground_?.();
      const touched = Array.from(this.__pageBackgroundTouched || []);
      touched.forEach((el) => {
        if (!el) return;
        const prev = this.__pageBackgroundPrev?.get?.(el);
        if (!prev) return;
        if (prev.background) el.style.setProperty('background', prev.background);
        else el.style.removeProperty('background');
        if (prev.backgroundColor) el.style.setProperty('background-color', prev.backgroundColor);
        else el.style.removeProperty('background-color');
        if (prev.backgroundImage) el.style.setProperty('background-image', prev.backgroundImage);
        else el.style.removeProperty('background-image');
        if (prev.backgroundSize) el.style.setProperty('background-size', prev.backgroundSize);
        else el.style.removeProperty('background-size');
        if (prev.backgroundRepeat) el.style.setProperty('background-repeat', prev.backgroundRepeat);
        else el.style.removeProperty('background-repeat');
        if (prev.backgroundPosition) el.style.setProperty('background-position', prev.backgroundPosition);
        else el.style.removeProperty('background-position');
        if (prev.backgroundAttachment) el.style.setProperty('background-attachment', prev.backgroundAttachment);
        else el.style.removeProperty('background-attachment');
        if (prev.minHeight) el.style.setProperty('min-height', prev.minHeight);
        else el.style.removeProperty('min-height');
        if (prev.lovelaceBg) el.style.setProperty('--lovelace-background', prev.lovelaceBg);
        else el.style.removeProperty('--lovelace-background');
      });
      this.__pageBackgroundTouched = new Set();
    } catch {}
  },

  _syncPageBackgroundToView_(attempt = 0) {
    try {
      clearTimeout(this.__pageBackgroundRetryT);
      this.__pageBackgroundRetryT = null;

      const enabled = !!this.applyBackgroundToPage;
      const mode = this._getDashboardBackgroundMode_?.() || 'none';
      const hasDynamicPageLayer = enabled && (mode === 'particles' || mode === 'youtube');
      const visual = enabled ? this._getPageBackgroundVisual_?.() : null;
      if (!enabled) {
        this._clearPageBackground_?.();
        return;
      }
      if (!visual) {
        if (!hasDynamicPageLayer) this._clearPageBackground_?.();
        return;
      }

      const targets = this._getPageBackgroundTargets_?.() || [];
      if (!targets.length) {
        if (this.isConnected && attempt < 8) {
          this.__pageBackgroundRetryT = setTimeout(() => this._syncPageBackgroundToView_?.(attempt + 1), 180);
        }
        return;
      }

      targets.forEach((el) => {
        this._rememberPageBackgroundTarget_?.(el);
        if (visual.kind === 'image') {
          el.style.removeProperty('background');
          if (visual.backgroundColor) el.style.setProperty('background-color', visual.backgroundColor, 'important');
          else el.style.removeProperty('background-color');
          el.style.setProperty('background-image', visual.backgroundImage, 'important');
          el.style.setProperty('background-repeat', visual.backgroundRepeat, 'important');
          el.style.setProperty('background-size', visual.backgroundSize, 'important');
          el.style.setProperty('background-position', visual.backgroundPosition, 'important');
          el.style.setProperty('background-attachment', visual.backgroundAttachment, 'important');
        } else {
          el.style.setProperty('background', visual.background, 'important');
          el.style.removeProperty('background-image');
          el.style.removeProperty('background-size');
          el.style.removeProperty('background-repeat');
          el.style.removeProperty('background-position');
          el.style.removeProperty('background-attachment');
          if (!/gradient\(|url\(/i.test(visual.background)) {
            el.style.setProperty('background-color', visual.background, 'important');
          } else {
            el.style.removeProperty('background-color');
          }
        }
        el.style.setProperty('--lovelace-background', visual.lovelaceBackground || '');
        const tag = String(el.tagName || '').toLowerCase();
        if (el.id === 'view' || tag === 'hui-view' || tag === 'hui-panel-view' || tag === 'hui-masonry-view' || tag === 'hui-sections-view') {
          el.style.setProperty('min-height', '100%');
        }
      });
    } catch (e) {
      console.warn('[drag-and-drop-card] _syncPageBackgroundToView failed:', e);
    }
  },

  _getPageBackgroundVisual_() {
    const mode = this._getDashboardBackgroundMode_?.() || 'none';
    const base = mode === 'none' ? String(this.containerBackground ?? '').trim() : '';

    if (mode === 'image') {
      const bg = this._config?.background_image || this._config?.bg_image || null;
      const rawUrl = String(bg?.src || '').trim();
      const imageUrl = this._normalizeMediaUrl_(rawUrl);
      if (imageUrl) {
        const repeat = (bg?.repeat === true || bg?.repeat === 'repeat') ? 'repeat' : String(bg?.repeat || 'no-repeat');
        const size = String(bg?.size || 'cover');
        const position = String(bg?.position || 'center center');
        const attachment = String(bg?.attachment || 'scroll');
        const layers = [`url("${imageUrl.replace(/"/g, '\\"')}")`];
        return {
          kind: 'image',
          backgroundColor: '',
          backgroundImage: layers.join(', '),
          backgroundRepeat: repeat,
          backgroundSize: size,
          backgroundPosition: position,
          backgroundAttachment: attachment,
          lovelaceBackground: imageUrl,
        };
      }
    }

    if (!base || /^transparent$/i.test(base)) return null;
    return {
      kind: 'fill',
      background: base,
      lovelaceBackground: base,
    };
  },

  _ensureBgHost_() {
    const cont = this.cardContainer;
    if (!cont) return null;
    let host = cont.querySelector('#ddcBgHost');
    if (!host) {
      host = document.createElement('div');
      host.className = 'ddc-bg-host';
      host.id = 'ddcBgHost';
      host.setAttribute('aria-hidden','true');
      cont.prepend(host);
    }
    return host;
  },

  _ensurePageBgHost_() {
    const root = this.shadowRoot;
    if (!root) return null;
    let host = root.querySelector('#ddcPageBgHost');
    if (!host) {
      host = document.createElement('div');
      host.className = 'ddc-page-bg-host';
      host.id = 'ddcPageBgHost';
      host.setAttribute('aria-hidden', 'true');
      root.insertBefore(host, root.firstChild || null);
    }
    host.style.display = 'block';
    return host;
  },

  _clearPageDynamicBackground_() {
    try {
      const host = this.shadowRoot?.querySelector?.('#ddcPageBgHost');
      if (!host) return;
      host.innerHTML = '';
      host.style.display = 'none';
    } catch {}
  },

  /* ---------- tiny loader with cache ---------- */

  async _loadScriptOnce_(src) {
    if (!src) throw new Error('script src required');
    if (!this.__scriptCache) this.__scriptCache = new Map();
    if (this.__scriptCache.has(src)) return this.__scriptCache.get(src);

    const p = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = () => resolve(true);
      s.onerror = () => reject(new Error('failed to load ' + src));
      document.head.appendChild(s);
    });
    this.__scriptCache.set(src, p);
    return p;
  },

  /* ========================================================================== */
  /* Particles.js                                                               */
  /* ========================================================================== */

  // Pick the right root for queries (Lit's renderRoot > shadowRoot > self)

  _getRenderRoot_() {
    return this.renderRoot || this.shadowRoot || this;
  },

  // Temporarily make document.getElementById look into our shadow root

  _withScopedDocument_(fn) {
    const root = this._getRenderRoot_();
    // If we’re not in shadow, nothing to scope
    if (!root || root === document || !root.querySelector) return fn();

    const d = document;
    const originalGetById = d.getElementById.bind(d);
    const originalQuerySelector = d.querySelector ? d.querySelector.bind(d) : null;

    d.getElementById = (id) => {
      const rawId = String(id ?? '');
      try {
        const local = typeof root.getElementById === 'function'
          ? root.getElementById(rawId)
          : Array.from(root.querySelectorAll?.('[id]') || []).find((el) => el.id === rawId);
        return local || originalGetById(id);
      } catch { return originalGetById(id); }
    };
    if (originalQuerySelector) {
      d.querySelector = (sel) => {
        try {
          const local = root.querySelector(sel);
          if (local) return local;
        } catch {}
        try { return originalQuerySelector(sel); }
        catch { return null; }
      };
    }
    try { return fn(); }
    finally {
      d.getElementById = originalGetById;
      if (originalQuerySelector) d.querySelector = originalQuerySelector;
    }
  },

  async _ensureParticles_() {
    if (window.particlesJS) return true;
    if (!this.__particlesLoadPromise) {
      const loadScript = (src) => new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src; s.async = true;
        s.onload = () => resolve(true);
        s.onerror = () => reject(new Error('Failed to load ' + src));
        document.head.appendChild(s);
      });
      this.__particlesLoadPromise = loadScript('/local/particles.min.js')
        .catch(() => loadScript('https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'))
        .then(() => !!window.particlesJS)
        .catch(() => false);
    }
    return this.__particlesLoadPromise;
  },

  _detachParticlesPointerProxy_() {
    const proxy = this.__particlesPointerProxy;
    if (!proxy) return;
    try {
      (proxy.events || []).forEach(({ type, listener, options }) => {
        window.removeEventListener(type, listener, options);
      });
    } catch {}
    this.__particlesPointerProxy = null;
  },

  _attachParticlesPointerProxy_(inst, canvasEl) {
    this._detachParticlesPointerProxy_?.();
    const pJS = inst?.pJS;
    const mouse = pJS?.interactivity?.mouse;
    const canvas = canvasEl || pJS?.canvas?.el;
    if (!pJS || !mouse || !canvas?.getBoundingClientRect) return;

    const setMouseOutside = () => {
      mouse.pos_x = null;
      mouse.pos_y = null;
      pJS.interactivity.status = 'mouseleave';
    };

    const syncMouse = (event) => {
      try {
        const source = event?.touches?.[0] || event?.changedTouches?.[0] || event;
        const clientX = Number(source?.clientX);
        const clientY = Number(source?.clientY);
        if (!Number.isFinite(clientX) || !Number.isFinite(clientY)) return false;

        const rect = canvas.getBoundingClientRect();
        const rectW = Number(rect?.width) || 0;
        const rectH = Number(rect?.height) || 0;
        if (rectW <= 0 || rectH <= 0) {
          setMouseOutside();
          return false;
        }

        const inside =
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom;
        if (!inside) {
          setMouseOutside();
          return false;
        }

        const canvasW = Number(pJS.canvas?.w) || Number(canvas.width) || rectW;
        const canvasH = Number(pJS.canvas?.h) || Number(canvas.height) || rectH;
        const x = (clientX - rect.left) * (canvasW / rectW);
        const y = (clientY - rect.top) * (canvasH / rectH);
        mouse.pos_x = Math.max(0, Math.min(canvasW, x));
        mouse.pos_y = Math.max(0, Math.min(canvasH, y));
        pJS.interactivity.status = 'mousemove';
        return true;
      } catch {
        return false;
      }
    };

    const syncBeforeClick = (event) => {
      const inside = syncMouse(event);
      const click = pJS?.interactivity?.events?.onclick;
      if (!inside && click?.enable) {
        click.enable = false;
        setTimeout(() => {
          try { click.enable = true; } catch {}
        }, 0);
      }
    };

    const events = [
      { type: 'mousemove', listener: syncMouse, options: false },
      { type: 'pointermove', listener: syncMouse, options: false },
      { type: 'mousedown', listener: syncMouse, options: true },
      { type: 'pointerdown', listener: syncMouse, options: true },
      { type: 'click', listener: syncBeforeClick, options: true },
      { type: 'mouseleave', listener: setMouseOutside, options: false },
      { type: 'blur', listener: setMouseOutside, options: false },
    ];
    events.forEach(({ type, listener, options }) => {
      try { window.addEventListener(type, listener, options); } catch {}
    });
    this.__particlesPointerProxy = { events };
  },

  _attachParticlesBackground_(cfg = {}, mountHost = null) {
    const host = mountHost || this._ensureBgHost_?.();
    if (!host) return;

    // Destroy any existing instance and ensure an empty mount each time
    try { this._destroyParticles_?.(); } catch {}
    host.innerHTML = '';
    const el = document.createElement('div');
    el.id = 'ddcParticles';
    el.className = 'particles-js';
    el.style.position = 'absolute';
    el.style.inset = '0';
    el.style.pointerEvents = 'none';
    host.appendChild(el);

    const allowPointer = !!cfg.pointer_events;
    const sourceConf = (cfg.config && typeof cfg.config === 'object')
      ? cfg.config
      : this.constructor._defaultParticlesBackgroundConfig_();
    const conf = JSON.parse(JSON.stringify(sourceConf));
    host.style.pointerEvents = 'none';

    const normalizeMode = (value, allowed, fallback) => {
      const mode = String(value || '').trim().toLowerCase();
      return allowed.includes(mode) ? mode : fallback;
    };
    const toDistance = (value, fallback = 110) => {
      const n = Number(value);
      return Math.max(40, Math.min(240, Number.isFinite(n) ? Math.round(n) : fallback));
    };
    const applyPointerInteractivity = (targetConf = {}) => {
      const next = targetConf && typeof targetConf === 'object' ? targetConf : {};
      next.interactivity = next.interactivity && typeof next.interactivity === 'object' ? next.interactivity : {};
      next.interactivity.events = next.interactivity.events && typeof next.interactivity.events === 'object' ? next.interactivity.events : {};
      next.interactivity.modes = next.interactivity.modes && typeof next.interactivity.modes === 'object' ? next.interactivity.modes : {};
      const existingHoverMode = Array.isArray(next.interactivity.events.onhover?.mode)
        ? next.interactivity.events.onhover.mode[0]
        : next.interactivity.events.onhover?.mode;
      const existingClickMode = Array.isArray(next.interactivity.events.onclick?.mode)
        ? next.interactivity.events.onclick.mode[0]
        : next.interactivity.events.onclick?.mode;
      const hoverMode = normalizeMode(cfg.hover_mode || existingHoverMode, ['repulse', 'grab', 'bubble', 'none'], 'repulse');
      const clickMode = normalizeMode(cfg.click_mode || existingClickMode, ['push', 'repulse', 'none'], 'push');
      const distance = toDistance(
        cfg.interaction_distance
          ?? next.interactivity.modes.repulse?.distance
          ?? next.interactivity.modes.grab?.distance
          ?? next.interactivity.modes.bubble?.distance,
        110
      );
      next.interactivity.detect_on = allowPointer ? 'window' : 'canvas';
      next.interactivity.events.resize = true;
      next.interactivity.events.onhover = {
        enable: allowPointer && hoverMode !== 'none',
        mode: hoverMode === 'none' ? 'repulse' : hoverMode,
      };
      next.interactivity.events.onclick = {
        enable: allowPointer && clickMode !== 'none',
        mode: clickMode === 'none' ? 'push' : clickMode,
      };
      next.interactivity.modes.repulse = {
        ...(next.interactivity.modes.repulse || {}),
        distance,
      };
      next.interactivity.modes.grab = {
        ...(next.interactivity.modes.grab || {}),
        distance: Math.max(60, distance),
        line_linked: {
          ...(next.interactivity.modes.grab?.line_linked || {}),
          opacity: next.interactivity.modes.grab?.line_linked?.opacity ?? 0.28,
        },
      };
      next.interactivity.modes.bubble = {
        ...(next.interactivity.modes.bubble || {}),
        distance,
      };
      next.interactivity.modes.push = {
        ...(next.interactivity.modes.push || {}),
        particles_nb: next.interactivity.modes.push?.particles_nb ?? 3,
      };
      return next;
    };

    const apply = async () => {
      const ok = await this._ensureParticles_?.();
      if (!ok || !window.particlesJS) return;

      // Wait a frame to ensure <div id="ddcParticles"> is fully in the shadow DOM
      await (typeof requestAnimationFrame === 'function'
        ? new Promise(r => requestAnimationFrame(() => r()))
        : Promise.resolve());

      await (typeof requestAnimationFrame === 'function'
        ? new Promise(r => requestAnimationFrame(() => r()))
        : Promise.resolve());

      // If a config URL is provided, fetch it ourselves and call the synchronous init.
      // Using .load() breaks in Shadow DOM because it resolves later (outside our scoped document).
      // If a config URL is provided, fetch it ourselves and init synchronously.
      // Using .load() breaks in Shadow DOM because it resolves later (outside our scoped document).
      let finalConf = conf;
      if (cfg.config_url) {
        try {
          const res = await fetch(cfg.config_url, { cache: 'no-store' });
          finalConf = await res.json();
        } catch (err) {
          console.warn('[drag-and-drop-card] Failed to fetch particles config; falling back to defaults', err);
          finalConf = conf;
        }
      }
      finalConf = applyPointerInteractivity(JSON.parse(JSON.stringify(finalConf || conf)));


      // Scope getElementById to the shadow root just for the *synchronous* init call.
      this._withScopedDocument_(() => {
        if (!Array.isArray(window.pJSDom)) { try { window.pJSDom = []; } catch {} }
        window.particlesJS('ddcParticles', finalConf);
      });

      // Keep a handle for cleanup
      if (Array.isArray(window.pJSDom) && window.pJSDom.length) {
        this.__particlesInst = window.pJSDom[window.pJSDom.length - 1];
        if (allowPointer) {
          this._attachParticlesPointerProxy_?.(
            this.__particlesInst,
            this.__particlesInst?.pJS?.canvas?.el || el.querySelector('canvas')
          );
        }
      }
    };

    apply();
    this.__particlesHost = host;
  },

  _destroyParticles_() {
    try { this._detachParticlesPointerProxy_?.(); } catch {}
    try {
      if (!Array.isArray(window.pJSDom)) {
        window.pJSDom = [];
      }
      if (window.pJSDom.length) {
        window.pJSDom.forEach(inst => {
          try { inst.pJS?.fn?.vendors?.destroy?.(); } catch {}
          try { inst.pJS?.fn?.vendors?.destroypJS?.(); } catch {}
        });
        window.pJSDom.length = 0;
      }
    } catch {}
    if (this.__particlesHost) {
      this.__particlesHost.innerHTML = '';
      if (this.__particlesHost.id === 'ddcPageBgHost') {
        this.__particlesHost.style.display = 'none';
      }
    }
    this.__particlesHost = null;
    this.__particlesInst = null;
  },

  /* ========================================================================== */
  /* YouTube video background (muted, looping, “cover”)                         */
  /* ========================================================================== */

  _parseYouTubeId_(input) {
    if (!input) return null;
    const s = String(input).trim();
    const m =
      s.match(/(?:youtube\.com\/.*[?&]v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/) ||
      s.match(/^([A-Za-z0-9_-]{11})$/);
    return m ? m[1] : null;
  },

  async _ensureYouTube_() {
    if (window.YT?.Player) return true;
    if (!this.__ytReadyPromise) {
      this.__ytReadyPromise = new Promise((resolve) => {
        const ready = () => resolve(true);
        if (window.YT?.Player) return ready();
        window.onYouTubeIframeAPIReady = ready;
        const s = document.createElement('script');
        s.src = 'https://www.youtube.com/iframe_api';
        s.async = true; s.onerror = () => resolve(false);
        document.head.appendChild(s);
      });
    }
    return this.__ytReadyPromise;
  },

  _attachYouTubeIframeDirect_(wrap, videoId, { start, end, mute = true, loop = true } = {}) {
    const params = new URLSearchParams({
      autoplay: '1',
      mute: mute ? '1' : '0',
      controls: '0',
      playsinline: '1',
      rel: '0',
      modestbranding: '1',
      iv_load_policy: '3',
      loop: loop ? '1' : '0'
    });
    if (loop) params.set('playlist', videoId);
    if (Number.isFinite(start)) params.set('start', String(start));
    if (Number.isFinite(end))   params.set('end',   String(end));

    const src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture; fullscreen');
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.style.position = 'absolute';
    iframe.style.inset = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    wrap.appendChild(iframe);
    this.__ytWrap = wrap;
    this._layoutYtBackground_?.();
  },

  _attachYouTubeBackground_(cfg = {}, mountHost = null) {
    this.__ytSize = (cfg.size || 'cover');
    this.__ytPosition = (cfg.position || 'center');
    this.__ytOpacity = (cfg.opacity != null ? Math.max(0, Math.min(1, Number(cfg.opacity))) : 1);
    this.__ytAttachment = (cfg.attachment || 'scroll');
    // map position keywords to anchors
    const posStr = String(this.__ytPosition).toLowerCase();
    let ax = 0.5, ay = 0.5;
    if (posStr.includes('left')) ax = 0.0;
    else if (posStr.includes('right')) ax = 1.0;
    if (posStr.includes('top')) ay = 0.0;
    else if (posStr.includes('bottom')) ay = 1.0;
    if (posStr === 'center' || posStr === 'centre' || posStr === 'middle') { ax = 0.5; ay = 0.5; }
    this.__ytAx = ax; this.__ytAy = ay;

    const host = mountHost || this._ensureBgHost_();
    if (!host) return;

    const videoId = this._parseYouTubeId_(cfg.video_id || cfg.url);
    if (!videoId) { console.warn('[drag-and-drop-card] No YouTube video id'); return; }
    this.__ytBackgroundSignature = this._getYouTubeBackgroundSignature_?.(cfg, { host }) || '';

    // wrapper we can size/center for “cover”
    const wrap = document.createElement('div');
    wrap.className = 'yt-bg';
    // Honour the attachment setting: when "fixed" the video should stay put
    // relative to the viewport rather than scrolling with the card.  For
    // other values we fall back to absolute positioning within the card
    // container.  Positioning and sizing of the actual iframe will still
    // be handled in _layoutYtBackground_.
    if (this.__ytAttachment === 'fixed') {
      wrap.style.position = 'fixed';
      wrap.style.left = '0';
      wrap.style.top = '0';
      wrap.style.width = '100%';
      wrap.style.height = '100%';
    } else {
      wrap.style.position = 'absolute';
      wrap.style.inset = '0';
    }
    wrap.style.opacity = String(this.__ytOpacity);
    wrap.style.filter = 'none';
    wrap.style.pointerEvents = 'none';  // don’t swallow drags
    host.appendChild(wrap);

    const frame = document.createElement('div');
    frame.id = 'ddcYtFrame';
    frame.style.position = 'absolute';
    frame.style.left = '0';
    frame.style.top  = '0';
    frame.style.width = '100%';
    frame.style.height= '100%';
    wrap.appendChild(frame);

    const start = Number.isFinite(cfg.start) ? Number(cfg.start) : undefined;
    const end   = Number.isFinite(cfg.end)   ? Number(cfg.end)   : undefined;
    const mute  = cfg.mute !== false;  // default true
    const loop  = cfg.loop !== false;  // default true

    const init = async () => {
      const ok = await this._ensureYouTube_();
      if (!ok || !(window.YT && window.YT.Player)) {
        this._attachYouTubeIframeDirect_(wrap, videoId, { start, end, mute, loop });
        if (!this.__ytResizeObs) {
          this.__ytResizeObs = new ResizeObserver(() => this._layoutYtBackground_?.());
          try { this.__ytResizeObs.observe(this.cardContainer); } catch {}
          window.addEventListener('resize', this.__ytOnWinResize = () => this._layoutYtBackground_?.());
        }
        return;
      }


      // API path (keep your existing code)
        this.__ytPlayer = new window.YT.Player(frame, {
          width: '100%',
          height: '100%',
          videoId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            rel: 0,
            playsinline: 1,
            loop: loop ? 1 : 0,
            playlist: loop ? videoId : undefined,
            start: start,
            end: end
          },
        events: {
          onReady: (e) => {
            try {
              if (mute) e.target.mute();
              e.target.playVideo();
            } catch {}
            this._layoutYtBackground_?.();
          },
          onStateChange: (e) => {
            if (e.data === window.YT.PlayerState.ENDED && loop) {
              try {
                const s = Number.isFinite(start) ? start : 0;
                const now = (window.performance && performance.now) ? performance.now() : Date.now();
                if (!this.__ytLastLoopAt || (now - this.__ytLastLoopAt) > 1500) {
                  this.__ytLastLoopAt = now;
                  e.target.seekTo(s, true);
                  e.target.playVideo();
                }
              } catch {}
            }
          }
        }
      });

      if (!this.__ytResizeObs) {
        this.__ytResizeObs = new ResizeObserver(() => this._layoutYtBackground_?.());
        try { this.__ytResizeObs.observe(this.cardContainer); } catch {}
        window.addEventListener('resize', this.__ytOnWinResize = () => this._layoutYtBackground_?.());
      }
    };

    init();

    this.__ytWrap = wrap;
  },

  _layoutYtBackground_() {  // Fit a 16:9 iframe according to selected size
    try {
      if (!this.__ytWrap) return;
      const pageMode = this.__ytWrap?.parentElement?.id === 'ddcPageBgHost';
      if (pageMode) {
        const vw = Math.max(window.innerWidth || 0, 1);
        const vh = Math.max(window.innerHeight || 0, 1);
        const size = this.__ytSize || 'cover';
        const videoAR = 16 / 9;
        const contAR = vw / vh;
        let w = vw;
        let h = vh;

        if (size === 'contain') {
          if (contAR > videoAR) {
            h = vh;
            w = h * videoAR;
          } else {
            w = vw;
            h = w / videoAR;
          }
        } else if (!(size === '100% 100%' || size === 'fill' || size === 'stretch')) {
          if (contAR > videoAR) {
            w = vw;
            h = w / videoAR;
          } else {
            h = vh;
            w = h * videoAR;
          }
        }

        const ax = (this.__ytAx != null) ? this.__ytAx : 0.5;
        const ay = (this.__ytAy != null) ? this.__ytAy : 0.5;
        const left = (vw - w) * ax;
        const top = (vh - h) * ay;
        const el = this.__ytWrap.querySelector('iframe') || this.__ytWrap;
        el.style.width = `${w}px`;
        el.style.height = `${h}px`;
        el.style.left = `${left}px`;
        el.style.top = `${top}px`;
        return;
      }
      // In auto size mode the card container’s natural width may be
      // larger than the visible viewport.  When computing the video
      // background dimensions we should use the visible container (the
      // outer scale wrapper) rather than the full card canvas so the
      // video covers the same portion of the screen as in dynamic mode.
      // In other modes we continue to use the card container itself.
      // Prefer the scale wrapper if it exists (both dynamic and auto modes)
      let contEl = this.__scaleOuter || this.cardContainer;
      // First determine the natural (design) size of the card canvas.  These
      // values correspond to the unscaled width and height of the card.  If
      // these are unavailable we fall back to the measured dimensions.
      let natW = 0;
      let natH = 0;
      try {
        natW = parseFloat(this.cardContainer?.style?.width)  || this.cardContainer?.scrollWidth  || this.cardContainer?.offsetWidth  || 0;
        natH = parseFloat(this.cardContainer?.style?.height) || this.cardContainer?.scrollHeight || this.cardContainer?.offsetHeight || 0;
      } catch {}

      // Determine the visible canvas size.  In auto mode this is the size
      // of the scale wrapper (contEl), whereas in dynamic mode we want to
      // treat the canvas as if it had its natural size (so that the video
      // covers the full design area before scaling).  After computing the
      // natural size, the actual on‑screen size will be downscaled via the
      // CSS transform on the card container.
      let cw;
      let ch;
      try {
        const modeName = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
        cw = natW || contEl.getBoundingClientRect().width;
        ch = natH || contEl.getBoundingClientRect().height;
      } catch {
        // Fallback: use the scale wrapper’s measured dimensions
        const r = contEl.getBoundingClientRect();
        cw = r.width;
        ch = r.height;
      }
      const fixedAttach = (this.__ytAttachment === 'fixed');
      const vw = fixedAttach ? (window.innerWidth  || cw) : cw;
      const vh = fixedAttach ? (window.innerHeight || ch) : ch;

      if (!cw || !ch) return;

      const size = this.__ytSize || 'cover';
      const videoAR = 16/9;
      const contAR  = (fixedAttach ? (vw / vh) : (cw / ch));

      let w, h, left = 0, top = 0;

      if (size === '100% 100%' || size === 'fill' || size === 'stretch'){
        w = (fixedAttach ? vw : cw); h = (fixedAttach ? vh : ch); left = 0; top = 0;
      } else if (size === 'contain'){
        if (contAR > videoAR){
          h = (fixedAttach ? vh : ch); w = (fixedAttach ? vh : ch) * videoAR;
          top = 0; left = (cw - w)/2;
        } else {
          w = (fixedAttach ? vw : cw); h = (fixedAttach ? vw : cw) / videoAR;
          left = 0; top = (ch - h)/2;
        }
      } else { // default 'cover' or 'auto'
        if (contAR > videoAR){
          w = (fixedAttach ? vw : cw); h = (fixedAttach ? vw : cw) / videoAR;
          left = 0; top = (ch - h)/2;
        } else {
          h = (fixedAttach ? vh : ch); w = (fixedAttach ? vh : ch) * videoAR;
          top = 0; left = (cw - w)/2;
        }
      }

      this.__ytWrap.style.overflow = 'hidden';
      const ax = (this.__ytAx != null) ? this.__ytAx : 0.5;
      const ay = (this.__ytAy != null) ? this.__ytAy : 0.5;
      left = ((fixedAttach ? vw : cw) - w) * ax;
      top  = ((fixedAttach ? vh : ch) - h) * ay;
      const el = this.__ytWrap.querySelector('iframe') || this.__ytWrap;
      el.style.width  = `${w}px`;
      el.style.height = `${h}px`;
      el.style.left   = `${left}px`;
      el.style.top    = `${top}px`;
    } catch {}
      },

  _destroyYouTube_() {
    let parentHost = null;
    try { parentHost = this.__ytWrap?.parentNode || null; } catch {}
    try { this.__ytPlayer?.destroy?.(); } catch {}
    this.__ytPlayer = null;

    if (this.__ytResizeObs) {
      try { this.__ytResizeObs.disconnect(); } catch {}
      this.__ytResizeObs = null;
    }
    if (this.__ytOnWinResize) {
      window.removeEventListener('resize', this.__ytOnWinResize);
      this.__ytOnWinResize = null;
    }

    if (this.__ytWrap?.parentNode) this.__ytWrap.parentNode.removeChild(this.__ytWrap);
    try {
      if (parentHost?.id === 'ddcPageBgHost') parentHost.style.display = 'none';
    } catch {}
    this.__ytWrap = null;
    this.__ytBackgroundSignature = '';
  },




  /**
   * Evaluate an array of visibility conditions against the current hass state.
   * Returns true if the card should be shown. Conditions follow the same
   * structure as Home Assistant’s per‑card visibility settings. Only a subset
   * of condition types are supported: state, numeric_state, screen and user.
   * Unknown condition types are treated as passing.
   *
   * @param {Array} visList Array of condition objects
   * @returns {boolean} true if all conditions evaluate to true, otherwise false
   */

  _getDefaultBackgroundPresets_() {
    return [
      {
        id: 'default-bg-01',
        label: 'Default 1',
        src: 'https://i.postimg.cc/QMhjRLRT/Chat-GPT-Image-May-25-2026-08-39-39-PM-(1).png',
      },
      {
        id: 'default-bg-02',
        label: 'Default 2',
        src: 'https://i.postimg.cc/jSzsgqkh/Chat-GPT-Image-May-25-2026-08-39-39-PM-(2).png',
      },
      {
        id: 'default-bg-03',
        label: 'Default 3',
        src: 'https://i.postimg.cc/vZWQq8Sz/Chat-GPT-Image-May-25-2026-08-39-39-PM-(3).png',
      },
      {
        id: 'default-bg-04',
        label: 'Default 4',
        src: 'https://i.postimg.cc/bwQzCYFx/Chat-GPT-Image-May-25-2026-08-39-39-PM-(4).png',
      },
      {
        id: 'default-bg-05',
        label: 'Default 5',
        src: 'https://i.postimg.cc/XYwVHNDp/Chat-GPT-Image-May-25-2026-08-39-39-PM-(5).png',
      },
      {
        id: 'default-bg-06',
        label: 'Default 6',
        src: 'https://i.postimg.cc/x1K0xjFk/Chat-GPT-Image-May-25-2026-08-39-39-PM-(6).png',
      },
      {
        id: 'default-bg-07',
        label: 'Default 7',
        src: 'https://i.postimg.cc/52wx79kt/Chat-GPT-Image-May-25-2026-08-39-39-PM-(7).png',
      },
      {
        id: 'default-bg-08',
        label: 'Default 8',
        src: 'https://i.postimg.cc/g2vYScBx/Chat-GPT-Image-May-25-2026-08-39-39-PM-(8).png',
      },
    ];
  },
};

export function installBackgroundEffectsMethods(proto) {
  for (const [name, value] of Object.entries(backgroundEffectsMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
