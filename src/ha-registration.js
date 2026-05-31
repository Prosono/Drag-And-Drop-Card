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

function __ddcDashboardStrategyTitle__(config = {}, hass = {}) {
  return String(
    config.title
    || config.name
    || `${hass?.config?.location_name || 'Home'} Dashboard`
  ).trim();
}

function __ddcDashboardStrategyStorageKey__(config = {}, hass = {}) {
  const explicit = String(config.storage_key || config.storageKey || '').trim();
  if (explicit) return explicit;
  let currentPath = '';
  try { currentPath = window.location?.pathname || ''; } catch {}

  const seedParts = [
    config.url_path,
    config.urlPath,
    config.path,
    config.slug,
    config.id,
    config.dashboard_id,
    config.dashboardId,
    currentPath,
    config.title,
    hass?.config?.location_name,
  ].map((part) => String(part || '').trim()).filter(Boolean);

  const seed = seedParts.length ? seedParts.join('|') : 'drag-and-drop-dashboard';
  const slug = __ddcDashboardStrategySlug__(
    config.url_path || config.urlPath || config.path || config.slug || currentPath || config.title || 'dashboard',
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
      const storageKey = __ddcDashboardStrategyStorageKey__(config, hass);
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
