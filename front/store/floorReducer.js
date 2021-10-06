import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSelectedFloor = createAction("SET_SELECTED_FLOOR");

const initialValue = {};

export const FloorReducer = createReducer(initialValue, {
    [setSelectedFloor]: (state, action) => action.payload,
});
