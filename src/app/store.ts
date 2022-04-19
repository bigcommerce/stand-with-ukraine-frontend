import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import setupReducer from '../components/Setup/setupSlice';

export const store = configureStore({
  reducer: {
    setup: setupReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
