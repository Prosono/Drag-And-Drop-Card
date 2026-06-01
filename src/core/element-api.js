/*
 * Small API and utility methods mixed into the main DragAndDropCard element.
 *
 * These methods are shared across feature modules for card-mod detection, editor synchronization,
 * deep Home Assistant DOM queries, and the local dashboard API accessors.
 */

const coreMethods = {
  _hasCardModDeep(cfg) {
    try {
      if (!cfg || typeof cfg !== 'object') return false;
      if (cfg.card_mod || cfg.type === 'custom:mod-card') return true;
      if (cfg.card) return this._hasCardModDeep(cfg.card);
      if (Array.isArray(cfg.cards)) {
        for (const c of cfg.cards) {
          if (this._hasCardModDeep(c)) return true;
        }
      }
      return false;
    } catch {
      return false;
    }
  },

  _rebuildOnce(el) {
    try {
      if (!el) return;
      if (!this.__rebuiltCards) this.__rebuiltCards = new WeakSet();
      if (this.__rebuiltCards.has(el)) return;
      this.__rebuiltCards.add(el);
      el.dispatchEvent(new Event('ll-rebuild', { bubbles: true, composed: true }));
    } catch {}
  },

  _deepQueryAll(selector, root = document) {
    const results = [];
    const visited = new WeakSet();
    const pushed = new WeakSet();
    const visit = (node) => {
      if (!node || visited.has(node)) return;
      visited.add(node);
      if (node.querySelectorAll) {
        try {
          node.querySelectorAll(selector).forEach((el) => {
            if (!el || pushed.has(el)) return;
            pushed.add(el);
            results.push(el);
          });
        } catch {}
      }
      let treeWalker = null;
      try {
        treeWalker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT, null);
      } catch {}
      let el = node;
      while (el) {
        const sr = el.shadowRoot;
        if (sr) visit(sr);
        try {
          el = treeWalker?.nextNode?.() || null;
        } catch {
          break;
        }
      }
    };
    visit(root);
    return results;
  },

  _syncEditorsStorageKey() {
    try {
      const val = this.storageKey || '';
      const nodes = this._deepQueryAll('#storage_key');
      nodes.forEach((inp) => {
        try {
          if (inp && inp.tagName === 'INPUT' && inp.value !== val) {
            inp.value = val;
            inp.dispatchEvent(new Event('input', { bubbles: true }));
            inp.dispatchEvent(new Event('change', { bubbles: true }));
          }
        } catch {}
      });
    } catch {}
  },

  get ddc() {
    return this._getDashboardLocalApi_?.();
  },

  get dashboardApi() {
    return this._getDashboardLocalApi_?.();
  },

  getCardSize() {
    return 3;
  },
};

export function installCoreMethods(proto) {
  Object.entries(Object.getOwnPropertyDescriptors(coreMethods)).forEach(([key, descriptor]) => {
    if (key === '__proto__' || Object.prototype.hasOwnProperty.call(proto, key)) return;
    const nextDescriptor = {
      ...descriptor,
      configurable: true,
      enumerable: false,
    };
    if ('value' in nextDescriptor) nextDescriptor.writable = true;
    Object.defineProperty(proto, key, nextDescriptor);
  });
}
