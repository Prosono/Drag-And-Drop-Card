/*
 * Shared formatting, escaping, and state-rule helpers for internal companion cards.
 *
 * Line, table, icon, and text cards all use the same state matching and HTML escaping rules so their
 * editors and renderers behave consistently.
 */

import { __ddcLineSplitTokens__ } from '../../core/card-defaults.js';

export function __ddcLineClamp__(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
export function __ddcLineNormalizeNumber__(value, fallback, min = -Infinity, max = Infinity) {
  const num = Number(value);
  if (!Number.isFinite(num)) return fallback;
  return __ddcLineClamp__(num, min, max);
}
export function __ddcLineEscapeHtml__(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
export function __ddcLineEscapeAttr__(value) {
  return __ddcLineEscapeHtml__(value).replace(/"/g, '&quot;');
}
export function __ddcLineIsTruthyState__(stateValue) {
  const state = String(stateValue ?? '').trim().toLowerCase();
  if (!state) return false;
  return !['0', 'off', 'false', 'closed', 'idle', 'unavailable', 'unknown', 'none'].includes(state);
}
export function __ddcLineMatchesStateRule__(stateValue, rule) {
  const state = String(stateValue ?? '').trim();
  const lowered = state.toLowerCase();
  const token = String(rule ?? '').trim();
  if (!token) return false;
   const cmp = token.match(/^(>=|<=|>|<|==|=|!=)\s*(-?\d+(?:\.\d+)?)$/);
  if (cmp) {
    const current = Number(state);
    const target = Number(cmp[2]);
    if (!Number.isFinite(current) || !Number.isFinite(target)) return false;
    switch (cmp[1]) {
      case '>': return current > target;
      case '<': return current < target;
      case '>=': return current >= target;
      case '<=': return current <= target;
      case '=':
      case '==': return current === target;
      case '!=': return current !== target;
      default: return false;
    }
  }
   const loweredToken = token.toLowerCase();
  if (loweredToken === 'truthy') return __ddcLineIsTruthyState__(stateValue);
  if (loweredToken === 'falsy') return !__ddcLineIsTruthyState__(stateValue);
  if (loweredToken === '!off') return lowered !== 'off';
  return lowered === loweredToken;
}
export function __ddcLineIsActive__(stateValue, activeStates) {
  const tokens = __ddcLineSplitTokens__(activeStates);
  if (!tokens.length) return __ddcLineIsTruthyState__(stateValue);
  return tokens.some((rule) => __ddcLineMatchesStateRule__(stateValue, rule));
}

export function __ddcTableEscapeAttr__(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
export function __ddcTableEscapeHtml__(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
