import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import {addTodo} from "./slices";
import Addtodo from './components/Addtodo';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {

  //useSelector
  //useDispatch Hook

  return (
    <div className="App">

<Routes>
      <Route path="/" element={<Addtodo />}/>
       
       </Routes>

    
    
    </div>
  )
}

export default App
