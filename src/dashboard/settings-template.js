/*
 * Markup template for the dashboard settings panel.
 *
 * The controller imports this template so settings layout, controls, and labels can evolve separately
 * from event binding and option persistence logic.
 */

export function getDashboardSettingsTemplate(screenSaverStyleOptionsHtml = '') {
  return `
<div class="dialog modern" role="dialog" aria-modal="true">
  <div class="dlg-head">
    <h3>Dashboard Settings</h3>
    <button class="icon-btn" id="ddc-settings-close" title="Close" aria-label="Close dialog">
      <ha-icon icon="mdi:close"></ha-icon>
    </button>
  </div>

  <nav class="settings-tabs" role="tablist" aria-label="Dashboard settings sections">
    <button type="button" class="settings-tab active" id="ddc-settings-tab-layout" data-settings-tab="layout" role="tab" aria-selected="true">
      <ha-icon icon="mdi:view-grid-plus-outline" aria-hidden="true"></ha-icon>
      <span>Layout</span>
    </button>
    <button type="button" class="settings-tab" id="ddc-settings-tab-appearance" data-settings-tab="appearance" role="tab" aria-selected="false">
      <ha-icon icon="mdi:palette-swatch" aria-hidden="true"></ha-icon>
      <span>Appearance</span>
    </button>
    <button type="button" class="settings-tab" id="ddc-settings-tab-behaviour" data-settings-tab="behaviour" role="tab" aria-selected="false">
      <ha-icon icon="mdi:tune" aria-hidden="true"></ha-icon>
      <span>Behaviour</span>
    </button>
    <button type="button" class="settings-tab" id="ddc-settings-tab-tabs" data-settings-tab="tabs" role="tab" aria-selected="false">
      <ha-icon icon="mdi:tab" aria-hidden="true"></ha-icon>
      <span>Tabs</span>
    </button>
    <button type="button" class="settings-tab" id="ddc-settings-tab-layers" data-settings-tab="layers" role="tab" aria-selected="false">
      <ha-icon icon="mdi:layers-triple-outline" aria-hidden="true"></ha-icon>
      <span>Layers</span>
    </button>
    <button type="button" class="settings-tab" id="ddc-settings-tab-screensaver" data-settings-tab="screensaver" role="tab" aria-selected="false">
      <ha-icon icon="mdi:clock-outline" aria-hidden="true"></ha-icon>
      <span>Screen saver</span>
    </button>
    <button type="button" class="settings-tab" id="ddc-settings-tab-packages" data-settings-tab="packages" role="tab" aria-selected="false">
      <ha-icon icon="mdi:puzzle-plus-outline" aria-hidden="true"></ha-icon>
      <span>Packages</span>
    </button>
  </nav>

  <div class="settings-body" data-active-tab="layout">

    <!-- Layout -->
    <section class="card" data-settings-section="layout" aria-labelledby="layout-head" role="tabpanel" aria-describedby="ddc-settings-intro-layout">
      <div class="section-head">
        <ha-icon icon="mdi:view-grid-plus-outline" aria-hidden="true"></ha-icon>
        <h4 id="layout-head">Layout</h4>
      </div>
      <p class="tab-intro" id="ddc-settings-intro-layout"><strong>Layout sets the rules for the canvas.</strong> Fine-tune grid density, snapping, responsive sizing, and how cards sit on the page.</p>

      <!-- STORAGE KEY -->
      <div class="setting" role="group" aria-labelledby="lbl-storage-key">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:key-variant" aria-hidden="true"></ha-icon>
            <label id="lbl-storage-key" for="ddc-setting-storageKey">Storage key</label>
          </div>
          <div class="control">
            <input
              type="text"
              id="ddc-setting-storageKey"
              autocomplete="off"
              spellcheck="false"
              placeholder="living_room_dashboard"
            />
          </div>
        </div>
        <div class="hint">Use a stable key to reuse the same saved layout after deleting or recreating the dashboard card.</div>
      </div>

      <!-- GRID SIZE -->
      <div class="setting" role="group" aria-labelledby="lbl-grid-size">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:grid" aria-hidden="true"></ha-icon>
            <label id="lbl-grid-size" for="ddc-setting-gridSize">Grid size</label>
          </div>
          <div class="control">
            <div class="range-wrap">
              <input type="range" id="ddc-setting-gridSize" min="1" max="400" step="1" />
              <output id="ddc-grid-out" for="ddc-setting-gridSize">100 px</output>
              <!-- Added number input for manual entry of grid size -->
              <input type="number" id="ddc-setting-gridSizeInput" min="1" max="400" step="1" class="grid-input" />
            </div>
          </div>
        </div>
        <div class="hint">Smaller cells give finer placement; larger cells keep layouts easier to align.</div>
      </div>

      <!-- GRID PREVIEW -->
      <div class="preview">
        <div class="grid-demo" id="ddc-grid-demo">
          <div class="grid-meta-badge" id="ddc-grid-meta"></div>
        </div>
      </div>

      <!-- QUICK CANVAS SIZES -->
      <div class="setting" role="group" aria-labelledby="lbl-quick-sizes">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:move-resize" aria-hidden="true"></ha-icon>
            <span id="lbl-quick-sizes">Quick canvas sizes</span>
          </div>
          <div class="control chips" role="group" aria-label="Quick sizes">
            <button class="chip" data-w="1280" data-h="720">Tablet (1280×720)</button>
            <button class="chip" data-w="1920" data-h="1080" aria-pressed="true">Desktop (1920×1080)</button>
            <button class="chip" data-w="2560" data-h="1440">WQHD (2560×1440)</button>
          </div>
        </div>
        <div class="hint">Use these as starting points for common displays. You can still switch to Auto, a custom size, or a preset below.</div>
      </div>

      <!-- LIVE SNAP -->
      <div class="setting" role="group" aria-labelledby="lbl-live-snap">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:drag-variant" aria-hidden="true"></ha-icon>
            <label id="lbl-live-snap" for="ddc-setting-dragSnap">Live snap while dragging</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-dragSnap"></ha-switch>
          </div>
        </div>
        <div class="hint">Cards follow grid lines while you drag, which makes precise layouts easier.</div>
      </div>

      <!-- OVERLAP -->
      <div class="setting" role="group" aria-labelledby="lbl-prevent-overlap">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:animation" aria-hidden="true"></ha-icon>
            <label id="lbl-prevent-overlap" for="ddc-setting-disableOverlap">Prevent overlap</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-disableOverlap"></ha-switch>
          </div>
        </div>
        <div class="hint">Stops cards from landing on top of each other while you edit.</div>
      </div>

      <div class="divider" role="separator" aria-hidden="true"></div>

      <!-- SIZE MODE -->
      <div class="setting" role="group" aria-labelledby="lbl-size-mode">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:move-resize" aria-hidden="true"></ha-icon>
            <label id="lbl-size-mode" for="ddc-setting-sizeMode">Container size mode</label>
          </div>
          <div class="control">
            <select id="ddc-setting-sizeMode">
              <option value="auto">Auto</option>
              <option value="fixed_custom">Fixed (custom)</option>
              <option value="preset">Preset</option>
            </select>
          </div>
        </div>
        <div class="hint">Choose whether the canvas scales as one surface, uses exact custom dimensions, or follows a preset.</div>
      </div>

      <!-- RESPONSIVE PREVIEW ASPECT LOCKS -->
      <div class="setting" role="group" aria-labelledby="lbl-preview-aspect-locks" data-responsive-aspect-locks>
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:link-variant" aria-hidden="true"></ha-icon>
            <span id="lbl-preview-aspect-locks">Preview aspect ratio</span>
          </div>
          <div class="control preview-aspect-locks" role="group" aria-label="Preview aspect ratio locks">
            <label class="preview-aspect-lock" for="ddc-setting-aspect-desktop">
              <span>Desktop</span>
              <ha-switch id="ddc-setting-aspect-desktop"></ha-switch>
            </label>
            <label class="preview-aspect-lock" for="ddc-setting-aspect-tablet">
              <span>Tablet</span>
              <ha-switch id="ddc-setting-aspect-tablet"></ha-switch>
            </label>
            <label class="preview-aspect-lock" for="ddc-setting-aspect-mobile">
              <span>Mobile</span>
              <ha-switch id="ddc-setting-aspect-mobile"></ha-switch>
            </label>
          </div>
        </div>
        <div class="hint">Turn a profile off to enter width and height independently in Auto preview.</div>
      </div>

      <!-- AUTO VIEWPORT LIMITS -->
      <div class="setting" role="group" aria-labelledby="lbl-auto-viewport-limits" data-auto-viewport-limits>
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:monitor-screenshot" aria-hidden="true"></ha-icon>
            <span id="lbl-auto-viewport-limits">Auto viewport limits</span>
          </div>
          <div class="control auto-viewport-limits" role="group" aria-label="Auto viewport limits">
            <label class="auto-viewport-limit-field" for="ddc-setting-autoViewportMaxWidth">
              <span>Max width</span>
              <input type="number" id="ddc-setting-autoViewportMaxWidth" min="0" max="10000" step="10" placeholder="Unlimited" />
            </label>
            <label class="auto-viewport-limit-field" for="ddc-setting-autoScaleMax">
              <span>Max scale</span>
              <input type="number" id="ddc-setting-autoScaleMax" min="0" max="4" step="0.05" placeholder="Unlimited" />
            </label>
          </div>
        </div>
        <div class="hint">Caps live Auto mode on ultrawide displays. Leave empty or 0 for no cap.</div>
      </div>

      <!-- SIZE EXTRAS (injected) -->
      <div id="ddc-setting-sizeExtras" class="setting" aria-live="polite"></div>

      <!-- TEXT SCALE LOCK -->
      <div class="setting" role="group" aria-labelledby="lbl-lock-text-scale">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:format-size" aria-hidden="true"></ha-icon>
            <label id="lbl-lock-text-scale" for="ddc-setting-doNotResizeText">Keep text size fixed</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-doNotResizeText"></ha-switch>
          </div>
        </div>
        <div class="hint" id="ddc-setting-doNotResizeTextHint">Keeps labels readable when the canvas scales. Useful for wall panels and smaller screens.</div>
      </div>

      <div class="setting" role="group" aria-labelledby="lbl-outer-grid-buffer">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:grid-plus" aria-hidden="true"></ha-icon>
            <label id="lbl-outer-grid-buffer" for="ddc-setting-outerGridBuffer">Outer grid buffer</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-outerGridBuffer"></ha-switch>
          </div>
        </div>
        <div class="setting-subcontrol" data-outer-grid-buffer-cells>
          <div class="range-wrap">
            <input type="range" id="ddc-setting-outerGridBufferCells" min="1" max="10" step="1" />
            <output id="ddc-outerGridBufferCellsOut" for="ddc-setting-outerGridBufferCells">1 cell</output>
          </div>
        </div>
        <div class="hint">When off, cards can sit flush with every canvas edge. When on, this adds the selected number of grid cells around the layout.</div>
      </div>

    </section>

    <!-- Appearance -->
    <section class="card" data-settings-section="appearance" aria-labelledby="appearance-head" role="tabpanel" aria-describedby="ddc-settings-intro-appearance" hidden>
      <div class="section-head">
        <ha-icon icon="mdi:palette-swatch" aria-hidden="true"></ha-icon>
        <h4 id="appearance-head">Appearance</h4>
      </div>
      <p class="tab-intro" id="ddc-settings-intro-appearance"><strong>Appearance sets the visual language.</strong> Tune themes, background media, card surfaces, shadows, and dashboard-wide effects.</p>
      <div class="setting" role="group" aria-labelledby="lbl-dashboard-theme">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:format-paint" aria-hidden="true"></ha-icon>
            <label id="lbl-dashboard-theme" for="ddc-setting-dashboardTheme">Dashboard theme</label>
          </div>
          <div class="control">
            <select id="ddc-setting-dashboardTheme">
              <option value="">Select theme…</option>
            </select>
          </div>
        </div>
        <div class="hint" id="ddc-setting-dashboardThemeHint">Pick the Home Assistant theme this dashboard should inherit from.</div>
      </div>

      <div class="setting" role="group" aria-labelledby="lbl-dashboard-theme-override">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:invert-colors" aria-hidden="true"></ha-icon>
            <label id="lbl-dashboard-theme-override" for="ddc-setting-dashboardThemeOverrideAllDesign">Prioritize theme colors</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-dashboardThemeOverrideAllDesign"></ha-switch>
          </div>
        </div>
        <div class="hint" id="ddc-setting-dashboardThemeOverrideAllDesignHint">Optional: let the selected theme win over dashboard colors, card shadows, and per-card design overrides.</div>
      </div>
      <div class="section-actions">
        <button type="button" class="mini-action primary" id="ddc-randomize-allStyle">
          <ha-icon icon="mdi:palette-outline"></ha-icon>
          <span>Randomize all style</span>
        </button>
      </div>

      <!-- CONTAINER BG -->
      <div class="setting" role="group" aria-labelledby="lbl-container-bg">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:palette-swatch" aria-hidden="true"></ha-icon>
            <label id="lbl-container-bg" for="ddc-setting-containerBg">Container background</label>
          </div>
            <div class="control">
              <div class="stack color-stack">
                <div class="setting-actions">
                  <button type="button" class="mini-action" id="ddc-randomize-containerBg">
                    <ha-icon icon="mdi:shuffle-variant"></ha-icon>
                    <span>Randomize</span>
                  </button>
                </div>
                <div class="color-group">
                  <div class="color-group-title">
                    <span>Custom</span>
                    <span>hex · rgba · var()</span>
                  </div>
                  <div class="color-pair">
                    <input type="color" id="ddc-color-containerBg" />
                    <input
                      type="text"
                      id="ddc-setting-containerBg"
                      placeholder="transparent · #123456 · var(--ha-card-background)"
                    />
                  </div>
                </div>

                <div class="color-group">
                  <div class="color-group-title">
                    <span>Presets</span>
                  </div>
                  <div class="swatches" id="ddc-swatches-containerBg"></div>
                  <div class="gradients" id="ddc-gradients-containerBg"></div>
                </div>
              </div>
            </div>

        </div>
        <div class="hint">Supports hex, rgba(), and Home Assistant theme variables.</div>
      </div>

      <div class="setting" role="group" aria-labelledby="lbl-apply-page-bg">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:application-braces-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-apply-page-bg" for="ddc-setting-applyPageBackground">Apply current background to whole page</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-applyPageBackground"></ha-switch>
          </div>
        </div>
        <div class="hint">Extends the current background across the full Lovelace view, not just the card canvas.</div>
      </div>

      <!-- CARD BG -->
      <div class="setting" role="group" aria-labelledby="lbl-card-bg">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:palette-swatch" aria-hidden="true"></ha-icon>
            <label id="lbl-card-bg" for="ddc-setting-cardBg">Card background</label>
          </div>
          <div class="control">
            <div class="stack color-stack">
              <div class="setting-actions">
                <button type="button" class="mini-action" id="ddc-randomize-cardBg">
                  <ha-icon icon="mdi:shuffle-variant"></ha-icon>
                  <span>Randomize</span>
                </button>
              </div>
              <div class="color-group">
                <div class="color-group-title">
                  <span>Custom</span>
                </div>
                <div class="color-pair">
                  <input type="color" id="ddc-color-cardBg" />
                  <input
                    type="text"
                    id="ddc-setting-cardBg"
                    placeholder="#121212 · var(--ha-card-background)"
                  />
                </div>
              </div>

              <div class="color-group">
                <div class="color-group-title">
                  <span>Presets</span>
                </div>
                <div class="swatches" id="ddc-swatches-cardBg"></div>
                <div class="gradients" id="ddc-gradients-cardBg"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="hint">Sets the base surface behind every draggable card.</div>
      </div>

      <!-- CARD SHADOW -->
      <div class="setting" role="group" aria-labelledby="lbl-card-shadow">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:shadow" aria-hidden="true"></ha-icon>
            <label id="lbl-card-shadow" for="ddc-setting-cardShadow">Card drop shadow</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-cardShadow"></ha-switch>
          </div>
        </div>
        <div class="hint">Adds depth to card containers so they separate more clearly from the canvas.</div>
      </div>

      <div class="setting" data-shadow-intensity-setting role="group" aria-labelledby="lbl-card-shadow-intensity">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:blur" aria-hidden="true"></ha-icon>
            <label id="lbl-card-shadow-intensity" for="ddc-setting-cardShadowIntensity">Shadow intensity</label>
          </div>
          <div class="control">
            <div class="range-wrap">
              <input type="range" id="ddc-setting-cardShadowIntensity" min="1" max="10" step="1" />
              <output id="ddc-cardShadowIntensityOut" for="ddc-setting-cardShadowIntensity">5</output>
            </div>
          </div>
        </div>
        <div class="hint">Controls how subtle or deep dashboard card shadows should feel.</div>
      </div>

      <div class="divider" role="separator" aria-hidden="true"></div>

      <!-- BACKGROUND MODE -->
      <div class="setting" role="group" aria-labelledby="lbl-bg-mode">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:layers-triple" aria-hidden="true"></ha-icon>
            <label id="lbl-bg-mode" for="ddc-bg-mode">Background type</label>
          </div>
          <div class="control">
            <select id="ddc-bg-mode">
              <option value="none">None</option>
              <option value="image">Image</option>
              <option value="particles">Animated (particles.js)</option>
              <option value="youtube">YouTube video</option>
            </select>
          </div>
        </div>
        <div class="hint">Choose the visual layer that sits behind your cards.</div>
      </div>

      <!-- BACKGROUND: IMAGE -->
      <div class="setting" data-bg-section="image" role="group" aria-labelledby="lbl-bg-image">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:image-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-bg-image" for="ddc-setting-bgImg">Background image</label>
          </div>
          <div class="control">
            <div class="stack">
              <div class="input-file">
                <div class="thumb" id="ddc-bg-thumb"></div>
                <label class="file-btn" for="ddc-bg-upload">Upload</label>
                <input type="file" id="ddc-bg-upload" accept="image/*" />
                <button type="button" class="btn secondary" id="ddc-browse-media-library">Browse Media</button>
                <button type="button" class="btn secondary" id="ddc-clear-bg">Delete</button>
              </div>

              <div class="default-bg-gallery" aria-label="Default background images">
                <div class="default-bg-gallery-head">
                  <div class="default-bg-gallery-title">
                    <ha-icon icon="mdi:image-multiple-outline" aria-hidden="true"></ha-icon>
                    <span>Default backgrounds</span>
                  </div>
                  <div class="default-bg-gallery-actions">
                    <button type="button" class="icon-btn" id="ddc-default-bg-prev" title="Previous background" aria-label="Previous background">
                      <ha-icon icon="mdi:chevron-left"></ha-icon>
                    </button>
                    <button type="button" class="icon-btn" id="ddc-default-bg-next" title="Next background" aria-label="Next background">
                      <ha-icon icon="mdi:chevron-right"></ha-icon>
                    </button>
                  </div>
                </div>
                <div class="default-bg-track" id="ddc-default-bg-track" tabindex="0"></div>
              </div>

              <div class="row">
                <label for="ddc-setting-bgImg">Image URL (e.g. /media/local/...)</label>
                <input
                  type="text"
                  id="ddc-setting-bgImg"
                  placeholder="/media/local/… or https://…"
                />
              </div>

              <div class="bg-opts">
                <label for="ddc-bg-repeat"><ha-icon icon="mdi:repeat"></ha-icon> Repeat</label>
                <select id="ddc-bg-repeat">
                  <option value="no-repeat">No repeat</option>
                  <option value="repeat">Repeat</option>
                  <option value="repeat-x">Repeat X</option>
                  <option value="repeat-y">Repeat Y</option>
                </select>

                <label for="ddc-bg-size"><ha-icon icon="mdi:arrow-expand-all"></ha-icon> Size</label>
                <select id="ddc-bg-size">
                  <option value="cover">Cover</option>
                  <option value="contain">Contain</option>
                  <option value="auto">Auto</option>
                  <option value="100% 100%">Fill (stretch)</option>
                </select>

                <label for="ddc-bg-position"><ha-icon icon="mdi:crosshairs-gps"></ha-icon> Position</label>
                <select id="ddc-bg-position">
                  <option value="center center">Center</option>
                  <option value="top center">Top</option>
                  <option value="bottom center">Bottom</option>
                  <option value="left center">Left</option>
                  <option value="right center">Right</option>
                  <option value="top left">Top left</option>
                  <option value="top right">Top right</option>
                  <option value="bottom left">Bottom left</option>
                  <option value="bottom right">Bottom right</option>
                </select>

                <label for="ddc-bg-attachment"><ha-icon icon="mdi:pin"></ha-icon> Attachment</label>
                <select id="ddc-bg-attachment">
                  <option value="scroll">Scroll</option>
                  <option value="fixed">Fixed</option>
                </select>

                <label for="ddc-bg-opacity"><ha-icon icon="mdi:opacity"></ha-icon> Opacity</label>
                <div class="range-wrap">
                  <input type="range" id="ddc-bg-opacity" min="0" max="100" step="1" />
                  <output id="ddc-bg-opacity-out">100%</output>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hint">Small uploads can be stored inline. For large media, host the file under <code>/local/</code> and paste the URL.</div>
      </div>

      <!-- BACKGROUND: PARTICLES -->
      <div class="setting" data-bg-section="particles" role="group" aria-labelledby="lbl-bg-particles" hidden>
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:blur" aria-hidden="true"></ha-icon>
            <label id="lbl-bg-particles" for="ddc-particles-url">Particles.js</label>
          </div>
          <div class="control">
            <div class="stack">
              <div class="setting-actions">
                <button type="button" class="mini-action" id="ddc-randomize-particles">
                  <ha-icon icon="mdi:shuffle-variant"></ha-icon>
                  <span>Randomize</span>
                </button>
              </div>
              <label for="ddc-particles-url">Config JSON URL (optional)</label>
              <input type="text" id="ddc-particles-url" placeholder="/local/particles.json or https://…" />
              <div class="hint">Leave empty to use the built-in motion preset. For custom JSON, host it under <code>/local/</code>.</div>

              <label class="row" for="ddc-particles-pointer" style="gap:8px">
                <ha-switch id="ddc-particles-pointer"></ha-switch>
                <span>Enable pointer interactivity (hover/click)</span>
              </label>
              <div class="hint">Keep this off when dragging should always win over particle interaction.</div>

              <div class="particle-settings-grid" aria-label="Particle tuning">
                <div class="particle-control">
                  <label for="ddc-particles-count"><ha-icon icon="mdi:dots-hexagon"></ha-icon><span>Particle count</span></label>
                  <div class="range-wrap">
                    <input type="range" id="ddc-particles-count" min="8" max="120" step="1" />
                    <output id="ddc-particles-count-out" for="ddc-particles-count">52</output>
                  </div>
                </div>

                <div class="particle-control">
                  <label for="ddc-particles-speed"><ha-icon icon="mdi:speedometer-slow"></ha-icon><span>Motion speed</span></label>
                  <div class="range-wrap">
                    <input type="range" id="ddc-particles-speed" min="0" max="4" step="0.1" />
                    <output id="ddc-particles-speed-out" for="ddc-particles-speed">0.4</output>
                  </div>
                </div>

                <div class="particle-control">
                  <label for="ddc-particles-size"><ha-icon icon="mdi:circle-medium"></ha-icon><span>Particle size</span></label>
                  <div class="range-wrap">
                    <input type="range" id="ddc-particles-size" min="1" max="8" step="0.1" />
                    <output id="ddc-particles-size-out" for="ddc-particles-size">2.2</output>
                  </div>
                </div>

                <div class="particle-control">
                  <label for="ddc-particles-opacity"><ha-icon icon="mdi:opacity"></ha-icon><span>Particle opacity</span></label>
                  <div class="range-wrap">
                    <input type="range" id="ddc-particles-opacity" min="5" max="85" step="1" />
                    <output id="ddc-particles-opacity-out" for="ddc-particles-opacity">22%</output>
                  </div>
                </div>

                <div class="particle-control">
                  <div class="row">
                    <span class="particle-label"><ha-icon icon="mdi:vector-line"></ha-icon><span>Connection lines</span></span>
                    <ha-switch id="ddc-particles-lines"></ha-switch>
                  </div>
                  <div class="range-wrap">
                    <input type="range" id="ddc-particles-line-distance" min="60" max="260" step="5" />
                    <output id="ddc-particles-line-distance-out" for="ddc-particles-line-distance">155px</output>
                  </div>
                </div>

                <div class="particle-control">
                  <label for="ddc-particles-interaction-distance"><ha-icon icon="mdi:gesture-tap"></ha-icon><span>Interaction distance</span></label>
                  <div class="range-wrap">
                    <input type="range" id="ddc-particles-interaction-distance" min="40" max="240" step="5" />
                    <output id="ddc-particles-interaction-distance-out" for="ddc-particles-interaction-distance">110px</output>
                  </div>
                </div>

                <div class="particle-control">
                  <label for="ddc-particles-color"><ha-icon icon="mdi:palette-outline"></ha-icon><span>Particle color</span></label>
                  <div class="particle-color-row">
                    <input type="color" id="ddc-particles-color" />
                    <select id="ddc-particles-shape">
                      <option value="circle">Circle</option>
                      <option value="triangle">Triangle</option>
                      <option value="edge">Edge</option>
                      <option value="polygon">Polygon</option>
                      <option value="star">Star</option>
                    </select>
                  </div>
                </div>

                <div class="particle-control">
                  <label for="ddc-particles-line-color"><ha-icon icon="mdi:palette-swatch-outline"></ha-icon><span>Line color</span></label>
                  <div class="particle-color-row">
                    <input type="color" id="ddc-particles-line-color" />
                    <select id="ddc-particles-hover-mode">
                      <option value="repulse">Hover: repel</option>
                      <option value="grab">Hover: connect</option>
                      <option value="bubble">Hover: glow</option>
                      <option value="none">Hover: off</option>
                    </select>
                  </div>
                </div>

                <div class="particle-control">
                  <label for="ddc-particles-click-mode"><ha-icon icon="mdi:cursor-default-click-outline"></ha-icon><span>Click action</span></label>
                  <select id="ddc-particles-click-mode">
                    <option value="push">Add particles</option>
                    <option value="repulse">Repel particles</option>
                    <option value="none">Off</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BACKGROUND: YOUTUBE -->
      <div class="setting" data-bg-section="youtube" role="group" aria-labelledby="lbl-bg-youtube" hidden>
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:youtube" aria-hidden="true"></ha-icon>
            <label id="lbl-bg-youtube" for="ddc-youtube-url">YouTube background</label>
          </div>
          <div class="control">
                      <div class="control">
            <div class="stack">
              <label for="ddc-youtube-url">YouTube URL or video ID</label>
              <input
                type="text"
                id="ddc-youtube-url"
                placeholder="https://youtu.be/… or dQw4w9WgXcQ"
              />

              <div class="bg-opts bg-opts--youtube">
                <!-- Start -->
                <label for="ddc-youtube-start">
                  <ha-icon icon="mdi:clock-start" aria-hidden="true"></ha-icon>
                  Start (s)
                </label>
                <input
                  type="number"
                  id="ddc-youtube-start"
                  min="0"
                  step="1"
                />

                <!-- End -->
                <label for="ddc-youtube-end">
                  <ha-icon icon="mdi:clock-end" aria-hidden="true"></ha-icon>
                  End (s)
                </label>
                <input
                  type="number"
                  id="ddc-youtube-end"
                  min="0"
                  step="1"
                />

                <!-- Mute -->
                <label for="ddc-youtube-mute">
                  <ha-icon icon="mdi:volume-off" aria-hidden="true"></ha-icon>
                  Mute
                </label>
                <ha-switch
                  id="ddc-youtube-mute"
                  checked
                ></ha-switch>

                <!-- Loop -->
                <label for="ddc-youtube-loop">
                  <ha-icon icon="mdi:repeat" aria-hidden="true"></ha-icon>
                  Loop
                </label>
                <ha-switch
                  id="ddc-youtube-loop"
                  checked
                ></ha-switch>

                <!-- Size -->
                <label for="ddc-youtube-size">
                  <ha-icon icon="mdi:arrow-expand-all" aria-hidden="true"></ha-icon>
                  Size
                </label>
                <select id="ddc-youtube-size">
                  <option value="cover">Cover</option>
                  <option value="contain">Contain</option>
                  <option value="auto">Auto</option>
                  <option value="100% 100%">Fill (stretch)</option>
                </select>

                <!-- Position -->
                <label for="ddc-youtube-position">
                  <ha-icon icon="mdi:crosshairs-gps" aria-hidden="true"></ha-icon>
                  Position
                </label>
                <select id="ddc-youtube-position">
                  <option value="top left">Top left</option>
                  <option value="top">Top</option>
                  <option value="top right">Top right</option>
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                  <option value="bottom left">Bottom left</option>
                  <option value="bottom">Bottom</option>
                  <option value="bottom right">Bottom right</option>
                </select>

                <!-- Attachment -->
                <label for="ddc-youtube-attachment">
                  <ha-icon icon="mdi:link-variant" aria-hidden="true"></ha-icon>
                  Attachment
                </label>
                <select id="ddc-youtube-attachment">
                  <option value="scroll">Scroll</option>
                  <option value="fixed">Fixed</option>
                </select>

                <!-- Opacity -->
                <label for="ddc-youtube-opacity">
                  <ha-icon icon="mdi:opacity" aria-hidden="true"></ha-icon>
                  Opacity
                </label>
                <div class="range-wrap">
                  <input
                    type="range"
                    id="ddc-youtube-opacity"
                    min="0"
                    max="100"
                    step="1"
                    value="100"
                  />
                  <output id="ddc-youtube-opacity-out">100%</output>
                </div>
              </div>

              <div class="hint">
                Video stays behind your cards, starts muted, and ignores pointer events so dragging remains smooth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Behaviour -->
    <section class="card" data-settings-section="behaviour" aria-labelledby="behaviour-head" role="tabpanel" aria-describedby="ddc-settings-intro-behaviour" hidden>
      <div class="section-head">
        <ha-icon icon="mdi:tune" aria-hidden="true"></ha-icon>
        <h4 id="behaviour-head">Behaviour</h4>
      </div>
      <p class="tab-intro" id="ddc-settings-intro-behaviour"><strong>Behaviour controls dashboard feedback.</strong> Configure animation, auto save, edit access, debug logging, and how much Home Assistant chrome stays visible.</p>

      <!-- ANIMATE -->
      <div class="setting" role="group" aria-labelledby="lbl-animate">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:play-box" aria-hidden="true"></ha-icon>
            <label id="lbl-animate" for="ddc-setting-animate">Animate cards</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-animate"></ha-switch>
          </div>
        </div>
        <div class="hint">Adds polished transitions when cards move or resize.</div>
      </div>

      <!-- AUTOSAVE -->
      <div class="setting" role="group" aria-labelledby="lbl-autosave">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:content-save" aria-hidden="true"></ha-icon>
            <label id="lbl-autosave" for="ddc-setting-autoSave">Auto save</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-autoSave"></ha-switch>
          </div>
        </div>
        <div class="hint">Saves drag, resize, and edit changes automatically.</div>
      </div>

      <!-- AUTOSAVE DELAY -->
      <div class="setting" role="group" aria-labelledby="lbl-autosave-delay">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:timer-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-autosave-delay" for="ddc-setting-autoSaveDebounce">Auto save delay (ms)</label>
          </div>
          <div class="control">
            <input type="number" id="ddc-setting-autoSaveDebounce" min="100" max="10000" step="50" />
          </div>
        </div>
        <div class="hint">How long to wait after the last change before saving. Lower values save more often.</div>
      </div>

      <!-- DEBUG -->
      <div class="setting" role="group" aria-labelledby="lbl-debug">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:bug-play-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-debug" for="ddc-setting-debug">Enable debug logging</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-debug"></ha-switch>
          </div>
        </div>
        <div class="hint">Writes extra layout diagnostics to the browser console.</div>
      </div>

      <!-- EDIT MODE PIN/PASSWORD -->
      <div class="setting" role="group" aria-labelledby="lbl-edit-pin">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:lock-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-edit-pin" for="ddc-setting-editPin">Edit mode PIN / password</label>
          </div>
          <div class="control">
            <input type="password" id="ddc-setting-editPin" placeholder="Leave blank to disable" autocomplete="new-password" />
          </div>
        </div>
        <div class="hint">Require this code before Edit Mode opens. Leave blank for no lock.</div>
      </div>

      <!-- HIDE HEADER -->
      <div class="setting" role="group" aria-labelledby="lbl-hide-hdr">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:page-layout-header" aria-hidden="true"></ha-icon>
            <label id="lbl-hide-hdr" for="ddc-setting-hideHdr">Hide Home Assistant header</label>
            <!-- Removed thumbs up/down icon -->
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-hideHdr"></ha-switch>
          </div>
        </div>
        <div class="hint">Hides the top app bar during normal use. It returns automatically in Edit Mode.</div>
      </div>

      <!-- HIDE SIDEBAR -->
      <div class="setting" role="group" aria-labelledby="lbl-hide-sbar">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:page-layout-sidebar-left" aria-hidden="true"></ha-icon>
            <label id="lbl-hide-sbar" for="ddc-setting-hideSbar">Hide Home Assistant sidebar</label>
            <!-- Removed thumbs up/down icon -->
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-hideSbar"></ha-switch>
          </div>
        </div>
        <div class="hint">Hides the left navigation drawer so the dashboard gets more room.</div>
      </div>
    </section>

    <!-- Screen Saver -->
    <section class="card" data-settings-section="screensaver" aria-labelledby="screensaver-head" role="tabpanel" aria-describedby="ddc-settings-intro-screensaver" hidden>
      <div class="section-head">
        <ha-icon icon="mdi:clock-outline" aria-hidden="true"></ha-icon>
        <h4 id="screensaver-head">Screen saver</h4>
      </div>
      <p class="tab-intro" id="ddc-settings-intro-screensaver"><strong>Screen saver controls the idle view.</strong> Decide when the overlay appears, what it shows, and which design it uses.</p>

      <!-- Enable -->
      <div class="setting" role="group" aria-labelledby="lbl-ss-enable">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:power" aria-hidden="true"></ha-icon>
            <label id="lbl-ss-enable" for="ddc-setting-screenSaverEnabled">Enable screen saver</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-screenSaverEnabled"></ha-switch>
          </div>
        </div>
        <div class="hint">Shows a full-screen idle overlay with time, date, and optional status entities.</div>
      </div>

      <!-- Delay -->
      <div class="setting" role="group" aria-labelledby="lbl-ss-delay">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:timer-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-ss-delay" for="ddc-setting-screenSaverDelay">Activation delay</label>
          </div>
          <div class="control">
            <div class="range-wrap">
              <input type="number" id="ddc-setting-screenSaverDelay" min="1" max="60" step="1" />
              <span class="unit">min</span>
            </div>
          </div>
        </div>
        <div class="hint">Minutes of inactivity before the screen saver appears.</div>
      </div>

      <!-- Style picker -->
      <div class="setting" role="group" aria-labelledby="lbl-ss-style">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:image-filter-hdr" aria-hidden="true"></ha-icon>
            <label id="lbl-ss-style">Screen saver design</label>
          </div>
        </div>
        <input type="hidden" id="ddc-setting-screenSaverStyle" />
        <div class="ss-style-picker">
          <div class="ss-style-toolbar">
            <div class="ss-style-current">
              <strong id="ddc-screenSaverStyleName">VisionOS Glass</strong>
              <span id="ddc-screenSaverStyleNote">Layered glass, date card and calm Home status.</span>
            </div>
            <div class="ss-style-nav" aria-label="Screen saver preview navigation">
              <button type="button" id="ddc-screenSaverStylePrev" aria-label="Previous screen saver design">
                <ha-icon icon="mdi:chevron-left"></ha-icon>
              </button>
              <button type="button" id="ddc-screenSaverStyleNext" aria-label="Next screen saver design">
                <ha-icon icon="mdi:chevron-right"></ha-icon>
              </button>
            </div>
          </div>
          <div class="ss-style-carousel" id="ddc-screenSaverStyleCarousel" role="listbox" aria-labelledby="lbl-ss-style">
            ${screenSaverStyleOptionsHtml}
          </div>
        </div>
        <div class="hint">Choose the full-screen idle experience. Each preview is rendered from the actual design preset.</div>
      </div>

      <!-- Status entities -->
      <div class="setting" role="group" aria-labelledby="lbl-ss-entities">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:home-analytics" aria-hidden="true"></ha-icon>
            <label id="lbl-ss-entities">Status entities</label>
          </div>
        </div>
        <div class="ss-entity-list" id="ddc-screenSaverEntityList"></div>
        <div class="hint">Only selected Home Assistant entities appear. Empty slots stay hidden.</div>
      </div>
    </section>

    <!-- Tabs -->
    <section class="card tabs-card" data-settings-section="tabs" aria-labelledby="tabs-head" role="tabpanel" aria-describedby="ddc-settings-intro-tabs" hidden>
      <div class="section-head">
        <ha-icon icon="mdi:tab" aria-hidden="true"></ha-icon>
        <h4 id="tabs-head">Tabs</h4>
      </div>
      <p class="tab-intro" id="ddc-settings-intro-tabs"><strong>Tabs split the dashboard into workspaces.</strong> Create views for different rooms, modes, or dashboards without duplicating the whole layout.</p>

      <div class="setting" role="group" aria-labelledby="lbl-tabs-placement">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:dock-window" aria-hidden="true"></ha-icon>
            <label id="lbl-tabs-placement" for="ddc-setting-tabsPosition">Tabs placement</label>
          </div>
          <div class="control">
            <select id="ddc-setting-tabsPosition">
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
            </select>
          </div>
        </div>
        <div class="hint">Controls where the regular tabs bar sits around the dashboard.</div>
      </div>

      <!-- Current tabs list -->
      <div id="ddc-tabs-list" class="setting" aria-live="polite"></div>

      <!-- Add new tab -->
      <div class="setting" role="group" aria-labelledby="lbl-add-tab">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:tab-plus" aria-hidden="true"></ha-icon>
            <label id="lbl-add-tab" for="ddc-new-tab-name">Add tab</label>
          </div>
          <div class="control">
            <div class="row">
              <input type="text" id="ddc-new-tab-name" placeholder="e.g. Lights" class="grow" />
              <button type="button" class="btn primary" id="ddc-add-tab-btn">Add tab</button>
            </div>
          </div>
        </div>
        <div class="hint">Use a short, unique name. Cards remember which tab they belong to.</div>
      </div>
    </section>

    <!-- Layers -->
    <section class="card layers-card" data-settings-section="layers" aria-labelledby="layers-head" role="tabpanel" aria-describedby="ddc-settings-intro-layers" hidden>
      <div class="section-head">
        <ha-icon icon="mdi:layers-triple-outline" aria-hidden="true"></ha-icon>
        <h4 id="layers-head">Layers</h4>
      </div>
      <p class="tab-intro" id="ddc-settings-intro-layers"><strong>Layers add visibility groups on top of tabs.</strong> Toggle groups of cards for modes like day, night, guests, or maintenance without moving them.</p>

      <div class="setting" role="group" aria-labelledby="lbl-layers-enabled">
        <div class="layer-toggle-row">
          <div class="title">
            <ha-icon icon="mdi:layers-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-layers-enabled" for="ddc-setting-layersEnabled">Enable layers</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-layersEnabled"></ha-switch>
          </div>
        </div>
        <div class="hint">When enabled, cards can belong to one or more layers and be shown or hidden from the layer bar.</div>
      </div>

      <div class="setting" role="group" aria-labelledby="lbl-layers-button-details">
        <div class="layer-toggle-row">
          <div class="title">
            <ha-icon icon="mdi:card-text-outline" aria-hidden="true"></ha-icon>
            <label id="lbl-layers-button-details" for="ddc-setting-layersButtonDetails">Show layer button details</label>
          </div>
          <div class="control">
            <ha-switch id="ddc-setting-layersButtonDetails"></ha-switch>
          </div>
        </div>
        <div class="hint">Shows the Layers label and active count beside the icon. Off keeps the layer button compact.</div>
      </div>

      <div id="ddc-layers-list" class="setting" aria-live="polite"></div>

      <div class="setting" role="group" aria-labelledby="lbl-add-layer">
        <div class="row">
          <div class="title">
            <ha-icon icon="mdi:layer-plus" aria-hidden="true"></ha-icon>
            <label id="lbl-add-layer" for="ddc-new-layer-name">Add layer</label>
          </div>
          <div class="control">
            <div class="row">
              <input type="text" id="ddc-new-layer-name" placeholder="e.g. Night mode" class="grow" />
              <button class="btn primary" id="ddc-add-layer-btn">Add</button>
            </div>
          </div>
        </div>
        <div class="hint">Layer IDs stay stable behind the scenes, so you can rename labels later without breaking assigned cards.</div>
      </div>
    </section>

    <!-- Packages -->
    <section class="card packages-card" data-settings-section="packages" aria-labelledby="packages-head" role="tabpanel" aria-describedby="ddc-settings-intro-packages" hidden>
      <div class="section-head">
        <ha-icon icon="mdi:puzzle-plus-outline" aria-hidden="true"></ha-icon>
        <h4 id="packages-head">Packages</h4>
      </div>
      <p class="tab-intro" id="ddc-settings-intro-packages"><strong>Packages turn dashboard ideas into Home Assistant YAML.</strong> Build automations, scripts, helpers, sensors, and custom package blocks from one place.</p>

      <div class="feature-quick-actions" aria-label="Add package shortcuts">
        <button type="button" class="mini-action primary ddc-feature-add-btn" data-feature-type="automation">
          <ha-icon icon="mdi:robot-outline"></ha-icon>
          <span>Add automation</span>
        </button>
        <button type="button" class="mini-action ddc-feature-add-btn" data-feature-type="script">
          <ha-icon icon="mdi:script-text-outline"></ha-icon>
          <span>Add script</span>
        </button>
        <button type="button" class="mini-action ddc-feature-add-btn" data-feature-type="input_boolean">
          <ha-icon icon="mdi:toggle-switch-outline"></ha-icon>
          <span>Add input boolean</span>
        </button>
        <button type="button" class="mini-action ddc-feature-add-btn" data-feature-type="input_select">
          <ha-icon icon="mdi:format-list-bulleted-square"></ha-icon>
          <span>Add input select</span>
        </button>
        <button type="button" class="mini-action ddc-feature-add-btn" data-feature-type="input_text">
          <ha-icon icon="mdi:form-textbox"></ha-icon>
          <span>Add input text</span>
        </button>
        <button type="button" class="mini-action ddc-feature-add-btn" data-feature-type="input_number">
          <ha-icon icon="mdi:numeric"></ha-icon>
          <span>Add input number</span>
        </button>
        <button type="button" class="mini-action ddc-feature-add-btn" data-feature-type="template_sensor">
          <ha-icon icon="mdi:chart-bell-curve-cumulative"></ha-icon>
          <span>Add template sensor</span>
        </button>
        <button type="button" class="mini-action ddc-feature-add-btn" data-feature-type="misc">
          <ha-icon icon="mdi:code-tags"></ha-icon>
          <span>Add custom YAML</span>
        </button>
      </div>

      <div class="package-tools">
        <button type="button" class="mini-action" id="ddc-package-diagnostics-btn">
          <ha-icon icon="mdi:stethoscope"></ha-icon>
          <span>Check package sync</span>
        </button>
      </div>

      <div class="package-reload-note">
        <ha-icon icon="mdi:alert-outline" aria-hidden="true"></ha-icon>
        <div>Reload Home Assistant after changing packages so new helpers, scripts, automations, and package-based entities are picked up.</div>
      </div>

      <div id="ddc-package-diagnostics" class="package-sync-status">Run package sync diagnostics to check backend support, package directory access, and detected files.</div>

      <div id="ddc-packages-list" class="packages-list" aria-live="polite"></div>
      <div class="hint">Each entry becomes a package bundle. Use <code>Custom YAML</code> when the guided shortcuts do not cover what you need.</div>
    </section>

  </div>

  <div class="footer">
    <button class="btn secondary" id="ddc-settings-cancel">Cancel</button>
    <button class="btn primary" id="ddc-settings-save">Save</button>
  </div>
</div>

`;
}
