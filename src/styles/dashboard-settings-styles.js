/*
 * CSS for the dashboard settings panel.
 *
 * Keeping the large style block isolated lets the settings controller focus on state and events while
 * this file owns layout, responsive rules, and visual polish for the settings UI.
 */

export function getSettingsStyles() {
  return `
  .dialog.modern {
    width: min(calc(100vw - clamp(14px, 3vw, 40px)), 1720px);
    height: min(calc(100vh - clamp(16px, 4vw, 44px)), 1100px);
    max-width: 1720px;
    max-height: 1100px;
    display:flex;
    flex-direction:column;
    border-radius: 18px;
    overflow: hidden;
  }
  .dlg-head { display:flex; justify-content:space-between; align-items:center; padding:14px 18px; background:var(--primary-color); color:#fff; }
  .dlg-head h3 { margin:0; font-size:1.1rem; font-weight:700; }
  .icon-btn { border:0; background:transparent; color:inherit; cursor:pointer; display:grid; place-items:center; }
  .settings-tabs {
    flex:0 0 auto;
    display:flex;
    align-items:center;
    gap:8px;
    justify-content:center;
    padding:10px 14px;
    border-bottom:1px solid var(--divider-color, rgba(0,0,0,.12));
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--ha-card-background, #fff) 94%, var(--primary-color, #03a9f4) 6%),
        color-mix(in oklab, var(--card-background-color, #fff) 98%, transparent)
      );
    overflow-x:auto;
    overflow-y:hidden;
    scrollbar-width:thin;
  }
  .settings-tabs::-webkit-scrollbar{ height:6px; }
  .settings-tabs::-webkit-scrollbar-thumb{
    background:color-mix(in oklab, var(--primary-text-color, #111827) 22%, transparent);
    border-radius:999px;
  }
  .settings-tab {
    flex:0 0 auto;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:8px;
    min-height:38px;
    padding:0 13px;
    border-radius:999px;
    border:1px solid color-mix(in oklab, var(--divider-color, rgba(0,0,0,.18)) 78%, transparent);
    background:transparent;
    color:color-mix(in oklab, var(--primary-text-color, #111827) 82%, transparent);
    font:700 .9rem/1 "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
    letter-spacing:0;
    cursor:pointer;
    transition:background .16s ease, border-color .16s ease, color .16s ease, box-shadow .16s ease, transform .12s ease;
  }
  .settings-tab ha-icon{ --mdc-icon-size:18px; }
  .settings-tab:hover{
    transform:translateY(-1px);
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 36%, transparent);
    background:color-mix(in oklab, var(--primary-color, #03a9f4) 10%, transparent);
  }
  .settings-tab.active,
  .settings-tab[aria-selected="true"]{
    color:var(--text-primary-color, #fff);
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 44%, transparent);
    background:
      linear-gradient(
        180deg,
        color-mix(in oklab, var(--primary-color, #03a9f4) 86%, rgba(255,255,255,.14)),
        color-mix(in oklab, var(--primary-color, #03a9f4) 74%, rgba(0,0,0,.06))
      );
    box-shadow:
      0 10px 22px color-mix(in oklab, var(--primary-color, #03a9f4) 22%, transparent),
      inset 0 1px 0 rgba(255,255,255,.18);
  }
  .settings-tab:focus-visible{
    outline:none;
    box-shadow:
      0 0 0 2px color-mix(in oklab, var(--primary-color, #03a9f4) 54%, transparent),
      0 0 0 5px color-mix(in oklab, var(--primary-color, #03a9f4) 14%, transparent);
  }
  .settings-body {
    flex:1 1 auto;
    min-height:0;
    display:grid;
    row-gap:clamp(18px, 2vw, 26px);
    column-gap:0;
    padding:clamp(14px, 1.8vw, 22px);
    overflow:auto;
    grid-template-columns:minmax(0, min(100%, 1040px));
    align-content:start;
    justify-content:center;
    justify-items:stretch;
  }
  .settings-body > .card[hidden]{
    display:none !important;
  }
  .settings-body > .card{
    width:100%;
    justify-self:center;
  }
  .card { background:var(--ha-card-background, #fff); border-radius:12px; box-shadow:0 1px 6px rgba(0,0,0,.08); padding:12px 14px; display:flex; flex-direction:column; gap:10px; min-width:0; }
  .card h4 { margin:0; font-size:1rem; font-weight:700; color:var(--primary-text-color); }
  .row { display:flex; align-items:center; gap:12px; }
  .row label { flex:1; font-size:.95rem; }
  .row input[type="text"], .row input[type="number"], .row input[type="password"], .row select { flex:1; padding:8px; border:1px solid var(--divider-color, rgba(0,0,0,.2)); border-radius:8px; background:var(--card-background-color, #fff); }
  .range-wrap { display:flex; align-items:center; gap:12px; }
  .range-wrap input[type="range"] { flex:1; }
  .range-wrap output { width:64px; text-align:right; color:var(--secondary-text-color); font-weight:600; }
  .chips { display:flex; gap:8px; flex-wrap:wrap; }
  .chip { border:1px solid var(--divider-color, rgba(0,0,0,.25)); padding:6px 10px; border-radius:999px; background:transparent; cursor:pointer; font-size:.9rem; }
  .chip[aria-pressed="true"] { background:var(--primary-color); color:#fff; border-color:transparent; }
  .preview { border:1px dashed var(--divider-color, rgba(0,0,0,.25)); border-radius:10px; padding:10px; }

  .ss-style-picker{
    display:grid;
    gap:12px;
    margin-top:4px;
  }
  .ss-style-toolbar{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:12px;
  }
  .ss-style-current{
    min-width:0;
    display:grid;
    gap:2px;
  }
  .ss-style-current strong{
    color:var(--primary-text-color);
    font-size:.95rem;
  }
  .ss-style-current span{
    color:var(--secondary-text-color);
    font-size:.84rem;
    line-height:1.35;
  }
  .ss-style-nav{
    display:flex;
    align-items:center;
    gap:8px;
  }
  .ss-style-nav button{
    width:36px;
    height:36px;
    display:grid;
    place-items:center;
    border-radius:999px;
    border:1px solid var(--divider-color, rgba(0,0,0,.18));
    background:var(--card-background-color, #fff);
    color:var(--primary-text-color);
    cursor:pointer;
  }
  .ss-style-carousel{
    display:flex;
    gap:12px;
    overflow-x:auto;
    overflow-y:hidden;
    padding:2px 2px 10px;
    scroll-snap-type:x mandatory;
    scrollbar-width:thin;
  }
  .ss-style-card{
    flex:0 0 min(360px, 82vw);
    display:grid;
    grid-template-rows:172px minmax(54px, auto);
    gap:10px;
    padding:9px;
    border-radius:14px;
    border:1px solid color-mix(in oklab, var(--divider-color, rgba(0,0,0,.18)) 82%, transparent);
    background:
      linear-gradient(180deg, color-mix(in oklab, #fff 18%, transparent), transparent),
      var(--ha-card-background, #fff);
    color:var(--primary-text-color);
    text-align:left;
    cursor:pointer;
    scroll-snap-align:start;
    transition:border-color .16s ease, box-shadow .16s ease, transform .14s ease;
  }
  .ss-style-card:hover{
    transform:translateY(-1px);
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 36%, transparent);
  }
  .ss-style-card[aria-selected="true"]{
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 68%, transparent);
    box-shadow:
      0 0 0 2px color-mix(in oklab, var(--primary-color, #03a9f4) 18%, transparent),
      0 14px 30px color-mix(in oklab, var(--primary-color, #03a9f4) 16%, transparent);
  }
  .ss-style-preview{
    position:relative;
    height:172px;
    min-height:172px;
    border-radius:11px;
    overflow:hidden;
    isolation:isolate;
    background:#06101d;
    color:#fff;
  }
  .ss-style-preview::before{
    content:"";
    position:absolute;
    inset:0;
    z-index:-2;
    background:
      radial-gradient(90% 75% at 66% 14%, rgba(255,255,255,.18), transparent 32%),
      radial-gradient(95% 80% at 50% 112%, rgba(69,134,176,.55), transparent 48%),
      linear-gradient(180deg, #03070d, #081424 62%, #030609);
  }
  .ss-style-preview::after{
    content:"";
    position:absolute;
    inset:0;
    z-index:-1;
    background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,0) 36%, rgba(0,0,0,.22));
  }
  .ss-style-preview--minimal_scandi::before,
  .ss-style-preview--ultra_minimal_dots::before{
    background:
      radial-gradient(85% 44% at 58% 74%, rgba(120,161,183,.46), transparent 58%),
      linear-gradient(180deg, #020407, #07101a 66%, #030508);
  }
  .ss-style-preview--cinematic_dashboard::before{
    background:
      radial-gradient(44% 58% at 75% 38%, rgba(231,116,47,.58), transparent 48%),
      linear-gradient(130deg, #020308, #121015 48%, #030406);
  }
  .ss-style-preview--sci_fi_hud::before{
    background:
      radial-gradient(circle at 22% 44%, rgba(168,85,247,.28), transparent 34%),
      repeating-radial-gradient(circle at 22% 44%, rgba(34,211,238,.26) 0 1px, transparent 1px 18px),
      linear-gradient(135deg, #03030a, #070a16 60%, #02030a);
  }
  .ss-style-preview--dynamic_ambient::before{
    background:
      radial-gradient(70% 58% at 54% 50%, rgba(255,172,91,.56), transparent 42%),
      linear-gradient(135deg, #3d195f, #18213e 54%, #090713);
  }
  .ss-style-preview--floating_islands::before{
    background:
      radial-gradient(82% 62% at 54% 110%, rgba(84,148,198,.64), transparent 55%),
      linear-gradient(180deg, #05111e, #071827 62%, #03070c);
  }
  .ss-style-preview--home_intelligence::before{
    background:
      radial-gradient(52% 54% at 92% 12%, rgba(153,102,55,.32), transparent 42%),
      linear-gradient(135deg, #100b08, #08090d 52%, #030305);
  }
  .ss-style-preview--planetary_orbital::before{
    background:
      radial-gradient(circle at 52% 52%, rgba(80,150,202,.82) 0 15%, transparent 16%),
      radial-gradient(70% 70% at 52% 52%, rgba(252,183,91,.24), transparent 48%),
      linear-gradient(145deg, #03070d, #08111d 60%, #020306);
  }
  .ss-style-preview[data-ss-preview-image="1"]::before{
    background:
      linear-gradient(90deg, rgba(0,0,0,.4), rgba(0,0,0,.08) 48%, rgba(0,0,0,.28)),
      linear-gradient(180deg, rgba(0,0,0,.04), rgba(0,0,0,.42)),
      var(--ss-preview-bg-image);
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
  }
  .ss-mini-time{
    position:absolute;
    left:22px;
    top:26px;
    font-size:34px;
    font-weight:300;
    letter-spacing:.02em;
  }
  .ss-mini-date{
    position:absolute;
    left:24px;
    top:68px;
    font-size:11px;
    opacity:.86;
  }
  .ss-mini-rail{
    position:absolute;
    left:18px;
    right:18px;
    bottom:18px;
    display:grid;
    grid-template-columns:repeat(3, minmax(0, 1fr));
    gap:8px;
  }
  .ss-mini-chip{
    height:34px;
    min-height:34px;
    border-radius:10px;
    border:1px solid rgba(255,255,255,.12);
    background:
      linear-gradient(180deg, rgba(255,255,255,.14), rgba(255,255,255,.05)),
      rgba(18,22,34,.52);
    backdrop-filter:blur(8px);
  }
  .ss-style-meta{
    display:grid;
    align-content:start;
    gap:3px;
    min-height:54px;
  }
  .ss-style-name{
    font-weight:800;
    font-size:.92rem;
  }
  .ss-style-note{
    color:var(--secondary-text-color);
    font-size:.82rem;
    line-height:1.35;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    overflow:hidden;
  }
  .ss-entity-list{
    display:grid;
    gap:10px;
    margin-top:4px;
  }
  .ss-entity-row{
    display:grid;
    grid-template-columns:minmax(180px, .8fr) minmax(0, 1.2fr);
    gap:12px;
    align-items:start;
    padding:12px;
    border-radius:14px;
    border:1px solid color-mix(in oklab, var(--divider-color, rgba(0,0,0,.18)) 82%, transparent);
    background:
      linear-gradient(180deg, color-mix(in oklab, #fff 16%, transparent), transparent),
      color-mix(in oklab, var(--ha-card-background, #fff) 92%, var(--primary-color, #03a9f4) 8%);
  }
  .ss-entity-slot{
    display:flex;
    align-items:flex-start;
    gap:10px;
    min-width:0;
  }
  .ss-entity-slot ha-icon{
    --mdc-icon-size:22px;
    flex:0 0 auto;
    color:color-mix(in oklab, var(--primary-color, #03a9f4) 72%, var(--primary-text-color) 28%);
  }
  .ss-entity-slot strong,
  .ss-entity-slot span{
    display:block;
  }
  .ss-entity-slot strong{
    color:var(--primary-text-color);
    font-size:.92rem;
    line-height:1.2;
  }
  .ss-entity-slot span{
    margin-top:3px;
    color:var(--secondary-text-color);
    font-size:.8rem;
    line-height:1.35;
  }
  .ss-entity-fields{
    display:grid;
    grid-template-columns:minmax(0, 1.2fr) minmax(120px, .8fr);
    gap:10px;
    align-items:start;
  }
  .ss-entity-picker-host,
  .ss-entity-fields input{
    min-width:0;
  }
  .ss-entity-picker-host ha-entity-picker{
    width:100%;
  }
  .ss-entity-fields input{
    width:100%;
    box-sizing:border-box;
  }
  @media (max-width: 820px){
    .ss-entity-row,
    .ss-entity-fields{
      grid-template-columns:1fr;
    }
  }

  /* ---- Grid demo ---- */
  .grid-demo{
    --g: 100px;                               /* cell size injected via JS */
    --line-minor: color-mix(in oklab, var(--primary-color, #03a9f4) 26%, var(--primary-text-color, #111827) 18%);
    --line-major: color-mix(in oklab, var(--primary-color, #03a9f4) 54%, var(--primary-text-color, #111827) 22%);
    --line-axis: color-mix(in oklab, var(--primary-color, #03a9f4) 82%, var(--primary-text-color, #111827) 10%);
    --grid-surface: color-mix(in oklab, var(--ha-card-background, #fff) 86%, var(--primary-color, #03a9f4) 6%);
    --bg-fade: linear-gradient(180deg, rgba(255,255,255,.16) 0%, rgba(0,0,0,.035) 100%);

    position: relative;
    height: 180px;
    border-radius: 14px;
    border: 1px solid color-mix(in oklab, var(--primary-color, #03a9f4) 30%, var(--divider-color, rgba(0,0,0,.18)));
    overflow: hidden;
    background:
      radial-gradient(circle at 18% 24%, color-mix(in oklab, var(--primary-color, #03a9f4) 20%, transparent) 0 1px, transparent 2px 100%),
      var(--bg-fade),
      repeating-linear-gradient(
        to bottom,
        var(--line-axis) 0 2px,
        transparent 2px calc(var(--g) * 10)
      ),
      repeating-linear-gradient(
        to right,
        var(--line-axis) 0 2px,
        transparent 2px calc(var(--g) * 10)
      ),
      /* major lines every 5 cells (thicker) - horizontal */
      repeating-linear-gradient(
        to bottom,
        var(--line-major) 0 1.5px,
        transparent 1.5px calc(var(--g) * 5)
      ),
      /* major lines every 5 cells (thicker) - vertical */
      repeating-linear-gradient(
        to right,
        var(--line-major) 0 1.5px,
        transparent 1.5px calc(var(--g) * 5)
      ),
      /* minor lines each cell - horizontal */
      repeating-linear-gradient(
        to bottom,
        var(--line-minor) 0 1px,
        transparent 1px var(--g)
      ),
      /* minor lines each cell - vertical */
      repeating-linear-gradient(
        to right,
        var(--line-minor) 0 1px,
        transparent 1px var(--g)
      );
    background-color: var(--grid-surface);
    box-shadow:
      inset 0 0 0 1px color-mix(in oklab, var(--primary-color, #03a9f4) 16%, transparent),
      inset 0 18px 48px rgba(255,255,255,.08);
  }

  .grid-meta-badge{
    position: absolute; top: 8px; right: 8px;
    padding: 6px 10px;
    color: var(--primary-text-color);
    background: color-mix(in oklab, var(--ha-card-background, #fff) 88%, var(--primary-color, #03a9f4) 8%);
    border: 1px solid color-mix(in oklab, var(--primary-color, #03a9f4) 34%, var(--divider-color, rgba(0,0,0,.24)));
    border-radius: 999px;
    font-size: .86rem;
    letter-spacing:.2px;
    display:flex; align-items:center; gap:8px;
    backdrop-filter: blur(4px);
    pointer-events:none;
    box-shadow: 0 8px 20px rgba(0,0,0,.10);
  }

    /* --- NEW nicer headers / captions / swatches / tooltips --- */

    .caption { margin:0 0 8px 0; color:var(--secondary-text-color); font-size:.9rem; }

    .swatches { display:flex; gap:8px; flex-wrap:wrap; }
    /* Make swatches more obvious as clickable targets by thickening their border */
    .swatch { width:28px; height:28px; border-radius:6px; border:2px solid rgba(0,0,0,.25); cursor:pointer; position:relative; }
    .swatch[aria-pressed="true"]::after { content:""; position:absolute; inset:-3px; border:2px solid var(--primary-color); border-radius:8px; }

    .inline-help { display:inline-flex; align-items:center; gap:6px; color:var(--secondary-text-color); font-size:.9rem; }
    .inline-help ha-icon { opacity:.8; }

    .input-file { display:flex; gap:10px; align-items:center; }
    .input-file input[type="file"] { display:none; }
    .input-file .file-btn { border:1px solid var(--divider-color,rgba(0,0,0,.25)); border-radius:8px; padding:8px 12px; cursor:pointer; background:var(--ha-card-background,#fff); }
    .thumb { width:64px; height:42px; border-radius:6px; background-size:cover; background-position:center; border:1px solid rgba(0,0,0,.12); }

    .divider { height:1px; background:var(--divider-color, rgba(0,0,0,.12)); margin:8px 0; opacity:.7; }

    .section-head { display:flex; align-items:center; gap:8px; margin:0 0 8px 0; padding-bottom:6px; border-bottom:1px solid var(--divider-color, rgba(0,0,0,.12)); }
    .section-head ha-icon { opacity:.9; }
    .setting { display:flex; flex-direction:column; gap:6px; margin:8px 0; }
    .setting .row { display:flex; align-items:center; gap:12px; }
    .setting .title { display:flex; align-items:center; gap:8px; min-width:220px; }
    .setting .title ha-icon { opacity:.9; }
    .setting .control { display:flex; align-items:center; gap:10px; flex:1; }
    .setting .hint { margin-left:32px; color:var(--secondary-text-color); font-size:.88rem; line-height:1.35; }
    .setting .suffix { opacity:.6; margin-left:4px; }
    .range-wrap { display:flex; align-items:center; gap:12px; flex:1; }
    .range-wrap output { width:64px; text-align:right; color:var(--secondary-text-color); font-weight:600; }

    /* --- Tabs manager UI --- */
    .tabs-card .tab-row { display:flex; align-items:center; gap:10px; padding:6px 0; border-bottom:1px solid var(--divider-color, rgba(0,0,0,.08)); }
    .tabs-card .tab-row:last-child { border-bottom:0; }
    .tabs-card .tab-name { flex:1; display:flex; align-items:center; gap:8px; }
    .tabs-card .tab-name input { flex:1; padding:6px 8px; border:1px solid var(--divider-color, rgba(0,0,0,.25)); border-radius:8px; background:var(--ha-card-background, #fff); }
    .tabs-card .tab-actions { display:flex; align-items:center; gap:8px; }
    .sidebar-item-grid{
      display:grid;
      grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));
      gap:10px;
      width:100%;
    }
    .sidebar-item-toggle{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      min-height:46px;
      padding:0 12px;
      border:1px solid var(--divider-color, rgba(0,0,0,.14));
      border-radius:12px;
      background:color-mix(in oklab, var(--ha-card-background, #fff) 86%, transparent);
    }
    .sidebar-item-toggle > span{
      display:inline-flex;
      align-items:center;
      gap:8px;
      min-width:0;
      font-weight:700;
    }
    .sidebar-item-toggle ha-icon{ --mdc-icon-size:18px; }
    .sidebar-pill-grid{
      display:grid;
      grid-template-columns:repeat(auto-fit, minmax(148px, 1fr));
      gap:10px;
      width:100%;
    }
    .sidebar-pill-grid.compact{
      grid-template-columns:repeat(auto-fit, minmax(118px, 1fr));
    }
    .sidebar-choice-pill{
      position:relative;
      min-width:0;
      cursor:pointer;
    }
    .sidebar-choice-pill input{
      position:absolute;
      inset:0;
      opacity:0;
      pointer-events:none;
    }
    .sidebar-choice-pill .pill-shell{
      min-height:44px;
      display:flex;
      align-items:center;
      justify-content:flex-start;
      gap:9px;
      padding:0 12px;
      border:1px solid var(--divider-color, rgba(0,0,0,.16));
      border-radius:999px;
      background:color-mix(in oklab, var(--ha-card-background, #fff) 88%, transparent);
      color:var(--primary-text-color);
      font-weight:800;
      transition:background .16s ease, border-color .16s ease, box-shadow .16s ease, transform .16s ease;
    }
    .sidebar-choice-pill .pill-shell ha-icon{ --mdc-icon-size:18px; opacity:.88; }
    .sidebar-choice-pill input:checked + .pill-shell{
      border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 56%, transparent);
      background:color-mix(in oklab, var(--primary-color, #03a9f4) 16%, var(--ha-card-background, #fff));
      box-shadow:0 8px 18px color-mix(in oklab, var(--primary-color, #03a9f4) 16%, transparent);
    }
    .sidebar-choice-pill:hover .pill-shell{ transform:translateY(-1px); }
    .sidebar-media-setting .control.stack{
      display:grid;
      gap:8px;
      align-items:stretch;
    }
    .sidebar-media-actions{
      display:flex;
      flex-wrap:wrap;
      gap:8px;
      justify-content:flex-end;
    }
    .file-action{
      cursor:pointer;
    }
    .sidebar-media-preview{
      min-height:92px;
      display:grid;
      place-items:center;
      gap:7px;
      overflow:hidden;
      border-radius:16px;
      border:1px dashed color-mix(in oklab, var(--divider-color, rgba(0,0,0,.18)) 80%, transparent);
      background:color-mix(in oklab, var(--ha-card-background, #fff) 88%, transparent);
      color:var(--secondary-text-color);
      font-weight:750;
    }
    .sidebar-media-preview img{
      width:100%;
      height:132px;
      object-fit:cover;
      display:block;
    }
    .sidebar-media-preview.has-image{
      border-style:solid;
      padding:0;
    }
    .sidebar-order-list{
      display:grid;
      gap:8px;
      width:100%;
    }
    .sidebar-order-row,
    .sidebar-order-empty{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      min-height:48px;
      padding:8px 10px;
      border-radius:14px;
      border:1px solid color-mix(in oklab, var(--divider-color, rgba(0,0,0,.14)) 84%, transparent);
      background:color-mix(in oklab, var(--ha-card-background, #fff) 90%, transparent);
      box-shadow:inset 0 1px 0 rgba(255,255,255,.04);
    }
    .sidebar-order-empty{
      justify-content:center;
      color:var(--secondary-text-color);
      font-weight:750;
    }
    .sidebar-order-row-main{
      min-width:0;
      display:flex;
      align-items:center;
      gap:9px;
    }
    .sidebar-order-row-main strong{
      min-width:0;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      font-size:.92rem;
    }
    .sidebar-order-handle,
    .sidebar-order-icon{
      width:30px;
      height:30px;
      display:grid;
      place-items:center;
      border-radius:11px;
      color:var(--secondary-text-color);
      background:rgba(127,127,127,.08);
    }
    .sidebar-order-icon{
      color:var(--primary-color, #03a9f4);
      background:color-mix(in oklab, var(--primary-color, #03a9f4) 12%, transparent);
    }
    .sidebar-order-actions{
      display:flex;
      align-items:center;
      gap:6px;
    }
    .sidebar-order-actions .icon-btn:disabled{
      opacity:.38;
      cursor:not-allowed;
    }
    .layers-card .layer-toggle-row{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      padding:8px 0 10px;
    }
    .layers-card .layer-row{
      display:grid;
      grid-template-columns:minmax(0, 1.35fr) minmax(110px, .7fr) 78px auto auto;
      gap:10px;
      align-items:center;
      padding:10px 0;
      border-bottom:1px solid var(--divider-color, rgba(0,0,0,.08));
    }
    .layers-card .layer-row:last-child{ border-bottom:0; }
    .layers-card .layer-row input[type="text"]{
      width:100%;
      min-width:0;
    }
    .layers-card .layer-row input[type="color"]{
      width:48px;
      min-width:48px;
      height:40px;
      border:1px solid var(--divider-color, rgba(0,0,0,.2));
      border-radius:12px;
      padding:4px;
      background:var(--ha-card-background, #fff);
      cursor:pointer;
    }
    .layers-card .layer-empty{
      padding:14px 16px;
      border:1px dashed var(--divider-color, rgba(0,0,0,.14));
      border-radius:14px;
      background:color-mix(in oklab, var(--secondary-background-color, #111827) 20%, transparent);
      color:var(--secondary-text-color);
      font-size:.88rem;
    }
    .layers-card .layer-chip{
      display:inline-flex;
      align-items:center;
      gap:8px;
      min-height:36px;
      padding:0 12px;
      border-radius:999px;
      border:1px solid var(--divider-color, rgba(255,255,255,.14));
      background:color-mix(in oklab, var(--primary-background-color, #0e1116) 18%, transparent);
      font-size:.82rem;
      font-weight:700;
      color:var(--primary-text-color, #f5f5f5);
    }
    .layers-card .layer-chip ha-icon{ --mdc-icon-size:16px; }
    .layers-card .layer-actions{
      display:flex;
      align-items:center;
      gap:8px;
    }
    .packages-list { display:flex; flex-direction:column; gap:14px; }
    .package-tools {
      display:flex;
      align-items:center;
      gap:10px;
      flex-wrap:wrap;
      margin-bottom:4px;
    }
    .feature-quick-actions {
      display:flex;
      align-items:center;
      gap:10px;
      flex-wrap:wrap;
      margin-bottom:2px;
    }
    .feature-quick-actions .mini-action {
      border-radius:999px;
    }
    .package-sync-status {
      border:1px dashed var(--divider-color, rgba(255,255,255,.16));
      border-radius:12px;
      padding:10px 12px;
      color:var(--secondary-text-color);
      font-size:.88rem;
      line-height:1.45;
      background:color-mix(in srgb, var(--card-background-color, #111) 90%, transparent);
      white-space:pre-line;
    }
    .package-empty {
      padding:18px 16px;
      border:1px dashed var(--divider-color, rgba(255,255,255,.16));
      border-radius:14px;
      color:var(--secondary-text-color);
      background:color-mix(in oklab, var(--primary-background-color, #0f1117) 24%, transparent);
    }
    .package-reload-note {
      display:flex;
      align-items:flex-start;
      gap:10px;
      padding:12px 14px;
      border-radius:14px;
      border:1px solid color-mix(in srgb, var(--warning-color, #f59e0b) 35%, transparent);
      background:color-mix(in srgb, var(--warning-color, #f59e0b) 9%, transparent);
      color:var(--secondary-text-color);
      font-size:.9rem;
      line-height:1.45;
    }
    .package-reload-note ha-icon {
      color:var(--warning-color, #f59e0b);
      margin-top:2px;
      flex:0 0 auto;
    }
    .package-card {
      border:1px solid var(--divider-color, rgba(255,255,255,.12));
      border-radius:16px;
      padding:14px;
      display:flex;
      flex-direction:column;
      gap:12px;
      background:color-mix(in oklab, var(--ha-card-background, #111827) 94%, transparent);
    }
    .package-head {
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:12px;
      flex-wrap:wrap;
    }
    .package-head-main {
      flex:1 1 260px;
      min-width:220px;
      display:flex;
      flex-direction:column;
      gap:8px;
    }
    .package-title-input,
    .package-file-input,
    .package-yaml-textarea {
      width:100%;
      box-sizing:border-box;
      padding:10px 12px;
      border:1px solid var(--divider-color, rgba(255,255,255,.16));
      border-radius:12px;
      background:color-mix(in oklab, var(--primary-background-color, #0e1116) 20%, transparent);
      color:inherit;
      font:inherit;
    }
    .package-title-input { font-weight:700; }
    .package-file-row {
      display:grid;
      grid-template-columns:minmax(0, 1fr) auto;
      gap:12px;
      align-items:center;
    }
    .package-toggle {
      display:inline-flex;
      align-items:center;
      gap:8px;
      white-space:nowrap;
      color:var(--secondary-text-color);
      font-size:.9rem;
    }
    .package-actions {
      display:flex;
      align-items:center;
      gap:8px;
      flex-wrap:wrap;
    }
    .package-yaml-wrap {
      display:flex;
      flex-direction:column;
      gap:8px;
    }
    .package-yaml-wrap > span,
    .package-file-row > label {
      font-size:.84rem;
      font-weight:700;
      letter-spacing:.04em;
      text-transform:uppercase;
      color:var(--secondary-text-color);
    }
    .package-yaml-textarea {
      min-height:220px;
      resize:vertical;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
      font-size:.89rem;
      line-height:1.5;
      white-space:pre;
      tab-size:2;
    }
    .feature-list {
      display:flex;
      flex-direction:column;
      gap:12px;
    }
    .feature-card {
      border:1px solid var(--divider-color, rgba(255,255,255,.12));
      border-radius:16px;
      padding:14px 15px;
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:16px;
      background:color-mix(in oklab, var(--ha-card-background, #111827) 94%, transparent);
    }
    .feature-card-main {
      min-width:0;
      flex:1 1 auto;
      display:flex;
      flex-direction:column;
      gap:8px;
    }
    .feature-card-head {
      display:flex;
      align-items:center;
      gap:10px;
      flex-wrap:wrap;
      min-width:0;
    }
    .feature-type-badge {
      display:inline-flex;
      align-items:center;
      gap:6px;
      padding:6px 10px;
      border-radius:999px;
      font-size:.76rem;
      font-weight:700;
      letter-spacing:.04em;
      text-transform:uppercase;
      background:color-mix(in srgb, var(--primary-color, #3b82f6) 16%, transparent);
      color:var(--primary-color, #3b82f6);
      border:1px solid color-mix(in srgb, var(--primary-color, #3b82f6) 24%, transparent);
      white-space:nowrap;
    }
    .feature-card-title {
      min-width:0;
      font-size:1rem;
      font-weight:700;
      color:var(--primary-text-color);
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    .feature-card-meta {
      display:flex;
      align-items:center;
      gap:10px;
      flex-wrap:wrap;
      color:var(--secondary-text-color);
      font-size:.86rem;
    }
    .feature-card-meta code {
      font-size:.82rem;
    }
    .feature-card-summary {
      color:var(--secondary-text-color);
      font-size:.9rem;
      line-height:1.45;
      display:-webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient:vertical;
      overflow:hidden;
      word-break:break-word;
    }
    .feature-card-actions {
      display:flex;
      align-items:center;
      gap:8px;
      flex-wrap:wrap;
      justify-content:flex-end;
      flex:0 0 auto;
    }
    .feature-editor-shell {
      position:fixed;
      inset:0;
      z-index:10020;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:22px;
    }
    .feature-editor-backdrop {
      position:absolute;
      inset:0;
      background:rgba(5, 8, 16, .62);
      backdrop-filter:blur(5px);
    }
    .feature-editor-modal {
      position:relative;
      z-index:1;
      width:min(980px, calc(100vw - 32px));
      max-height:min(90vh, 940px);
      overflow:auto;
      display:flex;
      flex-direction:column;
      gap:16px;
      padding:18px;
      border-radius:22px;
      border:1px solid var(--divider-color, rgba(255,255,255,.14));
      background:color-mix(in oklab, var(--card-background-color, #111827) 98%, black 2%);
      box-shadow:0 28px 70px rgba(0,0,0,.45);
    }
    .feature-editor-head {
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap:12px;
    }
    .feature-editor-head h5 {
      margin:0 0 4px;
      font-size:1.15rem;
    }
    .feature-editor-head p {
      margin:0;
      color:var(--secondary-text-color);
      font-size:.92rem;
      line-height:1.45;
    }
    .feature-editor-grid {
      display:grid;
      grid-template-columns:repeat(2, minmax(0, 1fr));
      gap:14px;
    }
    .feature-editor-field {
      display:flex;
      flex-direction:column;
      gap:7px;
    }
    .feature-editor-field.full {
      grid-column:1 / -1;
    }
    .feature-editor-field label {
      display:inline-flex;
      align-items:center;
      gap:7px;
      width:fit-content;
      font-size:.8rem;
      font-weight:700;
      letter-spacing:.04em;
      text-transform:uppercase;
      color:var(--secondary-text-color);
    }
    .feature-editor-field label ha-icon {
      --mdc-icon-size:16px;
      color:var(--primary-color, #03a9f4);
      opacity:.9;
    }
    .feature-editor-field input {
      width:100%;
      min-height:44px;
      box-sizing:border-box;
      padding:0 12px;
      border-radius:8px;
      border:1px solid color-mix(in oklab, var(--divider-color, rgba(255,255,255,.16)) 82%, transparent);
      background:
        linear-gradient(180deg, rgba(255,255,255,.045), transparent),
        color-mix(in oklab, var(--card-background-color, #111827) 88%, var(--primary-background-color, #050812));
      color:var(--primary-text-color);
      font:650 .94rem/1.2 "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      outline:none;
      transition:border-color .16s ease, box-shadow .16s ease, background .16s ease;
    }
    .feature-editor-field input:hover {
      border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 28%, var(--divider-color, rgba(255,255,255,.16)));
      background:
        linear-gradient(180deg, rgba(255,255,255,.06), transparent),
        color-mix(in oklab, var(--card-background-color, #111827) 91%, var(--primary-color, #03a9f4) 5%);
    }
    .feature-editor-field input:focus {
      border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 62%, transparent);
      box-shadow:
        0 0 0 3px color-mix(in oklab, var(--primary-color, #03a9f4) 16%, transparent),
        inset 0 1px 0 rgba(255,255,255,.05);
    }
    .feature-editor-field input[readonly] {
      cursor:default;
      color:color-mix(in oklab, var(--primary-text-color, #f8fafc) 82%, var(--secondary-text-color, #94a3b8));
      border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 24%, var(--divider-color, rgba(255,255,255,.16)));
      background:
        linear-gradient(180deg, color-mix(in oklab, var(--primary-color, #03a9f4) 8%, transparent), transparent),
        color-mix(in oklab, var(--card-background-color, #111827) 90%, var(--primary-color, #03a9f4) 5%);
    }
    .feature-editor-field textarea {
      min-height:300px;
      resize:vertical;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
      font-size:.9rem;
      line-height:1.55;
      white-space:pre;
      tab-size:2;
    }
    .feature-yaml-field {
      gap:10px;
    }
    .feature-yaml-label-row {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      flex-wrap:wrap;
    }
    .feature-yaml-format {
      display:inline-flex;
      align-items:center;
      gap:6px;
      min-height:26px;
      padding:0 9px;
      border-radius:999px;
      border:1px solid color-mix(in oklab, var(--primary-color, #03a9f4) 22%, transparent);
      background:color-mix(in oklab, var(--primary-color, #03a9f4) 8%, transparent);
      color:var(--secondary-text-color);
      font-size:.76rem;
      font-weight:800;
      letter-spacing:.03em;
      text-transform:uppercase;
    }
    .feature-yaml-format ha-icon {
      --mdc-icon-size:15px;
      color:var(--primary-color, #03a9f4);
    }
    .feature-yaml-editor {
      --ddc-yaml-border:color-mix(in oklab, var(--divider-color, rgba(255,255,255,.16)) 78%, transparent);
      --ddc-yaml-bg:color-mix(in oklab, var(--primary-background-color, #070b13) 84%, var(--card-background-color, #111827));
      display:grid;
      grid-template-rows:auto minmax(0, 1fr) auto;
      overflow:hidden;
      border-radius:14px;
      border:1px solid var(--ddc-yaml-border);
      background:var(--ddc-yaml-bg);
      color:var(--primary-text-color);
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,.05),
        0 18px 42px rgba(0,0,0,.18);
    }
    .feature-yaml-toolbar {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      padding:10px 12px;
      border-bottom:1px solid var(--ddc-yaml-border);
      background:
        linear-gradient(90deg, color-mix(in oklab, var(--primary-color, #03a9f4) 13%, transparent), transparent 58%),
        rgba(127,127,127,.045);
    }
    .feature-yaml-title {
      min-width:0;
      display:flex;
      align-items:center;
      gap:9px;
      font-size:.86rem;
      font-weight:800;
    }
    .feature-yaml-title span:last-child {
      min-width:0;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    .feature-yaml-dot {
      width:9px;
      height:9px;
      border-radius:999px;
      background:var(--primary-color, #03a9f4);
      box-shadow:0 0 0 4px color-mix(in oklab, var(--primary-color, #03a9f4) 15%, transparent);
      flex:0 0 auto;
    }
    .feature-yaml-metrics {
      display:flex;
      align-items:center;
      justify-content:flex-end;
      gap:8px;
      flex-wrap:wrap;
      color:var(--secondary-text-color);
      font-size:.78rem;
      font-weight:750;
      white-space:nowrap;
    }
    .feature-yaml-metrics span {
      display:inline-flex;
      align-items:center;
      min-height:26px;
      padding:0 9px;
      border-radius:999px;
      border:1px solid var(--ddc-yaml-border);
      background:rgba(127,127,127,.06);
    }
    .feature-yaml-code {
      display:grid;
      grid-template-columns:54px minmax(0, 1fr);
      min-height:clamp(340px, 48vh, 540px);
      max-height:min(58vh, 620px);
      overflow:hidden;
    }
    .feature-yaml-gutter {
      overflow:hidden;
      border-right:1px solid var(--ddc-yaml-border);
      background:
        linear-gradient(180deg, rgba(255,255,255,.035), transparent),
        rgba(127,127,127,.055);
      color:color-mix(in oklab, var(--secondary-text-color, #94a3b8) 70%, transparent);
      user-select:none;
    }
    .feature-yaml-gutter pre,
    .feature-yaml-editor textarea {
      box-sizing:border-box;
      margin:0;
      padding:14px 12px;
      font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
      font-size:.9rem;
      line-height:1.58;
      tab-size:2;
    }
    .feature-yaml-gutter pre {
      min-height:100%;
      text-align:right;
      white-space:pre;
      will-change:transform;
    }
    .feature-yaml-textarea-wrap {
      min-width:0;
      min-height:0;
      background:
        linear-gradient(90deg, color-mix(in oklab, var(--primary-color, #03a9f4) 5%, transparent), transparent 32ch),
        repeating-linear-gradient(
          180deg,
          transparent 0,
          transparent calc(1.58em - 1px),
          rgba(255,255,255,.026) calc(1.58em - 1px),
          rgba(255,255,255,.026) 1.58em
        );
    }
    .feature-yaml-editor textarea {
      display:block;
      width:100%;
      height:100%;
      min-height:100%;
      resize:none;
      overflow:auto;
      white-space:pre;
      color:var(--primary-text-color);
      caret-color:var(--primary-color, #03a9f4);
      background:transparent;
      border:0;
      border-radius:0;
      box-shadow:none;
      outline:none;
    }
    .feature-yaml-editor textarea::placeholder {
      color:color-mix(in oklab, var(--secondary-text-color, #94a3b8) 58%, transparent);
    }
    .feature-yaml-editor textarea:focus {
      box-shadow:inset 0 0 0 2px color-mix(in oklab, var(--primary-color, #03a9f4) 48%, transparent);
    }
    .feature-yaml-editor textarea::selection {
      background:color-mix(in oklab, var(--primary-color, #03a9f4) 32%, transparent);
    }
    .feature-yaml-editor textarea::-webkit-scrollbar {
      width:10px;
      height:10px;
    }
    .feature-yaml-editor textarea::-webkit-scrollbar-thumb {
      border:2px solid transparent;
      border-radius:999px;
      background:color-mix(in oklab, var(--primary-color, #03a9f4) 34%, rgba(148,163,184,.46));
      background-clip:padding-box;
    }
    .feature-yaml-editor textarea::-webkit-scrollbar-track {
      background:rgba(127,127,127,.055);
    }
    .feature-yaml-footer {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      flex-wrap:wrap;
      padding:9px 12px;
      border-top:1px solid var(--ddc-yaml-border);
      background:rgba(127,127,127,.04);
      color:var(--secondary-text-color);
      font-size:.8rem;
      line-height:1.4;
    }
    .feature-yaml-status {
      display:inline-flex;
      align-items:center;
      gap:6px;
      min-height:26px;
      max-width:min(100%, 520px);
      padding:0 9px;
      border-radius:999px;
      border:1px solid var(--ddc-yaml-border);
      background:rgba(127,127,127,.06);
      font-weight:800;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }
    .feature-yaml-status::before {
      content:"";
      width:7px;
      height:7px;
      border-radius:999px;
      background:var(--secondary-text-color);
    }
    .feature-yaml-status.is-valid {
      color:var(--success-color, #22c55e);
      border-color:color-mix(in oklab, var(--success-color, #22c55e) 35%, transparent);
      background:color-mix(in oklab, var(--success-color, #22c55e) 9%, transparent);
    }
    .feature-yaml-status.is-valid::before {
      background:var(--success-color, #22c55e);
    }
    .feature-yaml-status.is-invalid {
      color:var(--error-color, #ef4444);
      border-color:color-mix(in oklab, var(--error-color, #ef4444) 38%, transparent);
      background:color-mix(in oklab, var(--error-color, #ef4444) 9%, transparent);
    }
    .feature-yaml-status.is-invalid::before {
      background:var(--error-color, #ef4444);
    }
    .feature-editor-footer {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:12px;
      flex-wrap:wrap;
    }
    .feature-editor-toggle {
      display:inline-flex;
      align-items:center;
      gap:10px;
      color:var(--secondary-text-color);
      font-size:.92rem;
    }
    .feature-editor-actions {
      display:flex;
      align-items:center;
      gap:10px;
      flex-wrap:wrap;
      margin-left:auto;
    }
    @media (max-width: 760px) {
      .feature-card {
        flex-direction:column;
      }
      .feature-card-actions {
        width:100%;
        justify-content:flex-start;
      }
      .feature-editor-grid {
        grid-template-columns:1fr;
      }
      .feature-yaml-toolbar,
      .feature-yaml-footer {
        align-items:flex-start;
        flex-direction:column;
      }
      .feature-yaml-code {
        grid-template-columns:44px minmax(0, 1fr);
        min-height:320px;
        max-height:56vh;
      }
      .feature-yaml-gutter pre,
      .feature-yaml-editor textarea {
        padding-inline:8px;
        font-size:.84rem;
      }
    }
    .icon-btn.danger { color: var(--error-color, #b00020); }

    /* gradient swatches */
    .gradients { display:flex; gap:8px; flex-wrap:wrap; }
    .gradient { width:44px; height:28px; border-radius:8px; border:2px solid rgba(0,0,0,.25); cursor:pointer; position:relative; }
    .gradient[aria-pressed="true"]::after { content:""; position:absolute; inset:-3px; border:2px solid var(--primary-color); border-radius:10px; }

    /* Section hierarchy */
    .section-head {
      display:flex; align-items:center; gap:10px; margin:6px 0 6px;
    }
    .section-head ha-icon { opacity:.85; }
    .section-head h4 {
      margin:0;
      font-size:1.1rem;          /* larger than setting labels */
      font-weight:700;
      letter-spacing:.2px;
    }

    /* Setting rows */
    .setting { padding:10px 0; }
    .setting .row {
      display:flex; align-items:center; gap:14px;
    }
    .setting .title {
      flex:0 0 240px;            /* left column width */
      display:flex; align-items:center; gap:8px;
      font-weight:600;
    }
    .setting .title label, .setting .title span { font-size:.98rem; }
    .setting .control { flex:1; display:flex; align-items:center; gap:10px; }

    /* Hints and captions */
    .caption { margin:0 0 4px; color:var(--secondary-text-color); font-size:.92rem; }
    .tab-intro {
      margin:2px 0 8px;
      padding:8px 0 8px 12px;
      border-left:3px solid color-mix(in oklab, var(--primary-color, #03a9f4) 70%, transparent);
      color:color-mix(in oklab, var(--primary-text-color, #111827) 76%, var(--secondary-text-color, #64748b));
      font-size:.92rem;
      line-height:1.45;
    }
    .tab-intro strong {
      display:block;
      margin-bottom:2px;
      color:var(--primary-text-color, #111827);
      font-weight:800;
    }
    .hint    { margin:6px 0 0;  color:var(--secondary-text-color); font-size:.88rem; }

    /* Dividers */
    .divider {
      height:1px;
      background:linear-gradient(
        to right,
        transparent,
        var(--divider-color, rgba(0,0,0,.12)),
        transparent
      );
      margin:12px 0;
    }

    /* Inputs */
    /* Inputs and selects within the modern dialog now have a more prominent outline for better visibility. */
    .modern select,
    .modern input[type="text"],
    .modern input[type="number"],
    .modern input[type="password"],
    .modern textarea {
      padding:8px 10px;
      border:2px solid var(--divider-color,rgba(0,0,0,.25));
      border-radius:10px;
      background:var(--ha-card-background,#fff);
    }

    /* Style for the "Add tab" text field to make it stand out */
    #ddc-new-tab-name {
      flex:1;
      padding:8px 10px;
      border:2px solid var(--primary-color);
      border-radius:10px;
      background:var(--ha-card-background,#fff);
      font-weight:600;
    }

    /* Style the manual grid size input alongside the slider */
    .range-wrap input[type="number"] {
      width:80px;
      padding:6px 8px;
      border:1px solid var(--divider-color, rgba(0,0,0,.25));
      border-radius:8px;
      background:var(--card-background-color, #fff);
      text-align:center;
    }

    /* Harmonise the appearance of background configuration sections (image, particles, YouTube) */
    .setting[data-bg-section] .stack {
      display:flex;
      flex-direction:column;
      gap:10px;
    }
    .setting[data-bg-section] .stack input[type="text"],
    .setting[data-bg-section] .stack input[type="number"],
    .setting[data-bg-section] .stack select {
      width:100%;
      padding:8px 10px;
      border:2px solid var(--divider-color, rgba(0,0,0,.25));
      border-radius:10px;
      background:var(--ha-card-background,#fff);
    }
    .particle-settings-grid{
      display:grid;
      grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));
      gap:12px;
      margin-top:2px;
    }
    .particle-control{
      min-width:0;
      display:flex;
      flex-direction:column;
      gap:8px;
      padding:12px;
      border-radius:12px;
      border:1px solid var(--ddc-settings-line, var(--divider-color, rgba(0,0,0,.16)));
      background:
        linear-gradient(180deg, rgba(255,255,255,.045), rgba(255,255,255,.012)),
        color-mix(in oklab, var(--ha-card-background, #fff) 78%, transparent);
    }
    .particle-control > label,
    .particle-control .particle-label{
      display:flex;
      align-items:center;
      gap:8px;
      min-width:0;
      color:var(--primary-text-color);
      font-size:.9rem;
      font-weight:800;
      line-height:1.25;
    }
    .particle-control ha-icon{ --mdc-icon-size:18px; flex:0 0 auto; }
    .particle-control .row{
      justify-content:space-between;
      gap:10px;
    }
    .particle-color-row{
      display:grid;
      grid-template-columns:48px minmax(0, 1fr);
      gap:10px;
      align-items:center;
    }
    .particle-color-row input[type="color"]{
      width:48px;
      height:42px;
      padding:2px;
      border-radius:12px;
      border:1px solid var(--ddc-settings-line, var(--divider-color, rgba(0,0,0,.16)));
      background:var(--ddc-settings-field, var(--ha-card-background, #fff));
    }
    .particle-control.is-disabled{
      opacity:.58;
    }

    /* Slider + output */
    .range-wrap { display:flex; align-items:center; gap:10px; width:100%; }
    .range-wrap input[type="range"] { flex:1; }
    .range-wrap output {
      min-width:64px; text-align:right; font-variant-numeric:tabular-nums;
      color:var(--secondary-text-color);
    }

    /* Chips row spacing */
    .chips { display:flex; gap:8px; flex-wrap:wrap; }

    /* ----- Hard category separators ----- */
    section.card {
      border-bottom: 2px solid var(--divider-strong, rgba(255,255,255,.15));
      margin-bottom: 20px;
      padding-bottom: 24px;
    }

    section.card:last-of-type {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    section.card:hover > .section-head h4 {
      color: var(--accent-color, var(--primary-color));
      transition: color .25s ease;
    }

    .section-head {
      background: linear-gradient(90deg, var(--accent-color, #2563eb) 0%, transparent 70%);
      padding: 4px 10px;
      border-radius: 6px;
    }
    .section-head h4 {
      color: #fff;
    }

    /* Tighten the empty space after Background image and between sections */
    section.card .setting:last-child { margin-bottom: 0; padding-bottom: 0; }
    section.card { margin-bottom: 16px; padding-bottom: 20px; }
    .section-head { margin-top: 4px; }

    /* Place Tabs section right after Appearance without big gaps */
    .tabs-card { margin-top: 8px; }

    /* File inputs: clearer Upload/Delete buttons */
    .input-file { display:flex; align-items:center; gap:12px; flex-wrap:wrap; }
    .file-btn, #ddc-clear-bg {
      height: 36px; padding: 0 14px; border-radius: 10px; font-weight: 700;
      border: 1px solid transparent; cursor: pointer;
    }
    .file-btn {
      background: var(--primary-color); color: var(--text-primary-color, #fff);
    }
    #ddc-clear-bg {
      background: var(--error-color, #ef4444); color:#fff;
    }
    #ddc-clear-bg:hover { filter: brightness(1.05); }
    .file-btn:hover { filter: brightness(1.05); }

    /* BG option controls */
    .bg-opts { display:grid; grid-template-columns: minmax(138px, 168px) minmax(0, 1fr); gap:12px 18px; margin-top:8px; }
    .bg-opts label { display:flex; align-items:center; gap:8px; font-weight:600; }
    .bg-opts select, .bg-opts input[type="range"] {
      width: 100%; padding:8px 10px; border:1px solid var(--divider-color,rgba(0,0,0,.25));
      border-radius:10px; background:var(--ha-card-background,#1e1e1e);
    }
    .bg-opts output { min-width:52px; text-align:right; color:var(--secondary-text-color); }

    /* Background image preview thumb */
    .thumb {
      width: 72px; height: 42px; border-radius: 8px;
      background-size: cover; background-position: center center;
      border: 1px solid var(--divider-color, rgba(0,0,0,.25));
    }

    .default-bg-gallery {
      display:grid;
      gap:10px;
      width:100%;
      padding:10px;
      border:1px solid color-mix(in oklab, var(--divider-color, rgba(0,0,0,.18)) 80%, transparent);
      border-radius:14px;
      background:color-mix(in oklab, var(--ha-card-background, #fff) 86%, transparent);
    }
    .default-bg-gallery-head {
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:10px;
      min-width:0;
    }
    .default-bg-gallery-title {
      display:inline-flex;
      align-items:center;
      gap:8px;
      min-width:0;
      font-weight:800;
    }
    .default-bg-gallery-title ha-icon { --mdc-icon-size:18px; color:var(--primary-color, #03a9f4); }
    .default-bg-gallery-actions {
      display:inline-flex;
      align-items:center;
      gap:6px;
      flex:0 0 auto;
    }
    .default-bg-gallery-actions .icon-btn {
      width:32px;
      height:32px;
      border-radius:999px;
      border:1px solid var(--divider-color, rgba(0,0,0,.18));
      background:color-mix(in oklab, var(--primary-background-color, #0e1116) 16%, transparent);
    }
    .default-bg-gallery-actions .icon-btn:hover {
      background:color-mix(in oklab, var(--primary-color, #03a9f4) 16%, transparent);
    }
    .default-bg-track {
      display:flex;
      gap:10px;
      overflow-x:auto;
      overscroll-behavior-inline:contain;
      scroll-snap-type:x proximity;
      padding:2px 2px 6px;
      scrollbar-width:thin;
    }
    .default-bg-card {
      appearance:none;
      -webkit-appearance:none;
      flex:0 0 136px;
      display:grid;
      gap:7px;
      padding:6px;
      border:1px solid color-mix(in oklab, var(--divider-color, rgba(0,0,0,.2)) 80%, transparent);
      border-radius:12px;
      background:color-mix(in oklab, var(--card-background-color, #fff) 88%, transparent);
      color:var(--primary-text-color);
      cursor:pointer;
      text-align:left;
      scroll-snap-align:start;
      transition:transform .12s ease, border-color .16s ease, box-shadow .16s ease;
    }
    .default-bg-card:hover {
      transform:translateY(-1px);
      border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 42%, transparent);
    }
    .default-bg-card[aria-pressed="true"] {
      border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 72%, transparent);
      box-shadow:0 0 0 2px color-mix(in oklab, var(--primary-color, #03a9f4) 20%, transparent);
    }
    .default-bg-preview {
      width:100%;
      aspect-ratio:16 / 10;
      border-radius:9px;
      background-size:cover;
      background-position:center;
      background-color:rgba(127,127,127,.14);
      box-shadow:inset 0 0 0 1px rgba(255,255,255,.08);
    }
    .default-bg-card span {
      min-width:0;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
      font-size:.78rem;
      font-weight:800;
      line-height:1.2;
    }

    .media-browser-dialog{
      width:min(calc(100vw - 32px), 980px);
      height:min(calc(100vh - 32px), 760px);
      display:flex;
      flex-direction:column;
    }

    .media-browser-toolbar{
      display:flex;
      align-items:center;
      gap:10px;
      padding:14px 18px;
      border-bottom:1px solid var(--divider-color, rgba(0,0,0,.12));
    }

    .media-browser-path{
      flex:1;
      min-width:0;
      font-size:.92rem;
      color:var(--secondary-text-color);
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }

    .media-browser-status{
      min-height:20px;
      padding:10px 18px 0;
      font-size:.88rem;
      color:var(--secondary-text-color);
    }

    .media-browser-status.is-error{
      color:var(--error-color, #ef4444);
    }

    .media-browser-list{
      flex:1;
      min-height:0;
      overflow:auto;
      padding:14px 18px 18px;
      display:flex;
      flex-direction:column;
      gap:10px;
    }

    .media-browser-empty{
      padding:22px 16px;
      border:1px dashed var(--divider-color, rgba(0,0,0,.16));
      border-radius:14px;
      color:var(--secondary-text-color);
      text-align:center;
    }

    .media-browser-item{
      display:grid;
      grid-template-columns:minmax(0, 1fr) auto;
      gap:10px;
      align-items:center;
    }

    .media-browser-primary{
      appearance:none;
      -webkit-appearance:none;
      width:100%;
      border:1px solid var(--divider-color, rgba(0,0,0,.16));
      background:var(--ha-card-background, rgba(0,0,0,.12));
      border-radius:14px;
      padding:10px 12px;
      display:grid;
      grid-template-columns:56px minmax(0, 1fr) auto;
      gap:12px;
      align-items:center;
      text-align:left;
      color:inherit;
      cursor:pointer;
    }

    .media-browser-primary:hover{
      border-color:color-mix(in oklab, var(--primary-color, #ff9800) 26%, transparent);
      background:color-mix(in oklab, var(--primary-color, #ff9800) 10%, var(--ha-card-background, rgba(0,0,0,.12)));
    }

    .media-browser-preview{
      width:56px;
      height:44px;
      border-radius:12px;
      display:grid;
      place-items:center;
      border:1px solid var(--divider-color, rgba(0,0,0,.16));
      background:color-mix(in oklab, var(--primary-background-color, #101318) 82%, transparent);
      background-size:cover;
      background-position:center;
      overflow:hidden;
    }

    .media-browser-preview ha-icon{
      --mdc-icon-size:22px;
      opacity:.78;
    }

    .media-browser-copy{
      min-width:0;
      display:flex;
      flex-direction:column;
      gap:4px;
    }

    .media-browser-title{
      font-weight:700;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }

    .media-browser-meta{
      font-size:.82rem;
      color:var(--secondary-text-color);
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }

    /* ---- Render the background image via a pseudo element so opacity doesn't fade content ---- */
    .ddc-canvas { position: relative; z-index: 0; }
    .ddc-canvas::before{
      content:""; position:absolute; inset:0; z-index:0; pointer-events:none;
      background-image: var(--ddc-bg-image, none);
      background-repeat: var(--ddc-bg-repeat, no-repeat);
      background-size: var(--ddc-bg-size, cover);
      background-position: var(--ddc-bg-position, center center);
      background-attachment: var(--ddc-bg-attachment, scroll);
      opacity: var(--ddc-bg-opacity, 1);
    }
    .ddc-canvas > * { position: relative; z-index: 1; }

    /* Tabs manager polish */
    .tab-row {
      display:flex; align-items:center; gap:10px;
      margin-bottom:10px; padding:8px;
      border:1px solid var(--divider-color, rgba(255,255,255,.12));
      border-radius:8px; background:var(--ha-card-background, rgba(255,255,255,.04));
    }
    .tab-row:hover { background: var(--ha-card-background, rgba(255,255,255,.08)); }

    .tab-name { flex:1; display:flex; align-items:center; gap:8px; }
    .tab-name input {
      background: var(--ha-card-background, #1f1f1f);
      border:1px solid var(--divider-color, rgba(255,255,255,.12));
      color: var(--primary-text-color);
      padding:6px 8px; border-radius:6px;
    }

    .tab-icon-wrap { position:relative; display:flex; align-items:center; gap:6px; }
    .tab-icon-wrap ha-icon { opacity:.9; }

    .mode-chips {
      display:flex; gap:6px;
    }
    .mode-chips .chip {
      border-radius:10px; padding:4px 8px; font-weight:600;
      background: var(--ha-card-background, #222); border:1px solid var(--divider-color, rgba(255,255,255,.12));
    }
    .mode-chips .chip[aria-pressed="true"] {
      background: var(--primary-color); color: #fff; border-color: transparent;
    }

    .grid-meta-badge ha-icon{ opacity:.9; }

    .color-pair {
      display:flex;
      gap:8px;
      align-items:center;
    }
    .color-pair input[type="color"] {
      width:44px;
      height:36px;
      border:0;
      background:transparent;
      padding:0;
    }
    .color-pair input[type="text"] {
      flex:1;
    }

    .color-stack {
      display:flex;
      flex-direction:column;
      gap:8px;
    }

    .setting-actions{
      display:flex;
      justify-content:flex-end;
      margin-bottom:4px;
    }

    .section-actions{
      display:flex;
      justify-content:flex-end;
      flex-wrap:wrap;
      gap:10px;
      margin:0 0 8px;
    }

    .mini-action{
      appearance:none;
      -webkit-appearance:none;
      display:inline-flex;
      align-items:center;
      gap:6px;
      height:32px;
      padding:0 12px;
      border-radius:999px;
      border:1px solid var(--divider-color, rgba(255,255,255,.14));
      background:color-mix(in oklab, var(--primary-background-color, #0e1116) 18%, transparent);
      color:var(--primary-text-color, #e5e7eb);
      font:inherit;
      font-size:.86rem;
      font-weight:700;
      cursor:pointer;
      transition:transform .08s ease, background .16s ease, border-color .16s ease;
    }

    .mini-action:hover{
      transform:translateY(-1px);
      background:color-mix(in oklab, var(--primary-color, #ff9800) 22%, transparent);
      border-color:color-mix(in oklab, var(--primary-color, #ff9800) 38%, transparent);
    }

    .mini-action.primary{
      background:color-mix(in oklab, var(--primary-color, #ff9800) 78%, rgba(255,255,255,.08));
      border-color:color-mix(in oklab, var(--primary-color, #ff9800) 52%, transparent);
      color:var(--text-primary-color, #fff);
    }

    .mini-action.primary:hover{
      background:color-mix(in oklab, var(--primary-color, #ff9800) 88%, rgba(255,255,255,.06));
    }

    .mini-action ha-icon{ --mdc-icon-size:16px; }

    .color-group {
      padding:8px 10px;
      border-radius:10px;
      border:1px solid var(--divider-color, rgba(0,0,0,.15));
      background:var(--ha-card-background, rgba(0,0,0,0.12));
    }

    .color-group-title {
      font-size:0.75rem;
      text-transform:uppercase;
      letter-spacing:.04em;
      opacity:.8;
      margin-bottom:4px;
      display:flex;
      justify-content:space-between;
    }

    .swatches,
    .gradients {
      display:flex;
      flex-wrap:wrap;
      gap:6px;
      margin-top:4px;
    }

  .footer { display:flex; justify-content:flex-end; gap:10px; padding:14px 18px; border-top:1px solid var(--divider-color, rgba(0,0,0,.12)); flex-wrap:wrap; }
  .btn.primary { background:var(--primary-color); color:#fff; border:0; border-radius:8px; padding:8px 16px; font-weight:600; cursor:pointer; }
  .btn.secondary { background:transparent; border:1px solid var(--divider-color, rgba(0,0,0,.25)); border-radius:8px; padding:8px 16px; cursor:pointer; }

  /* Settings polish pass: one coherent system for all dashboard settings. */
  .dialog.modern{
    --ddc-settings-surface:#ffffff;
    --ddc-settings-surface-raised:#f6f8fb;
    --ddc-settings-bg:#eef3f8;
    --ddc-settings-text:#172033;
    --ddc-settings-muted:#5f6b7a;
    --ddc-settings-line:rgba(15, 23, 42, .14);
    --ddc-settings-field:#ffffff;
    --ddc-settings-field-border:rgba(15, 23, 42, .22);
    --ddc-settings-accent-soft:color-mix(in oklab, var(--primary-color, #03a9f4) 12%, transparent);
    border:1px solid color-mix(in oklab, var(--primary-color, #03a9f4) 16%, var(--ddc-settings-line));
    color:var(--ddc-settings-text);
    background:
      linear-gradient(180deg, color-mix(in oklab, var(--ddc-settings-surface) 96%, var(--primary-color, #03a9f4) 4%), var(--ddc-settings-surface-raised));
    box-shadow:0 24px 80px rgba(0,0,0,.36);
  }
  .modal[data-ddc-theme="dark"] .dialog.modern{
    --ddc-settings-surface:#121821;
    --ddc-settings-surface-raised:#17212d;
    --ddc-settings-bg:#0b1118;
    --ddc-settings-text:#eef5fb;
    --ddc-settings-muted:#a8b6c6;
    --ddc-settings-line:rgba(171, 201, 222, .20);
    --ddc-settings-field:#0d131b;
    --ddc-settings-field-border:rgba(171, 201, 222, .30);
    --ddc-settings-accent-soft:color-mix(in oklab, var(--primary-color, #03a9f4) 18%, transparent);
  }
  .dialog.modern > .dlg-head{
    min-height:58px;
    padding:14px 20px;
    background:
      linear-gradient(90deg, color-mix(in oklab, var(--primary-color, #03a9f4) 94%, #111827 6%), color-mix(in oklab, var(--primary-color, #03a9f4) 74%, #111827 26%));
  }
  .dialog.modern > .dlg-head h3{
    font-size:1.02rem;
    letter-spacing:.01em;
  }
  .dialog.modern > .dlg-head .icon-btn{
    width:38px;
    height:38px;
    border-radius:9px;
    background:rgba(255,255,255,.1);
    transition:background .16s ease, transform .12s ease;
  }
  .dialog.modern > .dlg-head .icon-btn:hover{
    background:rgba(255,255,255,.18);
    transform:translateY(-1px);
  }
  .settings-tabs{
    gap:9px;
    padding:12px 16px;
    background:
      linear-gradient(180deg, color-mix(in oklab, var(--ddc-settings-surface-raised) 94%, var(--primary-color, #03a9f4) 6%), var(--ddc-settings-bg));
    border-bottom:1px solid var(--ddc-settings-line);
  }
  .settings-tab{
    min-height:40px;
    padding:0 14px;
    border-radius:999px;
    border-color:var(--ddc-settings-line);
    background:color-mix(in oklab, var(--ddc-settings-surface) 82%, transparent);
    color:var(--ddc-settings-muted);
  }
  .settings-tab.active,
  .settings-tab[aria-selected="true"]{
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 52%, transparent);
    box-shadow:
      0 10px 24px color-mix(in oklab, var(--primary-color, #03a9f4) 18%, transparent),
      inset 0 1px 0 rgba(255,255,255,.2);
  }
  .settings-body{
    row-gap:18px;
    padding:clamp(16px, 2vw, 24px);
    background:
      linear-gradient(180deg, color-mix(in oklab, var(--ddc-settings-bg) 74%, transparent), transparent 160px),
      var(--ddc-settings-bg);
  }
  .settings-body > .card{
    border:1px solid var(--ddc-settings-line);
    border-radius:14px;
    padding:18px 18px 20px;
    background:
      linear-gradient(180deg, rgba(255,255,255,.035), transparent 120px),
      var(--ddc-settings-surface);
    box-shadow:0 12px 34px rgba(0,0,0,.08);
  }
  section.card{
    margin-bottom:0;
    padding-bottom:20px;
    border-bottom:0;
  }
  .section-head{
    margin:0 0 6px;
    padding:0 0 12px;
    border-radius:0;
    border-bottom:1px solid var(--ddc-settings-line);
    background:none;
  }
  .section-head ha-icon{
    width:34px;
    height:34px;
    display:grid;
    place-items:center;
    border-radius:9px;
    background:var(--ddc-settings-accent-soft);
    color:var(--primary-color, #03a9f4);
    opacity:1;
  }
  .section-head h4,
  section.card:hover > .section-head h4{
    color:var(--ddc-settings-text);
    font-size:1.1rem;
    letter-spacing:0;
  }
  .tab-intro{
    margin:0 0 10px;
    padding:10px 12px;
    border:1px solid color-mix(in oklab, var(--primary-color, #03a9f4) 16%, var(--ddc-settings-line));
    border-left:3px solid color-mix(in oklab, var(--primary-color, #03a9f4) 68%, transparent);
    border-radius:10px;
    background:
      linear-gradient(90deg, color-mix(in oklab, var(--primary-color, #03a9f4) 8%, transparent), transparent 72%);
    color:var(--ddc-settings-muted);
  }
  .tab-intro strong{
    display:inline;
    margin-right:4px;
    color:var(--ddc-settings-text);
  }
  .setting{
    margin:0;
    padding:13px 0;
    border-top:1px solid color-mix(in oklab, var(--ddc-settings-line) 62%, transparent);
  }
  .tab-intro + .setting,
  .preview + .setting,
  .divider + .setting{
    border-top:0;
  }
  .setting .row{
    min-height:42px;
    align-items:center;
    gap:16px;
  }
  .setting .title{
    flex:0 0 250px;
    min-width:0;
    color:var(--ddc-settings-text);
    font-weight:750;
  }
  .setting .title ha-icon{
    --mdc-icon-size:19px;
    width:28px;
    color:color-mix(in oklab, var(--primary-color, #03a9f4) 78%, var(--ddc-settings-text) 22%);
    opacity:1;
  }
  .setting .title label,
  .setting .title span{
    font-size:.94rem;
    line-height:1.25;
  }
  .setting .control{
    min-width:0;
    justify-content:flex-start;
  }
  .setting .control > ha-switch{
    margin-left:auto;
  }
  .setting .hint,
  .hint{
    color:var(--ddc-settings-muted);
    font-size:.86rem;
    line-height:1.45;
  }
  .setting > .hint{
    margin:4px 0 0 36px;
    max-width:min(760px, calc(100% - 36px));
  }
  .setting-subcontrol{
    margin:8px 0 0 36px;
    max-width:min(760px, calc(100% - 36px));
    transition:opacity .16s ease;
  }
  .setting-subcontrol.is-disabled{
    opacity:.58;
  }
  .setting-doc-link{
    width:fit-content;
    max-width:min(760px, calc(100% - 36px));
    min-height:34px;
    display:inline-flex;
    align-items:center;
    gap:8px;
    margin:8px 0 0 36px;
    padding:6px 11px 6px 7px;
    border-radius:999px;
    border:1px solid color-mix(in oklab, var(--primary-color, #03a9f4) 28%, var(--ddc-settings-line));
    background:
      linear-gradient(90deg, color-mix(in oklab, var(--primary-color, #03a9f4) 14%, transparent), transparent),
      color-mix(in oklab, var(--ddc-settings-surface) 82%, transparent);
    color:color-mix(in oklab, var(--primary-color, #03a9f4) 78%, var(--ddc-settings-text));
    font-size:.82rem;
    font-weight:800;
    line-height:1.25;
    text-decoration:none;
    box-shadow:0 8px 22px color-mix(in oklab, var(--primary-color, #03a9f4) 8%, transparent);
    transition:transform .12s ease, border-color .16s ease, background .16s ease, box-shadow .16s ease;
  }
  .setting-doc-link:hover{
    transform:translateY(-1px);
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 58%, transparent);
    background:
      linear-gradient(90deg, color-mix(in oklab, var(--primary-color, #03a9f4) 21%, transparent), transparent),
      color-mix(in oklab, var(--ddc-settings-surface) 92%, var(--primary-color, #03a9f4) 8%);
    box-shadow:0 10px 26px color-mix(in oklab, var(--primary-color, #03a9f4) 14%, transparent);
  }
  .setting-doc-link:focus-visible{
    outline:none;
    box-shadow:
      0 0 0 3px color-mix(in oklab, var(--primary-color, #03a9f4) 18%, transparent),
      0 10px 26px color-mix(in oklab, var(--primary-color, #03a9f4) 14%, transparent);
  }
  .setting-doc-link .setting-doc-bang{
    width:20px;
    height:20px;
    display:grid;
    place-items:center;
    flex:0 0 auto;
    border-radius:999px;
    background:var(--primary-color, #03a9f4);
    color:var(--text-primary-color, #fff);
    font-size:.78rem;
    font-weight:900;
    box-shadow:0 0 0 4px color-mix(in oklab, var(--primary-color, #03a9f4) 13%, transparent);
  }
  .setting-doc-link ha-icon{
    --mdc-icon-size:15px;
    flex:0 0 auto;
    opacity:.82;
  }
  .dialog.modern .section-head .tab-doc-link{
    max-width:min(42%, 320px);
    min-height:32px;
    margin:0 0 0 auto;
    padding:5px 10px 5px 7px;
    align-self:center;
    white-space:nowrap;
  }
  .dialog.modern .section-head .tab-doc-link span:not(.setting-doc-bang){
    min-width:0;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .modern select,
  .modern input[type="text"],
  .modern input[type="number"],
  .modern input[type="password"],
  .modern textarea{
    min-height:42px;
    box-sizing:border-box;
    padding:8px 11px;
    border:1px solid var(--ddc-settings-field-border);
    border-radius:8px;
    background:
      linear-gradient(180deg, rgba(255,255,255,.04), transparent),
      var(--ddc-settings-field);
    color:var(--ddc-settings-text);
    -webkit-text-fill-color:var(--ddc-settings-text);
    outline:none;
    box-shadow:
      inset 0 0 0 1px color-mix(in oklab, var(--ddc-settings-surface) 66%, transparent),
      0 1px 2px rgba(0,0,0,.04);
    transition:border-color .16s ease, box-shadow .16s ease, background .16s ease;
  }
  .modern select{
    cursor:pointer;
    padding-right:32px;
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 32%, var(--ddc-settings-text) 18%);
  }
  .modern input::placeholder,
  .modern textarea::placeholder{
    color:color-mix(in oklab, var(--ddc-settings-muted) 76%, transparent);
    -webkit-text-fill-color:color-mix(in oklab, var(--ddc-settings-muted) 76%, transparent);
  }
  .modern select:hover,
  .modern input[type="text"]:hover,
  .modern input[type="number"]:hover,
  .modern input[type="password"]:hover,
  .modern textarea:hover{
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 52%, var(--ddc-settings-text) 12%);
    box-shadow:
      inset 0 0 0 1px color-mix(in oklab, var(--primary-color, #03a9f4) 10%, transparent),
      0 2px 8px rgba(0,0,0,.06);
  }
  .modern select:focus,
  .modern input[type="text"]:focus,
  .modern input[type="number"]:focus,
  .modern input[type="password"]:focus,
  .modern textarea:focus{
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 62%, transparent);
    box-shadow:
      0 0 0 3px color-mix(in oklab, var(--primary-color, #03a9f4) 16%, transparent),
      inset 0 0 0 1px color-mix(in oklab, var(--primary-color, #03a9f4) 18%, transparent);
  }
  #ddc-new-tab-name{
    border-color:var(--ddc-settings-line);
    font-weight:650;
  }
  .range-wrap{
    min-width:0;
  }
  .range-wrap input[type="range"]{
    accent-color:var(--primary-color, #03a9f4);
  }
  .range-wrap output,
  .unit{
    min-height:30px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    padding:0 10px;
    border-radius:999px;
    border:1px solid var(--ddc-settings-line);
    background:color-mix(in oklab, var(--ddc-settings-surface-raised) 72%, transparent);
    color:var(--ddc-settings-muted);
    font-weight:800;
    font-variant-numeric:tabular-nums;
  }
  .range-wrap input[type="number"]{
    width:86px;
    min-height:38px;
  }
  .dialog.modern .chip,
  .dialog.modern .mini-action,
  .dialog.modern .btn.primary,
  .dialog.modern .btn.secondary{
    min-height:38px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    gap:7px;
    border-radius:999px;
    font-weight:800;
    transition:transform .12s ease, border-color .16s ease, background .16s ease, box-shadow .16s ease;
  }
  .dialog.modern .chip{
    padding:0 13px;
    background:color-mix(in oklab, var(--ddc-settings-surface) 74%, transparent);
    border-color:var(--ddc-settings-line);
    color:var(--ddc-settings-text);
  }
  .dialog.modern .chip:hover,
  .dialog.modern .mini-action:hover,
  .dialog.modern .btn.secondary:hover{
    transform:translateY(-1px);
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 34%, var(--ddc-settings-line));
    background:var(--ddc-settings-accent-soft);
  }
  .dialog.modern .chip[aria-pressed="true"],
  .dialog.modern .mini-action.primary,
  .dialog.modern .btn.primary{
    background:linear-gradient(180deg, color-mix(in oklab, var(--primary-color, #03a9f4) 88%, rgba(255,255,255,.13)), color-mix(in oklab, var(--primary-color, #03a9f4) 76%, rgba(0,0,0,.08)));
    color:var(--text-primary-color, #fff);
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 48%, transparent);
    box-shadow:0 8px 20px color-mix(in oklab, var(--primary-color, #03a9f4) 18%, transparent);
  }
  .preview{
    border:1px solid var(--ddc-settings-line);
    border-radius:12px;
    padding:12px;
    background:color-mix(in oklab, var(--ddc-settings-surface-raised) 88%, var(--ddc-settings-bg));
  }
  .dialog.modern .grid-demo{
    --line-minor:color-mix(in oklab, var(--primary-color, #03a9f4) 30%, var(--ddc-settings-muted) 12%);
    --line-major:color-mix(in oklab, var(--primary-color, #03a9f4) 58%, var(--ddc-settings-muted) 12%);
    --line-axis:color-mix(in oklab, var(--primary-color, #03a9f4) 82%, var(--ddc-settings-text) 8%);
    --grid-surface:color-mix(in oklab, var(--ddc-settings-surface-raised) 88%, var(--primary-color, #03a9f4) 6%);
  }
  .dialog.modern .grid-meta-badge{
    color:var(--ddc-settings-muted);
    background:color-mix(in oklab, var(--ddc-settings-surface) 88%, var(--primary-color, #03a9f4) 8%);
  }
  .color-group,
  .package-sync-status,
  .package-reload-note,
  .package-empty,
  .layers-card .layer-empty{
    border-radius:12px;
    border-color:var(--ddc-settings-line);
    background:
      linear-gradient(180deg, rgba(255,255,255,.035), transparent),
      color-mix(in oklab, var(--ddc-settings-surface-raised) 84%, transparent);
  }
  .color-group-title{
    letter-spacing:.03em;
    opacity:1;
    color:var(--ddc-settings-muted);
  }
  .swatch,
  .gradient{
    border-color:var(--ddc-settings-line);
    box-shadow:inset 0 1px 0 rgba(255,255,255,.18);
  }
  .tabs-card .tab-row,
  .layers-card .layer-row,
  .feature-card{
    border:1px solid var(--ddc-settings-line);
    border-radius:12px;
    padding:12px;
    background:
      linear-gradient(180deg, rgba(255,255,255,.03), transparent),
      color-mix(in oklab, var(--ddc-settings-surface-raised) 92%, transparent);
  }
  .tabs-card .tab-row,
  .layers-card .layer-row{
    margin-top:8px;
  }
  .feature-card{
    transition:border-color .16s ease, background .16s ease, transform .12s ease;
  }
  .feature-card:hover{
    transform:translateY(-1px);
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 28%, var(--ddc-settings-line));
  }
  .feature-type-badge{
    border-radius:999px;
  }
  .footer{
    padding:14px 20px;
    border-top:1px solid var(--ddc-settings-line);
    background:color-mix(in oklab, var(--ddc-settings-surface) 92%, var(--primary-color, #03a9f4) 8%);
  }
  .footer .btn{
    min-width:112px;
  }

  /* Dark/light-safe overrides for nested settings widgets that define their
     own surfaces earlier in the stylesheet. */
  .dialog.modern .ss-style-current strong,
  .dialog.modern .ss-style-name,
  .dialog.modern .ss-entity-slot strong,
  .dialog.modern .tab-name input,
  .dialog.modern #ddc-new-tab-name{
    color:var(--ddc-settings-text);
    -webkit-text-fill-color:var(--ddc-settings-text);
  }
  .dialog.modern .ss-style-current span,
  .dialog.modern .ss-style-note,
  .dialog.modern .ss-entity-slot span,
  .dialog.modern .media-browser-meta,
  .dialog.modern .feature-card-meta,
  .dialog.modern .feature-card-summary{
    color:var(--ddc-settings-muted);
  }
  .dialog.modern .ss-style-nav button{
    border-color:var(--ddc-settings-line);
    background:color-mix(in oklab, var(--ddc-settings-surface-raised) 88%, transparent);
    color:var(--ddc-settings-text);
  }
  .dialog.modern .ss-style-nav button:hover{
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 44%, var(--ddc-settings-line));
    background:var(--ddc-settings-accent-soft);
  }
  .dialog.modern .ss-style-carousel::-webkit-scrollbar{
    height:8px;
  }
  .dialog.modern .ss-style-carousel::-webkit-scrollbar-thumb{
    border-radius:999px;
    background:color-mix(in oklab, var(--ddc-settings-muted) 58%, transparent);
  }
  .dialog.modern .ss-style-card{
    border-color:var(--ddc-settings-line);
    background:
      linear-gradient(180deg, rgba(255,255,255,.035), transparent),
      var(--ddc-settings-surface-raised);
    color:var(--ddc-settings-text);
    box-shadow:0 10px 24px rgba(0,0,0,.12);
  }
  .dialog.modern .ss-style-card[aria-selected="true"]{
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 68%, var(--ddc-settings-line));
  }
  .dialog.modern .ss-style-meta{
    color:var(--ddc-settings-text);
  }
  .dialog.modern .ss-entity-row,
  .dialog.modern .tab-row,
  .dialog.modern .tabs-card .tab-row{
    border-color:var(--ddc-settings-line);
    background:
      linear-gradient(180deg, rgba(255,255,255,.025), transparent),
      color-mix(in oklab, var(--ddc-settings-surface-raised) 92%, transparent);
  }
  .dialog.modern .ss-entity-slot ha-icon,
  .dialog.modern .tab-icon-wrap ha-icon{
    color:color-mix(in oklab, var(--primary-color, #03a9f4) 78%, var(--ddc-settings-text) 22%);
  }
  .dialog.modern .ss-entity-fields input,
  .dialog.modern .tabs-card .tab-name input,
  .dialog.modern .tab-name input,
  .dialog.modern #ddc-new-tab-name{
    min-height:38px;
    border:1px solid var(--ddc-settings-field-border);
    border-radius:8px;
    background:
      linear-gradient(180deg, rgba(255,255,255,.04), transparent),
      var(--ddc-settings-field);
    color:var(--ddc-settings-text);
    -webkit-text-fill-color:var(--ddc-settings-text);
    box-shadow:inset 0 0 0 1px color-mix(in oklab, var(--ddc-settings-surface) 46%, transparent);
  }
  .dialog.modern .ss-entity-fields input::placeholder,
  .dialog.modern .tabs-card .tab-name input::placeholder,
  .dialog.modern #ddc-new-tab-name::placeholder{
    color:color-mix(in oklab, var(--ddc-settings-muted) 78%, transparent);
    -webkit-text-fill-color:color-mix(in oklab, var(--ddc-settings-muted) 78%, transparent);
  }
  .dialog.modern .ss-entity-fields input:focus,
  .dialog.modern .tabs-card .tab-name input:focus,
  .dialog.modern #ddc-new-tab-name:focus{
    border-color:color-mix(in oklab, var(--primary-color, #03a9f4) 66%, transparent);
    outline:none;
    box-shadow:
      0 0 0 3px color-mix(in oklab, var(--primary-color, #03a9f4) 18%, transparent),
      inset 0 0 0 1px color-mix(in oklab, var(--primary-color, #03a9f4) 18%, transparent);
  }
  .card-wrapper > .chip,
  .card-wrapper > .chip:hover{
    position:absolute !important;
    top:50% !important;
    left:50% !important;
    width:max-content !important;
    max-width:calc(100% - 28px) !important;
    min-height:0 !important;
    padding:8px 10px !important;
    border-radius:16px !important;
    border:1px solid rgba(255,255,255,.16) !important;
    background:linear-gradient(135deg, rgba(13,18,28,.78) 0%, rgba(29,36,48,.88) 100%) !important;
    box-shadow:0 10px 28px rgba(0,0,0,.28) !important;
    transform:translate(-50%, -50%) scale(var(--ddc-edit-ui-scale, 1)) !important;
  }
  .card-wrapper > .chip .mini:hover{
    transform:none !important;
  }

  @media (min-width: 1380px) {
    .settings-body{
      grid-template-columns:minmax(0, min(100%, 1040px));
      column-gap:0;
      justify-content:center;
    }
    .card[aria-labelledby="behaviour-head"],
    .tabs-card,
    .layers-card,
    .packages-card{
      grid-column:auto;
    }
  }

  @media (min-width: 1280px) {
    .tabs-card, .layers-card, .packages-card { grid-column: auto; }
  }

  @media (max-width: 899px){
    .dialog.modern{
      width:min(calc(100vw - 12px), 1540px);
      height:min(calc(100vh - 12px), 1100px);
      border-radius:16px;
    }
    .settings-body{ grid-template-columns: 1fr; }
    .settings-tabs{
      padding:9px 10px;
      justify-content:flex-start;
    }
    .settings-tab{
      min-height:36px;
      padding-inline:11px;
      font-size:.84rem;
    }
    .setting .row{ flex-direction:column; align-items:stretch; gap:10px; }
    .setting .title{ flex:0 0 auto; min-width:0; }
    .setting .hint{ margin-left:0; }
    .setting-doc-link{
      max-width:100%;
      margin-left:0;
    }
    .dialog.modern .section-head{
      flex-wrap:wrap;
    }
    .dialog.modern .section-head .tab-doc-link{
      width:100%;
      max-width:100%;
      margin-left:0;
      justify-content:flex-start;
    }
    .bg-opts{ grid-template-columns: 1fr; }
    .footer > .btn{ flex:1 1 160px; }
    .media-browser-dialog{ width:min(calc(100vw - 12px), 980px); height:min(calc(100vh - 12px), 760px); }
    .media-browser-item{ grid-template-columns:1fr; }
    .media-browser-item > .mini-action{ justify-self:flex-start; }
    .media-browser-primary{ grid-template-columns:48px minmax(0, 1fr) auto; }
    .media-browser-preview{ width:48px; height:40px; }
    .media-browser-toolbar{ flex-wrap:wrap; }
    .package-file-row{ grid-template-columns:1fr; }
    .package-tools{ flex-direction:column; align-items:stretch; }
    .layers-card .layer-row{ grid-template-columns:1fr; gap:8px; }
    .layers-card .layer-actions{ flex-wrap:wrap; }
  }
  `;
}
