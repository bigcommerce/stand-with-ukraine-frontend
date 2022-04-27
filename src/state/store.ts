import { createAlertsManager } from '@bigcommerce/big-design';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import homeReducer from '../components/Home/homeSlice';
import setupReducer from '../components/Setup/setupSlice';

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
