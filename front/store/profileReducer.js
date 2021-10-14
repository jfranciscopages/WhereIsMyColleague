import {
  createAsyncThunk,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";

export const setProfile = createAction("SET_PROFILE");

const initState = {};

export const ProfileReducer = createReducer(initState, {
  [setProfile]: (state, action) => (state = action.payload),
});
