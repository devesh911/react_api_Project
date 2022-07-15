import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const List = ({places,ChildClick,loading,type, setType,rating, setRating}) => {

  const classes = useStyles();
 
  // const places = [places.name];
  console.log({ChildClick})
  const [elRefs,setElrefs] = useState([])
 
  useEffect(()=>{
    setElrefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));

},[places])


  return (
    
    <div className={classes.container}>
      
      <Typography variant="h4"> Restraunts,hotels and attractions</Typography>
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) :(<>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => { setType(e.target.value) }}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => { setRating(e.target.value) }}>
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl> 
       <Grid sapcing={10} className={classes.list}>
        {places?.map((places,i)=>(
          <Grid ref={elRefs[i]} key={i} item xs={12}>
              <PlaceDetails 
              place={places} 
              selected = {Number(ChildClick)===i}
              refProp = {elRefs[i]}
              />
          </Grid>
        ))}
      </Grid>
      </>)}
          
    

    </div>
  );
}

export default List;