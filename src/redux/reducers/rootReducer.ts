import { combineReducers } from "@reduxjs/toolkit";
import admin from "./adminSlice";

const rootReducer = combineReducers({
  admin,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
