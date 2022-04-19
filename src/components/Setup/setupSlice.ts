import {
  createSlice,
  PayloadAction,

  /*,createAsyncThunk*/
} from '@reduxjs/toolkit';
import {
  RootState,
  /*,AppThunk*/
} from '../../app/store';
// import { fetchCount } from './stepsAPI';

export type WidgetStyle = 'blue' | 'black' | 'white';
export type WidgetLayout =
  | 'top-left'
  | 'top-middle'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-middle'
  | 'bottom-right';
export type LoadingState = 'idle' | 'loading' | 'failed';
export const Steps = ['Style', 'Layout', 'Charity', 'Content'];

export interface SetupState {
  currentStep: number;
  status: LoadingState;
  showFooter: boolean;
  showFooterBackButton: boolean;
  showFooterContinueButton: boolean;

  widgetStyle: WidgetStyle;
  widgetLayout: WidgetLayout;
  widgetCharitySelections: { [charity: string]: boolean };
  widgetModalTitle: string;
  widgetModalBody: string;
}

const initialState: SetupState = {
  currentStep: 0,
  status: 'idle',
  showFooter: false,
  showFooterBackButton: false,
  showFooterContinueButton: false,

  widgetStyle: 'blue',
  widgetLayout: 'bottom-right',
  widgetCharitySelections: {},
  widgetModalTitle: `Let's support Ukraine!`,
  widgetModalBody: `We created this project to provide urgent help and support in face of an extreme and unforeseen situation in Ukraine. Today, the sovereign nation of Ukraine has to deal with the most horrendous and catastrophic emergency – a brutal invasion. Razom is responding to this by providing critical medical supplies and amplifying the voices of Ukrainians. `,
};

// export const incrementAsync = createAsyncThunk(
//   'setup/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const setupSlice = createSlice({
  name: 'setup',
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    previousStep: (state) => {
      state.currentStep -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setWidgetStyle: (state, action: PayloadAction<WidgetStyle>) => {
      state.widgetStyle = action.payload;
    },
    setLayout: (state, action: PayloadAction<WidgetLayout>) => {
      state.widgetLayout = action.payload;
    },
    toggleCharity: (state, action: PayloadAction<string>) => {
      state.widgetCharitySelections[action.payload] = !Boolean(
        state.widgetCharitySelections[action.payload]
      );
    },
    setModalTitle: (state, action: PayloadAction<string>) => {
      state.widgetModalTitle = action.payload;
    },
    setModalBody: (state, action: PayloadAction<string>) => {
      state.widgetModalBody = action.payload;
    },
    showFooter: (state) => {
      state.showFooter = true;
    },
    hideFooter: (state) => {
      state.showFooter = false;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.step += action.payload;
  //     });
  // },
});

export const {
  nextStep,
  previousStep,
  setWidgetStyle,
  setLayout,
  setModalBody,
  setModalTitle,
  showFooter,
  hideFooter,
} = setupSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectStep = (state: RootState) => state.setup;
export const selectFooter = (state: RootState) => ({
  show: state.setup.showFooter,
  backButton: state.setup.showFooterBackButton,
  continueButton: state.setup.showFooterContinueButton,
});

export default setupSlice.reducer;
