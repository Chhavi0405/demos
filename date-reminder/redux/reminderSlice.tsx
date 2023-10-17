import { createSlice } from "@reduxjs/toolkit";

interface dataState {
  data: string[]
}

const initialState = {
  data: [],
}as dataState

export const reminderSlice = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    reminderAdd: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { reminderAdd } = reminderSlice.actions;

export default reminderSlice.reducer;