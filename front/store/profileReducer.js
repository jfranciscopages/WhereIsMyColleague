import {
  createAsyncThunk,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import expoLocalHost from "../localHost";

export const setProfile = createAction("SET_PROFILE");

export const loggedIn = createAsyncThunk(
  "LOGIN",
  ({ loginEmail, loginPassword }) => {
    // console.log('EMAIL Y PASSWORD BACK', {loginEmail, loginPassword})
    return axios
      .post(`http://${expoLocalHost}/api/auth/login`, {
        email: loginEmail,
        password: loginPassword,
      })
      .then((r) => r.data);
  }
);

export const loggedOut = createAsyncThunk("LOGOUT", () => {
  return axios
    .post(`http://${expoLocalHost}/api/auth/logout`)
    .then((r) => r.data);
});

const initState = {
  user: [],
  token: "",
};

export const ProfileReducer = createReducer(initState, {
  [loggedIn.fulfilled]: (state, action) => {
    // console.log('EL ACTION PAYLOAD',action.payload )
    SecureStore.setItemAsync("token", action.payload.token);
    state.user = action.payload.user;
  },
  [loggedOut.fulfilled]: (state, action) => {
    SecureStore.deleteItemAsync("token", action.payload.token);
  },
});
