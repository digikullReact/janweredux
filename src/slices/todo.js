import { createSlice } from "@reduxjs/toolkit";


const initialState={
    todos:[],
    
}




const todoSlice=createSlice({

    name:"todo",
    initialState:initialState,
    reducers:{

// Actually be passing the actions that modify the state

addTodo:(state,action)=>{



    //action.payloar contains the data coming from your frontend 

    state.todos.push(action.payload)

}
,// Create a action that deletes todo from the array and call it from frontend

    }



})

export const {addTodo} = todoSlice.actions;  // these are called by the frontend 

export default todoSlice.reducer;  // reducer is more of in state management