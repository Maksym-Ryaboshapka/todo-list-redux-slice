export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const addTask = (text) => {
  return { type: ADD_TASK, preload: text };
};

export const toggleTask = (id) => {
  return { type: TOGGLE_TASK, preload: id };
};

export const removeTask = (id) => {
  return { type: REMOVE_TASK, preload: id };
};
