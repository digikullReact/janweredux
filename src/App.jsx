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
import Books from './components/Books';
import Signup from './components/Signup';
import Login from './components/Login';
import Usereducer from './components/Usereducer';
import Showdata from './components/Showdata';

function App() {

  //useSelector
  //useDispatch Hook

  return (
    <div className="App">

<Routes>
      <Route path="/" element={<Addtodo />}/>

      <Route path="/products" element={<Products />}/>

      <Route path="/books" element={<Books />}/>
      <Route path="/signup" element={<Signup />}/>

      <Route path="/login" element={<Login />}/>

      <Route path="/reducer" element={<Usereducer />}/>

      <Route path="/show" element={<Showdata />}/>
       
       </Routes>

    
    
    </div>
  )
}

export default App
