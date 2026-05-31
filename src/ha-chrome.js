/* -------------------- HA chrome (header/sidebar) visibility -------------------- */
const haChromeMethods = {
  _setHeaderVisible_(show = true) {
    try {
      // 1) Hide the header containers across HA variants
      const headers = this._deepQueryAll?.(
        'app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar'
      ) || [];
      headers.forEach(el => {
        if (!el) return;
        if (el.dataset.ddcPrevDisplayHeader === undefined) {
          el.dataset.ddcPrevDisplayHeader = el.style.display || '';
          el.dataset.ddcPrevMinH = el.style.minHeight || '';
          el.dataset.ddcPrevH = el.style.height || '';
          el.dataset.ddcPrevVis = el.style.visibility || '';
        }
        if (show) {
          el.style.display = el.dataset.ddcPrevDisplayHeader || '';
          el.style.minHeight = el.dataset.ddcPrevMinH || '';
          el.style.height = el.dataset.ddcPrevH || '';
          el.style.visibility = el.dataset.ddcPrevVis || '';
          el.removeAttribute('hidden');
        } else {
          el.style.display = 'none';
          el.style.minHeight = '0';
          el.style.height = '0';
          el.style.visibility = 'hidden';
          el.setAttribute('hidden', '');
        }
      });

      // 2) Explicitly hide the action items (Search / Assist / Edit menu)
      //    Belt & suspenders: catch both slot-based and direct buttons/menus.
      const actionNodes = this._deepQueryAll?.(
        '[slot="actionItems"], ha-icon-button, ha-button-menu, assist-button, search-input, ha-quick-bar, ha-mwc-menu'
      ) || [];
      actionNodes.forEach(el => {
        if (!el) return;
        if (el.dataset.ddcPrevDisplayAction === undefined) {
          el.dataset.ddcPrevDisplayAction = el.style.display || '';
          el.dataset.ddcPrevVisAction = el.style.visibility || '';
        }
        if (show) {
          el.style.display = el.dataset.ddcPrevDisplayAction || '';
          el.style.visibility = el.dataset.ddcPrevVisAction || '';
        } else {
          el.style.display = 'none';
          el.style.visibility = 'hidden';
        }
      });

      // 3) Adjust CSS variables so layout doesn't reserve header space
      //    Include an extra var some themes use, and collapse content padding.
      const containers = [
        ...(this._deepQueryAll?.('ha-app-layout') || []),
        ...(this._deepQueryAll?.('home-assistant-main') || []),
        document.documentElement,
        document.body
      ].filter(Boolean);

      containers.forEach(host => {
        if (!host) return;
        if (host.dataset.ddcPrevHdrVars === undefined) {
          host.dataset.ddcPrevHdrVars = JSON.stringify({
            mdc: host.style.getPropertyValue('--mdc-top-app-bar-height') || '',
            app: host.style.getPropertyValue('--app-header-height') || '',
            hdr: host.style.getPropertyValue('--header-height') || '',
            hah: host.style.getPropertyValue('--ha-header-height') || '',
            pad: (host.style && (host.style.paddingTop || '')) || ''
          });
        }
        if (show) {
          try {
            const prev = JSON.parse(host.dataset.ddcPrevHdrVars || '{}');
            host.style.setProperty('--mdc-top-app-bar-height', prev.mdc || '');
            host.style.setProperty('--app-header-height', prev.app || '');
            host.style.setProperty('--header-height', prev.hdr || '');
            host.style.setProperty('--ha-header-height', prev.hah || '');
            if (prev.pad !== undefined) host.style.paddingTop = prev.pad || '';
          } catch {}
        } else {
          host.style.setProperty('--mdc-top-app-bar-height', '0px');
          host.style.setProperty('--app-header-height', '0px');
          host.style.setProperty('--header-height', '0px');
          host.style.setProperty('--ha-header-height', '0px');
          try { host.style.paddingTop = '0px'; } catch {}
        }
      });

      // 4) Some builds keep content under a #contentContainer; collapse its padding too
      const contentContainers = this._deepQueryAll?.('#contentContainer') || [];
      contentContainers.forEach(cc => {
        if (!cc) return;
        if (cc.dataset.ddcPrevContentPadTop === undefined) {
          cc.dataset.ddcPrevContentPadTop = (cc.style && (cc.style.paddingTop || '')) || '';
        }
        cc.style.paddingTop = show ? (cc.dataset.ddcPrevContentPadTop || '') : '0px';
      });

      // 5) Hide the main title (e.g. "Home")
      const mainTitles = this._deepQueryAll?.('.main-title') || [];
      mainTitles.forEach(el => {
        if (!el) return;
        if (el.dataset.ddcPrevDisplayTitle === undefined) {
          el.dataset.ddcPrevDisplayTitle = el.style.display || '';
          el.dataset.ddcPrevVisTitle = el.style.visibility || '';
        }
        if (show) {
          el.style.display = el.dataset.ddcPrevDisplayTitle || '';
          el.style.visibility = el.dataset.ddcPrevVisTitle || '';
        } else {
          el.style.display = 'none';
          el.style.visibility = 'hidden';
        }
      });

    } catch {}
  },

  _setSidebarVisible_(show=true) {
    try {
      const sidebars = this._deepQueryAll?.('ha-sidebar') || [];
      sidebars.forEach(el => {
        if (!el) return;
        if (el.dataset.ddcPrevDisplaySidebar === undefined) {
          el.dataset.ddcPrevDisplaySidebar = el.style.display || '';
        }
        el.style.display = show ? el.dataset.ddcPrevDisplaySidebar || '' : 'none';
      });
      const drawers = this._deepQueryAll?.('ha-drawer') || [];
      drawers.forEach(el => {
        if (!el) return;
        if (el.dataset.ddcPrevDrawerWidth === undefined) {
          el.dataset.ddcPrevDrawerWidth = el.style.getPropertyValue('--mdc-drawer-width') || '';
        }
        if (show) {
          el.style.setProperty('--mdc-drawer-width', el.dataset.ddcPrevDrawerWidth || '');
        } else {
          el.style.setProperty('--mdc-drawer-width', '0px');
        }
        try { if (!show && typeof el.close === 'function') el.close(); } catch {}
      });
    } catch {}
  },

  _getHaSidebarGutterCandidates_() {
    const candidates = [];
    const seen = new WeakSet();
    const add = (el) => {
      if (!el || seen.has(el)) return;
      seen.add(el);
      candidates.push(el);
    };
    const selector = 'ha-sidebar, ha-drawer, app-drawer, mwc-drawer, .drawer, .mdc-drawer, [slot="drawer"]';
    try {
      (this._deepQueryAll?.(selector) || []).forEach(add);
    } catch {}
    try {
      const ha = document.querySelector('home-assistant');
      ha?.shadowRoot?.querySelectorAll?.(selector)?.forEach(add);
    } catch {}
    return candidates;
  },

  _isOwnChromeElement_(el) {
    try {
      let node = el;
      while (node) {
        if (node === this || node === this.shadowRoot || node === this.renderRoot) return true;
        if (node.parentElement) {
          node = node.parentElement;
          continue;
        }
        const root = node.getRootNode?.();
        const host = root?.host;
        if (!host || host === node) break;
        node = host;
      }
    } catch {}
    return false;
  },

  _getHaTopChromeCandidates_() {
    const candidates = [];
    const seen = new WeakSet();
    const add = (el) => {
      if (!el || seen.has(el) || this._isOwnChromeElement_?.(el)) return;
      seen.add(el);
      candidates.push(el);
    };
    const selector = [
      'app-header',
      'ha-top-app-bar',
      'ha-top-app-bar-fixed',
      'mwc-top-app-bar-fixed',
      'ha-header-bar',
      'app-toolbar',
      'ha-toolbar',
      'hui-root',
      'hui-view',
      'hui-panel-view',
      'hui-masonry-view',
      'hui-sections-view',
      'hui-root [edit-mode]',
      'hui-root [editing]',
      'hui-root [data-edit-mode]',
      'hui-root [data-mode="edit"]',
      'hui-root .edit-mode',
      'hui-root .editing',
      'hui-root .toolbar',
      'hui-root [class*="toolbar"]',
      'hui-root [class*="edit"]',
      'hui-root [id*="edit"]',
      'hui-root ha-alert',
      'hui-root ha-button',
      'hui-root mwc-button',
      'hui-root ha-icon-button',
      'hui-root hui-card-options',
      'hui-root hui-view-editor',
      'hui-root hui-edit-mode-card',
      'hui-root hui-dashboard-editor',
      'partial-panel-resolver [edit-mode]',
      'partial-panel-resolver [editing]',
      'partial-panel-resolver [class*="toolbar"]',
      'partial-panel-resolver [class*="edit"]'
    ].join(',');
    try {
      (this._deepQueryAll?.(selector) || []).forEach(add);
    } catch {}
    return candidates;
  },

  _haEditChromeSignal_(el) {
    try {
      if (!el) return false;
      const parts = [];
      const add = (value) => {
        if (value == null) return;
        const text = String(value).trim();
        if (text) parts.push(text);
      };
      let node = el;
      for (let i = 0; node && i < 5; i += 1) {
        add(node.localName);
        add(node.id);
        add(node.className);
        add(node.getAttribute?.('aria-label'));
        add(node.getAttribute?.('title'));
        add(node.getAttribute?.('data-mode'));
        add(node.getAttribute?.('data-edit-mode'));
        if (
          node.hasAttribute?.('edit-mode')
          || node.hasAttribute?.('editing')
          || node.hasAttribute?.('data-edit-mode')
        ) return true;
        if (node.parentElement) {
          node = node.parentElement;
          continue;
        }
        const root = node.getRootNode?.();
        node = root?.host || null;
      }
      const signal = parts.join(' ').toLowerCase();
      if (/(^|[\s_-])(edit|editing|editor|rediger|redigering|ferdig|done)([\s_-]|$)/.test(signal)) return true;
      const text = String(el.textContent || '').trim().toLowerCase();
      return !!text && /(edit dashboard|edit mode|editing|done|rediger|redigering|ferdig|avslutt)/.test(text);
    } catch {
      return false;
    }
  },

  _isHaDashboardEditorActive_() {
    try {
      const roots = this._deepQueryAll?.(
        'ha-panel-lovelace, hui-root, hui-view, hui-panel-view, hui-masonry-view, hui-sections-view'
      ) || [];
      for (const el of roots) {
        if (!el || this._isOwnChromeElement_?.(el)) continue;
        const props = ['editMode', 'isEditing', '_editMode', '_editing', 'editing', 'isEditMode'];
        for (const prop of props) {
          try { if (el[prop] === true) return true; } catch {}
        }
        try { if (el.lovelace?.editMode === true || el.lovelace?.editing === true) return true; } catch {}
        try {
          if (
            el.hasAttribute?.('edit-mode')
            || el.hasAttribute?.('editing')
            || el.getAttribute?.('data-mode') === 'edit'
            || el.getAttribute?.('data-edit-mode') === 'true'
            || el.classList?.contains?.('edit-mode')
            || el.classList?.contains?.('editing')
          ) return true;
        } catch {}
      }
    } catch {}
    try {
      return (this._getHaTopChromeCandidates_?.() || []).some((el) => {
        if (!this._haEditChromeSignal_?.(el)) return false;
        const rect = el.getBoundingClientRect?.();
        if (!rect || rect.height < 12 || rect.width < 80) return false;
        if (rect.height > Math.min(180, (window.innerHeight || 540) * 0.34)) return false;
        return rect.bottom > 0 && rect.top < Math.min(220, window.innerHeight || 220);
      });
    } catch {
      return false;
    }
  },

  _getHaEditorChromeTopBottom_() {
    let bottom = 0;
    const editorActive = !!(this.editMode && this._isHaDashboardEditorActive_?.());
    if (!editorActive) return { active: false, bottom: 0 };
    try {
      const vh = Math.max(1, window.innerHeight || document.documentElement?.clientHeight || 1);
      const vw = Math.max(1, window.innerWidth || document.documentElement?.clientWidth || 1);
      (this._getHaTopChromeCandidates_?.() || []).forEach((el) => {
        try {
          if (!el || this._isOwnChromeElement_?.(el)) return;
          const cs = window.getComputedStyle?.(el);
          if (cs?.display === 'none' || cs?.visibility === 'hidden' || Number(cs?.opacity) === 0) return;
          const rect = el.getBoundingClientRect?.();
          if (!rect || rect.height < 12 || rect.width < 80) return;
          if (rect.height > Math.min(180, vh * 0.34)) return;
          if (rect.bottom <= 0 || rect.top >= vh) return;
          if (rect.top > Math.min(180, vh * 0.28)) return;
          const spansTop = rect.width >= Math.min(360, vw * 0.48) || rect.left <= 12 || rect.right >= vw - 12;
          const positioned = /^(fixed|sticky|absolute)$/i.test(String(cs?.position || ''));
          const editSignal = this._haEditChromeSignal_?.(el);
          if (!editSignal && !positioned) return;
          if (!spansTop && !positioned && !editSignal) return;
          bottom = Math.max(bottom, Math.round(rect.bottom));
        } catch {}
      });
    } catch {}
    return { active: true, bottom };
  },

  _measureVisibleHaTopChromeBottom_() {
    let bottom = 0;
    try {
      if (typeof document === 'undefined' || typeof window === 'undefined') return 0;
      const vw = Math.max(1, window.innerWidth || document.documentElement?.clientWidth || 1);
      const vh = Math.max(1, window.innerHeight || document.documentElement?.clientHeight || 1);
      const rawLeft = parseFloat(this.style.getPropertyValue('--ddc-left-gutter') || '0') || 0;
      const minX = Math.min(vw - 2, Math.max(2, rawLeft + 12));
      const sampleXs = Array.from(new Set([
        Math.round(Math.min(vw - 2, Math.max(2, minX + 36))),
        Math.round(Math.min(vw - 2, Math.max(2, rawLeft + ((vw - rawLeft) * 0.5)))),
        Math.round(Math.min(vw - 2, Math.max(2, vw - 48)))
      ])).filter((x) => Number.isFinite(x) && x >= 0 && x <= vw);
      const sampleYs = [];
      for (let y = 4; y <= Math.min(220, vh - 1); y += 10) sampleYs.push(y);
      const seen = new WeakSet();
      const pointStack = (x, y) => {
        const nodes = [];
        let el = null;
        try { el = document.elementFromPoint(x, y); } catch {}
        for (let depth = 0; el && depth < 10; depth += 1) {
          nodes.push(el);
          const root = el.shadowRoot;
          let inner = null;
          try { inner = root?.elementFromPoint?.(x, y) || null; } catch {}
          if (!inner || inner === el || nodes.includes(inner)) break;
          el = inner;
        }
        return nodes;
      };
      const consider = (el, sampleY) => {
        try {
          if (!el || seen.has(el) || this._isOwnChromeElement_?.(el)) return;
          seen.add(el);
          const tag = String(el.localName || '').toLowerCase();
          if (!tag || tag === 'html' || tag === 'body' || tag === 'home-assistant') return;
          const cs = window.getComputedStyle?.(el);
          if (!cs || cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0) return;
          const rect = el.getBoundingClientRect?.();
          if (!rect || rect.width < 48 || rect.height < 10) return;
          if (rect.height > Math.min(180, vh * 0.34)) return;
          if (rect.bottom <= 0 || rect.top >= Math.min(220, vh)) return;
          if (rect.top > 140) return;
          if (rect.bottom > Math.min(240, vh)) return;
          if (sampleY != null && (sampleY < rect.top - 2 || sampleY > rect.bottom + 2)) return;
          const spansContent = rect.width >= Math.min(320, Math.max(120, (vw - rawLeft) * 0.35));
          const nearTopEdge = rect.top <= 8 || rect.left <= rawLeft + 24 || rect.right >= vw - 8;
          const positioned = /^(fixed|sticky|absolute)$/i.test(String(cs.position || ''));
          const signal = this._haEditChromeSignal_?.(el);
          if (!spansContent && !nearTopEdge && !positioned && !signal) return;
          bottom = Math.max(bottom, Math.round(rect.bottom));
        } catch {}
      };
      sampleXs.forEach((x) => {
        sampleYs.forEach((y) => {
          pointStack(x, y).forEach((pointEl) => {
            let el = pointEl;
            for (let depth = 0; el && depth < 8; depth += 1) {
              consider(el, y);
              const root = el.getRootNode?.();
              const host = root?.host;
              el = el.parentElement || (host && host !== el ? host : null);
            }
          });
        });
      });
    } catch {}
    return Math.max(0, Math.round(bottom));
  },

  _computeHaSidebarGutters_() {
    let left = 56; // default desktop gutter; HA collapsed is ~56-64px
    try {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      // On mobile the nav overlays; treat gutter as 0
      if (vw <= 870) {
        left = 0;
      } else {
        const maxDock = Math.min(420, Math.max(280, vw * 0.42));
        let measuredLeft = 0;
        const toPx = (value) => {
          const n = parseFloat(String(value ?? '').trim());
          return Number.isFinite(n) ? Math.max(0, n) : 0;
        };
        const candidates = this._getHaSidebarGutterCandidates_?.() || [];
        candidates.forEach((el) => {
          try {
            const styles = window.getComputedStyle?.(el);
            if (styles?.display === 'none' || styles?.visibility === 'hidden') return;
            const rect = el.getBoundingClientRect?.();
            if (!rect || rect.height < 120 || rect.width < 36) return;
            const isLeftDock = rect.left <= 12 && rect.right > 40 && rect.right <= maxDock;
            if (!isLeftDock) return;
            measuredLeft = Math.max(measuredLeft, Math.round(rect.right));
            measuredLeft = Math.max(
              measuredLeft,
              toPx(styles?.width),
              toPx(styles?.getPropertyValue?.('--mdc-drawer-width')),
              toPx(styles?.getPropertyValue?.('--sidebar-width')),
              toPx(styles?.getPropertyValue?.('--ha-sidebar-width'))
            );
          } catch {}
        });
        if (measuredLeft > 0) {
          left = Math.max(0, Math.min(420, Math.round(measuredLeft)));
        }
      }
    } catch {}
    let right = 0; // adjust if you have a right dock; keep 0 otherwise
    try {
      // Example hook for themes with a right dock: measure & set right here.
    } catch {}
    try {
      this.style.setProperty('--ddc-left-gutter', `${left}px`);
      this.style.setProperty('--ddc-right-gutter', `${right}px`);
    } catch {}
  },

  _computeHaTopGutter_() {
    let chromeTop = 0;
    const toPx = (value) => {
      const n = parseFloat(String(value ?? '').trim());
      return Number.isFinite(n) ? Math.max(0, n) : 0;
    };
    try {
      const roots = [
        document.documentElement,
        document.body,
        ...(this._deepQueryAll?.('ha-app-layout, home-assistant-main') || [])
      ].filter(Boolean);
      roots.forEach((node) => {
        try {
          const cs = getComputedStyle(node);
          chromeTop = Math.max(
            chromeTop,
            toPx(cs.getPropertyValue('--header-height')),
            toPx(cs.getPropertyValue('--ha-header-height')),
            toPx(cs.getPropertyValue('--app-header-height')),
            toPx(cs.getPropertyValue('--mdc-top-app-bar-height'))
          );
        } catch {}
      });
    } catch {}
    try {
      const headers = this._deepQueryAll?.(
        'app-header, ha-top-app-bar, ha-top-app-bar-fixed, mwc-top-app-bar-fixed, ha-header-bar, app-toolbar, ha-toolbar'
      ) || [];
      headers.forEach((el) => {
        try {
          if (!el) return;
          if (this._isOwnChromeElement_?.(el)) return;
          const cs = getComputedStyle(el);
          if (cs.display === 'none' || cs.visibility === 'hidden') return;
          const rect = el.getBoundingClientRect?.();
          if (!rect || rect.height < 8 || rect.width < 120) return;
          if (rect.bottom <= 0) return;
          if (rect.top >= Math.max(window.innerHeight || 0, 1)) return;
          chromeTop = Math.max(chromeTop, Math.round(rect.bottom));
        } catch {}
      });
    } catch {}
    let top = chromeTop;
    let editorChrome = { active: false, bottom: 0 };
    try {
      const dashboardEditorActive = !!this._isHaDashboardEditorActive_?.();
      editorChrome = dashboardEditorActive
        ? (this._getHaEditorChromeTopBottom_?.() || editorChrome)
        : editorChrome;
      const visibleTopChromeBottom = dashboardEditorActive
        ? (this._measureVisibleHaTopChromeBottom_?.() || 0)
        : 0;
      const visibleLooksLikeNativeEditor = !!(
        dashboardEditorActive &&
        this.editMode &&
        visibleTopChromeBottom >= Math.min(96, Math.max(72, (window.innerHeight || 720) * 0.08))
      );
      const useHaEditorChrome = !!(editorChrome.active || visibleLooksLikeNativeEditor);
      const measuredBottom = Math.max(editorChrome.bottom || 0, visibleTopChromeBottom || 0);
      const activeBottom = measuredBottom > 0 ? measuredBottom : chromeTop;
      if (useHaEditorChrome && activeBottom > 0) {
        top = Math.max(chromeTop, Math.round(activeBottom + (this.editMode ? 12 : 0)));
        if (visibleTopChromeBottom > 0) editorChrome.active = true;
        editorChrome.bottom = Math.max(editorChrome.bottom || 0, activeBottom);
      } else {
        editorChrome.active = false;
        editorChrome.bottom = 0;
      }
    } catch {}
    try {
      this.style.setProperty('--ddc-top-gutter', `${Math.max(0, Math.round(top))}px`);
      this.style.setProperty('--ddc-ha-editor-top-gutter', `${Math.max(0, Math.round(editorChrome.bottom || 0))}px`);
      this.toggleAttribute?.('ddc-ha-editor-active', !!editorChrome.active);
      this._syncToolbarFollowPosition_?.(Math.max(0, Math.round(top)));
    } catch {}
  },

  _applyHaChromeVisibility_() {
    try {
      const showAll = !!this.editMode || this._isInHaEditorPreview?.();
      // header
      if (showAll || !this.hideHaHeader) this._setHeaderVisible_(true);
      else this._setHeaderVisible_(false);
      // sidebar
      if (showAll || !this.hideHaSidebar) this._setSidebarVisible_(true);
      else this._setSidebarVisible_(false);

    } catch {}
    requestAnimationFrame(() => {
      try { this._computeHaSidebarGutters_?.(); } catch {}
      try { this._computeHaTopGutter_?.(); } catch {}
      try { this._refreshToolbarOpenHeight_?.(); } catch {}
    });
  },
};

export function installHaChromeMethods(proto) {
  for (const [name, value] of Object.entries(haChromeMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
