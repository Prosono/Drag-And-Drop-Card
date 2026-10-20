// Inspect the composed path so controls nested inside HA/custom-card shadow
// roots keep their drag gestures. This is separate from keyboard/typing checks.
const DRAG_CONTROLS = 'ha-control-slider, ha-control-circular-slider, ha-slider, input[type="range"], [role="slider"]';
export function isTouchDragControl(event) {
  return (event.composedPath?.() || []).some(node => node?.matches?.(DRAG_CONTROLS));
}

// Touch has one owner: drag to pan, or hold empty edit canvas before drawing.
export function installTouchPan(host) {
  const container = host.cardContainer;
  const pointers = new Map();
  const delegatedPointers = new Set();
  const onEditCard = event => host.editMode && host._canEditDashboard_?.() !== false
    && (event.composedPath?.() || []).some(node =>
      node?.matches?.('.card-wrapper:not(.ddc-placeholder)'));
  let gesture = null;
  let timer = null;
  let ring = null;
  let suppressUntil = 0;
  const inside = event => {
    const path = event.composedPath?.() || [];
    return path.includes(container) || (!!host.__scaleOuter && path.includes(host.__scaleOuter));
  };
  let scrollStyles = [];
  const restoreScrollStyles = () => {
    for (const [el, behavior] of scrollStyles) {
      el.style.scrollBehavior = behavior;
    }
    scrollStyles = [];
  };
  const prepareScrolling = () => {
    if (scrollStyles.length) return;
    for (const el of new Set([gesture.xTarget, gesture.yTarget])) {
      if (!el?.style) continue;
      scrollStyles.push([el, el.style.scrollBehavior]);
      el.style.scrollBehavior = 'auto';
    }
  };
  let panFrame = null;
  let pendingX = 0, pendingY = 0;
  const cancelPan = () => {
    if (panFrame !== null) cancelAnimationFrame(panFrame);
    panFrame = null;
    pendingX = pendingY = 0;
  };
  const flushPan = () => {
    if (panFrame !== null) cancelAnimationFrame(panFrame);
    panFrame = null;
    const dx = pendingX, dy = pendingY;
    pendingX = pendingY = 0;
    if (!gesture || gesture.mode !== 'pan' || (dx === 0 && dy === 0)) return;
    prepareScrolling();
    const x = gesture.xTarget, y = gesture.yTarget;
    // Read all current offsets before writing either scroller. This avoids a
    // layout read between horizontal and vertical writes on separate HA nodes.
    const currentLeft = x?.scrollLeft || 0, currentTop = y?.scrollTop || 0;
    const xTop = x?.scrollTop || 0, yLeft = y?.scrollLeft || 0;
    const left = Math.max(0, currentLeft - dx), top = Math.max(0, currentTop - dy);
    if (x === y && x?.scrollTo) {
      x.scrollTo({ left, top, behavior: 'instant' });
    } else {
      if (dx !== 0 && x) {
        if (x.scrollTo) x.scrollTo({ left, top: xTop, behavior: 'instant' });
        else x.scrollLeft = left;
      }
      if (dy !== 0 && y) {
        if (y.scrollTo) y.scrollTo({ left: yLeft, top, behavior: 'instant' });
        else y.scrollTop = top;
      }
    }
  };
  const stop = event => { if (event.cancelable) event.preventDefault(); event.stopImmediatePropagation(); };
  const clearHold = () => {
    if (timer !== null) clearTimeout(timer);
    timer = null;
    ring?.remove();
    ring = null;
  };
  const cancelArea = () => {
    host.__touchAreaSelecting = false;
    host.__touchAreaPointerId = null;
    host._clearGridInteractionVisualState_?.();
    host._markGridDirty?.();
  };
  const reset = () => {
    if (gesture) suppressUntil = Date.now() + 700;
    clearHold();
    cancelPan();
    restoreScrollStyles();
    cancelArea();
    pointers.clear();
    delegatedPointers.clear();
    gesture = null;
    host.__touchPanActive = false;
  };
  const gridEvent = event => ({ pointerId: event.pointerId, pointerType: 'touch',
    clientX: event.clientX, clientY: event.clientY, currentTarget: host._gridCanvas });
  const point = () => {
    const values = [...pointers.values()];
    return { x: values.reduce((sum, p) => sum + p.x, 0) / values.length,
      y: values.reduce((sum, p) => sum + p.y, 0) / values.length };
  };
  const panOrigin = () => {
    const primary = host._getMiddleMousePanPrimaryTarget_();
    const xTarget = host._getMiddleMousePanAxisTarget_(primary, 'x');
    const yTarget = host._getMiddleMousePanAxisTarget_(primary, 'y');
    const origin = point();
    Object.assign(gesture, origin, { lastX: origin.x, lastY: origin.y, xTarget, yTarget,
      left: xTarget?.scrollLeft || 0, top: yTarget?.scrollTop || 0 });
  };
  const down = event => {
    if (event.pointerType !== 'touch' || (!inside(event) && !gesture)) return;
    if (host._isInHaEditorPreview?.()) return;
    // Decide ownership at pointerdown and keep it until release, even if the
    // finger leaves the control or another finger lands on blank canvas.
    if (!gesture && (delegatedPointers.size || onEditCard(event)
      || isTouchDragControl(event) || host._isTypingTarget_?.(event))) {
      delegatedPointers.add(event.pointerId);
      suppressUntil = 0;
      host.__clearPressTimer?.();
      return;
    }
    event.stopImmediatePropagation();
    host.__lastCanvasTouch = Date.now();
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    host.__clearPressTimer?.();
    if (gesture) {
      flushPan();
      clearHold();
      cancelArea();
      gesture.mode = 'pan';
      host.__touchPanActive = true;
      panOrigin();
      stop(event);
      return;
    }
    cancelArea();
    gesture = { mode: 'pending', pointerId: event.pointerId };
    const holdGesture = gesture;
    panOrigin();
    const path = event.composedPath?.() || [];
    const overCard = path.some(node => node?.matches?.('.card-wrapper, .resize-handle, .ddc-chip, .shield'));
    const empty = !overCard && host._emptySpaceAt_?.(event.clientX, event.clientY) === true;
    if (!empty || host._canEditDashboard_?.() === false) return;
    ring = host.__makePressRing?.(event.clientX, event.clientY);
    timer = setTimeout(() => {
      clearHold();
      if (gesture !== holdGesture || gesture.mode !== 'pending' || pointers.size !== 1
        || !host.isConnected || host._canEditDashboard_?.() === false) return;
      if (!host.editMode) {
        gesture.mode = 'blocked';
        host._toggleEditMode(true);
        return;
      }
      if (!host._gridCanvas) { gesture.mode = 'blocked'; return; }
      gesture.mode = 'area';
      host.__touchAreaSelecting = true;
      host.__touchAreaPointerId = event.pointerId;
      host._onGridPointerDown(gridEvent(event));
    }, 800);
  };
  const move = event => {
    if (event.pointerType !== 'touch' || !pointers.has(event.pointerId) || !gesture) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    stop(event);
    if (gesture.mode === 'area') {
      host._onGridPointerMove(gridEvent(event));
      return;
    }
    if (gesture.mode === 'blocked') return;
    const current = point();
    if (gesture.mode === 'pending' && Math.hypot(current.x - gesture.x, current.y - gesture.y) < 10) return;
    clearHold();
    gesture.mode = 'pan';
    host.__touchPanActive = true;
    const dx = current.x - gesture.lastX;
    const dy = current.y - gesture.lastY;
    gesture.lastX = current.x;
    gesture.lastY = current.y;
    // iOS can report the same position through both Pointer and Touch Events.
    if (dx === 0 && dy === 0) return;
    pendingX += dx;
    pendingY += dy;
    if (panFrame === null) panFrame = requestAnimationFrame(flushPan);

  };
  const end = event => {
    delegatedPointers.delete(event.pointerId);
    if (event.pointerType !== 'touch' || !pointers.has(event.pointerId) || !gesture) return;
    host.__lastCanvasTouch = Date.now();
    const mode = gesture.mode;
    if (event.type === 'pointercancel') cancelPan();
    else flushPan();
    clearHold();
    event.stopImmediatePropagation();
    if (mode !== 'pending' || event.type === 'pointercancel') {
      stop(event);
      suppressUntil = Date.now() + 700;
    }
    if (mode === 'area' && event.type === 'pointerup' && host.editMode && host._canEditDashboard_?.() !== false) {
      host._onGridPointerUp(gridEvent(event));
    }
    cancelArea();
    pointers.delete(event.pointerId);
    if (!pointers.size) {
      restoreScrollStyles();
      gesture = null;
      host.__touchPanActive = false;
    } else {
      gesture.mode = 'blocked';
    }
  };
  const click = event => {
    if (!inside(event)) return;
    if (event.type === 'contextmenu' && gesture) { stop(event); return; }
    if ((gesture && gesture.mode !== 'pending') || (Date.now() < suppressUntil && event.detail !== 0)) stop(event);
  };
  const touch = event => {
    if (!gesture && (event.type === 'touchcancel' ||
      (event.type === 'touchend' && event.touches?.length === 0))) delegatedPointers.clear();
    // WebKit may finish the native touch stream without a corresponding
    // pointer release reaching this owner. Never leave the hold timer armed.
    if (gesture && event.type === 'touchcancel') {
      stop(event);
      reset();
      return;
    }
    if (gesture && event.type === 'touchend' && event.touches?.length === 0) {
      const ids = [...pointers.keys()];
      for (const id of ids) {
        const position = pointers.get(id);
        end({ type: 'pointerup', pointerType: 'touch', pointerId: id,
          clientX: position.x, clientY: position.y,
          preventDefault() { event.preventDefault?.(); },
          stopImmediatePropagation() { event.stopImmediatePropagation(); } });
      }
      return;
    }
    // Some mobile browsers deliver Touch Events even if a Pointer Event was
    // intercepted. Feed movement through the same owner so a hold cannot fire
    // while the finger is already moving. Duplicate coordinates have zero delta.
    if (gesture && event.type === 'touchmove' && pointers.size === 1 && event.touches?.length === 1) {
      const finger = event.touches[0];
      move({ pointerType: 'touch', pointerId: gesture.pointerId,
        clientX: finger.clientX, clientY: finger.clientY,
        preventDefault() {}, stopImmediatePropagation() {} });
    }
    // Prevent compatibility Touch Events reaching interact.js while we own it.
    if (!gesture) return;
    event.stopImmediatePropagation();
    if (gesture.mode !== 'pending' && event.cancelable) event.preventDefault();
  };
  const compatibilityMouse = event => {
    if (!gesture && (delegatedPointers.size || onEditCard(event)
      || isTouchDragControl(event) || host._isTypingTarget_?.(event))) return;
    if (inside(event) && (event.sourceCapabilities?.firesTouchEvents
      || Date.now() - (host.__lastCanvasTouch || 0) < 1000)) stop(event);
  };
  const visibility = () => { if (document.hidden) reset(); };
  const bindings = [['pointerdown', down], ['pointermove', move], ['pointerup', end], ['pointercancel', end],
    ['lostpointercapture', event => { if (pointers.has(event.pointerId)) reset(); }],
    ['touchstart', touch], ['touchmove', touch], ['touchend', touch], ['touchcancel', touch],
    ['mousedown', compatibilityMouse], ['mousemove', compatibilityMouse], ['mouseup', compatibilityMouse],
    ['click', click], ['dblclick', click], ['contextmenu', click], ['blur', reset],
    ['pagehide', reset], ['location-changed', reset], ['popstate', reset]];
  for (const [type, fn] of bindings) window.addEventListener(type, fn, { capture: true, passive: false });
  document.addEventListener('visibilitychange', visibility);
  host.__cancelTouchGesture = reset;
  return () => {
    reset();
    host.__cancelTouchGesture = null;
    for (const [type, fn] of bindings) window.removeEventListener(type, fn, true);
    document.removeEventListener('visibilitychange', visibility);
  };
}
