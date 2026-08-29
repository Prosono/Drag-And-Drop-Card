/*
 * Dashboard tab model, tab bar rendering, and active-tab filtering.
 *
 * Tabs determine which cards are visible in the main canvas and coordinate with sidebar placement,
 * saved active-tab state, and toolbar layout.
 */

import { normalizeTabsSize } from '../core/config-normalization.js';

const DEFAULT_TABS_AUTO_RETURN_DELAY = 5 * 60 * 1000;
const MIN_TABS_AUTO_RETURN_DELAY = 60 * 1000;
const MAX_TABS_AUTO_RETURN_DELAY = 24 * 60 * 60 * 1000;
const TAB_AUTO_RETURN_ACTIVITY_EVENTS = [
  'mousemove',
  'mousedown',
  'click',
  'keydown',
  'wheel',
  'scroll',
  'touchstart',
  'touchmove',
  'touchend',
  'pointerdown',
  'pointermove',
  'pointerup',
];

export function normalizeTabsAutoReturnDelay(value) {
  const delay = Number(value);
  if (!Number.isFinite(delay) || delay <= 0) return DEFAULT_TABS_AUTO_RETURN_DELAY;
  return Math.max(MIN_TABS_AUTO_RETURN_DELAY, Math.min(MAX_TABS_AUTO_RETURN_DELAY, Math.round(delay)));
}

export function resolveTabsAutoReturnTarget(tabs = [], requestedTab = '', defaultTab = '') {
  const valid = (Array.isArray(tabs) ? tabs : [])
    .map((tab) => String(tab?.id || '').trim())
    .filter(Boolean);
  const requested = String(requestedTab || '').trim();
  const fallback = String(defaultTab || '').trim();
  if (requested && valid.includes(requested)) return requested;
  if (fallback && valid.includes(fallback)) return fallback;
  return valid[0] || fallback || requested || 'default';
}

export function shouldDeferTabAutoReturnToScreensaver({
  screenSaverEnabled = false,
  screenSaverDelay = 0,
  tabsAutoReturnDelay = 0,
} = {}) {
  if (!screenSaverEnabled) return false;
  const screenDelay = Number(screenSaverDelay);
  const tabDelay = Number(tabsAutoReturnDelay);
  return Number.isFinite(screenDelay)
    && screenDelay > 0
    && Number.isFinite(tabDelay)
    && tabDelay > 0
    && screenDelay <= tabDelay;
}

export function buildTabButtonMarkup(tab = {}, tabIndex = 0, { sidebar = false } = {}) {
  const label = tab.label ?? tab.id ?? '';
  if (!sidebar) {
    return `${tab.icon ? `<ha-icon icon="${tab.icon}"></ha-icon>` : ''}<span class="ddc-tab-label">${label}</span>`;
  }
  return `
    <span class="ddc-sidebar-tab-indicator" aria-hidden="true"></span>
    <span class="ddc-sidebar-tab-index" aria-hidden="true">${String(tabIndex + 1).padStart(2, '0')}</span>
    <span class="ddc-sidebar-tab-icon" aria-hidden="true">
      <ha-icon icon="${tab.icon || 'mdi:view-dashboard-outline'}"></ha-icon>
    </span>
    <span class="ddc-tab-label">${label}</span>
    <ha-icon class="ddc-sidebar-tab-arrow" icon="mdi:chevron-right" aria-hidden="true"></ha-icon>
  `;
}

export function moveTabById(tabs = [], tabId = '', offset = 0) {
  const next = Array.isArray(tabs) ? tabs.slice() : [];
  const from = next.findIndex((tab) => String(tab?.id || '') === String(tabId || ''));
  const direction = Number(offset) < 0 ? -1 : (Number(offset) > 0 ? 1 : 0);
  const to = from + direction;
  if (from < 0 || !direction || to < 0 || to >= next.length) return next;
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  return next;
}

/* Tab accessibility, placement, sizing, and alignment helpers. */
const tabsLayoutMethods = {
  _normalizeTabId(tabId) {
    const valid = Array.isArray(this.tabs) ? this.tabs.map(t => t.id) : [];
    if (!valid.length) return this.defaultTab || 'default';
    return (tabId && valid.includes(tabId)) ? tabId : (this.defaultTab || valid[0]);
  },

  _normalizeTabsAutoReturnDelay_(value) {
    return normalizeTabsAutoReturnDelay(value);
  },

  _resolveTabsAutoReturnTarget_(requestedTab = this.tabsAutoReturnTab) {
    return resolveTabsAutoReturnTarget(this.tabs, requestedTab, this.defaultTab);
  },

  _clearTabsAutoReturnTimer_() {
    if (!this.__tabsAutoReturnTimer) return;
    clearTimeout(this.__tabsAutoReturnTimer);
    this.__tabsAutoReturnTimer = null;
  },

  _shouldUseTabsAutoReturn_() {
    try {
      if (!this.tabsAutoReturnEnabled || this.editMode || this.screensaverActive || !this.isConnected) return false;
      if (typeof this._isInHaEditorPreview === 'function' && this._isInHaEditorPreview()) return false;
      const tabs = Array.isArray(this.tabs) ? this.tabs : [];
      if (tabs.length < 2) return false;
      const target = this._resolveTabsAutoReturnTarget_();
      if (!target || this.activeTab === target) return false;
      if (shouldDeferTabAutoReturnToScreensaver({
        screenSaverEnabled: this.screenSaverEnabled,
        screenSaverDelay: this.screenSaverDelay,
        tabsAutoReturnDelay: this.tabsAutoReturnDelay,
      })) return false;
    } catch {
      return false;
    }
    return true;
  },

  _resetTabsAutoReturnTimer_() {
    this._clearTabsAutoReturnTimer_?.();
    if (!this._shouldUseTabsAutoReturn_?.()) return false;
    const delay = this._normalizeTabsAutoReturnDelay_(this.tabsAutoReturnDelay);
    this.tabsAutoReturnDelay = delay;
    this.__tabsAutoReturnTimer = setTimeout(() => {
      this.__tabsAutoReturnTimer = null;
      if (!this._shouldUseTabsAutoReturn_?.()) return;
      const target = this._resolveTabsAutoReturnTarget_?.();
      if (!target || target === this.activeTab || this.screensaverActive) return;
      this._switchActiveTab_?.(target, { reason: 'auto-return' })?.catch?.((err) => {
        console.warn('[ddc:tabs] Could not return to the configured tab', err);
      });
    }, delay);
    return true;
  },

  _attachTabsAutoReturnListeners_() {
    if (this.__tabsAutoReturnActivityHandler || typeof document === 'undefined') return;
    this.__tabsAutoReturnActivityHandler = () => this._resetTabsAutoReturnTimer_?.();
    this.__tabsAutoReturnActivityEvents = TAB_AUTO_RETURN_ACTIVITY_EVENTS.slice();
    this.__tabsAutoReturnActivityEvents.forEach((eventName) => {
      document.addEventListener(eventName, this.__tabsAutoReturnActivityHandler, true);
    });
  },

  _detachTabsAutoReturnListeners_() {
    this._clearTabsAutoReturnTimer_?.();
    if (!this.__tabsAutoReturnActivityHandler || typeof document === 'undefined') return;
    (this.__tabsAutoReturnActivityEvents || []).forEach((eventName) => {
      document.removeEventListener(eventName, this.__tabsAutoReturnActivityHandler, true);
    });
    this.__tabsAutoReturnActivityHandler = null;
    this.__tabsAutoReturnActivityEvents = null;
  },

  _updateTabsAutoReturnSettings_() {
    this.tabsAutoReturnDelay = this._normalizeTabsAutoReturnDelay_(this.tabsAutoReturnDelay);
    this.tabsAutoReturnTab = this._resolveTabsAutoReturnTarget_(this.tabsAutoReturnTab);
    if (this.tabsAutoReturnEnabled && this.isConnected) this._attachTabsAutoReturnListeners_?.();
    else this._detachTabsAutoReturnListeners_?.();
    this._resetTabsAutoReturnTimer_?.();
  },

  _syncWrapperTabAssignmentsFromActiveLayout_() {
    const primaryKey = this._getPrimaryResponsiveLayoutKey_?.() || 'desktop_landscape';
    const layoutKey = this._activeResponsiveLayoutKey || primaryKey;
    const entries = Array.isArray(this._responsiveLayouts?.[layoutKey])
      ? this._responsiveLayouts[layoutKey]
      : (Array.isArray(this._responsiveLayouts?.[primaryKey])
          ? this._responsiveLayouts[primaryKey]
          : []);
    if (!entries.length || !this.cardContainer) return 0;
    const validTabIds = new Set((Array.isArray(this.tabs) ? this.tabs : []).map((tab) => String(tab?.id || '')));
    const tabByCardId = new Map(entries
      .map((entry) => [String(entry?.id || '').trim(), String(entry?.tabId || entry?.tab_id || '').trim()])
      .filter(([id, tabId]) => id && tabId && (!validTabIds.size || validTabIds.has(tabId))));
    let changed = 0;
    this.cardContainer.querySelectorAll?.('.card-wrapper')?.forEach((wrap) => {
      const tabId = tabByCardId.get(String(wrap?.dataset?.layoutCardId || '').trim());
      if (!tabId || wrap.dataset.tabId === tabId) return;
      wrap.dataset.tabId = tabId;
      changed += 1;
    });
    return changed;
  },

  _shouldRenderTabBar_() {
    const tabs = Array.isArray(this.tabs) ? this.tabs : [];
    const shouldRenderTabs = !!tabs.length && !(tabs.length === 1 && this.hideTabsWhenSingle);
    return shouldRenderTabs || !!this._hasLayerMenu_?.();
  },

  _syncTabsSize_() {
    const size = normalizeTabsSize(this.tabsSize);
    const scale = size / 100;
    const setLength = (name, base) => {
      this.style?.setProperty?.(name, `${Math.round(base * scale * 100) / 100}px`);
    };
    this.tabsSize = size;
    this.style?.setProperty?.('--ddc-tabs-size-percent', String(size));
    setLength('--ddc-tabs-padding-block', 10);
    setLength('--ddc-tabs-button-height', 56);
    setLength('--ddc-tabs-mobile-button-height', 54);
    setLength('--ddc-tabs-button-min-width', 56);
    setLength('--ddc-tabs-button-padding-inline', 16);
    setLength('--ddc-tabs-button-radius', 20);
    setLength('--ddc-tabs-mobile-button-radius', 18);
    setLength('--ddc-tabs-dock-radius', 28);
    setLength('--ddc-tabs-icon-size', 24);
    setLength('--ddc-tabs-layer-icon-box', 36);
    setLength('--ddc-tabs-layer-icon-radius', 14);
    setLength('--ddc-tabs-font-size', 14);
    setLength('--ddc-tabs-gap', 10);
  },

  _renderTabs() {
    const bar = this.tabsBar; if (!bar) return;
    this._syncTabsSize_?.();
    const tabs = Array.isArray(this.tabs) ? this.tabs : [];
    const hasLayerMenu = !!this._hasLayerMenu_?.();
    const sidebarNavActive = !!this._isSidebarNavigationActive_?.();
    const shouldRenderTabs = !!tabs.length && !(tabs.length === 1 && this.hideTabsWhenSingle);
    const previousScrollHost = bar.querySelector?.('.ddc-tabs-scroller') || bar;
    const previousScrollLeft = Number(previousScrollHost?.scrollLeft || 0) || 0;
    const shouldPreserveScroll = !!this.__preserveTabsScrollOnNextRender;
    this.__preserveTabsScrollOnNextRender = false;
    this._syncTabsPlacement_?.();
    if (!this._shouldRenderTabBar_()) {
      this._closeLayersMenu_?.({ render: false });
      bar.style.display = 'none';
      this.rootEl?.classList?.remove?.('ddc-tabs-left-layout');
      this.rootEl?.classList?.remove?.('ddc-tabs-bottom-layout');
      this.rootEl?.classList?.remove?.('ddc-fixed-canvas-tabs');
      this.rootEl?.classList?.remove?.('ddc-fixed-canvas-tabs-top');
      this.rootEl?.classList?.remove?.('ddc-fixed-canvas-tabs-bottom');
      this.rootEl?.classList?.remove?.('ddc-edit-canvas-tabs');
      this.rootEl?.classList?.remove?.('ddc-edit-canvas-tabs-top');
      this.rootEl?.classList?.remove?.('ddc-edit-canvas-tabs-bottom');
      try { this.removeAttribute?.('ddc-tabs-fixed-canvas'); } catch {}
      try { this.removeAttribute?.('ddc-top-tabs-fixed-canvas'); } catch {}
      try { this.removeAttribute?.('ddc-bottom-tabs-fixed-canvas'); } catch {}
      try { this.removeAttribute?.('ddc-tabs-edit-canvas'); } catch {}
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
    const tabScroller = document.createElement('div');
    tabScroller.className = 'ddc-tabs-scroller';
    tabScroller.setAttribute('role', 'presentation');
    bar.appendChild(tabScroller);

    // Let the common sizing logic decide width for all placements so top and
    // bottom share the same dock treatment.
    try {
      bar.style.width = '';
      bar.style.maxWidth = '';
    } catch {}
    if (!hasLayerMenu) this._closeLayersMenu_?.({ render: false });
    if (!this.__layersMenuOpen) this._removeLayerMenuDismissHandlers_?.();
    for (const [tabIndex, t] of (shouldRenderTabs ? tabs : []).entries()) {
      const btn = document.createElement('button');
      btn.className = [
        'ddc-tab',
        t.icon ? 'ddc-tab--has-icon' : '',
        t.id === this.activeTab ? 'active' : ''
      ].filter(Boolean).join(' ');
      btn.dataset.tabId = t.id;
      btn.title = t.label || t.id;
      btn.setAttribute('aria-label', t.label || t.id);
      if (sidebarNavActive) {
        btn.classList.add('ddc-sidebar-tab');
        btn.innerHTML = buildTabButtonMarkup(t, tabIndex, { sidebar: true });
      } else {
        btn.innerHTML = buildTabButtonMarkup(t, tabIndex);
      }
      btn.type = 'button';
      btn.addEventListener('click', (ev) => {
        ev.preventDefault?.();
        ev.stopPropagation?.();
        const nextTab = this._normalizeTabId?.(t.id) || t.id;
        if (this.activeTab !== nextTab) {
          this._switchActiveTab_?.(nextTab).catch?.((err) => {
            console.warn('[ddc:tabs] Could not switch active tab', err);
          });
        } else {
          try { this._centerTabButtonInScroller_?.(btn); } catch {}
        }
      });
      tabScroller.appendChild(btn);
    }
    this._appendLayersMenuToTabs_?.(tabScroller, { panelHost: bar });
    this.__renderingTabs = false;
    this._syncTabsPlacement_?.();
    this._renderSidebar_?.();

    try { this._updateTabsA11y_?.(); } catch {}

    // After rendering tabs, ensure the bar width matches the visible
    // card container width (scaled or unscaled). Without syncing the width,
    // the tabs could stretch to the full page width instead of aligning
    // with the drag-and-drop container.
    try { this._syncTabsWidth_?.(); } catch {}

    try { this._refreshTabsAlignment_?.(); } catch {}

    // Layer menu toggles re-render the tab bar, but they should not move the
    // user's horizontal tab position. Real tab changes on mobile center the
    // active tab, clamped at both ends of the scroll range.
    try {
      const activeBtn = bar.querySelector?.('.ddc-tab.active');
      const scrollHost = bar.querySelector?.('.ddc-tabs-scroller') || bar;
      const maxLeft = Math.max(0, Number(scrollHost.scrollWidth || 0) - Number(scrollHost.clientWidth || 0));
      const clampLeft = (value) => Math.max(0, Math.min(maxLeft, Number(value || 0)));
      if (shouldPreserveScroll) {
        const restoredLeft = Math.max(0, Number(previousScrollLeft || 0));
        scrollHost.scrollLeft = clampLeft(restoredLeft);
        requestAnimationFrame(() => {
          try { scrollHost.scrollLeft = Math.max(0, Math.min(Math.max(0, scrollHost.scrollWidth - scrollHost.clientWidth), restoredLeft)); } catch {}
        });
      } else if (activeBtn && maxLeft > 0) {
        this._centerTabButtonInScroller_?.(activeBtn);
      }
    } catch {}
  },

  async _switchActiveTab_(tabId, options = {}) {
    const nextTab = this._normalizeTabId?.(tabId) || tabId;
    if (!nextTab || this.activeTab === nextTab) return false;

    const transitionSeq = (Number(this.__tabTransitionSeq || 0) || 0) + 1;
    this.__tabTransitionSeq = transitionSeq;
    this.__tabTransitionActive = true;
    this.__tabTransitionTarget = nextTab;

    // The empty-dashboard assistant is only valid for a genuinely empty
    // dashboard. Never let it flash while cards are being swapped or hydrated.
    try { this._hideEmptyPlaceholder?.(); } catch {}
    this.activeTab = nextTab;
    this._resetTabsAutoReturnTimer_?.();
    try { this._closeLayersMenu_?.({ render: false }); } catch {}
    try { localStorage.setItem(`ddc_lasttab_${this.storageKey}`, nextTab); } catch {}
    try { this._syncWrapperTabAssignmentsFromActiveLayout_?.(); } catch {}

    let hydration = null;
    try {
      hydration = this._applyActiveTab({ reason: options.reason || 'tab-change', transitionSeq });
    } catch (err) {
      console.warn('[ddc:tabs] Could not apply active tab', err);
    }
    try { this._renderTabs(); } catch (err) { console.warn('[ddc:tabs] Could not render tabs after switch', err); }
    // Reapply visibility after tab membership has been resolved so conditional
    // cards on the destination tab are correct on the very first frame.
    try { this._applyVisibility_(); } catch {}
    try {
      const host = this.cardContainer?.querySelector?.('#ddcBgHost');
      if (!host || !host.firstChild) this._applyBackgroundFromConfig?.();
    } catch {}

    try {
      await Promise.resolve(hydration);
    } catch {}

    // A slower hydration from an earlier click must never finish a newer tab
    // transition or restore UI belonging to the stale destination.
    if (transitionSeq !== this.__tabTransitionSeq || this.activeTab !== nextTab) return false;
    this.__tabTransitionActive = false;
    this.__tabTransitionTarget = null;
    try { this._applyVisibility_(); } catch {}
    try { this._syncEmptyStateUI?.(); } catch {}
    try { this._renderConnectors_?.(); } catch {}
    return true;
  },

  _applyActiveTab(options = {}) {
    const opts = (options && typeof options === 'object') ? options : {};
    const wraps = this.cardContainer?.querySelectorAll?.('.card-wrapper') || [];
    const becameVisible = [];
    const visibleAfter = [];
    wraps.forEach(w => {
      try {
        const result = this._applyWrapDisplayState_(w, { clearSelectionOnHide: true });
        if (result?.becameVisible) becameVisible.push(w);
        if (result?.visible) visibleAfter.push(w);
      } catch (err) {
        console.warn('[ddc:tabs] Could not update wrapper for active tab', err);
      }
    });

    // After switching tabs, reapply sizing based on the current container mode.
    try {
      const __m = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
      this._applyAutoScale?.();
    } catch {}

    try { this._clearSelection(); } catch {}
    let hydration = Promise.resolve(0);
    try {
      // Scan the committed canvas rather than only wrappers that changed from
      // hidden to visible. A responsive/config rebuild can create the currently
      // active tab as a deferred wrapper while a tab click is in flight; that
      // wrapper is already "visible" at commit time and therefore is absent
      // from becameVisible. Scanning all deferred wrappers is cheap and ensures
      // the active destination can never remain as an empty shell.
      const pending = this._hydrateVisibleDeferredCards_?.();
      if (pending && typeof pending.then === 'function') hydration = pending.catch(() => 0);
    } catch {}
    // On tab changes, replay entrance motion only for cards that just became
    // visible. Initial render still uses the one-time mount animation below.
    try {
      if (opts.reason === 'tab-change') {
        this._animateCards?.(visibleAfter.length ? visibleAfter : becameVisible, { replay: true, reason: 'tab-change' });
      } else if (becameVisible.length) this._animateCards?.(becameVisible, { replay: true, reason: 'tab-change' });
      else this._animateCards?.();
    } catch {}
    try { this._renderConnectors_?.(); } catch {}
    return hydration;
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

      const cardEl = w.firstElementChild;
      const cardCfg = this._extractCardConfig?.(cardEl) || cardEl?.__ddcSourceConfig || cardEl?._config || {};
      const isHtmlCard = String(cardCfg?.type || '').toLowerCase() === 'custom:ddc-html-card'
        || String(cardEl?.tagName || '').toLowerCase() === 'ddc-html-card';
      const motionTarget = isHtmlCard && cardEl ? cardEl : w;
      const motionStyle = motionTarget === w ? cs : window.getComputedStyle?.(motionTarget);

      // Preserve any existing transform from layout. HTML cards animate their
      // host element so the wrapper's translate3d(x,y) remains purely positional.
      const base = (motionStyle && motionStyle.transform && motionStyle.transform !== 'none') ? motionStyle.transform : '';

      // Fly-in distance increases with intensity
      const offsetY = 100 * animationIntensity; // % of element height
      const fromT = `${base} translate3d(0, ${offsetY}%, 0)`;
      const toT   = `${base} translate3d(0, 0, 0)`;

      // Random delay spread scales with intensity
      const delay = Math.random() * (maxDelay * Math.min(animationIntensity, 2)); // cap at 2x spread
      const restoreWillChange = w.style.willChange || '';
      const restoreMotionWillChange = motionTarget.style.willChange || '';
      const restoreTransition = w.style.transition || '';
      const restoreMotionTransition = motionTarget.style.transition || '';
      const restoreOpacity = w.style.opacity || '';
      const restoreTransform = motionTarget.style.transform || '';
      try {
        [w, motionTarget].forEach((target) => target?.getAnimations?.()
          ?.filter((anim) => String(anim?.id || '').startsWith('ddc-card-enter-'))
          ?.forEach((anim) => anim.cancel()));
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
        w.style.willChange = motionTarget === w ? 'opacity, transform' : 'opacity';
        if (motionTarget !== w) motionTarget.style.willChange = 'transform';

        const motionEase = 'cubic-bezier(0.4, 0, 0.2, 1)';
        const opacityEase = 'linear';

        // Opacity fade
        const fade = w.animate(
          [{ opacity: 0 }, { opacity: 1 }],
          { duration, delay, easing: opacityEase, fill: 'both' }
        );
        fade.id = 'ddc-card-enter-opacity';

        // Transform upward flight
        const motion = motionTarget.animate(
          [{ transform: fromT }, { transform: toT }],
          { duration, delay, easing: motionEase, fill: 'both' }
        );
        motion.id = 'ddc-card-enter-transform';
        const cleanup = () => {
          try { fade.cancel(); } catch {}
          try { motion.cancel(); } catch {}
          w.style.opacity = restoreOpacity;
          w.style.willChange = restoreWillChange;
          motionTarget.style.transform = restoreTransform;
          motionTarget.style.willChange = restoreMotionWillChange;
        };
        if (motion.finished && fade.finished) {
          Promise.allSettled([motion.finished, fade.finished]).then(cleanup);
        } else {
          motion.addEventListener?.('finish', cleanup, { once: true });
        }
      } catch {
        // Fallback without Web Animations API
        w.style.opacity = '0';
        motionTarget.style.transform = fromT;
        w.style.willChange = motionTarget === w ? 'opacity, transform' : 'opacity';
        if (motionTarget !== w) motionTarget.style.willChange = 'transform';
        setTimeout(() => {
          if (motionTarget === w) {
            w.style.transition = `opacity ${duration}ms linear, transform ${duration}ms cubic-bezier(0.4,0,0.2,1)`;
          } else {
            w.style.transition = `opacity ${duration}ms linear`;
            motionTarget.style.transition = `transform ${duration}ms cubic-bezier(0.4,0,0.2,1)`;
          }
          w.style.opacity = '1';
          motionTarget.style.transform = toT;
          setTimeout(() => {
            w.style.transition = restoreTransition;
            motionTarget.style.transition = restoreMotionTransition;
            w.style.willChange = restoreWillChange;
            motionTarget.style.willChange = restoreMotionWillChange;
            w.style.opacity = restoreOpacity;
            motionTarget.style.transform = restoreTransform;
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
    const scrollHost = bar.querySelector?.('.ddc-tabs-scroller') || bar;
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
    }
    if (this.__tabsScrollTarget !== scrollHost) {
      try { this.__tabsScrollTarget?.removeEventListener?.('scroll', this.__tabsScrollHandler); } catch {}
      scrollHost.addEventListener('scroll', this.__tabsScrollHandler, { passive: true });
      this.__tabsScrollTarget = scrollHost;
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
      let editCanvasTabs = false;
      const syncFixedTabsState = () => {
        let mode = 'auto';
        let fixedTabs = false;
        let fixedTop = false;
        let fixedBottom = false;
        let eligibleFixedTabs = false;
        try {
          mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
          eligibleFixedTabs = this._shouldRenderTabBar_()
            && mode !== 'auto'
            && !sidebarNavActive
            && !this._isExplicitViewportPreview_?.();
          editCanvasTabs = eligibleFixedTabs && !!this.editMode;
          fixedTabs = eligibleFixedTabs && !editCanvasTabs;
          fixedTop = fixedTabs && this.tabsPosition !== 'bottom';
          fixedBottom = fixedTabs && this.tabsPosition === 'bottom';
        } catch {}
        root?.classList?.toggle?.('ddc-fixed-canvas-tabs', !!fixedTabs);
        root?.classList?.toggle?.('ddc-fixed-canvas-tabs-top', !!fixedTop);
        root?.classList?.toggle?.('ddc-fixed-canvas-tabs-bottom', !!fixedBottom);
        root?.classList?.toggle?.('ddc-edit-canvas-tabs', !!editCanvasTabs);
        root?.classList?.toggle?.('ddc-edit-canvas-tabs-top', !!editCanvasTabs && this.tabsPosition !== 'bottom');
        root?.classList?.toggle?.('ddc-edit-canvas-tabs-bottom', !!editCanvasTabs && this.tabsPosition === 'bottom');
        try { this.toggleAttribute?.('ddc-tabs-fixed-canvas', !!fixedTabs); } catch {}
        try { this.toggleAttribute?.('ddc-top-tabs-fixed-canvas', !!fixedTop); } catch {}
        try { this.toggleAttribute?.('ddc-bottom-tabs-fixed-canvas', !!fixedBottom); } catch {}
        try { this.toggleAttribute?.('ddc-tabs-edit-canvas', !!editCanvasTabs); } catch {}
        if (fixedTabs) {
          try { this._computeHaSidebarGutters_?.(); } catch {}
          try { this._computeHaTopGutter_?.(); } catch {}
        }
        try {
          if (this.__ddcOnWinResize) {
            const vv = window.visualViewport;
            if (fixedTabs) {
              window.addEventListener('resize', this.__ddcOnWinResize);
              vv?.addEventListener?.('resize', this.__ddcOnWinResize);
              vv?.addEventListener?.('scroll', this.__ddcOnWinResize);
            }
            else {
              vv?.removeEventListener?.('resize', this.__ddcOnWinResize);
              vv?.removeEventListener?.('scroll', this.__ddcOnWinResize);
            }
          }
        } catch {}
        try {
          const vv = window.visualViewport;
          const viewportTop = vv ? Math.max(0, vv.offsetTop || 0) : 0;
          const viewportBottom = vv
            ? Math.max(0, (window.innerHeight || document.documentElement?.clientHeight || 0) - (vv.offsetTop || 0) - (vv.height || 0))
            : 0;
          this.style?.setProperty?.('--ddc-visual-viewport-top', `${Math.round(viewportTop)}px`);
          this.style?.setProperty?.('--ddc-visual-viewport-bottom', `${Math.round(viewportBottom)}px`);
        } catch {}
      };
      syncFixedTabsState();
      if (!bar || !root || !anchor || anchor.parentNode !== root) {
        root?.classList?.toggle?.('ddc-sidebar-layout', !!sidebarActive);
        root?.classList?.toggle?.('ddc-tabs-bottom-layout', this.tabsPosition === 'bottom');
        return;
      }

      if (editCanvasTabs) {
        if (bar.parentNode !== anchor) anchor.appendChild(bar);
        root.classList.toggle('ddc-sidebar-layout', !!sidebarActive);
        root.classList.toggle('ddc-tabs-bottom-layout', this.tabsPosition === 'bottom');
        return;
      }

      if (sidebarActive) {
        const host = this.sidebarHost;
        if (host && host.parentNode !== root) root.insertBefore(host, anchor);
      }
      if (sidebarNavActive) {
        const navigation = this.sidebarHost?.querySelector?.('.ddc-sidebar-navigation');
        if (navigation && bar.parentNode !== navigation) navigation.appendChild(bar);
        root.classList.add('ddc-sidebar-layout');
        root.classList.remove('ddc-tabs-bottom-layout');
        return;
      }

      // The edit context may have placed the tab bar inside the scale wrapper.
      // Restore it as a root-level sibling before applying the normal viewport
      // or sidebar placement used outside edit mode.
      if (bar.parentNode !== root) root.insertBefore(bar, anchor);

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

  _centerTabButtonInScroller_(tabButton) {
    try {
      if (!tabButton) return;
      const bar = this.tabsBar;
      const scrollHost = tabButton.closest?.('.ddc-tabs-scroller') || bar;
      if (!scrollHost) return;
      const maxLeft = Math.max(0, Number(scrollHost.scrollWidth || 0) - Number(scrollHost.clientWidth || 0));
      if (maxLeft <= 0) return;
      const viewportWidth = window.visualViewport?.width || window.innerWidth || document.documentElement?.clientWidth || 0;
      if (viewportWidth && viewportWidth <= 768) {
        const targetLeft = tabButton.offsetLeft + (tabButton.offsetWidth / 2) - (scrollHost.clientWidth / 2);
        scrollHost.scrollLeft = Math.max(0, Math.min(maxLeft, targetLeft));
        return;
      }
      tabButton.scrollIntoView({
        behavior: 'auto',
        block: 'nearest',
        inline: 'nearest',
      });
    } catch {}
  },

  _refreshTabsAlignment_() {
    try {
      const bar = this.tabsBar;
      if (!bar) return;
      const scrollHost = bar.querySelector?.('.ddc-tabs-scroller') || bar;
      bar.style.justifyContent = '';
      scrollHost.style.justifyContent = '';
      if (this._isSidebarNavigationActive_?.()) {
        scrollHost.style.justifyContent = 'flex-start';
        return;
      }
      if (scrollHost.scrollWidth <= scrollHost.clientWidth) {
        scrollHost.style.justifyContent = 'center';
      } else {
        scrollHost.style.justifyContent = 'flex-start';
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
