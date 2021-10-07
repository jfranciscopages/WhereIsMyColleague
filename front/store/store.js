import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { searchValueReducer, searchWorkspaceReducer } from "./searchbar/searchValue";
import { UserReducer } from "./usersReducer";
import { BranchReducer } from "./BranchReducer";
import { ProfileReducer } from "./profileReducer";
import { searchBranchReducer } from "./searchBranch/searchBranchReducer";
import { FloorReducer, FloorIdReducer } from "./floorReducer";
import { workspacesByFloorReducer } from "./searchbar/searchWorkSpaceByFloor"

const store = configureStore({
  /* middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),  */
  reducer: {
    //Aca irian los reducer de cada estado que necesitemos
    profile: ProfileReducer,
    searchValue: searchValueReducer,
    workspaceValue: searchWorkspaceReducer,
    users: UserReducer,
    branches: BranchReducer,
    searchBranch: searchBranchReducer,
    selectedFloor: FloorReducer,
    selectedFloorId: FloorIdReducer,
    WorkSpacesById: workspacesByFloorReducer,
  },
});

export default store;
