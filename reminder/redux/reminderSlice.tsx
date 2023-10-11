import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [{ dated: "",text: [] }],
};

export const reminderSlice = createSlice({
    name:'reminder',
    initialState,
    reducers:{
        reminderAdd:(state:any,action:any)=>{
            // const dataList ={
            //     dates:action.payload.dates,
            //     text:action.payload.text
                
            // }
            // state.data.push(dataList);
            // console.log( state.data.push(dataList),"state")
            
            // state.data.push({ text: action.payload.text });
            state.data.push(action.payload);
        },

    }
})
export const {reminderAdd} = reminderSlice.actions;

export default reminderSlice.reducer