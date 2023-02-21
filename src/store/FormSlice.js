import { createSlice } from "@reduxjs/toolkit";

export const FormSlice = createSlice({
    name:"FormData",
    initialState:{
        value : {}
    },
    reducers:{
        add : (state,action) => {
            console.log(state,action);
            state.value[action.payload.formName] = {...action.payload.value};
        }

    }
    
});



export const {add} = FormSlice.actions;

export default FormSlice.reducer;
