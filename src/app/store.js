import { configureStore } from "@reduxjs/toolkit";
import rocketReducer from "./reducers/rocketSlice";

export const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});
