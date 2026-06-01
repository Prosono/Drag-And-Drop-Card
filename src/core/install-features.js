/*
 * Feature installation coordinator for DragAndDropCard.
 *
 * Every feature module contributes methods or statics to the main class. The order here matters:
 * low-level normalization and catalog APIs are installed before higher-level dashboard behavior.
 */

import { registerDdcInternalCards } from '../cards/internal-card-registry.js';
import { registerDragAndDropCard } from '../ha/registration.js';
import { installCardModCompatibility } from '../ha/card-mod-compat.js';
import { installDdcAugmentationV6 } from '../ha/layout-switcher-augmentation.js';
import { installScreenSaverMethods } from '../media/screensaver.js';
import { installGridSelectPatch } from '../interactions/grid-selection.js';
import { installDashboardShellBindingMethods } from '../dashboard/shell-bindings.js';
import { installLifecycleMethods } from './element-lifecycle.js';
import { installInitialLoadMethods } from './layout-loader.js';
import { installSetConfigMethod } from './config-lifecycle.js';
import { installDashboardSettingsMethods } from '../dashboard/settings-controller.js';
import { installSmartPickerMethods } from '../cards/smart-card-picker.js';
import { installPersistenceMethods } from '../storage/layout-persistence.js';
import { installLayoutHistoryMethods } from '../layout/history.js';
import { installSelectionMethods } from '../interactions/selection.js';
import { installInputInteractionMethods } from '../interactions/input-handlers.js';
import { installEmptyStateMethods } from '../dashboard/empty-state.js';
import { installEditModeMethods } from '../interactions/edit-mode.js';
import { installToolbarBehaviorMethods } from '../dashboard/toolbar-controller.js';
import { installHaChromeMethods } from '../ha/chrome-visibility.js';
import { installMediaLibraryMethods } from '../media/media-library.js';
import { installBackgroundEffectsMethods } from '../media/background-effects.js';
import { installDashboardVisualMethods } from '../dashboard/visuals.js';
import { installVisibilityMethods } from '../layout/visibility.js';
import { installSidebarMethods } from '../layout/sidebar.js';
import { installResponsiveModelMethods } from '../layout/responsive-layouts.js';
import { installViewportPreviewMethods } from '../layout/viewport-preview.js';
import { installLayerMethods } from '../layout/layers.js';
import { installTabsLayoutMethods } from '../layout/tabs.js';
import { installConnectorMethods } from '../interactions/connectors.js';
import { installDashboardApiMethods } from '../dashboard/api.js';
import { installDesignImportExportMethods } from '../storage/import-export.js';
import { installDashboardConverterMethods } from '../storage/dashboard-converter.js';
import { installDebugDiagnosticsMethods } from '../diagnostics/debug-tools.js';
import { installLayoutGeometryMethods } from '../layout/geometry.js';
import { installTextResizeLockMethods } from '../layout/text-size-lock.js';
import { installScaleManagerMethods } from '../layout/auto-scale.js';
import { installCardBuilderMethods } from '../cards/card-renderer.js';
import { installCardSettingsMenuMethods } from '../cards/card-options-menu.js';
import { installInteractBehaviorMethods } from '../interactions/drag-interactions.js';
import { installHaConfigEditorStatics } from '../ha/config-editor.js';
import { installContainerSizingMethods } from '../layout/container-size.js';
import { installCardDefinitionStatics } from '../cards/card-catalog.js';
import { installConfigHelperMethods } from './config-normalization.js';
import { installCoreMethods } from './element-api.js';

export function installDragAndDropCardFeatures(CardClass, version) {
  // Class-level APIs must be installed first because Home Assistant can call
  // static picker/editor methods before an element instance has fully mounted.
  installConfigHelperMethods(CardClass);
  installCardDefinitionStatics(CardClass);
  installHaConfigEditorStatics(CardClass);

  // Instance-level helpers are layered from low-level primitives to UI features.
  // Later modules can safely call methods installed by earlier modules.
  installCoreMethods(CardClass.prototype);
  installContainerSizingMethods(CardClass.prototype);
  installScaleManagerMethods(CardClass.prototype);
  installTextResizeLockMethods(CardClass.prototype);
  installLayoutGeometryMethods(CardClass.prototype);
  installToolbarBehaviorMethods(CardClass.prototype);
  installDashboardShellBindingMethods(CardClass.prototype);
  installSetConfigMethod(CardClass.prototype);
  installInitialLoadMethods(CardClass.prototype);
  installLifecycleMethods(CardClass.prototype);
  installHaChromeMethods(CardClass.prototype);
  installMediaLibraryMethods(CardClass.prototype);
  installBackgroundEffectsMethods(CardClass.prototype);
  installDashboardVisualMethods(CardClass.prototype);
  installVisibilityMethods(CardClass.prototype);
  installResponsiveModelMethods(CardClass.prototype);
  installViewportPreviewMethods(CardClass.prototype);
  installLayerMethods(CardClass.prototype);
  installSidebarMethods(CardClass.prototype);
  installTabsLayoutMethods(CardClass.prototype);
  installConnectorMethods(CardClass.prototype);
  installCardBuilderMethods(CardClass.prototype);
  installCardSettingsMenuMethods(CardClass.prototype);
  installInteractBehaviorMethods(CardClass.prototype);
  installEditModeMethods(CardClass.prototype);
  installEmptyStateMethods(CardClass.prototype);
  installSelectionMethods(CardClass.prototype);
  installInputInteractionMethods(CardClass.prototype);
  installLayoutHistoryMethods(CardClass.prototype);
  installPersistenceMethods(CardClass.prototype);
  installDashboardApiMethods(CardClass.prototype);
  installDesignImportExportMethods(CardClass.prototype);
  installDashboardConverterMethods(CardClass.prototype);
  installDebugDiagnosticsMethods(CardClass.prototype);
  installScreenSaverMethods(CardClass.prototype);
  installDashboardSettingsMethods(CardClass.prototype);
  installSmartPickerMethods(CardClass.prototype);

  // The custom element and companion internal cards are registered only after
  // the prototype is fully composed, so every instance starts with the full API.
  if (!customElements.get('drag-and-drop-card')) {
    installGridSelectPatch(CardClass);
    registerDdcInternalCards();
    registerDragAndDropCard(CardClass, version);
  }

  // Compatibility modules patch external integration points and should run last
  // so they can wrap the final, fully installed card behavior.
  installCardModCompatibility();
  installDdcAugmentationV6();
}
