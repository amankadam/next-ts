/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { Dispatch } from 'redux';
import { AppState, AppThunk } from '..';

const testSlice = createSlice({
  name: 'test',
  initialState: {} as any,
  reducers: {
    setvalue(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.test,
      };
    },
  },
});
export const fetchTest =
  (id: any): any =>
  async (dispatch: Dispatch) => {
    const timeoutPromise = (timeout: number) =>
      new Promise((resolve) => setTimeout(resolve, timeout));
    await timeoutPromise(200);
    dispatch(
      testSlice.actions.setvalue({
        [id]: {
          name: id,
        },
      }),
    );
  };
export const selectTest = (id: any) => (state: AppState) =>
  state?.[testSlice.name]?.[id];
export default testSlice;
