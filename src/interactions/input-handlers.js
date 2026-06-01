/*
 * Pointer, keyboard, clipboard, panning, and long-press interactions.
 *
 * These handlers are shared by card movement, selection, connector editing, mobile entry into edit
 * mode, copy/paste, and keyboard shortcuts.
 */

const inputInteractionMethods = {


  async _onKeyDown_(e) {
  if (!this.editMode) return;
  if (this._isTypingTarget_(e)) return;

  if ((e.ctrlKey || e.metaKey) && !e.altKey) {
    const key = String(e.key || '').toLowerCase();
    if (key === 'z') {
      e.preventDefault();
      if (e.shiftKey) await this._redoLayoutHistory_?.();
      else await this._undoLayoutHistory_?.();
      return;
    }
    if (key === 'y') {
      e.preventDefault();
      await this._redoLayoutHistory_?.();
      return;
    }
  }

  const gs = Number(this.gridSize || 10);
  const step = e.altKey ? 1 : (e.shiftKey ? gs * 5 : gs);

  let dx = 0, dy = 0;
  switch (e.key) {
    case 'ArrowLeft':  dx = -step; break;
    case 'ArrowRight': dx =  step; break;
    case 'ArrowUp':    dy = -step; break;
    case 'ArrowDown':  dy =  step; break;
  }
  if (dx || dy) {
    e.preventDefault();
    this._moveSelectionBy_(dx, dy, { liveSnap: !e.altKey });
    return;
  }

  if (e.key === 'Delete' || e.key === 'Backspace') {
    const sel = this._selection && this._selection.size ? Array.from(this._selection) : [];
    if (!sel.length) return;
    e.preventDefault();
    sel.forEach(el => el.remove());
    this._clearSelection?.();
    this._resizeContainer?.();
    this._queueSave?.('delete-key');
    this._ensurePlaceholderIfEmpty?.();
    return;
  }

  if ((e.ctrlKey || e.metaKey) && (e.key === 'd' || e.key === 'D')) {
    e.preventDefault();
    await this._duplicateSelection_();
    return;
  }

  if ((e.ctrlKey || e.metaKey) && e.key === ']') {
    e.preventDefault();
    (this._selection && this._selection.forEach?.(w => this._adjustZ?.(w, +1)));
    this._queueSave?.('z-up');
    return;
  }
  if ((e.ctrlKey || e.metaKey) && e.key === '[') {
    e.preventDefault();
    (this._selection && this._selection.forEach?.(w => this._adjustZ?.(w, -1)));
    this._queueSave?.('z-down');
    return;
  }
},



  async _duplicateSelection_() {
  if (!this._selection || !this._selection.size) return;
  const sel = Array.from(this._selection);
  for (const t of sel) {
    try {
      const cfg = this._extractCardConfig?.(t.firstElementChild) || {};
      const dup = await this._createCard?.(cfg);
      const w2  = this._makeWrapper?.(dup);
      if (!dup || !w2) continue;

      w2.style.width  = t.style.width;
      w2.style.height = t.style.height;

      const step = Number(this.gridSize || 10);
      const x = (parseFloat(t.getAttribute('data-x')) || 0) + step;
      const y = (parseFloat(t.getAttribute('data-y')) || 0) + step;

      this._setCardPosition?.(w2, x, y);
      // Assign a new z-index that is at least 6 so that the duplicated card
      // always appears above the grid overlay.  Use the higher of the
      // current highest z-index plus one or the baseline of 6.
      const nextZVal = (this._highestZ?.() || 0) + 1;
      w2.style.zIndex = String(Math.max(nextZVal, 6));
        // Preserve the tab assignment from the original wrapper. Without this,
        // duplicates incorrectly end up in the currently active tab instead of
        // inheriting the source tab. See: https://github.com/owner/repo/issues/XYZ
        try {
          const tid = t.dataset?.tabId;
          if (tid) w2.dataset.tabId = tid;
        } catch {}

      this.cardContainer?.appendChild(w2);
        // When duplicating we need to wire up a tab selector for the new
        // wrapper so that the user can reassign it later. Passing the
        // inherited tab ensures the selector defaults correctly.
        try { this._addTabSelectorToChip?.(w2, w2.dataset.tabId); } catch {}
      try { this._rebuildOnce?.(w2.firstElementChild); } catch {}
      try { this._initCardInteract?.(w2); } catch {}
    } catch {}
  }
  try { this._resizeContainer?.(); } catch {}
  try { this._queueSave?.('duplicate'); } catch {}
},



  _moveSelectionBy_(dx, dy, { liveSnap = true } = {}) {
  if (!this._selection || !this._selection.size) return;
  const sel = Array.from(this._selection);

  const gs = Number(this.gridSize || 10);
  const fixed = this._isContainerFixed?.();
  const box = this._getContainerSize?.() || { w: Infinity, h: Infinity };

  const proposed = sel.map(el => {
    const rawX = parseFloat(el.getAttribute('data-x-raw')) || parseFloat(el.getAttribute('data-x')) || 0;
    const rawY = parseFloat(el.getAttribute('data-y-raw')) || parseFloat(el.getAttribute('data-y')) || 0;
    const w = parseFloat(el.style.width)  || el.getBoundingClientRect().width;
    const h = parseFloat(el.style.height) || el.getBoundingClientRect().height;

    let nx = rawX + dx;
    let ny = rawY + dy;

    if (fixed) {
      nx = Math.max(0, Math.min(nx, Math.max(0, box.w - w)));
      ny = Math.max(0, Math.min(ny, Math.max(0, box.h - h)));
    }

    const sx = liveSnap ? Math.round(nx / gs) * gs : nx;
    const sy = liveSnap ? Math.round(ny / gs) * gs : ny;

    return { el, rawX: nx, rawY: ny, snapX: sx, snapY: sy, w, h };
  });

  if (this.disableOverlap && typeof this._pushCardsOutOfTheWay === 'function') {
    try { this._pushCardsOutOfTheWay(proposed, dx, dy, liveSnap, gs); } catch {}
  }

  for (const p of proposed) {
    p.el.setAttribute('data-x-raw', String(p.rawX));
    p.el.setAttribute('data-y-raw', String(p.rawY));
    try { this._setCardPosition?.(p.el, p.snapX, p.snapY); } catch {}
  }
  try { this._resizeContainer?.(); } catch {}
  try { this._queueSave?.('nudge'); } catch {}
},






  _isTypingTarget_(targetOrEvent) {
  const eventPath = typeof targetOrEvent?.composedPath === 'function'
    ? targetOrEvent.composedPath()
    : [];
  const targets = eventPath.length
    ? eventPath
    : [targetOrEvent?.target || targetOrEvent];
  const editableSelector = [
    'input',
    'textarea',
    'select',
    '[contenteditable="true"]',
    '[contenteditable="plaintext-only"]',
    '[role="textbox"]',
    '[role="combobox"]',
    '[role="searchbox"]',
    'ha-textfield',
    'mwc-textfield',
    'ha-select',
    'mwc-select',
    'ha-combo-box',
    'ha-entity-picker',
    'ha-code-editor',
    '.CodeMirror',
    '.cm-editor',
    '.monaco-editor',
    '.ace_editor',
    '.rich-surface',
  ].join(',');
  return targets.some((node) => {
    if (!node || node === window || node === document) return false;
    const tag = String(node.tagName || '').toLowerCase();
    if (['input', 'textarea', 'select', 'option'].includes(tag)) return true;
    if (node.isContentEditable || node.getAttribute?.('contenteditable')) return true;
    if (node.matches?.(editableSelector) || node.closest?.(editableSelector)) return true;
    return false;
  });
},


  _getMiddleMousePanPrimaryTarget_() {
    const outer = this.__scaleOuter || this.shadowRoot?.querySelector?.('.ddc-scale-outer') || null;
    const container = this.cardContainer || this.shadowRoot?.querySelector?.('#cardContainer') || null;
    return outer || container || null;
  },


  _getMiddleMousePanAxisTarget_(primary, axis) {
    const canScroll = (el) => {
      if (!el) return false;
      const scrollSize = axis === 'x' ? el.scrollWidth : el.scrollHeight;
      const clientSize = axis === 'x' ? el.clientWidth : el.clientHeight;
      return (Number(scrollSize || 0) - Number(clientSize || 0)) > 1;
    };
    if (primary && canScroll(primary)) return primary;
    const container = this.cardContainer || this.shadowRoot?.querySelector?.('#cardContainer') || null;
    if (container && container !== primary && canScroll(container)) return container;
    let node = primary || container || this;
    const seen = new Set();
    while (node && !seen.has(node)) {
      seen.add(node);
      const root = typeof node.getRootNode === 'function' ? node.getRootNode() : null;
      node = node.parentElement || node.parentNode || root?.host || null;
      if (node && canScroll(node)) return node;
    }
    const page = document.scrollingElement || document.documentElement || document.body || null;
    if (page && page !== primary && canScroll(page)) return page;
    return primary || page || null;
  },


  _installMiddleMousePan_() {
    const container = this.cardContainer || this.shadowRoot?.querySelector?.('#cardContainer') || null;
    if (!container) return;
    const primary = this._getMiddleMousePanPrimaryTarget_();
    const targets = Array.from(new Set([primary, container].filter(Boolean)));
    const installedTargets = this.__middleMousePanTargets || [];
    const sameTargets = installedTargets.length === targets.length
      && targets.every((target, index) => target === installedTargets[index]);
    if (sameTargets && this.__middleMousePanHandlers) return;
    if (this.__middleMousePanHandlers) this._uninstallMiddleMousePan_();

    const stopEvent = (ev) => {
      try { ev.preventDefault?.(); } catch {}
      try { ev.stopImmediatePropagation?.(); } catch {}
      try { ev.stopPropagation?.(); } catch {}
    };

    const movePan = (ev) => {
      const state = this.__middleMousePanState;
      if (!state) return;
      if (typeof ev.buttons === 'number' && (ev.buttons & 4) === 0) {
        this._stopMiddleMousePan_(ev);
        return;
      }
      stopEvent(ev);
      const dx = Number(ev.clientX || 0) - state.startX;
      const dy = Number(ev.clientY || 0) - state.startY;
      try {
        if (state.xTarget) state.xTarget.scrollLeft = Math.max(0, state.startScrollLeft - dx);
        if (state.yTarget) state.yTarget.scrollTop = Math.max(0, state.startScrollTop - dy);
      } catch {}
    };

    const endPan = (ev) => this._stopMiddleMousePan_(ev);

    const onDown = (ev) => {
      if (!this.editMode) return;
      if (ev.button !== 1) return;
      const currentPrimary = this._getMiddleMousePanPrimaryTarget_();
      const xTarget = this._getMiddleMousePanAxisTarget_(currentPrimary, 'x');
      const yTarget = this._getMiddleMousePanAxisTarget_(currentPrimary, 'y');
      if (!xTarget && !yTarget) return;
      stopEvent(ev);

      this.__middleMousePanState = {
        primary: currentPrimary,
        container,
        xTarget,
        yTarget,
        startX: Number(ev.clientX || 0),
        startY: Number(ev.clientY || 0),
        startScrollLeft: Number(xTarget?.scrollLeft || 0),
        startScrollTop: Number(yTarget?.scrollTop || 0),
      };

      try { currentPrimary?.classList?.add?.('ddc-middle-pan-active'); } catch {}
      try { container.classList?.add?.('ddc-middle-pan-active'); } catch {}
      try {
        this.__middleMousePanBodyCursor = document.body?.style?.cursor || '';
        if (document.body?.style) document.body.style.cursor = 'grabbing';
      } catch {}

      window.addEventListener('mousemove', movePan, { capture: true, passive: false });
      window.addEventListener('mouseup', endPan, true);
      window.addEventListener('blur', endPan);
    };

    const onAuxClick = (ev) => {
      if (!this.editMode) return;
      if (ev.button !== 1) return;
      stopEvent(ev);
    };

    targets.forEach((target) => {
      target.addEventListener('mousedown', onDown, { capture: true, passive: false });
      target.addEventListener('auxclick', onAuxClick, { capture: true, passive: false });
    });
    this.__middleMousePanTargets = targets;
    this.__middleMousePanHandlers = { onDown, onAuxClick, movePan, endPan };
  },


  _stopMiddleMousePan_(ev = null) {
    const state = this.__middleMousePanState;
    if (state && ev?.button === 1) {
      try { ev.preventDefault?.(); } catch {}
      try { ev.stopPropagation?.(); } catch {}
    }
    const handlers = this.__middleMousePanHandlers;
    if (handlers) {
      window.removeEventListener('mousemove', handlers.movePan, true);
      window.removeEventListener('mouseup', handlers.endPan, true);
      window.removeEventListener('blur', handlers.endPan);
    }
    try { state?.primary?.classList?.remove?.('ddc-middle-pan-active'); } catch {}
    try { state?.container?.classList?.remove?.('ddc-middle-pan-active'); } catch {}
    try {
      if (document.body?.style && this.__middleMousePanBodyCursor !== undefined) {
        document.body.style.cursor = this.__middleMousePanBodyCursor || '';
      }
    } catch {}
    this.__middleMousePanBodyCursor = undefined;
    this.__middleMousePanState = null;
  },


  _uninstallMiddleMousePan_() {
    this._stopMiddleMousePan_();
    const handlers = this.__middleMousePanHandlers;
    const targets = this.__middleMousePanTargets || [];
    if (handlers) {
      targets.forEach((target) => {
        try { target.removeEventListener('mousedown', handlers.onDown, true); } catch {}
        try { target.removeEventListener('auxclick', handlers.onAuxClick, true); } catch {}
      });
    }
    this.__middleMousePanHandlers = null;
    this.__middleMousePanTargets = null;
  },
};

export function installInputInteractionMethods(proto) {
  for (const [name, value] of Object.entries(inputInteractionMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
