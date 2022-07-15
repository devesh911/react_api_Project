import axios from 'axios'


 

export const getPlacesData = async (type,sw,ne) => {
  try{
      const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
    
        url:URL ,
        params: {
          bl_latitude:sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
         
        },
        headers: {
          'X-RapidAPI-Key': '47c5b24b3emshc74a129441928c9p13f3fcjsn710f5525e806',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });
      return data;
  }
  catch(error){
    console.log(error)

  }
}
export const getWeatherData = async (lat,lng)=>{
  try{
    if (lat && lng) {
      const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
        params: { lat:lat, lon: lng },
        headers: {
          'x-rapidapi-key': '47c5b24b3emshc74a129441928c9p13f3fcjsn710f5525e806',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
      });

      return data;
  }
}
  catch(error){
    console.log(error)
  }

}
