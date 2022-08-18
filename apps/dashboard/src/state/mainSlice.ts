import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CONFIG } from 'config';
import type { WidgetConfiguration, WidgetPlacement, WidgetStyle } from 'config/types';

import {
  fetchStoreStatus,
  fetchStoreURL,
  publishWidget,
  readConfiguration,
  removeWidget,
  writeConfiguration,
} from './mainApi';

export const Steps = ['Color', 'Layout', 'Charity', 'Pop-Up'];
export type LoadingState = 'idle' | 'loading' | 'failed';

export interface MainState {
  status: LoadingState;
  step: number;
  published: boolean;
  storeUrl?: string;
  showRemoveDialog: boolean;
  footer: {
    show: boolean;
    cancelButton: {
      show: boolean;
      disabled: boolean;
    };
    backButton: {
      show: boolean;
      disabled: boolean;
    };
    continueButton: {
      show: boolean;
      disabled: boolean;
    };
    publishButton: {
      show: boolean;
      disabled: boolean;
    };
  };
  widgetConfiguration: WidgetConfiguration;
}

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

export const getConfiguration = createAsyncThunk('setup/getConfiguration', readConfiguration);

export const saveConfiguration = createAsyncThunk('setup/saveConfiguration', writeConfiguration);

export const loadStatus = createAsyncThunk('home/loadStatus', fetchStoreStatus);
export const publish = createAsyncThunk('home/publish', publishWidget);
export const remove = createAsyncThunk('home/remove', removeWidget);
export const preview = createAsyncThunk('home/preview', fetchStoreURL);

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
      state.footer.backButton.show = Boolean(action.payload.show);
      state.footer.backButton.disabled = Boolean(action.payload.disabled);
    },
    configureContinueButton: (
      state,
      action: PayloadAction<Partial<{ show: boolean; disabled: boolean }>>,
    ) => {
      state.footer.continueButton.show = Boolean(action.payload.show);
      state.footer.continueButton.disabled = Boolean(action.payload.disabled);
    },
    configurePublishButton: (
      state,
      action: PayloadAction<Partial<{ show: boolean; disabled: boolean }>>,
    ) => {
      state.footer.publishButton.show = Boolean(action.payload.show);
      state.footer.publishButton.disabled = Boolean(action.payload.disabled);
    },
    configureCancelButton: (
      state,
      action: PayloadAction<Partial<{ show: boolean; disabled: boolean }>>,
    ) => {
      state.footer.cancelButton.show = Boolean(action.payload.show);
      state.footer.cancelButton.disabled = Boolean(action.payload.disabled);
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
        state.footer.backButton.show = Boolean(action.payload.backButton.show);
        state.footer.backButton.disabled = Boolean(action.payload.backButton.disabled);
      }

      if (action.payload.continueButton !== undefined) {
        state.footer.continueButton.show = Boolean(action.payload.continueButton.show);
        state.footer.continueButton.disabled = Boolean(action.payload.continueButton.disabled);
      }

      if (action.payload.publishButton !== undefined) {
        state.footer.publishButton.show = Boolean(action.payload.publishButton.show);
        state.footer.publishButton.disabled = Boolean(action.payload.publishButton.disabled);
      }

      if (action.payload.cancelButton !== undefined) {
        state.footer.cancelButton.show = Boolean(action.payload.cancelButton.show);
        state.footer.cancelButton.disabled = Boolean(action.payload.cancelButton.disabled);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConfiguration.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getConfiguration.fulfilled, (state, action) => {
        state.status = 'idle';
        state.widgetConfiguration = action.payload;
      })
      .addCase(saveConfiguration.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveConfiguration.fulfilled, (state) => {
        state.status = 'idle';
      })
      .addCase(loadStatus.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadStatus.fulfilled, (state, action) => {
        state.status = 'idle';
        state.published = action.payload.published;
      })
      .addCase(loadStatus.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(publish.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(publish.fulfilled, (state) => {
        state.status = 'idle';
        state.published = true;
      })
      .addCase(remove.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(remove.fulfilled, (state) => {
        state.status = 'idle';
        state.published = false;
        state.showRemoveDialog = false;
      })
      .addCase(preview.pending, (state) => {
        state.status = 'loading';
      })
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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
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

export default mainSlice.reducer;
