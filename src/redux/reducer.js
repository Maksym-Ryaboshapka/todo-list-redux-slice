import { v4 as uuid } from "uuid";
import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK } from "./action";

const initalState = {
  tasks: [
    { id: uuid(), text: "Task1", done: false },
    { id: uuid(), text: "Task2", done: false },
    { id: uuid(), text: "Task3", done: false },
  ],
};

export const taskReducer = (state = initalState, action) => {
  // switch (action.type) {
  //   case ADD_TASK:
  //     return { ...state, tasks: [...state.tasks, { id: uuid }] };
  // }
  return state;
};
