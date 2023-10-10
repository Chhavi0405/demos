import { createSlice } from "@reduxjs/toolkit";

const initialState={
   dateData: " "
}

export const dateSlice = createSlice({
    name:'dated',
    initialState,
    reducers:{
        dated:(state:any,action:any)=>{
            
            state.date = action.payload;
        },

    }
})
export const {dated} = dateSlice.actions;

export default dateSlice.reducer