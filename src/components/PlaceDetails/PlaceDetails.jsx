import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './style.js';

const PlaceDetails = ({ place ,selected , refProp}) => {
  const classes = useStyles();
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <>
      <Card elevation={6} style={{ margin: "5px" }}>


        <CardMedia
          style={{ height: 350 }}
          image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          title={place.name}
        />
        <CardContent >
          <Typography gutterBottom variant="h5">{place.name}</Typography>
          <Box display="flex" justifyContent="space-between">
            <Rating size="small" value={Number(place.rating)} readOnly />
            <Typography gutterBottom component="legend" variant="subtitle2" color="textSecondary">out of {place.num_reviews}</Typography>

          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography component="legend" variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle2" color="textSecondary">{place.price_level}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography component="legend" variant="subtitle1">Ranking</Typography>
            <Typography style={{ margin: "5px" }} gutterBottom variant="subtitle2" color="textSecondary">{place.ranking}</Typography>
          </Box>
          
          {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography className={classes.typography} gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
            trip advisor
       </Button>
          <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
            website
       </Button>
        </CardActions>



      </Card>
    </>
  );
}

export default PlaceDetails
