const textResizeLockMethods = {





































_scheduleTextResizeLockRefresh_(force = false) {
  if (force) this.__ddcTextLockDirty = true;
  if (this.__ddcTextLockRAF) return;
  this.__ddcTextLockRAF = requestAnimationFrame(() => {
    this.__ddcTextLockRAF = null;
    this._applyTextResizeLock_(force);
  });
},


_clearTextResizeLock_() {
  if (this.__ddcTextLockObserver) {
    try { this.__ddcTextLockObserver.disconnect(); } catch {}
    this.__ddcTextLockObserver = null;
  }
  const touched = this.__ddcTextLockTouched;
  if (touched) {
    for (const el of Array.from(touched)) {
      try { el?.style?.removeProperty?.('font-size'); } catch {}
    }
    touched.clear();
  }
  this.__ddcTextLockActive = false;
  this.__ddcTextLockScale = 1;
  this.__ddcTextLockDirty = false;
},


_ensureTextResizeObserver_() {
  const container = this.cardContainer;
  const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
  const active = !!this.doNotResizeText || (mode === 'auto' && this._isMobileOptimizeActive_?.());
  if (!container || !active) {
    if (this.__ddcTextLockObserver) {
      try { this.__ddcTextLockObserver.disconnect(); } catch {}
      this.__ddcTextLockObserver = null;
    }
    return;
  }

  if (this.__ddcTextLockObserver) {
    try { this.__ddcTextLockObserver.disconnect(); } catch {}
  }

  const observer = new MutationObserver(() => {
    this.__ddcTextLockDirty = true;
    this._scheduleTextResizeLockRefresh_?.();
  });

  const seen = new Set();
  const observeRoot = (root) => {
    if (!root || seen.has(root)) return;
    seen.add(root);
    try {
      observer.observe(root, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    } catch {}

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
    let node = root.nodeType === Node.ELEMENT_NODE ? root : walker.nextNode();
    while (node) {
      if (node.shadowRoot) observeRoot(node.shadowRoot);
      node = walker.nextNode();
    }
  };

  observeRoot(container);
  Array.from(container.querySelectorAll('.card-wrapper > :first-child')).forEach((root) => observeRoot(root));
  this.__ddcTextLockObserver = observer;
},


_isTextResizeTarget_(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;
  const tag = (el.tagName || '').toLowerCase();
  if (!tag) return false;

  const skip = new Set(['style', 'script', 'ha-icon', 'iron-icon', 'svg', 'path', 'img', 'picture', 'video', 'canvas', 'slot']);
  if (skip.has(tag)) return false;

  if ([
    'button', 'input', 'textarea', 'select', 'option', 'label', 'legend',
    'summary', 'a', 'small', 'strong', 'em', 'b', 'i'
  ].includes(tag)) {
    return true;
  }

  if (el.shadowRoot || tag.includes('-')) return true;

  return Array.from(el.childNodes || []).some(
    (node) => node.nodeType === Node.TEXT_NODE && String(node.textContent || '').trim()
  );
},


_collectTextResizeTargets_(root, out = []) {
  if (!root) return out;

  const addIfTarget = (el) => {
    if (!this._isTextResizeTarget_(el)) return;
    if (!out.includes(el)) out.push(el);
  };

  if (root.nodeType === Node.ELEMENT_NODE) addIfTarget(root);

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
  let node = walker.nextNode();
  while (node) {
    addIfTarget(node);
    if (node.shadowRoot) this._collectTextResizeTargets_(node.shadowRoot, out);
    node = walker.nextNode();
  }

  return out;
},


_applyTextResizeLock_(force = false) {
  const container = this.cardContainer;
  const mode = this._normalizeContainerSizeMode_(this.containerSizeMode || this.container_size_mode);
  const supportedMode = mode === 'auto';
  const mobileAssist = supportedMode && this._isMobileOptimizeActive_?.();
  const enabled = supportedMode && (!!this.doNotResizeText || mobileAssist);
  const scale = Math.max(0.0001, Number(this.__pointerScaleX || this.__pointerScaleY || 1) || 1);

  if (!enabled) {
    if (this.__ddcTextLockActive || this.__ddcTextLockDirty || force) this._clearTextResizeLock_();
    return;
  }

  if (!container) return;

  if (
    !force &&
    !this.__ddcTextLockDirty &&
    this.__ddcTextLockActive &&
    Math.abs((this.__ddcTextLockScale || 1) - scale) < 1e-3
  ) {
    return;
  }

  if (!this.__ddcTextLockBase) this.__ddcTextLockBase = new WeakMap();
  if (!this.__ddcTextLockTouched) this.__ddcTextLockTouched = new Set();
  this._ensureTextResizeObserver_?.();

  const targetVisibleScale = this.doNotResizeText
    ? 1
    : Math.max(scale, Math.min(1, this._getMobileTextAssistScale_?.() || 1));
  const compensation = this.doNotResizeText
    ? (1 / scale)
    : Math.max(1, Math.min(1 / scale, targetVisibleScale / scale));
  const seen = new Set();
  const cardRoots = Array.from(container.querySelectorAll('.card-wrapper > :first-child'));

  for (const root of cardRoots) {
    const targets = this._collectTextResizeTargets_(root, []);
    for (const el of targets) {
      if (!el || seen.has(el)) continue;
      seen.add(el);

      if (!this.__ddcTextLockBase.has(el)) {
        const measured = parseFloat(getComputedStyle(el).fontSize || '0');
        if (!Number.isFinite(measured) || measured <= 0) continue;
        this.__ddcTextLockBase.set(el, measured);
      }

      const base = this.__ddcTextLockBase.get(el);
      if (!Number.isFinite(base) || base <= 0) continue;

      el.style.setProperty('font-size', `${Math.max(1, base * compensation).toFixed(3)}px`, 'important');
      this.__ddcTextLockTouched.add(el);
    }
  }

  for (const el of Array.from(this.__ddcTextLockTouched)) {
    if (!el?.isConnected || !seen.has(el)) {
      try { el?.style?.removeProperty?.('font-size'); } catch {}
      this.__ddcTextLockTouched.delete(el);
    }
  }

  this.__ddcTextLockActive = true;
  this.__ddcTextLockScale = scale;
  this.__ddcTextLockDirty = false;
},
};

export function installTextResizeLockMethods(proto) {
  for (const [name, value] of Object.entries(textResizeLockMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
