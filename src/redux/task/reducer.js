import {v4 as uuid} from "uuid";
import {ADD_TASK, REMOVE_TASK, TOGGLE_TASK} from "./action";

// const initalState = {
//   tasks: [
//     { id: uuid(), text: "Task1", done: false },
//     { id: uuid(), text: "Task2", done: false },
//     { id: uuid(), text: "Task3", done: false },
//   ],
// };

const initalState = [
  { id: uuid(), text: "Task1", done: false },
  { id: uuid(), text: "Task2", done: false },
  { id: uuid(), text: "Task3", done: false },
];

export const taskReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case REMOVE_TASK:
      return [...state].filter(task => task.id !== action.payload);
    case TOGGLE_TASK:
      return [...state].map(task => {
        if (task.id === action.payload) {
          return action.payload;
        } else {
          return task;
        }
      });
    default:
      return state;
  }
};
