import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../slices'
import  authSlice  from '../slices/auth'


// configureStore method actually configures your global state

export const store = configureStore({
  reducer: {
    counterSlice:counterSlice,
    authSlice:authSlice
  },
})