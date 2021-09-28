import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const setEmpresas = createAction("SET_EMPRESAS");

export const deleteEmpresas = createAction("DELETE_EMPRESAS");

const empresasReducer = createReducer([], {
  [setEmpresas]: (state, { payload: users }) => {
    return users;
  },
  [deleteEmpresas]: (state, { payload: empresa }) => {
    return state.filter((empres) => empresa.id !== empresa);
  },
});

export default empresasReducer;