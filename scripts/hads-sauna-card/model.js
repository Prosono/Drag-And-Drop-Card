export function saunaModel(cfg, states, baseUrl = 'http://localhost/', haTemperatureUnit = '') {
  const valid = (e) => e && !['unknown', 'unavailable', 'none', ''].includes(String(e.state ?? '').trim().toLowerCase());
  function reading(id, temperature = false) {
    const e = states?.[id];
    if (!valid(e)) return { value: null, unit: '', available: false };
    const climate = temperature && id.startsWith('climate.');
    const raw = climate ? e.attributes?.current_temperature : e.state;
    const n = raw === null || raw === undefined || String(raw).trim() === '' ? NaN : Number(String(raw).replace(',', '.'));
    return { value: temperature ? Number.isFinite(n) ? n : null : Number.isFinite(n) ? n : String(raw), unit: climate ? haTemperatureUnit : e.attributes?.unit_of_measurement || '', available: temperature ? Number.isFinite(n) : true };
  }
  function url(value) {
    if (!value) return '';
    if (!/^(https?:\/\/|\/)/i.test(value)) return null;
    try { const u = new URL(value, baseUrl); return ['http:', 'https:'].includes(u.protocol) && !u.username && !u.password ? u.href : null; } catch { return null; }
  }
  return { name: valid(states?.[cfg.user_entity]) ? String(states[cfg.user_entity].state).trim() : '', temperature: reading(cfg.temperature_entity, true), extra1: reading(cfg.extra_1_entity), extra2: reading(cfg.extra_2_entity), logo: url(cfg.logo_url), background: url(cfg.background_url) };
}
