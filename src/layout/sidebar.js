/*
 * Optional dashboard sidebar layout and widgets.
 *
 * The sidebar can host navigation, clock/calendar widgets, and dedicated sidebar cards while sharing
 * layout, rendering, and Home Assistant state updates with the main canvas.
 */

/* Sidebar navigation, widgets, calendar/status popups, and sidebar cards. */
const sidebarMethods = {
  _normalizeSidebarStyle_(style = 'glass') {
    const value = String(style || 'glass').trim().toLowerCase().replace(/[\s-]+/g, '_');
    return ['glass', 'neon', 'minimal'].includes(value) ? value : 'glass';
  },

  _normalizeSidebarDensity_(density = 'comfortable') {
    const value = String(density || 'comfortable').trim().toLowerCase().replace(/[\s-]+/g, '_');
    return ['compact', 'comfortable', 'spacious'].includes(value) ? value : 'comfortable';
  },

  _normalizeSidebarAccent_(accent = 'blue') {
    const value = String(accent || 'blue').trim().toLowerCase().replace(/[\s-]+/g, '_');
    return ['blue', 'cyan', 'purple', 'amber', 'green'].includes(value) ? value : 'blue';
  },

  _getSidebarItemDefinitions_() {
    return [
      { id: 'navigation', label: 'Tabs / layers', icon: 'mdi:tab' },
      { id: 'clock', label: 'Clock', icon: 'mdi:clock-outline' },
      { id: 'date', label: 'Date', icon: 'mdi:calendar-month-outline' },
      { id: 'weather', label: 'Weather', icon: 'mdi:weather-partly-cloudy' },
      { id: 'people', label: 'People home', icon: 'mdi:account-group-outline' },
      { id: 'status', label: 'Home status', icon: 'mdi:home-analytics' },
      { id: 'profile', label: 'Profile', icon: 'mdi:account-circle-outline' },
    ];
  },

  _normalizeSidebarItems_(items = null, opts = {}) {
    const aliases = {
      nav: 'navigation',
      tabs: 'navigation',
      tab: 'navigation',
      layers: 'navigation',
      layer: 'navigation',
      'tabs/layers': 'navigation',
      tabs_layers: 'navigation',
      time: 'clock',
      calendar: 'date',
      calendars: 'date',
      people: 'people',
      persons: 'people',
      person: 'people',
      presence: 'people',
      people_home: 'people',
      home_people: 'people',
      home_status: 'status',
      entities: 'status',
      entity_status: 'status',
      system: 'status',
      user: 'profile',
      account: 'profile',
    };
    const allowed = this._getSidebarItemDefinitions_?.().map((item) => item.id) || ['navigation', 'clock', 'date'];
    const source = Array.isArray(items)
      ? items
      : String(items || '').split(',').map((item) => item.trim()).filter(Boolean);
    const normalized = [];
    source.forEach((item) => {
      const raw = String(item || '').trim().toLowerCase().replace(/[\s-]+/g, '_');
      const value = aliases[raw] || raw;
      if (allowed.includes(value) && !normalized.includes(value)) normalized.push(value);
    });
    if (!normalized.length && (opts.enabled || opts.legacyLeft)) normalized.push('navigation');
    return normalized;
  },

  _normalizeSidebarCalendarEntities_(entities = []) {
    const source = Array.isArray(entities)
      ? entities
      : String(entities || '').split(/[\n,]/);
    const normalized = [];
    source.forEach((entity) => {
      const value = String(entity || '').trim();
      if (!value || normalized.includes(value)) return;
      normalized.push(value);
    });
    return normalized;
  },

  _normalizeSidebarHeader_(value = '') {
    const raw = String(value || '').trim().toLowerCase().replace(/[\s-]+/g, '_');
    const aliases = {
      day: 'date_time',
      date: 'date_time',
      datetime: 'date_time',
      date_time: 'date_time',
      time: 'clock',
      people_home: 'people',
      presence: 'people',
      home_status: 'home',
      status: 'home',
      house: 'home',
      user: 'profile',
      hidden: 'none',
      off: 'none',
    };
    const normalized = aliases[raw] || raw;
    return ['clock', 'date_time', 'people', 'home', 'weather', 'profile', 'none'].includes(normalized)
      ? normalized
      : 'clock';
  },

  _normalizeSidebarCanvasHeight_(value = 520) {
    const n = Number(value);
    if (!Number.isFinite(n)) return 520;
    return Math.max(280, Math.min(1600, Math.round(n)));
  },

  _normalizeSidebarCards_(entries = []) {
    if (!Array.isArray(entries)) return [];
    return entries
      .map((entry) => this._normalizeSavedCardEntry_(entry))
      .filter((entry) => entry?.card && typeof entry.card === 'object' && Object.keys(entry.card).length);
  },

  _sidebarCardsRenderSignature_(entries = []) {
    try {
      return JSON.stringify(this._normalizeSidebarCards_(entries).map((entry) => ({
        id: entry.id,
        card: entry.card || null,
        position: entry.position || null,
        size: entry.size || null,
        z: entry.z ?? null,
      })));
    } catch {
      return '';
    }
  },

  _isSidebarEnabled_() {
    return false;
  },

  _sidebarHasItem_(item) {
    const normalizedItem = String(item || '').trim().toLowerCase();
    return this._isSidebarEnabled_() && this._normalizeSidebarItems_(this.sidebarItems, { enabled: true }).includes(normalizedItem);
  },

  _isSidebarNavigationActive_() {
    return false;
  },

  _formatSidebarDate_(date = new Date()) {
    try {
      return new Intl.DateTimeFormat(undefined, {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }).format(date);
    } catch {
      return date.toLocaleDateString?.() || '';
    }
  },

  _formatSidebarTime_(date = new Date()) {
    try {
      return new Intl.DateTimeFormat(undefined, {
        hour: '2-digit',
        minute: '2-digit',
      }).format(date);
    } catch {
      return date.toLocaleTimeString?.([], { hour: '2-digit', minute: '2-digit' }) || '';
    }
  },

  _formatSidebarMonth_(date = new Date()) {
    try { return new Intl.DateTimeFormat(undefined, { month: 'short' }).format(date); } catch { return ''; }
  },

  _formatSidebarWeekday_(date = new Date()) {
    try { return new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(date); } catch { return ''; }
  },

  _formatSidebarLongDate_(date = new Date()) {
    try {
      return new Intl.DateTimeFormat(undefined, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).format(date);
    } catch {
      return date.toLocaleDateString?.() || '';
    }
  },

  _getSidebarWeekNumber_(date = new Date()) {
    const current = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = current.getUTCDay() || 7;
    current.setUTCDate(current.getUTCDate() + 4 - day);
    const yearStart = new Date(Date.UTC(current.getUTCFullYear(), 0, 1));
    return Math.ceil((((current - yearStart) / 86400000) + 1) / 7);
  },

  _formatSidebarMonthYear_(date = new Date()) {
    try { return new Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' }).format(date); } catch { return ''; }
  },

  _getSidebarWeekdayLabels_() {
    try {
      return Array.from({ length: 7 }, (_, index) => {
        const date = new Date(Date.UTC(2026, 0, 5 + index)); // Monday-first reference week.
        return new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(date);
      });
    } catch {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    }
  },

  _getSidebarCalendarCells_(date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const today = new Date();
    const first = new Date(year, month, 1);
    const startOffset = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    return Array.from({ length: 42 }, (_, index) => {
      const dayInMonth = index - startOffset + 1;
      let cellDate;
      let muted = false;
      if (dayInMonth < 1) {
        cellDate = new Date(year, month - 1, daysInPrevMonth + dayInMonth);
        muted = true;
      } else if (dayInMonth > daysInMonth) {
        cellDate = new Date(year, month + 1, dayInMonth - daysInMonth);
        muted = true;
      } else {
        cellDate = new Date(year, month, dayInMonth);
      }
      const isToday = cellDate.getFullYear() === today.getFullYear()
        && cellDate.getMonth() === today.getMonth()
        && cellDate.getDate() === today.getDate();
      const isSelected = cellDate.getFullYear() === date.getFullYear()
        && cellDate.getMonth() === date.getMonth()
        && cellDate.getDate() === date.getDate();
      return {
        day: cellDate.getDate(),
        muted,
        today: isToday,
        selected: isSelected,
        weekend: cellDate.getDay() === 0 || cellDate.getDay() === 6,
        label: this._formatSidebarLongDate_(cellDate),
      };
    });
  },

  _sidebarCalendarMarkup_(date = new Date(), { detail = false } = {}) {
    const safe = (value) => this._safe?.(value) || String(value ?? '');
    const weekdays = this._getSidebarWeekdayLabels_();
    const cells = this._getSidebarCalendarCells_(date);
    return `
      <div class="ddc-sidebar-month ${detail ? 'ddc-sidebar-month-detail' : ''}">
        <div class="ddc-sidebar-month-head">
          <div>
            <span>Calendar</span>
            <strong>${safe(this._formatSidebarMonthYear_(date))}</strong>
          </div>
          <em>W${safe(this._getSidebarWeekNumber_(date))}</em>
        </div>
        <div class="ddc-sidebar-month-grid" role="grid" aria-label="${safe(this._formatSidebarMonthYear_(date))}">
          ${weekdays.map((day) => `<span class="ddc-sidebar-month-dow">${safe(day)}</span>`).join('')}
          ${cells.map((cell) => `
            <span
              class="ddc-sidebar-month-day ${cell.muted ? 'is-muted' : ''} ${cell.today ? 'is-today' : ''} ${cell.selected ? 'is-selected' : ''} ${cell.weekend ? 'is-weekend' : ''}"
              role="gridcell"
              aria-label="${safe(cell.label)}"
            >${safe(cell.day)}</span>
          `).join('')}
        </div>
      </div>
    `;
  },

  _getSidebarCalendarEntityIds_() {
    const configured = this._normalizeSidebarCalendarEntities_(
      this.sidebarCalendarEntities ?? this._config?.sidebar_calendar_entities ?? this._config?.sidebar_calendars ?? []
    );
    if (configured.length) return configured;
    const states = this._getSidebarHass_?.()?.states || {};
    return Object.keys(states).filter((entityId) => entityId.startsWith('calendar.')).slice(0, 4);
  },

  _formatSidebarEventTime_(date = null, allDay = false) {
    if (!(date instanceof Date) || !Number.isFinite(date.getTime())) return '';
    try {
      if (allDay) {
        return new Intl.DateTimeFormat(undefined, { weekday: 'short', month: 'short', day: 'numeric' }).format(date);
      }
      return new Intl.DateTimeFormat(undefined, { weekday: 'short', hour: '2-digit', minute: '2-digit' }).format(date);
    } catch {
      return allDay ? this._formatSidebarDate_(date) : `${this._formatSidebarDate_(date)} ${this._formatSidebarTime_(date)}`;
    }
  },

  _normalizeSidebarCalendarEvent_(raw = {}, entityId = '', calendarName = '') {
    const readTime = (value) => {
      if (!value) return '';
      if (typeof value === 'string') return value;
      if (value.dateTime) return value.dateTime;
      if (value.date) return value.date;
      return '';
    };
    const rawStart = readTime(raw.start) || raw.start_time || raw.start || raw.startTime || '';
    const rawEnd = readTime(raw.end) || raw.end_time || raw.end || raw.endTime || '';
    const allDay = !!(raw.all_day || raw.allDay || raw.start?.date);
    const start = rawStart ? new Date(rawStart) : null;
    const end = rawEnd ? new Date(rawEnd) : null;
    const hasStart = start instanceof Date && Number.isFinite(start.getTime());
    const message = String(raw.summary || raw.message || raw.title || raw.name || calendarName || 'Event').trim();
    const location = String(raw.location || raw.place || '').trim();
    return {
      entityId,
      calendar: calendarName || entityId,
      message,
      location,
      start,
      end,
      allDay,
      when: hasStart ? this._formatSidebarEventTime_(start, allDay) : '',
    };
  },

  _requestSidebarCalendarEvents_(ids = []) {
    const hass = this._getSidebarHass_?.();
    if (!ids.length || !hass?.callWS) return;
    const key = ids.join('|');
    const now = Date.now();
    if (this.__sidebarCalendarEventsCache?.key === key && (now - this.__sidebarCalendarEventsCache.fetchedAt) < 300000) return;
    if (this.__sidebarCalendarEventsPending === key) return;
    this.__sidebarCalendarEventsPending = key;
    const start = new Date(now);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 31);
    Promise.all(ids.map((entityId) => hass.callWS({
      type: 'calendar/list_events',
      entity_id: entityId,
      start: start.toISOString(),
      end: end.toISOString(),
    }).then((response) => ({ entityId, response })).catch(() => ({ entityId, response: null }))))
      .then((results) => {
        const states = hass?.states || {};
        const events = [];
        results.forEach(({ entityId, response }) => {
          const list = Array.isArray(response) ? response : (Array.isArray(response?.events) ? response.events : []);
          const calendarName = this._formatSidebarEntityName_(entityId, states[entityId]);
          list.forEach((event) => {
            const normalized = this._normalizeSidebarCalendarEvent_(event, entityId, calendarName);
            if (normalized.message || normalized.when) events.push(normalized);
          });
        });
        events.sort((a, b) => {
          const aTime = a.start instanceof Date && Number.isFinite(a.start.getTime()) ? a.start.getTime() : Number.MAX_SAFE_INTEGER;
          const bTime = b.start instanceof Date && Number.isFinite(b.start.getTime()) ? b.start.getTime() : Number.MAX_SAFE_INTEGER;
          return aTime - bTime;
        });
        this.__sidebarCalendarEventsCache = { key, fetchedAt: Date.now(), events };
        this._renderSidebar_?.();
      })
      .finally(() => {
        if (this.__sidebarCalendarEventsPending === key) this.__sidebarCalendarEventsPending = '';
      });
  },

  _getSidebarCalendarEvents_(limit = 4) {
    const hass = this._getSidebarHass_?.();
    const states = hass?.states || {};
    const ids = this._getSidebarCalendarEntityIds_?.() || [];
    const key = ids.join('|');
    this._requestSidebarCalendarEvents_?.(ids);
    const cached = this.__sidebarCalendarEventsCache?.key === key ? (this.__sidebarCalendarEventsCache.events || []) : [];
    if (cached.length) return limit ? cached.slice(0, limit) : cached;
    const events = ids.map((entityId) => {
      const entity = states[entityId];
      if (!entity) return null;
      const attrs = entity.attributes || {};
      const fallback = this._normalizeSidebarCalendarEvent_(attrs, entityId, this._formatSidebarEntityName_(entityId, entity));
      if (!fallback.when && entity.state && !['unknown', 'unavailable', 'off'].includes(String(entity.state).toLowerCase())) {
        fallback.when = this._formatScreenSaverState_?.(entity.state) || entity.state;
      }
      if (!fallback.message && !fallback.when) return null;
      return fallback;
    }).filter(Boolean).sort((a, b) => {
      const aTime = a.start instanceof Date && Number.isFinite(a.start.getTime()) ? a.start.getTime() : Number.MAX_SAFE_INTEGER;
      const bTime = b.start instanceof Date && Number.isFinite(b.start.getTime()) ? b.start.getTime() : Number.MAX_SAFE_INTEGER;
      return aTime - bTime;
    });
    return limit ? events.slice(0, limit) : events;
  },

  _sidebarCalendarEventsMarkup_(events = [], { compact = false } = {}) {
    const safe = (value) => this._safe?.(value) || String(value ?? '');
    if (!events.length) {
      const configured = this._getSidebarCalendarEntityIds_?.() || [];
      return `
        <div class="ddc-sidebar-events-empty">
          <ha-icon icon="mdi:calendar-check-outline" aria-hidden="true"></ha-icon>
          <span>${configured.length ? 'No visible events from selected calendars' : 'Add calendar entities in settings'}</span>
        </div>
      `;
    }
    return `
      <div class="ddc-sidebar-events ${compact ? 'compact' : ''}">
        ${events.map((event) => `
          <button type="button" class="ddc-sidebar-event" data-sidebar-more-info="${safe(event.entityId)}">
            <span>${safe(event.when || event.calendar)}</span>
            <strong>${safe(event.message)}</strong>
            ${event.location ? `<em>${safe(event.location)}</em>` : `<em>${safe(event.calendar)}</em>`}
          </button>
        `).join('')}
      </div>
    `;
  },

  _getSidebarClockAngles_(date = new Date()) {
    const minutes = date.getMinutes() + (date.getSeconds() / 60);
    const hours = (date.getHours() % 12) + (minutes / 60);
    return {
      hour: `${hours * 30}deg`,
      minute: `${minutes * 6}deg`,
      second: `${date.getSeconds() * 6}deg`,
    };
  },

  _getSidebarHass_() {
    return this.hass || this._hass || null;
  },

  _getSidebarWeatherEntity_() {
    const configured = String(this._config?.sidebar_weather_entity || this.sidebarWeatherEntity || '').trim();
    const hass = this._getSidebarHass_?.();
    if (configured && hass?.states?.[configured]) return configured;
    return Object.keys(hass?.states || {}).find((entityId) => entityId.startsWith('weather.')) || '';
  },

  _getSidebarWeatherData_() {
    const hass = this._getSidebarHass_?.();
    const entityId = this._getSidebarWeatherEntity_?.();
    const entity = entityId ? hass?.states?.[entityId] : null;
    const attrs = entity?.attributes || {};
    const state = entity?.state || '';
    const temp = attrs.temperature ?? attrs.apparent_temperature ?? attrs.temperature_high;
    const unit = attrs.temperature_unit || attrs.unit_of_measurement || '°';
    const place = attrs.friendly_name || entityId?.split('.')?.[1]?.replace(/_/g, ' ') || 'Weather';
    const humidity = attrs.humidity ?? attrs.relative_humidity;
    const wind = attrs.wind_speed;
    return {
      entityId,
      icon: this._screenSaverWeatherIcon_?.(state) || 'mdi:weather-partly-cloudy',
      temperature: temp !== undefined && temp !== null && temp !== '' ? `${temp}${String(unit || '').startsWith('°') ? unit : ` ${unit}`}` : '—',
      state: this._formatScreenSaverState_?.(state) || 'Weather',
      place,
      humidity: humidity !== undefined && humidity !== null && humidity !== '' ? `${humidity}%` : '',
      wind: wind !== undefined && wind !== null && wind !== '' ? `${wind} ${attrs.wind_speed_unit || ''}`.trim() : '',
      updated: entity?.last_updated || entity?.last_changed || '',
    };
  },

  _getSidebarHomeImage_() {
    return String(
      this.sidebarHomeImage ??
        this._config?.sidebar_home_image ??
        this._config?.sidebar_house_image ??
        this._config?.sidebar_home_image_url ??
        ''
    ).trim();
  },

  _formatSidebarEntityName_(entityId = '', entity = null) {
    const friendly = entity?.attributes?.friendly_name;
    if (friendly) return String(friendly);
    const [, name = entityId] = String(entityId || '').split('.');
    return name.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
  },

  _formatSidebarEntityState_(entity = null) {
    if (!entity) return 'Unknown';
    const state = String(entity.state ?? '').trim() || 'unknown';
    const unit = String(entity.attributes?.unit_of_measurement || '').trim();
    const formatted = this._formatScreenSaverState_?.(state) || state;
    return unit && !String(formatted).includes(unit) ? `${formatted} ${unit}` : formatted;
  },

  _formatSidebarEntityUpdated_(entity = null) {
    const raw = entity?.last_updated || entity?.last_changed || '';
    if (!raw) return '';
    const date = new Date(raw);
    if (!Number.isFinite(date.getTime())) return '';
    return `${this._formatSidebarDate_(date)} ${this._formatSidebarTime_(date)}`;
  },

  _sidebarStatusEntityInfo_(entry = []) {
    const [entityId, entity] = entry;
    const domain = String(entityId || '').split('.')[0] || '';
    return {
      entityId,
      entity,
      domain,
      icon: entity?.attributes?.icon || this._sidebarIconForDomain_(domain),
      name: this._formatSidebarEntityName_(entityId, entity),
      state: this._formatSidebarEntityState_(entity),
      rawState: String(entity?.state ?? '').trim().toLowerCase(),
      updated: this._formatSidebarEntityUpdated_(entity),
    };
  },

  _sidebarIconForDomain_(domain = '') {
    return ({
      automation: 'mdi:robot-outline',
      binary_sensor: 'mdi:checkbox-marked-circle-outline',
      calendar: 'mdi:calendar-month-outline',
      climate: 'mdi:thermostat',
      cover: 'mdi:window-shutter',
      light: 'mdi:lightbulb-on-outline',
      lock: 'mdi:lock-outline',
      person: 'mdi:account-circle-outline',
      scene: 'mdi:palette-outline',
      script: 'mdi:script-text-outline',
      sensor: 'mdi:gauge',
      switch: 'mdi:toggle-switch-outline',
    })[String(domain || '').toLowerCase()] || 'mdi:chip';
  },

  _getSidebarPeople_() {
    const states = this._getSidebarHass_?.()?.states || {};
    const formatState = (state = '') => {
      const raw = String(state || '').trim().toLowerCase();
      if (raw === 'home') return 'Home';
      if (raw === 'not_home') return 'Away';
      return this._formatScreenSaverState_?.(raw) || raw || 'Unknown';
    };
    return Object.entries(states)
      .filter(([entityId]) => entityId.startsWith('person.'))
      .map(([entityId, entity]) => {
        const name = this._formatSidebarEntityName_(entityId, entity);
        const initials = name
          .split(/\s+/)
          .filter(Boolean)
          .slice(0, 2)
          .map((part) => part.charAt(0).toUpperCase())
          .join('') || 'P';
        const rawState = String(entity?.state || '').trim().toLowerCase();
        return {
          entityId,
          entity,
          name,
          initials,
          picture: entity?.attributes?.entity_picture || '',
          rawState,
          state: formatState(rawState),
          isHome: rawState === 'home',
          updated: this._formatSidebarEntityUpdated_(entity),
        };
      })
      .sort((a, b) => {
        if (a.isHome !== b.isHome) return a.isHome ? -1 : 1;
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });
  },

  _sidebarPersonAvatarMarkup_(person = {}, className = '') {
    const safe = (value) => this._safe?.(value) || String(value ?? '');
    const statusClass = person.isHome ? 'is-home' : 'is-away';
    const cls = ['ddc-sidebar-person-avatar', className, statusClass].filter(Boolean).join(' ');
    return `
      <span class="${safe(cls)}" aria-hidden="true">
        ${person.picture ? `<img src="${safe(person.picture)}" alt="" loading="lazy" />` : `<b>${safe(person.initials || 'P')}</b>`}
      </span>
    `;
  },

  _openSidebarPeoplePopup_() {
    const people = this._getSidebarPeople_?.() || [];
    const safe = (value) => this._safe?.(value) || String(value ?? '');
    try { this.__sidebarPeopleModal?.remove?.(); } catch {}
    const homeCount = people.filter((person) => person.isHome).length;
    const modal = document.createElement('div');
    modal.className = 'ddc-sidebar-status-popup-backdrop ddc-sidebar-people-popup-backdrop';
    modal.innerHTML = `
      <div class="ddc-sidebar-status-popup ddc-sidebar-people-popup" role="dialog" aria-modal="true" aria-labelledby="ddc-sidebar-people-popup-title">
        <div class="ddc-sidebar-status-popup-head">
          <div class="ddc-sidebar-status-popup-icon"><ha-icon icon="mdi:account-group-outline" aria-hidden="true"></ha-icon></div>
          <div>
            <span>Presence</span>
            <strong id="ddc-sidebar-people-popup-title">People home</strong>
            <p>People entities from Home Assistant, sorted by who is currently home.</p>
          </div>
          <button type="button" class="ddc-sidebar-status-popup-close" data-sidebar-people-close aria-label="Close">
            <ha-icon icon="mdi:close" aria-hidden="true"></ha-icon>
          </button>
        </div>
        <div class="ddc-sidebar-status-popup-summary">
          <div><span>Home</span><strong>${safe(homeCount)}</strong></div>
          <div><span>Away</span><strong>${safe(Math.max(0, people.length - homeCount))}</strong></div>
          <div><span>Total</span><strong>${safe(people.length)}</strong></div>
        </div>
        <div class="ddc-sidebar-people-list">
          ${people.length ? people.map((person) => `
            <div class="ddc-sidebar-person-row ${person.isHome ? 'is-home' : 'is-away'}">
              <button type="button" class="ddc-sidebar-person-main" data-sidebar-more-info="${safe(person.entityId)}">
                ${this._sidebarPersonAvatarMarkup_(person)}
                <span>
                  <strong>${safe(person.name)}</strong>
                  <em>${safe(person.entityId)}</em>
                </span>
                <b>${safe(person.state)}</b>
              </button>
              <div class="ddc-sidebar-status-entity-actions">
                ${person.updated ? `<span>${safe(person.updated)}</span>` : ''}
                <button type="button" data-sidebar-more-info="${safe(person.entityId)}">Details</button>
              </div>
            </div>
          `).join('') : `
            <div class="ddc-sidebar-status-empty">
              <ha-icon icon="mdi:account-off-outline" aria-hidden="true"></ha-icon>
              <strong>No person entities found</strong>
              <span>Add <code>person.*</code> entities in Home Assistant to populate this widget.</span>
            </div>
          `}
        </div>
      </div>
    `;
    const close = () => {
      try { modal.remove(); } catch {}
      if (this.__sidebarPeopleModal === modal) this.__sidebarPeopleModal = null;
    };
    modal.querySelectorAll('[data-sidebar-people-close]').forEach((button) => button.addEventListener('click', close));
    modal.addEventListener('pointerdown', (ev) => { if (ev.target === modal) close(); });
    modal.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') close(); });
    modal.querySelectorAll('[data-sidebar-more-info]').forEach((button) => {
      button.addEventListener('click', (ev) => {
        ev.stopPropagation();
        this._fireSidebarMoreInfo_(button.dataset.sidebarMoreInfo || '');
      });
    });
    this.__sidebarPeopleModal = modal;
    this.shadowRoot?.appendChild?.(modal);
    requestAnimationFrame(() => modal.querySelector('[data-sidebar-people-close]')?.focus?.());
  },

  _getSidebarStatusGroups_() {
    const states = this._getSidebarHass_?.()?.states || {};
    const entries = Object.entries(states);
    const total = entries.length;
    const isUnavailable = ([, entity]) => ['unknown', 'unavailable'].includes(String(entity?.state || '').toLowerCase());
    const isOpenLike = ([, entity]) => ['on', 'open', 'opening', 'unlocked'].includes(String(entity?.state || '').toLowerCase());
    const deviceClass = ([, entity]) => String(entity?.attributes?.device_class || '').toLowerCase();
    const searchable = ([entityId, entity]) => `${entityId} ${entity?.attributes?.friendly_name || ''}`.toLowerCase();
    const hasAnyToken = (entry, tokens = []) => tokens.some((token) => searchable(entry).includes(token));
    const sortEntries = (items) => items.slice().sort((a, b) => {
      const aName = this._formatSidebarEntityName_(a[0], a[1]).toLowerCase();
      const bName = this._formatSidebarEntityName_(b[0], b[1]).toLowerCase();
      return aName.localeCompare(bName);
    });
    const usableEntries = sortEntries(entries.filter((entry) => !isUnavailable(entry)));
    const unavailableEntries = sortEntries(entries.filter(isUnavailable));
    const lightEntries = sortEntries(entries.filter(([entityId, entity]) => entityId.startsWith('light.') && entity?.state === 'on'));
    const climateEntries = sortEntries(entries.filter(([entityId, entity]) => entityId.startsWith('climate.') && !['off', 'unknown', 'unavailable'].includes(String(entity?.state || '').toLowerCase())));
    const lockEntries = sortEntries(entries.filter(([entityId]) => entityId.startsWith('lock.')));
    const unlockedLockEntries = sortEntries(lockEntries.filter((entry) => !isUnavailable(entry) && String(entry[1]?.state || '').toLowerCase() !== 'locked'));
    const lockedLockCount = lockEntries.filter((entry) => String(entry[1]?.state || '').toLowerCase() === 'locked').length;
    const doorEntries = sortEntries(entries.filter((entry) => entry[0].startsWith('binary_sensor.') && (deviceClass(entry) === 'door' || hasAnyToken(entry, ['door', 'dør', 'dor']))));
    const openDoorEntries = sortEntries(doorEntries.filter(isOpenLike));
    const windowEntries = sortEntries(entries.filter((entry) => entry[0].startsWith('binary_sensor.') && (deviceClass(entry) === 'window' || hasAnyToken(entry, ['window', 'vindu']))));
    const openWindowEntries = sortEntries(windowEntries.filter(isOpenLike));
    const coverEntries = sortEntries(entries.filter(([entityId]) => entityId.startsWith('cover.')));
    const openCoverEntries = sortEntries(coverEntries.filter((entry) => ['open', 'opening'].includes(String(entry[1]?.state || '').toLowerCase())));
    const accessEntries = sortEntries([...unlockedLockEntries, ...openDoorEntries, ...openWindowEntries, ...openCoverEntries]);
    const sensorEntries = sortEntries(entries.filter(([entityId]) => entityId.startsWith('sensor.') || entityId.startsWith('binary_sensor.')));
    const sceneEntries = sortEntries(entries.filter(([entityId]) => entityId.startsWith('scene.')));
    const automationEntries = sortEntries(entries.filter(([entityId]) => entityId.startsWith('automation.')));
    const make = ({ id, icon, label, value, description, entries: groupEntries, action = null }) => ({
      id,
      icon,
      label,
      value,
      description,
      action,
      entities: groupEntries.map((entry) => this._sidebarStatusEntityInfo_(entry)),
    });
    return [
      make({
        id: 'access',
        icon: accessEntries.length ? 'mdi:shield-alert-outline' : 'mdi:shield-check-outline',
        label: 'Open access',
        value: `${accessEntries.length}`,
        description: 'Unlocked locks, open doors, open windows and open covers.',
        entries: accessEntries,
      }),
      make({
        id: 'lights',
        icon: 'mdi:lightbulb-on-outline',
        label: 'Lights on',
        value: `${lightEntries.length}`,
        description: 'Lights that are currently on.',
        entries: lightEntries,
        action: lightEntries.length ? { type: 'turn_off_lights', label: 'Turn off all', icon: 'mdi:lightbulb-off-outline' } : null,
      }),
      make({
        id: 'climate',
        icon: 'mdi:thermostat',
        label: 'Climate active',
        value: `${climateEntries.length}`,
        description: 'Climate entities that are not off.',
        entries: climateEntries,
      }),
      make({
        id: 'locks',
        icon: unlockedLockEntries.length ? 'mdi:lock-open-variant-outline' : 'mdi:lock-check-outline',
        label: 'Locks locked',
        value: lockEntries.length ? `${lockedLockCount}/${lockEntries.length}` : '0',
        description: 'Door locks and other lock entities, including whether they are locked or open.',
        entries: lockEntries,
        action: unlockedLockEntries.length ? { type: 'lock_all', label: 'Lock all', icon: 'mdi:lock-outline' } : null,
      }),
      make({
        id: 'doors',
        icon: openDoorEntries.length ? 'mdi:door-open' : 'mdi:door-closed',
        label: 'Doors open',
        value: `${openDoorEntries.length}`,
        description: 'Binary sensor door entities that currently report open.',
        entries: openDoorEntries.length ? openDoorEntries : doorEntries,
      }),
      make({
        id: 'windows',
        icon: openWindowEntries.length ? 'mdi:window-open-variant' : 'mdi:window-closed-variant',
        label: 'Windows open',
        value: `${openWindowEntries.length}`,
        description: 'Binary sensor window entities that currently report open.',
        entries: openWindowEntries.length ? openWindowEntries : windowEntries,
      }),
      make({
        id: 'online',
        icon: 'mdi:access-point-check',
        label: 'Entities online',
        value: total ? `${usableEntries.length}/${total}` : '—',
        description: 'Entities that currently report a usable state.',
        entries: usableEntries,
      }),
      make({
        id: 'unavailable',
        icon: 'mdi:alert-circle-outline',
        label: 'Unavailable',
        value: `${unavailableEntries.length}`,
        description: 'Entities reporting unknown or unavailable state.',
        entries: unavailableEntries,
      }),
      make({
        id: 'sensors',
        icon: 'mdi:gauge',
        label: 'Sensors',
        value: `${sensorEntries.length}`,
        description: 'Sensor and binary sensor entities available to this dashboard.',
        entries: sensorEntries,
      }),
      make({
        id: 'scenes',
        icon: 'mdi:palette-outline',
        label: 'Scenes',
        value: `${sceneEntries.length}`,
        description: 'Scenes that can be opened or run from Home Assistant.',
        entries: sceneEntries,
      }),
      make({
        id: 'automations',
        icon: 'mdi:robot-outline',
        label: 'Automations',
        value: `${automationEntries.length}`,
        description: 'Automations available in this Home Assistant instance.',
        entries: automationEntries,
        action: { type: 'reload_automations', label: 'Reload', icon: 'mdi:reload' },
      }),
    ];
  },

  _getSidebarStatusRows_() {
    const preferred = ['access', 'lights', 'climate', 'locks', 'doors', 'windows', 'unavailable'];
    return (this._getSidebarStatusGroups_?.() || [])
      .filter((group) => preferred.includes(group.id))
      .map(({ id, icon, label, value }) => ({ id, icon, label, value }));
  },

  _getSidebarEntityAction_(info = {}) {
    const domain = String(info.domain || '').toLowerCase();
    if (domain === 'light' && info.rawState === 'on') return { type: 'turn_off', label: 'Off', icon: 'mdi:power' };
    if (domain === 'lock') {
      return info.rawState === 'locked'
        ? { type: 'unlock', label: 'Unlock', icon: 'mdi:lock-open-outline' }
        : { type: 'lock', label: 'Lock', icon: 'mdi:lock-outline' };
    }
    if (domain === 'cover') {
      return ['open', 'opening'].includes(info.rawState)
        ? { type: 'close_cover', label: 'Close', icon: 'mdi:window-shutter' }
        : { type: 'open_cover', label: 'Open', icon: 'mdi:window-shutter-open' };
    }
    if (['light', 'switch', 'input_boolean', 'automation'].includes(domain)) return { type: 'toggle', label: 'Toggle', icon: 'mdi:toggle-switch-outline' };
    if (['scene', 'script'].includes(domain)) return { type: 'turn_on', label: 'Run', icon: 'mdi:play' };
    return null;
  },

  _fireSidebarMoreInfo_(entityId = '') {
    if (!entityId) return;
    try {
      this.dispatchEvent(new CustomEvent('hass-more-info', {
        detail: { entityId },
        bubbles: true,
        composed: true,
      }));
    } catch {}
  },

  _runSidebarEntityAction_(action = '', entityId = '') {
    if (!action || !entityId) return;
    const hass = this._getSidebarHass_?.();
    const domain = String(entityId).split('.')[0] || 'homeassistant';
    try {
      if (action === 'toggle') hass?.callService?.('homeassistant', 'toggle', { entity_id: entityId });
      else if (action === 'turn_off') hass?.callService?.(domain, 'turn_off', { entity_id: entityId });
      else if (action === 'turn_on') hass?.callService?.(domain, 'turn_on', { entity_id: entityId });
      else if (action === 'lock') hass?.callService?.('lock', 'lock', { entity_id: entityId });
      else if (action === 'unlock') hass?.callService?.('lock', 'unlock', { entity_id: entityId });
      else if (action === 'open_cover') hass?.callService?.('cover', 'open_cover', { entity_id: entityId });
      else if (action === 'close_cover') hass?.callService?.('cover', 'close_cover', { entity_id: entityId });
    } catch {}
    setTimeout(() => this._renderSidebar_?.(), 300);
  },

  _runSidebarGroupAction_(action = '', group = null) {
    const hass = this._getSidebarHass_?.();
    const ids = (group?.entities || []).map((entity) => entity.entityId).filter(Boolean);
    try {
      if (action === 'turn_off_lights' && ids.length) {
        hass?.callService?.('light', 'turn_off', { entity_id: ids });
      } else if (action === 'lock_all' && ids.length) {
        hass?.callService?.('lock', 'lock', { entity_id: ids });
      } else if (action === 'reload_automations') {
        hass?.callService?.('automation', 'reload', {});
      } else if (action === 'refresh') {
        this._renderSidebar_?.();
      }
    } catch {}
    setTimeout(() => {
      this._renderSidebar_?.();
      if (group?.id && this.__sidebarStatusModal?.isConnected) this._openSidebarStatusPopup_?.(group.id);
    }, 320);
  },

  _openSidebarStatusPopup_(groupId = '') {
    const groups = this._getSidebarStatusGroups_?.() || [];
    const group = groups.find((item) => item.id === groupId) || groups[0];
    if (!group) return;
    const safe = (value) => this._safe?.(value) || String(value ?? '');
    const visibleEntities = (group.entities || []).slice(0, 80);
    const remainingCount = Math.max(0, (group.entities || []).length - visibleEntities.length);
    try { this.__sidebarStatusModal?.remove?.(); } catch {}

    const modal = document.createElement('div');
    modal.className = 'ddc-sidebar-status-popup-backdrop';
    modal.innerHTML = `
      <div class="ddc-sidebar-status-popup" role="dialog" aria-modal="true" aria-labelledby="ddc-sidebar-status-popup-title">
        <div class="ddc-sidebar-status-popup-head">
          <div class="ddc-sidebar-status-popup-icon"><ha-icon icon="${safe(group.icon)}" aria-hidden="true"></ha-icon></div>
          <div>
            <span>Home Status</span>
            <strong id="ddc-sidebar-status-popup-title">${safe(group.label)}</strong>
            <p>${safe(group.description || '')}</p>
          </div>
          <button type="button" class="ddc-sidebar-status-popup-close" data-sidebar-status-close aria-label="Close">
            <ha-icon icon="mdi:close" aria-hidden="true"></ha-icon>
          </button>
        </div>
        <div class="ddc-sidebar-status-popup-summary">
          <div><span>Total</span><strong>${safe(group.value)}</strong></div>
          <div><span>Listed</span><strong>${safe(visibleEntities.length)}</strong></div>
          <div><span>Updated</span><strong>${safe(this._formatSidebarTime_(new Date()))}</strong></div>
        </div>
        <div class="ddc-sidebar-status-popup-actions">
          <button type="button" data-sidebar-group-action="refresh"><ha-icon icon="mdi:refresh"></ha-icon><span>Refresh</span></button>
          ${group.action ? `<button type="button" data-sidebar-group-action="${safe(group.action.type)}"><ha-icon icon="${safe(group.action.icon)}"></ha-icon><span>${safe(group.action.label)}</span></button>` : ''}
        </div>
        <div class="ddc-sidebar-status-entity-list">
          ${visibleEntities.length ? visibleEntities.map((info) => {
            const action = this._getSidebarEntityAction_(info);
            return `
              <div class="ddc-sidebar-status-entity">
                <button type="button" class="ddc-sidebar-status-entity-main" data-sidebar-more-info="${safe(info.entityId)}">
                  <ha-icon icon="${safe(info.icon)}" aria-hidden="true"></ha-icon>
                  <span>
                    <strong>${safe(info.name)}</strong>
                    <em>${safe(info.entityId)}</em>
                  </span>
                  <b>${safe(info.state)}</b>
                </button>
                <div class="ddc-sidebar-status-entity-actions">
                  ${info.updated ? `<span>${safe(info.updated)}</span>` : ''}
                  <button type="button" data-sidebar-more-info="${safe(info.entityId)}">Details</button>
                  ${action ? `<button type="button" data-sidebar-entity-action="${safe(action.type)}" data-sidebar-entity-id="${safe(info.entityId)}"><ha-icon icon="${safe(action.icon)}"></ha-icon><span>${safe(action.label)}</span></button>` : ''}
                </div>
              </div>
            `;
          }).join('') : `
            <div class="ddc-sidebar-status-empty">
              <ha-icon icon="mdi:check-circle-outline" aria-hidden="true"></ha-icon>
              <strong>No entities here right now</strong>
              <span>This group will fill automatically when matching Home Assistant entities appear.</span>
            </div>
          `}
        </div>
        ${remainingCount ? `<div class="ddc-sidebar-status-more">Showing ${safe(visibleEntities.length)} of ${safe(group.entities.length)} entities. Narrow the group or open Home Assistant for the full list.</div>` : ''}
      </div>
    `;
    const close = () => {
      try { modal.remove(); } catch {}
      if (this.__sidebarStatusModal === modal) this.__sidebarStatusModal = null;
    };
    modal.querySelectorAll('[data-sidebar-status-close]').forEach((button) => button.addEventListener('click', close));
    modal.addEventListener('pointerdown', (ev) => { if (ev.target === modal) close(); });
    modal.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') close(); });
    modal.querySelectorAll('[data-sidebar-more-info]').forEach((button) => {
      button.addEventListener('click', (ev) => {
        ev.stopPropagation();
        this._fireSidebarMoreInfo_(button.dataset.sidebarMoreInfo || '');
      });
    });
    modal.querySelectorAll('[data-sidebar-entity-action]').forEach((button) => {
      button.addEventListener('click', (ev) => {
        ev.stopPropagation();
        this._runSidebarEntityAction_(button.dataset.sidebarEntityAction || '', button.dataset.sidebarEntityId || '');
      });
    });
    modal.querySelectorAll('[data-sidebar-group-action]').forEach((button) => {
      button.addEventListener('click', (ev) => {
        ev.stopPropagation();
        this._runSidebarGroupAction_(button.dataset.sidebarGroupAction || '', group);
      });
    });
    this.__sidebarStatusModal = modal;
    this.shadowRoot?.appendChild?.(modal);
    requestAnimationFrame(() => modal.querySelector('[data-sidebar-status-close]')?.focus?.());
  },

  _getSidebarDetailKey_(type, payload = {}) {
    const suffix = payload?.action || payload?.entityId || '';
    return suffix ? `${type}:${suffix}` : String(type || '');
  },

  _toggleSidebarDetail_(type, payload = {}) {
    const key = this._getSidebarDetailKey_(type, payload);
    this.sidebarDetail = this.sidebarDetail?.key === key ? null : { key, type, payload };
    this._renderSidebar_?.();
  },

  _decorateSidebarWidget_(widget, type, payload = {}) {
    if (!widget || !type) return widget;
    const key = this._getSidebarDetailKey_(type, payload);
    widget.classList.toggle('is-active', this.sidebarDetail?.key === key);
    widget.setAttribute('role', 'button');
    widget.setAttribute('tabindex', '0');
    widget.setAttribute('aria-expanded', this.sidebarDetail?.key === key ? 'true' : 'false');
    const open = (ev) => {
      ev?.stopPropagation?.();
      this._toggleSidebarDetail_(type, payload);
    };
    widget.addEventListener('click', open);
    widget.addEventListener('keydown', (ev) => {
      if (ev.target !== widget && ev.target?.closest?.('button, a, input, select, textarea, [role="button"]')) return;
      if (ev.key !== 'Enter' && ev.key !== ' ') return;
      ev.preventDefault();
      open(ev);
    });
    return widget;
  },

  _sidebarDetailBelongsToItem_(detail = null, item = '') {
    if (!detail?.type) return false;
    return detail.type === item;
  },

  _sidebarMetricRows_(rows = []) {
    const safe = (value) => this._safe?.(value) || String(value ?? '');
    return rows.filter((row) => row && row.value !== undefined && row.value !== null && row.value !== '').map((row) => `
      <div class="ddc-sidebar-detail-row">
        <span>${safe(row.label)}</span>
        <strong>${safe(row.value)}</strong>
      </div>
    `).join('');
  },

  _createSidebarDetail_(detail = {}, now = new Date()) {
    const safe = (value) => this._safe?.(value) || String(value ?? '');
    const panel = document.createElement('div');
    panel.className = `ddc-sidebar-detail ddc-sidebar-detail-${detail.type || 'info'}`;
    panel.dataset.sidebarDetail = detail.key || detail.type || 'info';

    const weather = detail.type === 'weather' ? (this._getSidebarWeatherData_?.() || {}) : null;
    const statusRows = detail.type === 'status' ? (this._getSidebarStatusRows_?.() || []) : [];
    const timeZone = (() => {
      try { return Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch { return ''; }
    })();
    const title = ({
      clock: 'Clock',
      date: 'Calendar',
      weather: 'Weather',
      people: 'People home',
      status: 'Home status',
      profile: this._getSidebarUserName_?.() || 'Profile',
    })[detail.type] || 'Sidebar';
    const icon = ({
      clock: 'mdi:clock-outline',
      date: 'mdi:calendar-month-outline',
      weather: weather?.icon || 'mdi:weather-partly-cloudy',
      people: 'mdi:account-group-outline',
      status: 'mdi:home-analytics',
      profile: 'mdi:account-circle-outline',
    })[detail.type] || 'mdi:information-outline';

    let body = '';
    if (detail.type === 'clock') {
      const angles = this._getSidebarClockAngles_(now);
      body = `
        <div class="ddc-sidebar-clock-detail">
          <div class="ddc-sidebar-clock-face ddc-sidebar-clock-face-large" style="--ddc-sidebar-hour:${angles.hour};--ddc-sidebar-minute:${angles.minute};--ddc-sidebar-second:${angles.second};" aria-hidden="true">
            <span class="ddc-sidebar-clock-hand hour"></span>
            <span class="ddc-sidebar-clock-hand minute"></span>
            <span class="ddc-sidebar-clock-hand second"></span>
          </div>
          <div>
            <div class="ddc-sidebar-detail-hero">${safe(this._formatSidebarTime_(now))}</div>
            <p class="ddc-sidebar-detail-copy">${safe(this._formatSidebarWeekday_(now))}</p>
          </div>
        </div>
        ${this._sidebarMetricRows_([
          { label: 'Timezone', value: timeZone || 'Local time' },
          { label: 'Seconds', value: String(now.getSeconds()).padStart(2, '0') },
        ])}
      `;
    } else if (detail.type === 'date') {
      const events = this._getSidebarCalendarEvents_?.(6) || [];
      const calendarIds = this._getSidebarCalendarEntityIds_?.() || [];
      body = `
        <div class="ddc-sidebar-detail-hero">${safe(this._formatSidebarLongDate_(now))}</div>
        ${this._sidebarCalendarEventsMarkup_(events)}
        ${this._sidebarMetricRows_([
          { label: 'Month', value: this._formatSidebarMonth_(now) },
          { label: 'Day', value: now.getDate() },
          { label: 'Week', value: this._getSidebarWeekNumber_(now) },
          { label: 'Calendars', value: calendarIds.length ? calendarIds.join(', ') : 'Auto' },
        ])}
      `;
    } else if (detail.type === 'weather') {
      const updated = weather?.updated ? new Date(weather.updated) : null;
      const updatedValue = updated && Number.isFinite(updated.getTime())
        ? `${this._formatSidebarDate_(updated)} ${this._formatSidebarTime_(updated)}`
        : '';
      body = `
        <div class="ddc-sidebar-detail-hero">${safe(weather?.temperature || '—')}</div>
        ${this._sidebarMetricRows_([
          { label: 'Condition', value: weather?.state },
          { label: 'Place', value: weather?.place },
          { label: 'Humidity', value: weather?.humidity },
          { label: 'Wind', value: weather?.wind },
          { label: 'Updated', value: updatedValue },
          { label: 'Entity', value: weather?.entityId },
        ])}
      `;
    } else if (detail.type === 'status') {
      body = this._sidebarMetricRows_(statusRows);
    } else if (detail.type === 'profile') {
      body = this._sidebarMetricRows_([
        { label: 'User', value: this._getSidebarUserName_?.() || 'Home' },
        { label: 'Role', value: this._config?.sidebar_user_role || 'Home dashboard' },
        { label: 'Dashboard', value: this._config?.title || this.storageKey || 'Current layout' },
      ]);
    } else {
      body = `
        <p class="ddc-sidebar-detail-copy">This panel can show contextual controls and information for the selected sidebar module.</p>
      `;
    }

    panel.innerHTML = `
      <div class="ddc-sidebar-detail-head">
        <ha-icon icon="${safe(icon)}" aria-hidden="true"></ha-icon>
        <strong>${safe(title)}</strong>
        <button type="button" class="ddc-sidebar-detail-close" aria-label="Close details">
          <ha-icon icon="mdi:close" aria-hidden="true"></ha-icon>
        </button>
      </div>
      <div class="ddc-sidebar-detail-body">${body}</div>
    `;
    panel.querySelector('.ddc-sidebar-detail-close')?.addEventListener('click', (ev) => {
      ev.stopPropagation();
      this.sidebarDetail = null;
      this._renderSidebar_?.();
    });
    panel.querySelectorAll?.('[data-sidebar-more-info]')?.forEach((button) => {
      button.addEventListener('click', (ev) => {
        ev.stopPropagation();
        this._fireSidebarMoreInfo_(button.dataset.sidebarMoreInfo || '');
      });
    });
    return panel;
  },

  _getSidebarUserName_() {
    return String(
      this._config?.sidebar_user_name ||
        this._getSidebarHass_?.()?.user?.name ||
        this._getSidebarHass_?.()?.user?.id ||
        'Home'
    ).trim();
  },

  _getSidebarHeaderDefinitions_() {
    return [
      { id: 'clock', label: 'Clock', icon: 'mdi:clock-outline' },
      { id: 'date_time', label: 'Date / time', icon: 'mdi:calendar-clock-outline' },
      { id: 'people', label: 'People home', icon: 'mdi:account-group-outline' },
      { id: 'home', label: 'Home status', icon: 'mdi:home-analytics' },
      { id: 'weather', label: 'Weather', icon: 'mdi:weather-partly-cloudy' },
      { id: 'profile', label: 'Profile', icon: 'mdi:account-circle-outline' },
      { id: 'none', label: 'No header', icon: 'mdi:minus-circle-outline' },
    ];
  },

  _createSidebarHeader_(now = new Date()) {
    const safe = (value) => this._safe?.(value) || String(value ?? '');
    const headerType = this._normalizeSidebarHeader_(this.sidebarHeader ?? this._config?.sidebar_header ?? 'clock');
    if (headerType === 'none') return null;
    const title = String(
      this._config?.sidebar_title ||
        this._config?.title ||
        this.storageKey ||
        'Smart home'
    ).trim();
    const userName = this._getSidebarUserName_?.() || 'Home';
    const initial = userName.trim().charAt(0).toUpperCase() || 'H';
    const cardsCount = this.sidebarCanvas?.querySelectorAll?.('.ddc-sidebar-card-wrapper')?.length
      ?? this._normalizeSidebarCards_(this.sidebarCards || []).length;
    const statusRows = this._getSidebarStatusRows_?.() || [];
    const unavailable = statusRows.find((row) => row.id === 'unavailable');
    const liveLabel = unavailable && Number(unavailable.value) > 0
      ? `${unavailable.value} offline`
      : 'Live';
    const people = this._getSidebarPeople_?.() || [];
    const homePeople = people.filter((person) => person.isHome);
    const weather = this._getSidebarWeatherData_?.() || {};
    const timeZone = (() => {
      try { return Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch { return ''; }
    })();

    const headerBodies = {
      clock: `
        <div class="ddc-sidebar-header-main">
          <div class="ddc-sidebar-header-mark" aria-hidden="true"><ha-icon icon="mdi:clock-outline"></ha-icon></div>
          <div class="ddc-sidebar-header-copy">
            <span>${safe(this._formatSidebarWeekday_(now))}</span>
            <strong>${safe(this._formatSidebarTime_(now))}</strong>
            <em>${safe(timeZone || this._formatSidebarDate_(now))}</em>
          </div>
          <div class="ddc-sidebar-live-pill" title="${safe(liveLabel)}">
            <i aria-hidden="true"></i>
            <span>${safe(liveLabel)}</span>
          </div>
        </div>
        <div class="ddc-sidebar-header-stats" aria-hidden="true">
          <span><b>${safe(now.getDate())}</b> ${safe(this._formatSidebarMonth_(now))}</span>
          <span><b>${safe(cardsCount)}</b> cards</span>
        </div>
      `,
      date_time: `
        <div class="ddc-sidebar-header-main">
          <div class="ddc-sidebar-header-mark ddc-sidebar-header-date-mark" aria-hidden="true">
            <span>${safe(this._formatSidebarMonth_(now))}</span>
            <b>${safe(now.getDate())}</b>
          </div>
          <div class="ddc-sidebar-header-copy">
            <span>${safe(this._formatSidebarTime_(now))}</span>
            <strong>${safe(this._formatSidebarWeekday_(now))}</strong>
            <em>${safe(this._formatSidebarLongDate_(now))}</em>
          </div>
          <div class="ddc-sidebar-live-pill" title="${safe(liveLabel)}">
            <i aria-hidden="true"></i>
            <span>${safe(liveLabel)}</span>
          </div>
        </div>
      `,
      people: `
        <button type="button" class="ddc-sidebar-header-main ddc-sidebar-header-button" data-sidebar-header-action="people">
          <div class="ddc-sidebar-header-mark" aria-hidden="true"><ha-icon icon="mdi:account-group-outline"></ha-icon></div>
          <div class="ddc-sidebar-header-copy">
            <span>Presence</span>
            <strong>${safe(homePeople.length)} home</strong>
            <em>${safe(Math.max(0, people.length - homePeople.length))} away / ${safe(people.length)} total</em>
          </div>
          <div class="ddc-sidebar-header-avatars" aria-hidden="true">
            ${(homePeople.length ? homePeople : people).slice(0, 3).map((person) => this._sidebarPersonAvatarMarkup_(person, 'small')).join('')}
          </div>
        </button>
      `,
      home: `
        <div class="ddc-sidebar-header-main">
          <div class="ddc-sidebar-header-mark" aria-hidden="true"><ha-icon icon="mdi:home-analytics"></ha-icon></div>
          <div class="ddc-sidebar-header-copy">
            <span>${safe(liveLabel)}</span>
            <strong>${safe(title)}</strong>
            <em>${safe(statusRows.slice(0, 2).map((row) => `${row.label}: ${row.value}`).join(' / ') || userName)}</em>
          </div>
          <div class="ddc-sidebar-live-pill" title="${safe(liveLabel)}">
            <i aria-hidden="true"></i>
            <span>${safe(liveLabel)}</span>
          </div>
        </div>
      `,
      weather: `
        <button type="button" class="ddc-sidebar-header-main ddc-sidebar-header-button" data-sidebar-more-info="${safe(weather.entityId || '')}">
          <div class="ddc-sidebar-header-mark" aria-hidden="true"><ha-icon icon="${safe(weather.icon || 'mdi:weather-partly-cloudy')}"></ha-icon></div>
          <div class="ddc-sidebar-header-copy">
            <span>${safe(weather.place || 'Weather')}</span>
            <strong>${safe(weather.temperature || '--')}</strong>
            <em>${safe([weather.state, weather.humidity, weather.wind].filter(Boolean).join(' / ') || 'Current conditions')}</em>
          </div>
          <ha-icon icon="mdi:chevron-right" aria-hidden="true"></ha-icon>
        </button>
      `,
      profile: `
        <div class="ddc-sidebar-header-main">
          <div class="ddc-sidebar-header-mark" aria-hidden="true">${safe(initial)}</div>
          <div class="ddc-sidebar-header-copy">
            <span>${safe(this._formatSidebarTime_(now))}</span>
            <strong>${safe(userName)}</strong>
            <em>${safe(this._config?.sidebar_user_role || title)}</em>
          </div>
          <div class="ddc-sidebar-live-pill" title="${safe(liveLabel)}">
            <i aria-hidden="true"></i>
            <span>${safe(liveLabel)}</span>
          </div>
        </div>
      `,
    };

    const header = document.createElement('section');
    header.className = `ddc-sidebar-header ddc-sidebar-header-${headerType}`;
    header.dataset.sidebarHeader = headerType;
    header.setAttribute('aria-label', `${headerType.replace(/_/g, ' ')} sidebar header`);
    header.innerHTML = headerBodies[headerType] || headerBodies.clock;
    header.querySelector('[data-sidebar-header-action="people"]')?.addEventListener('click', (ev) => {
      ev.stopPropagation();
      this._openSidebarPeoplePopup_?.();
    });
    header.querySelectorAll?.('[data-sidebar-more-info]').forEach((button) => {
      button.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const entityId = button.dataset.sidebarMoreInfo || '';
        if (entityId) this._fireSidebarMoreInfo_(entityId);
      });
    });
    return header;
  },

  _createSidebarSectionLabel_(label = 'Overview', icon = 'mdi:view-dashboard-outline', meta = '') {
    const safe = (value) => this._safe?.(value) || String(value ?? '');
    const section = document.createElement('div');
    section.className = 'ddc-sidebar-section-label';
    section.innerHTML = `
      <span>
        <ha-icon icon="${safe(icon)}" aria-hidden="true"></ha-icon>
        ${safe(label)}
      </span>
      ${meta ? `<em>${safe(meta)}</em>` : ''}
    `;
    return section;
  },

  _createSidebarWidget_(type, now = new Date()) {
    const widget = document.createElement('div');
    widget.className = `ddc-sidebar-widget ddc-sidebar-widget-${type}`;
    widget.dataset.sidebarItem = type;
    const safe = (value) => this._safe?.(value) || String(value ?? '');
    if (type === 'clock') {
      const angles = this._getSidebarClockAngles_(now);
      const timeZone = (() => {
        try { return Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch { return ''; }
      })();
      const seconds = String(now.getSeconds()).padStart(2, '0');
      widget.innerHTML = `
        <div class="ddc-sidebar-clock-card" style="--ddc-sidebar-second-value:${safe(seconds)};">
          <div class="ddc-sidebar-clock-stage">
            <div class="ddc-sidebar-clock-face" style="--ddc-sidebar-hour:${angles.hour};--ddc-sidebar-minute:${angles.minute};--ddc-sidebar-second:${angles.second};" aria-hidden="true">
              <span class="ddc-sidebar-clock-hand hour"></span>
              <span class="ddc-sidebar-clock-hand minute"></span>
              <span class="ddc-sidebar-clock-hand second"></span>
            </div>
            <div class="ddc-sidebar-clock-seconds">${safe(seconds)}</div>
          </div>
          <div class="ddc-sidebar-clock-copy">
            <span>${safe(this._formatSidebarWeekday_(now))}</span>
            <strong>${safe(this._formatSidebarTime_(now))}</strong>
            <em>${safe(timeZone || this._formatSidebarWeekday_(now))}</em>
          </div>
        </div>
      `;
      widget.setAttribute('aria-label', `Time ${this._formatSidebarTime_(now)}`);
      return this._decorateSidebarWidget_(widget, type);
    }
    if (type === 'date') {
      const events = this._getSidebarCalendarEvents_?.(3) || [];
      widget.innerHTML = `
        <div class="ddc-sidebar-date-card">
          <div class="ddc-sidebar-date-top">
            <div class="ddc-sidebar-calendar-tile" aria-hidden="true">
              <span>${safe(this._formatSidebarMonth_(now))}</span>
              <strong>${safe(now.getDate())}</strong>
            </div>
            <div class="ddc-sidebar-widget-copy">
              <strong>${safe(this._formatSidebarWeekday_(now))}</strong>
              <span>${safe(this._formatSidebarDate_(now))}</span>
            </div>
          </div>
          ${this._sidebarCalendarMarkup_(now)}
          ${this._sidebarCalendarEventsMarkup_(events, { compact: true })}
        </div>
      `;
      widget.setAttribute('aria-label', `Date ${this._formatSidebarDate_(now)}`);
      widget.querySelectorAll?.('[data-sidebar-more-info]')?.forEach((button) => {
        button.addEventListener('click', (ev) => {
          ev.stopPropagation();
          this._fireSidebarMoreInfo_(button.dataset.sidebarMoreInfo || '');
        });
      });
      return this._decorateSidebarWidget_(widget, type);
    }
    if (type === 'weather') {
      const weather = this._getSidebarWeatherData_?.() || {};
      widget.innerHTML = `
        <div class="ddc-sidebar-weather-icon"><ha-icon icon="${safe(weather.icon || 'mdi:weather-partly-cloudy')}" aria-hidden="true"></ha-icon></div>
        <div class="ddc-sidebar-widget-copy">
          <strong>${safe(weather.temperature || '—')}</strong>
          <span>${safe(weather.state || 'Weather')}</span>
        </div>
        <div class="ddc-sidebar-weather-meta">
          ${weather.humidity ? `<span>H ${safe(weather.humidity)}</span>` : ''}
          ${weather.wind ? `<span>W ${safe(weather.wind)}</span>` : ''}
        </div>
      `;
      widget.setAttribute('aria-label', `${weather.temperature || ''} ${weather.state || 'Weather'}`.trim());
      return this._decorateSidebarWidget_(widget, type, { entityId: weather.entityId || '' });
    }
    if (type === 'status') {
      const rows = this._getSidebarStatusRows_?.() || [];
      const homeImage = this._getSidebarHomeImage_?.() || '';
      widget.innerHTML = `
        <div class="ddc-sidebar-home-card">
          <div class="ddc-sidebar-home-media ${homeImage ? 'has-image' : 'is-empty'}">
            ${homeImage ? `<img src="${safe(homeImage)}" alt="" loading="lazy" />` : `<ha-icon icon="mdi:home-lightning-bolt-outline" aria-hidden="true"></ha-icon>`}
          </div>
          <div class="ddc-sidebar-home-title">
            <span>Home status</span>
            <strong>${safe(this._config?.title || this.storageKey || 'Smart home')}</strong>
          </div>
        </div>
        <div class="ddc-sidebar-status-list">
          ${rows.map((row) => `
            <button type="button" class="ddc-sidebar-status-row" data-sidebar-status-group="${safe(row.id)}">
              <span><ha-icon icon="${safe(row.icon)}" aria-hidden="true"></ha-icon>${safe(row.label)}</span>
              <strong>${safe(row.value)}</strong>
            </button>
          `).join('')}
        </div>
      `;
      widget.querySelectorAll?.('[data-sidebar-status-group]')?.forEach((button) => {
        button.addEventListener('click', (ev) => {
          ev.stopPropagation();
          this._openSidebarStatusPopup_?.(button.dataset.sidebarStatusGroup || '');
        });
        button.addEventListener('keydown', (ev) => ev.stopPropagation());
      });
      return this._decorateSidebarWidget_(widget, type);
    }
    if (type === 'people') {
      const people = this._getSidebarPeople_?.() || [];
      const homePeople = people.filter((person) => person.isHome);
      const shown = (homePeople.length ? homePeople : people).slice(0, 5);
      widget.innerHTML = `
        <div class="ddc-sidebar-people-card">
          <div class="ddc-sidebar-widget-heading">People home</div>
          <div class="ddc-sidebar-people-avatars">
            ${shown.map((person) => this._sidebarPersonAvatarMarkup_(person, 'large')).join('')}
            ${!shown.length ? `<span class="ddc-sidebar-person-avatar large is-empty"><ha-icon icon="mdi:account-question-outline" aria-hidden="true"></ha-icon></span>` : ''}
          </div>
          <div class="ddc-sidebar-people-summary">
            <strong>${safe(homePeople.length)} home</strong>
            <span>${safe(Math.max(0, people.length - homePeople.length))} away / ${safe(people.length)} total</span>
          </div>
        </div>
      `;
      widget.setAttribute('role', 'button');
      widget.setAttribute('tabindex', '0');
      widget.setAttribute('aria-label', `${homePeople.length} people home`);
      const open = (ev) => {
        ev?.stopPropagation?.();
        this._openSidebarPeoplePopup_?.();
      };
      widget.addEventListener('click', open);
      widget.addEventListener('keydown', (ev) => {
        if (ev.key !== 'Enter' && ev.key !== ' ') return;
        ev.preventDefault();
        open(ev);
      });
      return widget;
    }
    if (type === 'profile') {
      const name = this._getSidebarUserName_?.() || 'Home';
      const initial = name.trim().charAt(0).toUpperCase() || 'H';
      widget.innerHTML = `
        <div class="ddc-sidebar-avatar" aria-hidden="true">${safe(initial)}</div>
        <div class="ddc-sidebar-profile-copy">
          <strong>${safe(name)}</strong>
          <span>${safe(this._config?.sidebar_user_role || 'Home dashboard')}</span>
        </div>
        <ha-icon icon="mdi:chevron-right" aria-hidden="true"></ha-icon>
      `;
      return this._decorateSidebarWidget_(widget, type);
    }
    return widget;
  },

  _createSidebarFooter_() {
    const safe = (value) => this._safe?.(value) || String(value ?? '');
    const version = (typeof VERSION !== 'undefined' && VERSION) ? VERSION : '';
    const footer = document.createElement('div');
    footer.className = 'ddc-sidebar-footer';
    footer.title = version ? `Drag & Drop Card v${version}` : 'Drag & Drop Card';
    footer.innerHTML = `
      <div class="ddc-sidebar-footer-mark" aria-hidden="true">
        <ha-icon icon="mdi:drag-variant"></ha-icon>
      </div>
      <div class="ddc-sidebar-footer-copy">
        <strong>Drag & Drop Card</strong>
        <span>${version ? `v${safe(version)}` : 'Local build'}</span>
      </div>
    `;
    return footer;
  },

  _moveTabsBarToRoot_() {
    try {
      const root = this.rootEl;
      const bar = this.tabsBar;
      const anchor = this.__scaleOuter || this.cardContainer;
      if (!root || !bar || !anchor || bar.parentNode === root) return;
      if (this.tabsPosition === 'bottom') root.insertBefore(bar, anchor.nextSibling);
      else root.insertBefore(bar, anchor);
    } catch {}
  },

  _syncSidebarClockTimer_() {
    try {
      const header = this._normalizeSidebarHeader_(this.sidebarHeader ?? this._config?.sidebar_header ?? 'clock');
      const needsTimer = this._isSidebarEnabled_?.() && ['clock', 'date_time', 'weather', 'home', 'people', 'profile'].includes(header);
      const delay = 30000;
      if (!needsTimer) {
        if (this.__sidebarClockInterval) {
          clearInterval(this.__sidebarClockInterval);
          this.__sidebarClockInterval = null;
        }
        this.__sidebarClockIntervalDelay = 0;
        return;
      }
      if (!this.__sidebarClockInterval || this.__sidebarClockIntervalDelay !== delay) {
        if (this.__sidebarClockInterval) clearInterval(this.__sidebarClockInterval);
        this.__sidebarClockIntervalDelay = delay;
        this.__sidebarClockInterval = setInterval(() => this._updateSidebarHeader_?.(), delay);
      }
    } catch {}
  },

  _updateSidebarHeader_() {
    try {
      const slot = this.sidebarHeaderHost;
      if (!slot) return;
      slot.innerHTML = '';
      const header = this._createSidebarHeader_?.(new Date());
      slot.hidden = !header;
      if (header) slot.appendChild(header);
    } catch {}
  },

  _renderSidebar_() {
    try {
      const host = this.sidebarHost;
      const root = this.rootEl;
      const bar = this.tabsBar;
      const anchor = this.__scaleOuter || this.cardContainer;
      if (!host || !root || !anchor) return;

      const enabled = this._isSidebarEnabled_?.();
      const style = this._normalizeSidebarStyle_(this.sidebarStyle);
      const density = this._normalizeSidebarDensity_(this.sidebarDensity);
      const accent = this._normalizeSidebarAccent_(this.sidebarAccent);
      const header = this._normalizeSidebarHeader_(this.sidebarHeader ?? this._config?.sidebar_header ?? 'clock');
      const canvasHeight = this._normalizeSidebarCanvasHeight_(this.sidebarCanvasHeight ?? this._config?.sidebar_canvas_height ?? 520);
      const structureSignature = [style, density, accent, header, canvasHeight].join('|');
      const sidebarEntriesForRender = (Array.isArray(this.sidebarCards) && this.sidebarCards.length)
        ? this.sidebarCards
        : (this._config?.sidebar_cards || []);
      const cardsSignature = this._sidebarCardsRenderSignature_(sidebarEntriesForRender);

      try {
        if (bar?.parentNode === host) host.removeChild(bar);
      } catch {}

      if (!enabled) {
        Array.from(host.childNodes).forEach((node) => {
          if (node !== bar) node.remove();
        });
        host.style.display = 'none';
        host.setAttribute('aria-hidden', 'true');
        host.style.removeProperty('--ddc-sidebar-canvas-height');
        host.style.removeProperty('--ddc-sidebar-canvas-frame-height');
        root.classList.remove('ddc-sidebar-layout');
        root.classList.remove('ddc-sidebar-style-glass', 'ddc-sidebar-style-neon', 'ddc-sidebar-style-minimal');
        root.classList.remove('ddc-sidebar-density-compact', 'ddc-sidebar-density-comfortable', 'ddc-sidebar-density-spacious');
        root.classList.remove('ddc-sidebar-accent-blue', 'ddc-sidebar-accent-cyan', 'ddc-sidebar-accent-purple', 'ddc-sidebar-accent-amber', 'ddc-sidebar-accent-green');
        this.sidebarHeaderHost = null;
        this.sidebarCanvas = null;
        delete host.dataset.sidebarStructureSignature;
        this._moveTabsBarToRoot_?.();
        this._syncSidebarClockTimer_?.();
        return;
      }

      if (host.parentNode !== root) root.insertBefore(host, anchor);
      host.style.display = '';
      host.setAttribute('aria-hidden', 'false');
      try {
        const rect = anchor.getBoundingClientRect?.();
        const height = Math.round(Number(rect?.height || 0) || 0);
        if (height > 0) host.style.setProperty('--ddc-sidebar-canvas-height', `${height}px`);
        else host.style.removeProperty('--ddc-sidebar-canvas-height');
      } catch {}
      host.style.setProperty('--ddc-sidebar-canvas-frame-height', `${canvasHeight}px`);
      root.classList.add('ddc-sidebar-layout');
      root.classList.remove('ddc-sidebar-style-glass', 'ddc-sidebar-style-neon', 'ddc-sidebar-style-minimal');
      root.classList.remove('ddc-sidebar-density-compact', 'ddc-sidebar-density-comfortable', 'ddc-sidebar-density-spacious');
      root.classList.remove('ddc-sidebar-accent-blue', 'ddc-sidebar-accent-cyan', 'ddc-sidebar-accent-purple', 'ddc-sidebar-accent-amber', 'ddc-sidebar-accent-green');
      root.classList.add(`ddc-sidebar-style-${style}`, `ddc-sidebar-density-${density}`, `ddc-sidebar-accent-${accent}`);
      host.dataset.sidebarStyle = style;
      host.dataset.sidebarDensity = density;
      host.dataset.sidebarAccent = accent;
      host.dataset.sidebarHeader = header;
      host.dataset.sidebarCanvas = 'drag-drop';
      this.sidebarDetail = null;

      if (
        host.dataset.sidebarStructureSignature === structureSignature
        && host.dataset.sidebarCardsSignature === cardsSignature
        && this.sidebarCanvas?.isConnected
        && this.sidebarHeaderHost?.isConnected
      ) {
        this._updateSidebarHeader_?.();
        this._syncSidebarEditState_?.();
        this._moveTabsBarToRoot_?.();
        this._syncSidebarClockTimer_?.();
        return;
      }

      Array.from(host.childNodes).forEach((node) => {
        if (node !== bar) node.remove();
      });

      const headerSlot = document.createElement('div');
      headerSlot.className = 'ddc-sidebar-header-slot';
      host.appendChild(headerSlot);
      this.sidebarHeaderHost = headerSlot;
      this._updateSidebarHeader_?.();

      const workspace = document.createElement('section');
      workspace.className = 'ddc-sidebar-workspace';
      workspace.setAttribute('aria-label', 'Sidebar drag and drop area');
      workspace.innerHTML = `
        <div class="ddc-sidebar-workspace-bar">
          <span><ha-icon icon="mdi:cursor-move" aria-hidden="true"></ha-icon>Sidebar canvas</span>
          <button type="button" class="ddc-sidebar-add-card" data-sidebar-action="add-card" title="Add sidebar card" aria-label="Add sidebar card">
            <ha-icon icon="mdi:plus"></ha-icon>
          </button>
        </div>
        <div class="ddc-sidebar-canvas" id="ddcSidebarCanvas">
          <div class="ddc-sidebar-empty">
            <ha-icon icon="mdi:card-plus-outline" aria-hidden="true"></ha-icon>
            <span>Drag to create</span>
          </div>
        </div>
      `;
      host.appendChild(workspace);
      host.dataset.sidebarStructureSignature = structureSignature;
      host.dataset.sidebarCardsSignature = cardsSignature;
      this.sidebarCanvas = workspace.querySelector('#ddcSidebarCanvas');
      const addButton = workspace.querySelector('[data-sidebar-action="add-card"]');
      addButton?.classList?.toggle?.('is-visible', !!this.editMode);
      addButton?.addEventListener('click', async (ev) => {
        ev.stopPropagation();
        if (!this.editMode) return;
        await this._openSidebarAddCard_?.();
      });
      this._installSidebarCreateGesture_?.();
      this._buildSidebarCardsFromEntries_?.(sidebarEntriesForRender);
      this._syncSidebarEditState_?.();
      this._moveTabsBarToRoot_?.();
      this._syncSidebarClockTimer_?.();
    } catch {}
  },

  _sidebarCanvasSize_() {
    const canvas = this.sidebarCanvas;
    const height = this._normalizeSidebarCanvasHeight_(this.sidebarCanvasHeight ?? this._config?.sidebar_canvas_height ?? 520);
    let width = 320;
    try {
      const rect = canvas?.getBoundingClientRect?.();
      width = Math.round(Number(rect?.width || canvas?.clientWidth || 0) || width);
    } catch {}
    return { w: Math.max(120, width), h: Math.max(280, height) };
  },

  _clampSidebarRect_(x = 0, y = 0, width = 120, height = 90) {
    const size = this._sidebarCanvasSize_();
    const w = Math.max(48, Math.min(Number(width) || 120, size.w));
    const h = Math.max(44, Math.min(Number(height) || 90, size.h));
    const nx = Math.max(0, Math.min(Number(x) || 0, Math.max(0, size.w - w)));
    const ny = Math.max(0, Math.min(Number(y) || 0, Math.max(0, size.h - h)));
    return { x: Math.round(nx), y: Math.round(ny), width: Math.round(w), height: Math.round(h) };
  },

  _setSidebarCardPosition_(el, x, y) {
    const nx = Math.round(Number(x) || 0);
    const ny = Math.round(Math.max(0, Number(y) || 0));
    el.style.transform = `translate3d(${nx}px, ${ny}px, 0)`;
    el.setAttribute('data-x', String(nx));
    el.setAttribute('data-y', String(ny));
  },

  _highestSidebarZ_() {
    let max = 5;
    this.sidebarCanvas?.querySelectorAll?.('.ddc-sidebar-card-wrapper')?.forEach((wrap) => {
      const z = parseInt(wrap.style.zIndex || '0', 10);
      if (z > max) max = z;
    });
    return max;
  },

  _sidebarDefaultSizeForCard_(cardConfig = {}) {
    const type = String(cardConfig?.type || '');
    const gs = Math.max(10, Number(this.gridSize || 20) || 20);
    if (type === 'custom:ddc-line-card') return { width: Math.max(180, gs * 10), height: Math.max(64, gs * 4) };
    if (type === 'custom:ddc-table-card') return { width: Math.max(220, gs * 12), height: Math.max(150, gs * 8) };
    if (type === 'custom:ddc-icon-card') return { width: Math.max(82, gs * 5), height: Math.max(82, gs * 5) };
    if (type === 'custom:ddc-text-card') return { width: Math.max(180, gs * 10), height: Math.max(78, gs * 4) };
    return { width: Math.max(190, gs * 11), height: Math.max(120, gs * 7) };
  },

  _getNextSidebarPosition_(width = 190, height = 120) {
    const size = this._sidebarCanvasSize_();
    const gs = Math.max(8, Number(this.gridSize || 20) || 20);
    const existing = Array.from(this.sidebarCanvas?.querySelectorAll?.('.ddc-sidebar-card-wrapper') || []).map((wrap) => ({
      x: parseFloat(wrap.getAttribute('data-x')) || 0,
      y: parseFloat(wrap.getAttribute('data-y')) || 0,
      w: parseFloat(wrap.style.width) || wrap.getBoundingClientRect?.().width || width,
      h: parseFloat(wrap.style.height) || wrap.getBoundingClientRect?.().height || height,
    }));
    const collides = (rect) => existing.some((other) => !(
      rect.x + rect.w <= other.x ||
      other.x + other.w <= rect.x ||
      rect.y + rect.h <= other.y ||
      other.y + other.h <= rect.y
    ));
    for (let y = 0; y <= Math.max(0, size.h - height); y += gs) {
      for (let x = 0; x <= Math.max(0, size.w - width); x += gs) {
        const candidate = { x, y, w: width, h: height };
        if (!collides(candidate)) return { x, y };
      }
    }
    return this._clampSidebarRect_(gs, gs, width, height);
  },

  _captureSidebarLayoutEntries_() {
    if (!this._isSidebarEnabled_?.()) return [];
    const canvas = this.sidebarCanvas;
    if (!canvas) return this._normalizeSidebarCards_(this.sidebarCards || this._config?.sidebar_cards || []);
    return Array.from(canvas.querySelectorAll('.ddc-sidebar-card-wrapper')).map((wrap) => {
      const x = parseFloat(wrap.getAttribute('data-x')) || 0;
      const y = parseFloat(wrap.getAttribute('data-y')) || 0;
      const width = parseFloat(wrap.style.width) || wrap.getBoundingClientRect?.().width || 190;
      const height = parseFloat(wrap.style.height) || wrap.getBoundingClientRect?.().height || 120;
      const z = parseInt(wrap.style.zIndex || '6', 10);
      const cardCfg = this._extractCardConfig(wrap.firstElementChild);
      const overflow = (wrap.style.overflow && wrap.style.overflow !== '') ? wrap.style.overflow : null;
      const entry = {
        id: wrap.dataset.layoutCardId || this._genLayoutCardId_(),
        card: cardCfg,
        position: { x, y },
        size: { width, height },
        z,
      };
      const cardStyle = this._extractPerCardStyle_?.(wrap) || {};
      if (Object.keys(cardStyle).length) entry.card_style = cardStyle;
      if (overflow) entry.overflow = overflow;
      return entry;
    });
  },

  _syncSidebarLayoutToConfig_() {
    this.sidebarCards = [];
    if (this._config) delete this._config.sidebar_cards;
    if (this.sidebarHost) this.sidebarHost.dataset.sidebarCardsSignature = '';
    return [];
  },

  _syncSidebarEditState_() {
    const canvas = this.sidebarCanvas;
    const host = this.sidebarHost;
    host?.classList?.toggle?.('is-editing', !!this.editMode);
    canvas?.classList?.toggle?.('is-editing', !!this.editMode);
    this._syncSidebarEmptyState_?.();
  },

  _syncSidebarEmptyState_() {
    const canvas = this.sidebarCanvas;
    if (!canvas) return;
    const hasCards = !!canvas.querySelector('.ddc-sidebar-card-wrapper');
    const empty = canvas.querySelector('.ddc-sidebar-empty');
    canvas.classList.toggle('is-empty', !hasCards);
    if (empty) {
      empty.hidden = hasCards;
      const icon = empty.querySelector('ha-icon');
      const label = empty.querySelector('span');
      if (this.editMode) {
        icon?.setAttribute?.('icon', 'mdi:selection-drag');
        if (label) label.textContent = 'Drag to create';
      } else {
        icon?.setAttribute?.('icon', 'mdi:pencil-outline');
        if (label) label.textContent = 'Edit';
      }
    }
    const addBtn = this.sidebarHost?.querySelector?.('[data-sidebar-action="add-card"]');
    addBtn?.classList?.toggle?.('is-visible', !!this.editMode);
  },

  async _buildSidebarCardsFromEntries_(entries = [], ticket = 0) {
    const canvas = this.sidebarCanvas;
    if (!canvas) return;
    const buildTicket = ticket || ((this.__sidebarBuildTicket || 0) + 1);
    this.__sidebarBuildTicket = buildTicket;
    canvas.querySelectorAll('.ddc-sidebar-card-wrapper').forEach((node) => node.remove());
    const normalizedEntries = this._normalizeSidebarCards_(entries);
    this.sidebarCards = this._cloneJson_(normalizedEntries);
    if (this.sidebarHost) {
      this.sidebarHost.dataset.sidebarCardsSignature = this._sidebarCardsRenderSignature_(normalizedEntries);
    }

    for (const conf of normalizedEntries) {
      if (buildTicket !== this.__sidebarBuildTicket) return;
      const normalized = this._normalizeSavedCardEntry_(conf);
      const cardEl = await this._createCard(normalized.card);
      if (buildTicket !== this.__sidebarBuildTicket) return;
      const wrap = this._makeSidebarCardWrapper_(cardEl, { layoutCardId: normalized.id });
      const fallbackSize = this._sidebarDefaultSizeForCard_(normalized.card);
      const width = normalized.size?.width ?? fallbackSize.width;
      const height = normalized.size?.height ?? fallbackSize.height;
      const rect = this._clampSidebarRect_(
        normalized.position?.x || 0,
        normalized.position?.y || 0,
        width,
        height
      );
      this._setSidebarCardPosition_(wrap, rect.x, rect.y);
      wrap.style.width = `${rect.width}px`;
      wrap.style.height = `${rect.height}px`;
      if (normalized.z != null) wrap.style.zIndex = String(normalized.z);
      if (normalized.overflow) {
        try {
          wrap.style.overflow = normalized.overflow;
          wrap.dataset.overflow = normalized.overflow;
          const inner = wrap.firstElementChild;
          if (inner) inner.style.overflow = normalized.overflow;
        } catch {}
      }
      try { this._applyPerCardStyle_?.(wrap, normalized.card_style || normalized.cardStyle || null); } catch {}
      canvas.appendChild(wrap);
      try { this._rebuildOnce(wrap.firstElementChild); } catch {}
      this._initSidebarCardInteract_(wrap);
    }
    this._syncSidebarEmptyState_();
  },

  _makeSidebarCardWrapper_(cardEl, options = {}) {
    const wrap = document.createElement('div');
    wrap.classList.add('card-wrapper', 'ddc-sidebar-card-wrapper');
    wrap.dataset.sidebarCard = '1';
    wrap.dataset.layoutCardId = options.layoutCardId || cardEl?.dataset?.layoutCardId || this._genLayoutCardId_();
    if (this.editMode) wrap.classList.add('editing');
    wrap.style.zIndex = String(Math.max(this._highestSidebarZ_() + 1, 6));

    const chip = document.createElement('div');
    chip.className = 'chip';
    chip.innerHTML = `
      <button class="mini" data-act="edit" title="Edit" aria-label="Edit">
        <ha-icon icon="mdi:pencil"></ha-icon><span>Edit</span>
      </button>
      <button class="mini" data-act="duplicate" title="Duplicate" aria-label="Duplicate">
        <ha-icon icon="mdi:content-copy"></ha-icon><span>Duplicate</span>
      </button>
      <button class="mini pill" data-act="front-most" title="Bring to front" aria-label="Bring to front">
        <ha-icon icon="mdi:arrange-bring-to-front"></ha-icon>
      </button>
      <button class="mini pill" data-act="back-most" title="Send backward" aria-label="Send backward">
        <ha-icon icon="mdi:arrange-send-to-back"></ha-icon>
      </button>
    `;

    const delHandle = document.createElement('div');
    delHandle.className = 'delete-handle';
    delHandle.innerHTML = `<ha-icon icon="mdi:close-thick"></ha-icon>`;
    delHandle.addEventListener('click', (ev) => {
      ev.stopPropagation();
      wrap.remove();
      this._syncSidebarLayoutToConfig_?.();
      this._syncSidebarEmptyState_?.();
      this._queueSave?.('sidebar-delete');
    });

    chip.addEventListener('click', async (ev) => {
      ev.stopPropagation();
      const act = ev.target?.closest('button')?.dataset?.act;
      if (!act) return;
      if (act === 'duplicate') {
        const cfg = this._extractCardConfig(wrap.firstElementChild) || {};
        const dup = await this._createCard(cfg);
        const w2 = this._makeSidebarCardWrapper_(dup);
        const width = parseFloat(wrap.style.width) || wrap.getBoundingClientRect?.().width || 190;
        const height = parseFloat(wrap.style.height) || wrap.getBoundingClientRect?.().height || 120;
        const rect = this._clampSidebarRect_(
          (parseFloat(wrap.getAttribute('data-x')) || 0) + Math.max(8, this.gridSize || 20),
          (parseFloat(wrap.getAttribute('data-y')) || 0) + Math.max(8, this.gridSize || 20),
          width,
          height
        );
        w2.style.width = `${rect.width}px`;
        w2.style.height = `${rect.height}px`;
        this._setSidebarCardPosition_(w2, rect.x, rect.y);
        w2.style.zIndex = String(Math.max(this._highestSidebarZ_() + 1, 6));
        this.sidebarCanvas?.appendChild(w2);
        try { this._rebuildOnce(w2.firstElementChild); } catch {}
        this._initSidebarCardInteract_(w2);
        this._syncSidebarLayoutToConfig_?.();
        this._syncSidebarEmptyState_?.();
        this._queueSave?.('sidebar-duplicate');
      } else if (act === 'front-most') {
        wrap.style.zIndex = String(Math.max(this._highestSidebarZ_() + 1, 6));
        this._syncSidebarLayoutToConfig_?.();
        this._queueSave?.('sidebar-z-change');
      } else if (act === 'back-most') {
        wrap.style.zIndex = '6';
        this._syncSidebarLayoutToConfig_?.();
        this._queueSave?.('sidebar-z-change');
      } else if (act === 'edit') {
        const cfg = this._extractCardConfig(wrap.firstElementChild) || {};
        await this._openSmartPicker('edit', cfg, async (newCfg) => {
          const cleanCfg = this._sanitizeCardConfigForStorage_(newCfg || {});
          const oldEl = wrap.firstElementChild;
          const newEl = await this._createCard(cleanCfg);
          try {
            wrap.dataset.cfg = JSON.stringify(cleanCfg);
            if (this._hasCardModDeep?.(cleanCfg)) wrap.dataset.needsCardMod = 'true';
            else delete wrap.dataset.needsCardMod;
          } catch {}
          wrap.replaceChild(newEl, oldEl);
          try {
            newEl.hass = this.hass;
            newEl.requestUpdate?.();
            if (newEl.updateComplete) { try { await newEl.updateComplete; } catch {} }
          } catch {}
          try { this._rebuildOnce(newEl); } catch {}
          this._syncSidebarLayoutToConfig_?.();
          this._updateSidebarHeader_?.();
          this._queueSave?.('sidebar-edit-card');
        });
      }
    });

    const shield = document.createElement('div');
    shield.className = 'shield';
    const resizeHandle = document.createElement('div');
    resizeHandle.classList.add('resize-handle', 'resize-handle--br');
    if (!this.editMode) resizeHandle.style.display = 'none';
    resizeHandle.title = 'Resize';
    resizeHandle.innerHTML = `<ha-icon icon="mdi:resize-bottom-right"></ha-icon>`;

    try {
      const cfg = this._sanitizeCardConfigForStorage_(cardEl.__ddcSourceConfig || cardEl._config || cardEl.config);
      if (cfg && typeof cfg === 'object' && Object.keys(cfg).length) {
        wrap.dataset.cfg = JSON.stringify(cfg);
        cardEl.__ddcSourceConfig = cfg;
        if (this._hasCardModDeep?.(cfg)) wrap.dataset.needsCardMod = 'true';
      }
    } catch {}

    wrap.append(cardEl, shield, chip, delHandle, resizeHandle);
    wrap.addEventListener('dblclick', (ev) => {
      if (!this.editMode) return;
      if (ev.target.closest('.resize-handle') || ev.target.closest('.delete-handle') || ev.target.closest('.chip')) return;
      ev.stopPropagation();
      wrap.querySelector('.chip button[data-act="edit"]')?.click?.();
    });
    return wrap;
  },

  _installSidebarCreateGesture_() {
    const canvas = this.sidebarCanvas;
    if (!canvas || canvas.__ddcSidebarCreateGestureBound) return;
    canvas.__ddcSidebarCreateGestureBound = true;
    let draft = null;
    const toLocal = (ev) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: Math.max(0, Math.min(rect.width, ev.clientX - rect.left)),
        y: Math.max(0, Math.min(rect.height, ev.clientY - rect.top)),
      };
    };
    const paintDraft = (ev) => {
      if (!draft) return;
      const point = toLocal(ev);
      const x = Math.min(draft.start.x, point.x);
      const y = Math.min(draft.start.y, point.y);
      const width = Math.abs(point.x - draft.start.x);
      const height = Math.abs(point.y - draft.start.y);
      draft.rect = { x, y, width, height };
      Object.assign(draft.el.style, {
        transform: `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`,
        width: `${Math.round(width)}px`,
        height: `${Math.round(height)}px`,
      });
    };
    const stopDraft = (ev, commit = false) => {
      if (!draft) return;
      try { canvas.releasePointerCapture?.(draft.pointerId); } catch {}
      paintDraft(ev);
      const rect = draft.rect || { x: draft.start.x, y: draft.start.y, width: 0, height: 0 };
      const el = draft.el;
      draft = null;
      try { el.remove(); } catch {}
      const gs = Math.max(1, Number(this.gridSize || 20) || 20);
      const width = Math.round(Math.max(gs * 2, rect.width) / gs) * gs;
      const height = Math.round(Math.max(gs * 2, rect.height) / gs) * gs;
      const x = Math.round(rect.x / gs) * gs;
      const y = Math.round(rect.y / gs) * gs;
      if (commit && rect.width >= 28 && rect.height >= 28) {
        this._openSidebarAddCardAtRect_?.(this._clampSidebarRect_(x, y, width, height));
      }
    };
    canvas.addEventListener('pointerdown', (ev) => {
      if (!this.editMode) return;
      if (typeof ev.button === 'number' && ev.button !== 0) return;
      if (ev.target?.closest?.('.ddc-sidebar-card-wrapper, .ddc-sidebar-add-card, button, a, input, select, textarea')) return;
      ev.preventDefault();
      ev.stopPropagation();
      const start = toLocal(ev);
      const el = document.createElement('div');
      el.className = 'ddc-sidebar-drag-rect';
      canvas.appendChild(el);
      draft = {
        pointerId: ev.pointerId,
        start,
        rect: { x: start.x, y: start.y, width: 0, height: 0 },
        el,
      };
      try { canvas.setPointerCapture?.(ev.pointerId); } catch {}
      paintDraft(ev);
    });
    canvas.addEventListener('pointermove', (ev) => {
      if (!draft || draft.pointerId !== ev.pointerId) return;
      ev.preventDefault();
      paintDraft(ev);
    });
    canvas.addEventListener('pointerup', (ev) => {
      if (!draft || draft.pointerId !== ev.pointerId) return;
      ev.preventDefault();
      stopDraft(ev, true);
    });
    canvas.addEventListener('pointercancel', (ev) => {
      if (!draft || draft.pointerId !== ev.pointerId) return;
      stopDraft(ev, false);
    });
    canvas.addEventListener('click', (ev) => {
      if (this.editMode || !canvas.classList.contains('is-empty')) return;
      ev.stopPropagation();
      this._toggleEditMode?.(true);
    });
  },

  _initSidebarCardInteract_(wrap) {
    if (!window.interact || !wrap) return;
    const snapValue = (value) => {
      const gs = Math.max(1, Number(this.gridSize || 20) || 20);
      return this.dragLiveSnap ? Math.round(value / gs) * gs : value;
    };
    const minW = 48;
    const minH = 44;
    window.interact(wrap).draggable({
      enabled: this.editMode,
      inertia: false,
      modifiers: [window.interact.modifiers.restrictRect({ restriction: 'parent', endOnly: true })],
      listeners: {
        start: () => {
          wrap.classList.add('dragging');
          this.__sidebarMovingCard = true;
        },
        move: (ev) => {
          let x = (parseFloat(wrap.getAttribute('data-x')) || 0) + ev.dx;
          let y = (parseFloat(wrap.getAttribute('data-y')) || 0) + ev.dy;
          const width = parseFloat(wrap.style.width) || wrap.getBoundingClientRect?.().width || minW;
          const height = parseFloat(wrap.style.height) || wrap.getBoundingClientRect?.().height || minH;
          x = snapValue(x);
          y = snapValue(y);
          const rect = this._clampSidebarRect_(x, y, width, height);
          this._setSidebarCardPosition_(wrap, rect.x, rect.y);
        },
        end: () => {
          const gs = Math.max(1, Number(this.gridSize || 20) || 20);
          const width = parseFloat(wrap.style.width) || wrap.getBoundingClientRect?.().width || minW;
          const height = parseFloat(wrap.style.height) || wrap.getBoundingClientRect?.().height || minH;
          const x = Math.round((parseFloat(wrap.getAttribute('data-x')) || 0) / gs) * gs;
          const y = Math.round((parseFloat(wrap.getAttribute('data-y')) || 0) / gs) * gs;
          const rect = this._clampSidebarRect_(x, y, width, height);
          this._setSidebarCardPosition_(wrap, rect.x, rect.y);
          wrap.classList.remove('dragging');
          this.__sidebarMovingCard = false;
          this._syncSidebarLayoutToConfig_?.();
          this._updateSidebarHeader_?.();
          this._queueSave?.('sidebar-drag-end');
        },
      },
    });

    window.interact(wrap).resizable({
      enabled: this.editMode,
      edges: { right: '.resize-handle--br', bottom: '.resize-handle--br' },
      inertia: false,
      listeners: {
        start: () => {
          this.__sidebarResizingCard = true;
          wrap.classList.add('dragging');
        },
        move: (ev) => {
          const x = parseFloat(wrap.getAttribute('data-x')) || 0;
          const y = parseFloat(wrap.getAttribute('data-y')) || 0;
          const width = Math.max(minW, snapValue(ev.rect.width));
          const height = Math.max(minH, snapValue(ev.rect.height));
          const rect = this._clampSidebarRect_(x, y, width, height);
          wrap.style.width = `${rect.width}px`;
          wrap.style.height = `${rect.height}px`;
          this._setSidebarCardPosition_(wrap, rect.x, rect.y);
        },
        end: () => {
          const gs = Math.max(1, Number(this.gridSize || 20) || 20);
          const x = parseFloat(wrap.getAttribute('data-x')) || 0;
          const y = parseFloat(wrap.getAttribute('data-y')) || 0;
          const width = Math.max(minW, Math.round((parseFloat(wrap.style.width) || minW) / gs) * gs);
          const height = Math.max(minH, Math.round((parseFloat(wrap.style.height) || minH) / gs) * gs);
          const rect = this._clampSidebarRect_(x, y, width, height);
          wrap.style.width = `${rect.width}px`;
          wrap.style.height = `${rect.height}px`;
          this._setSidebarCardPosition_(wrap, rect.x, rect.y);
          wrap.classList.remove('dragging');
          this.__sidebarResizingCard = false;
          this._syncSidebarLayoutToConfig_?.();
          this._updateSidebarHeader_?.();
          this._queueSave?.('sidebar-resize-end');
        },
      },
    });
  },

  async _addSidebarCard_(cardConfig = {}, options = {}) {
    if (!this.sidebarCanvas) return;
    const cleanCfg = this._sanitizeCardConfigForStorage_(cardConfig || {});
    const cardEl = await this._createCard(cleanCfg);
    const wrap = this._makeSidebarCardWrapper_(cardEl);
    const size = this._sidebarDefaultSizeForCard_(cleanCfg);
    const requested = options?.rect || null;
    const requestedWidth = Number(requested?.width || 0);
    const requestedHeight = Number(requested?.height || 0);
    const width = requestedWidth > 0 ? requestedWidth : size.width;
    const height = requestedHeight > 0 ? requestedHeight : size.height;
    const pos = requested
      ? { x: Number(requested.x || 0), y: Number(requested.y || 0) }
      : this._getNextSidebarPosition_(width, height);
    const rect = this._clampSidebarRect_(pos.x, pos.y, width, height);
    wrap.style.width = `${rect.width}px`;
    wrap.style.height = `${rect.height}px`;
    this._setSidebarCardPosition_(wrap, rect.x, rect.y);
    wrap.style.zIndex = String(Math.max(this._highestSidebarZ_() + 1, 6));
    this.sidebarCanvas.appendChild(wrap);
    try { this._rebuildOnce(wrap.firstElementChild); } catch {}
    this._initSidebarCardInteract_(wrap);
    this._syncSidebarLayoutToConfig_?.();
    this._syncSidebarEmptyState_?.();
    this._updateSidebarHeader_?.();
    this._queueSave?.('sidebar-add-card');
    this._toast?.('Card added to Sidebar.');
  },

  async _openSidebarAddCardAtRect_(rect = null) {
    await this._openSmartPicker('add', null, async (cfg) => {
      await this._addSidebarCard_(cfg, { rect });
      this._pushRecent?.((cfg || {}).type);
    });
  },

  async _openSidebarAddCard_() {
    await this._openSmartPicker('add', null, async (cfg) => {
      await this._addSidebarCard_(cfg);
      this._pushRecent?.((cfg || {}).type);
    });
  },
};

export function installSidebarMethods(proto) {
  for (const [name, value] of Object.entries(sidebarMethods)) {
    Object.defineProperty(proto, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
}
