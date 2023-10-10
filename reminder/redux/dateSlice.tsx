import { createSlice } from "@reduxjs/toolkit";

const initialState={
   dateData:""
}

export const dateSlice = createSlice({
    name:'date',
    initialState,
    reducers:{
        date:(state:any,action:any)=>{
            
            state.date = action.payload;
        },

    }
})
export const {date} = dateSlice.actions;

export default dateSlice.reducer