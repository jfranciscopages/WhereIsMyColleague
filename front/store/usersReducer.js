import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setUsers = createAsyncThunk("USERS", (value) => {
  return axios
    .get(`http://localhost:3001/api/users/search/${value}`)
    .then((r) => {
      console.log(`dasddasd`, r.data);
      return r.data;
    });
});

export const usersReducer = createReducer([], {
  [setUsers.fulfilled]: (state, action) => action.payload,
});

export const deleteUser = createAction("DELETE_USER");

/* const usersReducer = createReducer([], {
    [setUsers]: (state, { payload: users}) => {
        return users;
    },
    [deleteUser]: (state, { payload: users }) => {
        return state.filter((user) => user.id !== users);
    }
}); */
/* const registerReducer = createReducer([], {
  [setUsers.fulfilled]: (state, action) => action.payload,
}); */
