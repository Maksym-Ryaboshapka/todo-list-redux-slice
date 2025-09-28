export const FILTER_TASKS = "FILTER_TASKS";

export const filterTasks = (keyword) => {
  return { type: FILTER_TASKS, payload: keyword };
};
