import {createReducer} from "@reduxjs/toolkit";
import {filterTasks} from "./action";

const initalState = "";

// export const filterReducer = (state = initalState, action) => {
//   switch (action.type) {
//     case FILTER_TASKS:
//       return action.payload;
//
//     default:
//       return state;
//   }
// };

export const filterReducer = createReducer(initalState, builder => {
  builder.addCase(filterTasks, (state, action) => {
    return action.payload;
  });
});