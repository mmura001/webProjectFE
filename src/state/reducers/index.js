import { combineReducers } from "@reduxjs/toolkit";
import homeSlice from "./home.reducer";
import searchSlice from "./search.reducer";

const appReducer = combineReducers({
  homeSlice: homeSlice,
  searchSlice,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
