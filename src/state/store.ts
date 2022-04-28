import { createAlertsManager } from '@bigcommerce/big-design';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import reducer from './mainSlice';

export const store = configureStore({
  reducer,
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
