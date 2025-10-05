import { combineReducers } from "redux";
import {configureStore} from "@reduxjs/toolkit";
// import { taskReducer } from "./task/reducer";
import taskReducer from "./taksSlice";
// import {filterReducer} from "./filter/reducer";
import filterReducer from "./filterSlice";

const rootReducer = combineReducers({
  tasks: taskReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;