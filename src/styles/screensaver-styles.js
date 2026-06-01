/*
 * CSS fragments used by the screensaver overlay.
 *
 * The screensaver module imports these style builders to keep preset rendering, shadow DOM styles, and
 * page-level global styles in one reusable place.
 */

export function getScreenSaverModernCss() {
  return `
      .screensaver-overlay{
        --ss-accent:#8bd3ff;
        --ss-accent-2:#b57cff;
        --ss-panel:rgba(255,255,255,.105);
        --ss-panel-strong:rgba(255,255,255,.16);
        --ss-line:rgba(255,255,255,.16);
        --ss-text:#f8fbff;
        --ss-muted:rgba(248,251,255,.72);
        overflow:hidden;
        background:#03070d;
        color:var(--ss-text);
        font-family:"Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      }
      .screensaver-overlay::before{
        content:"";
        position:absolute;
        inset:0;
        background:
          radial-gradient(90% 70% at 58% 112%, rgba(65,129,176,.54), transparent 52%),
          radial-gradient(52% 46% at 78% 14%, rgba(255,255,255,.16), transparent 42%),
          linear-gradient(180deg, #02050a, #081522 62%, #030609);
        opacity:1;
      }
      .screensaver-overlay::after{
        content:"";
        position:absolute;
        inset:0;
        background:
          linear-gradient(90deg, rgba(0,0,0,.28), transparent 42%, rgba(0,0,0,.2)),
          radial-gradient(circle at 50% 50%, transparent 0 42%, rgba(0,0,0,.22) 100%);
        pointer-events:none;
      }
      .screensaver-overlay .ss-visual-layer{
        position:absolute;
        inset:0;
        overflow:hidden;
        pointer-events:none;
        z-index:0;
      }
      .screensaver-overlay .ss-earth{
        position:absolute;
        left:8%;
        right:8%;
        bottom:-42%;
        height:72%;
        border-radius:50%;
        background:
          radial-gradient(72% 42% at 50% 0%, rgba(255,255,255,.18), transparent 20%),
          radial-gradient(70% 55% at 46% 28%, rgba(84,150,186,.48), transparent 48%),
          radial-gradient(80% 68% at 52% 45%, rgba(250,184,97,.18), transparent 60%),
          #07111d;
        box-shadow:0 -28px 80px rgba(90,159,220,.22), inset 0 18px 42px rgba(255,255,255,.08);
        opacity:.95;
      }
      .screensaver-overlay .ss-planet{
        position:absolute;
        width:min(34vw, 420px);
        aspect-ratio:1;
        left:50%;
        top:52%;
        transform:translate(-50%, -50%);
        border-radius:50%;
        background:
          radial-gradient(circle at 38% 32%, rgba(255,255,255,.22), transparent 18%),
          radial-gradient(circle at 48% 48%, rgba(76,142,194,.78), rgba(14,33,60,.96) 58%, rgba(1,6,14,1));
        box-shadow:0 0 70px rgba(91,158,220,.28), inset -26px -22px 44px rgba(0,0,0,.55);
        opacity:0;
      }
      .screensaver-overlay .ss-orbit{
        position:absolute;
        left:50%;
        top:52%;
        border:1px dashed rgba(255,255,255,.18);
        border-radius:50%;
        transform:translate(-50%, -50%) rotate(-16deg);
        opacity:0;
      }
      .screensaver-overlay .ss-orbit-a{ width:min(58vw, 760px); height:min(30vw, 390px); }
      .screensaver-overlay .ss-orbit-b{ width:min(76vw, 980px); height:min(42vw, 540px); transform:translate(-50%, -50%) rotate(18deg); }
      .screensaver-overlay .ss-hud-ring{
        position:absolute;
        width:min(34vw, 420px);
        aspect-ratio:1;
        left:22%;
        top:48%;
        transform:translate(-50%, -50%);
        border-radius:50%;
        opacity:0;
        background:
          repeating-radial-gradient(circle, transparent 0 30px, rgba(34,211,238,.2) 31px 32px),
          conic-gradient(from 20deg, rgba(168,85,247,.88), transparent 18%, rgba(34,211,238,.9) 32%, transparent 52%, rgba(168,85,247,.72), transparent 82%);
        -webkit-mask:radial-gradient(circle, transparent 0 43%, #000 44% 47%, transparent 48% 57%, #000 58% 60%, transparent 61%);
        mask:radial-gradient(circle, transparent 0 43%, #000 44% 47%, transparent 48% 57%, #000 58% 60%, transparent 61%);
      }
      .screensaver-overlay .screensaver-content{
        position:absolute;
        inset:0;
        top:auto;
        left:auto;
        transform:none;
        z-index:1;
        display:grid;
        grid-template-columns:minmax(280px, 1fr) minmax(260px, 420px);
        grid-template-rows:1fr auto;
        grid-template-areas:
          "hero calendar"
          "status status";
        align-items:center;
        gap:clamp(18px, 3vw, 44px);
        padding:clamp(26px, 5vw, 78px);
      }
      .screensaver-overlay .ss-hero{
        grid-area:hero;
        display:grid;
        justify-items:start;
        gap:clamp(8px, 1.1vw, 14px);
        max-width:760px;
      }
      .screensaver-overlay .ss-greeting{
        display:none;
        color:rgba(255,255,255,.95);
        font-size:clamp(1.1rem, 2vw, 2rem);
        font-weight:750;
      }
      .screensaver-overlay .ss-time-line{
        display:flex;
        align-items:baseline;
        gap:clamp(8px, 1vw, 14px);
      }
      .screensaver-overlay .screensaver-clock{
        font-family:"Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
        font-size:clamp(5.8rem, 12vw, 12rem);
        font-weight:250;
        letter-spacing:0;
        line-height:.9;
        text-shadow:0 20px 60px rgba(0,0,0,.34);
      }
      .screensaver-overlay .ss-period{
        font-size:clamp(1.4rem, 2.4vw, 2.25rem);
        color:rgba(255,255,255,.86);
      }
      .screensaver-overlay .screensaver-date{
        margin:0;
        font-family:inherit;
        font-size:clamp(1.85rem, 3vw, 3.4rem);
        color:rgba(255,255,255,.9);
        line-height:1.05;
        text-shadow:0 14px 42px rgba(0,0,0,.38);
      }
      .screensaver-overlay .ss-quote{
        display:none;
        max-width:460px;
        margin:clamp(12px, 2vw, 28px) 0 0;
        color:rgba(255,255,255,.88);
        font-size:clamp(.98rem, 1.25vw, 1.24rem);
        line-height:1.5;
      }
      .screensaver-overlay .screensaver-calendar,
      .screensaver-overlay .ss-date-tile,
      .screensaver-overlay .ss-status-card{
        border:1px solid var(--ss-line);
        background:
          linear-gradient(180deg, rgba(255,255,255,.12), rgba(255,255,255,.045)),
          var(--ss-panel);
        box-shadow:0 22px 60px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.12);
        backdrop-filter:blur(24px) saturate(1.12);
        -webkit-backdrop-filter:blur(24px) saturate(1.12);
      }
      .screensaver-overlay .screensaver-calendar{
        grid-area:calendar;
        align-self:start;
        justify-self:end;
        width:min(34vw, 420px);
        max-width:none;
        margin:0;
        padding:clamp(16px, 2vw, 26px);
        border-radius:28px;
      }
      .screensaver-overlay .screensaver-calendar .calendar-header{
        margin:0 0 14px;
        padding:0;
        border:0;
        text-align:center;
        font-size:clamp(1rem, 1.3vw, 1.35rem);
        font-weight:650;
      }
      .screensaver-overlay .screensaver-calendar .calendar-grid{
        gap:clamp(4px, .55vw, 8px);
      }
      .screensaver-overlay .screensaver-calendar .calendar-grid div{
        padding:.42rem 0;
        border-radius:10px;
        font-size:clamp(.72rem, .88vw, .95rem);
      }
      .screensaver-overlay .screensaver-calendar .calendar-grid div.today{
        background:color-mix(in oklab, var(--ss-accent) 54%, white 18%);
        color:#08111d;
        box-shadow:0 8px 20px color-mix(in oklab, var(--ss-accent) 26%, transparent);
      }
      .screensaver-overlay .ss-status-rail{
        grid-area:status;
        display:grid;
        grid-template-columns:repeat(auto-fit, minmax(min(100%, 240px), 1fr));
        gap:clamp(14px, 1.8vw, 28px);
        align-self:end;
      }
      .screensaver-overlay .ss-status-card{
        min-height:clamp(144px, 15vh, 190px);
        display:flex;
        align-items:center;
        gap:clamp(18px, 1.6vw, 28px);
        padding:clamp(18px, 2vw, 28px);
        border-radius:26px;
        min-width:0;
        overflow:hidden;
        background:
          linear-gradient(180deg, rgba(255,255,255,.16), rgba(255,255,255,.055)),
          rgba(14,18,28,.66);
        border-color:rgba(255,255,255,.18);
      }
      .screensaver-overlay .ss-status-icon{
        width:clamp(58px, 5.8vw, 82px);
        height:clamp(58px, 5.8vw, 82px);
        border-radius:50%;
        display:grid;
        place-items:center;
        flex:0 0 auto;
        background:
          radial-gradient(circle at 34% 28%, rgba(255,255,255,.28), transparent 42%),
          rgba(255,255,255,.12);
        border:1px solid rgba(255,255,255,.14);
        box-shadow:inset 0 1px 0 rgba(255,255,255,.18), 0 16px 34px rgba(0,0,0,.22);
      }
      .screensaver-overlay .ss-status-card ha-icon{
        --mdc-icon-size:clamp(34px, 3.5vw, 52px);
        color:var(--ss-accent);
        flex:0 0 auto;
      }
      .screensaver-overlay .ss-status-copy{
        display:grid;
        min-width:0;
        gap:5px;
        align-content:start;
        flex:1 1 auto;
      }
      .screensaver-overlay .ss-status-category{
        color:var(--ss-accent);
        font-size:clamp(.82rem, .88vw, 1rem);
        font-weight:780;
        line-height:1;
        text-transform:uppercase;
      }
      .screensaver-overlay .ss-status-card strong{
        font-size:clamp(1.8rem, 2.4vw, 3rem);
        font-weight:800;
        line-height:1.02;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        font-variant-numeric:tabular-nums;
      }
      .screensaver-overlay .ss-status-name{
        color:var(--ss-muted);
        font-size:clamp(1rem, 1.1vw, 1.22rem);
        font-weight:540;
        line-height:1.2;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
      .screensaver-overlay .ss-status-detail{
        display:block;
        color:rgba(248,251,255,.78);
        font-size:clamp(.84rem, .92vw, 1rem);
        font-weight:520;
        line-height:1.22;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
      .screensaver-overlay .ss-status-meta{
        display:grid;
        grid-template-columns:repeat(3, minmax(0, 1fr));
        gap:8px;
        min-width:0;
        margin-top:8px;
        max-width:min(100%, 420px);
      }
      .screensaver-overlay .ss-status-chip{
        display:grid;
        align-content:center;
        gap:3px;
        min-width:0;
        max-width:100%;
        min-height:42px;
        padding:7px 10px;
        border-radius:13px;
        background:rgba(255,255,255,.095);
        border:1px solid rgba(255,255,255,.105);
        color:rgba(248,251,255,.9);
        line-height:1;
      }
      .screensaver-overlay .ss-status-chip b,
      .screensaver-overlay .ss-status-chip em{
        display:block;
        min-width:0;
        overflow:hidden;
        text-overflow:ellipsis;
        font-style:normal;
        white-space:nowrap;
      }
      .screensaver-overlay .ss-status-chip b{
        color:rgba(248,251,255,.62);
        font-size:clamp(.62rem, .68vw, .78rem);
        font-weight:680;
      }
      .screensaver-overlay .ss-status-chip em{
        color:rgba(248,251,255,.94);
        font-size:clamp(.82rem, .9vw, 1rem);
        font-weight:720;
        font-variant-numeric:tabular-nums;
      }
      .screensaver-overlay .ss-status-sparkline{
        width:min(100%, 210px);
        height:30px;
        margin-top:8px;
        overflow:visible;
        color:var(--ss-accent);
        opacity:.92;
      }
      .screensaver-overlay .ss-status-sparkline polyline{
        fill:none;
        stroke:currentColor;
        stroke-width:4;
        stroke-linecap:round;
        stroke-linejoin:round;
        filter:drop-shadow(0 4px 10px color-mix(in oklab, var(--ss-accent) 42%, transparent));
      }
      .screensaver-overlay .ss-status-green ha-icon{ color:#8ef0b3; }
      .screensaver-overlay .ss-status-amber ha-icon{ color:#ffc16a; }
      .screensaver-overlay .ss-status-purple ha-icon{ color:#c084fc; }
      .screensaver-overlay .ss-status-warn ha-icon{ color:#fbbf24; }
      .screensaver-overlay[data-has-status="0"] .ss-status-rail,
      .screensaver-overlay[data-has-status="0"] .ss-intelligence{
        display:none !important;
      }
      .screensaver-overlay .ss-intelligence,
      .screensaver-overlay .ss-date-tile{
        display:none;
      }
      .screensaver-overlay .ss-date-tile{
        border-radius:26px;
        padding:18px;
        text-align:center;
      }
      .screensaver-overlay .ss-date-tile span,
      .screensaver-overlay .ss-date-tile em{
        display:block;
        color:var(--ss-muted);
        font-style:normal;
        font-size:.88rem;
      }
      .screensaver-overlay .ss-date-tile strong{
        display:block;
        margin:8px 0 2px;
        font-size:2.6rem;
        line-height:1;
        font-weight:350;
      }

      .screensaver-overlay.ss-style-minimal_scandi::before{
        background:
          radial-gradient(86% 34% at 56% 68%, rgba(92,135,161,.44), transparent 58%),
          linear-gradient(180deg, #010306, #06101a 58%, #020407);
      }
      .screensaver-overlay.ss-style-minimal_scandi .screensaver-content,
      .screensaver-overlay.ss-style-dynamic_ambient .screensaver-content{
        grid-template-columns:1fr;
        grid-template-rows:1fr auto;
        grid-template-areas:"hero" "status";
        text-align:center;
      }
      .screensaver-overlay.ss-style-minimal_scandi .ss-hero,
      .screensaver-overlay.ss-style-dynamic_ambient .ss-hero{
        justify-self:center;
        justify-items:center;
      }
      .screensaver-overlay.ss-style-minimal_scandi .screensaver-calendar,
      .screensaver-overlay.ss-style-minimal_scandi .ss-quote,
      .screensaver-overlay.ss-style-minimal_scandi .ss-date-tile,
      .screensaver-overlay.ss-style-dynamic_ambient .screensaver-calendar,
      .screensaver-overlay.ss-style-dynamic_ambient .ss-date-tile{
        display:none;
      }
      .screensaver-overlay.ss-style-minimal_scandi .ss-status-card{
        min-height:clamp(140px, 15vh, 188px);
        border-color:transparent;
        background:transparent;
        box-shadow:none;
        backdrop-filter:none;
      }

      .screensaver-overlay.ss-style-cinematic_dashboard{ --ss-accent:#ffb06a; }
      .screensaver-overlay.ss-style-cinematic_dashboard::before{
        background:
          radial-gradient(48% 56% at 74% 38%, rgba(235,110,43,.62), transparent 52%),
          linear-gradient(130deg, #030305, #151117 48%, #050508);
      }
      .screensaver-overlay.ss-style-cinematic_dashboard .screensaver-content{
        grid-template-columns:minmax(280px, 560px) 1fr;
        grid-template-areas:"hero ." "status status";
      }
      .screensaver-overlay.ss-style-cinematic_dashboard .screensaver-calendar,
      .screensaver-overlay.ss-style-cinematic_dashboard .ss-date-tile{
        display:none;
      }
      .screensaver-overlay.ss-style-cinematic_dashboard .ss-quote{
        display:block;
      }
      .screensaver-overlay.ss-style-cinematic_dashboard .screensaver-clock{
        font-size:clamp(5.4rem, 10vw, 10rem);
      }

      .screensaver-overlay.ss-style-sci_fi_hud{ --ss-accent:#22d3ee; --ss-accent-2:#a855f7; }
      .screensaver-overlay.ss-style-sci_fi_hud::before{
        background:
          radial-gradient(circle at 22% 48%, rgba(168,85,247,.18), transparent 36%),
          repeating-linear-gradient(90deg, rgba(34,211,238,.045) 0 1px, transparent 1px 72px),
          repeating-linear-gradient(0deg, rgba(34,211,238,.035) 0 1px, transparent 1px 72px),
          linear-gradient(135deg, #02030a, #070a16 58%, #02030a);
      }
      .screensaver-overlay.ss-style-sci_fi_hud .ss-hud-ring{ opacity:.92; animation:ss-spin 18s linear infinite; }
      .screensaver-overlay.ss-style-sci_fi_hud .screensaver-content{
        grid-template-columns:minmax(320px, .9fr) minmax(300px, 430px);
        grid-template-areas:"hero calendar" "status status";
      }
      .screensaver-overlay.ss-style-sci_fi_hud .ss-hero{
        justify-self:start;
        justify-items:center;
        margin-left:clamp(12px, 4vw, 90px);
      }
      .screensaver-overlay.ss-style-sci_fi_hud .screensaver-clock{
        font-size:clamp(4.8rem, 8vw, 8.6rem);
      }
      .screensaver-overlay.ss-style-sci_fi_hud .ss-status-rail{
        border:1px solid rgba(34,211,238,.38);
        border-radius:20px;
        padding:10px;
        background:rgba(3,10,22,.62);
      }

      .screensaver-overlay.ss-style-dynamic_ambient{ --ss-accent:#d8a0ff; }
      .screensaver-overlay.ss-style-dynamic_ambient::before{
        background:
          radial-gradient(70% 60% at 54% 52%, rgba(255,178,101,.58), transparent 42%),
          linear-gradient(135deg, #451d68, #192348 52%, #090713);
      }
      .screensaver-overlay.ss-style-dynamic_ambient .ss-status-rail{
        justify-self:center;
        width:min(920px, 100%);
        padding:10px;
        border-radius:999px;
        border:1px solid rgba(255,255,255,.18);
        background:rgba(28,14,48,.34);
        backdrop-filter:blur(22px);
      }
      .screensaver-overlay.ss-style-dynamic_ambient .ss-status-card{
        border:0;
        background:transparent;
        box-shadow:none;
        backdrop-filter:none;
      }

      .screensaver-overlay.ss-style-floating_islands{ --ss-accent:#a7d8ff; }
      .screensaver-overlay.ss-style-floating_islands .ss-earth{
        left:-8%;
        right:-8%;
        bottom:-36%;
        height:78%;
      }
      .screensaver-overlay.ss-style-floating_islands .screensaver-content{
        display:block;
        padding:clamp(24px, 5vw, 76px);
      }
      .screensaver-overlay.ss-style-floating_islands .ss-hero{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%, -50%);
        justify-items:center;
        text-align:center;
        padding:28px 38px;
        border-radius:34px;
        background:rgba(255,255,255,.13);
        border:1px solid rgba(255,255,255,.2);
        backdrop-filter:blur(24px);
      }
      .screensaver-overlay.ss-style-floating_islands .screensaver-clock{
        font-size:clamp(4.8rem, 8vw, 8.8rem);
      }
      .screensaver-overlay.ss-style-floating_islands .screensaver-calendar{
        position:absolute;
        right:clamp(28px, 6vw, 92px);
        bottom:clamp(28px, 6vw, 84px);
        width:180px;
        padding:18px;
      }
      .screensaver-overlay.ss-style-floating_islands .screensaver-calendar .calendar-grid{ display:none; }
      .screensaver-overlay.ss-style-floating_islands .ss-status-rail{
        position:absolute;
        inset:0;
        display:block;
      }
      .screensaver-overlay.ss-style-floating_islands .ss-status-card{
        position:absolute;
        width:clamp(260px, 24vw, 390px);
        min-width:0;
        border-radius:999px;
      }
      .screensaver-overlay.ss-style-floating_islands .ss-status-card:nth-child(1){ left:8%; top:18%; }
      .screensaver-overlay.ss-style-floating_islands .ss-status-card:nth-child(2){ right:9%; top:16%; }
      .screensaver-overlay.ss-style-floating_islands .ss-status-card:nth-child(3){ left:13%; bottom:18%; }
      .screensaver-overlay.ss-style-floating_islands .ss-status-card:nth-child(4){ right:9%; bottom:18%; }
      .screensaver-overlay.ss-style-floating_islands[data-status-count="4"] .screensaver-calendar{ display:none; }

      .screensaver-overlay.ss-style-ultra_minimal_dots::before{
        background:
          radial-gradient(92% 42% at 70% 78%, rgba(80,133,167,.42), transparent 58%),
          linear-gradient(180deg, #020408, #06101a 66%, #020407);
      }
      .screensaver-overlay.ss-style-ultra_minimal_dots .screensaver-content{
        grid-template-columns:minmax(260px, 520px) 1fr;
        grid-template-areas:"hero ." "status .";
        align-content:center;
      }
      .screensaver-overlay.ss-style-ultra_minimal_dots .screensaver-calendar,
      .screensaver-overlay.ss-style-ultra_minimal_dots .ss-date-tile{
        display:none;
      }
      .screensaver-overlay.ss-style-ultra_minimal_dots .screensaver-clock{
        font-size:clamp(5.6rem, 9vw, 9.8rem);
      }
      .screensaver-overlay.ss-style-ultra_minimal_dots .ss-status-rail{
        grid-template-columns:1fr;
        max-width:520px;
        gap:18px;
      }
      .screensaver-overlay.ss-style-ultra_minimal_dots .ss-status-card{
        min-height:auto;
        padding:0;
        border:0;
        background:transparent;
        box-shadow:none;
        backdrop-filter:none;
      }
      .screensaver-overlay.ss-style-ultra_minimal_dots .ss-status-card ha-icon{
        --mdc-icon-size:30px;
      }
      .screensaver-overlay.ss-style-ultra_minimal_dots .ss-status-icon{
        width:42px;
        height:42px;
        background:rgba(255,255,255,.1);
      }

      .screensaver-overlay.ss-style-home_intelligence{ --ss-accent:#9be7b6; }
      .screensaver-overlay.ss-style-home_intelligence::before{
        background:
          radial-gradient(52% 54% at 92% 12%, rgba(154,101,51,.34), transparent 42%),
          linear-gradient(135deg, #110c08, #08090d 54%, #030305);
      }
      .screensaver-overlay.ss-style-home_intelligence .screensaver-content{
        grid-template-columns:minmax(340px, 1fr) minmax(300px, 410px);
        grid-template-areas:"intel calendar";
      }
      .screensaver-overlay.ss-style-home_intelligence .ss-hero,
      .screensaver-overlay.ss-style-home_intelligence .ss-status-rail,
      .screensaver-overlay.ss-style-home_intelligence .ss-date-tile{
        display:none;
      }
      .screensaver-overlay.ss-style-home_intelligence .ss-intelligence{
        grid-area:intel;
        display:grid;
        gap:16px;
        max-width:620px;
      }
      .screensaver-overlay.ss-style-home_intelligence .ss-intelligence h3{
        margin:0 0 8px;
        font-size:clamp(2.6rem, 4vw, 4.6rem);
      }
      .screensaver-overlay.ss-style-home_intelligence .ss-intel-row{
        display:flex;
        align-items:flex-start;
        gap:18px;
      }
      .screensaver-overlay.ss-style-home_intelligence .ss-intel-row ha-icon{
        --mdc-icon-size:38px;
        color:var(--ss-accent);
      }
      .screensaver-overlay.ss-style-home_intelligence .ss-intel-row strong,
      .screensaver-overlay.ss-style-home_intelligence .ss-intel-row span{
        display:block;
      }
      .screensaver-overlay.ss-style-home_intelligence .ss-intel-row strong{
        font-size:clamp(1.35rem, 2vw, 2.2rem);
        line-height:1.12;
      }
      .screensaver-overlay.ss-style-home_intelligence .ss-intel-row span,
      .screensaver-overlay.ss-style-home_intelligence .ss-intelligence p{
        color:var(--ss-muted);
        margin:3px 0 0;
        font-size:clamp(1rem, 1.25vw, 1.28rem);
      }

      .screensaver-overlay.ss-style-planetary_orbital{ --ss-accent:#ffbf75; }
      .screensaver-overlay.ss-style-planetary_orbital::before{
        background:
          radial-gradient(70% 70% at 52% 52%, rgba(252,183,91,.16), transparent 48%),
          linear-gradient(145deg, #03070d, #08111d 60%, #020306);
      }
      .screensaver-overlay.ss-style-planetary_orbital .ss-planet,
      .screensaver-overlay.ss-style-planetary_orbital .ss-orbit{
        opacity:1;
      }
      .screensaver-overlay.ss-style-planetary_orbital .ss-orbit-a{ animation:ss-spin 42s linear infinite; }
      .screensaver-overlay.ss-style-planetary_orbital .ss-orbit-b{ animation:ss-spin-reverse 58s linear infinite; }
      .screensaver-overlay.ss-style-planetary_orbital .ss-earth{ opacity:0; }
      .screensaver-overlay.ss-style-planetary_orbital .screensaver-content{
        display:block;
        padding:clamp(26px, 5vw, 70px);
      }
      .screensaver-overlay.ss-style-planetary_orbital .ss-hero{
        position:absolute;
        left:clamp(26px, 5vw, 70px);
        top:clamp(24px, 8vh, 86px);
      }
      .screensaver-overlay.ss-style-planetary_orbital .screensaver-clock{
        font-size:clamp(4.8rem, 8vw, 8.8rem);
      }
      .screensaver-overlay.ss-style-planetary_orbital .screensaver-calendar,
      .screensaver-overlay.ss-style-planetary_orbital .ss-date-tile{
        display:none;
      }
      .screensaver-overlay.ss-style-planetary_orbital .ss-status-rail{
        position:absolute;
        inset:0;
        display:block;
      }
      .screensaver-overlay.ss-style-planetary_orbital .ss-status-card{
        position:absolute;
        width:clamp(260px, 23vw, 370px);
        min-width:0;
        border-radius:999px;
      }
      .screensaver-overlay.ss-style-planetary_orbital .ss-status-card:nth-child(1){ right:10%; top:34%; }
      .screensaver-overlay.ss-style-planetary_orbital .ss-status-card:nth-child(2){ right:16%; top:10%; }
      .screensaver-overlay.ss-style-planetary_orbital .ss-status-card:nth-child(3){ right:28%; bottom:12%; }
      .screensaver-overlay.ss-style-planetary_orbital .ss-status-card:nth-child(4){ left:10%; bottom:24%; }

      .screensaver-overlay[data-ss-bg-ready="1"]::before{
        background-image:
          linear-gradient(90deg, rgba(0,0,0,.42), rgba(0,0,0,.12) 44%, rgba(0,0,0,.36)),
          linear-gradient(180deg, rgba(0,0,0,.22), rgba(0,0,0,.46)),
          var(--ss-bg-image);
        background-position:center;
        background-size:cover;
        background-repeat:no-repeat;
      }
      .screensaver-overlay[data-ss-bg-ready="1"] .ss-visual-layer{
        display:none;
      }
      .screensaver-overlay[data-ss-bg-ready="1"] .screensaver-content{
        position:absolute;
        inset:0;
        display:block !important;
        padding:clamp(28px, 4.5vw, 76px);
        overflow:hidden;
      }
      .screensaver-overlay[data-ss-bg-ready="1"] .ss-hero,
      .screensaver-overlay[data-ss-bg-ready="1"] .screensaver-calendar,
      .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-rail,
      .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-card{
        position:static !important;
        inset:auto !important;
        left:auto !important;
        right:auto !important;
        top:auto !important;
        bottom:auto !important;
        transform:none !important;
      }
      .screensaver-overlay[data-ss-bg-ready="1"] .ss-hero{
        position:absolute !important;
        left:clamp(34px, 5.2vw, 96px) !important;
        top:clamp(42px, 8.5vh, 118px) !important;
        display:grid !important;
        justify-items:start;
        gap:clamp(8px, 1.1vh, 14px);
        width:min(70vw, 760px);
        padding:0;
        text-align:left;
        border:0;
        background:transparent;
        box-shadow:none;
        backdrop-filter:none;
        -webkit-backdrop-filter:none;
      }
      .screensaver-overlay[data-ss-bg-ready="1"] .screensaver-calendar{
        display:none !important;
      }
      .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-rail{
        position:absolute !important;
        left:clamp(34px, 5vw, 96px) !important;
        right:clamp(34px, 5vw, 96px) !important;
        bottom:clamp(42px, 8.5vh, 104px) !important;
        display:grid !important;
        grid-template-columns:repeat(3, minmax(0, 1fr)) !important;
        gap:clamp(14px, 2vw, 26px);
        align-items:end;
      }
      .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-card{
        width:auto !important;
        min-height:clamp(144px, 15vh, 190px);
        min-width:0;
        border-radius:clamp(24px, 2.4vw, 34px);
        justify-content:flex-start;
        background:
          linear-gradient(180deg, rgba(255,255,255,.16), rgba(255,255,255,.055)),
          rgba(18,22,34,.46);
        border-color:rgba(255,255,255,.22);
      }
      .screensaver-overlay[data-ss-bg-ready="1"] .ss-intelligence,
      .screensaver-overlay[data-ss-bg-ready="1"] .ss-date-tile{
        display:none !important;
      }
      .screensaver-overlay[data-ss-bg-ready="1"][data-has-status="0"] .screensaver-content{
        display:block !important;
      }

      @keyframes ss-spin{ to{ transform:translate(-50%, -50%) rotate(344deg); } }
      @keyframes ss-spin-reverse{ to{ transform:translate(-50%, -50%) rotate(-342deg); } }

      @media (prefers-reduced-motion: reduce){
        .screensaver-overlay .ss-orbit,
        .screensaver-overlay .ss-hud-ring{
          animation:none !important;
        }
      }

      @media (max-width: 1180px){
        .screensaver-overlay .screensaver-content,
        .screensaver-overlay.ss-style-sci_fi_hud .screensaver-content,
        .screensaver-overlay.ss-style-home_intelligence .screensaver-content{
          grid-template-columns:1fr;
          grid-template-rows:auto auto auto;
          grid-template-areas:"hero" "calendar" "status";
          align-content:center;
        }
        .screensaver-overlay .screensaver-calendar{
          justify-self:stretch;
          width:min(100%, 520px);
        }
        .screensaver-overlay.ss-style-home_intelligence .screensaver-content{
          grid-template-areas:"intel" "calendar";
        }
        .screensaver-overlay.ss-style-floating_islands .screensaver-content,
        .screensaver-overlay.ss-style-planetary_orbital .screensaver-content{
          display:grid;
          grid-template-columns:minmax(0, 1fr);
          grid-template-rows:auto auto;
          grid-template-areas:"hero" "status";
          align-content:center;
          gap:clamp(18px, 4vh, 36px);
        }
        .screensaver-overlay.ss-style-floating_islands .ss-hero,
        .screensaver-overlay.ss-style-planetary_orbital .ss-hero,
        .screensaver-overlay.ss-style-floating_islands .ss-status-card,
        .screensaver-overlay.ss-style-planetary_orbital .ss-status-card{
          position:static;
          transform:none;
        }
        .screensaver-overlay.ss-style-floating_islands .ss-hero,
        .screensaver-overlay.ss-style-planetary_orbital .ss-hero{
          justify-self:center;
          width:min(100%, 520px);
        }
        .screensaver-overlay.ss-style-floating_islands .screensaver-calendar,
        .screensaver-overlay.ss-style-planetary_orbital .screensaver-calendar{
          display:none;
        }
        .screensaver-overlay.ss-style-floating_islands .ss-status-rail,
        .screensaver-overlay.ss-style-planetary_orbital .ss-status-rail{
          position:static;
          inset:auto;
          display:grid;
          grid-template-columns:repeat(auto-fit, minmax(min(100%, 190px), 1fr));
        }
        .screensaver-overlay.ss-style-floating_islands .ss-status-card,
        .screensaver-overlay.ss-style-planetary_orbital .ss-status-card{
          width:auto;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .screensaver-content,
        .screensaver-overlay[data-ss-bg-ready="1"].ss-style-sci_fi_hud .screensaver-content,
        .screensaver-overlay[data-ss-bg-ready="1"].ss-style-home_intelligence .screensaver-content,
        .screensaver-overlay[data-ss-bg-ready="1"].ss-style-floating_islands .screensaver-content,
        .screensaver-overlay[data-ss-bg-ready="1"].ss-style-planetary_orbital .screensaver-content{
          display:block !important;
          padding:clamp(24px, 4vw, 56px);
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-hero{
          left:clamp(28px, 5vw, 72px) !important;
          top:clamp(34px, 7.5vh, 86px) !important;
          justify-self:auto;
          justify-items:start;
          text-align:left;
          width:min(76vw, 620px);
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .screensaver-clock{
          font-size:clamp(5rem, 11vw, 9rem);
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .screensaver-date{
          font-size:clamp(1.55rem, 2.6vw, 2.45rem);
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .screensaver-calendar{
          display:none !important;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-rail{
          left:clamp(28px, 5vw, 72px) !important;
          right:clamp(28px, 5vw, 72px) !important;
          bottom:clamp(34px, 7.5vh, 76px) !important;
          grid-template-columns:repeat(3, minmax(0, 1fr)) !important;
        }
      }

      @media (max-width: 820px){
        .screensaver-overlay .screensaver-content,
        .screensaver-overlay.ss-style-sci_fi_hud .screensaver-content,
        .screensaver-overlay.ss-style-home_intelligence .screensaver-content{
          grid-template-columns:1fr;
          grid-template-rows:auto auto auto;
          grid-template-areas:"hero" "calendar" "status";
          align-content:center;
          padding:24px;
        }
        .screensaver-overlay .screensaver-calendar{
          justify-self:stretch;
          width:100%;
          padding:14px;
        }
        .screensaver-overlay .ss-status-rail{
          grid-template-columns:repeat(2, minmax(0, 1fr));
        }
        .screensaver-overlay .ss-status-card{
          min-height:88px;
          padding:14px;
        }
        .screensaver-overlay.ss-style-home_intelligence .screensaver-content{
          grid-template-areas:"intel" "calendar";
        }
        .screensaver-overlay.ss-style-floating_islands .screensaver-content,
        .screensaver-overlay.ss-style-planetary_orbital .screensaver-content{
          display:grid;
          grid-template-columns:1fr;
          grid-template-areas:"hero" "status";
        }
        .screensaver-overlay.ss-style-floating_islands .ss-hero,
        .screensaver-overlay.ss-style-planetary_orbital .ss-hero,
        .screensaver-overlay.ss-style-floating_islands .ss-status-card,
        .screensaver-overlay.ss-style-planetary_orbital .ss-status-card{
          position:static;
          transform:none;
        }
        .screensaver-overlay.ss-style-floating_islands .ss-status-rail,
        .screensaver-overlay.ss-style-planetary_orbital .ss-status-rail{
          position:static;
          display:grid;
          grid-template-columns:1fr;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .screensaver-content,
        .screensaver-overlay[data-ss-bg-ready="1"].ss-style-sci_fi_hud .screensaver-content,
        .screensaver-overlay[data-ss-bg-ready="1"].ss-style-home_intelligence .screensaver-content,
        .screensaver-overlay[data-ss-bg-ready="1"].ss-style-floating_islands .screensaver-content,
        .screensaver-overlay[data-ss-bg-ready="1"].ss-style-planetary_orbital .screensaver-content{
          display:block !important;
          padding:24px;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-hero{
          left:24px !important;
          top:32px !important;
          width:calc(100% - 48px);
          justify-items:start;
          text-align:left;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .screensaver-clock{
          font-size:clamp(4.2rem, 15vw, 6.8rem);
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-rail{
          left:20px !important;
          right:20px !important;
          bottom:24px !important;
          grid-template-columns:repeat(3, minmax(0, 1fr)) !important;
          gap:10px;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-card{
          min-height:112px;
          padding:10px 12px;
          gap:9px;
          border-radius:18px;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-icon{
          width:38px;
          height:38px;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-card ha-icon{
          --mdc-icon-size:26px;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-card strong{
          font-size:1.1rem;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-category{
          font-size:.66rem;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-name{
          font-size:.8rem;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-detail{
          display:none;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-meta{
          display:none;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-sparkline{
          height:24px;
          margin-top:2px;
        }
      }

      @media (max-height: 700px){
        .screensaver-overlay[data-ss-bg-ready="1"] .screensaver-content{
          display:block !important;
          padding:20px;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .screensaver-calendar{
          display:none !important;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-hero{
          top:clamp(20px, 5vh, 40px) !important;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .screensaver-clock{
          font-size:clamp(4rem, 12vh, 6.5rem);
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-rail{
          bottom:clamp(18px, 5vh, 34px) !important;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-card{
          min-height:106px;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-meta{
          display:none;
        }
      }

      @media (max-width: 560px){
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-rail{
          left:14px !important;
          right:14px !important;
          gap:8px;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-card{
          min-height:84px;
          padding:8px;
          gap:6px;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-icon{
          width:32px;
          height:32px;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-card ha-icon{
          --mdc-icon-size:22px;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-card strong{
          font-size:.95rem;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-category{
          font-size:.58rem;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-name{
          font-size:.7rem;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-detail,
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-meta{
          display:none;
        }
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-sparkline{
          display:none;
        }
      }

      .screensaver-overlay.ss-style-home_intelligence .ss-intelligence{
        display:none !important;
      }
      .screensaver-overlay.ss-style-home_intelligence .ss-hero{
        display:grid !important;
      }
      .screensaver-overlay .ss-status-rail,
      .screensaver-overlay.ss-style-minimal_scandi .ss-status-rail,
      .screensaver-overlay.ss-style-cinematic_dashboard .ss-status-rail,
      .screensaver-overlay.ss-style-sci_fi_hud .ss-status-rail,
      .screensaver-overlay.ss-style-dynamic_ambient .ss-status-rail,
      .screensaver-overlay.ss-style-floating_islands .ss-status-rail,
      .screensaver-overlay.ss-style-ultra_minimal_dots .ss-status-rail,
      .screensaver-overlay.ss-style-home_intelligence .ss-status-rail,
      .screensaver-overlay.ss-style-planetary_orbital .ss-status-rail,
      .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-rail{
        position:absolute !important;
        inset:auto !important;
        left:clamp(34px, 5vw, 96px) !important;
        right:clamp(34px, 5vw, 96px) !important;
        bottom:clamp(42px, 8.5vh, 104px) !important;
        display:grid !important;
        grid-template-columns:repeat(3, minmax(0, 1fr)) !important;
        grid-auto-rows:1fr !important;
        align-items:stretch !important;
        gap:clamp(18px, 2vw, 34px) !important;
        width:auto !important;
        max-width:none !important;
        padding:0 !important;
        border:0 !important;
        border-radius:0 !important;
        background:transparent !important;
        box-shadow:none !important;
        backdrop-filter:none !important;
        -webkit-backdrop-filter:none !important;
      }
      .screensaver-overlay[data-has-status="0"] .ss-status-rail{
        display:none !important;
      }
      .screensaver-overlay .ss-status-card,
      .screensaver-overlay.ss-style-minimal_scandi .ss-status-card,
      .screensaver-overlay.ss-style-cinematic_dashboard .ss-status-card,
      .screensaver-overlay.ss-style-sci_fi_hud .ss-status-card,
      .screensaver-overlay.ss-style-dynamic_ambient .ss-status-card,
      .screensaver-overlay.ss-style-floating_islands .ss-status-card,
      .screensaver-overlay.ss-style-ultra_minimal_dots .ss-status-card,
      .screensaver-overlay.ss-style-home_intelligence .ss-status-card,
      .screensaver-overlay.ss-style-planetary_orbital .ss-status-card,
      .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-card{
        position:relative !important;
        inset:auto !important;
        left:auto !important;
        right:auto !important;
        top:auto !important;
        bottom:auto !important;
        transform:none !important;
        width:auto !important;
        height:100% !important;
        min-height:clamp(154px, 15vh, 198px) !important;
        min-width:0 !important;
        box-sizing:border-box !important;
        display:flex !important;
        align-items:center !important;
        gap:clamp(22px, 2vw, 34px) !important;
        padding:clamp(24px, 2.4vw, 34px) !important;
        border-radius:clamp(20px, 1.8vw, 30px) !important;
        border:1px solid rgba(255,255,255,.18) !important;
        background:
          linear-gradient(180deg, rgba(255,255,255,.13), rgba(255,255,255,.05)),
          rgba(9,18,29,.62) !important;
        box-shadow:0 22px 60px rgba(0,0,0,.32), inset 0 1px 0 rgba(255,255,255,.13) !important;
        backdrop-filter:blur(24px) saturate(1.12) !important;
        -webkit-backdrop-filter:blur(24px) saturate(1.12) !important;
      }
      .screensaver-overlay .ss-status-card::after{
        content:"›";
        margin-left:auto;
        color:rgba(248,251,255,.62);
        font-size:clamp(2rem, 2.6vw, 3.1rem);
        line-height:1;
        font-weight:240;
      }
      .screensaver-overlay .ss-status-name,
      .screensaver-overlay .ss-status-meta,
      .screensaver-overlay .ss-status-sparkline{
        display:none !important;
      }
      .screensaver-overlay .ss-status-detail{
        color:rgba(248,251,255,.72);
        font-size:clamp(1.02rem, 1.1vw, 1.28rem);
      }

      @media (max-width: 1180px){
        .screensaver-overlay .ss-status-rail,
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-rail{
          left:clamp(24px, 4.5vw, 72px) !important;
          right:clamp(24px, 4.5vw, 72px) !important;
          bottom:clamp(30px, 7vh, 74px) !important;
          gap:clamp(12px, 1.6vw, 22px) !important;
        }
        .screensaver-overlay .ss-status-card,
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-card{
          min-height:132px !important;
          padding:18px !important;
          gap:14px !important;
        }
      }

      @media (max-width: 700px){
        .screensaver-overlay .ss-status-rail,
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-rail{
          left:12px !important;
          right:12px !important;
          bottom:18px !important;
          gap:8px !important;
        }
        .screensaver-overlay .ss-status-card,
        .screensaver-overlay[data-ss-bg-ready="1"] .ss-status-card{
          min-height:96px !important;
          padding:10px !important;
          gap:8px !important;
          border-radius:16px !important;
        }
        .screensaver-overlay .ss-status-icon{
          width:34px !important;
          height:34px !important;
        }
        .screensaver-overlay .ss-status-card ha-icon{
          --mdc-icon-size:23px !important;
        }
        .screensaver-overlay .ss-status-category{
          font-size:.58rem !important;
        }
        .screensaver-overlay .ss-status-card strong{
          font-size:clamp(.95rem, 3.5vw, 1.35rem) !important;
        }
        .screensaver-overlay .ss-status-detail{
          font-size:.68rem !important;
        }
        .screensaver-overlay .ss-status-card::after{
          display:none;
        }
      }
    `;
}

export function getScreenSaverShadowStyles(modernCss = '') {
  return `
        .screensaver-overlay {
          /* Cover the entire viewport, not just the card container */
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.92);
          color: #fff;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.8s ease-in;
          z-index: 100000; /* extremely high to overlay everything */
        }
        .screensaver-overlay.active {
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.3s ease-out;
        }
        /* Wrapper to center content nicely in the viewport */
        .screensaver-overlay .screensaver-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .screensaver-overlay .screensaver-clock {
          font-size: 5rem;
          font-family: monospace;
          letter-spacing: 0.1em;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-align: center;
          text-shadow: 0 0 10px rgba(255,255,255,0.8);
        }
        .screensaver-overlay .screensaver-date {
          font-size: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 400;
          margin-top: 0.8rem;
          text-align: center;
          opacity: 0.9;
        }

        /* Calendar styles */
        .screensaver-overlay .screensaver-calendar {
          margin-top: 1.5rem;
          width: 100%;
          max-width: 600px;
          color: #fff;
        }
        .screensaver-overlay .screensaver-calendar .calendar-header {
          font-size: 2.2rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 0.7rem;
          padding-bottom: 0.3rem;
          border-bottom: 2px solid rgba(255,255,255,0.2);
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.3rem;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div {
          text-align: center;
          padding: 0.35rem 0;
          font-size: 1.0rem;
          border-radius: 4px;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.header {
          font-weight: 600;
          opacity: 0.8;
          text-transform: uppercase;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.today {
          background: rgba(255, 255, 255, 0.3);
          font-weight: 700;
          color: #000;
          border-radius: 6px;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.other-month {
          opacity: 0.4;
        }

        .screensaver-overlay .screensaver-calendar .calendar-grid div.weekend {
          /* Slightly accent weekends */
          color: #ffb074;
        }
        ${modernCss}
      `;
}

export function getScreenSaverGlobalStyles(modernCss = '') {
  return `
        .screensaver-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.92);
          color: #fff;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.8s ease-in;
          z-index: 100000;
        }
        .screensaver-overlay.active {
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.3s ease-out;
        }
        .screensaver-overlay .screensaver-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .screensaver-overlay .screensaver-clock {
          font-size: 5rem;
          font-family: monospace;
          letter-spacing: 0.1em;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          text-align: center;
          text-shadow: 0 0 10px rgba(255,255,255,0.8);
        }
        .screensaver-overlay .screensaver-date {
          font-size: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 400;
          margin-top: 0.8rem;
          text-align: center;
          opacity: 0.9;
        }
        .screensaver-overlay .screensaver-calendar {
          margin-top: 1.5rem;
          width: 100%;
          max-width: 600px;
          color: #fff;
        }
        .screensaver-overlay .screensaver-calendar .calendar-header {
          font-size: 2.2rem;
          font-weight: 600;
          text-align: center;
          margin-bottom: 0.7rem;
          padding-bottom: 0.3rem;
          border-bottom: 2px solid rgba(255,255,255,0.2);
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.3rem;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div {
          text-align: center;
          padding: 0.35rem 0;
          font-size: 1.0rem;
          border-radius: 4px;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.header {
          font-weight: 600;
          opacity: 0.8;
          text-transform: uppercase;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.today {
          background: rgba(255, 255, 255, 0.3);
          font-weight: 700;
          color: #000;
          border-radius: 6px;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.other-month {
          opacity: 0.4;
        }
        .screensaver-overlay .screensaver-calendar .calendar-grid div.weekend {
          color: #ffb074;
        }
        ${modernCss}
      `;
}
