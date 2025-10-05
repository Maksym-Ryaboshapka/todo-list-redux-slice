import {createSlice} from "@reduxjs/toolkit";

const initialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterTasks: (state, action) => {
      return action.payload;
    }
  }
});

export const {filterTasks} = filterSlice.actions;
export default filterSlice.reducer;