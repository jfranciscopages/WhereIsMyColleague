import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import expoLocalHost from "../localHost";

export const allBranches = createAsyncThunk("ALL_BRANCHES", () => {
  return axios.get(`http://${expoLocalHost}/api/branches/`).then((r) => r.data);
});

export const byCountry = createAsyncThunk("BY_CATEGORY", (country) => {
  return axios
    .get(`http://${expoLocalHost}/api/branches/byCountry/${country}`)
    .then((r) => r.data);
});

export const createBranch = createAsyncThunk("NEW_BRANCH", () => {
  return axios
    .post(`http://${expoLocalHost}/api/branches/newBranch`)
    .then((r) => r.data);
});

export const deleteBranch = createAsyncThunk("DEL_BRANCH", (id) => {
  return axios
    .delete(`http://${expoLocalHost}/api/branches/deleteBranch/${id}`)
    .then((r) => console.log("BRANCH BORRADA", r.data));
});

export const singleBranch = createAsyncThunk("SINGLE_BRANCH", (id) => {
  return axios
    .get(`http://${expoLocalHost}/api/branches/singleBranch/${id}`)
    .then((r) => r.data);
});

export const editBranch = createAsyncThunk("EDIT_BRANCH", (id) => {
  return axios
    .put(`http://${expoLocalHost}/api/branches/editBranch/${id}`)
    .then((r) => ("BRANCH EDITADA", r.data));
});

const initState = {
  allBranches: [],
  byCountry: [],
  singleBranch: {},
};

export const BranchReducer = createReducer(initState, {
  [allBranches.fulfilled]: (state, action) => {
    state.allBranches = action.payload;
  },
  [byCountry.fulfilled]: (state, action) => {
    state.byCountry = action.payload;
  },
  [singleBranch.fulfilled]: (state, action) => {
    state.singleBranch = action.payload;
  },
});
