// Chrome discovery must never traverse dashboard card contents. Cache only for
// the current synchronous task: navigation/edit-mode DOM changes in later
// events are always observed, without long-lived references to old HA views.
export function queryHaChrome(host, selector, root = document) {
  let cache = host.__haChromeQueryCache;
  if (!cache || cache.root !== root) {
    cache = { root, roots: [], results: new Map() };
    host.__haChromeQueryCache = cache;
    queueMicrotask(() => {
      if (host.__haChromeQueryCache === cache) host.__haChromeQueryCache = null;
    });
    const seen = new Set();
    const visit = node => {
      if (!node || seen.has(node)) return;
      seen.add(node);
      cache.roots.push(node);
      const walker = root.ownerDocument?.createTreeWalker?.bind(root.ownerDocument)
        || root.createTreeWalker?.bind(root);
      if (!walker) return;
      const tree = walker(node, 1, {acceptNode: el => el.localName === 'drag-and-drop-card' ? 2 : 1});
      let el;
      while ((el = tree.nextNode())) {
        if (el.shadowRoot) visit(el.shadowRoot);
      }
    };
    visit(root);
  }
  if (!cache.results.has(selector)) {
    const matches = new Set();
    for (const scope of cache.roots) {
      scope.querySelectorAll?.(selector).forEach(el => matches.add(el));
    }
    cache.results.set(selector, [...matches]);
  }
  return cache.results.get(selector).slice();
}
