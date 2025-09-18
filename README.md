# Drag & Drop Card for Home Assistant (Lovelace)

[![Watch the demo on YouTube](https://img.youtube.com/vi/__4U081hwtM/maxresdefault.jpg)](https://www.youtube.com/watch?v=__4U081hwtM)

▶️ Click the image above to watch the video of the card

A freeform **drag / resize / snap-to-grid** canvas for Lovelace cards.  
Arrange any Lovelace cards visually, save the layout (auto-save or manual), export/import full designs, and quickly prototype dashboards with device-size presets.

> ⚠️ **License & Terms**  
> This project is **proprietary** and governed by **EULA.md**.  
> Third-party notices are listed in **THIRD_PARTY_NOTICES.md**.

---

## ✨ Features

- **Drag & resize** any Lovelace card on a canvas.
- **Snap-to-grid** editing (configurable grid size, live snapping).
- **Auto-save** (configurable debounce) or manual “Apply layout”.
- **Export / Import** designs as JSON (includes positions, sizes, z-order, options).
- **Device size presets** (phones, tablets, desktops) + fixed or dynamic container sizing.
- **Local persistence** per `storage_key`, with migration to backend when available.
- **Batch select** & group actions (selection marquee, multi-select).
- **Long-press to enter Edit** (blank canvas), **Esc to exit**.
- **Toolbar shortcuts** (Add, Reload, Diagnostics, Import/Export, Apply, Exit).
- **Card-mod compatible**: preserves and applies `card_mod` styling within.
- **No external CDNs**: bundles `interactjs` and `js-yaml`.

---

## 📦 Installation

### Option A: HACS (Recommended)
1. Add this repository as a **Custom Repository** in HACS (Frontend).
2. Install **Drag & Drop Card**.
3. In Home Assistant, go to **Settings → Dashboards → … → Resources**, ensure a resource exists:
   ```yaml
   url: https://github.com/<you>/lovelace-drag-and-drop-card
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

# IMPORTANT!
In order to make changes persitant when you add / edit / remove cards within the drag-and-drop card, you MUST install the backend integration found here:
https://github.com/Prosono/Drag-And-Drop-Card-Backend

Without this a simple refresh of your browser or a restart of Home Assistant will wipe your configuration!

---

## 🚀 Quick Start

Add a **Drag & Drop Card** to your dashboard:

```yaml
type: custom:drag-and-drop-card
storage_key: livingroom_layout     # unique key per canvas
grid: 10                           # pixel grid size (default 10)
drag_live_snap: true               # snap while dragging/resizing
auto_save: true                    # auto-save after edits
auto_save_debounce: 800            # ms debounce
container_size_mode: dynamic       # dynamic | fixed_custom | preset
container_background: transparent  # canvas bg
card_background: var(--ha-card-background, var(--card-background-color))
disable_overlap: false             # prevent overlapping when true
debug: false                       # verbose console logs
```

Now:
- **Long-press** on blank canvas (≈1s) og double click on an epmty space to enter **Edit Mode**.
- Use the **toolbar** to **Add** cards, **Import/Export**, **Apply**, or **Exit** edit mode.
- **Ctrl/Cmd + S** applies (saves) the layout in edit mode.
- **Esc** exits edit mode.


## HADS - Home Assistant Dashboard Store 

This card makes it possible to import designs from HADS -> https://hads.smarti.dev/
---

## ⚙️ Configuration Options

| Key                              | Type      | Default | Description |
|----------------------------------|-----------|---------|-------------|
| `storage_key`                    | string    | _auto_  | Unique ID for storing this canvas’ layout. If omitted, one is generated. |
| `grid`                           | number    | `10`    | Grid size in px used for snapping and guides. |
| `drag_live_snap`                 | boolean   | `false` | Snap while dragging/resizing (live feedback). |
| `auto_save`                      | boolean   | `true`  | Automatically save changes. |
| `auto_save_debounce`             | number    | `800`   | Debounce window (ms) for auto-save. |
| `container_size_mode`            | string    | `dynamic` | `dynamic` (auto), `fixed_custom` (set width/height), or `preset`. |
| `container_fixed_width`          | number    | _none_  | Fixed width (px) when `fixed_custom`. |
| `container_fixed_height`         | number    | _none_  | Fixed height (px) when `fixed_custom`. |
| `container_preset`               | string    | `fhd`   | Device/display preset key (see below) when `preset`. |
| `container_preset_orientation`   | string    | `auto`  | `auto` \| `portrait` \| `landscape`. |
| `container_background`           | string    | `transparent` | Canvas background. |
| `card_background`                | string    | `var(--ha-card-background, var(--card-background-color))` | Default background for wrapped cards. |
| `disable_overlap`                | boolean   | `false` | If `true`, prevents overlapping during edit. |
| `debug`                          | boolean   | `false` | Extra logging to the console. |
| `card_mod`                       | object    | _none_  | Card-mod config; preserved on export/import and applied to nested cards. |
| `hero_image`                     | string    | _(internal default)_ | Optional header image in the editor UI. |

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

---

## 💾 Persistence & Storage

- Layouts are saved **per `storage_key`**.
- Primary storage uses Home Assistant’s backend when available; otherwise falls back to **`localStorage`** (`ddc_local_<storage_key>`) in the browser.
- When backend becomes available, **local layouts are migrated automatically**.
- **Auto-save** is enabled by default; you can also use the **Apply** button for manual saves.

---

## 📤 Export / 📥 Import

- **Export** produces a JSON file with version, options, and cards.
- **Import** reads JSON, applies `options` (including `card_mod`), rebuilds canvas, and keeps your `storage_key` intact.

---

## 🧑‍🏫 Editor UX & Shortcuts

- **Enter Edit**: Long-press /souble click on blank canvas (≈1s).
- **Exit Edit**: Press **Esc** or use the **Exit** button.
- **Apply**: **Ctrl/Cmd + S** in edit mode or click **Apply**.
- **Multi-select**: Drag selection marquee; use **Shift/Ctrl/Cmd** to extend selection.
- **Toolbar**:
  - Add
  - Reload
  - Diagnostics
  - Export / Import
  - Apply layout (only needed whan autosve is turned off)
  - Exit edit

---

## 🎨 Styling & `card-mod`

Supports [card-mod](https://github.com/thomasloven/lovelace-card-mod). Example:

```yaml
type: custom:drag-and-drop-card
storage_key: fancy_layout
card_mod:
  style: |
    :host {
      --ddc-grid-color: rgba(255, 255, 255, 0.15);
    }
```
NOTE: Only the main card supports card mod for now. If you want to style the inner cards you will hace to style them using card mod
```yaml
card_mod:
  style: |
    :host {
      --ha-card-background: transparent;
      border-radius: 18px;
      overflow: hidden;
    }
    /* Child internals stay clean */
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

---

## 🛠 Troubleshooting

- **Module doesn’t load**: Confirm resource URL & type. Hard-reload browser.
- **Cards snap oddly**: Adjust `grid` or disable `Disable Overlap`.
- **Overlaps happen**: Use `disable_overlap: true` - This is an experimental feature at the moment.
- **Layout didn’t persist**: Ensure **Apply** or `auto_save` on; check `storage_key`.
- **Imported design looks wrong**: Check version & cards exist. Re-apply/tweak canvas.

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

The bundle logs version in console:

```
drag-and-drop-card vX.Y.Z
```

## 🧾 Known bugs

A couple of bugs are already known: 

1. On some custom cards some of the dropdowns will cause the visual editor to dissappear until you select an option.
2. Card mod support on cards within the Drag-And-Drop-Card. This is currently not behaving as we would like and WILL NOT WORK!
3. ?? Probably more