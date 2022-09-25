import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CONFIG } from 'config';
import type { WidgetPlacement, WidgetStyle } from 'config/types';

import {
  getConfiguration,
  loadStatus,
  preview,
  publish,
  remove,
  saveConfiguration,
} from './asyncActions';
import { getButtonStateFromPayload, handleLoadingState as handlePendingState } from './common';
import type { MainState } from './types';

const initialState: MainState = {
  published: false,
  showRemoveDialog: false,
  status: 'idle',
  step: 0,
  storeUrl: undefined,
  footer: {
    show: false,
    cancelButton: {
      show: false,
      disabled: false,
    },
    backButton: {
      show: false,
      disabled: false,
    },
    continueButton: {
      show: false,
      disabled: false,
    },
    publishButton: {
      show: false,
      disabled: false,
    },
  },
  widgetConfiguration: DEFAULT_CONFIG,
};

/* ==== Slice ===== */
export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    resetSteps: (state) => {
      state.step = initialState.step;
      state.footer = initialState.footer;
      state.widgetConfiguration = initialState.widgetConfiguration;
    },
    goToStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    previousStep: (state) => {
      state.step -= 1;
    },
    showRemoveDialog: (state) => {
      state.showRemoveDialog = true;
    },
    hideRemoveDialog: (state) => {
      state.showRemoveDialog = false;
    },
    setWidgetStyle: (state, action: PayloadAction<WidgetStyle>) => {
      state.widgetConfiguration.style = action.payload;
    },
    setWidgetPlacement: (state, action: PayloadAction<WidgetPlacement>) => {
      state.widgetConfiguration.placement = action.payload;
    },
    toggleCharity: (state, action: PayloadAction<string>) => {
      const index = state.widgetConfiguration.charity_selections.indexOf(action.payload);

      if (index === -1) {
        state.widgetConfiguration.charity_selections.push(action.payload);
      } else {
        state.widgetConfiguration.charity_selections.splice(index, 1);
      }
    },
    setModalTitle: (state, action: PayloadAction<string>) => {
      state.widgetConfiguration.modal_title = action.payload;
    },
    setModalBody: (state, action: PayloadAction<string>) => {
      state.widgetConfiguration.modal_body = action.payload;
    },
    resetModalToDefault: (state) => {
      state.widgetConfiguration.modal_body = initialState.widgetConfiguration.modal_body;
      state.widgetConfiguration.modal_title = initialState.widgetConfiguration.modal_title;
    },
    showFooter: (state) => {
      state.footer.show = true;
    },
    hideFooter: (state) => {
      state.footer.show = false;
    },
    configureBackButton: (
      state,
      action: PayloadAction<Partial<{ show: boolean; disabled: boolean }>>,
    ) => {
      state.footer.backButton = getButtonStateFromPayload(action.payload);
    },
    configureContinueButton: (
      state,
      action: PayloadAction<Partial<{ show: boolean; disabled: boolean }>>,
    ) => {
      state.footer.continueButton = getButtonStateFromPayload(action.payload);
    },
    configurePublishButton: (
      state,
      action: PayloadAction<Partial<{ show: boolean; disabled: boolean }>>,
    ) => {
      state.footer.publishButton = getButtonStateFromPayload(action.payload);
    },
    configureCancelButton: (
      state,
      action: PayloadAction<Partial<{ show: boolean; disabled: boolean }>>,
    ) => {
      state.footer.cancelButton = getButtonStateFromPayload(action.payload);
    },
    configureButtons: (
      state,
      action: PayloadAction<{
        cancelButton?: {
          show: boolean;
          disabled: boolean;
        };
        backButton?: {
          show: boolean;
          disabled: boolean;
        };
        continueButton?: {
          show: boolean;
          disabled: boolean;
        };
        publishButton?: {
          show: boolean;
          disabled: boolean;
        };
      }>,
    ) => {
      if (action.payload.backButton !== undefined) {
        state.footer.backButton = getButtonStateFromPayload(action.payload.backButton);
      }

      if (action.payload.continueButton !== undefined) {
        state.footer.continueButton = getButtonStateFromPayload(action.payload.continueButton);
      }

      if (action.payload.publishButton !== undefined) {
        state.footer.publishButton = getButtonStateFromPayload(action.payload.publishButton);
      }

      if (action.payload.cancelButton !== undefined) {
        state.footer.cancelButton = getButtonStateFromPayload(action.payload.cancelButton);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConfiguration.pending, handlePendingState)
      .addCase(getConfiguration.fulfilled, (state, action) => {
        state.status = 'idle';
        state.widgetConfiguration = action.payload;
      })
      .addCase(saveConfiguration.pending, handlePendingState)
      .addCase(saveConfiguration.fulfilled, (state) => {
        state.status = 'idle';
      })
      .addCase(loadStatus.pending, handlePendingState)
      .addCase(loadStatus.fulfilled, (state, action) => {
        state.status = 'idle';
        state.published = action.payload.published;
      })
      .addCase(loadStatus.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(publish.pending, handlePendingState)
      .addCase(publish.fulfilled, (state) => {
        state.status = 'idle';
        state.published = true;
      })
      .addCase(remove.pending, handlePendingState)
      .addCase(remove.fulfilled, (state) => {
        state.status = 'idle';
        state.published = false;
        state.showRemoveDialog = false;
      })
      .addCase(preview.pending, handlePendingState)
      .addCase(preview.fulfilled, (state, action) => {
        state.status = 'idle';
        state.storeUrl = action.payload.secure_url;
      });
  },
});

export const {
  resetSteps,
  goToStep,
  nextStep,
  previousStep,
  setWidgetStyle,
  setWidgetPlacement,
  setModalBody,
  setModalTitle,
  showFooter,
  hideFooter,
  configureContinueButton,
  configureButtons,
  toggleCharity,
  showRemoveDialog,
  hideRemoveDialog,
  resetModalToDefault,
} = mainSlice.actions;

export default mainSlice.reducer;
