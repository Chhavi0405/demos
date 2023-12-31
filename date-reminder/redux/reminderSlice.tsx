import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const reminderSlice :any= createSlice({
  name: "reminder",
  initialState,
  reducers: {
    reminderAdd: (state: any, action: any) => {
      state.data = action.payload;
      // console.log("first",state.data.push(action.payload))
    },
  },
});
export const { reminderAdd } = reminderSlice.actions;

export default reminderSlice.reducer;