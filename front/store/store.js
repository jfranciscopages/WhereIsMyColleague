import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { usersReducer } from "./usersReducer";
import empresasReducer from "./empresasReducer";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    //Aca irian los reducer de cada estado que necesitemos
    users: usersReducer,
    empresas: empresasReducer,
  },
});

export default store;
