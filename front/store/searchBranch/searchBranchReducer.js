import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

import expoLocalHost from "../../localHost";

export const setBranchReducer = createAsyncThunk("SEARCHBRANCH", (value) => {
  return axios
    .get(`http://${expoLocalHost}/api/branches/singleBranch/1`)
    .then((r) => {
      console.log(r.data);
      return r.data;
    });
});

const initState = {};

export const searchBranchReducer = createReducer(initState, {
  [setBranchReducer.fulfilled]: (state, action) => (state = action.payload),
});
