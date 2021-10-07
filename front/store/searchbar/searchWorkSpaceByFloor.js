import {
    createAction,
    createReducer,
    createAsyncThunk,
  } from "@reduxjs/toolkit";
  import axios from "axios";

  import expoLocalHost from "../../localHost";

 

  export const workspacesByFloor = createAsyncThunk("WORKSPACEBYFLOOR", (value) => {
    return axios
      .post(`http://${expoLocalHost}/api//editWorkSpace/findWorkspace`, value)
      .then((r) => {
        return r.data;
      });
  });

  export const workspacesByFloorReducer = createReducer([], {
    [workspacesByFloor.fulfilled]: (state, action) => (action.payload)
  });
  

  