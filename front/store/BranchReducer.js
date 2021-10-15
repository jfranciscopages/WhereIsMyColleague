import React from "react";
import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import expoLocalHost from "../localHost";
import { useToast } from "native-base";

export const allBranches = createAsyncThunk("ALL_BRANCHES", () => {
  return axios.get(`http://${expoLocalHost}/api/branches/`).then((r) => r.data);
});

export const byCity = createAsyncThunk("BY_COUNTRY", (city) => {
  return axios
    .get(`http://${expoLocalHost}/api/branches/byCity/${city}`)
    .then((r) => {
      console.log("********************");
      console.log("DATA DEL BACK", r.data);
      return r.data;
    });
});

export const createBranch = createAsyncThunk("NEW_BRANCH", ({ branch }) => {
  return axios
    .post(`http://${expoLocalHost}/api/branches/newBranch`, branch)
    .then((r) => {
      r.data;
    })
    .catch((e) => {
      console.log(e);
    });
});

export const deleteBranch = createAsyncThunk("DEL_BRANCH", (id) => {
  return axios
    .delete(`http://${expoLocalHost}/api/branches/deleteBranch/${id}`)
    .then((r) => {
      return "eliminado";
    })
    .catch((e) => console.log(e));
});

export const singleBranch = createAsyncThunk("SINGLE_BRANCH", (id) => {
  return axios
    .get(`http://${expoLocalHost}/api/branches/singleBranch/${id}`)
    .then((r) => r.data);
});

export const editedBranch = createAsyncThunk(
  "EDIT_BRANCH",
  ({ id, branch }) => {
    return axios
      .put(`http://${expoLocalHost}/api/branches/editBranch/${id}`, branch)
      .then((r) => ("BRANCH EDITADA", r.data));
  }
);

const initState = {
  allBranches: [],
  byCity: [],
  singleBranch: {},
};

export const BranchReducer = createReducer(initState, {
  [allBranches.fulfilled]: (state, action) => {
    state.allBranches = action.payload;
  },
  [byCity.fulfilled]: (state, action) => {
    state.byCity = action.payload;
  },
  [singleBranch.fulfilled]: (state, action) => {
    state.singleBranch = action.payload;
  },
});
