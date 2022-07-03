import React ,{useEffect} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { fetchProducts } from '../thunks';

import { useDispatch,useSelector } from 'react-redux';
const Products = () => {

    const dispatch=useDispatch();
    const itemData=useSelector(state=>state.todoSlice.products)


    useEffect(()=>{

        dispatch(fetchProducts());

    },[])


   

  return (
    <div style={{marginLeft:"400px"}}>
        <Box>

<Grid container spacing={2}>
<Grid item xs={3}>
</Grid>
        <Grid item xs={6}></Grid>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Grid>
    </Box>
    </div>
  )
}

export default Products