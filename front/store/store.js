import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { searchValueReducer } from "./searchbar/searchValue";
import { UserReducer } from "./usersReducer";

const store = configureStore({
  /* middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), */
  reducer: {
    //Aca irian los reducer de cada estado que necesitemos
    searchValue: searchValueReducer,
    users: UserReducer,
  },
});

export default store;
