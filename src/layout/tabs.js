/*
 * Dashboard tab model, tab bar rendering, and active-tab filtering.
 *
 * Tabs determine which cards are visible in the main canvas and coordinate with sidebar placement,
 * saved active-tab state, and toolbar layout.
 */

/* Tab accessibility, placement, sizing, and alignment helpers. */
const tabsLayoutMethods = {
  _normalizeTabId(tabId) {
    const valid = Array.isArray(this.tabs) ? this.tabs.map(t => t.id) : [];
    if (!valid.length) return this.defaultTab || 'default';
    return (tabId && valid.includes(tabId)) ? tabId : (this.defaultTab || valid[0]);
  },

  _renderTabs() {
    const bar = this.tabsBar; if (!bar) return;
    const tabs = Array.isArray(this.tabs) ? this.tabs : [];
    const hasLayerMenu = !!this._hasLayerMenu_?.();
    const sidebarNavActive = !!this._isSidebarNavigationActive_?.();
    const shouldRenderTabs = !!tabs.length && !(tabs.length === 1 && this.hideTabsWhenSingle);
    this._syncTabsPlacement_?.();
    if (!shouldRenderTabs && !hasLayerMenu) {
      this._closeLayersMenu_?.({ render: false });
      bar.style.display = 'none';
      this.rootEl?.classList?.remove?.('ddc-tabs-left-layout');
      this.rootEl?.classList?.remove?.('ddc-tabs-bottom-layout');
      this._renderSidebar_?.();
      return;
    }
    bar.style.display = '';
    const classes = ['ddc-tabs'];
    if (sidebarNavActive) classes.push('ddc-tabs-left', 'ddc-tabs-sidebar');
    if (!sidebarNavActive && this.tabsPosition === 'bottom') classes.push('ddc-tabs-bottom');
    if (hasLayerMenu) classes.push('ddc-tabs-has-layers');
    if (this.__layersMenuOpen) classes.push('ddc-layer-menu-open');
    this.__renderingTabs = true;
    bar.className = classes.join(' ');
    bar.innerHTML = '';

    // Let the common sizing logic decide width for all placements so top and
    // bottom share the same dock treatment.
    try {
      bar.style.width = '';
      bar.style.maxWidth = '';
    } catch {}
    if (!hasLayerMenu) this._closeLayersMenu_?.({ render: false });
    if (!this.__layersMenuOpen) this._removeLayerMenuDismissHandlers_?.();
    for (const t of (shouldRenderTabs ? tabs : [])) {
      const btn = document.createElement('button');
      btn.className = [
        'ddc-tab',
        t.icon ? 'ddc-tab--has-icon' : '',
        t.id === this.activeTab ? 'active' : ''
      ].filter(Boolean).join(' ');
      btn.dataset.tabId = t.id;
      btn.title = t.label || t.id;
      btn.setAttribute('aria-label', t.label || t.id);
      btn.innerHTML = `${t.icon ? `<ha-icon icon="${t.icon}"></ha-icon>` : ''}<span class="ddc-tab-label">${t.label ?? t.id}</span>`;
      btn.addEventListener('click', () => {
        if (this.activeTab !== t.id) {
          this._closeLayersMenu_?.({ render: false });
          this.activeTab = t.id;
          try { localStorage.setItem(`ddc_lasttab_${this.storageKey}`, t.id); } catch {}
          this._applyActiveTab();
          this._renderTabs();
          // Reapply visibility for the newly active tab. Visibility must be
          // evaluated after switching tabs so cards with conditions are
          // properly hidden when the tab becomes active.
          try { this._applyVisibility_(); } catch {}
      try {
        const host = this.cardContainer?.querySelector?.('#ddcBgHost');
        if (!host || !host.firstChild) this._applyBackgroundFromConfig?.();
      } catch {}
        }
      });
      bar.appendChild(btn);
    }
    this._appendLayersMenuToTabs_?.(bar);
    this.__renderingTabs = false;
    this._syncTabsPlacement_?.();
    this._renderSidebar_?.();

    try { this._updateTabsA11y_?.(); } catch {}

    // After rendering tabs, ensure the bar width matches the visible
    // card container width (scaled or unscaled). Without syncing the width,
    // the tabs could stretch to the full page width instead of aligning
    // with the drag-and-drop container.
    try { this._syncTabsWidth_?.(); } catch {}

    // Ensure the active tab is visible whenever tabs overflow.  Without this
    // behaviour the bar may keep the active tab partially clipped or hidden
    // behind the scroll mask.  Always bring the active tab into view
    // regardless of viewport size if the bar overflows horizontally.  This
    // uses `scrollIntoView({block:'nearest',inline:'nearest'})` which scrolls
    // just enough to reveal the element without recentring the entire list.
    try {
      const activeBtn = bar.querySelector?.('.ddc-tab.active');
      if (activeBtn && bar.scrollWidth > bar.clientWidth) {
        activeBtn.scrollIntoView({
          behavior: 'auto',
          block: 'nearest',
          inline: 'nearest',
        });
      }
    } catch {}

    try { this._refreshTabsAlignment_?.(); } catch {}
  },

  _applyActiveTab() {
    const wraps = this.cardContainer?.querySelectorAll?.('.card-wrapper') || [];
    const becameVisible = [];
    wraps.forEach(w => {
      const result = this._applyWrapDisplayState_(w, { clearSelectionOnHide: true });
      if (result?.becameVisible) becameVisible.push(w);
    });

    // After switching tabs, reapply sizing based on the current container mode.
    try {
      const __m = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
      this._applyAutoScale?.();
    } catch {}

    try { this._clearSelection(); } catch {}
    // On tab changes, replay entrance motion only for cards that just became
    // visible. Initial render still uses the one-time mount animation below.
    try {
      if (becameVisible.length) this._animateCards?.(becameVisible, { replay: true, reason: 'tab-change' });
      else this._animateCards?.();
    } catch {}
    try { this._renderConnectors_?.(); } catch {}
  },

  _cardAnimationId_(wrap) {
    if (!wrap) return '';
    return String(
      wrap.dataset?.layoutCardId
      || wrap.dataset?.historyId
      || wrap.id
      || ''
    ).trim();
  },

  _animateCards(targetWraps = null, options = {}) {
  try {
    if (this.__suppressCardAnimation || this.__historyRestoring) return;
    if (!this.__animatedCardIds) this.__animatedCardIds = new Set();
    const replay = !!options?.replay;
    const wraps = targetWraps
      ? Array.from(targetWraps)
      : Array.from(this.cardContainer?.querySelectorAll?.('.card-wrapper') || []);
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    // Master controls
    const totalAnimationTime = 800;   // Total sequence time (ms)
    const animationIntensity = 0.8;    // 1 = default, 2 = more dramatic, 0.5 = subtle

    // Derived timing values
    const durationRatio = 0.3; // Portion of total time used for each card’s animation
    const duration = totalAnimationTime * durationRatio;
    const maxDelay = totalAnimationTime - duration;

    wraps.forEach((w) => {
      if (!w) return;
      // Skip hidden cards
      const cs = window.getComputedStyle?.(w);
      const isHidden =
        (w.style.display === 'none') ||
        (cs && cs.display === 'none') ||
        w.classList.contains('ddc-hidden');
      if (isHidden) return;

      const cardStyle = this._extractPerCardStyle_?.(w) || {};
      const animatePref = String(cardStyle.animate_cards || '').toLowerCase();
      const shouldAnimate = animatePref === 'on' || (animatePref !== 'off' && this.animateCards);
      if (!shouldAnimate) return;

      const animationId = this._cardAnimationId_(w);
      if (!replay && animationId && this.__animatedCardIds.has(animationId)) return;
      if (!replay && animationId) this.__animatedCardIds.add(animationId);

      // Preserve any existing transform from layout
      const base = (cs && cs.transform && cs.transform !== 'none') ? cs.transform : '';

      // Fly-in distance increases with intensity
      const offsetY = 100 * animationIntensity; // % of element height
      const fromT = `${base} translate3d(0, ${offsetY}%, 0)`;
      const toT   = `${base} translate3d(0, 0, 0)`;

      // Random delay spread scales with intensity
      const delay = Math.random() * (maxDelay * Math.min(animationIntensity, 2)); // cap at 2x spread
      const restoreWillChange = w.style.willChange || '';
      const restoreOpacity = w.style.opacity || '';
      const restoreTransform = w.style.transform || '';
      try {
        w.getAnimations?.()
          ?.filter((anim) => String(anim?.id || '').startsWith('ddc-card-enter-'))
          ?.forEach((anim) => anim.cancel());
      } catch {}

      if (reduceMotion) {
        try {
          const fade = w.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: totalAnimationTime * 0.15,
            delay,
            easing: 'linear',
            fill: 'both'
          });
          fade.id = 'ddc-card-enter-opacity';
          fade.finished?.finally?.(() => {
            try { fade.cancel(); } catch {}
            w.style.opacity = restoreOpacity;
          });
        } catch {
          w.style.opacity = '0';
          setTimeout(() => {
            w.style.transition = `opacity ${totalAnimationTime * 0.15}ms linear`;
            w.style.opacity = '1';
            setTimeout(() => {
              w.style.transition = '';
              w.style.opacity = restoreOpacity;
            }, (totalAnimationTime * 0.15) + 60);
          }, delay);
        }
        return;
      }

      try {
        w.style.willChange = 'opacity, transform';

        const motionEase = 'cubic-bezier(0.4, 0, 0.2, 1)';
        const opacityEase = 'linear';

        // Opacity fade
        const fade = w.animate(
          [{ opacity: 0 }, { opacity: 1 }],
          { duration, delay, easing: opacityEase, fill: 'both' }
        );
        fade.id = 'ddc-card-enter-opacity';

        // Transform upward flight
        const motion = w.animate(
          [{ transform: fromT }, { transform: toT }],
          { duration, delay, easing: motionEase, fill: 'both' }
        );
        motion.id = 'ddc-card-enter-transform';
        const cleanup = () => {
          try { fade.cancel(); } catch {}
          try { motion.cancel(); } catch {}
          w.style.opacity = restoreOpacity;
          w.style.transform = restoreTransform;
          w.style.willChange = restoreWillChange;
        };
        if (motion.finished && fade.finished) {
          Promise.allSettled([motion.finished, fade.finished]).then(cleanup);
        } else {
          motion.addEventListener?.('finish', cleanup, { once: true });
        }
      } catch {
        // Fallback without Web Animations API
        w.style.opacity = '0';
        w.style.transform = fromT;
        w.style.willChange = 'opacity, transform';
        setTimeout(() => {
          w.style.transition = `opacity ${duration}ms linear, transform ${duration}ms cubic-bezier(0.4,0,0.2,1)`;
          w.style.opacity = '1';
          w.style.transform = toT;
          setTimeout(() => {
            w.style.transition = '';
            w.style.willChange = restoreWillChange;
            w.style.opacity = restoreOpacity;
            w.style.transform = restoreTransform;
          }, duration + 60);
        }, delay);
      }
    });
  } catch (e) {
    console.warn('[ddc:animate] animation error', e);
  }
},

  _addTabSelectorToChip(wrapper, entryTabId = null) {
    if (!this.tabs || !this.tabs.length) return;
    const chip = wrapper.querySelector('.chip'); if (!chip) return;
    let sel = chip.querySelector('select.ddc-chip-tab');
    if (!sel) {
      sel = document.createElement('select');
      sel.className = 'ddc-chip-tab';
      sel.style.marginLeft = '6px';
      sel.title = 'Assign to tab';
      chip.appendChild(sel);
    }
    sel.innerHTML = '';
    for (const t of this.tabs) {
      const opt = document.createElement('option');
      opt.value = t.id; opt.textContent = t.label || t.id;
      sel.appendChild(opt);
    }
    const cur = this._normalizeTabId(entryTabId || wrapper.dataset.tabId || this.activeTab || this.defaultTab);
    sel.value = cur;
    wrapper.dataset.tabId = cur;
    sel.onchange = () => {
      wrapper.dataset.tabId = this._normalizeTabId(sel.value);
      this._syncConnectorsForCardScopeChange_?.(wrapper, { reason: null, render: false });
      this._applyActiveTab();
      // Reapply visibility so conditions evaluate in the new tab context.
      try { this._applyVisibility_(); } catch {}
      try {
        const host = this.cardContainer?.querySelector?.('#ddcBgHost');
        if (!host || !host.firstChild) this._applyBackgroundFromConfig?.();
      } catch {}
      try { this._queueSave('tab-change'); } catch {}
    };

    // Prevent the dropdown from starting a drag operation on mousedown,
    // pointerdown or touchstart. Without stopping these events, Interact
    // will interpret a pointer press on the select as the start of a drag.
    const stop = (ev) => ev.stopPropagation();
    sel.addEventListener('mousedown', stop);
    sel.addEventListener('pointerdown', stop);
    sel.addEventListener('touchstart', stop);
  },

  _updateTabsA11y_() {
    const bar = this.tabsBar; if (!bar) return;
    const btns = bar.querySelectorAll('.ddc-tab');
    if (btns.length) bar.setAttribute('role', 'tablist');
    else bar.removeAttribute('role');
    btns.forEach((btn, idx) => {
      const selected = btn.classList.contains('active');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', String(selected));
      btn.setAttribute('tabindex', selected ? '0' : '-1');
      btn.dataset.index = String(idx);
    });
    if (!this.__tabsKeyHandler) {
      this.__tabsKeyHandler = (e) => {
        if (e.target?.closest?.('.ddc-layer-menu')) return;
        const valid = ['ArrowLeft','ArrowRight','Home','End'];
        if (!valid.includes(e.key)) return;
        const list = Array.from(bar.querySelectorAll('.ddc-tab'));
        if (!list.length) return;
        e.preventDefault();
        const focusedIndex = list.findIndex(b => b === document.activeElement);
        const activeIndex = list.findIndex(b => b.classList.contains('active'));
        let idx = focusedIndex >= 0 ? focusedIndex : (activeIndex >= 0 ? activeIndex : 0);
        if (e.key === 'ArrowRight') idx = Math.min(list.length - 1, idx + 1);
        if (e.key === 'ArrowLeft')  idx = Math.max(0, idx - 1);
        if (e.key === 'Home')       idx = 0;
        if (e.key === 'End')        idx = list.length - 1;
        const target = list[idx];
        if (target) { try { target.focus({preventScroll:false}); } catch {}; target.click(); }
      };
      bar.addEventListener('keydown', this.__tabsKeyHandler);
    }
    if (!this.__tabsScrollHandler) {
      this.__tabsScrollHandler = () => this._updateTabOverflowShadows_?.();
      bar.addEventListener('scroll', this.__tabsScrollHandler, { passive: true });
    }
    this._updateTabOverflowShadows_?.();
  },

  _syncTabsWidth_() {
    try {
      this._syncTabsPlacement_?.();
      this._syncViewportPreviewUI_?.();
      this._syncLeftRailViewportPosition_?.();
      const bar = this.tabsBar;
      if (!bar) return;
      const vw =
        window.innerWidth ||
        document.documentElement?.clientWidth ||
        0;
      const isNarrowViewport = !!(vw && vw <= 768);
      const clearInlineWidth = () => {
        bar.style.width = '';
        bar.style.maxWidth = '';
      };
      const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
      if (mode === 'auto') {
        clearInlineWidth();
        bar.style.marginInline = this._isSidebarNavigationActive_?.() ? '' : 'auto';
        this._syncLeftRailViewportPosition_?.();
        this._refreshTabsAlignment_?.();
        return;
      }

      if (this._isSidebarNavigationActive_?.()) {
        clearInlineWidth();
        bar.style.marginInline = '';
        this._refreshTabsAlignment_?.();
        return;
      }

      if (this._isExplicitViewportPreview_?.()) {
        clearInlineWidth();
        bar.style.marginInline = 'auto';
        this._refreshTabsAlignment_?.();
        return;
      }

      // 📱 On narrow viewports, don't clamp the bar at all.
      // Let CSS handle width and scrolling so you can reach all tabs.
      try {
        if (isNarrowViewport) {
          clearInlineWidth();
          bar.style.marginInline = 'auto';
          this._refreshTabsAlignment_?.();
          this._syncLeftRailViewportPosition_?.();
          return;
        }
      } catch {}

      // Top and bottom placements should size naturally from their content.
      if (this.tabsPosition === 'top' || this.tabsPosition === 'bottom') {
        clearInlineWidth();
        bar.style.marginInline = this._getViewportPreviewPreset_?.() ? 'auto' : '';
        this._refreshTabsAlignment_?.();
        this._syncLeftRailViewportPosition_?.();
        return;
      }

      const ref = this.cardContainer || this.__scaleOuter;
      if (!ref) return;
      let width = 0;
      try {
        const rect = ref.getBoundingClientRect();
        width = rect && rect.width ? rect.width : 0;
      } catch {}
      if (width <= 0 && this.__scaleOuter && this.__scaleOuter !== ref) {
        try {
          const rect2 = this.__scaleOuter.getBoundingClientRect();
          width = rect2 && rect2.width ? rect2.width : 0;
        } catch {}
      }
      if (width > 0) {
        const preview = this._getViewportPreviewPreset_?.();
        const targetWidth = preview
          ? Math.min(width, this._getEffectivePreviewWidth_?.(width) || width)
          : width;
        bar.style.width = `${targetWidth}px`;
        bar.style.maxWidth = `${targetWidth}px`;
      }
      bar.style.marginInline = this._getViewportPreviewPreset_?.() ? 'auto' : '';
      this._refreshTabsAlignment_?.();
      this._syncLeftRailViewportPosition_?.();
    } catch {}
  },

  _normalizeTabsPosition_(position = 'top') {
    const value = String(position || 'top').trim().toLowerCase();
    return value === 'bottom' ? 'bottom' : 'top';
  },

  _syncTabsPlacement_() {
    try {
      const bar = this.tabsBar;
      const root = this.rootEl;
      const anchor = this.__scaleOuter || this.cardContainer;
      const sidebarActive = this._isSidebarEnabled_?.();
      const sidebarNavActive = this._isSidebarNavigationActive_?.();
      if (!bar || !root || !anchor || anchor.parentNode !== root) {
        root?.classList?.toggle?.('ddc-sidebar-layout', !!sidebarActive);
        root?.classList?.toggle?.('ddc-tabs-bottom-layout', this.tabsPosition === 'bottom');
        return;
      }

      if (sidebarActive) {
        const host = this.sidebarHost;
        if (host && host.parentNode !== root) root.insertBefore(host, anchor);
      }
      if (sidebarNavActive) {
        root.classList.add('ddc-sidebar-layout');
        root.classList.remove('ddc-tabs-bottom-layout');
        return;
      }

      if (this._isExplicitViewportPreview_?.()) {
        if (anchor.nextSibling !== bar) root.insertBefore(bar, anchor.nextSibling);
        root.classList.toggle('ddc-sidebar-layout', !!sidebarActive);
        root.classList.remove('ddc-tabs-bottom-layout');
        return;
      }

      if (this.tabsPosition === 'bottom') {
        if (anchor.nextSibling !== bar) root.insertBefore(bar, anchor.nextSibling);
      } else {
        if (bar.nextSibling !== anchor) root.insertBefore(bar, anchor);
      }

      root.classList.toggle('ddc-sidebar-layout', !!sidebarActive);
      root.classList.toggle('ddc-tabs-bottom-layout', this.tabsPosition === 'bottom');
    } catch {}
  },

  _syncLeftRailViewportPosition_() {
    try {
      if (!this._isSidebarNavigationActive_?.()) {
        this.style?.removeProperty?.('--ddc-left-rail-left');
        return;
      }

      const vw = window.innerWidth || document.documentElement?.clientWidth || 0;
      if (vw && vw <= 980) {
        this.style?.removeProperty?.('--ddc-left-rail-left');
        return;
      }

      const root = this.rootEl;
      const bar = this.tabsBar;
      if (!root || !bar) return;

      const rootRect = root.getBoundingClientRect?.();
      if (!rootRect || !Number.isFinite(rootRect.left)) return;

      const styles = getComputedStyle(this);
      const railWidth =
        bar.getBoundingClientRect?.().width ||
        parseFloat(styles.getPropertyValue('--ddc-left-rail-width')) ||
        92;
      const gutter = parseFloat(styles.getPropertyValue('--ddc-left-gutter')) || 0;
      const viewportWidth = vw || rootRect.left + rootRect.width;
      const minLeft = gutter + (railWidth / 2) + 12;
      const maxLeft = viewportWidth - (railWidth / 2) - 12;
      const proposedLeft = rootRect.left + (railWidth / 2);
      const clampedLeft = Math.max(minLeft, Math.min(maxLeft, proposedLeft));

      this.style.setProperty('--ddc-left-rail-left', `${Math.round(clampedLeft)}px`);
    } catch {}
  },

  _refreshTabsAlignment_() {
    try {
      const bar = this.tabsBar;
      if (!bar) return;
      bar.style.justifyContent = '';
      if (this._isSidebarNavigationActive_?.()) {
        bar.style.justifyContent = 'flex-start';
        return;
      }
      if (bar.scrollWidth <= bar.clientWidth) {
        bar.style.justifyContent = 'center';
      } else {
        bar.style.justifyContent = 'flex-start';
      }
    } catch {}
  },
};

export function installTabsLayoutMethods(proto) {
  for (const [name, value] of Object.entries(tabsLayoutMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
