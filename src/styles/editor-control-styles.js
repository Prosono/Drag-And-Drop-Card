// Home Assistant defines Web Awesome aliases on html. Those variables resolve
// there before being inherited, so overriding HA colors alone does not recolor
// nested picker popovers, menus, or search fields. Rebind at each editor surface.
export const editorControlAliases = `
  --ha-dialog-surface-background:var(--card-background-color);
  --mdc-menu-surface-fill-color:var(--card-background-color);
  --wa-color-surface-default:var(--card-background-color);
  --wa-color-surface-raised:var(--card-background-color);
  --wa-color-surface-border:var(--divider-color);
  --wa-color-text-normal:var(--primary-text-color);
  --wa-color-text-quiet:var(--secondary-text-color);
  --wa-form-control-background-color:var(--card-background-color);
  --wa-form-control-border-color:var(--ha-color-border-neutral-normal);
  --wa-form-control-value-color:var(--primary-text-color);
  --wa-form-control-placeholder-color:var(--secondary-text-color);
  --wa-focus-ring-color:var(--primary-color);
  --wa-color-brand-fill-loud:var(--primary-color);
  --wa-color-brand-fill-normal:var(--ha-color-fill-primary-normal-resting);
  --wa-color-brand-fill-quiet:var(--ha-color-fill-primary-quiet-hover);
  --wa-color-brand-border-loud:var(--primary-color);
  --wa-color-brand-border-normal:var(--primary-color);
  --wa-color-brand-border-quiet:var(--ha-color-border-primary-quiet);
  --wa-color-brand-on-loud:var(--text-primary-color);
  --wa-color-brand-on-normal:var(--primary-color);
  --wa-color-brand-on-quiet:var(--primary-color);
  --wa-color-neutral-fill-loud:var(--secondary-text-color);
  --wa-color-neutral-fill-normal:var(--ha-color-fill-neutral-normal-resting);
  --wa-color-neutral-fill-quiet:var(--ha-color-fill-neutral-quiet-hover);
  --wa-color-neutral-border-loud:var(--ha-color-border-neutral-loud);
  --wa-color-neutral-border-normal:var(--ha-color-border-neutral-normal);
  --wa-color-neutral-border-quiet:var(--ha-color-border-neutral-quiet);
  --wa-color-neutral-on-loud:var(--card-background-color);
  --wa-color-neutral-on-normal:var(--primary-text-color);
  --wa-color-neutral-on-quiet:var(--secondary-text-color);
`;
