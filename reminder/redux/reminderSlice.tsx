import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [{date:"",reminder:[]}],
};

export const reminderSlice :any= createSlice({
  name: "reminder",
  initialState,
  reducers: {
    reminderAdd: (state: any, action: any) => {
      state.data.push(action.payload);
      // console.log("first",state.data.push(action.payload))
    },
  },
});
export const { reminderAdd } = reminderSlice.actions;

export default reminderSlice.reducer;
