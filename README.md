# The Drag & Drop Card for Home Assistant

[![Watch the demo on YouTube](https://img.youtube.com/vi/__4U081hwtM/maxresdefault.jpg)](https://www.youtube.com/watch?v=__4U081hwtM)

▶️ Click the image above to watch the video of the card

A freeform **drag / resize / snap-to-grid** canvas for Lovelace cards.  
Arrange any Lovelace cards visually, save the layout (auto-save or manual), export/import full designs, and quickly prototype dashboards with device-size presets.

> ⚠️ **License & Terms**  
> This project is **proprietary** and governed by **EULA.md**.  
> Third-party notices are listed in **THIRD_PARTY_NOTICES.md**.

---

## ✨ Features

- **Drag & resize** any Lovelace card on a free-positioned canvas.
- **Snap-to-grid** editing (configurable grid size, live snapping).
- **Auto-save** (configurable debounce) or manual “Apply layout”.
- **Export / Import** designs as JSON (positions, sizes, z-order, options).
- **Device size presets** (phones, tablets, desktops) + flexible container sizing.
- **Multiple tabs per canvas** (top or left tab bar, per-layout last-tab memory).
- **Optional card auto-resize**:
  - In `dynamic` mode, cards always auto-scale.
  - In other modes you can opt in/out via `auto_resize_cards`.
- **Rich backgrounds**:
  - Static image
  - Particle background
  - YouTube video background
  - Or plain (`none`)
- **Screen saver mode** to dim/blank the canvas after inactivity.
- **Batch select** & group actions (selection marquee, multi-select).
- **Long-press or double-click** to enter Edit mode; **Esc** to exit.
- **Toolbar shortcuts** (Add, Reload, Diagnostics, Import/Export, Apply, Exit).
- **Optional hidden HA header/sidebar** for “full app” dashboards.
- **Card-mod compatible**: preserves and applies `card_mod` on the main card.
- **No external CDNs**: bundles `interactjs` and `js-yaml`.

---

## 📦 Installation

### Option A: HACS (Recommended)

1. Add this repository as a **Custom Repository** in HACS (Frontend).
2. Install **Drag & Drop Card**.
3. In Home Assistant, go to **Settings → Dashboards → … → Resources**, ensure a resource exists:
   ```yaml
   url: https://github.com/Prosono/Drag-And-Drop-Card
   type: module
   ```

### Option B: Manual

1. Copy `drag-and-drop-card.js` to `/config/www/drag-and-drop-card.js`.
2. Add a Lovelace resource:
   ```yaml
   url: /local/drag-and-drop-card.js
   type: module
   ```

> After adding a new resource, **clear browser cache** or hard-reload to ensure the module loads.

---

## 🔁 Persistence backend (IMPORTANT)

To make changes **persistent** when you add / edit / remove cards within the drag-and-drop card, you **must** install the backend integration:

> https://github.com/Prosono/Drag-And-Drop-Card-Backend

Without this, a simple browser refresh or Home Assistant restart can wipe your configuration.

---

## 🚀 Quick Start

Add a **Drag & Drop Card** to your dashboard:

```yaml
type: custom:drag-and-drop-card
storage_key: livingroom_layout         # unique key per canvas
grid: 20                               # pixel grid size (default editor stub)
drag_live_snap: true                   # snap while dragging/resizing
auto_save: true                        # auto-save after edits
auto_save_debounce: 800                # ms debounce
container_size_mode: auto              # auto | dynamic | fixed_custom | preset
auto_resize_cards: true                # in dynamic mode this is always forced on
container_background: transparent      # canvas background
card_background: var(--ha-card-background, var(--card-background-color))
disable_overlap: false                 # prevent overlapping when true
background_mode: none                  # none | image | particles | youtube
debug: false                           # verbose console logs
```

Now:

- **Long-press** on blank canvas (≈1s) **or** **double-click** an empty area to enter **Edit Mode**.
- Use the **toolbar** to **Add** cards, **Import/Export**, **Apply**, or **Exit** edit mode.
- **Ctrl/Cmd + S** applies (saves) the layout while in edit mode.
- **Esc** exits edit mode.

---

## 🧭 Tabs

You can define multiple tabs inside a single Drag & Drop card. Each tab has its own layout.

```yaml
type: custom:drag-and-drop-card
storage_key: multi_tab_example
tabs:
  - id: home
    label: Home
    icon: mdi:home
    label_mode: both     # icon | label | both
  - id: media
    label: Media
    icon: mdi:television
    label_mode: icon
default_tab: home
tabs_position: top        # top (default) | left
hide_tabs_when_single: true
```

- The card remembers the **last active tab** per `storage_key`.
- Set `tabs_position: left` to get a vertical tab bar.
- When there is only one tab and `hide_tabs_when_single: true`, the tab bar is hidden.

---

## 🎆 Backgrounds

Background behavior is controlled by `background_mode`:

- `none` (default): no special background.
- `image`: uses `background_image`.
- `particles`: uses `background_particles`.
- `youtube`: uses `background_youtube`.

### Image background

```yaml
type: custom:drag-and-drop-card
storage_key: fancy_bg
background_mode: image
background_image:
  src: /media/your/folder/background.png  # or any HA-accessible URL
  size: cover                             # cover | contain | 100% 100% | …
  position: center center                 # CSS background-position
  repeat: false                           # true | false | 'repeat'
  opacity: 0.85                           # 0–1
  attachment: scroll                      # scroll | fixed
  filter: blur(4px) brightness(0.8)       # CSS filter() chain
```

### Particle background (advanced)

```yaml
background_mode: particles
background_particles:
  preset: default   # implementation-specific; see docs/updates if provided
  # Additional particle config may be supported in future versions.
```

### YouTube background (advanced)

```yaml
background_mode: youtube
background_youtube:
  video_id: dQw4w9WgXcQ      # YouTube video id
  mute: true
  loop: true
  start: 0
  end: 0                     # 0 = entire video
  size: cover                # cover | contain | fill
  attachment: fixed          # fixed | scroll
```

> Exact options for particles and YouTube are implementation-oriented; the above gives the general structure used by the card.

---

## 💤 Screen Saver

Optional screen saver that activates after inactivity:

```yaml
screen_saver_enabled: true
screen_saver_delay: 300000   # milliseconds (e.g. 300000 = 5 minutes)
```

When enabled, the card will enter a “screen saver” state after the delay. The exact visual behavior may evolve, but the intent is to avoid burn-in and reduce visual noise when idle.

---

## ⚙️ Configuration Options

Below is a summary of the main configuration options. Many have reasonable defaults and only need to be set when you want custom behavior.

| Key                            | Type      | Default                    | Description |
|--------------------------------|-----------|----------------------------|-------------|
| `storage_key`                  | string    | _auto_                     | Unique ID for storing this canvas’ layout. If omitted, one is generated. |
| `grid`                         | number    | `10`                       | Grid size in px used for snapping and guides. New cards created via the stub start at 20. |
| `drag_live_snap`               | boolean   | `false`                    | Snap while dragging/resizing (live feedback). |
| `auto_save`                    | boolean   | `true`                     | Automatically save changes. |
| `auto_save_debounce`           | number    | `800`                      | Debounce window (ms) for auto-save. |
| `container_size_mode`          | string    | `dynamic`                  | `dynamic` (natural size, always auto-resize), `auto` (fit container), `fixed_custom`, or `preset`. |
| `container_fixed_width`        | number    | `null`                     | Fixed width (px) when `fixed_custom`. |
| `container_fixed_height`       | number    | `null`                     | Fixed height (px) when `fixed_custom`. |
| `container_preset`             | string    | `fhd` / `fullhd`           | Device/display preset key (see below) when `preset`. |
| `container_preset_orientation` | string    | `auto`                     | `auto` \| `portrait` \| `landscape`. |
| `container_background`         | string    | `transparent`              | Canvas background (e.g. color/gradient). |
| `card_background`              | string    | `var(--ha-card-background, var(--card-background-color))` | Default background for wrapped cards. |
| `disable_overlap`              | boolean   | `false`                    | If `true`, prevents overlapping during edit (experimental). |
| `animate_cards`                | boolean   | `false`                    | If `true`, cards animate in when switching tabs or loading. |
| `background_mode`              | string    | `none`                     | `none` \| `image` \| `particles` \| `youtube`. |
| `background_image`             | object    | _none_                     | Image background settings when `background_mode: image`. |
| `background_particles`         | object    | _none_                     | Particle background settings when `background_mode: particles`. |
| `background_youtube`           | object    | _none_                     | YouTube background settings when `background_mode: youtube`. |
| `screen_saver_enabled`         | boolean   | `false`                    | Enable screen saver mode. |
| `screen_saver_delay`           | number    | `300000`                   | Screen saver delay in ms (fallback to 5 minutes if invalid). |
| `tabs`                         | array     | `[]`                       | Tab definitions (see Tabs section). |
| `default_tab`                  | string    | first tab id / `'default'` | Default tab id when the card loads. |
| `tabs_position`                | string    | `top`                      | `top` or `left`. |
| `hide_tabs_when_single`        | boolean   | `true`                     | Hide tab bar when there is only one tab. |
| `hero_image`                   | string    | internal default URL       | Optional header/hero image used in the editor UI. |
| `card_shadow`                  | boolean   | `false`                    | Apply a drop shadow to card wrappers. |
| `hide_HA_Header`               | boolean   | `false`                    | Hide the Home Assistant top header while in this card. |
| `hide_HA_Sidebar`              | boolean   | `false`                    | Hide the Home Assistant sidebar while in this card. |
| `edit_mode_pin`                | string    | `''`                       | Optional PIN required to enter edit mode (via supported UI). |
| `debug`                        | boolean   | `false`                    | Extra logging to the console. |
| `card_mod`                     | object    | _none_                     | Card-mod config for the main card. |
| `cards`                        | array     | _none_                     | Initial child cards (see below). |

### Preset Keys (examples)

- Phones: `iphone-14-pro`, `iphone-14-pro-max`, `iphone-se-2`, `pixel-7`, `galaxy-s8`, `galaxy-s20-ultra`
- Tablets: `ipad-9-7`, `ipad-11-pro`, `ipad-12-9-pro`, `surface-go-3`
- Desktops: `hd`, `wxga-plus`, `fhd`, `qhd`, `ultrawide-uwqhd`, `uhd-4k`

> You can switch size mode at any time; the canvas will re-render accordingly.

---

## 🧱 Adding Cards

Use the **Add** button in edit mode to pick from standard Lovelace cards.  
You can also embed initial cards directly in YAML (helpful as a starting snapshot):

```yaml
type: custom:drag-and-drop-card
storage_key: demo_layout
grid: 12
cards:
  - type: button
    entity: light.kitchen
  - type: gauge
    entity: sensor.temperature_living_room
    min: 0
    max: 40
  - type: entities
    entities:
      - switch.coffee_machine
      - switch.toaster
```

Each added card is wrapped in a draggable/resizable container that participates in snapping and layout persistence.

---

## 💾 Persistence & Storage

- Layouts are saved **per `storage_key`**.
- Primary storage uses Home Assistant’s **backend integration** when available; otherwise falls back to **`localStorage`** (`ddc_local_<storage_key>`) in the browser.
- When backend becomes available, **local layouts are migrated automatically**.
- **Auto-save** is enabled by default; you can also use the **Apply** button or **Ctrl/Cmd + S** in edit mode for manual saves.

---

## 📤 Export / 📥 Import

- **Export** produces a JSON file with version, options, and cards.
- **Import** reads JSON, applies `options` (including `card_mod`, tab definitions, etc.), rebuilds the canvas, and keeps your `storage_key` intact.

---

## 🧑‍🏫 Editor UX & Shortcuts

- **Enter Edit**: Long-press on blank canvas (~1s) or **double-click** an empty area.
- **Exit Edit**: Press **Esc** or use the **Exit** button.
- **Apply**: **Ctrl/Cmd + S** in edit mode or click **Apply**.
- **Multi-select**: Drag a selection marquee; use **Shift/Ctrl/Cmd** to extend selection.
- **Toolbar**:
  - Add
  - Reload
  - Diagnostics
  - Export / Import
  - Apply layout (only needed when auto-save is off)
  - Exit edit

---

## 🎨 Styling & `card-mod`

The card supports [card-mod](https://github.com/thomasloven/lovelace-card-mod) on the **outer** drag-and-drop card.

Example to tweak grid color:

```yaml
type: custom:drag-and-drop-card
storage_key: fancy_layout
card_mod:
  style: |
    :host {
      --ddc-grid-color: rgba(255, 255, 255, 0.15);
    }
```

Example to make the container fully transparent while keeping inner cards untouched:

```yaml
card_mod:
  style: |
    :host {
      --ha-card-background: transparent;
      border-radius: 18px;
      overflow: hidden;
    }

    .ddc-root,
    .card-container,
    .layout,
    .pane,
    .rightGrid,
    .section,
    .toolbar,
    .mdc-card,
    .card,
    .card *[class~="card"],
    .mini,
    .bd {
      background: transparent !important;
      box-shadow: none !important;
    }
```

> Note: Only the **main** card supports `card_mod` directly. Inner cards should be styled via their own `card_mod` configs.

---

## HADS – Home Assistant Dashboard Store

This card can import designs from HADS:

> https://hads.smarti.dev/

---

## 🛠 Troubleshooting

- **Module doesn’t load**: Confirm resource URL & type. Hard-reload browser.
- **Cards snap oddly**: Adjust `grid` or disable `disable_overlap`.
- **Overlaps happen**: Use `disable_overlap: true` (experimental).
- **Layout didn’t persist**: Ensure **Apply** or `auto_save` are used; check `storage_key` and backend integration.
- **Imported design looks wrong**: Check version & that the referenced cards exist in your system.

---

## 📷 Screenshots

_Add screenshots or GIFs here._

---

## 🤝 Contributing

1. Read **EULA.md** and **THIRD_PARTY_NOTICES.md**.  
2. Open issues for bugs/requests.  
3. PRs: keep style, no CDN deps, test with **card-mod**.

---

## 📄 License

**© 2025 SMARTI AS** — All rights reserved.  
Use is governed by **EULA.md**.  
See **THIRD_PARTY_NOTICES.md**.

---

## 🧾 Release Notes

The bundle logs the version in the browser console:

```text
drag-and-drop-card vX.Y.Z
```

---

## 🧾 Known bugs

A couple of bugs are already known:

1. On some custom cards certain dropdowns can cause the visual editor to disappear temporarily. The editor returns once an option is selected.
2. Card-mod support **inside** nested cards is still limited and may not behave as expected.
3. The visual editor for the Entity card is currently not working correctly in the card selector inside Drag & Drop Card.
4. …probably more 🙂
