import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";

const initialState = [
  { id: uuid(), text: "Task1", done: false },
  { id: uuid(), text: "Task2", done: false },
  { id: uuid(), text: "Task3", done: false },
];


const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    toggleTask: (state, action) => {
      return [...state].map(task => {
        if (task.id === action.payload) {
          return action.payload;
        } else {
          return task;
        }
      });
    },
    removeTask: (state, action) => {
      return [...state].filter(task => task.id !== action.payload);
    }
  }
});

export const {addTask, toggleTask, removeTask} = tasksSlice.actions;
export default tasksSlice.reducer;