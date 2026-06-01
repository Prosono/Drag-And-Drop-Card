/*
 * Compatibility barrel for internal companion cards.
 *
 * External modules can keep importing from cards/internal-card-registry.js while the actual card
 * implementations live under the cards/internal-cards directory.
 */

export * from './internal-cards/index.js';
