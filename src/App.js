import  React,{useState,useEffect} from 'react';
import {CssBaseline,Grid} from "@material-ui/core"
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import {getPlacesData,getWeatherData} from './api'
const App = () => {
const [places,setPlaces] = useState([]);
const [coordinates,setCoordinates] = useState({});
const [weather,setWeather] = useState({});
const [bounds,setBounds] = useState({});
const [ChildClick,setChildClick] = useState();
const [loading,setLoading] = useState(false);
const [type, setType] = useState('restaurants');
const [rating, setRating] = useState();
const [filteredPlaces, setfilteredPlaces] = useState([]);
useEffect(() => {
  navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
    setCoordinates({ lat: latitude, lng: longitude });
    console.log("my location",latitude,longitude)
  });
}, []);

  useEffect(()=>{
    if (bounds.ne && bounds.sw){
    setLoading(true)
    getWeatherData(coordinates.lat, coordinates.lng)
    .then((data) => setWeather(data));
    getPlacesData(type,bounds.sw,bounds.ne)
    .then((data)=>{
     setPlaces(data?.filter((places)=>places.name&&places.num_reviews>0)); 
     setfilteredPlaces([])
     setLoading(false)
    })}
  
  },[type,bounds])
 
  useEffect(()=>{
    setfilteredPlaces(places.filter((places)=>places.rating>= rating))
  },[rating])

  return (
    <>
  <CssBaseline/>
  <Header setCoordinates={setCoordinates}/>
  <Grid container spacing={3} style={{width:'100%'}}>
    <Grid item xs={12} md={4}>
     <List 
     places={filteredPlaces.length ? filteredPlaces : places} 
     ChildClick={ChildClick} 
     loading={loading}
     type={type}
     setType={setType}
     rating={rating}
     setRating = {setRating}
     />
    </Grid>
    <Grid  item xs={12} md={8}>
       <Map
       setCoordinates = {setCoordinates}
       setBounds = {setBounds}
       coordinates = {coordinates}
       places={filteredPlaces.length ? filteredPlaces : places}
       setChildClick = {setChildClick}
       weather = {weather}
       />
    </Grid>
  </Grid>
  
    </>
  );
}

export default App
