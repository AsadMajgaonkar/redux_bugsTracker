
import { createSlice } from "@reduxjs/toolkit";

let lastIndex = 0;

const slice = createSlice({
    name:"userStore",
    initialState:[],
    reducers:{
        userAdd: (state, action)=>{
            return [...state, {
                        id:++lastIndex,
                        name: action.payload.name
                    }]
        }
    }
})

export const {userAdd} = slice.actions;
export default slice.reducer;