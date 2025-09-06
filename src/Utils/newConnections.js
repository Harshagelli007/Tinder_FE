import { createSlice } from "@reduxjs/toolkit";

const newConnectionSlice = createSlice({
    name:'newConnections',
    initialState:[],
    reducers:{
        setNewConnections:(state,action)=>{
            return action.payload;
        },
        removeConnections:(state)=>{
            return null
        },
        // modifyConnections:(state,action){
        //     const data = state.filter((item)=> item.data)
        // }
    }
});


export const { setNewConnections } = newConnectionSlice.actions;

export default newConnectionSlice.reducer;
