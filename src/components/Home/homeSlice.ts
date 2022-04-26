import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../state/store';
import { publishWidget, fetchStoreStatus, removeWidget } from './homeAPI';

export type LoadingState = 'idle' | 'loading' | 'failed';

export interface HomeState {
  published: boolean;
  storeUrl?: string;
  status: LoadingState;

  showRemoveDialog: boolean;
}

const initialState: HomeState = {
  published: false,
  status: 'idle',

  showRemoveDialog: false,
};

export const loadStatus = createAsyncThunk('home/loadStatus', fetchStoreStatus);
export const publish = createAsyncThunk('home/publish', publishWidget);
export const remove = createAsyncThunk('home/remove', removeWidget);

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    showRemoveDialog: (state) => {
      state.showRemoveDialog = true;
    },
    hideRemoveDialog: (state) => {
      state.showRemoveDialog = false;
    },
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});

export const { showRemoveDialog, hideRemoveDialog } = homeSlice.actions;
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectHome = (state: RootState) => {
  return state.home;
};
export default homeSlice.reducer;
