import { createAction, createReducer } from "@reduxjs/toolkit";

export const setProfile = createAction("SET_PROFILE");

const initialValue = {};

export const ProfileReducer = createReducer(initialValue, {
  [setProfile]: (state, action) => action.payload,
});
