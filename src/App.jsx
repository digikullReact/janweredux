import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import {addTodo} from "./slices";

function App() {
  //const [count, setCount] = useState(0)
  const [state2,setState]=useState({name:"John",age:"20"})
    const state= useSelector(state=>state.counterSlice);

    console.log(state);
    const dispatch=useDispatch();


const Handleincrement=()=>{
  dispatch(addTodo(state2));

}

const handleChange=(event)=>{

  setState(event.target.value);

}
  //useSelector
  //useDispatch Hook

  return (
    <div className="App">

      <h1>{state.def}</h1>

      <input type="text" onChange={handleChange}/>

      <button onClick={Handleincrement}>

        Increment

      </button>

      {
        state.values.map((ele,i)=>(
          <li key={i}>{ele}</li>
        ))
      }
    
    </div>
  )
}

export default App
