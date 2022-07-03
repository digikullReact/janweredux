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
import Products from './components/Products';

function App() {

  //useSelector
  //useDispatch Hook

  return (
    <div className="App">

<Routes>
      <Route path="/" element={<Addtodo />}/>

      <Route path="/products" element={<Products />}/>
       
       </Routes>

    
    
    </div>
  )
}

export default App
