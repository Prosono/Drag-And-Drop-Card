/*
 * Constructor-time instance state for DragAndDropCard.
 *
 * Centralizing these defaults keeps the entrypoint small and makes it clear which runtime fields
 * are expected to exist before setConfig and connectedCallback run.
 */

export function initializeDragAndDropCardInstance(instance) {
  if (!instance.shadowRoot) instance.attachShadow({ mode: 'open' });
  instance.__rebuiltCards = new WeakSet();
  instance.viewportPreviewMode = 'live';
  instance._activeResponsiveProfile = 'desktop';
  instance._activeResponsiveLayoutKey = 'desktop_landscape';
  instance._responsiveLayouts = null;
  instance._dashboardPackages = [];
  instance.layers = [];
  instance.activeLayerIds = [];
  instance.layersEnabled = false;
  instance.layersButtonDetails = false;
  instance.sidebarEnabled = false;
  instance.sidebarItems = ['navigation'];
  instance.sidebarStyle = 'glass';
  instance.sidebarDensity = 'comfortable';
  instance.sidebarAccent = 'blue';
  instance.sidebarHeader = 'clock';
  instance.sidebarCanvasHeight = 520;
  instance.sidebarCards = [];
  instance.sidebarCanvas = null;
  instance.sidebarHeaderHost = null;
  instance.sidebarDetail = null;
  instance.__dashboardThemeAppliedVars = [];
  instance.__animatedCardIds = new Set();
  instance.__suppressCardAnimation = false;
  instance._responsivePreviewOrientations = {
    desktop: 'landscape',
    tablet: 'landscape',
    mobile: 'portrait',
  };
  instance.responsiveViewportProfiles = instance._defaultResponsiveViewportProfiles_();
  instance.responsiveViewportAspectLocks = instance._defaultResponsiveViewportAspectLocks_();
  instance.autoViewportMaxWidth = 0;
  instance.autoScaleMax = 0;
  instance.__responsiveSwitchSeq = 0;
  instance.__toolbarExpanded = false;
}
