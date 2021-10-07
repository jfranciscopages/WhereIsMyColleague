import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const setSearchValue = createAction(`SETSEARCH`);
export const setWorkSpaceValue = createAction(`SETWORKSPACE`);

export const searchValueReducer = createReducer("", {
  [setSearchValue]: (state, action) => action.payload,
});
export const searchWorkspaceReducer = createReducer("", {
  [setWorkSpaceValue]: (state, action) => action.payload,
});
