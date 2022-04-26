import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  RootState,
  /*,AppThunk*/
} from '../../state/store';
import { readConfiguration, writeConfiguration } from './stepsAPI';
// import { fetchCount } from './stepsAPI';

export type WidgetStyle = 'blue' | 'black' | 'white';
export type WidgetPlacement =
  | 'top-left'
  | 'top-middle'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-middle'
  | 'bottom-right';
export type LoadingState = 'idle' | 'loading' | 'failed';
export const Steps = ['Style', 'Layout', 'Charity', 'Pop-Up'];
export type WidgetConfiguration = {
  style: WidgetStyle;
  placement: WidgetPlacement;
  charity_selections: string[];
  modal_title: string;
  modal_body: string;
};

export interface SetupState {
  steps: {
    currentStep: number;
    status: LoadingState;
  };
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

const initialState: SetupState = {
  steps: {
    currentStep: 0,
    status: 'idle',
  },
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
  widgetConfiguration: {
    style: 'blue',
    placement: 'bottom-right',
    charity_selections: ['razom', 'unicef', 'new-ukraine'],
    modal_title: `Let's support Ukraine!`,
    modal_body: `We created this project to provide urgent help and support in face of an extreme and unforeseen situation in Ukraine. Today, the sovereign nation of Ukraine has to deal with the most horrendous and catastrophic emergency – a brutal invasion. Razom is responding to this by providing critical medical supplies and amplifying the voices of Ukrainians. `,
  },
};

export const getConfiguration = createAsyncThunk(
  'setup/getConfiguration',
  readConfiguration
);

export const saveConfiguration = createAsyncThunk(
  'setup/setConfiguration',
  writeConfiguration
);

export const setupSlice = createSlice({
  name: 'setup',
  initialState,
  reducers: {
    goToStep: (state, action: PayloadAction<number>) => {
      state.steps.currentStep = action.payload;
    },
    nextStep: (state) => {
      state.steps.currentStep += 1;
    },
    previousStep: (state) => {
      state.steps.currentStep -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setWidgetStyle: (state, action: PayloadAction<WidgetStyle>) => {
      state.widgetConfiguration.style = action.payload;
    },
    setWidgetPlacement: (state, action: PayloadAction<WidgetPlacement>) => {
      state.widgetConfiguration.placement = action.payload;
    },
    toggleCharity: (state, action: PayloadAction<string>) => {
      let index = state.widgetConfiguration.charity_selections.indexOf(
        action.payload
      );
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
    showFooter: (state) => {
      state.footer.show = true;
    },
    hideFooter: (state) => {
      state.footer.show = false;
    },
    configureBackButton: (
      state,
      action: PayloadAction<Partial<{ show: boolean; disabled: boolean }>>
    ) => {
      state.footer.backButton.show = Boolean(action.payload.show);
      state.footer.backButton.disabled = Boolean(action.payload.disabled);
    },
    configureContinueButton: (
      state,
      action: PayloadAction<Partial<{ show: boolean; disabled: boolean }>>
    ) => {
      state.footer.continueButton.show = Boolean(action.payload.show);
      state.footer.continueButton.disabled = Boolean(action.payload.disabled);
    },
    configurePublishButton: (
      state,
      action: PayloadAction<Partial<{ show: boolean; disabled: boolean }>>
    ) => {
      state.footer.publishButton.show = Boolean(action.payload.show);
      state.footer.publishButton.disabled = Boolean(action.payload.disabled);
    },
    configureCancelButton: (
      state,
      action: PayloadAction<Partial<{ show: boolean; disabled: boolean }>>
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
      }>
    ) => {
      if (action.payload.backButton !== undefined) {
        state.footer.backButton.show = Boolean(action.payload.backButton.show);
        state.footer.backButton.disabled = Boolean(
          action.payload.backButton.disabled
        );
      }
      if (action.payload.continueButton !== undefined) {
        state.footer.continueButton.show = Boolean(
          action.payload.continueButton.show
        );
        state.footer.continueButton.disabled = Boolean(
          action.payload.continueButton.disabled
        );
      }
      if (action.payload.publishButton !== undefined) {
        state.footer.publishButton.show = Boolean(
          action.payload.publishButton.show
        );
        state.footer.publishButton.disabled = Boolean(
          action.payload.publishButton.disabled
        );
      }
      if (action.payload.cancelButton !== undefined) {
        state.footer.cancelButton.show = Boolean(
          action.payload.cancelButton.show
        );
        state.footer.cancelButton.disabled = Boolean(
          action.payload.cancelButton.disabled
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getConfiguration.pending, (state) => {
        state.steps.status = 'loading';
      })
      .addCase(getConfiguration.fulfilled, (state, action) => {
        state.steps.status = 'idle';
        state.widgetConfiguration = action.payload;
      })
      .addCase(saveConfiguration.pending, (state) => {
        state.steps.status = 'loading';
      })
      .addCase(saveConfiguration.fulfilled, (state) => {
        state.steps.status = 'idle';
      });
  },
});

export const {
  goToStep,
  nextStep,
  previousStep,
  setWidgetStyle,
  setWidgetPlacement,
  setModalBody,
  setModalTitle,
  showFooter,
  hideFooter,
  configureBackButton,
  configureContinueButton,
  configurePublishButton,
  configureCancelButton,
  configureButtons,
  toggleCharity,
} = setupSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectStep = (state: RootState) => state.setup;
export const selectCurrentStep = (state: RootState) =>
  state.setup.steps.currentStep;
export const selectFooter = (state: RootState) => state.setup.footer;

export default setupSlice.reducer;
