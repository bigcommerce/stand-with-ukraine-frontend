import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../state/store';
import { fetchStoreData } from './homeAPI';

export type LoadingState = 'idle' | 'loading' | 'failed';

export interface HomeState {
  published: boolean;
  storeUrl?: string;
  status: LoadingState;
}

const initialState: HomeState = {
  published: false,
  status: 'idle',
};

export const loadStore = createAsyncThunk('home/loadStore', fetchStoreData);

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadStore.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadStore.fulfilled, (state, action) => {
        state.status = 'idle';
        state.published = action.payload.published;
      })
      .addCase(loadStore.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectHome = (state: RootState) => state.home;

export default homeSlice.reducer;
