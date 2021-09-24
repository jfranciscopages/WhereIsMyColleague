import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const setSearchValue = createAction(`SETSEARCH`);

export const searchValueReducer = createReducer("", {
  [setSearchValue]: (state, action) => action.payload,
});
