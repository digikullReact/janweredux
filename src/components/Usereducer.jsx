import React,{useReducer} from 'react'

import { reducer } from './reducer';

import { initalState } from './state';
import { useForm } from "react-hook-form";



const Usereducer = () => {




// Create an input field 
//you have to change its state using the dispatch userReducer

// you have to create another button that increments the value of state by the value input in the field

  const [state,dispatch] = useReducer(reducer,initalState);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it


  const increment=()=>{
    dispatch({type:"INCREMENT"});

  }

  const decrement=()=>{
    dispatch({type:"DECREMENT"});
  }

  const handleChange=(event)=>{
    dispatch({type:"INPUT",payload:event.target.value});


  }

  const incrementByValue=()=>{
    dispatch({type:"INCREMENTBYVALUE"});

  }
  return (
    <div>
     <h1>{state.value}</h1> 

     <input type={"text"}  onChange={handleChange}/>

<button onClick={increment}>
Increment
</button>



<button onClick={decrement}>
Decrement
</button>


<button onClick={incrementByValue}>
IncrementByValue
</button>


<form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true,minLength: 20  })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired?.type=="required" && <span>This field is required</span>}
      {errors.exampleRequired?.type=="minLength" && <span>The minlength should be 20</span>}
      
      <input type="submit" />
    </form>

    </div>


 
  )
}

export default Usereducer