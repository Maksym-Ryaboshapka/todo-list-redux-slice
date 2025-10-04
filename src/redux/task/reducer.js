import {v4 as uuid} from "uuid";
import {createReducer} from "@reduxjs/toolkit";
import {addTask, toggleTask, removeTask} from "./action";

const initalState = [
  { id: uuid(), text: "Task1", done: false },
  { id: uuid(), text: "Task2", done: false },
  { id: uuid(), text: "Task3", done: false },
];

// export const taskReducer = (state = initalState, action) => {
//   switch (action.type) {
//     case ADD_TASK:
//       return [...state, action.payload];
//     case REMOVE_TASK:
//       return [...state].filter(task => task.id !== action.payload);
//     case TOGGLE_TASK:
//       return [...state].map(task => {
//         if (task.id === action.payload) {
//           return action.payload;
//         } else {
//           return task;
//         }
//       });
//     default:
//       return state;
//   }
// };

export const taskReducer = createReducer(initalState, (builder) => {
  builder.addCase(addTask, (state, action) => {
    state.push(action.payload);
  }).addCase(toggleTask, (state, action) => {
    return [...state].map(task => {
      if (task.id === action.payload) {
        return action.payload;
      } else {
        return task;
      }
    });
  }).addCase(removeTask, (state, action) => {
    return [...state].filter(task => task.id !== action.payload);
  });
});