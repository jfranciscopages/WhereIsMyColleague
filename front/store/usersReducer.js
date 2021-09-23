import {
    createAction,
    createReducer,
    createAsyncThunk,
} from "@reduxjs/toolkit";

export const setUsers = createAction("SET_USERS");

export const deleteUser = createAction('DELETE_USER')

const usersReducer = createReducer([], {
    [setUsers]: (state, { payload: users }) => {
        return users;
    },
    [deleteUser]: (state, { payload: users }) => {
        return state.filter((user) => user.id !== users);
    }
});

export default usersReducer;
