/*
 * interact.js based drag and resize behavior for card wrappers.
 *
 * This module converts pointer movement into grid-aware layout changes and dispatches the events other
 * modules use for autosave, connectors, and responsive layout updates.
 */

/* Drag, resize, dynamic container sizing, and overlap helpers. */
const interactBehaviorMethods = {
  _initInteract() {
    const wraps = this.cardContainer.querySelectorAll('.card-wrapper');
    wraps.forEach((w) => this._initCardInteract(w));
    this.sidebarCanvas?.querySelectorAll?.('.ddc-sidebar-card-wrapper')?.forEach((w) => this._initSidebarCardInteract_(w));
  },

  _initCardInteract(wrap) {
    if (!window.interact || wrap.dataset.placeholder) return;
    const gs = this.gridSize, live = !!this.dragLiveSnap;

    // DRAG (supports multi‑select move with optional live snap)
    const mods = [];

    // Snapping is handled in our own canvas-space math below. Letting Interact
    // rewrite deltas near fixed edges can make cards drift sideways at bounds.

    window.interact(wrap).draggable({
      enabled: this.editMode,
      inertia: false,
      modifiers: mods,
      listeners: {
        start: (ev) => {
          // ensure the clicked card is in the selection
          if (!this._selection.has(wrap)) {
            if (!ev?.shiftKey && !ev?.ctrlKey && !ev?.metaKey) this._clearSelection();
            this._toggleSelection(wrap, true);
          }
          const group = Array.from(this._selection);
          this.__groupDrag = {
            leader: wrap,
            members: group,
            startRaw: new Map(group.map(w => [w, {
              x: this._numberOr_(w.getAttribute('data-x-raw'), this._numberOr_(w.getAttribute('data-x'), 0)),
              y: this._numberOr_(w.getAttribute('data-y-raw'), this._numberOr_(w.getAttribute('data-y'), 0)),
              w: parseFloat(w.style.width)  || w.getBoundingClientRect().width,
              h: parseFloat(w.style.height) || w.getBoundingClientRect().height,
            }]))
          };
          this.__ddcMovingCard = true;
          this.__ddcScaleAfterCardMove = false;
          if (this.__reflowRAF) {
            try { cancelAnimationFrame(this.__reflowRAF); } catch {}
            this.__reflowRAF = null;
	          }
	          try {
	            this.__prevMoveContainerOverflow = this.cardContainer?.style?.overflow || '';
	            this.__keepPreviewDragClipped = !!this._getViewportPreviewPreset_?.()
	              || !!this._shouldKeepCanvasOverflowClippedDuringCardDrag_?.();
	            if (this.cardContainer) {
	              this.cardContainer.style.overflow = this.__keepPreviewDragClipped ? 'hidden' : 'visible';
	            }
	          } catch {}

          // Capture original raw positions of all cards (non‑placeholders) so we can restore them
          this.__collisionOriginals = new Map();
          const selectedAtStart = new Set(group);
          const allCardsStart = Array.from(this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)'))
            .filter((c) => selectedAtStart.has(c) || this._isWrapperVisibleForOverlap_?.(c));
          allCardsStart.forEach(c => {
            const rawX = this._numberOr_(c.getAttribute('data-x-raw'), this._numberOr_(c.getAttribute('data-x'), 0));
            const rawY = this._numberOr_(c.getAttribute('data-y-raw'), this._numberOr_(c.getAttribute('data-y'), 0));
            this.__collisionOriginals.set(c, { x: rawX, y: rawY });
          });

          group.forEach(w => {
            w.classList.add('dragging');
            if (w.getAttribute('data-x-raw') === null) {
              w.setAttribute('data-x-raw', w.getAttribute('data-x') || '0');
            }
            if (w.getAttribute('data-y-raw') === null) {
              w.setAttribute('data-y-raw', w.getAttribute('data-y') || '0');
            }
          });
        },

        move: (ev) => {
          if (!this.__groupDrag) return;
          const gs   = this.gridSize;
          const live = !!this.dragLiveSnap;
          const lead = this.__groupDrag.leader;
          const srL  = this.__groupDrag.startRaw.get(lead);

          // Compute new raw leader coordinates using pointer delta
          // Convert screen-pixel deltas to design-space deltas
          // Convert screen-pixel deltas → design space using current scale
          const sx = this.__pointerScaleX || 1;
          const sy = this.__pointerScaleY || 1;

          const leadRawX = this._numberOr_(lead.getAttribute('data-x-raw'), srL.x);
          const leadRawY = this._numberOr_(lead.getAttribute('data-y-raw'), srL.y);
          const curLeadX = leadRawX + (ev.dx / sx);
          const curLeadY = leadRawY + (ev.dy / sy);
          const dxLead   = curLeadX - srL.x;
          const dyLead   = curLeadY - srL.y;

          // Build proposed positions for all selected cards
          const proposed = this.__groupDrag.members.map(m => {
            const sr = this.__groupDrag.startRaw.get(m);
            const rawX  = sr.x + dxLead;
            const rawY  = sr.y + dyLead;
            const snapX = live ? Math.round(rawX / gs) * gs : rawX;
            const snapY = live ? Math.round(rawY / gs) * gs : rawY;
            return { el: m, rawX, rawY, snapX, snapY, w: sr.w, h: sr.h };
          });
          this._constrainProposedCardsToCanvas_?.(proposed, live, gs);

          // If overlap protection is on, restore other cards and push them out of the way
          if (this.disableOverlap) {
            this._pushCardsOutOfTheWay(proposed, dxLead, dyLead, live, gs);
          }

          // Commit the move: update raw coordinates and apply snapped transform
          for (const pr of proposed) {
            pr.el.setAttribute('data-x-raw', String(pr.rawX));
            pr.el.setAttribute('data-y-raw', String(pr.rawY));
            this._setCardPosition(pr.el, pr.snapX, pr.snapY);
          }
          this._renderConnectors_?.();
        },

        end: (ev) => {
          if (!this.__groupDrag) return;
          const gs = this.gridSize;

          // Gather final positions (unsnapped and snapped) for the dragged group
          const endRects = this.__groupDrag.members.map(m => {
            const rawX = this._numberOr_(m.getAttribute('data-x-raw'), this._numberOr_(m.getAttribute('data-x'), 0));
            const rawY = this._numberOr_(m.getAttribute('data-y-raw'), this._numberOr_(m.getAttribute('data-y'), 0));
            const snapX = Math.round(rawX / gs) * gs;
            const snapY = Math.round(rawY / gs) * gs;
            const w  = parseFloat(m.style.width)  || m.getBoundingClientRect().width;
            const h  = parseFloat(m.style.height) || m.getBoundingClientRect().height;
            return { el: m, rawX, rawY, snapX, snapY, w, h };
          });
          this._constrainProposedCardsToCanvas_?.(endRects, true, gs);

          // On end, do a final restore/push to prevent leftover overlaps
          if (this.disableOverlap) {
            this._pushCardsOutOfTheWay(endRects, 0, 0, false, gs);
          }

          // Snap cards to the grid and update raw coordinates
          const connectorDeltas = [];
          for (const pr of endRects) {
            const start = this.__groupDrag.startRaw.get(pr.el) || { x: pr.snapX, y: pr.snapY };
            this._setCardPosition(pr.el, pr.snapX, pr.snapY);
            pr.el.setAttribute('data-x-raw', String(pr.snapX));
            pr.el.setAttribute('data-y-raw', String(pr.snapY));
            connectorDeltas.push({
              id: pr.el.dataset?.layoutCardId,
              dx: pr.snapX - start.x,
              dy: pr.snapY - start.y,
            });
          }
          this._moveConnectorsForCardDeltas_?.(connectorDeltas, { reason: null, render: false });
          this._syncAnchoredConnectorPointsForCurrentLayout_?.({ reason: null, render: false });

          // Cleanup
          for (const m of this.__groupDrag.members) m.classList.remove('dragging');
          this.__ddcMovingCard = false;
	          this.__ddcScaleAfterCardMove = false;
	          try {
	            if (this.cardContainer) {
	              this.cardContainer.style.overflow = this.__keepPreviewDragClipped
	                ? 'hidden'
	                : (this.__prevMoveContainerOverflow || 'hidden');
	            }
	          } catch {}
	          this.__prevMoveContainerOverflow = undefined;
	          this.__keepPreviewDragClipped = false;
          if (this._isContainerFixed()) this._clampAllCardsInside();
          this._settleLayoutAfterCardMove_?.({ syncAnchors: true });
          this._queueSave(this.__groupDrag.members.length > 1 ? 'group-drag-end' : 'drag-end');
          this.__groupDrag = null;
          this.__collisionOriginals = null;
        }
      }
    });



    // RESIZE — bottom handles (single card)
    window.interact(wrap).resizable({
      enabled: this.editMode,
      edges: { left: '.resize-handle--bl', right: '.resize-handle--br', bottom: '.resize-handle' },
      inertia:false,
      listeners:{
        start:(ev)=>{
          this.__ddcResizingCard = true;
          this.__ddcScaleAfterCardResize = false;
          this.__ddcResizeFromLeft = !!ev?.edges?.left;
          this.cardContainer?.classList?.add?.('ddc-card-resizing');
          this._clearGridInteractionVisualState_?.();
          this._markGridDirty?.();
          this._freezeCanvasBackgroundDuringResize_?.();
          try {
            if (this.__ddcFreezeContainerFillBackground && this.cardContainer) {
              this.__prevResizeContainerOverflow = this.cardContainer.style?.overflow || '';
              this.cardContainer.style.overflow = 'visible';
            }
          } catch {}
          if (this.__reflowRAF) {
            try { cancelAnimationFrame(this.__reflowRAF); } catch {}
            this.__reflowRAF = null;
          }
        },
        move:(ev)=>{
          const gs   = this.gridSize;
          const live = !!this.dragLiveSnap;
          const curW = parseFloat(wrap.style.width)  || wrap.getBoundingClientRect().width;
          const curH = parseFloat(wrap.style.height) || wrap.getBoundingClientRect().height;
          const x = parseFloat(wrap.getAttribute('data-x')) || 0;
          const y = parseFloat(wrap.getAttribute('data-y')) || 0;

          const sx = this.__pointerScaleX || 1;
          const sy = this.__pointerScaleY || 1;
          let width  = ev.rect.width  / sx;
          let height = ev.rect.height / sy;
          const wTry = live ? Math.max(gs, Math.round(width / gs) * gs)  : width;
          const hTry = live ? Math.max(gs, Math.round(height / gs) * gs) : height;
          const resizingLeft = !!ev?.edges?.left || !!this.__ddcResizeFromLeft;
          const currentRight = x + curW;

          // ⬇️ clamp size if container is fixed
          let nextW = wTry;
          let nextH = hTry;
          let nextX = x;
          if (resizingLeft) {
            nextX = currentRight - nextW;
            if (nextX < 0) {
              nextX = 0;
              nextW = Math.max(gs, currentRight);
            }
          }
          if (this._isContainerFixed()) {
            const { w: cw, h: ch } = this._getContainerSize();
            if (resizingLeft) {
              const fixedRight = Math.min(currentRight, cw);
              nextX = Math.max(0, Math.min(nextX, fixedRight - gs));
              nextW = Math.max(gs, fixedRight - nextX);
            } else {
              nextW = Math.min(wTry, Math.max(this.gridSize, cw - x));
            }
            nextH = Math.min(hTry, Math.max(this.gridSize, ch - y));
          }

          const proposed = [ this._rectFor(wrap, nextX, y, nextW, nextH) ];

          if (this.disableOverlap && this._anyCollisionFor(proposed, new Set([wrap]))) {
            return;
          }
          if (resizingLeft) {
            this._setCardPosition(wrap, nextX, y);
            wrap.setAttribute('data-x-raw', String(nextX));
          }
          wrap.style.width  = `${nextW}px`;
          wrap.style.height = `${nextH}px`;
          this._syncCompactEditUiForWrapper_?.(wrap);
          if (this.__ddcFreezeContainerFillBackground) {
            this.__ddcScaleAfterCardResize = true;
          } else {
            this._resizeContainer();
          }
          this._renderConnectors_?.();
        },
        end:()=>{
          const needsFinalScale = !!this.__ddcScaleAfterCardResize;
          const gs = this.gridSize;
          const prevW = parseFloat(wrap.style.width)  || wrap.getBoundingClientRect().width;
          const prevH = parseFloat(wrap.style.height) || wrap.getBoundingClientRect().height;

          let wSnap = Math.max(gs, Math.round(prevW/gs)*gs);
          let hSnap = Math.max(gs, Math.round(prevH/gs)*gs);

          const x = parseFloat(wrap.getAttribute('data-x')) || 0;
          const y = parseFloat(wrap.getAttribute('data-y')) || 0;
          const resizingLeft = !!this.__ddcResizeFromLeft;
          const currentRight = x + prevW;
          let nextX = x;
          if (resizingLeft) {
            nextX = Math.max(0, Math.round((currentRight - wSnap) / gs) * gs);
            if (currentRight - nextX < gs) {
              nextX = Math.max(0, currentRight - gs);
              wSnap = Math.max(gs, currentRight - nextX);
            }
          }

          // ⬇️ clamp snapped size if container is fixed
          if (this._isContainerFixed()) {
            const { w: cw, h: ch } = this._getContainerSize();
            if (resizingLeft) {
              const fixedRight = Math.min(currentRight, cw);
              nextX = Math.max(0, Math.min(nextX, fixedRight - gs));
              wSnap = Math.max(gs, fixedRight - nextX);
            } else {
              wSnap = Math.min(wSnap, Math.max(gs, cw - x));
            }
            hSnap = Math.min(hSnap, Math.max(gs, ch - y));
          }

          const proposed = [ this._rectFor(wrap, nextX, y, wSnap, hSnap) ];

          if (this.disableOverlap && this._anyCollisionFor(proposed, new Set([wrap]))) {
            // keep pre-snap size (already applied)
          } else {
            if (resizingLeft) {
              this._setCardPosition(wrap, nextX, y);
              wrap.setAttribute('data-x-raw', String(nextX));
            }
            wrap.style.width  = `${wSnap}px`;
            wrap.style.height = `${hSnap}px`;
            this._syncCompactEditUiForWrapper_?.(wrap);
          }

          this._resizeContainer();
          try {
            if (this.__prevResizeContainerOverflow !== undefined && this.cardContainer) {
              this.cardContainer.style.overflow = this.__prevResizeContainerOverflow || 'hidden';
            }
          } catch {}
          this.__prevResizeContainerOverflow = undefined;
          if (this._isContainerFixed()) this._clampAllCardsInside();   // optional safety
          this._syncAnchoredConnectorPointsForCurrentLayout_?.({ reason: null, render: false });
          this.__ddcResizingCard = false;
          this.__ddcScaleAfterCardResize = false;
          this.__ddcResizeFromLeft = false;
          this.cardContainer?.classList?.remove?.('ddc-card-resizing');
          this._clearGridInteractionVisualState_?.();
          this._markGridDirty?.();
          try {
            const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
            if (mode === 'auto' || this.autoResizeCards || needsFinalScale) this._applyAutoScale?.();
          } catch {}
          this._unfreezeCanvasBackgroundAfterResize_?.();
          this._scheduleConnectorsRender_?.({ syncAnchors: true });
          this._queueSave('resize-end');
        }
      }
    });

    // selection with clicks
    wrap.addEventListener('mousedown', (e) => {
      if (!this.editMode) return;
      if (typeof e.button === 'number' && e.button !== 0) return;
      // Ignore clicks on controls: resize handle, delete handle, or chip actions
      if (e.target.closest('.resize-handle') || e.target.closest('.delete-handle') || e.target.closest('.chip') || e.target.closest('.ddc-compact-card-actions') || e.target.closest('.ddc-card-anchors')) return;
      if (e.shiftKey || e.ctrlKey || e.metaKey) {
        e.stopPropagation();
        this._toggleSelection(wrap); // toggle in multi
      } else {
        if (!this._selection.has(wrap)) {
          this._clearSelection();
          this._toggleSelection(wrap, true);
        }
      }
    });
  },

  _resizeContainer() {
    const c = this.cardContainer; if (!c) return;

  // In fixed modes, do NOT auto-grow/shrink — the box is hard-locked.
  if (this._isContainerFixed()) return;

    // Dynamic mode: compute based on content
    const cards = Array.from(c.querySelectorAll('.card-wrapper'));
    let maxX = 0, maxY = 0;
    cards.forEach((card) => {
      const x = parseFloat(card.getAttribute('data-x-raw') || card.getAttribute('data-x') || '0') || 0;
      const y = parseFloat(card.getAttribute('data-y-raw') || card.getAttribute('data-y') || '0') || 0;
      const width  = parseFloat(card.style.width)  || card.getBoundingClientRect().width  || 0;
      const height = parseFloat(card.style.height) || card.getBoundingClientRect().height || 0;
      const right  = x + width;
      const bottom = y + height;
      maxX = Math.max(maxX, right);
      maxY = Math.max(maxY, bottom);
    });
    const gs = Math.max(1, Number(this.gridSize || 1) || 1);
    const outerBuffer = this._getOuterGridBufferPx_?.() || 0;
    let nextW = Math.max(100, Math.ceil(maxX / gs) * gs + outerBuffer);
    let nextH = Math.max(100, Math.ceil(maxY / gs) * gs + outerBuffer);
    try {
      const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
      if (mode === 'auto') {
        const minimumCanvas = this._getAutoCanvasMinimumDesignSize_?.() || { width: 1280, height: 720 };
        const minimumW = Math.max(1, Number(minimumCanvas.width ?? 1280) || 1);
        const minimumH = Math.max(1, Number(minimumCanvas.height ?? 720) || 1);
        const hostW =
          (this.__scaleOuter && this.__scaleOuter.getBoundingClientRect?.().width) ||
          (this.parentElement && this.parentElement.getBoundingClientRect?.().width) ||
          (this.offsetParent && this.offsetParent.getBoundingClientRect?.().width) ||
          (this.getBoundingClientRect && this.getBoundingClientRect().width) ||
          this.offsetWidth ||
          nextW;
        const autoViewport = this._getAvailableAutoCanvasViewport_?.(hostW, nextH);
        const { sx = 1, sy = 1 } = this._getContainerScale_?.() || {};
        const safeSx = Math.max(0.0001, Number(sx) || 1);
        const safeSy = Math.max(0.0001, Number(sy) || 1);
        const minW = Math.ceil((Math.max(minimumW, Number(autoViewport?.width || 0) || 0) / safeSx) / gs) * gs;
        const minH = Math.ceil((Math.max(minimumH, Number(autoViewport?.height || 0) || 0) / safeSy) / gs) * gs;
        nextW = Math.max(nextW, minW);
        nextH = Math.max(nextH, minH);
      }
    } catch {}
    c.style.width  = `${nextW}px`;
    c.style.height = `${nextH}px`;

    // Whenever the container size changes in dynamic mode, update the tabs bar
    // width so it remains aligned with the container. If the scale wrapper
    // recalculates later the call in _applyAutoScale will also update this.
    try { this._syncTabsWidth_?.(); } catch {}

    // When the container size changes (e.g. after adding a card or resizing),
    // the grid overlay may become stale.  Schedule an update so that the
    // selectable overlay stretches to the new dimensions.  Without this call
    // the overlay can remain clipped until the next edit toggle or page
    // refresh.
	    try { this._requestGridButtonsUpdateSoon?.(); } catch {}
	    try { this._renderConnectors_?.(); } catch {}
	    try { this._requestPreviewOutsideCardsSync_?.(); } catch {}
	  },

  _pushCardsOutOfTheWay(proposedRects, dxLead, dyLead, liveSnap, gridSize) {
    if (!this.__collisionOriginals) return;

    const selectedSet = new Set(proposedRects.map(pr => pr.el));
    const allCards = Array.from(this.cardContainer.querySelectorAll('.card-wrapper:not(.ddc-placeholder)'))
      .filter((w) => selectedSet.has(w) || this._isWrapperVisibleForOverlap_(w));

    // Determine container bounds (for fixed modes)
    const isFixed = this._isContainerFixed();
    const { w: cw, h: ch } = this._getContainerSize();

    // Restore every non-selected card to its original raw position
    for (const w of allCards) {
      if (selectedSet.has(w)) continue;
      const orig = this.__collisionOriginals.get(w);
      if (orig) {
        w.setAttribute('data-x-raw', String(orig.x));
        w.setAttribute('data-y-raw', String(orig.y));
        const snX = liveSnap ? Math.round(orig.x / gridSize) * gridSize : orig.x;
        const snY = liveSnap ? Math.round(orig.y / gridSize) * gridSize : orig.y;
        this._setCardPosition(w, snX, snY);
      }
    }

    // Prepare lists for collision checks
    const selectedRects = proposedRects.map(pr => ({
      x: pr.snapX,
      y: pr.snapY,
      w: pr.w,
      h: pr.h,
    }));

    // Map to store the final pushed positions of non-selected cards
    const finalPos = new Map();

    // Store original widths and heights
    const cardSizes = new Map();
    for (const w of allCards) {
      const width  = parseFloat(w.style.width)  || w.getBoundingClientRect().width;
      const height = parseFloat(w.style.height) || w.getBoundingClientRect().height;
      cardSizes.set(w, { w: width, h: height });
    }

    // Decide primary push direction based on leader movement
    const signX = (dxLead > 0) ? 1 : (dxLead < 0 ? -1 : 0);
    const signY = (dyLead > 0) ? 1 : (dyLead < 0 ? -1 : 0);
    const horizontal = Math.abs(dxLead) >= Math.abs(dyLead);

    // For each non-selected card, compute its new position
    for (const other of allCards) {
      if (selectedSet.has(other)) continue;
      const orig = this.__collisionOriginals.get(other);
      if (!orig) continue;

      let { x: candidateX, y: candidateY } = orig;
      const { w: ow, h: oh } = cardSizes.get(other);

      // Determine if it overlaps with any selected rectangle
      let overlaps = false;
      for (const sr of selectedRects) {
        if (this._rectsOverlap({ x: sr.x, y: sr.y, w: sr.w, h: sr.h },
                              { x: candidateX, y: candidateY, w: ow, h: oh })) {
          overlaps = true;
          // Choose initial push direction
          if (horizontal && signX !== 0) {
            candidateX = signX > 0 ? sr.x + sr.w : sr.x - ow;
          } else if (!horizontal && signY !== 0) {
            candidateY = signY > 0 ? sr.y + sr.h : sr.y - oh;
          } else {
            // default horizontal push when no obvious direction
            candidateX = sr.x + sr.w;
          }
          break;
        }
      }

      // If overlapping, keep shifting until no collision
      if (overlaps) {
        let guard = 0;
        const dx = horizontal ? (signX !== 0 ? signX * gridSize : gridSize) : 0;
        const dy = !horizontal ? (signY !== 0 ? signY * gridSize : gridSize) : 0;
        while (guard < 100) {
          const candidateRect = { x: candidateX, y: candidateY, w: ow, h: oh };
          let collision = false;

          // Check against selected
          for (const sr of selectedRects) {
            if (this._rectsOverlap(candidateRect, sr)) {
              collision = true;
              break;
            }
          }
          // Check against cards already assigned new positions
          if (!collision) {
            for (const [, fp] of finalPos) {
              if (this._rectsOverlap(candidateRect, fp)) {
                collision = true;
                break;
              }
            }
          }
          // Check against container bounds (for fixed container)
          if (!collision && isFixed) {
            if (candidateX < 0 || candidateY < 0 ||
                candidateX + ow > cw || candidateY + oh > ch) {
              collision = true;
            }
          }

          if (!collision) break;
          // Move further along the chosen axis
          candidateX += dx;
          candidateY += dy;
          guard++;
        }

        // Finally, clamp to container boundaries for fixed containers
        if (isFixed) {
          candidateX = Math.max(0, Math.min(candidateX, Math.max(0, cw - ow)));
          candidateY = Math.max(0, Math.min(candidateY, Math.max(0, ch - oh)));
        } else {
          candidateY = this._clampYToCanvasTop_(candidateY);
        }
      }

      finalPos.set(other, { x: candidateX, y: candidateY, w: ow, h: oh });
      selectedRects.push({ x: candidateX, y: candidateY, w: ow, h: oh });
    }

    // Apply final positions to non-selected cards
    for (const [card, pos] of finalPos) {
      pos.y = this._clampYToCanvasTop_(pos.y);
      card.setAttribute('data-x-raw', String(pos.x));
      card.setAttribute('data-y-raw', String(pos.y));
      const snX = liveSnap ? Math.round(pos.x / gridSize) * gridSize : pos.x;
      const snY = liveSnap ? Math.round(pos.y / gridSize) * gridSize : pos.y;
      this._setCardPosition(card, snX, snY);
    }
  },

  _rectFor(el, x = null, y = null, wpx = null, hpx = null) {
    const x0 = x ?? (parseFloat(el.getAttribute('data-x')) || 0);
    const y0 = y ?? (parseFloat(el.getAttribute('data-y')) || 0);
    const w  = wpx ?? (parseFloat(el.style.width)  || el.getBoundingClientRect().width  || 0);
    const h  = hpx ?? (parseFloat(el.style.height) || el.getBoundingClientRect().height || 0);
    return { x: x0, y: y0, w, h, el };
  },

  _rectsOverlap(a, b, eps = 0.5) {
    return !(a.x + a.w <= b.x + eps || b.x + b.w <= a.x + eps ||
             a.y + a.h <= b.y + eps || b.y + b.h <= a.y + eps);
  },

  _anyCollisionFor(proposedRects, ignoreSet) {
    const others = this._getOverlapCandidateWrappers_(ignoreSet);
    if (!others.length) return false;
    const otherRects = others.map(w => this._rectFor(w));
    for (const pr of proposedRects) for (const or of otherRects) {
      if (this._rectsOverlap(pr, or)) return true;
    }
    return false;
  }
};

export function installInteractBehaviorMethods(proto) {
  for (const [name, value] of Object.entries(interactBehaviorMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
