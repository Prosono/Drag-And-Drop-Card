/*
 * Multi-selection and selected-card state management.
 *
 * Selection is used by bulk move, copy/paste, delete, card settings, and connector workflows, so this
 * module centralizes how selected wrappers are tracked and visually updated.
 */

/* Card selection, clipboard, and marquee selection helpers. */
const selectionMethods = {
    _toggleSelection(wrap, force=null) {
      const on = force==null ? !this._selection.has(wrap) : !!force;
      if (on) this._selection.add(wrap); else this._selection.delete(wrap);
      wrap.classList.toggle('selected', on);
    },

    _clearSelection() {
      for (const w of this._selection) w.classList.remove('selected');
      this._selection.clear();
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
