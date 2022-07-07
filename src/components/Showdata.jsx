import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { dataAction } from '../thunks/auth';





const Showdata = () => {

    const state=useSelector(state=>state.authSlice.data);

    console.log(state);

    const dispatch=useDispatch();

    useEffect(()=>{

        dispatch(dataAction());

    },[])




  return (
    <div>



    </div>
  )
}

export default Showdata