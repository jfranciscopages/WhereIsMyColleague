import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

import expoLocalHost from "../localHost";

export const setUsersByTitle = createAsyncThunk("USERSBYTITLE", (value) => {
  return axios
    .get(`http://${expoLocalHost}/api/users/search/${value}`)
    .then((r) => {
      return r.data;
    });
});

export const setUsers = createAsyncThunk("USERS", () => {
  return axios.get(`http://${expoLocalHost}/api/users/getAll`).then((r) => {
    return r.data;
  });
});

export const userById = createAsyncThunk("BY_ID", (id) => {
  return axios.get(`http://${expoLocalHost}/api/users/byId/${id}`).then((r) => {
    console.log(r.data);
    return r.data;
  });
});

const initState = {
  usersByTitle: [],
  userById: {},
  allUsers: [],
};

export const UserReducer = createReducer(initState, {
  [setUsersByTitle.fulfilled]: (state, action) => {
    state.usersByTitle = action.payload;
  },
  [setUsers.fulfilled]: (state, action) => {
    state.allUsers = action.payload;
  },
  [userById.fulfilled]: (state, action) => {
    state.userById = action.payload;
  },
});
