import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import setupReducer from '../components/Setup/setupSlice';
import homeReducer from '../components/Home/homeSlice';
import { createAlertsManager } from '@bigcommerce/big-design';

export const store = configureStore({
  reducer: {
    setup: setupReducer,
    home: homeReducer,
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

export const alertsManager = createAlertsManager();
