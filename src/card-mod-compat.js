/* ==========================================================================
   Integrated card-mod compatibility enhancements
   - Ensures card-mod styles apply to nested cards inside drag-and-drop-card
   - No extra resource needed; executed as part of this script
   - Uses a guarded (WeakSet) ll-rebuild dispatch on newly added card elements
   ========================================================================== */
export function installCardModCompatibility() {
  const SEEN = new WeakSet();

  const isLikelyCard = (el) => {
    try {
      if (!(el instanceof Element)) return false;
      const n = el.localName || "";
      if (!n) return false;
      if (n === "ha-card") return true;
      if (n.endsWith("-card")) return true; // hui-*, custom:*, mushroom-*, etc.
      return false;
    } catch { return false; }
  };

  const rebuildOnce = (el) => {
    try {
      if (!el || SEEN.has(el)) return;
      SEEN.add(el);
      el.dispatchEvent(new Event('ll-rebuild', { bubbles: true, composed: true }));
    } catch {}
  };

  const deepScan = (root) => {
    try {
      if (!root) return;
      if (root instanceof Element && isLikelyCard(root)) rebuildOnce(root);
      const all = (root instanceof ShadowRoot ? root : root).querySelectorAll?.("*");
      if (!all) return;
      for (const el of all) {
        if (isLikelyCard(el)) rebuildOnce(el);
        const sr = el.shadowRoot;
        if (sr) { try { deepScan(sr); } catch {} }
      }
    } catch {}
  };

  const installOnInstance = (host) => {
    try {
      if (!host || host.__ddcCardModIntegrated) return;
      host.__ddcCardModIntegrated = true;
      const root = host.shadowRoot || host;

      // Initial scan (covers already rendered children)
      deepScan(root);

      // Observe newly added content within the card
      const mo = new MutationObserver((muts) => {
        for (const m of muts) {
          if (!m.addedNodes || !m.addedNodes.length) continue;
          for (const n of m.addedNodes) {
            if (n instanceof Element || n instanceof ShadowRoot) {
              deepScan(n);
            }
          }
        }
      });
      mo.observe(root, { childList: true, subtree: true });
      host.__ddcCardModIntegratedObserver = mo;

      // Follow-up scans for lazy renders
      setTimeout(() => { try { deepScan(root); } catch {} }, 250);
      setTimeout(() => { try { deepScan(root); } catch {} }, 1000);
    } catch {}
  };

  const hookExisting = () => {
    try {
      document.querySelectorAll("drag-and-drop-card").forEach(installOnInstance);
    } catch {}
  };

  if (window.customElements && window.customElements.whenDefined) {
    window.customElements.whenDefined("drag-and-drop-card").then(() => {
      // Install on existing instances
      hookExisting();
      // Patch prototype to auto-install on future instances
      const ctor = window.customElements.get("drag-and-drop-card");
      if (ctor && ctor.prototype) {
        const origConnected = ctor.prototype.connectedCallback;
        ctor.prototype.connectedCallback = function() {
          try { origConnected && origConnected.call(this); } finally {
            installOnInstance(this);
          }
        };
      }
      // As a fallback, watch the DOM for new instances
      const docObserver = new MutationObserver(() => hookExisting());
      docObserver.observe(document.documentElement, { childList: true, subtree: true });
    });
  } else {
    // Very old environment: periodic best-effort scan
    const iv = setInterval(hookExisting, 1000);
    setTimeout(() => clearInterval(iv), 10000);
  }
}
