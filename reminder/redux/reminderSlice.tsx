import { createSlice } from "@reduxjs/toolkit";

const initialState={
   data:[ {text:"add reminder"}]
}

export const reminderSlice = createSlice({
    name:'reminder',
    initialState,
    reducers:{
        reminderAdd:(state:any,action:any)=>{
            const dataList ={
              
                text:action.payload
            }
            state.data.push(dataList)
        },

    }
})
export const {reminderAdd} = reminderSlice.actions;

export default reminderSlice.reducer