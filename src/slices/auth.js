import { createSlice } from '@reduxjs/toolkit'
import { signupAction } from '../thunks/auth'

// gives you access to action and reducer at same place

const initialState = {
  something: 0,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.def += 10
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers:(builder)=>{

    builder.addCase(signupAction.fulfilled, (state, action) => {

      //  debugger;
        // in this action you will be getting the data from an api  instead
      // Add user to the state array
      state.products=action.payload.products
    })

  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions

export default authSlice.reducer