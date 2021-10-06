import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSelectedFloor = createAction("SET_SELECTED_FLOOR");
export const setSelectedFloorId = createAction("SET_SELECTED_FLOOR_ID");

const initialValue = {};

export const FloorReducer = createReducer(initialValue, {
    [setSelectedFloor]: (state, action) => action.payload,
});

export const FloorIdReducer = createReducer(initialValue, {
    [setSelectedFloorId]: (state, action) => action.payload,
});
