import {createAction} from "@reduxjs/toolkit";

export const FILTER_TASKS = "FILTER_TASKS";

// export const filterTasks = (keyword) => {
//   return { type: FILTER_TASKS, payload: keyword };
// };

export const filterTasks = createAction(FILTER_TASKS);