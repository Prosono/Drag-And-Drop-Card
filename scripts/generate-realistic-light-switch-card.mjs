import fs from 'node:fs';
import path from 'node:path';

const inputPath = process.argv[2];
const outputPath = process.argv[3] || path.resolve('examples/ddc-card-realistic-light-switches.json');

if (!inputPath) {
  throw new Error('Usage: node scripts/generate-realistic-light-switch-card.mjs <source-export.json> [output.json]');
}

const source = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const sourceCard = source?.entry?.card;

if (!sourceCard || typeof sourceCard.js !== 'string') {
  throw new Error('The source export must contain entry.card with html, css, and js fields.');
}

const html = String.raw`<section
  class="real-switch-card"
  data-neo-light
  data-style="porcelain-toggle"
  data-entity="light.taklampe_kontor_2"
  data-icon="mdi:light-switch"
  data-label="Taklampe kontor"
  data-show-brightness="true"
  data-show-icon="true"
  data-show-status="true"
  data-default-brightness="75"
  data-color-on="#d9a648"
  data-color-alt="#8d642c"
  data-color-off="#756f65"
  data-language="no"
  data-show-warm-color="true"
  data-show-glow="true"
  data-glow-color="#f0c66c"
  data-glow-intensity="85"
>
  <div class="nlc-stage" data-nlc-stage>
    <div class="nlc-switch" data-nlc-toggle role="button" tabindex="0" aria-label="Slå av eller på lyset">
      <div class="room-wash" aria-hidden="true"></div>
      <div class="switch-bay">
        <div class="switch-model switch-porcelain" aria-hidden="true">
          <div class="porcelain-plate material-plate">
            <i class="mount-screw screw-top"></i><i class="mount-screw screw-bottom"></i>
            <div class="porcelain-collar">
              <span class="porcelain-lever"><i></i></span>
              <small class="porcelain-on-mark">ON</small>
              <small class="porcelain-off-mark">OFF</small>
            </div>
          </div>
        </div>

        <div class="switch-model switch-brass" aria-hidden="true">
          <div class="brass-plate material-plate">
            <i class="slot-screw screw-top"></i><i class="slot-screw screw-bottom"></i>
            <div class="double-rocker-frame">
              <span class="double-rocker-key double-rocker-on" data-nlc-command="on"><i>I</i></span>
              <span class="double-rocker-key double-rocker-off" data-nlc-command="off"><i>O</i></span>
            </div>
          </div>
        </div>

        <div class="switch-model switch-bakelite" aria-hidden="true">
          <div class="bakelite-plate material-plate">
            <i class="slot-screw screw-top"></i><i class="slot-screw screw-bottom"></i>
            <div class="bakelite-frame">
              <div class="bakelite-rocker"><span>I</span><span>O</span></div>
            </div>
          </div>
        </div>

        <div class="switch-model switch-paddle" aria-hidden="true">
          <div class="paddle-plate material-plate">
            <i class="paddle-seam"></i>
            <div class="paddle-face"><span class="paddle-highlight"></span></div>
          </div>
        </div>

        <div class="switch-model switch-industrial" data-nlc-dimmer="ring" aria-label="Juster lysstyrke med industridimmer">
          <div class="industrial-plate material-plate">
            <i class="hex-bolt bolt-a"></i><i class="hex-bolt bolt-b"></i><i class="hex-bolt bolt-c"></i><i class="hex-bolt bolt-d"></i>
            <div class="industrial-scale">
              <i style="--tick:0"></i><i style="--tick:1"></i><i style="--tick:2"></i><i style="--tick:3"></i><i style="--tick:4"></i><i style="--tick:5"></i><i style="--tick:6"></i><i style="--tick:7"></i><i style="--tick:8"></i><i style="--tick:9"></i><i style="--tick:10"></i>
            </div>
            <span class="dimmer-end dimmer-zero">0</span><span class="dimmer-end dimmer-hundred">100</span>
            <div class="industrial-knob rotary-knob"><span></span></div>
          </div>
        </div>

        <div class="switch-model switch-knurled" data-nlc-dimmer="ring" aria-label="Juster lysstyrke med metallhjulet">
          <div class="knurled-plate material-plate">
            <i class="slot-screw screw-top"></i><i class="slot-screw screw-bottom"></i>
            <div class="knurled-scale"><span>0</span><span>100</span></div>
            <div class="knurled-dial rotary-knob"><span></span></div>
          </div>
        </div>

        <div class="switch-model switch-ceramic-dimmer" data-nlc-dimmer="ring" aria-label="Juster lysstyrke med porselenshjulet">
          <div class="ceramic-dimmer-plate material-plate">
            <i class="mount-screw screw-top"></i><i class="mount-screw screw-bottom"></i>
            <div class="ceramic-ticks"></div>
            <span class="dimmer-end dimmer-zero">0</span><span class="dimmer-end dimmer-hundred">100</span>
            <div class="ceramic-dial rotary-knob"><span></span></div>
          </div>
        </div>

        <div class="switch-model switch-euro" aria-hidden="true">
          <div class="euro-plate material-plate">
            <div class="euro-bezel"><div class="euro-button"><ha-icon icon="mdi:power"></ha-icon></div></div>
            <i class="euro-led"></i>
          </div>
        </div>

        <div class="switch-model switch-oak" aria-hidden="true">
          <div class="oak-plate material-plate">
            <i class="brass-screw screw-top"></i><i class="brass-screw screw-bottom"></i>
            <div class="oak-button-bank">
              <span class="oak-push oak-push-on" data-nlc-command="on"><i></i><b>I</b></span>
              <span class="oak-push oak-push-off" data-nlc-command="off"><i></i><b>O</b></span>
            </div>
          </div>
        </div>

        <div class="switch-model switch-glass" aria-hidden="true">
          <div class="glass-plate material-plate">
            <div class="glass-reflection"></div>
            <div class="glass-touch-zone"><ha-icon icon="mdi:power"></ha-icon></div>
            <span class="glass-led"></span>
          </div>
        </div>
      </div>

      <div class="nlc-top-icon" data-nlc-top-icon aria-hidden="true"></div>

      <div class="nlc-tune-row" data-nlc-tune-row>
        <button class="nlc-tune-btn nlc-tune-temp" type="button" data-nlc-tune-open="temperature" aria-label="Åpne fargetemperatur">
          <ha-icon icon="mdi:thermometer"></ha-icon>
        </button>
        <button class="nlc-tune-btn nlc-tune-color" type="button" data-nlc-tune-open="color" aria-label="Åpne fargevalg">
          <ha-icon icon="mdi:palette-outline"></ha-icon>
        </button>
      </div>

      <button class="nlc-tune-btn nlc-brightness-btn" type="button" data-nlc-tune-open="brightness" aria-label="Åpne lysstyrke">
        <ha-icon icon="mdi:brightness-6"></ha-icon>
      </button>

      <div class="nlc-meta">
        <ha-icon class="nlc-meta-icon" data-nlc-icon icon="mdi:light-switch"></ha-icon>
        <div class="nlc-copy">
          <div class="nlc-label" data-nlc-label>Taklampe kontor</div>
          <div class="nlc-status-row">
            <span class="nlc-status" data-nlc-status>AV</span>
            <span class="nlc-percent" data-nlc-percent>0%</span>
          </div>
        </div>
        <span class="nlc-card-name" data-nlc-card-name>Taklampe kontor</span>
      </div>

      <div class="nlc-tune-backdrop" data-nlc-tune-panel>
        <div class="nlc-tune-panel">
          <button class="nlc-tune-close" type="button" data-nlc-tune-close aria-label="Lukk lyskontroller">×</button>
          <h3 data-nlc-tune-title>Lyskontroller</h3>
          <div class="nlc-tune-section" data-nlc-brightness-section>
            <label><span data-nlc-brightness-label>Lysstyrke</span><input data-nlc-brightness type="range" min="0" max="100" step="1"></label>
            <div class="nlc-tune-value" data-nlc-brightness-value>75%</div>
          </div>
          <div class="nlc-tune-section" data-nlc-temperature-section>
            <label><span data-nlc-warmth-label>Fargetemperatur</span><input data-nlc-kelvin type="range" min="2000" max="6500" step="50"></label>
            <div class="nlc-tune-value" data-nlc-kelvin-value>3500 K</div>
          </div>
          <div class="nlc-tune-section" data-nlc-color-section>
            <label>Fargetone<input data-nlc-hue type="range" min="0" max="360" step="1"></label>
            <label>Metning<input data-nlc-saturation type="range" min="0" max="100" step="1"></label>
            <div class="nlc-color-preview" data-nlc-color-preview></div>
          </div>
        </div>
      </div>
    </div>

    <button class="nlc-config-btn" data-nlc-config-open aria-label="Åpne bryteroppsett" title="Oppsett">
      <ha-icon icon="mdi:tune-variant"></ha-icon>
    </button>

    <div class="nlc-config-backdrop" data-nlc-config>
      <div class="nlc-config-panel">
        <button class="nlc-config-close" data-nlc-config-close aria-label="Lukk bryteroppsett">×</button>
        <h3 data-nlc-config-title>Bryteroppsett</h3>

        <label class="nlc-entity-field">
          <span data-nlc-config-label="entity">Entitet</span>
          <input data-cfg="entity" data-nlc-entity-input autocomplete="off" spellcheck="false">
          <div class="nlc-entity-menu" data-nlc-entity-menu></div>
        </label>
        <label><span data-nlc-config-label="icon">Ikon</span><input data-cfg="icon"></label>
        <label><span data-nlc-config-label="label">Navn</span><input data-cfg="label"></label>

        <label>
          <span data-nlc-config-label="style">Brytertype</span>
          <select data-cfg="style">
            <option value="porcelain-toggle" data-nlc-style-option="porcelain-toggle">Klassisk porselensbryter</option>
            <option value="brass-toggle" data-nlc-style-option="brass-toggle">Dobbel europeisk vippe</option>
            <option value="bakelite-rocker" data-nlc-style-option="bakelite-rocker">Bakelitt-vippebryter</option>
            <option value="modern-paddle" data-nlc-style-option="modern-paddle">Moderne vippebryter</option>
            <option value="industrial-rotary" data-nlc-style-option="industrial-rotary">Industriell dreiedimmer</option>
            <option value="knurled-dimmer" data-nlc-style-option="knurled-dimmer">Riflet metalldimmer</option>
            <option value="ceramic-dimmer" data-nlc-style-option="ceramic-dimmer">Porselensdimmer</option>
            <option value="euro-push" data-nlc-style-option="euro-push">Europeisk trykknapp</option>
            <option value="oak-toggle" data-nlc-style-option="oak-toggle">Eikepanel med messingknapper</option>
            <option value="glass-touch" data-nlc-style-option="glass-touch">Berøringsbryter i glass</option>
          </select>
        </label>

        <label><span data-nlc-language-label>Språk</span><select data-cfg="language"><option value="no">Norsk</option><option value="en">English</option><option value="nl">Nederlands</option></select></label>
        <label class="nlc-check"><input data-cfg="showBrightness" type="checkbox"><span data-nlc-config-label="showBrightness">Vis lysstyrke</span></label>
        <label class="nlc-check"><input data-cfg="showIcon" type="checkbox"><span data-nlc-config-label="showIcon">Vis ikon</span></label>
        <label class="nlc-check"><input data-cfg="showStatus" type="checkbox"><span data-nlc-config-label="showStatus">Vis status</span></label>
        <label class="nlc-check"><input data-cfg="showGlow" type="checkbox"><span data-nlc-config-label="showGlow">Vis romlys</span></label>
        <label><span data-nlc-config-label="glowColor">Farge på romlys</span><input data-cfg="glowColor" type="color"></label>
        <label><span data-nlc-config-label="glowIntensity">Styrke på romlys</span><input data-cfg="glowIntensity" type="range" min="0" max="200" step="5"></label>
        <label class="nlc-check nlc-warm-color-setting" data-nlc-warm-color-setting><input data-cfg="showWarmColor" type="checkbox"><span data-nlc-warm-color-label>Bruk lysets fargetemperatur</span></label>
        <label><span data-nlc-config-label="defaultBrightness">Standard lysstyrke %</span><input data-cfg="defaultBrightness" type="number" min="1" max="100"></label>
        <label><span data-nlc-config-label="colorOn">På-farge</span><input data-cfg="colorOn" type="color"></label>
        <label><span data-nlc-config-label="colorAlt">Metall-/detaljfarge</span><input data-cfg="colorAlt" type="color"></label>
        <label><span data-nlc-config-label="colorOff">Av-farge</span><input data-cfg="colorOff" type="color"></label>
        <button class="nlc-save" data-nlc-config-save>Bruk</button>
      </div>
    </div>
  </div>
</section>`;

const css = String.raw`:host,
ha-card,
.shell,
.runtime,
.runtime-content {
  display: block;
  width: 100% !important;
  height: 100% !important;
  min-height: 0 !important;
  box-sizing: border-box !important;
  background: transparent !important;
  box-shadow: none !important;
}

.shell,
.runtime,
.runtime-content {
  padding: 0 !important;
  gap: 0 !important;
  overflow: visible !important;
}

.real-switch-card {
  --nlc-on: #d9a648;
  --nlc-alt: #8d642c;
  --nlc-off: #756f65;
  --nlc-current: var(--nlc-off);
  --nlc-glow: var(--nlc-glow-color, var(--nlc-current));
  --nlc-brightness: 0%;
  --nlc-ring-angle: -135deg;
  --nlc-default-surface: linear-gradient(145deg, #26231e, #171612 62%, #11100d);
  --nlc-surface-background: var(--nlc-design-surface, var(--ddc-card-inner-bg, var(--ddc-card-local-bg, var(--ddc-card-bg, var(--nlc-default-surface)))));
  --nlc-x-scale: 1;
  --nlc-y-scale: 1;
  --nlc-ui-scale: 1;
  --nlc-corner-scale: 1;
  --nlc-radius: 30px;
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 50px;
  position: relative;
  overflow: visible;
  box-sizing: border-box;
  font-family: "Avenir Next", "Gill Sans", "Trebuchet MS", sans-serif;
  background: transparent;
}

.real-switch-card[data-active="on"] { --nlc-current: var(--nlc-on); }
.real-switch-card[data-active="on"][data-use-live-color="true"] { --nlc-current: var(--nlc-live-color, var(--nlc-on)); }

.nlc-stage {
  width: 360px;
  height: 500px;
  position: absolute;
  inset: 0 auto auto 0;
  border-radius: var(--nlc-radius);
  transform-origin: top left;
}

.nlc-switch {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid color-mix(in oklch, #f1e8d7 10%, transparent);
  border-radius: var(--nlc-radius);
  color: #f1ece2;
  background:
    radial-gradient(circle at 50% 24%, color-mix(in oklch, #e2d4bc 6%, transparent), transparent 34%),
    linear-gradient(155deg, color-mix(in oklch, var(--nlc-surface-background) 92%, #c1ad8e 8%), var(--nlc-surface-background));
  box-shadow:
    inset 0 1px 0 color-mix(in oklch, #fff8e9 10%, transparent),
    inset 0 -24px 60px color-mix(in oklch, #0c0b09 22%, transparent);
  cursor: pointer;
  outline: none;
  user-select: none;
  touch-action: manipulation;
  isolation: isolate;
}

.nlc-switch::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, transparent 0 48%, color-mix(in oklch, #fff3dd 3%, transparent) 50%, transparent 52%),
    repeating-linear-gradient(113deg, transparent 0 11px, color-mix(in oklch, #fff0d5 1.4%, transparent) 12px 13px);
}

.nlc-switch:focus-visible {
  outline: 3px solid color-mix(in oklch, var(--nlc-current) 72%, #f5ead8);
  outline-offset: -4px;
}

.real-switch-card[data-surface="transparent"] .nlc-switch { background: transparent; border-color: transparent; box-shadow: none; }
.real-switch-card[data-surface="transparent"] .nlc-switch::before { display: none; }

.room-wash {
  position: absolute;
  left: 50%;
  top: 38%;
  z-index: 0;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, color-mix(in oklch, var(--nlc-glow) var(--nlc-glow-ambient, 18%), transparent), transparent 68%);
  opacity: .12;
  transform: translate(-50%, -50%) scale(.84);
  transition: transform 280ms cubic-bezier(.65,0,.35,1), opacity 180ms cubic-bezier(.65,0,.35,1);
  pointer-events: none;
}

.real-switch-card[data-active="on"] .room-wash { opacity: .72; transform: translate(-50%, -50%) scale(1); }
.real-switch-card[data-show-glow="false"] .room-wash { display: none; }

.switch-bay {
  position: absolute;
  left: 50%;
  top: calc(42px * var(--nlc-y-scale));
  z-index: 3;
  width: 260px;
  height: 312px;
  transform: translateX(-50%) scale(var(--nlc-ui-scale));
  transform-origin: top center;
}

.switch-model {
  display: none;
  position: absolute;
  inset: 0;
  place-items: center;
}

.real-switch-card[data-style="porcelain-toggle"] .switch-porcelain,
.real-switch-card[data-style="brass-toggle"] .switch-brass,
.real-switch-card[data-style="bakelite-rocker"] .switch-bakelite,
.real-switch-card[data-style="modern-paddle"] .switch-paddle,
.real-switch-card[data-style="industrial-rotary"] .switch-industrial,
.real-switch-card[data-style="knurled-dimmer"] .switch-knurled,
.real-switch-card[data-style="ceramic-dimmer"] .switch-ceramic-dimmer,
.real-switch-card[data-style="euro-push"] .switch-euro,
.real-switch-card[data-style="oak-toggle"] .switch-oak,
.real-switch-card[data-style="glass-touch"] .switch-glass { display: grid; }

.material-plate {
  position: relative;
  width: 190px;
  height: 244px;
  box-sizing: border-box;
}

.mount-screw,
.slot-screw,
.brass-screw {
  position: absolute;
  left: 50%;
  z-index: 8;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 2px 4px #302b23, inset 0 1px 1px #f9f1e3;
}

.screw-top { top: 17px; }
.screw-bottom { bottom: 17px; }
.slot-screw::after,
.brass-screw::after {
  content: "";
  position: absolute;
  left: 3px;
  right: 3px;
  top: 6px;
  height: 2px;
  border-radius: 1px;
  background: color-mix(in oklch, #20180e 72%, transparent);
  transform: rotate(-8deg);
}

/* 01 · classic American wall toggle */
.porcelain-plate {
  width: 174px;
  height: 260px;
  border: 1px solid #cbc7bf;
  border-radius: 18px 18px 20px 20px;
  background:
    radial-gradient(ellipse at 28% 8%, #fffefa 0 9%, transparent 34%),
    linear-gradient(145deg, #f7f5ef, #dcd9d2 58%, #efede7);
  box-shadow:
    0 23px 38px color-mix(in oklch, #080705 47%, transparent),
    0 5px 8px color-mix(in oklch, #0d0c09 34%, transparent),
    inset 3px 3px 6px #fffefa,
    inset -4px -6px 9px #bbb7af;
}

.porcelain-plate::before {
  content: "";
  position: absolute;
  inset: 8px;
  border-radius: 12px;
  border: 1px solid color-mix(in oklch, #9f9a92 24%, transparent);
  box-shadow: inset 0 1px 1px #fffefa;
}

.porcelain-plate .mount-screw { background: radial-gradient(circle at 35% 28%, #f8f7f2, #aaa69f 58%, #6e6a64); }

.porcelain-collar {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 58px;
  height: 116px;
  border-radius: 7px;
  transform: translate(-50%, -50%);
  background: linear-gradient(90deg, #a8a59f, #d9d6cf 18%, #b9b6af 78%, #77746e);
  box-shadow: inset 0 7px 10px #77746e, inset 0 -5px 8px #f9f7f1, 0 1px 1px #fffefa;
}

.porcelain-collar::before {
  content: "";
  position: absolute;
  inset: 12px 13px;
  border-radius: 4px;
  background: linear-gradient(180deg, #77746f, #31302d 48%, #77736d);
  box-shadow: inset 0 5px 8px #272624, inset 0 -4px 7px #4f4c48;
}

.porcelain-lever {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 4;
  width: 42px;
  height: 72px;
  border-radius: 5px 5px 9px 9px;
  transform: translate(-50%, -48%) perspective(130px) rotateX(-18deg);
  transform-origin: 50% 75%;
  background: linear-gradient(100deg, #b9b6b0, #f8f6ef 36%, #d4d1ca 68%, #9c9992);
  box-shadow: 0 11px 10px #4a4844, inset 2px 1px 2px #fffefa, inset -2px -2px 3px #a7a39d;
  clip-path: polygon(13% 0, 87% 0, 100% 82%, 82% 100%, 18% 100%, 0 82%);
  transition: transform 150ms cubic-bezier(.65,0,.35,1), box-shadow 150ms cubic-bezier(.65,0,.35,1);
}

.porcelain-lever i { position:absolute;left:8px;right:8px;top:10px;height:2px;border-radius:2px;background:#fffefa;opacity:.7; }
.porcelain-on-mark,.porcelain-off-mark { position:absolute;left:50%;color:#77736c;font-family:"DIN Alternate",sans-serif;font-size:7px;font-weight:900;letter-spacing:.08em;transform:translateX(-50%); }
.porcelain-on-mark { top:-19px; }.porcelain-off-mark { bottom:-19px; }
.real-switch-card[data-active="on"] .porcelain-lever { transform:translate(-50%,-52%) perspective(130px) rotateX(18deg);box-shadow:0 -7px 8px #55524e,inset 2px -1px 2px #fffefa; }

/* 02 · two-gang European rocker */
.brass-plate {
  width: 224px;
  height: 202px;
  border: 1px solid #b9b7b1;
  border-radius: 17px;
  background: linear-gradient(145deg, #f3f1eb, #d4d2cc 58%, #eae8e2);
  box-shadow: 0 23px 38px color-mix(in oklch, #080705 48%, transparent), inset 2px 2px 3px #fbfaf6, inset -3px -4px 5px #aaa8a2;
}

.brass-plate::before { content:"";position:absolute;inset:8px;border:1px solid color-mix(in oklch,#96948f 28%,transparent);border-radius:11px;box-shadow:inset 0 1px 1px #fffefa; }
.brass-plate .slot-screw { background:radial-gradient(circle at 35% 28%,#d6d5d0,#85847f 62%,#4f4e4b); }
.brass-plate .screw-top { left:17px;top:50%;transform:translateY(-50%); }
.brass-plate .screw-bottom { left:auto;right:17px;top:50%;bottom:auto;transform:translateY(-50%); }

.double-rocker-frame {
  position:absolute;
  left:50%;
  top:50%;
  width:146px;
  height:136px;
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:4px;
  padding:4px;
  border-radius:8px;
  transform:translate(-50%,-50%);
  background:#a7a59f;
  box-shadow:inset 0 3px 5px #77756f,0 1px 0 #fffefa;
}

.double-rocker-key {
  position:relative;
  display:grid;
  place-items:end center;
  padding-bottom:13px;
  border-radius:5px;
  color:#8f8c85;
  background:linear-gradient(155deg,#f8f6f0,#d6d4ce 62%,#ebe9e3);
  box-shadow:0 6px 7px #77756f,inset 1px 1px 1px #fffefa;
  transform:perspective(180px) rotateX(-3deg);
  transform-origin:center;
  transition:transform 120ms cubic-bezier(.65,0,.35,1),box-shadow 120ms cubic-bezier(.65,0,.35,1),color 120ms linear;
}

.double-rocker-key i { font-family:"DIN Alternate",sans-serif;font-size:12px;font-style:normal;font-weight:900; }
.real-switch-card[data-active="on"] .double-rocker-on,
.real-switch-card[data-active="off"] .double-rocker-off { color:#5c5953;transform:perspective(180px) rotateX(4deg) translateY(2px);box-shadow:0 2px 4px #85837d,inset 0 2px 3px #bab8b2; }

/* 03 · brown bakelite rocker */
.bakelite-plate {
  border: 1px solid #24130c;
  border-radius: 13px;
  background:
    radial-gradient(circle at 20% 18%, color-mix(in oklch, #f6c29a 9%, transparent), transparent 32%),
    radial-gradient(circle at 78% 82%, color-mix(in oklch, #120804 30%, transparent), transparent 38%),
    linear-gradient(145deg, #5b2d1f, #301710 55%, #472217);
  box-shadow: 0 24px 40px color-mix(in oklch, #080402 56%, transparent), inset 2px 2px 3px #74402d, inset -3px -4px 5px #1b0d09;
}

.bakelite-plate .slot-screw { background: radial-gradient(circle at 35% 30%, #80523a, #3b1d13 66%, #160a07); }

.bakelite-frame {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 88px;
  height: 142px;
  padding: 8px;
  border-radius: 38px;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  background: linear-gradient(90deg, #180b08, #4b251a 48%, #160b07);
  box-shadow: inset 0 6px 11px #0d0604, 0 2px 1px #7d4732;
}

.bakelite-rocker {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  border-radius: 31px;
  overflow: hidden;
  color: #d7b9a2;
  background: linear-gradient(180deg, #5d3023, #2c150f 50%, #51281c);
  box-shadow: inset 0 2px 3px #88503a, 0 5px 8px #100806;
  transform: perspective(180px) rotateX(7deg);
  transform-origin: center;
  transition: transform 130ms cubic-bezier(.65,0,.35,1), box-shadow 130ms cubic-bezier(.65,0,.35,1);
}

.bakelite-rocker span { display: grid; place-items: center; font-family: "DIN Alternate", sans-serif; font-size: 21px; font-weight: 800; text-shadow: 0 1px #180b08; }
.real-switch-card[data-active="on"] .bakelite-rocker { transform: perspective(180px) rotateX(-7deg); box-shadow: inset 0 -2px 3px #814833, 0 -2px 6px #100806; }

/* 04 · contemporary architectural paddle */
.paddle-plate {
  width: 174px;
  border: 1px solid #aaa9a4;
  border-radius: 5px;
  background: linear-gradient(120deg, #eeece6, #cfcec9 48%, #f3f1eb);
  box-shadow: 0 22px 36px color-mix(in oklch, #080807 45%, transparent), inset 1px 1px 0 #fbfaf6, inset -2px -2px 3px #aaa9a4;
}

.paddle-seam {
  position: absolute;
  inset: 19px 22px;
  border-radius: 4px;
  background: #b7b6b1;
  box-shadow: inset 0 1px 3px #85847f, 0 1px 0 #f6f4ee;
}

.paddle-face {
  position: absolute;
  inset: 21px 24px;
  border-radius: 3px;
  background: linear-gradient(155deg, #f4f2ec, #d5d4cf 58%, #ebe9e3);
  box-shadow: 0 5px 7px #8e8d88, inset 1px 1px 1px #fbfaf7;
  transform: perspective(260px) rotateX(-4deg);
  transform-origin: center;
  transition: transform 140ms cubic-bezier(.65,0,.35,1), box-shadow 140ms cubic-bezier(.65,0,.35,1);
}

.paddle-highlight { position: absolute; left: 12px; right: 12px; top: 9px; height: 1px; background: #fcfbf7; opacity: .8; }
.real-switch-card[data-active="on"] .paddle-face { transform: perspective(260px) rotateX(4deg); box-shadow: 0 -3px 6px #8e8d88, inset 1px -1px 1px #faf9f5; }

/* 05 · cast industrial rotary */
.industrial-plate {
  width: 210px;
  height: 230px;
  border: 2px solid #343a3d;
  border-radius: 12px;
  background:
    repeating-linear-gradient(0deg, color-mix(in oklch, #f6f0df 3%, transparent) 0 1px, transparent 1px 4px),
    linear-gradient(145deg, #707779, #3d4447 54%, #596064);
  box-shadow: 0 24px 40px color-mix(in oklch, #060707 56%, transparent), inset 2px 2px 3px #92999a, inset -3px -4px 5px #2d3234;
}

.hex-bolt { position: absolute; width: 17px; height: 17px; background: linear-gradient(145deg, #9ba0a0, #454a4b); clip-path: polygon(25% 7%,75% 7%,100% 50%,75% 93%,25% 93%,0 50%); box-shadow: inset 0 1px 1px #ccd0ce; }
.bolt-a { left: 14px; top: 14px; }.bolt-b { right: 14px; top: 14px; }.bolt-c { left: 14px; bottom: 14px; }.bolt-d { right: 14px; bottom: 14px; }
.industrial-scale { position: absolute; left: 50%; top: 50%; width: 150px; height: 150px; border-radius: 50%; transform: translate(-50%,-50%); }
.industrial-scale i { position: absolute; left: 73px; top: -1px; width: 3px; height: 12px; border-radius: 2px; background: #d7d1c4; transform-origin: 2px 76px; transform: rotate(calc(-135deg + var(--tick) * 27deg)); box-shadow: 0 1px 1px #1b1e1f; }
.dimmer-end { position:absolute;z-index:3;color:#d7d1c4;font-family:"DIN Alternate",sans-serif;font-size:12px;font-weight:900;letter-spacing:.02em;text-shadow:0 1px 2px #1b1e1f;pointer-events:none; }
.dimmer-zero { left:29px;bottom:28px; }.dimmer-hundred { right:23px;bottom:28px; }

.industrial-knob {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 104px;
  height: 104px;
  border-radius: 50%;
  transform: translate(-50%,-50%) rotate(var(--nlc-ring-angle));
  background:
    repeating-conic-gradient(from 0deg, #282b2c 0 4deg, #4d5152 4deg 8deg),
    radial-gradient(circle, #4f5354, #232526);
  box-shadow: 0 10px 16px #202324, inset 0 2px 2px #777c7c, inset 0 -4px 5px #151717;
  transition: transform 120ms cubic-bezier(.65,0,.35,1);
}

.industrial-knob::after { content:""; position:absolute; inset:14px; border-radius:50%; background:radial-gradient(circle at 38% 30%, #4f5455, #242728 68%); box-shadow:inset 0 1px 1px #777b7b; }
.industrial-knob span { position:absolute; left:50%; top:7px; z-index:2; width:5px; height:27px; border-radius:3px; background:#e1b94f; transform:translateX(-50%); box-shadow:0 1px 2px #151616; }

/* 06 · precision knurled dimmer */
.knurled-plate {
  border: 1px solid #555857;
  border-radius: 7px;
  background:
    repeating-linear-gradient(90deg, color-mix(in oklch, #fff 7%, transparent) 0 1px, transparent 1px 4px),
    linear-gradient(145deg, #bbbcb8, #707472 54%, #a1a39f);
  box-shadow: 0 23px 40px color-mix(in oklch, #070808 50%, transparent), inset 1px 1px 1px #d7d8d3, inset -2px -2px 3px #4d504f;
}

.knurled-plate .slot-screw { background: radial-gradient(circle at 35% 30%, #d5d6d1, #777a78 66%, #454746); }
.knurled-scale { position:absolute; left:50%; bottom:34px; width:146px; display:flex; justify-content:space-between; transform:translateX(-50%); color:#303432; font-family:"DIN Alternate",sans-serif; font-size:12px; font-weight:900; letter-spacing:.02em; text-shadow:0 1px #d1d2cd; }
.knurled-dial {
  position:absolute;
  left:50%;
  top:50%;
  width:126px;
  height:126px;
  border-radius:50%;
  transform:translate(-50%,-50%) rotate(var(--nlc-ring-angle));
  background:repeating-conic-gradient(#bfc0bc 0 3deg,#676b69 3deg 6deg);
  box-shadow:0 13px 19px #404341,inset 0 2px 3px #e4e4df,inset 0 -4px 6px #555856;
  transition:transform 120ms cubic-bezier(.65,0,.35,1);
}
.knurled-dial::after { content:"";position:absolute;inset:11px;border-radius:50%;background:radial-gradient(circle at 35% 28%,#d9dad5,#858987 58%,#616563);box-shadow:inset 1px 1px 1px #eeeeea,inset -2px -3px 4px #555957; }
.knurled-dial span { position:absolute;left:50%;top:7px;z-index:2;width:4px;height:32px;border-radius:2px;background:#2f3332;transform:translateX(-50%);box-shadow:1px 0 #dcddd8; }

/* 07 · ceramic rotary dimmer */
.ceramic-dimmer-plate {
  border:1px solid #d5cec2;
  border-radius:50%;
  width:218px;
  height:218px;
  background:radial-gradient(circle at 36% 28%,#fffdf7,#dfd9cf 64%,#bcb4a8);
  box-shadow:0 23px 40px color-mix(in oklch,#080705 50%,transparent),inset 4px 4px 8px #fffdf8,inset -6px -7px 10px #b5ada2;
}
.ceramic-dimmer-plate .mount-screw { background:radial-gradient(circle at 35% 28%,#fffefa,#c8c0b5 58%,#8f877d); }
.ceramic-dimmer-plate .screw-top { top:10px; }.ceramic-dimmer-plate .screw-bottom { bottom:10px; }
.ceramic-ticks { position:absolute;inset:28px;border-radius:50%;background:repeating-conic-gradient(from -135deg,#857c70 0 1.2deg,transparent 1.2deg 15deg);-webkit-mask-image:radial-gradient(circle,transparent 0 68%,#000 69% 100%),conic-gradient(from -135deg,#000 0 270deg,transparent 270deg 360deg);-webkit-mask-composite:source-in;mask-image:radial-gradient(circle,transparent 0 68%,#000 69% 100%),conic-gradient(from -135deg,#000 0 270deg,transparent 270deg 360deg);mask-composite:intersect;opacity:.62; }
.ceramic-dimmer-plate .dimmer-end { color:#615950;text-shadow:0 1px #fffaf1; }
.ceramic-dimmer-plate .dimmer-zero { left:25px;bottom:31px; }.ceramic-dimmer-plate .dimmer-hundred { right:18px;bottom:31px; }
.ceramic-dial {
  position:absolute;
  left:50%;top:50%;
  width:112px;height:112px;
  border-radius:50%;
  transform:translate(-50%,-50%) rotate(var(--nlc-ring-angle));
  background:radial-gradient(circle at 34% 28%,#fffef9,#d8d1c6 60%,#a29a8f);
  box-shadow:0 10px 14px #777066,inset 3px 3px 4px #fffef9,inset -4px -5px 7px #aaa297;
  transition:transform 120ms cubic-bezier(.65,0,.35,1);
}
.ceramic-dial span { position:absolute;left:50%;top:9px;width:5px;height:30px;border-radius:3px;background:#544c43;transform:translateX(-50%);box-shadow:1px 0 #f8f1e7; }

/* 08 · European recessed push button */
.euro-plate {
  width:194px;
  height:224px;
  border:1px solid #b9b8b2;
  border-radius:7px;
  background:linear-gradient(145deg,#f0eee8,#cfcec8 55%,#e7e5df);
  box-shadow:0 22px 38px color-mix(in oklch,#080807 48%,transparent),inset 1px 1px 1px #fbfaf6,inset -3px -3px 5px #aaa9a4;
}
.euro-bezel { position:absolute;left:50%;top:50%;width:130px;height:130px;border-radius:50%;transform:translate(-50%,-50%);background:linear-gradient(145deg,#d6d5cf,#f1efe9);box-shadow:inset 0 3px 7px #a09f9a,0 1px 1px #fffef9; }
.euro-button { position:absolute;inset:12px;display:grid;place-items:center;border-radius:50%;color:#817e75;background:radial-gradient(circle at 37% 30%,#f8f6f0,#d4d2cc 66%,#b6b4ae);box-shadow:0 8px 10px #93918c,inset 2px 2px 2px #fffefb;transform:translateY(-2px);transition:transform 100ms cubic-bezier(.65,0,.35,1),box-shadow 100ms cubic-bezier(.65,0,.35,1),color 120ms linear; }
.euro-button ha-icon { --mdc-icon-size:40px; }
.euro-led { position:absolute;left:50%;bottom:28px;width:7px;height:7px;border-radius:50%;transform:translateX(-50%);background:#716e66;box-shadow:inset 0 1px 1px #403e39; }
.real-switch-card[data-active="on"] .euro-button { color:var(--nlc-current);transform:translateY(2px);box-shadow:0 3px 5px #96948e,inset 0 2px 4px #b8b6b0; }
.real-switch-card[data-active="on"] .euro-led { background:var(--nlc-current);box-shadow:0 0 8px color-mix(in oklch,var(--nlc-current) 62%,transparent); }

/* 09 · quarter-sawn oak with paired brass push buttons */
.oak-plate {
  width:224px;
  height:194px;
  border:1px solid #51351d;
  border-radius:14px;
  background:
    repeating-radial-gradient(ellipse at -28% 50%,transparent 0 14px,color-mix(in oklch,#3a2413 18%,transparent) 15px 17px,transparent 18px 29px),
    linear-gradient(92deg,#a87843,#70451f 42%,#b98249 72%,#7b4e27);
  box-shadow:0 24px 40px color-mix(in oklch,#080502 55%,transparent),inset 2px 2px 2px #d4a26b,inset -3px -4px 6px #51351d;
}
.oak-plate::before { content:"";position:absolute;inset:7px;border-radius:7px;border:1px solid color-mix(in oklch,#402610 38%,transparent);box-shadow:inset 0 0 18px color-mix(in oklch,#2c190b 18%,transparent); }
.oak-plate .brass-screw { background:radial-gradient(circle at 35% 28%,#f0c778,#916027 63%,#4c2f11); }
.oak-plate .screw-top { left:19px;top:50%;transform:translateY(-50%); }
.oak-plate .screw-bottom { left:auto;right:19px;top:50%;bottom:auto;transform:translateY(-50%); }
.oak-button-bank { position:absolute;left:50%;top:50%;width:128px;display:grid;grid-template-columns:1fr 1fr;gap:22px;transform:translate(-50%,-50%); }
.oak-push { position:relative;width:53px;height:53px;display:grid;place-items:center;border-radius:50%;color:#4a2c10;background:radial-gradient(circle at 36% 28%,#f1cc79,#b1772f 55%,#573613 100%);box-shadow:0 9px 10px #3b250f,inset 0 2px 2px #f4d892;transform:translateY(-4px);transition:transform 110ms cubic-bezier(.65,0,.35,1),box-shadow 110ms cubic-bezier(.65,0,.35,1); }
.oak-push::before { content:"";position:absolute;inset:-10px;border-radius:50%;background:radial-gradient(circle at 38% 30%,#e8bd66,#875620 62%,#3d250d);box-shadow:0 5px 8px #3d260f,inset 0 2px 2px #f2cf83;z-index:-1; }
.oak-push i { position:absolute;inset:9px;border-radius:50%;background:radial-gradient(circle at 36% 28%,#eec97b,#a46b28 67%,#694016);box-shadow:inset 0 1px 1px #f9dda1; }
.oak-push b { position:relative;z-index:2;font-family:"DIN Alternate",sans-serif;font-size:13px;font-weight:900; }
.real-switch-card[data-active="on"] .oak-push-on,.real-switch-card[data-active="off"] .oak-push-off { transform:translateY(1px);box-shadow:0 3px 5px #3b250f,inset 0 3px 4px #754919; }

/* 10 · smoked glass capacitive switch */
.glass-plate {
  width:196px;
  height:232px;
  border:1px solid #6c6f6e;
  border-radius:11px;
  overflow:hidden;
  background:linear-gradient(145deg,#4c504e,#202321 46%,#343836 72%,#1b1e1c);
  box-shadow:0 25px 42px color-mix(in oklch,#050605 58%,transparent),inset 1px 1px 0 #757976,inset -2px -3px 4px #111311;
}
.glass-plate::before { content:"";position:absolute;inset:8px;border:1px solid color-mix(in oklch,#d9ded8 15%,transparent);border-radius:7px;box-shadow:inset 0 0 20px color-mix(in oklch,#cfd5cf 5%,transparent); }
.glass-reflection { position:absolute;left:-45px;top:-20px;width:150px;height:310px;background:linear-gradient(100deg,transparent 18%,color-mix(in oklch,#eef4ee 12%,transparent) 48%,transparent 70%);transform:skewX(-12deg);pointer-events:none; }
.glass-touch-zone { position:absolute;left:50%;top:50%;width:98px;height:98px;display:grid;place-items:center;border:1px solid #666b67;border-radius:50%;transform:translate(-50%,-50%);color:#8d928e;background:radial-gradient(circle,#343835,#202320 70%);box-shadow:inset 0 0 12px #111411,0 1px 0 #686d69;transition:transform 100ms cubic-bezier(.65,0,.35,1),color 130ms linear,box-shadow 130ms linear; }
.glass-touch-zone ha-icon { --mdc-icon-size:42px; }
.glass-led { position:absolute;left:50%;bottom:29px;width:28px;height:3px;border-radius:3px;transform:translateX(-50%);background:#606460;box-shadow:inset 0 1px 1px #242624; }
.real-switch-card[data-active="on"] .glass-touch-zone { color:var(--nlc-current);transform:translate(-50%,-50%) scale(.97);box-shadow:inset 0 0 12px #111411,0 0 16px color-mix(in oklch,var(--nlc-current) 24%,transparent); }
.real-switch-card[data-active="on"] .glass-led { background:var(--nlc-current);box-shadow:0 0 10px color-mix(in oklch,var(--nlc-current) 64%,transparent); }

.real-switch-card[data-state-change="pulse"] .switch-model { animation:switch-settle 240ms cubic-bezier(.22,1,.36,1); }
@keyframes switch-settle { from { opacity:.72; transform:scale(.985); } to { opacity:1; transform:scale(1); } }

.nlc-meta {
  position:absolute;
  left:calc(24px * var(--nlc-x-scale));
  right:calc(24px * var(--nlc-x-scale));
  bottom:calc(25px * var(--nlc-y-scale));
  z-index:6;
  min-width:0;
  display:grid;
  grid-template-columns:auto minmax(0,1fr);
  align-items:center;
  gap:12px;
  pointer-events:none;
}
.nlc-meta-icon { color:var(--nlc-current);--mdc-icon-size:27px;filter:drop-shadow(0 1px 2px #0a0907);transition:color 140ms linear; }
.nlc-copy { min-width:0;display:grid;gap:3px; }
.nlc-label { overflow:hidden;color:#ece5d9;font-size:16px;font-weight:700;letter-spacing:.01em;line-height:1.15;text-overflow:ellipsis;white-space:nowrap;text-shadow:0 1px 2px #090806; }
.nlc-status-row { display:flex;align-items:center;gap:8px;color:color-mix(in oklch,var(--nlc-current) 82%,#eee4d4);font-family:"DIN Alternate","Avenir Next",sans-serif;font-size:11px;font-weight:800;letter-spacing:.13em;text-transform:uppercase; }
.nlc-percent { color:#b7afa2;letter-spacing:.04em; }
.nlc-card-name,.nlc-top-icon { display:none; }
.real-switch-card[data-show-icon="false"] .nlc-meta-icon { display:none; }
.real-switch-card[data-show-icon="false"] .nlc-meta { grid-template-columns:minmax(0,1fr); }
.real-switch-card[data-show-status="false"] .nlc-status-row { display:none; }
.real-switch-card[data-show-brightness="false"] .nlc-percent,
.real-switch-card[data-active="off"] .nlc-percent { display:none; }
.real-switch-card[data-unavailable="true"] .switch-bay { filter:saturate(.35);opacity:.58; }
.real-switch-card[data-unavailable="true"] .nlc-status { color:#d88678; }

.nlc-tune-row { position:absolute;inset:0;z-index:9;display:none;pointer-events:none; }
.real-switch-card[data-has-light-tools="true"] .nlc-tune-row { display:block; }
.nlc-tune-btn {
  position:absolute;
  z-index:9;
  width:42px;
  height:42px;
  padding:0;
  display:none;
  place-items:center;
  border:1px solid #5d574e;
  border-radius:50%;
  color:#c9c0b2;
  background:#2b2924;
  box-shadow:0 5px 10px #0d0c09,inset 0 1px 0 #5c574e;
  cursor:pointer;
  pointer-events:auto;
  transition:transform 100ms cubic-bezier(.65,0,.35,1),color 130ms linear,background 130ms linear;
}
.nlc-tune-btn:active { transform:translateY(1px) scale(.96); }
.nlc-tune-btn:focus-visible { outline:2px solid color-mix(in oklch,var(--nlc-current) 76%,#efe3d0);outline-offset:2px; }
.nlc-tune-btn ha-icon { --mdc-icon-size:20px; }
.nlc-tune-temp { left:calc(18px * var(--nlc-x-scale));top:calc(18px * var(--nlc-y-scale)); }
.nlc-tune-color { left:calc(18px * var(--nlc-x-scale));top:calc(70px * var(--nlc-y-scale)); }
.real-switch-card[data-has-temperature="true"] .nlc-tune-temp,
.real-switch-card[data-has-color="true"] .nlc-tune-color,
.real-switch-card[data-show-brightness-tool="true"] .nlc-brightness-btn { display:grid; }
.nlc-brightness-btn { right:calc(18px * var(--nlc-x-scale));top:calc(18px * var(--nlc-y-scale)); }

.nlc-config-btn {
  position:absolute;
  right:calc(18px * var(--nlc-x-scale));
  bottom:calc(18px * var(--nlc-y-scale));
  z-index:30;
  width:38px;
  height:38px;
  padding:0;
  display:grid;
  place-items:center;
  border:1px solid #514c44;
  border-radius:50%;
  color:#aaa195;
  background:#26241f;
  box-shadow:0 5px 10px #0d0c09,inset 0 1px 0 #544f47;
  cursor:pointer;
  opacity:.7;
  transform:scale(var(--nlc-corner-scale));
  transform-origin:bottom right;
  transition:opacity 130ms linear,color 130ms linear;
}
.nlc-config-btn:hover { opacity:1;color:#eee5d7; }
.nlc-config-btn:focus-visible { outline:2px solid color-mix(in oklch,var(--nlc-current) 76%,#efe3d0);outline-offset:2px; }
.nlc-config-btn ha-icon { --mdc-icon-size:20px; }

.nlc-tune-backdrop,.nlc-config-backdrop { position:fixed;inset:0;z-index:2147483000;width:100vw;height:100vh;display:none;place-items:center;padding:clamp(18px,4vw,44px);box-sizing:border-box;background:color-mix(in oklch,#0d0c0a 78%,transparent);backdrop-filter:blur(12px);pointer-events:none;overflow-y:auto; }
.nlc-tune-backdrop.open,.nlc-config-backdrop.open { display:grid;pointer-events:auto; }
.nlc-tune-panel,.nlc-config-panel { position:relative;width:min(360px,calc(100vw - 36px));max-height:calc(100vh - 48px);overflow-y:auto;padding:24px;box-sizing:border-box;border:1px solid #565046;border-radius:18px;color:#eee7dc;background:linear-gradient(145deg,#302d27,#1f1d19);box-shadow:0 28px 80px #080705; }
.nlc-tune-panel h3,.nlc-config-panel h3 { margin:0 42px 18px 0;font-family:"Avenir Next","Gill Sans",sans-serif;font-size:22px;font-weight:750;letter-spacing:-.02em; }
.nlc-tune-section { display:none;gap:14px; }
.nlc-tune-backdrop[data-mode="brightness"] [data-nlc-brightness-section],.nlc-tune-backdrop[data-mode="temperature"] [data-nlc-temperature-section],.nlc-tune-backdrop[data-mode="color"] [data-nlc-color-section] { display:grid; }
.nlc-tune-section label,.nlc-config-panel label { display:grid;gap:6px;margin-bottom:12px;color:#c8bfb2;font-size:13px;font-weight:650; }
.nlc-tune-section input[type="range"] { appearance:none;width:100%;height:15px;border:1px solid #625b50;border-radius:999px;outline:none;cursor:pointer; }
.nlc-tune-backdrop [data-nlc-brightness] { background:linear-gradient(90deg,#423f39,color-mix(in oklch,var(--nlc-current) 88%,#f1e6d4)); }
.nlc-tune-backdrop [data-nlc-kelvin] { background:linear-gradient(90deg,#d87836,#e8b767 38%,#eee7ce 58%,#b6cde0); }
.nlc-tune-backdrop [data-nlc-hue] { background:linear-gradient(90deg,#c9584f,#d7a33f,#79a75d,#4b9f8d,#557eb0,#8c67a7,#c65f84); }
.nlc-tune-backdrop [data-nlc-saturation] { background:linear-gradient(90deg,#d9d5cc,hsl(var(--nlc-hue,45),70%,50%)); }
.nlc-tune-value { color:#a9a095;font-size:13px;font-weight:700; }
.nlc-color-preview { width:100%;height:42px;border:1px solid #655e54;border-radius:9px;background:hsl(var(--nlc-hue,45),var(--nlc-saturation,80%),52%); }
.nlc-tune-close,.nlc-config-close { position:absolute;top:14px;right:14px;width:34px;height:34px;border:1px solid #5f584e;border-radius:50%;color:#eee6d9;background:#37332d;font-size:22px;line-height:1;cursor:pointer; }
.nlc-entity-field { position:relative; }
.nlc-entity-menu { display:none;max-height:190px;overflow-y:auto;gap:4px;margin-top:2px;padding:6px;border:1px solid #5d564c;border-radius:10px;background:#27241f; }
.nlc-entity-menu.open { display:grid; }
.nlc-entity-option { width:100%;min-height:48px;display:grid;gap:2px;padding:8px 10px;border:0;border-radius:7px;color:#eee7dc;text-align:left;background:transparent;cursor:pointer; }
.nlc-entity-option:hover,.nlc-entity-option.active { background:#3c372f; }
.nlc-entity-option strong,.nlc-entity-option span { overflow:hidden;text-overflow:ellipsis;white-space:nowrap; }
.nlc-entity-option strong { font-size:13px; }.nlc-entity-option span { color:#aaa095;font-size:11px; }
.nlc-entity-empty { padding:12px;color:#aaa095;font-size:12px;text-align:center; }
.nlc-config-panel input,.nlc-config-panel select { height:40px;border:1px solid #5c554b;border-radius:9px;padding:0 11px;box-sizing:border-box;color:#f0e9dd;background:#2a2722;outline:none; }
.nlc-config-panel input:focus,.nlc-config-panel select:focus { border-color:color-mix(in oklch,var(--nlc-current) 70%,#e9ddca); }
.nlc-config-panel input[type="color"] { padding:4px; }.nlc-config-panel input[type="range"] { padding:0;accent-color:var(--nlc-current); }
.nlc-check { grid-template-columns:20px 1fr;align-items:center; }.nlc-check input { width:18px;height:18px;padding:0; }.nlc-warm-color-setting.is-hidden { display:none !important; }
.nlc-save { width:100%;height:43px;margin-top:8px;border:0;border-radius:10px;color:#251c0d;background:color-mix(in oklch,var(--nlc-current) 84%,#e8d2a7);font-weight:850;cursor:pointer; }

@media (hover:hover) and (pointer:fine) {
  .switch-model:not([data-nlc-dimmer]):hover { transform:translateY(-1px); }
  .nlc-tune-btn:hover { color:#f1e8da;background:#37332c; }
}

@media (pointer:coarse) {
  .nlc-tune-btn { width:46px;height:46px; }
  .nlc-config-btn { width:44px;height:44px; }
}

@media (prefers-reduced-motion:reduce) {
  .real-switch-card *,
  .real-switch-card *::before,
  .real-switch-card *::after { animation:none !important;transition-duration:.01ms !important; }
}`;

function replaceOrThrow(value, pattern, replacement, label) {
  const next = value.replace(pattern, replacement);
  if (next === value) throw new Error(`Could not replace ${label}`);
  return next;
}

let javascript = sourceCard.js;

javascript = replaceOrThrow(
  javascript,
  /const STYLE_OPTIONS = new Set\(\[[\s\S]*?\]\);/,
  `const STYLE_OPTIONS = new Set([\n  'porcelain-toggle',\n  'brass-toggle',\n  'bakelite-rocker',\n  'modern-paddle',\n  'industrial-rotary',\n  'knurled-dimmer',\n  'ceramic-dimmer',\n  'euro-push',\n  'oak-toggle',\n  'glass-touch'\n]);`,
  'style options'
);

const englishStyleReplacements = new Map([
  ["'toggle-switch': 'Toggle switch'", "'porcelain-toggle': 'Porcelain toggle'"],
  ["'slider-switch': 'Slider switch vertical'", "'brass-toggle': 'Double European rocker'"],
  ["'slider-switch-horizontal': 'Slider switch horizontal'", "'bakelite-rocker': 'Bakelite rocker'"],
  ["'circle-button': 'Circle button'", "'modern-paddle': 'Modern paddle switch'"],
  ["'icon-switch': 'Icon switch'", "'industrial-rotary': 'Industrial rotary dimmer'"],
  ["'rocker-switch': 'Rocker switch'", "'knurled-dimmer': 'Knurled metal dimmer'"],
  ["'card-switch': 'Card switch'", "'ceramic-dimmer': 'Ceramic rotary dimmer'"],
  ["'dot-switch': 'Dot switch'", "'euro-push': 'European push button'"],
  ["'ring-dimmer': 'Ring dimmer switch'", "'oak-toggle': 'Oak panel with brass buttons'"],
  ["'minimal-dot': 'Minimal dot switch'", "'glass-touch': 'Smoked glass touch switch'"]
]);

for (const [before, after] of englishStyleReplacements) {
  javascript = replaceOrThrow(javascript, before, after, before);
}

const dutchStyleReplacements = new Map([
  ["'toggle-switch': 'Schakelaar'", "'porcelain-toggle': 'Porseleinen tuimelschakelaar'"],
  ["'slider-switch': 'Verticale schuifschakelaar'", "'brass-toggle': 'Dubbele Europese wipschakelaar'"],
  ["'slider-switch-horizontal': 'Horizontale schuifschakelaar'", "'bakelite-rocker': 'Bakelieten wipschakelaar'"],
  ["'circle-button': 'Ronde knop'", "'modern-paddle': 'Moderne vlakschakelaar'"],
  ["'icon-switch': 'Pictogramschakelaar'", "'industrial-rotary': 'Industriële draaidimmer'"],
  ["'rocker-switch': 'Wipschakelaar'", "'knurled-dimmer': 'Gekartelde metalen dimmer'"],
  ["'card-switch': 'Kaartschakelaar'", "'ceramic-dimmer': 'Keramische draaidimmer'"],
  ["'dot-switch': 'Puntschakelaar'", "'euro-push': 'Europese drukknop'"],
  ["'ring-dimmer': 'Ringdimmer'", "'oak-toggle': 'Eiken paneel met messing knoppen'"],
  ["'minimal-dot': 'Minimale puntschakelaar'", "'glass-touch': 'Glazen aanraakschakelaar'"]
]);

for (const [before, after] of dutchStyleReplacements) {
  javascript = replaceOrThrow(javascript, before, after, before);
}

const norwegianTranslation = String.raw`  no: {
    on: 'PÅ',
    off: 'AV',
    unavailable: 'Ikke tilgjengelig',
    turnOn: 'Slå på',
    turnOff: 'Slå av',
    brightness: 'Lysstyrke',
    warmth: 'Fargetemperatur',
    color: 'Farge',
    light: 'Lys',
    lightControls: 'Lyskontroller',
    lightConfig: 'Bryteroppsett',
    apply: 'Bruk',
    noMatchingLightsOrSwitches: 'Ingen passende lys eller brytere',
    language: 'Språk',
    showWarmColorInSwitch: 'Bruk lysets fargetemperatur',
    entity: 'Entitet',
    icon: 'Ikon',
    label: 'Navn',
    style: 'Brytertype',
    showBrightness: 'Vis lysstyrke',
    showIcon: 'Vis ikon',
    showStatus: 'Vis status',
    showGlow: 'Vis romlys',
    glowColor: 'Farge på romlys',
    glowIntensity: 'Styrke på romlys',
    defaultBrightness: 'Standard lysstyrke %',
    colorOn: 'På-farge',
    colorAlt: 'Metall-/detaljfarge',
    colorOff: 'Av-farge',
    styles: {
      'porcelain-toggle': 'Klassisk porselensbryter',
      'brass-toggle': 'Dobbel europeisk vippe',
      'bakelite-rocker': 'Bakelitt-vippebryter',
      'modern-paddle': 'Moderne vippebryter',
      'industrial-rotary': 'Industriell dreiedimmer',
      'knurled-dimmer': 'Riflet metalldimmer',
      'ceramic-dimmer': 'Porselensdimmer',
      'euro-push': 'Europeisk trykknapp',
      'oak-toggle': 'Eikepanel med messingknapper',
      'glass-touch': 'Berøringsbryter i glass'
    }
  },
`;

javascript = replaceOrThrow(javascript, /  nl: \{/, norwegianTranslation + '  nl: {', 'Norwegian translation');
javascript = replaceOrThrow(javascript, "return STYLE_OPTIONS.has(next) ? next : 'toggle-switch';", "return STYLE_OPTIONS.has(next) ? next : 'porcelain-toggle';", 'style fallback');
javascript = replaceOrThrow(
  javascript,
  /return \['slider-switch', 'slider-switch-horizontal', 'ring-dimmer', 'dot-switch'\]\.includes\(normalizeSwitchStyle\(style\)\);/,
  "return ['industrial-rotary', 'knurled-dimmer', 'ceramic-dimmer'].includes(normalizeSwitchStyle(style));",
  'inline brightness styles'
);

javascript = replaceOrThrow(
  javascript,
  `  const deg = (Math.atan2(dy, dx) * 180 / Math.PI + 450) % 360;
  return clamp(Math.round((deg / 360) * 100), 0, 100);`,
  `  const rawDeg = (Math.atan2(dy, dx) * 180 / Math.PI + 360) % 360;
  let sweep = (rawDeg - 135 + 360) % 360;
  if (sweep > 270) sweep = dx >= 0 ? 270 : 0;
  return clamp(Math.round((sweep / 270) * 100), 0, 100);`,
  '270-degree dimmer interaction'
);

javascript = replaceOrThrow(
  javascript,
  "card.style.setProperty('--nlc-ring-angle', (value * 3.6) + 'deg');",
  "card.style.setProperty('--nlc-ring-angle', (-135 + (value * 2.7)) + 'deg');",
  'preview dimmer angle'
);

javascript = replaceOrThrow(
  javascript,
  "card.style.setProperty('--nlc-ring-angle', (data.percent * 3.6) + 'deg');",
  "card.style.setProperty('--nlc-ring-angle', (-135 + (data.percent * 2.7)) + 'deg');",
  'rendered dimmer angle'
);

javascript = javascript
  .replace("const CONFIG_PORTAL_STYLE_ID = 'neo-light-card-config-portal-style-v1';", "const CONFIG_PORTAL_STYLE_ID = 'realistic-light-switch-config-portal-style-v1';")
  .replace("const TUNE_PORTAL_STYLE_ID = 'neo-light-card-tune-portal-style-v1';", "const TUNE_PORTAL_STYLE_ID = 'realistic-light-switch-tune-portal-style-v1';")
  .replace("return 'neo-light-card-config:v1:' + dashboardId + ':' + cardId;", "return 'realistic-light-switch-config:v1:' + dashboardId + ':' + cardId;");

const card = {
  type: 'custom:ddc-html-card',
  title: '',
  html,
  css,
  js: javascript,
  rerun_on_hass_update: false,
  neo_light_config: {
    entity: 'light.taklampe_kontor_2',
    icon: 'mdi:light-switch',
    label: 'Taklampe kontor',
    style: 'porcelain-toggle',
    language: 'no',
    showBrightness: 'true',
    showIcon: 'true',
    showStatus: 'true',
    showGlow: 'true',
    glowColor: '#f0c66c',
    glowIntensity: '85',
    showWarmColor: 'true',
    defaultBrightness: '75',
    colorOn: '#d9a648',
    colorAlt: '#8d642c',
    colorOff: '#756f65'
  }
};

const cardId = 'ddc_card_8bfb5b50-651c-43af-bf76-3220d71bf20a';
const entry = {
  id: cardId,
  card,
  position: { x: 1600, y: 300 },
  size: { width: 300, height: 440 },
  z: 21,
  tabId: 'home',
  overflow: 'visible',
  card_style: {
    background: '#1d1b17',
    text_color: '#f1ece2'
  }
};

const responsiveEntries = {};
for (const key of ['desktop_landscape', 'tablet_landscape', 'tablet_portrait', 'mobile_landscape', 'mobile_portrait']) {
  responsiveEntries[key] = structuredClone(entry);
}

const output = {
  kind: 'ddc-card',
  version: 2,
  exported_at: new Date().toISOString(),
  source_storage_key: source.source_storage_key || 'layout',
  connector_card_id: cardId,
  entry,
  connectors: [],
  responsive_entries: responsiveEntries,
  responsive_connectors: {
    desktop: { connectors: [], landscape: { connectors: [] } },
    tablet: { connectors: [], landscape: { connectors: [] }, portrait: { connectors: [] } },
    mobile: { connectors: [], landscape: { connectors: [] }, portrait: { connectors: [] } }
  }
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2) + '\n');
console.log(outputPath);

const previewPath = process.argv[4];
if (previewPath) {
  const previewStyles = [
    ['porcelain-toggle', '01', 'Porselen'],
    ['brass-toggle', '02', 'Dobbel vippe'],
    ['bakelite-rocker', '03', 'Bakelitt'],
    ['modern-paddle', '04', 'Moderne vippe'],
    ['industrial-rotary', '05', 'Industridimmer'],
    ['knurled-dimmer', '06', 'Riflet metall'],
    ['ceramic-dimmer', '07', 'Porselensdimmer'],
    ['euro-push', '08', 'Trykknapp'],
    ['oak-toggle', '09', 'Messingknapper i eik'],
    ['glass-touch', '10', 'Røykfarget glass']
  ];

  const previewDocument = String.raw`<!doctype html>
<html lang="no">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>10 realistiske lysbrytere</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; color: #ebe3d6; background: #11100d; font-family: "Avenir Next", "Gill Sans", sans-serif; }
    main { width: min(1740px, 100%); margin: 0 auto; padding: 44px 38px 72px; }
    .page-head { display: flex; align-items: end; justify-content: space-between; gap: 28px; margin: 0 0 32px; padding: 0 4px 22px; border-bottom: 1px solid #39352f; }
    h1 { max-width: 750px; margin: 0; font-size: clamp(34px, 4vw, 62px); font-weight: 630; letter-spacing: -.045em; line-height: .98; }
    .page-head p { max-width: 390px; margin: 0; color: #aaa195; font-size: 14px; line-height: 1.55; }
    .gallery { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 28px 24px; align-items: start; }
    .preview { min-width: 0; }
    .preview header { height: 40px; display: flex; align-items: center; justify-content: space-between; padding: 0 3px; color: #d9d0c3; }
    .preview header strong { font-size: 13px; font-weight: 700; letter-spacing: .01em; }
    .preview header span { color: #756e64; font-family: "DIN Alternate", sans-serif; font-size: 11px; font-weight: 800; letter-spacing: .13em; }
    .card-wrapper { width: 300px; height: 440px; margin: 0 auto; }
    .preview-host { display: block; width: 300px; height: 440px; }
    ha-icon { display: inline-grid; place-items: center; width: var(--mdc-icon-size, 24px); height: var(--mdc-icon-size, 24px); font: 700 calc(var(--mdc-icon-size, 24px) * .72)/1 "Avenir Next", sans-serif; }
    @media (max-width: 700px) { main { padding: 24px 18px 48px; } .page-head { align-items: start; flex-direction: column; } }
  </style>
</head>
<body>
  <main>
    <div class="page-head"><h1>Ti brytere.<br>Ti fysiske uttrykk.</h1><p>Materialstudie for Home Assistant: porselen, bakelitt, metall, tre og glass. Alle variantene bruker samme levende entitet og konfigurasjon.</p></div>
    <section class="gallery" id="gallery"></section>
  </main>
  <script>
    const payload = ${JSON.stringify(card)};
    const styleList = ${JSON.stringify(previewStyles)};
    class HaIconPreview extends HTMLElement {
      static get observedAttributes() { return ['icon']; }
      connectedCallback() { this.render(); }
      attributeChangedCallback() { this.render(); }
      render() {
        const icon = this.getAttribute('icon') || '';
        this.textContent = icon.includes('power') ? '⏻' : icon.includes('thermometer') ? '◐' : icon.includes('palette') ? '◒' : icon.includes('brightness') ? '☼' : icon.includes('tune') ? '≡' : '◉';
      }
    }
    if (!customElements.get('ha-icon')) customElements.define('ha-icon', HaIconPreview);

    styleList.forEach(([styleName, number, label], index) => {
      const article = document.createElement('article');
      article.className = 'preview';
      article.innerHTML = '<header><strong>' + label + '</strong><span>' + number + '</span></header>';

      const wrapper = document.createElement('div');
      wrapper.className = 'card-wrapper';
      wrapper.dataset.layoutCardId = 'preview-' + styleName;
      wrapper.dataset.cardStyle = JSON.stringify({ background: index % 2 ? '#201d18' : '#1b1a16', text_color: '#f1ece2' });

      const host = document.createElement('div');
      host.className = 'preview-host';
      host.id = 'preview-' + styleName;
      const shadow = host.attachShadow({ mode: 'open' });
      const styleEl = document.createElement('style');
      styleEl.textContent = payload.css;
      const root = document.createElement('div');
      root.className = 'runtime';
      root.innerHTML = payload.html;
      shadow.append(styleEl, root);
      wrapper.append(host);
      article.append(wrapper);
      document.getElementById('gallery').append(article);

      const localConfig = structuredClone(payload);
      localConfig.neo_light_config.style = styleName;
      localConfig.neo_light_config.label = label;
      localConfig.neo_light_config.showGlow = 'true';
      const entityId = localConfig.neo_light_config.entity;
      const state = {
        state: 'on',
        last_changed: 'preview-' + index,
        last_updated: 'preview-' + index,
        attributes: {
          friendly_name: label,
          brightness: 176 + index * 4,
          color_mode: 'color_temp',
          color_temp_kelvin: 3000 + index * 130,
          hs_color: [38 + index * 4, 58],
          supported_color_modes: ['brightness', 'color_temp', 'hs'],
          min_color_temp_kelvin: 2000,
          max_color_temp_kelvin: 6500
        }
      };
      const hass = { states: { [entityId]: state }, callService: async () => {} };
      const ddc = { storageKey: 'preview', card: {}, saveLayout: async () => true };
      const factory = new Function('root', 'host', 'hass', 'ddc', 'config', payload.js);
      factory(root, host, hass, ddc, localConfig);
    });
  </script>
</body>
</html>`;

  fs.mkdirSync(path.dirname(previewPath), { recursive: true });
  fs.writeFileSync(previewPath, previewDocument);
  console.log(previewPath);
}
