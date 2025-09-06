import { createSlice } from "@reduxjs/toolkit";


const userFeed = createSlice({
    name:'userFeed',
    initialState:[],
    reducers:{
        setUserFeed:(state,action)=>{
            return action.payload;
        },
        removeUserFromFeed:(state,action)=>{
            return state.filter((item)=> item._id !== action.payload._id);
        },
        removeAllUsersFeed:(state)=>{
            return [];
        }
    }
});


export const {setUserFeed,removeUserFromFeed} = userFeed.actions;
export default userFeed.reducer;