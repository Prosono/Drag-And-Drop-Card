/*
 * Multi-selection and selected-card state management.
 *
 * Selection is used by bulk move, copy/paste, delete, card settings, and connector workflows, so this
 * module centralizes how selected wrappers are tracked and visually updated.
 */

const finite = (value, fallback = 0) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
};

export function arrangeSelectionFrames(frames = [], action = '') {
  const items = (Array.isArray(frames) ? frames : []).map((frame, index) => ({
    ...frame,
    __index: index,
    x: finite(frame?.x),
    y: finite(frame?.y),
    width: Math.max(0, finite(frame?.width ?? frame?.w)),
    height: Math.max(0, finite(frame?.height ?? frame?.h)),
  }));
  if (items.length < 2) return items.map(({ __index, ...item }) => item);

  const left = Math.min(...items.map((item) => item.x));
  const top = Math.min(...items.map((item) => item.y));
  const right = Math.max(...items.map((item) => item.x + item.width));
  const bottom = Math.max(...items.map((item) => item.y + item.height));
  const centerX = left + ((right - left) / 2);
  const centerY = top + ((bottom - top) / 2);

  if (action === 'align-left') {
    items.forEach((item) => { item.x = left; });
  } else if (action === 'align-horizontal-center') {
    items.forEach((item) => { item.x = centerX - (item.width / 2); });
  } else if (action === 'align-right') {
    items.forEach((item) => { item.x = right - item.width; });
  } else if (action === 'align-top') {
    items.forEach((item) => { item.y = top; });
  } else if (action === 'align-vertical-center') {
    items.forEach((item) => { item.y = centerY - (item.height / 2); });
  } else if (action === 'align-bottom') {
    items.forEach((item) => { item.y = bottom - item.height; });
  } else if (action === 'distribute-horizontal' && items.length >= 3) {
    const ordered = [...items].sort((a, b) => a.x - b.x || a.__index - b.__index);
    const totalWidth = ordered.reduce((sum, item) => sum + item.width, 0);
    const gap = ((right - left) - totalWidth) / (ordered.length - 1);
    let cursor = left;
    ordered.forEach((item) => {
      item.x = cursor;
      cursor += item.width + gap;
    });
  } else if (action === 'distribute-vertical' && items.length >= 3) {
    const ordered = [...items].sort((a, b) => a.y - b.y || a.__index - b.__index);
    const totalHeight = ordered.reduce((sum, item) => sum + item.height, 0);
    const gap = ((bottom - top) - totalHeight) / (ordered.length - 1);
    let cursor = top;
    ordered.forEach((item) => {
      item.y = cursor;
      cursor += item.height + gap;
    });
  }

  return items
    .sort((a, b) => a.__index - b.__index)
    .map(({ __index, ...item }) => item);
}

/* Card selection, clipboard, and marquee selection helpers. */
const selectionMethods = {
    _toggleSelection(wrap, force=null) {
      const on = force==null ? !this._selection.has(wrap) : !!force;
      if (on) this._selection.add(wrap); else this._selection.delete(wrap);
      wrap.classList.toggle('selected', on);
      this._scheduleSelectionArrangeToolbarSync_?.();
    },

    _clearSelection() {
      for (const w of this._selection) w.classList.remove('selected');
      this._selection.clear();
      this._scheduleSelectionArrangeToolbarSync_?.();
    },

    _scheduleSelectionArrangeToolbarSync_() {
      if (this.__selectionArrangeSyncFrame) return;
      const schedule = typeof requestAnimationFrame === 'function'
        ? requestAnimationFrame
        : (callback) => setTimeout(callback, 0);
      this.__selectionArrangeSyncFrame = schedule(() => {
        this.__selectionArrangeSyncFrame = 0;
        this._syncSelectionArrangeToolbar_?.();
      });
    },

    _scheduleSelectionArrangeToolbarPosition_() {
      if (this.__selectionArrangePositionFrame) return;
      const schedule = typeof requestAnimationFrame === 'function'
        ? requestAnimationFrame
        : (callback) => setTimeout(callback, 0);
      this.__selectionArrangePositionFrame = schedule(() => {
        this.__selectionArrangePositionFrame = 0;
        this._positionSelectionArrangeToolbar_?.();
      });
    },

    _ensureSelectionArrangeToolbar_() {
      if (this.__selectionArrangeToolbar?.root?.isConnected) return this.__selectionArrangeToolbar.root;
      const root = document.createElement('aside');
      root.className = 'ddc-selection-arrange-toolbar';
      root.hidden = true;
      root.setAttribute('role', 'toolbar');
      root.setAttribute('aria-label', 'Arrange selected cards');
      root.innerHTML = `
        <div class="ddc-selection-arrange-summary" aria-live="polite">
          <strong data-selection-count>0</strong><span>cards</span>
        </div>
        <div class="ddc-selection-arrange-divider" aria-hidden="true"></div>
        <div class="ddc-selection-arrange-group" role="group" aria-label="Align cards">
          <span class="ddc-selection-arrange-label">Align</span>
          <div class="ddc-selection-arrange-buttons">
            <button type="button" data-selection-arrange="align-left" title="Align left edges" aria-label="Align left edges"><ha-icon icon="mdi:align-horizontal-left"></ha-icon></button>
            <button type="button" data-selection-arrange="align-horizontal-center" title="Align horizontal centers" aria-label="Align horizontal centers"><ha-icon icon="mdi:align-horizontal-center"></ha-icon></button>
            <button type="button" data-selection-arrange="align-right" title="Align right edges" aria-label="Align right edges"><ha-icon icon="mdi:align-horizontal-right"></ha-icon></button>
            <button type="button" data-selection-arrange="align-top" title="Align top edges" aria-label="Align top edges"><ha-icon icon="mdi:align-vertical-top"></ha-icon></button>
            <button type="button" data-selection-arrange="align-vertical-center" title="Align vertical centers" aria-label="Align vertical centers"><ha-icon icon="mdi:align-vertical-center"></ha-icon></button>
            <button type="button" data-selection-arrange="align-bottom" title="Align bottom edges" aria-label="Align bottom edges"><ha-icon icon="mdi:align-vertical-bottom"></ha-icon></button>
          </div>
        </div>
        <div class="ddc-selection-arrange-divider" aria-hidden="true"></div>
        <div class="ddc-selection-arrange-group" role="group" aria-label="Distribute cards evenly">
          <span class="ddc-selection-arrange-label">Space</span>
          <div class="ddc-selection-arrange-buttons">
            <button type="button" data-selection-arrange="distribute-horizontal" title="Equal horizontal gaps" aria-label="Distribute with equal horizontal gaps"><ha-icon icon="mdi:distribute-horizontal-center"></ha-icon></button>
            <button type="button" data-selection-arrange="distribute-vertical" title="Equal vertical gaps" aria-label="Distribute with equal vertical gaps"><ha-icon icon="mdi:distribute-vertical-center"></ha-icon></button>
          </div>
        </div>
        <button type="button" class="ddc-selection-arrange-clear" title="Clear selection" aria-label="Clear card selection"><ha-icon icon="mdi:close"></ha-icon></button>`;

      const stop = (event) => event.stopPropagation();
      root.addEventListener('pointerdown', stop, true);
      root.addEventListener('mousedown', stop, true);
      root.addEventListener('touchstart', stop, true);
      root.querySelectorAll('[data-selection-arrange]').forEach((button) => {
        button.addEventListener('click', (event) => {
          event.stopPropagation();
          if (!button.disabled) this._arrangeSelectedCards_?.(button.dataset.selectionArrange);
        });
      });
      root.querySelector('.ddc-selection-arrange-clear')?.addEventListener('click', (event) => {
        event.stopPropagation();
        this._clearSelection?.();
      });

      const reposition = () => this._scheduleSelectionArrangeToolbarPosition_?.();
      window.addEventListener('resize', reposition);
      window.addEventListener('scroll', reposition, true);
      (this.shadowRoot || this).appendChild(root);
      const sizeObserver = typeof ResizeObserver === 'function'
        ? new ResizeObserver(reposition)
        : null;
      sizeObserver?.observe(root);
      const editorToolbar = (this.shadowRoot || this).querySelector?.('.ddc-toolbar');
      if (editorToolbar) sizeObserver?.observe(editorToolbar);
      this.__selectionArrangeToolbar = {
        root,
        reposition,
        cleanup: () => {
          window.removeEventListener('resize', reposition);
          window.removeEventListener('scroll', reposition, true);
          sizeObserver?.disconnect();
        },
      };
      return root;
    },

    _syncSelectionArrangeToolbar_() {
      const selected = Array.from(this._selection || [])
        .filter((wrap) => wrap?.isConnected && !wrap?.dataset?.placeholder);
      const shouldShow = !!this.editMode && selected.length >= 2;
      const root = shouldShow
        ? this._ensureSelectionArrangeToolbar_?.()
        : this.__selectionArrangeToolbar?.root;
      if (!root) return;
      root.hidden = !shouldShow;
      if (!shouldShow) return;
      const count = root.querySelector('[data-selection-count]');
      if (count) count.textContent = String(selected.length);
      root.querySelectorAll('[data-selection-arrange^="distribute-"]').forEach((button) => {
        button.disabled = selected.length < 3;
        button.setAttribute('aria-disabled', selected.length < 3 ? 'true' : 'false');
      });
      this._scheduleSelectionArrangeToolbarPosition_?.();
    },

    _positionSelectionArrangeToolbar_() {
      const state = this.__selectionArrangeToolbar;
      const root = state?.root;
      if (!root || root.hidden || !root.isConnected) return;
      const rects = Array.from(this._selection || [])
        .filter((wrap) => wrap?.isConnected && !wrap?.dataset?.placeholder)
        .map((wrap) => wrap.getBoundingClientRect?.())
        .filter((rect) => rect && Number.isFinite(rect.left) && rect.width >= 0 && rect.height >= 0);
      if (rects.length < 2) return;

      const bounds = {
        left: Math.min(...rects.map((rect) => rect.left)),
        right: Math.max(...rects.map((rect) => rect.right)),
        top: Math.min(...rects.map((rect) => rect.top)),
        bottom: Math.max(...rects.map((rect) => rect.bottom)),
      };
      const margin = 12;
      const gap = 12;
      const viewportWidth = Math.max(1, window.innerWidth || document.documentElement?.clientWidth || 1);
      const viewportHeight = Math.max(1, window.innerHeight || document.documentElement?.clientHeight || 1);
      const editorToolbarRect = (this.shadowRoot || this).querySelector?.('.ddc-toolbar')?.getBoundingClientRect?.();
      const safeTop = Math.max(
        margin,
        editorToolbarRect?.bottom > 0 ? editorToolbarRect.bottom + 10 : margin,
      );
      const toolbarWidth = Math.max(1, root.offsetWidth || 520);
      const toolbarHeight = Math.max(1, root.offsetHeight || 64);
      let left = bounds.left + ((bounds.right - bounds.left - toolbarWidth) / 2);
      let top = bounds.top - toolbarHeight - gap;
      let placement = 'above';
      if (top < safeTop) {
        top = bounds.bottom + gap;
        placement = 'below';
      }
      left = Math.min(Math.max(margin, left), Math.max(margin, viewportWidth - toolbarWidth - margin));
      top = Math.min(Math.max(safeTop, top), Math.max(safeTop, viewportHeight - toolbarHeight - margin));
      root.style.left = `${Math.round(left)}px`;
      root.style.top = `${Math.round(top)}px`;
      root.dataset.placement = placement;
    },

    _destroySelectionArrangeToolbar_() {
      const state = this.__selectionArrangeToolbar;
      if (!state) return;
      try { state.cleanup?.(); } catch {}
      try { state.root?.remove?.(); } catch {}
      this.__selectionArrangeToolbar = null;
    },

    _arrangeSelectedCards_(action = '') {
      const wraps = Array.from(this._selection || [])
        .filter((wrap) => wrap?.isConnected && !wrap?.dataset?.placeholder);
      if (wraps.length < 2) return false;
      if (String(action).startsWith('distribute-') && wraps.length < 3) {
        this._toast?.('Select at least 3 cards to distribute them evenly.');
        return false;
      }

      const sx = Math.max(0.0001, Number(this.__pointerScaleX) || 1);
      const sy = Math.max(0.0001, Number(this.__pointerScaleY) || 1);
      const frames = wraps.map((wrap) => {
        const rect = wrap.getBoundingClientRect?.() || {};
        return {
          wrap,
          x: finite(wrap.getAttribute?.('data-x'), finite(wrap.getAttribute?.('data-x-raw'))),
          y: finite(wrap.getAttribute?.('data-y'), finite(wrap.getAttribute?.('data-y-raw'))),
          width: parseFloat(wrap.style?.width) || finite(wrap.offsetWidth, finite(rect.width) / sx),
          height: parseFloat(wrap.style?.height) || finite(wrap.offsetHeight, finite(rect.height) / sy),
        };
      });
      const arranged = arrangeSelectionFrames(frames, action);
      const proposed = arranged.map((frame) => ({
        el: frame.wrap,
        rawX: frame.x,
        rawY: frame.y,
        snapX: frame.x,
        snapY: frame.y,
        w: frame.width,
        h: frame.height,
      }));
      this._constrainProposedCardsToCanvas_?.(proposed, false, this.gridSize);
      proposed.forEach((item) => {
        const x = Math.round(finite(item.snapX, item.rawX));
        const y = Math.round(finite(item.snapY, item.rawY));
        item.el.setAttribute('data-x-raw', String(x));
        item.el.setAttribute('data-y-raw', String(y));
        this._setCardPosition?.(item.el, x, y);
      });

      this._resizeContainer?.();
      this._syncAnchoredConnectorPointsForCurrentLayout_?.({ reason: null, render: false });
      this._scheduleConnectorsRender_?.({ syncAnchors: true });
      this._queueSave?.(`selection-${action}`);
      this._scheduleSelectionArrangeToolbarPosition_?.();
      const messages = {
        'align-left': 'Left edges aligned.',
        'align-horizontal-center': 'Horizontal centers aligned.',
        'align-right': 'Right edges aligned.',
        'align-top': 'Top edges aligned.',
        'align-vertical-center': 'Vertical centers aligned.',
        'align-bottom': 'Bottom edges aligned.',
        'distribute-horizontal': 'Horizontal gaps made equal.',
        'distribute-vertical': 'Vertical gaps made equal.',
      };
      this._toast?.(messages[action] || 'Selected cards arranged.');
      return true;
    },

    _copySelection() {
      try {
        // Determine selected wrappers. If nothing is selected, bail early.
        const wrappers = this._selection ? Array.from(this._selection) : [];
        if (!wrappers.length) {
          this._toast?.('Nothing selected to copy.');
          return;
        }
        // Compute the minimum x/y across the selection to preserve relative offsets
        let minX = Infinity, minY = Infinity;
        const items = [];
        for (const w of wrappers) {
          // skip placeholders
          if (w.dataset.placeholder) continue;
          const x = parseFloat(w.getAttribute('data-x')) || 0;
          const y = parseFloat(w.getAttribute('data-y')) || 0;
          if (x < minX) minX = x;
          if (y < minY) minY = y;
        }
        for (const w of wrappers) {
          if (w.dataset.placeholder) continue;
          const cfg = this._extractCardConfig(w.firstElementChild) || {};
          const x = parseFloat(w.getAttribute('data-x')) || 0;
          const y = parseFloat(w.getAttribute('data-y')) || 0;
          const width  = w.style.width  || `${w.getBoundingClientRect().width}px`;
          const height = w.style.height || `${w.getBoundingClientRect().height}px`;
          items.push({ cfg, dx: x - minX, dy: y - minY, width, height });
        }
        // Save to global clipboard. Use a namespaced key to avoid collisions.
        window.__DDC_CLIPBOARD__ = { items };
        this._toast?.(`Copied ${items.length} card${items.length === 1 ? '' : 's'}.`);
      } catch (err) {
        console.warn('[drag-and-drop-card] Copy failed', err);
        this._toast?.('Copy failed.');
      }
    },

    async _pasteClipboard() {
      try {
        const clip = window.__DDC_CLIPBOARD__;
        if (!clip || !Array.isArray(clip.items) || !clip.items.length) {
          this._toast?.('Clipboard is empty.');
          return;
        }
        const items = clip.items;
        // Determine a collision-free base position. Start at the configured
        // edge buffer, then slide down/right until no overlap occurs.
        let shift = 1;
        const baseOffset = this._getCanvasEdgeBufferPx_?.() || 0;
        let proposedRects;
        do {
          const baseX = baseOffset + (this.gridSize * (shift - 1));
          const baseY = baseOffset + (this.gridSize * (shift - 1));
          proposedRects = items.map((it) => {
            const w = parseFloat(it.width) || 0;
            const h = parseFloat(it.height) || 0;
            return { x: baseX + (it.dx || 0), y: baseY + (it.dy || 0), w, h };
          });
          shift += 1;
          // Break if no collision; ignore nothing (empty set) so all existing cards count
        } while (this._anyCollisionFor(proposedRects, new Set()));
        // Use the final baseX/baseY from the previous iteration
        const baseX = baseOffset + (this.gridSize * (shift - 2));
        const baseY = baseOffset + (this.gridSize * (shift - 2));
        // Create each card, apply sizing and position, and attach to the DOM
        for (const it of items) {
          const cfg = it.cfg || {};
          const cardEl = await this._createCard(cfg);
          const wrap = this._makeWrapper(cardEl);
          // Sizing
          wrap.style.width  = it.width;
          wrap.style.height = it.height;
          // Positioning: maintain relative dx/dy within group
          const x = baseX + (it.dx || 0);
          const y = baseY + (it.dy || 0);
          this._setCardPosition(wrap, x, y);
          // Bring to front.  Ensure the new card's z-index is at least 6 so
          // pasted cards never end up behind the grid overlay.  Compute
          // highest z-index among existing cards and clamp to our baseline.
          {
            const nextVal = this._highestZ() + 1;
            wrap.style.zIndex = String(Math.max(nextVal, 6));
          }
          // Assign to current tab
          try {
            const tid = this._normalizeTabId(this.activeTab || this.defaultTab);
            if (tid) wrap.dataset.tabId = tid;
          } catch {}
          // Append and initialize
          this.cardContainer.appendChild(wrap);
          // Do not attach a tab selector when pasting. Pasted cards are assigned
          // to the current tab automatically and the user does not need to
          // reassign them immediately.
          try { this._rebuildOnce(wrap.firstElementChild); } catch {}
          this._initCardInteract(wrap);
        }
        // Ensure the container grows and the active tab filter is applied
        this._resizeContainer();
        this._applyActiveTab();
        // Persist the change
        this._queueSave?.('paste');
        this._toast?.(`Pasted ${items.length} card${items.length === 1 ? '' : 's'}.`);
      } catch (err) {
        console.warn('[drag-and-drop-card] Paste failed', err);
        this._toast?.('Paste failed.');
      }
    },

    _installSelectionMarquee() {
      const cont = this.cardContainer;
      let startX=0, startY=0, marquee=null, active=false;
  
      const toLocal = (ev) => {
        const r = cont.getBoundingClientRect();
        const x = ('touches' in ev && ev.touches[0]) ? ev.touches[0].clientX : ev.clientX;
        const y = ('touches' in ev && ev.touches[0]) ? ev.touches[0].clientY : ev.clientY;
        const sx = this.__pointerScaleX || 1;
        const sy = this.__pointerScaleY || 1;
        return { x: (x - r.left) / sx, y: (y - r.top) / sy };
      };
  
      const updateSel = (x,y) => {
        const minX = Math.min(x, startX), maxX = Math.max(x, startX);
        const minY = Math.min(y, startY), maxY = Math.max(y, startY);
        marquee.style.left = `${minX}px`;
        marquee.style.top = `${minY}px`;
        marquee.style.width = `${maxX-minX}px`;
        marquee.style.height= `${maxY-minY}px`;
  
        const rRect = marquee.getBoundingClientRect();
        const wraps = cont.querySelectorAll('.card-wrapper:not(.ddc-placeholder)');
        this._clearSelection();
        wraps.forEach(w => {
          const wr = w.getBoundingClientRect();
          const overlap = !(wr.right < rRect.left || wr.left > rRect.right || wr.bottom < rRect.top || wr.top > rRect.bottom);
          if (overlap) this._toggleSelection(w, true);
        });
      };
  
      const down = (e) => {
        if (!this.editMode) return;
        if (typeof e.button === 'number' && e.button !== 0) return;
        if (e.target.closest('.card-wrapper')) return;
        active = true;
        const p = toLocal(e);
        startX = p.x; startY = p.y;
        marquee = document.createElement('div');
        marquee.className = 'marquee';
        marquee.style.left = `${startX}px`;
        marquee.style.top  = `${startY}px`;
        cont.appendChild(marquee);
        e.preventDefault();
      };
      const move = (e) => { if (!active || !marquee) return; updateSel(toLocal(e).x, toLocal(e).y); };
      const up = () => { if (!active) return; active = false; if (marquee) marquee.remove(); marquee = null; };
  
      cont.addEventListener('mousedown', down);
      window.addEventListener('mousemove', move);
      window.addEventListener('mouseup', up);
      cont.addEventListener('touchstart', (e)=>{ if (!this.editMode) return; if (e.target.closest('.card-wrapper')) return; down(e); }, {passive:false});
      window.addEventListener('touchmove', (e)=>{ move(e); }, {passive:true});
      window.addEventListener('touchend', up);
      window.addEventListener('touchcancel', up);
    },
};

export function installSelectionMethods(proto) {
  for (const [name, value] of Object.entries(selectionMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
