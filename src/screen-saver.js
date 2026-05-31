import { getScreenSaverGlobalStyles, getScreenSaverModernCss, getScreenSaverShadowStyles } from './screensaver-styles.js';

const screenSaverMethods = {
  _getScreenSaverPresets_() {
    return [
      { id: 'visionos_glass', name: 'VisionOS Glass', note: 'Layered glass, date card and calm Home status.' },
      { id: 'minimal_scandi', name: 'Minimal Scandi', note: 'Quiet horizon, large clock and a slim status rail.' },
      { id: 'cinematic_dashboard', name: 'Cinematic Dashboard', note: 'Warm scene, greeting text and dashboard tiles.' },
      { id: 'sci_fi_hud', name: 'Sci-Fi HUD', note: 'Animated rings, calendar grid and technical dock.' },
      { id: 'dynamic_ambient', name: 'Dynamic Ambient', note: 'Soft landscape colors with a centered glass rail.' },
      { id: 'floating_islands', name: 'Floating Islands', note: 'Time and widgets float in separate glass islands.' },
      { id: 'ultra_minimal_dots', name: 'Ultra Minimal Dot UI', note: 'Sparse clock with colored dot status list.' },
      { id: 'home_intelligence', name: 'Home Intelligence', note: 'Readable home summary with calendar and insights.' },
      { id: 'planetary_orbital', name: 'Planetary Orbital', note: 'Planet-centered layout with orbiting status capsules.' },
    ];
  },

  _getScreenSaverBackgroundImages_() {
    return {
      visionos_glass: 'https://i.postimg.cc/FRHzddLk/Chat-GPT-Image-May-16-2026-10-39-26-PM.png',
      minimal_scandi: 'https://i.postimg.cc/B6nbLLKL/Chat-GPT-Image-May-16-2026-10-39-34-PM.png',
      cinematic_dashboard: 'https://i.postimg.cc/XJYqGGCZ/Chat-GPT-Image-May-16-2026-10-39-38-PM.png',
      sci_fi_hud: 'https://i.postimg.cc/9MQ0RR7D/Chat-GPT-Image-May-16-2026-10-39-42-PM.png',
      dynamic_ambient: 'https://i.postimg.cc/bJwrDDts/Chat-GPT-Image-May-16-2026-10-39-46-PM.png',
      floating_islands: 'https://i.postimg.cc/B6nbLLKb/Chat-GPT-Image-May-16-2026-10-39-49-PM.png',
      ultra_minimal_dots: 'https://i.postimg.cc/rmws00rz/Chat-GPT-Image-May-16-2026-10-39-57-PM.png',
      home_intelligence: 'https://i.postimg.cc/ZR5nBBdq/Chat-GPT-Image-May-16-2026-10-40-00-PM.png',
      planetary_orbital: 'https://i.postimg.cc/V6kvrrC6/Chat-GPT-Image-May-16-2026-10-40-04-PM.png',
    };
  },

  _getScreenSaverBackgroundImage_(style) {
    const styleId = this._normalizeScreenSaverStyle_?.(style) || 'visionos_glass';
    return this._getScreenSaverBackgroundImages_?.()?.[styleId] || '';
  },

  _screenSaverCssUrl_(url = '') {
    return `url("${String(url).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}")`;
  },

  _preloadScreenSaverBackground_(url = '') {
    const src = String(url || '').trim();
    if (!src) return Promise.resolve(false);
    if (!this.__screenSaverBgLoaded) this.__screenSaverBgLoaded = new Set();
    if (this.__screenSaverBgLoaded.has(src)) return Promise.resolve(true);
    if (!this.__screenSaverBgPending) this.__screenSaverBgPending = new Map();
    if (this.__screenSaverBgPending.has(src)) return this.__screenSaverBgPending.get(src);

    const promise = new Promise((resolve) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        this.__screenSaverBgLoaded.add(src);
        this.__screenSaverBgPending.delete(src);
        resolve(true);
      };
      img.onerror = () => {
        this.__screenSaverBgPending.delete(src);
        resolve(false);
      };
      img.src = src;
    });

    this.__screenSaverBgPending.set(src, promise);
    return promise;
  },

  _applyScreenSaverBackgroundImage_(style) {
    const overlay = this.screenSaverOverlay;
    if (!overlay) return;
    const styleId = this._normalizeScreenSaverStyle_?.(style) || 'visionos_glass';
    const url = this._getScreenSaverBackgroundImage_(styleId);
    const token = `${styleId}:${url}`;
    this.__screenSaverBgToken = token;

    const applyLoaded = () => {
      overlay.style.setProperty('--ss-bg-image', this._screenSaverCssUrl_(url));
      overlay.dataset.ssBgReady = '1';
      overlay.dataset.ssBgSource = 'postimg';
    };
    const applyFallback = () => {
      overlay.style.removeProperty('--ss-bg-image');
      overlay.dataset.ssBgReady = '0';
      overlay.dataset.ssBgSource = 'fallback';
    };

    if (!url) {
      applyFallback();
      return;
    }
    if (this.__screenSaverBgLoaded?.has(url)) {
      applyLoaded();
      return;
    }

    applyFallback();
    this._preloadScreenSaverBackground_(url).then((loaded) => {
      if (this.__screenSaverBgToken !== token || overlay !== this.screenSaverOverlay) return;
      if (loaded) applyLoaded();
      else applyFallback();
    });
  },

  _normalizeScreenSaverStyle_(style) {
    const presets = this._getScreenSaverPresets_?.() || [];
    const ids = new Set(presets.map((preset) => preset.id));
    const raw = String(style || 'visionos_glass')
      .trim()
      .toLowerCase()
      .replace(/[\s-]+/g, '_');
    const aliases = {
      glass: 'visionos_glass',
      visionos: 'visionos_glass',
      scandi: 'minimal_scandi',
      minimal: 'minimal_scandi',
      cinematic: 'cinematic_dashboard',
      dashboard: 'cinematic_dashboard',
      hud: 'sci_fi_hud',
      sci_fi: 'sci_fi_hud',
      ambient: 'dynamic_ambient',
      islands: 'floating_islands',
      dots: 'ultra_minimal_dots',
      intelligence: 'home_intelligence',
      orbital: 'planetary_orbital',
      planet: 'planetary_orbital',
    };
    const next = aliases[raw] || raw;
    return ids.has(next) ? next : 'visionos_glass';
  },

  _getScreenSaverEntitySlots_() {
    return [
      {
        key: 'alarm',
        title: 'Alarm',
        note: 'Alarm, lock, person, presence, or house mode entity.',
        icon: 'mdi:shield-home-outline',
        tone: 'green',
        placeholder: 'alarm_control_panel.home or lock.front_door',
      },
      {
        key: 'weather',
        title: 'Weather',
        note: 'Weather, outdoor temperature, or any outside sensor.',
        icon: 'mdi:weather-partly-cloudy',
        tone: 'blue',
        placeholder: 'weather.home or sensor.outdoor_temperature',
      },
      {
        key: 'energy',
        title: 'Energy',
        note: 'Power, energy, price, battery, or utility sensor.',
        icon: 'mdi:chart-bell-curve-cumulative',
        tone: 'purple',
        placeholder: 'sensor.energy_usage',
      },
    ];
  },

  _normalizeScreenSaverEntities_(value) {
    const slots = this._getScreenSaverEntitySlots_?.() || [];
    const input = value ?? [];
    const byKey = new Map();
    const normalizeKey = (key) => {
      const raw = String(key || '').trim().toLowerCase();
      if (raw === 'home' || raw === 'security' || raw === 'house') return 'alarm';
      if (raw === 'weather') return 'weather';
      if (raw === 'power') return 'energy';
      return raw;
    };

    if (Array.isArray(input)) {
      const legacyArrayKeys = input.length > slots.length
        ? ['weather', 'alarm', 'lights', 'energy']
        : slots.map((slot) => slot.key);
      input.forEach((item, index) => {
        const slot = slots[index] || {};
        const arrayKey = legacyArrayKeys[index] || slot.key || `status_${index + 1}`;
        if (typeof item === 'string') {
          byKey.set(normalizeKey(arrayKey), { entity: item });
          return;
        }
        if (item && typeof item === 'object') {
          const key = normalizeKey(item.key || item.id || arrayKey);
          byKey.set(key, item);
        }
      });
    } else if (input && typeof input === 'object') {
      Object.entries(input).forEach(([key, item]) => {
        const normalizedKey = normalizeKey(key);
        if (typeof item === 'string') byKey.set(normalizedKey, { entity: item });
        else if (item && typeof item === 'object') byKey.set(normalizedKey, { ...item, key: normalizedKey });
      });
    }

    return slots.map((slot, index) => {
      const raw = byKey.get(slot.key) || {};
      const entity = String(raw.entity || raw.entity_id || '').trim();
      return {
        key: slot.key,
        title: slot.title,
        note: slot.note,
        placeholder: slot.placeholder,
        entity,
        label: String(raw.label || raw.name || '').trim(),
        icon: String(raw.icon || slot.icon || 'mdi:circle-outline').trim(),
        tone: String(raw.tone || slot.tone || 'blue').trim(),
        order: index,
      };
    });
  },

  _renderScreenSaverStyleOptions_() {
    const presets = this._getScreenSaverPresets_?.() || [];
    const selected = this._normalizeScreenSaverStyle_?.(this.screenSaverStyle) || 'visionos_glass';
    const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[ch]));
    return presets.map((preset, index) => {
      const active = preset.id === selected;
      const previewImage = this._getScreenSaverBackgroundImage_?.(preset.id) || '';
      const previewStyle = previewImage
        ? ` style="--ss-preview-bg-image:${esc(this._screenSaverCssUrl_(previewImage))}" data-ss-preview-image="1"`
        : '';
      return `
        <button type="button" class="ss-style-card" data-screensaver-style="${esc(preset.id)}" role="option" aria-selected="${active ? 'true' : 'false'}" tabindex="${active ? '0' : '-1'}">
          <span class="ss-style-preview ss-style-preview--${esc(preset.id)}" aria-hidden="true"${previewStyle}>
            <span class="ss-mini-time">09:25</span>
            <span class="ss-mini-date">Friday, May 15</span>
            <span class="ss-mini-rail">
              <span class="ss-mini-chip"></span>
              <span class="ss-mini-chip"></span>
              <span class="ss-mini-chip"></span>
            </span>
          </span>
          <span class="ss-style-meta">
            <span class="ss-style-name">${index + 1}. ${esc(preset.name)}</span>
            <span class="ss-style-note">${esc(preset.note)}</span>
          </span>
        </button>
      `;
    }).join('');
  },

  _escapeScreenSaverHtml_(value) {
    return String(value ?? '').replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[ch]));
  },

  _formatScreenSaverState_(state) {
    const raw = String(state ?? '').trim();
    if (!raw) return '';
    return raw
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (match) => match.toUpperCase());
  },

  _defaultScreenSaverIconForEntity_(entityId = '') {
    const domain = String(entityId).split('.')[0];
    const icons = {
      alarm_control_panel: 'mdi:shield-home-outline',
      binary_sensor: 'mdi:checkbox-marked-circle-outline',
      climate: 'mdi:thermostat',
      cover: 'mdi:window-shutter',
      device_tracker: 'mdi:map-marker-radius-outline',
      humidifier: 'mdi:air-humidifier',
      light: 'mdi:lightbulb-on-outline',
      lock: 'mdi:lock-outline',
      person: 'mdi:account-circle-outline',
      sensor: 'mdi:gauge',
      switch: 'mdi:toggle-switch-outline',
      vacuum: 'mdi:robot-vacuum',
      weather: 'mdi:weather-partly-cloudy',
    };
    return icons[domain] || 'mdi:home-analytics';
  },

  _screenSaverWeatherIcon_(state = '') {
    const value = String(state || '').toLowerCase().replace(/_/g, '-');
    const icons = {
      sunny: 'mdi:weather-sunny',
      clear: 'mdi:weather-sunny',
      'clear-night': 'mdi:weather-night',
      cloudy: 'mdi:weather-cloudy',
      fog: 'mdi:weather-fog',
      hail: 'mdi:weather-hail',
      lightning: 'mdi:weather-lightning',
      'lightning-rainy': 'mdi:weather-lightning-rainy',
      partlycloudy: 'mdi:weather-partly-cloudy',
      'partly-cloudy': 'mdi:weather-partly-cloudy',
      pouring: 'mdi:weather-pouring',
      rainy: 'mdi:weather-rainy',
      snowy: 'mdi:weather-snowy',
      'snowy-rainy': 'mdi:weather-snowy-rainy',
      windy: 'mdi:weather-windy',
      'windy-variant': 'mdi:weather-windy-variant',
      exceptional: 'mdi:weather-tornado',
    };
    return icons[value] || 'mdi:weather-partly-cloudy';
  },

  _screenSaverAlarmIcon_(state = '', domain = '') {
    const value = String(state || '').toLowerCase();
    if (domain === 'lock') {
      if (value === 'locked') return 'mdi:lock-check-outline';
      if (value === 'unlocked') return 'mdi:lock-open-alert-outline';
      return 'mdi:lock-outline';
    }
    if (value.includes('triggered')) return 'mdi:alarm-light-outline';
    if (value.includes('pending')) return 'mdi:shield-alert-outline';
    if (value.includes('armed')) return 'mdi:shield-lock-outline';
    if (value.includes('disarmed')) return 'mdi:shield-check-outline';
    if (value === 'home' || value === 'on') return 'mdi:home-shield';
    return 'mdi:shield-home-outline';
  },

  _screenSaverStatusIcon_(item = {}, stateObj = null, fallbackIcon = 'mdi:circle-outline') {
    const entityId = String(item.entity || item.entity_id || '').trim();
    const domain = entityId.split('.')[0];
    const state = stateObj?.state;
    if (item.key === 'weather' || domain === 'weather') return this._screenSaverWeatherIcon_(state);
    if (item.key === 'alarm' || domain === 'alarm_control_panel' || domain === 'lock') return this._screenSaverAlarmIcon_(state, domain);
    if (item.key === 'energy') return stateObj?.attributes?.icon || 'mdi:flash';
    return stateObj?.attributes?.icon || fallbackIcon;
  },

  _getScreenSaverNumericValue_(state) {
    const normalized = String(state ?? '').trim().replace(',', '.');
    if (!normalized || ['unknown', 'unavailable'].includes(normalized.toLowerCase())) return null;
    const value = Number.parseFloat(normalized);
    return Number.isFinite(value) ? value : null;
  },

  _rememberScreenSaverSparkline_(key = '', value = null) {
    if (!key || !Number.isFinite(value)) return [];
    if (!this.__screenSaverSparklineData) this.__screenSaverSparklineData = new Map();
    const now = Date.now();
    const samples = this.__screenSaverSparklineData.get(key) || [];
    const last = samples[samples.length - 1];
    if (!last || last.v !== value || now - last.t > 30000) {
      samples.push({ t: now, v: value });
      while (samples.length > 16) samples.shift();
      this.__screenSaverSparklineData.set(key, samples);
    }
    return samples;
  },

  _screenSaverSparklinePoints_(samples = []) {
    const values = (Array.isArray(samples) ? samples : [])
      .map((sample) => Number(sample?.v))
      .filter((value) => Number.isFinite(value));
    if (!values.length) return '';
    const plotted = values.length === 1 ? [values[0], values[0]] : values;
    const min = Math.min(...plotted);
    const max = Math.max(...plotted);
    const span = Math.max(max - min, Math.abs(max || 1) * 0.08, 1);
    return plotted.map((value, index) => {
      const x = plotted.length === 1 ? 60 : (index / Math.max(1, plotted.length - 1)) * 120;
      const y = 30 - ((value - min) / span) * 24;
      return `${x.toFixed(1)},${Math.max(4, Math.min(30, y)).toFixed(1)}`;
    }).join(' ');
  },

  _getScreenSaverLocale_() {
    const hass = this.hass || this._hass;
    return hass?.locale?.language || hass?.selectedLanguage || (typeof navigator !== 'undefined' ? navigator.language : undefined) || undefined;
  },

  _formatScreenSaverTimestamp_(value) {
    if (!value) return '';
    const date = value instanceof Date ? value : new Date(value);
    if (!Number.isFinite(date.getTime())) return '';
    const locale = this._getScreenSaverLocale_?.();
    const now = new Date();
    const sameDay = date.toDateString() === now.toDateString();
    const time = date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    if (sameDay) return time;
    return `${date.toLocaleDateString(locale, { month: 'short', day: 'numeric' })} ${time}`;
  },

  _screenSaverAttrValue_(value, unit = '') {
    if (value === undefined || value === null || value === '') return '';
    const suffix = String(unit || '').trim();
    return `${value}${suffix && !String(suffix).startsWith('%') && !String(suffix).startsWith('°') ? ' ' : ''}${suffix}`;
  },

  _screenSaverCleanLabel_(label = '', entityId = '') {
    const raw = String(label || entityId || '').trim();
    if (!raw) return '';
    const withoutDomain = raw.includes('.') ? raw.split('.').slice(1).join('.') : raw;
    const cleaned = withoutDomain
      .replace(/[_-]+/g, ' ')
      .replace(/\b(sensor|binary sensor|power sensor|energy sensor)\b$/i, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (!cleaned) return raw;
    return cleaned.replace(/\b\w/g, (match) => match.toUpperCase());
  },

  _pushScreenSaverMeta_(meta, label, value, unit = '') {
    if (!Array.isArray(meta) || value === undefined || value === null || value === '') return;
    meta.push({
      label: String(label || '').trim(),
      value: this._screenSaverAttrValue_(value, unit),
    });
  },

  _screenSaverKnownTimestamp_(attrs = {}, keys = []) {
    for (const key of keys) {
      const value = attrs?.[key];
      const date = value ? new Date(value) : null;
      if (date && Number.isFinite(date.getTime())) return date;
    }
    return null;
  },

  _isScreenSaverAlarmActive_(state = '', domain = '') {
    const value = String(state || '').toLowerCase();
    if (domain === 'lock') return value === 'locked';
    return value.includes('armed') || value.includes('triggered') || value.includes('pending') || value === 'on' || value === 'home';
  },

  _rememberScreenSaverAlarmActive_(entityId = '', stateObj = null, rawState = '', domain = '') {
    if (!entityId || !stateObj) return null;
    if (!this.__screenSaverAlarmActiveTimes) this.__screenSaverAlarmActiveTimes = new Map();
    const attrs = stateObj.attributes || {};
    const explicit = this._screenSaverKnownTimestamp_(attrs, [
      'last_activated',
      'last_armed',
      'last_triggered',
      'armed_at',
      'triggered_at',
      'last_tripped',
    ]);
    if (explicit) {
      this.__screenSaverAlarmActiveTimes.set(entityId, explicit);
      return explicit;
    }
    if (this._isScreenSaverAlarmActive_(rawState, domain)) {
      const activeAt = new Date(stateObj.last_changed || stateObj.last_updated || Date.now());
      if (Number.isFinite(activeAt.getTime())) this.__screenSaverAlarmActiveTimes.set(entityId, activeAt);
      return activeAt;
    }
    return this.__screenSaverAlarmActiveTimes.get(entityId) || null;
  },

  _screenSaverSparklineStats_(samples = []) {
    const values = (Array.isArray(samples) ? samples : [])
      .map((sample) => Number(sample?.v))
      .filter((value) => Number.isFinite(value));
    if (!values.length) return null;
    const sum = values.reduce((total, value) => total + value, 0);
    return {
      count: values.length,
      min: Math.min(...values),
      max: Math.max(...values),
      avg: sum / values.length,
    };
  },

  _roundScreenSaverNumber_(value) {
    const number = Number(value);
    if (!Number.isFinite(number)) return value;
    if (Math.abs(number) >= 100) return Math.round(number);
    if (Math.abs(number) >= 10) return Math.round(number * 10) / 10;
    return Math.round(number * 100) / 100;
  },

  _buildScreenSaverMeta_(item = {}, stateObj = null, rawState = '', unit = '', samples = []) {
    const attrs = stateObj?.attributes || {};
    const domain = String(item.entity || item.entity_id || '').split('.')[0];
    const meta = [];
    const detailParts = [];
    const updatedAt = this._formatScreenSaverTimestamp_(stateObj?.last_updated || stateObj?.last_changed);
    let metaLimit = 3;

    if (item.key === 'alarm') {
      const activeAt = this._rememberScreenSaverAlarmActive_(item.entity || item.entity_id, stateObj, rawState, domain);
      const activeLabel = domain === 'lock' ? 'Last locked' : 'Last activated';
      if (activeAt) this._pushScreenSaverMeta_(meta, activeLabel, this._formatScreenSaverTimestamp_(activeAt));
      else if (stateObj?.last_changed) this._pushScreenSaverMeta_(meta, 'Last changed', this._formatScreenSaverTimestamp_(stateObj.last_changed));
      if (attrs.changed_by) this._pushScreenSaverMeta_(meta, 'By', attrs.changed_by);
      if (attrs.battery_level !== undefined) this._pushScreenSaverMeta_(meta, 'Battery', attrs.battery_level, '%');
      if (activeAt) detailParts.push(`${activeLabel} ${this._formatScreenSaverTimestamp_(activeAt)}`);
      else if (String(rawState || '').toLowerCase().includes('disarmed')) detailParts.push('All systems normal');
      else if (updatedAt) detailParts.push(`Updated ${updatedAt}`);
    } else if (item.key === 'weather' || domain === 'weather') {
      const tempUnit = attrs.temperature_unit || unit || '°';
      if (attrs.apparent_temperature !== undefined) this._pushScreenSaverMeta_(meta, 'Feels like', attrs.apparent_temperature, tempUnit);
      if (attrs.humidity !== undefined) this._pushScreenSaverMeta_(meta, 'Humidity', attrs.humidity, '%');
      if (attrs.wind_speed !== undefined) this._pushScreenSaverMeta_(meta, 'Wind', attrs.wind_speed, attrs.wind_speed_unit || '');
      if (meta.length < 3 && attrs.precipitation !== undefined) this._pushScreenSaverMeta_(meta, 'Precipitation', attrs.precipitation, attrs.precipitation_unit || 'mm');
      if (meta.length < 3 && attrs.wind_gust_speed !== undefined) this._pushScreenSaverMeta_(meta, 'Gust', attrs.wind_gust_speed, attrs.wind_speed_unit || '');
      if (meta.length < 3 && attrs.pressure !== undefined) this._pushScreenSaverMeta_(meta, 'Pressure', attrs.pressure, attrs.pressure_unit || 'hPa');
      const condition = this._formatScreenSaverState_(rawState);
      if (condition) detailParts.push(condition);
    } else if (item.key === 'energy') {
      const stats = this._screenSaverSparklineStats_(samples);
      if (stats?.count > 1) {
        this._pushScreenSaverMeta_(meta, 'Average', this._roundScreenSaverNumber_(stats.avg), unit);
        this._pushScreenSaverMeta_(meta, 'Peak', this._roundScreenSaverNumber_(stats.max), unit);
      }
      const attrPairs = [
        ['today', 'Today', unit],
        ['energy_today', 'Today', unit],
        ['daily_energy', 'Today', unit],
        ['cost_today', 'Cost', attrs.currency || ''],
        ['price', 'Price', attrs.currency || ''],
        ['voltage', 'Volt', 'V'],
        ['current', 'Amp', 'A'],
        ['power_factor', 'PF', ''],
        ['battery_level', 'Battery', '%'],
      ];
      attrPairs.forEach(([key, label, suffix]) => {
        if (meta.length < 3 && attrs[key] !== undefined) this._pushScreenSaverMeta_(meta, label, attrs[key], suffix);
      });
      if (stats?.count > 1) {
        detailParts.push(`Average ${this._screenSaverAttrValue_(this._roundScreenSaverNumber_(stats.avg), unit)} · Peak ${this._screenSaverAttrValue_(this._roundScreenSaverNumber_(stats.max), unit)}`);
      } else if (updatedAt) {
        detailParts.push(`Updated ${updatedAt}`);
      }
    }

    return {
      detail: detailParts.filter(Boolean).join(' · '),
      meta: meta.slice(0, metaLimit),
    };
  },

  _resolveScreenSaverEntityStatus_(item = {}) {
    const entityId = String(item.entity || item.entity_id || '').trim();
    if (!entityId) return null;
    const hass = this.hass || this._hass;
    const stateObj = hass?.states?.[entityId];
    const domain = entityId.split('.')[0];
    const fallbackIcon = item.icon || this._defaultScreenSaverIconForEntity_(entityId);
    const customLabel = String(item.label || item.name || '').trim();
    if (!stateObj) {
      return {
        key: item.key || entityId,
        category: item.title || (item.key ? this._formatScreenSaverState_(item.key) : 'Status'),
        entity: entityId,
        icon: fallbackIcon,
        value: 'Unavailable',
        label: customLabel || this._screenSaverCleanLabel_(entityId, entityId),
        detail: 'Entity not found',
        customLabel: !!customLabel,
        tone: 'warn',
      };
    }

    const attrs = stateObj.attributes || {};
    const friendlyName = attrs.friendly_name || entityId;
    const label = customLabel || this._screenSaverCleanLabel_(friendlyName, entityId);
    const unit = attrs.unit_of_measurement || '';
    const rawState = stateObj.state;
    const numericValue = this._getScreenSaverNumericValue_(rawState);
    const unavailable = ['unknown', 'unavailable'].includes(String(rawState || '').toLowerCase());
    let value = this._formatScreenSaverState_(rawState) || 'Unavailable';
    let detail = customLabel ? '' : friendlyName;
    let sparklinePoints = '';
    let sparklineSamples = [];

    if (unavailable) {
      value = 'Unavailable';
      detail = customLabel ? '' : friendlyName;
    } else if (domain === 'weather' && attrs.temperature !== undefined && attrs.temperature !== null) {
      value = `${attrs.temperature}${attrs.temperature_unit || unit || ''}`;
      detail = this._formatScreenSaverState_(rawState);
    } else if (unit) {
      value = `${rawState}${String(unit).startsWith('°') || String(unit).startsWith('%') ? '' : ' '}${unit}`;
    }
    if (!unavailable && item.key === 'energy' && Number.isFinite(numericValue)) {
      sparklineSamples = this._rememberScreenSaverSparkline_(`${item.key || 'status'}:${entityId}`, numericValue);
      sparklinePoints = this._screenSaverSparklinePoints_(sparklineSamples);
    }
    const richInfo = unavailable
      ? { detail, meta: [] }
      : this._buildScreenSaverMeta_(item, stateObj, rawState, unit, sparklineSamples);
    if (richInfo.detail) detail = richInfo.detail;

    return {
      key: item.key || entityId,
      category: item.title || (item.key ? this._formatScreenSaverState_(item.key) : 'Status'),
      entity: entityId,
      icon: this._screenSaverStatusIcon_(item, stateObj, fallbackIcon),
      value,
      label,
      detail,
      customLabel: !!customLabel,
      meta: richInfo.meta || [],
      sparklinePoints,
      tone: unavailable ? 'warn' : (item.tone || 'blue'),
    };
  },

  _getScreenSaverStatusItems_() {
    return (this._normalizeScreenSaverEntities_?.(this.screenSaverEntities) || [])
      .map((item) => this._resolveScreenSaverEntityStatus_(item))
      .filter(Boolean);
  },

  _renderScreenSaverStatusCards_(items = []) {
    const esc = (value) => this._escapeScreenSaverHtml_(value);
    return items.map((item, index) => `
      <article class="ss-status-card ss-status-${esc(item.tone || 'blue')}" data-ss-status="${esc(item.key || index)}" title="${esc(item.entity || '')}">
        <span class="ss-status-icon" aria-hidden="true">
          <ha-icon icon="${esc(item.icon || 'mdi:circle-outline')}"></ha-icon>
        </span>
        <div class="ss-status-copy">
          <span class="ss-status-category">${esc(item.category || item.key || 'Status')}</span>
          <strong>${esc(item.value || '')}</strong>
          <span class="ss-status-name">${esc(item.label || '')}</span>
          ${item.detail ? `<small class="ss-status-detail">${esc(item.detail)}</small>` : ''}
          ${Array.isArray(item.meta) && item.meta.length ? `
            <div class="ss-status-meta">
              ${item.meta.map((meta) => `
                <span class="ss-status-chip">
                  <b>${esc(meta.label || '')}</b>
                  <em>${esc(meta.value || '')}</em>
                </span>
              `).join('')}
            </div>
          ` : ''}
          ${item.sparklinePoints ? `
            <svg class="ss-status-sparkline" viewBox="0 0 120 34" focusable="false" aria-hidden="true">
              <polyline points="${esc(item.sparklinePoints)}"></polyline>
            </svg>
          ` : ''}
        </div>
      </article>
    `).join('');
  },

  _renderScreenSaverIntelligenceRows_(items = []) {
    const esc = (value) => this._escapeScreenSaverHtml_(value);
    return items.map((item) => {
      const secondary = item.detail || (item.customLabel ? '' : item.entity || '');
      return `
        <div class="ss-intel-row ss-status-${esc(item.tone || 'blue')}" title="${esc(item.entity || '')}">
          <ha-icon icon="${esc(item.icon || 'mdi:circle-outline')}" aria-hidden="true"></ha-icon>
          <div>
            <strong>${esc(item.value || '')} ${esc(item.label || '')}</strong>
            ${secondary ? `<span>${esc(secondary)}</span>` : ''}
          </div>
        </div>
      `;
    }).join('');
  },

  _getScreenSaverStatusSummary_(items = []) {
    return items.length
      ? 'Showing live Home Assistant entity states.'
      : 'Select status entities in Screen saver settings.';
  },

  _updateScreenSaverStatusContent_() {
    const overlay = this.screenSaverOverlay;
    if (!overlay) return;
    const statusItems = this._getScreenSaverStatusItems_?.() || [];
    overlay.dataset.hasStatus = statusItems.length ? '1' : '0';
    overlay.dataset.statusCount = String(statusItems.length);
    const rail = overlay.querySelector('.ss-status-rail');
    if (rail) rail.innerHTML = this._renderScreenSaverStatusCards_(statusItems);
    const intelligence = overlay.querySelector('.ss-intelligence');
    if (intelligence) {
      intelligence.innerHTML = `
        <h3>Home Intelligence</h3>
        ${this._renderScreenSaverIntelligenceRows_(statusItems)}
      `;
    }
    const quote = overlay.querySelector('.ss-quote');
    if (quote) quote.textContent = this._getScreenSaverStatusSummary_(statusItems);
  },

  _getScreenSaverTimeParts_(date = new Date()) {
    let time = '';
    let period = '';
    const locale = this._getScreenSaverLocale_?.();
    try {
      const parts = new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' }).formatToParts(date);
      time = parts.filter((part) => part.type !== 'dayPeriod').map((part) => part.value).join('').trim();
      period = (parts.find((part) => part.type === 'dayPeriod')?.value || '').toUpperCase();
    } catch {
      time = date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    }
    return {
      time,
      period,
      seconds: date.toLocaleTimeString(locale, { second: '2-digit' }),
      date: date.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
      shortDate: date.toLocaleDateString(locale, { weekday: 'long', month: 'long', day: 'numeric' }),
      month: date.toLocaleDateString(locale, { month: 'long', year: 'numeric' }),
      day: date.toLocaleDateString(locale, { day: '2-digit' }),
      weekday: date.toLocaleDateString(locale, { weekday: 'long' }),
    };
  },

  _renderScreenSaverOverlayContent_() {
    const overlay = this.screenSaverOverlay;
    if (!overlay) return;
    const styleId = this._normalizeScreenSaverStyle_?.(this.screenSaverStyle) || 'visionos_glass';
    const wasActive = overlay.classList.contains('active') || !!this.screensaverActive;
    const now = new Date();
    const time = this._getScreenSaverTimeParts_(now);
    const statusItems = this._getScreenSaverStatusItems_?.() || [];
    const esc = (value) => this._escapeScreenSaverHtml_(value);
    const statusHtml = this._renderScreenSaverStatusCards_(statusItems);
    const intelligenceHtml = this._renderScreenSaverIntelligenceRows_(statusItems);
    const statusSummary = this._getScreenSaverStatusSummary_(statusItems);

    overlay.dataset.ssStyle = styleId;
    overlay.dataset.hasStatus = statusItems.length ? '1' : '0';
    overlay.dataset.statusCount = String(statusItems.length);
    overlay.className = `screensaver-overlay ss-style-${styleId}${wasActive ? ' active' : ''}`;
    this._applyScreenSaverBackgroundImage_?.(styleId);
    overlay.innerHTML = `
      <div class="ss-visual-layer" aria-hidden="true">
        <div class="ss-earth"></div>
        <div class="ss-planet"></div>
        <div class="ss-orbit ss-orbit-a"></div>
        <div class="ss-orbit ss-orbit-b"></div>
        <div class="ss-hud-ring"></div>
      </div>
      <main class="screensaver-content">
        <section class="ss-hero">
          <div class="ss-greeting">Good evening</div>
          <div class="ss-time-line">
            <span class="screensaver-clock">${esc(time.time)}</span>
            <span class="ss-period">${esc(time.period)}</span>
          </div>
          <div class="screensaver-date">${esc(time.date)}</div>
          <p class="ss-quote">${esc(statusSummary)}</p>
        </section>
        <section class="screensaver-calendar" aria-label="Calendar"></section>
        <section class="ss-status-rail" aria-label="Home status">${statusHtml}</section>
        <section class="ss-intelligence" aria-label="Home intelligence">
          <h3>Home Intelligence</h3>
          ${intelligenceHtml}
        </section>
        <section class="ss-date-tile" aria-label="Today">
          <span>${esc(time.month)}</span>
          <strong>${esc(time.day)}</strong>
          <em>${esc(time.weekday)}</em>
        </section>
      </main>
    `;
  },

  _getScreenSaverModernCss_() {
    return getScreenSaverModernCss();
  },

  /**
   * Ensure styles for the screen saver overlay are injected once into
   * the component's shadow root. This creates a dark overlay with a
   * centered digital clock and date. The overlay is hidden until
   * activated.
   */
  _ensureScreenSaverStyles() {
    const existing = this.shadowRoot?.querySelector('#ddc-screensaver-styles');
    if (existing?.dataset?.version === '2') return;
    if (existing) {
      try { existing.remove(); } catch {}
    }
    try {
      const style = document.createElement('style');
      style.id = 'ddc-screensaver-styles';
      style.dataset.version = '2';
      style.textContent = getScreenSaverShadowStyles(this._getScreenSaverModernCss_?.() || '');
      this.shadowRoot.appendChild(style);
    } catch (e) {
      console.warn('[drag-and-drop-card] Failed to inject screensaver styles', e);
    }
  },

  /**
   * Ensure global styles for the screen saver overlay are injected into the
   * document <head>. These styles are necessary when the screensaver
   * overlay is attached to document.body to ensure proper layout and
   * positioning outside of any transformed containers. Styles are only
   * injected once per page.
   */
  _ensureScreenSaverGlobalStyles() {
    const existing = document.head.querySelector('#ddc-screensaver-global-styles');
    if (existing?.dataset?.version === '2') return;
    if (existing) {
      try { existing.remove(); } catch {}
    }
    try {
      const style = document.createElement('style');
      style.id = 'ddc-screensaver-global-styles';
      style.dataset.version = '2';
      style.textContent = getScreenSaverGlobalStyles(this._getScreenSaverModernCss_?.() || '');
      document.head.appendChild(style);
    } catch (e) {
      console.warn('[drag-and-drop-card] Failed to inject global screensaver styles', e);
    }
  },

  /**
   * Create the screensaver overlay element if it does not already
   * exist. The overlay is appended to the card container and kept
   * hidden until activated.
   */
  _ensureScreenSaverOverlay() {
    // Always ensure global screensaver styles are present when overlay is attached to document.body
    this._ensureScreenSaverGlobalStyles();

    // Determine a unique id for this overlay to avoid collisions if multiple cards exist.
    if (!this._screenSaverOverlayId) {
      const baseId = this.config?.id || `ddc_${Math.random().toString(36).slice(2)}`;
      this._screenSaverOverlayId = `ddc-screensaver-overlay-${baseId}`;
    }
    const desiredId = this._screenSaverOverlayId;

    // If overlay already exists and is attached to document.body, nothing to do
    if (this.screenSaverOverlay && this.screenSaverOverlay.parentNode === document.body) {
      this._renderScreenSaverOverlayContent_?.();
      return;
    }

    // If an overlay exists but was removed from the DOM (e.g. during rebuild), reattach it to document.body
    if (this.screenSaverOverlay && !this.screenSaverOverlay.parentNode) {
      document.body.appendChild(this.screenSaverOverlay);
      this._renderScreenSaverOverlayContent_?.();
      return;
    }

    // Otherwise create a fresh overlay
    const overlay = document.createElement('div');
    overlay.className = 'screensaver-overlay';
    overlay.id = desiredId;
    // exit screensaver on click/touch/key
    overlay.addEventListener('click', () => this._deactivateScreenSaver());
    overlay.addEventListener('keydown', () => this._deactivateScreenSaver());
    this.screenSaverOverlay = overlay;
    this._renderScreenSaverOverlayContent_?.();
    document.body.appendChild(overlay);
  },

  /**
   * Attach listeners for user activity that should reset the idle
   * timer. Listeners are added only once and removed in
   * disconnectedCallback().
   */
  _attachScreensaverListeners() {
    if (this._screensaverActivityHandler) return;
    const handler = () => this._resetScreensaverTimer();
    this._screensaverActivityHandler = handler;
    // Include a broader set of events to detect any user activity (mouse, pointer, scroll, touch)
    this._screensaverEvents = [
      'mousemove',
      'mousedown',
      'click',
      'keydown',
      'wheel',
      'scroll',
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel',
      'pointerdown',
      'pointermove',
      'pointerup',
      'pointercancel'
    ];
    // Attach listeners to the document so any user activity inside or outside the card
    // resets the timer. Use capture phase to ensure early invocation.
    this._screensaverEvents.forEach(ev => {
      document.addEventListener(ev, handler, true);
    });
  },

  /**
   * Reset the screensaver idle timer. If the screensaver is
   * currently active it will be deactivated. A new timeout is
   * scheduled using the current delay. If the screensaver is
   * disabled, no timer will be scheduled.
   */
  _resetScreensaverTimer() {
    // Always clear any existing timer
    if (this._screensaverTimer) {
      clearTimeout(this._screensaverTimer);
      this._screensaverTimer = null;
    }
    // Evaluate whether the screensaver should be used in the current context
    if (!this._shouldUseScreensaver()) {
      // If a screensaver is currently active but conditions no longer allow it, hide it
      if (this.screensaverActive) {
        this._deactivateScreenSaver();
      }
      return;
    }
    // Hide screensaver if active before scheduling a new one
    if (this.screensaverActive) {
      this._deactivateScreenSaver();
    }
    const delay = Number(this.screenSaverDelay) || (5 * 60000);
    this._screensaverTimer = setTimeout(() => {
      this._activateScreenSaver();
    }, delay);
  },

  /**
   * Activate the screensaver overlay. Creates the overlay if
   * necessary, updates the time immediately, and starts a clock
   * update interval. Sets the overlay to active so CSS transitions
   * apply.
   */
  _activateScreenSaver() {
    // Only activate when conditions allow the screensaver (enabled, not editing, not in HA editor, and attached)
    if (!this._shouldUseScreensaver()) return;
    this._ensureScreenSaverOverlay();
    if (!this.screenSaverOverlay) return;
    this.screensaverActive = true;
    this._renderScreenSaverOverlayContent_?.();
    this.screenSaverOverlay.classList.add('active');
    // Hide the tabs bar while screensaver is active
    try {
      if (this.tabsBar) {
        // Save current display property to restore later
        this.__savedTabsDisplay = this.tabsBar.style.display;
        this.tabsBar.style.display = 'none';
      }
    } catch {}
    // update immediately
    this._updateScreenSaverClock();
    // update every second
    if (this._clockInterval) clearInterval(this._clockInterval);
    this._clockInterval = setInterval(() => this._updateScreenSaverClock(), 1000);
  },

  /**
   * Deactivate the screensaver overlay, clear clock interval and
   * schedule a new idle timer if appropriate.
   */
  _deactivateScreenSaver() {
    if (!this.screensaverActive) return;
    this.screensaverActive = false;
    if (this.screenSaverOverlay) this.screenSaverOverlay.classList.remove('active');
    if (this._clockInterval) {
      clearInterval(this._clockInterval);
      this._clockInterval = null;
    }
    // Restore tabs bar when screensaver deactivates
    try {
      if (this.tabsBar) {
        if (this.__savedTabsDisplay != null) {
          this.tabsBar.style.display = this.__savedTabsDisplay;
        } else {
          this.tabsBar.style.display = '';
        }
      }
    } catch {}
    // When user interacts, restart the timer to count idle time again
    this._resetScreensaverTimer();
  },

  /**
   * Update the clock and date displayed on the screensaver overlay.
   * Uses the user's locale for formatting time and date.
   */
  _updateScreenSaverClock() {
    const overlay = this.screenSaverOverlay;
    const clockEl = overlay?.querySelector('.screensaver-clock');
    const dateEl  = overlay?.querySelector('.screensaver-date');
    const periodEl = overlay?.querySelector('.ss-period');
    const dayTile = overlay?.querySelector('.ss-date-tile');
    const now = new Date();
    const locale = this._getScreenSaverLocale_?.();
    const parts = this._getScreenSaverTimeParts_?.(now) || {};
    if (clockEl) {
      clockEl.textContent = parts.time || now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    }
    if (dateEl) {
      dateEl.textContent = parts.date || now.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
    if (periodEl) {
      periodEl.textContent = parts.period || '';
    }
    if (dayTile) {
      const monthEl = dayTile.querySelector('span');
      const dayEl = dayTile.querySelector('strong');
      const weekdayEl = dayTile.querySelector('em');
      if (monthEl) monthEl.textContent = parts.month || '';
      if (dayEl) dayEl.textContent = parts.day || '';
      if (weekdayEl) weekdayEl.textContent = parts.weekday || '';
    }
    try {
      this._updateScreenSaverStatusContent_?.();
    } catch {}

    // Update calendar as well
    try {
      this._updateScreenSaverCalendar();
    } catch {}
  },

  /**
   * Update the monthly calendar displayed on the screensaver overlay. Builds
   * a grid for the current month with weekday headers, filling leading and
   * trailing cells from the previous and next months. Highlights today.
   */
  _updateScreenSaverCalendar() {
    const calEl = this.screenSaverOverlay?.querySelector('.screensaver-calendar');
    if (!calEl) return;
    const now = new Date();
    const locale = this._getScreenSaverLocale_?.();
    const year = now.getFullYear();
    const month = now.getMonth();
    // Month name
    const monthName = now.toLocaleDateString(locale, { month: 'long' });
    // Day names (Sunday first per Date API)
    const dayNames = [];
    // Use a known week starting on Sunday (1970-01-04 is a Sunday) to generate localised day names
    for (let i = 0; i < 7; i++) {
      const d = new Date(1970, 0, 4 + i);
      dayNames.push(d.toLocaleDateString(locale, { weekday: 'short' }));
    }
    // Determine first day of current month (0=Sunday)
    const firstDay = new Date(year, month, 1).getDay();
    // Number of days in current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // Number of days in previous month
    const prevMonthDays = new Date(year, month, 0).getDate();
    // Build weeks array of 42 cells (6 weeks * 7 days)
    const cells = [];
    // Leading days from previous month
    for (let i = 0; i < firstDay; i++) {
      cells.push({ day: prevMonthDays - (firstDay - 1) + i, other: true });
    }
    // Days of current month
    for (let d = 1; d <= daysInMonth; d++) {
      const isToday = d === now.getDate();
      cells.push({ day: d, today: isToday, other: false });
    }
    // Trailing days from next month
    while (cells.length < 42) {
      const nextDay = cells.length - firstDay - daysInMonth + 1;
      cells.push({ day: nextDay, other: true });
    }
    // Build HTML
    let html = '';
    // Header
    html += `<div class="calendar-header">${monthName} ${year}</div>`;
    // Grid container
    html += '<div class="calendar-grid">';
    // Day names header
    for (let i = 0; i < 7; i++) {
      html += `<div class="header">${dayNames[i]}</div>`;
    }
    // Day cells
    cells.forEach((cell, idx) => {
      const classes = [];
      if (cell.other) classes.push('other-month');
      if (cell.today) classes.push('today');
      // Highlight weekends
      const weekDayIndex = idx % 7;
      if (weekDayIndex === 0 || weekDayIndex === 6) classes.push('weekend');
      html += `<div class="${classes.join(' ')}">${cell.day}</div>`;
    });
    html += '</div>';
    calEl.innerHTML = html;
  },

  /**
   * Apply current screensaver settings. When enabled, attach
   * listeners and schedule or reset the idle timer. When disabled,
   * clear timers and hide the overlay.
   */
  _updateScreensaverSettings() {
    this.screenSaverStyle = this._normalizeScreenSaverStyle_?.(this.screenSaverStyle) || 'visionos_glass';
    try { this._renderScreenSaverOverlayContent_?.(); } catch {}
    // ensure overlay exists if enabling
    if (this.screenSaverEnabled) {
      this._ensureScreenSaverOverlay();
      this._attachScreensaverListeners();
      // immediately reset timer
      this._resetScreensaverTimer();
    } else {
      // disable: remove timer and hide overlay
      if (this._screensaverTimer) {
        clearTimeout(this._screensaverTimer);
        this._screensaverTimer = null;
      }
      if (this.screensaverActive) {
        this._deactivateScreenSaver();
      }
    }
  },

  /**
   * Determine if the screensaver should be used based on current state.
   * It must be enabled, the card must not be in edit mode, not inside
   * the Home Assistant editor preview, and still be attached to the DOM.
   * @returns {boolean}
   */
  _shouldUseScreensaver() {
    try {
      // screenSaverEnabled controls the overall feature
      if (!this.screenSaverEnabled) return false;
      // Do not show while editing in drag-and-drop card
      if (this.editMode) return false;
      // Do not show while in HA editor preview
      if (typeof this._isInHaEditorPreview === 'function' && this._isInHaEditorPreview()) return false;
      // Only show when the card is currently in the DOM (on its dashboard page)
      if (!this.isConnected) return false;
    } catch {
      return false;
    }
    return true;
  }
};

export function installScreenSaverMethods(proto) {
  for (const [name, value] of Object.entries(screenSaverMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
