import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { searchValueReducer } from "./searchbar/searchValue";
import { UserReducer } from "./usersReducer";
import { BranchReducer } from "./BranchReducer";
import { ProfileReducer } from "./profileReducer";
import { searchBranchReducer } from "./searchBranch/searchBranchReducer";

const store = configureStore({
  /* middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),  */
  reducer: {
    //Aca irian los reducer de cada estado que necesitemos
    profile: ProfileReducer,
    searchValue: searchValueReducer,
    users: UserReducer,
    branches: BranchReducer,
    searchBranch: searchBranchReducer,
  },
});

export default store;
