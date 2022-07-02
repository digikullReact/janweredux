import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../slices'
import  authSlice  from '../slices/auth'
import todoSlice from "../slices/todo";


// configureStore method actually configures your global state

export const store = configureStore({
  reducer: {
    counterSlice:counterSlice,
    authSlice:authSlice,
    todoSlice:todoSlice
  },
})