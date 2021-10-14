import {
    createAction,
    createReducer,
    createAsyncThunk,
  } from "@reduxjs/toolkit";
import expoLocalHost from "../localHost";
import axios from "axios";

export const setWorkspace = createAsyncThunk("SETWORKSPACE", (id) => {
    return axios
    .get(`http://${expoLocalHost}/api/workSpace/findWorkspace/${id}`)
    .then(r=>{
      console.log("DATAWS==>", r.data)
      return r.data
    })
})

const initState = {
  singleWorkspace:{}
};

export const WorkspaceReducer = createReducer(initState, {
  [setWorkspace.fulfilled]: (state, action) => {
    state.singleWorkspace = action.payload;
  }
  });

  