import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReminderItem {
  date: string;
  reminders: string[];
}

interface dataState {
  data: ReminderItem[];
}

const initialState = {
  data: [],
}as dataState

export const reminderSlice = createSlice({
  name: "reminder",
  initialState,
  reducers: {
    reminderAdd: (state, action:PayloadAction<ReminderItem[]>) => {
      state.data = action.payload;
    },
  },
});
export const { reminderAdd } = reminderSlice.actions;

export default reminderSlice.reducer;