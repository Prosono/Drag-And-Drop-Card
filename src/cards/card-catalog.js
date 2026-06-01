/*
 * Card picker catalog metadata and default Drag & Drop Card stub config.
 *
 * Home Assistant calls these statics when the card is added from the picker, so this module defines
 * the first-run experience and the initial dashboard styling/options.
 */

/* Card picker metadata and default stub config. */
function _defaultParticlesBackgroundConfig_() {
    return {
      particles: {
        number: { value: 52, density: { enable: true, value_area: 1150 } },
        color: { value: ['#dff7ff', '#79d8ff', '#31c7f5'] },
        shape: { type: 'circle' },
        opacity: {
          value: 0.42,
          random: true,
          anim: { enable: true, speed: 0.28, opacity_min: 0.12, sync: false }
        },
        size: {
          value: 2.15,
          random: true,
          anim: { enable: true, speed: 0.85, size_min: 0.65, sync: false }
        },
        line_linked: {
          enable: true,
          distance: 155,
          color: '#7ddcff',
          opacity: 0.18,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.42,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: { enable: true, rotateX: 900, rotateY: 1350 }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: false },
          onclick: { enable: false },
          resize: true
        },
        modes: {
          grab: { distance: 145, line_linked: { opacity: 0.26 } },
          repulse: { distance: 110, duration: 0.4 },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: false
    };
  }

function getStubConfig(/* hass, entities, entitiesFallback */) {
    // Return default configuration for a new drag‑and‑drop card.  These values
    // initialize the card in the Full HD preset with a 20px grid and a calm
    // particles background.  The storage_key is generated once so each new
    // card has its own persistent layout key.
    return {
      type: 'custom:drag-and-drop-card',
      storage_key: this._genKey(),
      grid: 20,
      drag_live_snap: true,
      auto_save: true,
      auto_save_debounce: 800,
      container_size_mode: 'preset',
      container_background: 'radial-gradient(circle at 18% 12%, rgba(48, 199, 245, 0.24), transparent 34%), radial-gradient(circle at 82% 2%, rgba(14, 165, 233, 0.18), transparent 32%), linear-gradient(135deg, #071522 0%, #0a2b40 48%, #05111f 100%)',
      card_background: 'linear-gradient(135deg, #111827, #1f2937)',
      debug: false,
      disable_overlap: false,
      auto_resize_cards: true,
      background_mode: 'particles',
      background_particles: {
        pointer_events: false,
        config: this._defaultParticlesBackgroundConfig_(),
      },
      animate_cards: true,
      optimize_for_mobile: false,
      mobile_dynamic_behavior: 'native',
      outer_grid_buffer: false,
      outer_grid_buffer_cells: 1,
      responsive_viewports: {
        desktop: { width: 1430, height: 896 },
        tablet: {
          landscape: { width: 1295, height: 923 },
          portrait: { width: 923, height: 1295 },
        },
        mobile: {
          landscape: { width: 1080, height: 500 },
          portrait: { width: 500, height: 1080 },
        },
      },
      container_preset_orientation: 'auto',
      edit_mode_pin: '',
      container_fixed_width: null,
      container_fixed_height: null,
      container_preset: 'fhd',
      card_shadow: true,
      card_shadow_intensity: 5,
      hide_HA_Header: false,
      hide_HA_Sidebar: false,
      screen_saver_enabled: true,
      screen_saver_delay: 1500000,
      screen_saver_style: 'visionos_glass',
      screen_saver_entities: [],
      tabs: [
        { id: 'home', label: 'Home', icon: 'mdi:home', label_mode: 'both' }
      ],
      default_tab: 'home',
      tabs_position: 'top',
      layers_enabled: false,
      layers_button_details: false,
      layers: [],
    };
  }

export function installCardDefinitionStatics(CardClass) {
  Object.defineProperties(CardClass, {
    type: {
      configurable: true,
      get() {
        // When registering with Home Assistant’s card picker via window.customCards,
            // the type should be the element tag itself (without the `custom:`
            // prefix).  Returning the tag here makes it consistent with the
            // registration below and prevents mismatches when the card is added
            // through the visual editor.
            return 'drag-and-drop-card';
      },
    },
    title: {
      configurable: true,
      get() {
        return 'Drag & Drop Card';
      },
    },
    description: {
      configurable: true,
      get() {
        return 'Flexible grid layout card with drag‑and‑drop editing.';
      },
    },
    icon: {
      configurable: true,
      get() {
        return 'mdi:cursor-move';
      },
    },
    group: {
      configurable: true,
      get() {
        return 'custom';
      },
    },
    _defaultParticlesBackgroundConfig_: {
      configurable: true,
      writable: true,
      value: _defaultParticlesBackgroundConfig_,
    },
    getStubConfig: {
      configurable: true,
      writable: true,
      value: getStubConfig,
    },
  });
}
