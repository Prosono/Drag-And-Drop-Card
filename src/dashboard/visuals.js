/*
 * Dashboard-level visual refresh and theme helpers.
 *
 * These methods synchronize visual styling that affects the dashboard as a whole, such as card shadows,
 * theme-derived variables, and animated card presentation state.
 */

/* Dashboard theme, shadows, and visual refresh helpers. */
const dashboardVisualMethods = {
  _getAvailableDashboardThemeNames_() {
    try {
      const themes = this.hass?.themes?.themes || this.hass?.themes;
      if (!themes || typeof themes !== 'object') return [];
      return Object.keys(themes)
        .filter((name) => {
          const value = themes?.[name];
          return value && typeof value === 'object' && name !== 'modes';
        })
        .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    } catch {
      return [];
    }
  },

  _getDashboardThemeName_() {
    try {
      return String(this.dashboardTheme ?? this._config?.dashboard_theme ?? this._config?.theme_name ?? '').trim();
    } catch {
      return '';
    }
  },

  _isDashboardThemeActive_() {
    return !!this._getDashboardThemeName_();
  },

  _getEffectiveDashboardThemeMode_() {
    try {
      const explicitDark = this.hass?.selectedTheme?.dark ?? this.hass?.themes?.darkMode;
      if (typeof explicitDark === 'boolean') return explicitDark ? 'dark' : 'light';
    } catch {}
    try {
      return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  },

  _getDashboardThemeDefinition_(themeName = this.dashboardTheme) {
    try {
      const raw = (this.hass?.themes?.themes || this.hass?.themes)?.[themeName];
      if (!raw || typeof raw !== 'object') return null;
      const { modes, ...base } = raw;
      if (raw.modes && typeof raw.modes === 'object') {
        const mode = this._getEffectiveDashboardThemeMode_();
        const scoped = raw.modes?.[mode]
          || raw.modes?.light
          || raw.modes?.dark
          || Object.values(raw.modes || {}).find((v) => v && typeof v === 'object');
        return scoped && typeof scoped === 'object' ? { ...base, ...scoped } : base;
      }
      return base;
    } catch {
      return null;
    }
  },

  _normalizeDashboardThemeVarName_(key = '') {
    const raw = String(key || '').trim();
    if (!raw || raw === 'modes') return '';
    if (raw.startsWith('--')) return raw;
    if (/^[a-zA-Z0-9_-]+$/.test(raw)) return `--${raw}`;
    return '';
  },

  _isDashboardThemeOverrideAllDesignActive_() {
    return !!(this._isDashboardThemeActive_?.() && this.dashboardThemeOverrideAllDesign);
  },

  _getVisualRefreshSignature_() {
    try {
      const cfg = this._config || {};
      const bg = cfg.background_image || cfg.bg_image || {};
      const particles = cfg.background_particles || {};
      const youtube = cfg.background_youtube || {};
      const themeName = this._getDashboardThemeName_?.() || '';
      const themeDefinition = themeName ? (this._getDashboardThemeDefinition_(themeName) || null) : null;
      const mode = String(
        cfg.background_mode
        || (bg?.src ? 'image'
          : (youtube && Object.keys(youtube).length ? 'youtube'
            : (particles && Object.keys(particles).length ? 'particles' : 'none')))
      ).toLowerCase();

      return JSON.stringify({
        dashboardThemeEnabled: !!themeName,
        dashboardTheme: themeName,
        dashboardThemeOverrideAllDesign: !!this.dashboardThemeOverrideAllDesign,
        effectiveThemeMode: this._getEffectiveDashboardThemeMode_?.() || 'light',
        themeDefinition,
        containerBackground: String(this.containerBackground ?? ''),
        cardBackground: String(this.cardBackground ?? ''),
        cardShadowEnabled: !!this.cardShadowEnabled,
        cardShadowIntensity: this._normalizeCardShadowIntensity_?.(this.cardShadowIntensity) || 5,
        applyBackgroundToPage: !!this.applyBackgroundToPage,
        backgroundMode: mode,
        backgroundImage: mode === 'image'
          ? {
              src: String(bg?.src || ''),
              repeat: String(bg?.repeat || ''),
              size: String(bg?.size || ''),
              position: String(bg?.position || ''),
              attachment: String(bg?.attachment || ''),
              opacity: String(bg?.opacity ?? '')
            }
          : null,
        backgroundParticles: mode === 'particles'
          ? {
              config_url: String(particles?.config_url || ''),
              pointer_events: !!particles?.pointer_events,
              hover_mode: String(particles?.hover_mode || ''),
              click_mode: String(particles?.click_mode || ''),
              interaction_distance: String(particles?.interaction_distance ?? ''),
              config: particles?.config || null,
            }
          : null,
        backgroundYoutube: mode === 'youtube'
          ? {
              video_id: String(youtube?.video_id || ''),
              start: String(youtube?.start ?? ''),
              end: String(youtube?.end ?? ''),
              mute: !!youtube?.mute,
              controls: !!youtube?.controls,
              autoplay: youtube?.autoplay !== false,
              playback_rate: String(youtube?.playback_rate ?? ''),
            }
          : null,
      });
    } catch {
      return '';
    }
  },

  _scheduleVisibilityRefresh_() {
    if (this.__visibilityRefreshRAF) return;
    this.__visibilityRefreshRAF = requestAnimationFrame(() => {
      this.__visibilityRefreshRAF = 0;
      try { this._applyVisibility_?.(); } catch {}
    });
  },

  _scheduleVisualRefresh_(force = false) {
    const signature = this._getVisualRefreshSignature_?.() || '';
    if (!force && signature && signature === this.__lastVisualRefreshSig) return;
    this.__queuedVisualRefreshSig = signature;
    this.__queuedVisualRefreshForce = !!(this.__queuedVisualRefreshForce || force);
    if (this.__visualRefreshRAF) return;

    this.__visualRefreshRAF = requestAnimationFrame(() => {
      this.__visualRefreshRAF = 0;
      const shouldForce = !!this.__queuedVisualRefreshForce;
      this.__queuedVisualRefreshForce = false;
      const nextSignature = this.__queuedVisualRefreshSig ?? this._getVisualRefreshSignature_?.() ?? '';
      this.__queuedVisualRefreshSig = '';
      if (!shouldForce && nextSignature && nextSignature === this.__lastVisualRefreshSig) return;
      try { this._applyDashboardThemeStyling_?.(); } catch {}
      this.__lastVisualRefreshSig = nextSignature;
    });
  },

  _refreshAllPerCardStyles_() {
    try {
      const wraps = Array.from(this.cardContainer?.children || []);
      wraps.forEach((wrap) => {
        if (!(wrap instanceof HTMLElement) || !wrap.classList?.contains('card-wrapper')) return;
        this._applyPerCardStyle_?.(wrap, this._extractPerCardStyle_?.(wrap), { persist: false });
      });
    } catch {}
  },

  _normalizeCardShadowIntensity_(value = 5) {
    const n = Number(value);
    if (!Number.isFinite(n)) return 5;
    return Math.max(1, Math.min(10, Math.round(n)));
  },

  _cardShadowCssValue_(value = this.cardShadowIntensity) {
    const intensity = this._normalizeCardShadowIntensity_(value);
    const y = 3 + intensity;
    const blur = 9 + (intensity * 3);
    const spread = intensity >= 8 ? 1 : 0;
    const alpha = Math.min(0.56, 0.14 + (intensity * 0.042));
    return `0 ${y}px ${blur}px ${spread}px rgba(0,0,0,${alpha.toFixed(2)})`;
  },

  _applyDashboardThemeStyling_() {
    try {
      const host = this;
      const previouslyApplied = Array.isArray(this.__dashboardThemeAppliedVars) ? this.__dashboardThemeAppliedVars : [];
      previouslyApplied.forEach((prop) => {
        try { host.style.removeProperty(prop); } catch {}
      });
      this.__dashboardThemeAppliedVars = [];

      const themeName = this._getDashboardThemeName_?.() || '';
      this.dashboardThemeEnabled = !!themeName;
      if (themeName) {
        const themeVars = this._getDashboardThemeDefinition_(themeName);
        if (themeVars && typeof themeVars === 'object') {
          for (const [key, value] of Object.entries(themeVars)) {
            const prop = this._normalizeDashboardThemeVarName_?.(key) || '';
            if (!prop) continue;
            if (value == null || typeof value === 'object') continue;
            try {
              host.style.setProperty(prop, String(value));
              this.__dashboardThemeAppliedVars.push(prop);
            } catch {}
          }
        }
      }

      const themeOwnsDesign = this._isDashboardThemeOverrideAllDesignActive_();
      host.style.setProperty(
        '--ddc-bg',
        themeOwnsDesign
          ? 'var(--lovelace-background, var(--primary-background-color, transparent))'
          : (this.containerBackground ?? 'transparent')
      );
      host.style.setProperty(
        '--ddc-card-bg',
        themeOwnsDesign
          ? 'var(--ha-card-background, var(--card-background-color, var(--secondary-background-color, rgba(255,255,255,.06))))'
          : (this.cardBackground ?? 'var(--ha-card-background, var(--card-background-color))')
      );

      if (themeOwnsDesign) {
        host.style.setProperty('--ddc-card-shadow', 'var(--ha-card-box-shadow, 0 2px 12px rgba(0,0,0,.18))');
      } else if (this.cardShadowEnabled) {
        host.style.setProperty('--ddc-card-shadow', this._cardShadowCssValue_());
      } else {
        host.style.removeProperty('--ddc-card-shadow');
      }

      this._refreshAllPerCardStyles_?.();
      this._syncPageBackgroundToView_?.();
      this.__lastVisualRefreshSig = this._getVisualRefreshSignature_?.() || '';
    } catch (e) {
      console.warn('[drag-and-drop-card] Failed to apply dashboard theme styling', e);
    }
  },
};

export function installDashboardVisualMethods(proto) {
  for (const [name, value] of Object.entries(dashboardVisualMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
