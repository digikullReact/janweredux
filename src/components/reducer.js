export const reducer=(state,action)=>{

    //debugger;
  
    // reducers are something where you have to write the state management logic
  
  
      // Write the logic to modify the stae that we declared above
  
      switch (action.type){
  
          case "INCREMENT":
             
              return {...state,value:state.value+1}
  
              case "DECREMENT":
             
                return {...state,value:state.value-1}   
                
                case "INPUT":
             
                  return {...state,input:action.payload}  
                  
               case "INCREMENTBYVALUE":  
               return {...state,value:parseInt(state.value)+parseInt(state.input)}     
          
          default :
            return state    
  
      }
  
  }
  