import {FILTER_TASKS} from "./action";

const initalState = "";

export const filterReducer = (state = initalState, action) => {
  switch (action.type) {
    case FILTER_TASKS:
      return action.payload;

    default:
      return state;
  }
};