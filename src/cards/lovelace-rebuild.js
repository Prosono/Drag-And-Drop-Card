// DDC's card-mod initialization signals must not recreate their own sender.
const initializationEvents = new WeakSet();

export function dispatchInternalRebuild(element) {
  const event = new Event('ll-rebuild', { bubbles: true, composed: true });
  initializationEvents.add(event);
  element.dispatchEvent(event);
}

export function createCardRebuildHandler(host) {
  const handled = new WeakSet();
  return (event) => {
    if (initializationEvents.has(event)) return;
    const path = event.composedPath?.() || [];
    // Only handle our own canvas wrappers, never a nested DDC or editor preview.
    const wrap = path.find(node => node?.dataset?.layoutCardId
      && node.parentNode === host.cardContainer);
    const oldCard = wrap?.firstElementChild;
    if (!oldCard || !path.includes(oldCard) || handled.has(oldCard)) return;
    const savedConfig = wrap.dataset.cfg;
    let config;
    try { config = JSON.parse(savedConfig); } catch { return; }
    if (!config || typeof config !== 'object' || !config.type) return;
    handled.add(oldCard);
    const isCurrent = () => wrap.isConnected && wrap.parentNode === host.cardContainer
      && wrap.firstElementChild === oldCard && wrap.dataset.cfg === savedConfig;
    // Coalesce repeated signals from this instance and defer until dispatch ends.
    return Promise.resolve().then(async () => {
      if (!isCurrent()) return;
      await host._replaceEditedCardElement_(wrap, config, { isCurrent });
    }).catch(() => {
      // A later genuine request may retry after a transient creation failure.
      handled.delete(oldCard);
    });
  };
}
