import { createAlertsManager } from '@bigcommerce/big-design';
import { configureStore } from '@reduxjs/toolkit';

import reducer from './mainSlice';

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const alertsManager: { add: any } = createAlertsManager();
