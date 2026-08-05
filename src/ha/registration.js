/*
 * Home Assistant custom-card registration metadata.
 *
 * Registration tells Lovelace how to discover, name, and instantiate Drag & Drop Card in the card
 * picker while preserving the published custom element tag.
 */

const DDC_DASHBOARD_STRATEGY_TYPE = 'drag-and-drop-card';
const DDC_DASHBOARD_STRATEGY_TAG = `ll-strategy-dashboard-${DDC_DASHBOARD_STRATEGY_TYPE}`;

function __ddcDashboardStrategySlug__(value, fallback = 'drag-drop') {
  const slug = String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48);
  return slug || fallback;
}

function __ddcDashboardStrategyHash__(value = '') {
  const text = String(value || '');
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

function __ddcDashboardStrategyRouteRoot__(pathname = '') {
  const segments = String(pathname || '')
    .split(/[?#]/, 1)[0]
    .split('/')
    .map((segment) => segment.trim())
    .filter(Boolean);
  return segments.length ? `/${segments[0]}` : '/';
}

function __ddcDashboardStrategyTitle__(config = {}, hass = {}) {
  return String(
    config.title
    || config.name
    || `${hass?.config?.location_name || 'Home'} Dashboard`
  ).trim();
}

export function resolveDashboardStrategyStorageKey(config = {}, hass = {}) {
  const explicit = String(config.storage_key || config.storageKey || '').trim();
  if (explicit) return explicit;
  let currentPath = '';
  try { currentPath = window.location?.pathname || ''; } catch {}
  const dashboardRouteRoot = __ddcDashboardStrategyRouteRoot__(currentPath);

  const stableSeedParts = [
    config.url_path,
    config.urlPath,
    config.path,
    config.slug,
    config.id,
    config.dashboard_id,
    config.dashboardId,
    config.title,
    config.name,
  ].map((part) => String(part || '').trim()).filter(Boolean);
  // During the Community dashboard creation flow window.location can still
  // point at the dashboard the user came from. Never mix that transient route
  // into an otherwise stable strategy identity or the storage key will change
  // on the first refresh. The current route is only a final fallback for old
  // YAML strategy configs that contain no identifying fields.
  // A dashboard strategy is generated both at the dashboard root and while a
  // concrete Lovelace view is active. Treat `/wall-panel`, `/wall-panel/home`
  // and `/wall-panel/lights` as the same dashboard identity. Using the full
  // pathname here made a cold refresh look up a different backend snapshot
  // than navigation from another dashboard.
  const fallbackSeed = String(dashboardRouteRoot || hass?.config?.location_name || 'drag-and-drop-dashboard').trim();
  const seed = stableSeedParts.length ? stableSeedParts.join('|') : fallbackSeed;
  const slug = __ddcDashboardStrategySlug__(
    config.url_path || config.urlPath || config.path || config.slug || config.title || config.name || dashboardRouteRoot || 'dashboard',
    'dashboard'
  );
  return `dashboard_${slug}_${__ddcDashboardStrategyHash__(seed)}`;
}

export function registerDragAndDropCard(DragAndDropCard, version) {
  class DdcDashboardStrategy extends HTMLElement {
    static noEditor = true;

    static getCreateSuggestions(_hass) {
      return {
        title: 'Drag & Drop Dashboard',
        icon: 'mdi:cursor-move',
      };
    }

    static async generate(config = {}, hass = {}) {
      const title = __ddcDashboardStrategyTitle__(config, hass);
      const storageKey = resolveDashboardStrategyStorageKey(config, hass);
      const cardOverrides = (
        config.card && typeof config.card === 'object' && !Array.isArray(config.card)
      ) ? config.card : {};
      const baseCard = DragAndDropCard.getStubConfig
        ? DragAndDropCard.getStubConfig(hass)
        : { type: 'custom:drag-and-drop-card' };
      const viewPath = __ddcDashboardStrategySlug__(config.view_path || config.viewPath || 'home', 'home');
      const cardConfig = {
        ...baseCard,
        ...cardOverrides,
        type: 'custom:drag-and-drop-card',
        storage_key: String(cardOverrides.storage_key || cardOverrides.storageKey || storageKey),
      };
      delete cardConfig.storageKey;

      return {
        title,
        views: [
          {
            title: String(config.view_title || config.viewTitle || 'Home'),
            path: viewPath,
            type: 'panel',
            icon: config.view_icon || config.viewIcon || 'mdi:home',
            cards: [cardConfig],
          },
        ],
      };
    }
  }

  if (!customElements.get(DDC_DASHBOARD_STRATEGY_TAG)) {
    customElements.define(DDC_DASHBOARD_STRATEGY_TAG, DdcDashboardStrategy);
  }

  customElements.define('drag-and-drop-card', DragAndDropCard);

  /*
   * Register this card with Home Assistant's card picker. The HA dashboard
   * editor discovers custom cards by reading a global `window.customCards`
   * array. Each entry in that array is an object describing a custom card.
   * Without registering here, the drag-and-drop card will not appear in the
   * "Custom" section of the card picker and users must manually add it via YAML.
   */
  try {
    if (!Array.isArray(window.customCards)) {
      window.customCards = [];
    }
    const exists = window.customCards.some((c) => {
      if (!c || typeof c.type !== 'string') return false;
      return c.type.toLowerCase().replace(/^custom:/, '') === 'drag-and-drop-card';
    });
    const cardVersion = (typeof version !== 'undefined' && version) ? version : undefined;
    if (!exists) {
      window.customCards.push({
        type: 'drag-and-drop-card',
        name: 'Drag & Drop Card',
        description: 'Flexible grid layout card with drag‑and‑drop editing.',
        preview: false,
        configurable: true,
        documentationURL: 'https://hads.smarti.dev/d/drag-and-drop-card',
        version: cardVersion,
        icon: 'mdi:cursor-move'
      });
    } else {
      const current = window.customCards.find((c) => (
        c && typeof c.type === 'string'
        && c.type.toLowerCase().replace(/^custom:/, '') === 'drag-and-drop-card'
      ));
      if (current) {
        current.name = 'Drag & Drop Card';
        current.description = 'Flexible grid layout card with drag‑and‑drop editing.';
        current.preview = false;
        current.configurable = true;
        current.documentationURL = 'https://hads.smarti.dev/d/drag-and-drop-card';
        current.version = cardVersion;
        current.icon = 'mdi:cursor-move';
      }
    }
  } catch (e) {
    console.warn('[drag-and-drop-card] Failed to register card in customCards', e);
  }

  /*
   * Register a dashboard strategy so Home Assistant 2026.5+ can show this as
   * a Community dashboard option in the Add dashboard dialog.
   */
  try {
    if (!Array.isArray(window.customStrategies)) {
      window.customStrategies = [];
    }
    const current = window.customStrategies.find((strategy) => (
      strategy
      && strategy.strategyType === 'dashboard'
      && typeof strategy.type === 'string'
      && strategy.type.toLowerCase().replace(/^custom:/, '') === DDC_DASHBOARD_STRATEGY_TYPE
    ));
    const descriptor = {
      type: DDC_DASHBOARD_STRATEGY_TYPE,
      strategyType: 'dashboard',
      name: 'Drag & Drop Dashboard',
      description: 'Start a full dashboard with a panel-sized Drag & Drop Card.',
      documentationURL: 'https://hads.smarti.dev/d/drag-and-drop-card',
    };
    if (current) Object.assign(current, descriptor);
    else window.customStrategies.push(descriptor);
  } catch (e) {
    console.warn('[drag-and-drop-card] Failed to register dashboard strategy', e);
  }
}
