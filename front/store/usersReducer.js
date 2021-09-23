import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setUsersByTitle = createAsyncThunk("USERSBYTITLE", (value) => {
  return axios
    .get(`http://localhost:3001/api/users/search/${value}`)
    .then((r) => {
      return r.data;
    });
});

export const usersByTitleReducer = createReducer([], {
  [setUsersByTitle.fulfilled]: (state, action) => action.payload,
});

export const setUsers = createAsyncThunk("USERS", () => {
  return axios
    .get(`http://localhost:3001/api/users/getAll`)
    .then((r) => {
      return r.data;
    });
});
export const setUsersReducer = createReducer([], {
  [setUsers.fulfilled]: (state, action) => action.payload,
});

/* export const deleteUser = createAction("DELETE_USER"); */

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
