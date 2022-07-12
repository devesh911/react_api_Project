import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const List = () => {

  const classes = useStyles();
  const [type, setType] = useState();
  const [rating, setRating] = useState();
  const places = [
    {name:'best place'},
    {name:'best beer'},
    {name:'best indian'},
    {name:'best indian'},
    {name:'best indian'},
    {name:'best indian'},
    {name:'best indian'},
    {name:'best indian'}
  ];




  return (
    <div className={classes.container}>
      <Typography variant="h4"> Restraunts,hotels and attractions</Typography>
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
        <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container sapcing={3} className={classes.list}>
        {places?.map((places,i)=>(
          <Grid item key={i} xs={12}>
              <PlaceDetails place={places} />
          </Grid>
        ))}
      </Grid>

    </div>
  );
}

export default List;