import type { MainState } from './types';

/* ==== Selectors ===== */
export const selectCurrentStep = (state: MainState) => state.step;
export const selectFooter = (state: MainState) => state.footer;
export const selectConfiguration = (state: MainState) => state.widgetConfiguration;
export const selectStoreUrl = (state: MainState) => state.storeUrl;
export const selectShowRemoveDialog = (state: MainState) => state.showRemoveDialog;
export const selectPublished = (state: MainState) => state.published;
export const selectLoadingStatus = (state: MainState) => state.status;
export const selectWidgetModal = (state: MainState) => ({
  modalTitle: state.widgetConfiguration.modal_title,
  modalBody: state.widgetConfiguration.modal_body,
});
