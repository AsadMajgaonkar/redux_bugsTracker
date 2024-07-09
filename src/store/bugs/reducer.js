
import { createSlice } from "@reduxjs/toolkit";

const state = [];

const slice = createSlice({
    name:"bugStore",
    initialState:state,
    reducers:{

        bugRecieved:(state, action)=>{
            return state = action.payload;
        },

        addBug:(state, action)=>{
            return state = [...state, action.payload]
        },

        removeBug:(state, action)=>{
            return state.filter(bug => bug.id != action.payload.id)
        },

        resolveBug:(state, action)=>{
            return state.map(bug => bug.id!=action.payload.id? bug : {...bug, resolved:true})
        },

        assignBug:(state, action)=>{
            return state.map( bug => bug.id!=action.payload.id ? bug : {
                ...bug, userId:action.payload.userId
            })
        }
    }
})

export const {addBug, removeBug, resolveBug, assignBug, bugRecieved} = slice.actions;
export default slice.reducer