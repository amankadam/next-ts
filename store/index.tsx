import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action, Store } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import testSlice from './test';

export const makeStore = (): Store =>
  configureStore({
    reducer: {
      [testSlice.name]: testSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
