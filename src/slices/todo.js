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

deleteTodo:(state,action)=>{

    state.todos=state.todos.filter(ele=>ele.id!=action.payload);

},

// Create an action  for editing 
// Populate the input field in frontend 


editTodo:(state,action)=>{

    // Apply some logic of editing 

}

    }



})

export const {addTodo,deleteTodo} = todoSlice.actions;  // these are called by the frontend 

export default todoSlice.reducer;  // reducer is more of in state management