import {createAction} from "@reduxjs/toolkit";

export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export const addTask = createAction(ADD_TASK);
export const toggleTask = createAction(TOGGLE_TASK);
export const removeTask = createAction(REMOVE_TASK);
