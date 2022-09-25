import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchStoreStatus,
  fetchStoreURL,
  publishWidget,
  readConfiguration,
  removeWidget,
  writeConfiguration,
} from './api';

export const getConfiguration = createAsyncThunk('setup/getConfiguration', readConfiguration);
export const saveConfiguration = createAsyncThunk('setup/saveConfiguration', writeConfiguration);
export const loadStatus = createAsyncThunk('home/loadStatus', fetchStoreStatus);
export const publish = createAsyncThunk('home/publish', publishWidget);
export const remove = createAsyncThunk('home/remove', removeWidget);
export const preview = createAsyncThunk('home/preview', fetchStoreURL);
