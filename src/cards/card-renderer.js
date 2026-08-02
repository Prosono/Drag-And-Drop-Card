/*
 * Card wrapper creation and embedded Lovelace card rendering.
 *
 * This module turns saved layout entries into positioned card DOM, keeps nested Home Assistant cards
 * rebuilt when needed, and coordinates sidebar/card-mod rebuild behavior.
 */

const raf = () => new Promise((resolve) => {
  const scheduler = typeof requestAnimationFrame === 'function'
    ? requestAnimationFrame
    : (callback) => setTimeout(callback, 0);
  scheduler(() => resolve());
});

/* Card creation, wrapper controls, card config extraction, and layout insertion helpers. */
const cardBuilderMethods = {
  _isBubblePopupCardConfig_(cfg = {}, depth = 0) {
    try {
      if (!cfg || typeof cfg !== 'object' || depth > 6) return false;
      const type = String(cfg?.type || '').trim().toLowerCase();
      const cardType = String(cfg?.card_type ?? cfg?.cardType ?? '').trim().toLowerCase();
      if (type === 'custom:bubble-pop-up') return true;
      if (type === 'custom:bubble-card' && cardType === 'pop-up') return true;
      const nestedCards = Array.isArray(cfg?.cards) ? cfg.cards : [];
      if (nestedCards.some((child) => this._isBubblePopupCardConfig_(child, depth + 1))) return true;
      if (cfg?.card && typeof cfg.card === 'object') {
        return this._isBubblePopupCardConfig_(cfg.card, depth + 1);
      }
      return false;
    } catch {
      return false;
    }
  },

  _normalizeBubblePopupHash_(value = '') {
    const hash = String(value || '').trim();
    if (!hash) return '';
    return hash.replace(/^#/, '').trim().toLowerCase();
  },

  _collectBubblePopupHashes_(cfg = {}, depth = 0, out = new Set()) {
    try {
      if (!cfg || typeof cfg !== 'object' || depth > 6) return out;
      if (this._isBubblePopupCardConfig_(cfg, depth)) {
        const hash = this._normalizeBubblePopupHash_(cfg.hash || cfg.popup_hash || cfg.popupHash || '');
        if (hash) out.add(hash);
      }
      const nestedCards = Array.isArray(cfg?.cards) ? cfg.cards : [];
      nestedCards.forEach((child) => this._collectBubblePopupHashes_(child, depth + 1, out));
      if (cfg?.card && typeof cfg.card === 'object') {
        this._collectBubblePopupHashes_(cfg.card, depth + 1, out);
      }
    } catch {}
    return out;
  },

  _ensureBubblePopupPortal_() {
    try {
      let portal = this.__ddcBubblePopupPortal || this.rootEl?.querySelector?.('#ddcBubblePopupPortal');
      if (!portal) {
        portal = document.createElement('div');
        portal.className = 'ddc-bubble-popup-portal';
        portal.id = 'ddcBubblePopupPortal';
        portal.setAttribute('aria-hidden', 'true');
      }
      if (!portal.parentNode) {
        (this.rootEl || this.shadowRoot)?.appendChild?.(portal);
      }
      this.__ddcBubblePopupPortal = portal;
      return portal;
    } catch {
      return null;
    }
  },

  _getBubblePopupWrappers_() {
    const seen = new Set();
    const out = [];
    const add = (wrap) => {
      if (!wrap || seen.has(wrap)) return;
      seen.add(wrap);
      out.push(wrap);
    };
    try {
      this.cardContainer?.querySelectorAll?.('.card-wrapper.ddc-bubble-popup-wrapper')?.forEach(add);
    } catch {}
    try {
      this.__ddcBubblePopupPortal?.querySelectorAll?.('.card-wrapper.ddc-bubble-popup-wrapper')?.forEach(add);
    } catch {}
    return out;
  },

  _getBubblePopupPortalNodes_() {
    try {
      return Array.from(this.__ddcBubblePopupPortal?.querySelectorAll?.('.bubble-pop-up.ddc-bubble-popup-node-portaled') || []);
    } catch {
      return [];
    }
  },

  _getBubblePopupNodesInWrap_(wrap) {
    const out = [];
    const seen = new Set();
    const walk = (node, depth = 0) => {
      if (!node || depth > 10 || seen.has(node)) return;
      seen.add(node);
      try {
        if (node.nodeType === 1 && node.matches?.('.bubble-pop-up, #root.bubble-pop-up')) out.push(node);
      } catch {}
      try {
        node.querySelectorAll?.('.bubble-pop-up, #root.bubble-pop-up')?.forEach((el) => {
          if (!seen.has(el)) out.push(el);
        });
      } catch {}
      try { if (node.shadowRoot) walk(node.shadowRoot, depth + 1); } catch {}
      try { Array.from(node.childNodes || []).forEach((child) => walk(child, depth + 1)); } catch {}
    };
    walk(wrap);
    return out;
  },

  _getBubblePopupNodesForWrap_(wrap) {
    const out = [];
    const seen = new Set();
    const add = (node) => {
      if (!node || seen.has(node)) return;
      seen.add(node);
      out.push(node);
    };
    try {
      (this._getBubblePopupNodesInWrap_?.(wrap) || []).forEach(add);
      (this._getBubblePopupPortalNodes_?.() || []).forEach((node) => {
        if (node.__ddcBubblePopupSourceWrap === wrap) add(node);
      });
    } catch {}
    return out;
  },

  _isBubblePopupNodeActive_(node) {
    try {
      return !!node && (
        node.classList?.contains?.('is-popup-opened')
        || node.classList?.contains?.('is-opening')
        || node.classList?.contains?.('is-closing')
      );
    } catch {
      return false;
    }
  },

  _isBubblePopupNodeFullyClosed_(node) {
    try {
      return !!node
        && node.classList?.contains?.('is-popup-closed')
        && !this._isBubblePopupNodeActive_?.(node);
    } catch {
      return false;
    }
  },

  _isBubblePopupWrapVisiblyClosed_(wrap) {
    try {
      const nodes = this._getBubblePopupNodesForWrap_?.(wrap) || [];
      if (!nodes.length) return false;
      return nodes.every((node) => this._isBubblePopupNodeFullyClosed_?.(node));
    } catch {
      return false;
    }
  },

  _setBubblePopupPortalActive_(active) {
    try {
      const on = !!active;
      this.toggleAttribute?.('ddc-bubble-popup-active', on);
      this.rootEl?.classList?.toggle?.('ddc-bubble-popup-active', on);
      this.cardContainer?.classList?.toggle?.('ddc-bubble-popup-active', on);
      this.__ddcBubblePopupPortal?.setAttribute?.('aria-hidden', on ? 'false' : 'true');
    } catch {}
  },

  _setupBubblePopupPortalNodeObserver_(node) {
    try {
      if (!node || node.__ddcBubblePopupPortalObserver) return;
      const check = () => {
        try {
          if (!node.isConnected || !node.classList?.contains?.('ddc-bubble-popup-node-portaled')) return;
          if (this._isBubblePopupNodeActive_?.(node)) {
            node.__ddcBubblePopupPortalSeenOpen = true;
            return;
          }
          if (node.__ddcBubblePopupPortalSeenOpen && this._isBubblePopupNodeFullyClosed_?.(node)) {
            this._restoreBubblePopupPortaledWrappers_?.();
          }
        } catch {}
      };
      const obs = new MutationObserver(check);
      obs.observe(node, { subtree: true, childList: true, attributes: true, attributeFilter: ['class', 'style'] });
      node.__ddcBubblePopupPortalObserver = obs;
      setTimeout(check, 120);
      setTimeout(check, 360);
    } catch {}
  },

  _portalBubblePopupWrappers_(wraps = []) {
    const portal = this._ensureBubblePopupPortal_?.();
    if (!portal) return;
    const nodesToPortal = [];
    const seen = new Set();
    wraps.forEach((wrap) => {
      if (!wrap || wrap.dataset?.placeholder) return;
      this._patchBubblePopupShadowStyles_?.(wrap);
      (this._getBubblePopupNodesForWrap_?.(wrap) || []).forEach((node) => {
        if (!node || seen.has(node)) return;
        seen.add(node);
        node.__ddcBubblePopupSourceWrap = wrap;
        nodesToPortal.push(node);
      });
    });
    if (!nodesToPortal.length) return 0;
    this._setBubblePopupPortalActive_?.(true);
    nodesToPortal.forEach((node) => {
      if (!node.__ddcBubblePopupNodeHome) {
        const marker = document.createComment('ddc-bubble-popup-node-home');
        const parent = node.parentNode;
        const nextSibling = node.nextSibling;
        try { parent?.insertBefore?.(marker, node); } catch {}
        node.__ddcBubblePopupNodeHome = { parent, nextSibling, marker };
      }
      if (node.parentNode !== portal) {
        try { portal.appendChild(node); } catch {}
      }
      node.classList.add('ddc-bubble-popup-node-portaled');
      this._setupBubblePopupPortalNodeObserver_?.(node);
    });
    return nodesToPortal.length;
  },

  _restoreBubblePopupPortaledWrappers_(keepSet = null) {
    try {
      const portal = this.__ddcBubblePopupPortal;
      const keep = keepSet instanceof Set ? keepSet : null;
      const nodes = Array.from(portal?.querySelectorAll?.('.bubble-pop-up.ddc-bubble-popup-node-portaled') || []);
      nodes.forEach((node) => {
        if (keep?.has(node)) return;
        const home = node.__ddcBubblePopupNodeHome || {};
        const parent = home.marker?.parentNode || (home.parent?.isConnected ? home.parent : null);
        if (parent) {
          const next = home.marker?.parentNode === parent
            ? home.marker
            : (home.nextSibling?.parentNode === parent ? home.nextSibling : null);
          try { parent.insertBefore(node, next); } catch { try { parent.appendChild(node); } catch {} }
        }
        try { node.__ddcBubblePopupPortalObserver?.disconnect?.(); } catch {}
        delete node.__ddcBubblePopupPortalObserver;
        delete node.__ddcBubblePopupPortalSeenOpen;
        delete node.__ddcBubblePopupNodeHome;
        delete node.__ddcBubblePopupSourceWrap;
        try { home.marker?.remove?.(); } catch {}
        node.classList.remove('ddc-bubble-popup-node-portaled');
      });

      const wraps = Array.from(portal?.querySelectorAll?.('.card-wrapper.ddc-bubble-popup-portaled') || []);
      wraps.forEach((wrap) => {
        if (keep?.has(wrap)) return;
        const home = wrap.__ddcBubblePopupHome || {};
        const parent = home.marker?.parentNode || (home.parent?.isConnected ? home.parent : this.cardContainer);
        if (parent) {
          const next = home.marker?.parentNode === parent
            ? home.marker
            : (home.nextSibling?.parentNode === parent ? home.nextSibling : null);
          try { parent.insertBefore(wrap, next); } catch { try { parent.appendChild(wrap); } catch {} }
        }
        try { wrap.__ddcBubblePopupPortalObserver?.disconnect?.(); } catch {}
        delete wrap.__ddcBubblePopupPortalObserver;
        delete wrap.__ddcBubblePopupPortalSeenOpen;
        try { home.marker?.remove?.(); } catch {}
        wrap.classList.remove('ddc-bubble-popup-portaled');
        try { wrap.firstElementChild?.removeAttribute?.('data-ddc-bubble-popup-portaled'); } catch {}
        if (home.display != null) wrap.style.display = home.display;
        wrap.inert = !!home.inert;
        wrap.classList.toggle('ddc-hidden', !!home.hidden);
        delete wrap.__ddcBubblePopupHome;
        try { this._applyWrapDisplayState_?.(wrap); } catch {}
      });
      const remaining = portal?.querySelector?.('.bubble-pop-up.ddc-bubble-popup-node-portaled, .card-wrapper.ddc-bubble-popup-portaled');
      this._setBubblePopupPortalActive_?.(!!remaining);
    } catch {}
  },

  _patchBubblePopupShadowStyles_(wrap) {
    try {
      if (!wrap) return;
      const css = `
        :host([data-ddc-bubble-popup-portaled]){
          display:block !important;
          width:100vw !important;
          min-height:100dvh !important;
          background:transparent !important;
          border:0 !important;
          box-shadow:none !important;
          pointer-events:none !important;
        }
        :host([data-ddc-bubble-popup-portaled]) ha-card,
        :host([data-ddc-bubble-popup-portaled]) .card-content{
          display:block !important;
          width:100% !important;
          min-height:100dvh !important;
          padding:0 !important;
          margin:0 !important;
          background:transparent !important;
          border:0 !important;
          box-shadow:none !important;
          overflow:visible !important;
          pointer-events:none !important;
        }
        :host([data-ddc-bubble-popup-portaled]) #root.is-popup-closed,
        :host([data-ddc-bubble-popup-portaled]) #root.is-popup-closed *,
        :host([data-ddc-bubble-popup-portaled]) .bubble-pop-up.is-popup-closed,
        :host([data-ddc-bubble-popup-portaled]) .bubble-pop-up.is-popup-closed *{
          visibility:hidden !important;
          pointer-events:none !important;
        }
        :host([data-ddc-bubble-popup-portaled]) .bubble-pop-up{
          pointer-events:auto !important;
        }
        :host([data-ddc-bubble-popup-portaled]) .bubble-backdrop,
        :host([data-ddc-bubble-popup-portaled]) .bubble-backdrop-host,
        :host([data-ddc-bubble-popup-portaled]) .bubble-pop-up-blur-layer,
        :host([data-ddc-bubble-popup-portaled]) .bubble-card-scroll-lock-layer{
          pointer-events:auto !important;
        }
        .bubble-pop-up:not(.editor):not(.popup-mode-fit-content):not(.popup-mode-centered):not(.popup-mode-adaptive-dialog){
          --ddc-bubble-popup-radius:var(--bubble-pop-up-content-border-radius, var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)));
          height:auto !important;
          max-height:min(78vh, calc(100vh - 96px)) !important;
          top:clamp(48px, 6vh, 88px) !important;
          bottom:auto !important;
          border-radius:var(--ddc-bubble-popup-radius) !important;
          overflow:hidden !important;
          z-index:2147482600 !important;
        }
        .bubble-pop-up.is-popup-closed:not(.editor):not(.is-opening):not(.is-closing){
          visibility:hidden !important;
          opacity:0 !important;
          pointer-events:none !important;
          transform:translate3d(0, calc(100vh + 160px), 0) !important;
        }
        .bubble-pop-up:not(.editor):not(.popup-mode-fit-content):not(.popup-mode-centered):not(.popup-mode-adaptive-dialog) > .bubble-pop-up-container{
          height:auto !important;
          max-height:calc(min(78vh, calc(100vh - 96px)) - 56px) !important;
          overflow:auto !important;
          padding-bottom:18px !important;
          border-radius:var(--ddc-bubble-popup-radius) !important;
          -webkit-clip-path:inset(0 round var(--ddc-bubble-popup-radius)) !important;
          clip-path:inset(0 round var(--ddc-bubble-popup-radius)) !important;
        }
        .bubble-pop-up:not(.editor):not(.popup-mode-fit-content):not(.popup-mode-centered):not(.popup-mode-adaptive-dialog) > .bubble-pop-up-background{
          border-radius:var(--ddc-bubble-popup-radius) !important;
        }
      `;
      const patchRoot = (root) => {
        if (!root) return;
        const existing = root.querySelector?.('#ddcBubblePopupStylePatch');
        if (existing) {
          if (existing.textContent !== css) existing.textContent = css;
          return;
        }
        const style = document.createElement('style');
        style.id = 'ddcBubblePopupStylePatch';
        style.textContent = css;
        root.appendChild(style);
      };
      const walk = (node, depth = 0, seen = new Set()) => {
        if (!node || depth > 10 || seen.has(node)) return;
        seen.add(node);
        if (node.shadowRoot) {
          patchRoot(node.shadowRoot);
          walk(node.shadowRoot, depth + 1, seen);
        }
        const children = node.childNodes ? Array.from(node.childNodes) : [];
        children.forEach((child) => walk(child, depth + 1, seen));
      };
      walk(wrap);
      requestAnimationFrame(() => walk(wrap));
      setTimeout(() => walk(wrap), 160);
    } catch {}
  },

  _syncBubblePopupWrappers_() {
    try {
      if (this.editMode) this._restoreBubblePopupPortaledWrappers_?.();
      const wraps = Array.from(this.cardContainer?.querySelectorAll?.('.card-wrapper:not(.ddc-placeholder)') || []);
      let hasBubblePopupWrapper = false;
      wraps.forEach((wrap) => {
        try { wrap.firstElementChild?.removeAttribute?.('data-ddc-bubble-popup-portaled'); } catch {}
        let cfg = null;
        try {
          cfg = wrap.dataset?.cfg ? JSON.parse(wrap.dataset.cfg) : this._extractCardConfig?.(wrap.firstElementChild);
        } catch {
          cfg = this._extractCardConfig?.(wrap.firstElementChild) || null;
        }
        const isBubblePopupWrapper = this._isBubblePopupCardConfig_(cfg || {});
        const wasBubblePopupWrapper = wrap.classList.contains('ddc-bubble-popup-wrapper')
          || wrap.dataset?.bubblePopupWrapper === 'true';
        if (!isBubblePopupWrapper) {
          wrap.classList.remove('ddc-bubble-popup-wrapper');
          delete wrap.dataset.bubblePopupWrapper;
          if (wasBubblePopupWrapper) {
            this._setCardPosition?.(
              wrap,
              parseFloat(wrap.getAttribute('data-x')) || 0,
              parseFloat(wrap.getAttribute('data-y')) || 0
            );
          }
          return;
        }
        wrap.classList.add('ddc-bubble-popup-wrapper');
        wrap.dataset.bubblePopupWrapper = 'true';
        hasBubblePopupWrapper = true;
        this._patchBubblePopupShadowStyles_?.(wrap);
        if (!wasBubblePopupWrapper) {
          this._setCardPosition?.(
            wrap,
            parseFloat(wrap.getAttribute('data-x')) || 0,
            parseFloat(wrap.getAttribute('data-y')) || 0
          );
        }
      });
      if (hasBubblePopupWrapper) this._ensureBubblePopupHashListeners_?.();
      this._syncBubblePopupActiveState_?.();
    } catch {}
  },

  _ensureBubblePopupHashListeners_() {
    try {
      if (this.__ddcBubblePopupHashListenersInstalled) return;
      this.__ddcBubblePopupHashListenersInstalled = true;
      this.__ddcBubblePopupHashHandler = this.__ddcBubblePopupHashHandler || (() => {
        try { requestAnimationFrame(() => this._syncBubblePopupActiveState_?.()); } catch {}
        try { setTimeout(() => this._syncBubblePopupActiveState_?.(), 90); } catch {}
        try { setTimeout(() => this._syncBubblePopupActiveState_?.(), 260); } catch {}
      });
      window.addEventListener('hashchange', this.__ddcBubblePopupHashHandler);
      window.addEventListener('popstate', this.__ddcBubblePopupHashHandler);
      window.addEventListener('location-changed', this.__ddcBubblePopupHashHandler);
    } catch {}
  },

  _clearBubblePopupHashListeners_() {
    try {
      if (!this.__ddcBubblePopupHashListenersInstalled || !this.__ddcBubblePopupHashHandler) return;
      window.removeEventListener('hashchange', this.__ddcBubblePopupHashHandler);
      window.removeEventListener('popstate', this.__ddcBubblePopupHashHandler);
      window.removeEventListener('location-changed', this.__ddcBubblePopupHashHandler);
      this.__ddcBubblePopupHashListenersInstalled = false;
      this._restoreBubblePopupPortaledWrappers_?.();
    } catch {}
  },

  _syncBubblePopupActiveState_() {
    try {
      const wraps = this._getBubblePopupWrappers_?.() || [];
      const hasBubblePopupWrapper = !!wraps.length;
      const activeHash = this._normalizeBubblePopupHash_(window.location?.hash || '');
      const configuredHashes = new Set();
      const matchingWraps = [];
      wraps.forEach((wrap) => {
        try {
          const cfg = wrap.dataset?.cfg ? JSON.parse(wrap.dataset.cfg) : this._extractCardConfig?.(wrap.firstElementChild);
          const wrapHashes = this._collectBubblePopupHashes_(cfg || {}, 0, new Set());
          wrapHashes.forEach((hash) => configuredHashes.add(hash));
          if (activeHash && (wrapHashes.size ? wrapHashes.has(activeHash) : false)) {
            matchingWraps.push(wrap);
          }
        } catch {}
      });
      const hashMatchesPopup = configuredHashes.size ? configuredHashes.has(activeHash) : !!activeHash;
      const active = hasBubblePopupWrapper && !!activeHash && hashMatchesPopup && !this.editMode;
      if (active) {
        const targetWraps = matchingWraps.length ? matchingWraps : (configuredHashes.size ? [] : wraps);
        const keep = new Set();
        targetWraps.forEach((wrap) => {
          (this._getBubblePopupNodesForWrap_?.(wrap) || []).forEach((node) => keep.add(node));
        });
        if (targetWraps.length) {
          this._restoreBubblePopupPortaledWrappers_?.(keep);
          const portaledCount = this._portalBubblePopupWrappers_?.(targetWraps) || 0;
          this._setBubblePopupPortalActive_?.(portaledCount > 0 || keep.size > 0);
        } else {
          this._restoreBubblePopupPortaledWrappers_?.();
        }
      } else {
        const keep = new Set(
          (this._getBubblePopupPortalNodes_?.() || [])
            .filter((node) => this._isBubblePopupNodeActive_?.(node) && !this._isBubblePopupNodeFullyClosed_?.(node))
        );
        if (keep.size) {
          this._restoreBubblePopupPortaledWrappers_?.(keep);
          this._setBubblePopupPortalActive_?.(true);
        } else {
          this._restoreBubblePopupPortaledWrappers_?.();
        }
      }
    } catch {}
  },

  _restoreBackgroundHostToContainer_() {
    if (!this.cardContainer) return;
    let bgHost = this.cardContainer.querySelector('#ddcBgHost');
    if (!bgHost) {
      bgHost = document.createElement('div');
      bgHost.className = 'ddc-bg-host';
      bgHost.id = 'ddcBgHost';
      bgHost.setAttribute('aria-hidden', 'true');
    }
    let bubbleShade = this.cardContainer.querySelector('#ddcBubblePopupShade');
    if (!bubbleShade) {
      bubbleShade = document.createElement('div');
      bubbleShade.className = 'ddc-bubble-popup-shade';
      bubbleShade.id = 'ddcBubblePopupShade';
      bubbleShade.setAttribute('aria-hidden', 'true');
    }
    this.cardContainer.innerHTML = '';
    this.cardContainer.appendChild(bgHost);
    this.cardContainer.appendChild(bubbleShade);
    this._ensureConnectorsLayer_();
  },

  async _buildCardsFromEntries_(entries = [], ticket = 0, options = {}) {
    let entryList = Array.isArray(entries) ? entries : [];
    const replaceExisting = !!options?.replaceExisting;
    if (!entryList.length && !replaceExisting && this._shouldShowEmptyDashboardPlaceholder_?.() === false) {
      try {
        const cached = this._readRuntimeLayoutCache_?.();
        const targetProfile = this._getRequestedResponsiveProfile_?.() || 'desktop';
        const targetOrientation = this._getRequestedResponsiveOrientation_?.(targetProfile) || 'landscape';
        const targetLayoutKey =
          this._getRuntimeResponsiveLayoutKey_?.(targetProfile, targetOrientation)
          || this._getResponsiveLayoutKey_?.(targetProfile, targetOrientation)
          || this._getPrimaryResponsiveLayoutKey_?.();
        const cachedLayouts = cached?.cards?.length
          ? this._normalizeResponsiveLayouts_?.(cached.cards || [], cached.responsive_layouts || null)
          : null;
        entryList = cachedLayouts?.[targetLayoutKey] || cachedLayouts?.[this._getPrimaryResponsiveLayoutKey_?.()] || [];
        if (entryList.length) {
          this._responsiveLayouts = cachedLayouts;
          this._activeResponsiveLayoutKey = targetLayoutKey;
          this._activeResponsiveProfile = targetProfile;
        }
      } catch {}
    }
    if (entryList.length === 0 && !replaceExisting && this._shouldShowEmptyDashboardPlaceholder_?.() === false) {
      this._hideEmptyPlaceholder?.();
      this._syncEmptyStateUI?.();
      this._applyAutoScale?.();
      return;
    }

    this._restoreBackgroundHostToContainer_();
    this._clearSelection?.();
  
    let builtAny = false;
    let builtCardCount = 0;
    const fragment = document.createDocumentFragment();
    const wrappersToRebuild = [];
    const wrappersToInit = [];
    const activeTabId = this._normalizeTabId?.(this.activeTab || this.defaultTab) || this.defaultTab;
    const canDeferInactiveTabs = !this.editMode && Array.isArray(this.tabs) && this.tabs.length > 1;
    for (const conf of entryList) {
      if (ticket && ticket !== this.__responsiveSwitchSeq) return;
      const normalized = this._normalizeSavedCardEntry_(conf);
      if (!normalized?.card || (typeof normalized.card === 'object' && Object.keys(normalized.card).length === 0)) {
        const wrap = this._makePlaceholderAt(
          normalized.position?.x || 0,
          normalized.position?.y || 0,
          normalized.size?.width || 200,
          normalized.size?.height || 200
        );
        wrap.dataset.layoutCardId = normalized.id;
        wrap.dataset.tabId = this._normalizeTabId(normalized.tabId || this.defaultTab);
        this._setWrapperLayerIds_(wrap, normalized.layerIds || normalized.layer_ids || []);
        fragment.appendChild(wrap);
        wrappersToRebuild.push(wrap);
        builtAny = true;
        continue;
      }

      const entryTabId = this._normalizeTabId?.(normalized.tabId || this.defaultTab) || this.defaultTab;
      if (canDeferInactiveTabs && entryTabId !== activeTabId) {
        const wrap = this._makeDeferredCardWrapper_(normalized);
        fragment.appendChild(wrap);
        wrappersToInit.push(wrap);
        builtAny = true;
        continue;
      }
  
      const cardEl = await this._createCardSafely_(normalized.card);
      if (ticket && ticket !== this.__responsiveSwitchSeq) return;
      const wrap = this._makeWrapper(cardEl, { layoutCardId: normalized.id });
      if (this.editMode) wrap.classList.add('editing');
      wrap.dataset.tabId = this._normalizeTabId(normalized.tabId || this.defaultTab);
      this._setWrapperLayerIds_(wrap, normalized.layerIds || normalized.layer_ids || []);
  
      this._setCardPosition(wrap, normalized.position?.x || 0, normalized.position?.y || 0);
      wrap.style.width = `${normalized.size?.width ?? 14 * this.gridSize}px`;
      wrap.style.height = `${normalized.size?.height ?? 10 * this.gridSize}px`;
      this._syncCompactEditUiForWrapper_?.(wrap);
      if (normalized.z != null) wrap.style.zIndex = String(normalized.z);
      if (normalized.overflow) {
        try {
          wrap.style.overflow = normalized.overflow;
          wrap.dataset.overflow = normalized.overflow;
          const inner = wrap.firstElementChild;
          if (inner) inner.style.overflow = normalized.overflow;
        } catch {}
      }
      try { this._applyPerCardStyle_?.(wrap, normalized.card_style || normalized.cardStyle || null); } catch {}
  
      fragment.appendChild(wrap);
      wrappersToRebuild.push(wrap);
      wrappersToInit.push(wrap);
      builtAny = true;
      builtCardCount += 1;
      if (!this.editMode && builtCardCount % 4 === 0) {
        await raf();
        if (ticket && ticket !== this.__responsiveSwitchSeq) return;
      }
    }
  
    if (!builtAny) {
      if (this._shouldShowEmptyDashboardPlaceholder_?.() !== false) {
        this._showEmptyPlaceholder();
      } else {
        this._hideEmptyPlaceholder?.();
      }
      this._applyAutoScale?.();
    } else {
      this.cardContainer.appendChild(fragment);
      wrappersToRebuild.forEach((wrap) => {
        try { this._rebuildOnce(wrap.firstElementChild); } catch {}
      });
      wrappersToInit.forEach((wrap) => {
        try { this._initCardInteract(wrap); } catch {}
      });
      this._resizeContainer();
      this._applyAutoScale?.();
      try {
        this._writeRuntimeLayoutCache_?.({
          version: 3,
          options: this._exportableOptions?.() || {},
          cards: this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_?.()] || entryList,
          responsive_layouts: this._cloneJson_(this._serializeResponsiveLayouts_?.(
            this._responsiveLayouts,
            this._responsiveLayouts?.[this._getPrimaryResponsiveLayoutKey_?.()] || entryList
          )),
          packages: this._exportDashboardPackages_?.() || [],
        });
      } catch {}
    }
  
    this._syncEmptyStateUI?.();
    try {
      this._renderTabs?.();
      this._renderLayersBar_?.();
      this._applyActiveTab?.();
      this._syncBubblePopupWrappers_?.();
    } catch {}
    try { this._renderConnectors_?.(); } catch {}
  },

    _makeCardLoadErrorElement_(cardConfig = {}, err = null) {
      const cleanConfig = this._sanitizeCardConfigForStorage_(cardConfig || {});
      const type = String(cleanConfig?.type || 'unknown card');
      const message = String(err?.message || err || 'This card could not be rendered.');
      const el = document.createElement('div');
      el.className = 'ddc-card-load-error';
      el.__ddcSourceConfig = cleanConfig;
      el.style.cssText = [
        'box-sizing:border-box',
        'width:100%',
        'height:100%',
        'display:flex',
        'flex-direction:column',
        'justify-content:center',
        'gap:8px',
        'padding:14px',
        'border-radius:12px',
        'border:1px solid color-mix(in oklab,var(--error-color,#ef4444) 42%,transparent)',
        'background:color-mix(in oklab,var(--error-color,#ef4444) 10%,var(--card-background-color,#111827) 90%)',
        'color:var(--primary-text-color,#f8fafc)',
        'font:500 13px/1.35 var(--paper-font-body1_-_font-family,Arial,sans-serif)',
        'overflow:auto',
      ].join(';');
      const title = document.createElement('strong');
      title.textContent = `Could not render ${type}`;
      title.style.cssText = 'font-size:13px;font-weight:800;color:var(--error-color,#ef4444);';
      const body = document.createElement('div');
      body.textContent = message;
      body.style.cssText = 'color:var(--secondary-text-color,#94a3b8);word-break:break-word;';
      el.append(title, body);
      return el;
    },

    async _createCardSafely_(cfg) {
      try {
        return await this._createCard(cfg);
      } catch (err) {
        console.warn('[drag-and-drop-card] Could not create Lovelace card', { config: cfg, error: err });
        return this._makeCardLoadErrorElement_(cfg, err);
      }
    },

    _makeDeferredCardElement_(cardConfig = {}) {
      const placeholder = document.createElement('div');
      placeholder.className = 'ddc-deferred-card';
      placeholder.setAttribute('aria-hidden', 'true');
      placeholder.__ddcSourceConfig = this._sanitizeCardConfigForStorage_(cardConfig || {});
      return placeholder;
    },

    _makeDeferredCardWrapper_(normalized = {}) {
      const cleanCard = this._sanitizeCardConfigForStorage_(normalized.card || {});
      const placeholder = this._makeDeferredCardElement_(cleanCard);
      const wrap = this._makeWrapper(placeholder, { layoutCardId: normalized.id });
      wrap.dataset.ddcDeferred = 'true';
      wrap.dataset.tabId = this._normalizeTabId(normalized.tabId || this.defaultTab);
      this._setWrapperLayerIds_(wrap, normalized.layerIds || normalized.layer_ids || []);
      this._setCardPosition(wrap, normalized.position?.x || 0, normalized.position?.y || 0);
      wrap.style.width = `${normalized.size?.width ?? 14 * this.gridSize}px`;
      wrap.style.height = `${normalized.size?.height ?? 10 * this.gridSize}px`;
      if (normalized.z != null) wrap.style.zIndex = String(normalized.z);
      if (normalized.overflow) {
        try {
          wrap.style.overflow = normalized.overflow;
          wrap.dataset.overflow = normalized.overflow;
        } catch {}
      }
      try { this._applyPerCardStyle_?.(wrap, normalized.card_style || normalized.cardStyle || null); } catch {}
      try { wrap.dataset.cfg = JSON.stringify(cleanCard); } catch {}
      return wrap;
    },

    async _hydrateDeferredCardWrapper_(wrap) {
      if (!wrap || wrap.dataset?.ddcDeferred !== 'true' || wrap.dataset?.ddcHydrating === 'true') return false;
      wrap.dataset.ddcHydrating = 'true';
      try {
        let cardConfig = null;
        try { cardConfig = JSON.parse(wrap.dataset.cfg || 'null'); } catch {}
        if (!cardConfig || typeof cardConfig !== 'object') cardConfig = this._extractCardConfig(wrap.firstElementChild) || {};
        const cleanConfig = this._sanitizeCardConfigForStorage_(cardConfig || {});
        const cardEl = await this._createCardSafely_(cleanConfig);
        cardEl.__ddcSourceConfig = cleanConfig;
        const current = wrap.firstElementChild;
        if (current) wrap.replaceChild(cardEl, current);
        else wrap.prepend(cardEl);
        try { wrap.dataset.cfg = JSON.stringify(cleanConfig); } catch {}
        delete wrap.dataset.ddcDeferred;
        delete wrap.dataset.ddcHydrating;
        if (this._hasCardModDeep?.(cleanConfig)) wrap.dataset.needsCardMod = 'true';
        if (wrap.dataset.overflow) {
          try { cardEl.style.overflow = wrap.dataset.overflow; } catch {}
        }
        try { this._rebuildOnce(cardEl); } catch {}
        this.__ddcTextLockDirty = true;
        try { this._scheduleTextResizeLockRefresh_?.(true); } catch {}
        return true;
      } catch (err) {
        delete wrap.dataset.ddcHydrating;
        console.warn('[drag-and-drop-card] Failed to hydrate deferred card', err);
        return false;
      }
    },

    async _hydrateVisibleDeferredCards_(wraps = null) {
      const source = wraps
        ? Array.from(wraps)
        : Array.from(this.cardContainer?.querySelectorAll?.('.card-wrapper[data-ddc-deferred="true"]') || []);
      const candidates = source.filter((wrap) => {
        if (!wrap || wrap.dataset?.ddcDeferred !== 'true') return false;
        if (wrap.style.display === 'none' || wrap.classList.contains('ddc-hidden') || wrap.inert === true) return false;
        return true;
      });
      if (!candidates.length) return 0;
      const batchSize = Math.max(1, Math.min(12, Number(this._config?.dashboard_converter_hydrate_batch_size || 4) || 4));
      let count = 0;
      for (let index = 0; index < candidates.length; index += batchSize) {
        const batch = candidates.slice(index, index + batchSize);
        const results = await Promise.all(batch.map((wrap) => this._hydrateDeferredCardWrapper_(wrap)));
        count += results.filter(Boolean).length;
        if (index + batchSize < candidates.length) {
          try { await raf(); } catch {}
        }
      }
      if (count) {
        try { this._applyVisibility_?.(); } catch {}
        try { this._renderConnectors_?.(); } catch {}
      }
      return count;
    },

    async _createCard(cfg) {
      let sourceCfg = this._sanitizeCardConfigForStorage_(cfg || {});
      if (sourceCfg?.type === 'custom:ddc-html-card') {
        sourceCfg = this._applyHtmlCardConfigOverride_(sourceCfg);
      }
      const runtimeCfg = this._cloneCardConfig_(sourceCfg);
      const type = String(sourceCfg?.type || '');
      if (type === 'custom:ddc-html-card') {
        const el = document.createElement('ddc-html-card');
        el.__ddcSourceConfig = sourceCfg;
        el.setConfig?.(this._cloneCardConfig_(sourceCfg));
        el.__ddcSetEditPreviewMode?.(this.editMode);
        el.hass = this.hass;
        return el;
      }
      if (type === 'custom:ddc-line-card') {
        const el = document.createElement('ddc-line-card');
        el.__ddcSourceConfig = sourceCfg;
        el.setConfig?.(this._cloneCardConfig_(sourceCfg));
        el.hass = this.hass;
        return el;
      }
      if (type === 'custom:ddc-table-card') {
        const el = document.createElement('ddc-table-card');
        el.__ddcSourceConfig = sourceCfg;
        el.setConfig?.(this._cloneCardConfig_(sourceCfg));
        el.hass = this.hass;
        return el;
      }
      if (type === 'custom:ddc-icon-card') {
        const el = document.createElement('ddc-icon-card');
        el.__ddcSourceConfig = sourceCfg;
        el.setConfig?.(this._cloneCardConfig_(sourceCfg));
        el.hass = this.hass;
        return el;
      }
      if (type === 'custom:ddc-text-card') {
        const el = document.createElement('ddc-text-card');
        el.__ddcSourceConfig = sourceCfg;
        el.setConfig?.(this._cloneCardConfig_(sourceCfg));
        el.hass = this.hass;
        return el;
      }
      const helpers = (await this._getCardHelpers_?.()) || await window.loadCardHelpers();
      const el = helpers.createCardElement(runtimeCfg);
      el.__ddcSourceConfig = sourceCfg;
      el.hass = this.hass;
  
      // Special handling for mod-card
      if (sourceCfg.type === 'custom:mod-card') {
        // mod-card needs to be fully initialized before we can work with it
        await new Promise(resolve => setTimeout(resolve, 0));
  
        // Force mod-card to apply its styles
        if (el.setConfig && typeof el.setConfig === 'function') {
          try {
            // Re-apply config to ensure mod-card processes it
            el.setConfig(this._cloneCardConfig_(sourceCfg));
          } catch {}
        }
      }
  
      return el;
    },

    async _replaceEditedCardElement_(wrap, cardConfig = {}) {
      if (!wrap) return null;
      const cleanConfig = this._sanitizeCardConfigForStorage_(cardConfig || {});
      const oldEl = wrap.firstElementChild;
      const newEl = await this._createCard(cleanConfig);

      // Give the new card its live HA state before connection when possible,
      // then once more after connection for cards whose setter initializes Lit.
      try { newEl.hass = this.hass; } catch {}
      try {
        wrap.dataset.cfg = JSON.stringify(cleanConfig);
        if (this._hasCardModDeep?.(cleanConfig)) wrap.dataset.needsCardMod = 'true';
        else delete wrap.dataset.needsCardMod;
      } catch {}
      try { newEl.__ddcSourceConfig = this._cloneCardConfig_(cleanConfig); } catch {}
      try {
        const overflow = wrap.dataset?.overflow || wrap.style?.overflow;
        if (overflow && newEl.style) newEl.style.overflow = overflow;
      } catch {}

      if (oldEl) wrap.replaceChild(newEl, oldEl);
      else wrap.prepend(newEl);

      await raf();
      try {
        newEl.hass = this.hass;
        newEl.requestUpdate?.();
        if (newEl.updateComplete) {
          try { await newEl.updateComplete; } catch {}
        }
      } catch {}

      // `ll-rebuild` intentionally is not dispatched here. It bubbles to the
      // outer Lovelace card and can restore the pre-save layout before the
      // edited config has been persisted, making a manual page refresh appear
      // necessary even though the new value was already saved.
      const isBubblePopup = !!this._isBubblePopupCardConfig_?.(cleanConfig);
      wrap.classList?.toggle?.('ddc-bubble-popup-wrapper', isBubblePopup);
      if (isBubblePopup) {
        wrap.dataset.bubblePopupWrapper = 'true';
        try { requestAnimationFrame(() => this._patchBubblePopupShadowStyles_?.(wrap)); } catch {}
      } else {
        try { delete wrap.dataset.bubblePopupWrapper; } catch {}
      }
      return newEl;
    },

    _createCardAnchors_(wrap) {
      const host = document.createElement('div');
      host.className = 'ddc-card-anchors';
      ['top', 'right', 'bottom', 'left'].forEach((anchor) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'ddc-card-anchor';
        btn.dataset.anchor = anchor;
        btn.setAttribute('title', `Connect from ${anchor}`);
        btn.setAttribute('aria-label', `Connect from ${anchor}`);
        btn.innerHTML = '<span></span>';
        const stop = (ev) => {
          ev.preventDefault?.();
          ev.stopPropagation?.();
        };
        btn.addEventListener('mousedown', stop);
        btn.addEventListener('click', stop);
        btn.addEventListener('pointerdown', (ev) => {
          if (!this.editMode || wrap?.classList?.contains('ddc-connector-anchors-disabled')) return;
          this._startConnectorAnchorDrag_?.(wrap, anchor, ev);
        });
        host.appendChild(btn);
      });
      return host;
    },

    _syncCompactEditUiForWrapper_(wrap) {
      if (!wrap) return;
      try {
        const rect = wrap.getBoundingClientRect?.() || {};
        const sx = Math.max(0.0001, Number(this.__pointerScaleX) || 1);
        const sy = Math.max(0.0001, Number(this.__pointerScaleY) || 1);
        const width =
          parseFloat(wrap.style?.width) ||
          Number(wrap.offsetWidth) ||
          (Number(rect.width) ? Number(rect.width) / sx : 0);
        const height =
          parseFloat(wrap.style?.height) ||
          Number(wrap.offsetHeight) ||
          (Number(rect.height) ? Number(rect.height) / sy : 0);
        const compact = !!(
          (width && width <= 190) ||
          (height && height <= 124) ||
          (width && height && width <= 250 && height <= 96)
        );
        const tiny = !!(
          (width && width <= 112) ||
          (height && height <= 72) ||
          (width && height && width <= 132 && height <= 86)
        );
        wrap.classList.toggle('ddc-compact-edit-ui', compact);
        wrap.classList.toggle('ddc-tiny-edit-ui', tiny);
      } catch {}
    },

    _runCardQuickAction_(wrap, action) {
      if (!wrap || !action) return;
      try {
        this._closeCardSettingsMenu_?.();
        this._closeCompactCardActionsMenu_?.();
        const act = String(action);
        if (act === 'delete') {
          wrap.querySelector?.('.delete-handle')?.click?.();
          return;
        }
        const button = wrap.querySelector?.(`.chip button[data-act="${act}"]`);
        button?.click?.();
      } catch {}
    },

    _createCardEditActions_(wrap) {
      const host = document.createElement('div');
      host.className = 'ddc-card-edit-actions';

      const menuButton = document.createElement('button');
      menuButton.type = 'button';
      menuButton.className = 'ddc-compact-card-actions';
      menuButton.setAttribute('title', 'Open card menu');
      menuButton.setAttribute('aria-label', 'Open card menu');
      menuButton.setAttribute('aria-haspopup', 'menu');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.innerHTML = '<ha-icon icon="mdi:cog-outline"></ha-icon>';

      const editButton = document.createElement('button');
      editButton.type = 'button';
      editButton.className = 'ddc-card-edit-shortcut';
      editButton.setAttribute('title', 'Edit card');
      editButton.setAttribute('aria-label', 'Edit card');
      editButton.innerHTML = '<ha-icon icon="mdi:pencil-outline"></ha-icon>';

      const stopActionEvent = (event) => event.stopPropagation();
      [menuButton, editButton].forEach((button) => {
        button.addEventListener('pointerdown', stopActionEvent, true);
        button.addEventListener('mousedown', stopActionEvent, true);
        button.addEventListener('touchstart', stopActionEvent, true);
      });
      menuButton.addEventListener('click', (event) => {
        event.stopPropagation();
        this._openCompactCardActionsMenu_?.(wrap);
      });
      editButton.addEventListener('click', (event) => {
        event.stopPropagation();
        this._runCardQuickAction_?.(wrap, 'edit');
      });

      const showForPointer = (event) => {
        if (event?.pointerType === 'touch') return;
        host.classList.add('ddc-card-edit-actions-visible');
      };
      const hideForPointer = () => {
        host.classList.remove('ddc-card-edit-actions-visible');
      };
      wrap.addEventListener('pointerenter', showForPointer);
      wrap.addEventListener('pointerleave', hideForPointer);
      wrap.addEventListener('pointercancel', hideForPointer);

      host.append(menuButton, editButton);
      return host;
    },

    _syncCardOverflow_() {
      const mode = this._normalizeCardOverflow_?.(this.cardOverflow) || 'auto';
      this.cardOverflow = mode;
      this.style?.setProperty?.('--ddc-card-overflow', mode);
    },

    _makeWrapper(cardEl, options = {}) {
      this._syncCardOverflow_?.();
      const wrap = document.createElement('div');
      wrap.classList.add('card-wrapper');
      wrap.dataset.tabId = this._normalizeTabId(this.activeTab || this.defaultTab);
      wrap.dataset.layoutCardId = options.layoutCardId || cardEl?.dataset?.layoutCardId || this._genLayoutCardId_();
      if (this.editMode) wrap.classList.add('editing');
      if (!wrap.style.zIndex) {
        // Compute the next z-index and ensure it is at least 6.  Without
        // clamping, the first few cards could be assigned low z-indices
        // that place them behind the grid overlay.  See _highestZ() for
        // baseline initialization.
        const nextVal = this._highestZ() + 1;
        wrap.style.zIndex = String(Math.max(nextVal, 6));
      }
  
      const chip = document.createElement('div');
      chip.className = 'chip';
      chip.innerHTML = `
        <button class="mini" data-act="edit" title="Edit" aria-label="Edit">
          <ha-icon icon="mdi:pencil"></ha-icon><span>Edit</span>
        </button>
        <button class="mini" data-act="duplicate" title="Duplicate" aria-label="Duplicate">
          <ha-icon icon="mdi:content-copy"></ha-icon><span>Duplicate</span>
        </button>
        <button class="mini" data-act="export-card" title="Export card" aria-label="Export card">
          <ha-icon icon="mdi:download-box-outline"></ha-icon><span>Export card</span>
        </button>
        <button class="mini pill" data-act="front" title="Bring forward" aria-label="Bring forward">
          <ha-icon icon="mdi:arrange-bring-forward"></ha-icon>
        </button>
        <button class="mini pill" data-act="back" title="Send backward" aria-label="Send backward">
          <ha-icon icon="mdi:arrange-send-backward"></ha-icon>
        </button>
        <button class="mini pill" data-act="front-most" title="Bring to front" aria-label="Bring to front">
          <ha-icon icon="mdi:arrange-bring-to-front"></ha-icon>
        </button>
        <button class="mini pill" data-act="back-most" title="Send to back" aria-label="Send to back">
          <ha-icon icon="mdi:arrange-send-to-back"></ha-icon>
        </button>
      `;
  
      // Append a settings button to the chip. This button opens a small
      // configuration menu for the card (e.g. overflow options). It is
      // implemented separately rather than baked into the HTML string so the
      // dataset properties and event handlers work correctly.
      const settingsBtn = document.createElement('button');
      settingsBtn.className = 'mini';
      settingsBtn.dataset.act = 'settings';
      settingsBtn.setAttribute('title', 'Settings');
      settingsBtn.setAttribute('aria-label', 'Settings');
      settingsBtn.innerHTML = '<ha-icon icon="mdi:cog"></ha-icon><span>Settings</span>';
      chip.appendChild(settingsBtn);

      const editActions = this._createCardEditActions_(wrap);
  
      // Create a dedicated delete handle that sits in the top‑left corner. This
      // replaces the delete button in the chip and mimics the resize handle in
      // style. Clicking it will remove the card (or multiple cards if a group
      // selection exists).
      const delHandle = document.createElement('button');
      delHandle.type = 'button';
      delHandle.className = 'delete-handle';
      delHandle.setAttribute('title', 'Delete card');
      delHandle.setAttribute('aria-label', 'Delete card');
      delHandle.innerHTML = `<ha-icon icon="mdi:close-thick"></ha-icon>`;
      ['pointerdown', 'mousedown', 'touchstart'].forEach((type) => {
        delHandle.addEventListener(type, (event) => event.stopPropagation(), true);
      });
      delHandle.addEventListener('click', (e) => {
        e.stopPropagation();
        // When multiple cards are selected and the current wrapper is among them,
        // delete all selected cards. Otherwise delete just this wrapper.
        if (this._selection.size > 1 && this._selection.has(wrap)) {
          const toDel = Array.from(this._selection);
          this._removeConnectorsForCardIds_?.(toDel.map((w) => w.dataset?.layoutCardId).filter(Boolean), { reason: null, render: false });
          toDel.forEach(w => w.remove());
          this._clearSelection();
          this._resizeContainer();
          this._renderConnectors_?.();
          this._queueSave('delete-multi');
          this._ensurePlaceholderIfEmpty?.();
        } else {
          this._removeConnectorsForCardIds_?.([wrap.dataset?.layoutCardId].filter(Boolean), { reason: null, render: false });
          wrap.remove();
          this._resizeContainer();
          this._renderConnectors_?.();
          this._queueSave('delete');
          this._ensurePlaceholderIfEmpty?.();
        }
      });
  
      // Tab selector UI
      try { this._addTabSelectorToChip(wrap, wrap.dataset.tabId); } catch {}
  
      chip.addEventListener('click', async (e) => {
        e.stopPropagation();
        const act = e.target?.closest('button')?.dataset?.act; if (!act) return;
  
        if (act === 'delete') {
          if (this._selection.size > 1 && this._selection.has(wrap)) {
            const toDel = Array.from(this._selection);
            this._removeConnectorsForCardIds_?.(toDel.map((w) => w.dataset?.layoutCardId).filter(Boolean), { reason: null, render: false });
            toDel.forEach(w => w.remove());
            this._clearSelection();
            this._resizeContainer(); this._renderConnectors_?.(); this._queueSave('delete-multi'); this._ensurePlaceholderIfEmpty();
          } else {
            this._removeConnectorsForCardIds_?.([wrap.dataset?.layoutCardId].filter(Boolean), { reason: null, render: false });
            wrap.remove(); this._resizeContainer(); this._renderConnectors_?.(); this._queueSave('delete'); this._ensurePlaceholderIfEmpty();
          }
        } else if (act === 'export-card') {
          this._exportSingleCard_?.(wrap);
        } else if (act === 'duplicate' || act === 'copy') {
          const targets = (this._selection.size > 1 && this._selection.has(wrap)) ? Array.from(this._selection) : [wrap];
          for (const t of targets) {
            const cfg = this._extractCardConfig(t.firstElementChild) || {};
            const dup = await this._createCard(cfg);
            const w2 = this._makeWrapper(dup);
            w2.style.width  = t.style.width;
            w2.style.height = t.style.height;
            this._syncCompactEditUiForWrapper_?.(w2);
            // Preserve per-card overflow setting on duplicates. Without this
            // duplication would revert to default overflow auto even when the
            // source card had overflow visible or hidden. Copy both the
            // wrapper’s overflow and the card element’s overflow so that
            // dropdowns/tooltips maintain correct clipping behaviour.
            try {
              if (t.style && t.style.overflow) {
                w2.style.overflow = t.style.overflow;
              }
              if (t.dataset && t.dataset.overflow) {
                w2.dataset.overflow = t.dataset.overflow;
              }
              if (t.dataset && t.dataset.cardStyle) {
                w2.dataset.cardStyle = t.dataset.cardStyle;
                this._applyPerCardStyle_?.(w2, this._extractPerCardStyle_?.(t) || null);
              }
              const origCard = t.firstElementChild;
              const dupCard = w2.firstElementChild;
              if (origCard && dupCard && origCard.style && origCard.style.overflow) {
                dupCard.style.overflow = origCard.style.overflow;
              }
            } catch {}
            const x = (parseFloat(t.getAttribute('data-x')) || 0) + this.gridSize;
            const y = (parseFloat(t.getAttribute('data-y')) || 0) + this.gridSize;
            this._setCardPosition(w2, x, y);
            // Ensure a baseline z-index of 6 so duplicates are always above the grid
            // overlay.  Compute next z-index and clamp to at least 6.
            {
              const nextVal = this._highestZ() + 1;
              w2.style.zIndex = String(Math.max(nextVal, 6));
            }
            // Preserve the tab assignment from the original wrapper so that
            // duplicates appear in the correct tab rather than defaulting to
            // the currently active tab. See bug #3.
            try {
              const tid = t.dataset?.tabId;
              if (tid) w2.dataset.tabId = tid;
            } catch {}
            this.cardContainer.appendChild(w2);
            // Attach a tab selector to the duplicated wrapper so the user can
            // reassign it later; pass the current tab so the selector defaults
            // correctly.
            try { this._addTabSelectorToChip?.(w2, w2.dataset.tabId); } catch {}
            try { this._rebuildOnce(w2.firstElementChild); } catch {}
            this._initCardInteract(w2);
          }
          this._resizeContainer();
          this._queueSave('duplicate');
        } else if (act === 'front') {
          const targets = (this._selection.size > 1 && this._selection.has(wrap)) ? Array.from(this._selection) : [wrap];
          targets.forEach((target) => {
            const current = parseInt(target.style.zIndex || '1', 10);
            target.style.zIndex = String(Math.max(1, Math.min(9999, current + 1)));
          });
          this._queueSave('z-change');
        } else if (act === 'back')  {
          const targets = (this._selection.size > 1 && this._selection.has(wrap)) ? Array.from(this._selection) : [wrap];
          targets.forEach((target) => {
            const current = parseInt(target.style.zIndex || '1', 10);
            target.style.zIndex = String(Math.max(1, Math.min(9999, current - 1)));
          });
          this._queueSave('z-change');
        } else if (act === 'front-most') {
          // Bring selected card(s) to the very front (highest z-index)
          const targets = (this._selection.size > 1 && this._selection.has(wrap)) ? Array.from(this._selection) : [wrap];
          // Sort targets by current z-index ascending so their relative order is maintained when moving to top
          targets.sort((a, b) => {
            const za = parseInt(a.style.zIndex || '1', 10);
            const zb = parseInt(b.style.zIndex || '1', 10);
            return za - zb;
          });
          let base = this._highestZ();
          for (const w of targets) {
            base += 1;
            w.style.zIndex = String(base);
          }
          this._queueSave('z-change');
        } else if (act === 'back-most') {
          // Send selected card(s) to the very back (lowest z-index)
          const targets = (this._selection.size > 1 && this._selection.has(wrap)) ? Array.from(this._selection) : [wrap];
          // Sort targets by current z-index descending so their relative order is maintained when moving to bottom
          targets.sort((a, b) => {
            const za = parseInt(a.style.zIndex || '1', 10);
            const zb = parseInt(b.style.zIndex || '1', 10);
            return zb - za;
          });
          // Determine the current minimum z-index among all cards
          let minZ = Infinity;
          this.cardContainer.querySelectorAll('.card-wrapper').forEach(w => {
            const z = parseInt(w.style.zIndex || '1', 10);
            if (z < minZ) minZ = z;
          });
          if (!isFinite(minZ)) minZ = 1;
          let baseMin = minZ;
          for (const w of targets) {
            baseMin -= 1;
            // Ensure cards never drop below 6 so they remain above the grid overlay.
            w.style.zIndex = String(Math.max(6, baseMin));
          }
          this._queueSave('z-change');
        } else if (act === 'edit') {
          const cfg = this._extractCardConfig(wrap.firstElementChild) || {};
          await this._openSmartPicker('edit', cfg, async (newCfg) => {
            const cleanCfg = this._sanitizeCardConfigForStorage_(newCfg || {});
            try { this._rememberHtmlCardConfigOverride_?.(cfg, cleanCfg); } catch {}
            await this._replaceEditedCardElement_(wrap, cleanCfg);
            try { this._updateCardConfigAcrossResponsiveLayouts_?.(wrap.dataset.layoutCardId, cleanCfg); } catch {}
            this._resizeContainer?.();
  
            // Persist immediately, but keep the dashboard mounted. The edited
            // card has already been replaced above, so a page reload only adds
            // latency and disrupts the user's current tab/editing context.
            try {
              clearTimeout(this._saveTimer);           // cancel debounced save
              try { this._persistCurrentResponsiveProfileToMemory_?.({ syncMembership: true }); } catch {}
              try { this._updateCardConfigAcrossResponsiveLayouts_?.(wrap.dataset.layoutCardId, cleanCfg); } catch {}
              try { this._syncLiveCardConfigsIntoResponsiveLayouts_?.(); } catch {}
              // Silent layout persistence updates the DDC backend/local cache.
              // Writing the entire Lovelace config here emits a dashboard-wide
              // update in Home Assistant, defeating the in-place card swap.
              await this._saveLayout(true);
            } catch (e) {
              console.warn('[drag-and-drop-card] Edited card is live, but persistence failed', e);
            }

            try { this._syncCompactEditUiForWrapper_?.(wrap); } catch {}
            try { this._applyWrapDisplayState_?.(wrap); } catch {}
            try { this._applyAutoScale?.(); } catch {}
            try { this._scheduleConnectorsRender_?.({ syncAnchors: true, settle: true }); } catch {}
            try { this._toast?.('Card updated.'); } catch {}
          });
        } else if (act === 'settings') {
          // Open or toggle the per-card settings menu (e.g. overflow options).
          try {
            // Open the per-card settings menu which now contains both the
            // overflow toggle and a tab selector. The old _openOverflowMenu
            // method has been replaced by _openCardSettingsMenu.
            this._openCardSettingsMenu?.(wrap);
          } catch {}
        }
      });
  
      // ADD THE MISSING SHIELD ELEMENT
      const shield = document.createElement('div');
      shield.className = 'shield';
  
      const anchors = this._createCardAnchors_(wrap);
  
      // Resize handles in both bottom corners. The left handle mirrors the same
      // icon and resizes by moving the card's left edge.
      const resizeLeftHandle = document.createElement('div');
      resizeLeftHandle.classList.add('resize-handle', 'resize-handle--bl');
      if (!this.editMode) resizeLeftHandle.style.display = 'none';
      resizeLeftHandle.title = 'Resize from bottom left';
      resizeLeftHandle.innerHTML = `<ha-icon icon="mdi:resize-bottom-right"></ha-icon>`;
  
      const resizeRightHandle = document.createElement('div');
      resizeRightHandle.classList.add('resize-handle', 'resize-handle--br');
      if (!this.editMode) resizeRightHandle.style.display = 'none';  // hide handle if not editing
      resizeRightHandle.title = 'Resize from bottom right';
      resizeRightHandle.innerHTML = `<ha-icon icon="mdi:resize-bottom-right"></ha-icon>`;
  
      // cache the card config on the wrapper
      let cachedCfg = null;
      try {
        const cfg = this._sanitizeCardConfigForStorage_(
          cardEl.__ddcSourceConfig || cardEl._config || cardEl.config
        );
        if (cfg && typeof cfg === 'object' && Object.keys(cfg).length) {
          cachedCfg = cfg;
          wrap.dataset.cfg = JSON.stringify(cfg);
          cardEl.__ddcSourceConfig = cfg;
  
          // Mark if this needs card_mod processing
          if (this._hasCardModDeep(cfg)) { wrap.dataset.needsCardMod = 'true'; }
        }
      } catch {}

      if (this._isBubblePopupCardConfig_?.(cachedCfg || {})) {
        wrap.classList.add('ddc-bubble-popup-wrapper');
        wrap.dataset.bubblePopupWrapper = 'true';
        requestAnimationFrame(() => this._patchBubblePopupShadowStyles_?.(wrap));
      }
  
      // include the delete handle before resize handles so it appears beneath them in the DOM
      wrap.append(cardEl, shield, anchors, chip, editActions, delHandle, resizeLeftHandle, resizeRightHandle);
      // DDC patch: trigger one-time rebuild so nested card_mod attaches
      try { this._rebuildOnce(cardEl); } catch {}
      this.__ddcTextLockDirty = true;
      try { this._scheduleTextResizeLockRefresh_?.(true); } catch {}
  
      // Enable double-click on a card wrapper to open the card editor when
      // already in edit mode. This does not toggle edit mode; instead it
      // delegates to the existing Edit button, ensuring the same commit
      // behaviour and callback chain are used. Only plain double-clicks
      // outside of control elements (resize handle, delete handle, chip) are
      // intercepted.
      wrap.addEventListener('dblclick', (ev) => {
        if (!this.editMode) return;
        // Ignore double clicks originating from controls within the wrapper
        if (ev.target.closest('.resize-handle') || ev.target.closest('.delete-handle') || ev.target.closest('.chip') || ev.target.closest('.ddc-card-edit-actions')) return;
        ev.stopPropagation();
        try {
          const btn = wrap.querySelector('.chip button[data-act="edit"]');
          if (btn) btn.click();
        } catch {}
      });
      requestAnimationFrame(() => this._syncCompactEditUiForWrapper_?.(wrap));
      return wrap;
    },

      _processCardModOnce() {
      // Only run once per load
      if (this._cardModProcessed) return;
      this._cardModProcessed = true;
  
      const wraps = this.cardContainer?.querySelectorAll('[data-needs-card-mod="true"]') || [];
  
      wraps.forEach(wrap => {
        const card = wrap.firstElementChild;
        if (!card) return;
  
        const config = this._sanitizeCardConfigForStorage_(
          card.__ddcSourceConfig || card._config || card.config
        );
        if (!config) return;
  
        // For mod-card specifically, we need to wait for it to be fully initialized
        if (config.type === 'custom:mod-card') {
          // mod-card needs its inner card to be ready
          setTimeout(() => {
            if (card.updateComplete) {
              card.updateComplete.then(() => {
                card.requestUpdate();
              });
            } else if (card.setConfig) {
              try {
                card.setConfig(this._cloneCardConfig_(config));
              } catch {}
            }
          }, 100);
        } else if (config.card_mod && card.setConfig) {
          // Regular card_mod
          try {
            card.setConfig(this._cloneCardConfig_(config));
          } catch {}
        }
      });
    },

    _extractCardConfig(cardEl){
      if (!cardEl) return {};
      // Prefer the wrapper cache first. Runtime card instances, especially
      // mod-card/card-mod combinations, may rewrite or expand their own config
      // object internally after repeated rebuilds. If we serialize that mutated
      // runtime object back into YAML, style snippets can get duplicated many
      // times. The wrapper cache is the stable source-of-truth for what DDC
      // intentionally saved.
      try {
        const wrap = cardEl.closest ? cardEl.closest('.card-wrapper') : null;
        const raw  = wrap?.dataset?.cfg;
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed === 'object') {
            return this._sanitizeCardConfigForStorage_(parsed);
          }
        }
      } catch {}
      // Next prefer the original config snapshot captured when the card element
      // was created. This protects against internal runtime mutation even when a
      // wrapper cache is unavailable.
      const sourceCfg = cardEl.__ddcSourceConfig;
      if (sourceCfg && typeof sourceCfg === 'object' && Object.keys(sourceCfg).length) {
        return this._sanitizeCardConfigForStorage_(sourceCfg);
      }
      // attempt to read the card's own config
      const cfg = cardEl._config || cardEl.config;
      if (cfg && typeof cfg === 'object' && Object.keys(cfg).length) {
        // Always return a deep clone of the config so editing one card cannot
        // inadvertently mutate the config of another. Use structuredClone when
        // available for fidelity; fall back to JSON serialization otherwise.
        return this._sanitizeCardConfigForStorage_(cfg);
      }
      return {};
    },

    _getNextAvailablePosition() {
      const wraps = Array.from(this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)'));
      const occupied = new Set();
      const gs = this.gridSize;
      const edgeBuffer = this._getCanvasEdgeBufferPx_?.() || 0;
      wraps.forEach((w) => {
        const x = (parseFloat(w.getAttribute('data-x')) || 0);
        const y = (parseFloat(w.getAttribute('data-y')) || 0);
        const width  = parseFloat(getComputedStyle(w).width)  || 100;
        const height = parseFloat(getComputedStyle(w).height) || 100;
        const xStart = Math.floor(x/gs), yStart = Math.floor(y/gs);
        const xEnd   = Math.floor((x+width)/gs), yEnd = Math.floor((y+height)/gs);
        for (let xi=xStart; xi<xEnd; xi++) for (let yi=yStart; yi<yEnd; yi++) occupied.add(`${xi}-${yi}`);
      });
      let xi=Math.max(0, Math.ceil(edgeBuffer / gs)), yi=Math.max(0, Math.ceil(edgeBuffer / gs));
      const startXi = xi;
      while (occupied.has(`${xi}-${yi}`)) { xi+=6; if (xi>60) { xi=startXi; yi+=6; } }
      return { x: xi*gs, y: yi*gs };
    },

    async _addPickedCardToLayout(cardConfig) {
      this._hideEmptyPlaceholder();
      const cardEl = await this._createCard(cardConfig);
      const wrap = this._makeWrapper(cardEl);
      this._setCardPosition(wrap, 0, 0);
      wrap.style.width = '350px';
      wrap.style.height = '350px';
      // Assign a z-index for the new card that is at least 6.  Without
      // clamping the first few cards could be placed behind the grid overlay.
      {
        const nextVal = this._highestZ() + 1;
        wrap.style.zIndex = String(Math.max(nextVal, 6));
      }
      this.cardContainer.appendChild(wrap);
  
    try { this._rebuildOnce(wrap.firstElementChild); } catch {}
      this._initCardInteract(wrap);
      this._resizeContainer();
      this._queueSave('add');
      this._toast('Card added to layout.');
      this._syncEmptyStateUI();
  
      // After inserting a new card, reevaluate visibility so any conditions
      // attached to the new card are applied immediately (if not in edit mode).
      try { this._applyVisibility_(); } catch {}
    },
};

export function installCardBuilderMethods(proto) {
  for (const [name, value] of Object.entries(cardBuilderMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
