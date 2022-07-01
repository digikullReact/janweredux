import { createSlice } from '@reduxjs/toolkit'

// gives you access to action and reducer at same place

const initialState = {
  values: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    addTodo:(state,action)=>{
      // action object contains the payload that is coming from the frontend 

      state.values.push(action.payload)

    }


 
  },
})

// Action creators are generated for each case reducer function
export const { addTodo } = counterSlice.actions

export default counterSlice.reducer