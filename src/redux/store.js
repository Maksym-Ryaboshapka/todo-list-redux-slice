import { createStore, combineReducers } from "redux";
import { taskReducer } from "./task/reducer";
import {filterReducer} from "./filter/reducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer);

export default store;