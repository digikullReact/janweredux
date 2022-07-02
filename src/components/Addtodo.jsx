import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { addTodo } from '../slices/todo';
import uuid from 'react-uuid'


import { useDispatch,useSelector } from 'react-redux';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const Addtodo = () => {

  const [state,setState]=useState({
    id:"",
    task:""
  });


  const rows=useSelector(state=>state.todoSlice.todos);


  
  const dispatch=useDispatch();

  const handleClick=()=>{
    // Action would be dispatched

    dispatch(addTodo(state));


  }

  const handleChange=(event)=>{
    // Action would be dispatched

   setState({...state,[event.target.name]:event.target.value,id:uuid()});


  }


    const columns = [
        { field: 'id', headerName: 'ID', width: 270 },
        { field: 'task', headerName: 'Task', width: 130 },
    
   
        {field:'name' ,headerName:'Delete', renderCell:(params)=>{
     
          return <Button variant="contained" onClick={()=>clickDelete(params.row.id)}>
         Delete
          </Button>
  
        },width: 230}
      ];


 



  return (
    <div style={{marginTop:"100px"}}>

<Box>

<Grid container spacing={2}>
<Grid item xs={3}>
</Grid>
        <Grid item xs={6}>
            <h1>Add Todos</h1>
          <Item>

          <TextField name="task" id="outlined-basic" label="Todo" variant="outlined" onChange={handleChange}/> <br/>

          <Button  style={{marginTop:"20px"}} variant="contained" onClick={handleClick}>Add Item</Button>


          </Item>
        </Grid>

        <Grid item xs={3}>
</Grid>
 
      </Grid>


     
    </Box>

    <Box>

<Grid container spacing={2}>
<Grid item xs={3}>
</Grid>
        <Grid item xs={6}>
        
          <Item>

          <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>

        


          </Item>
        </Grid>

        <Grid item xs={3}>
</Grid>
 
      </Grid>


     
    </Box>




    </div>
  )
}

export default Addtodo