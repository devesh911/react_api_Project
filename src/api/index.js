import axios from 'axios'
const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';

 
   const options = {
    
    url:URL ,
    params: {
      bl_latitude: '11.847676',
      bl_longitude: '108.473209',
      tr_longitude: '109.149359',
      tr_latitude: '12.838442',
     
    },
    headers: {
      'X-RapidAPI-Key': '6089f77f6emsh5bd9aaa6121c200p1ded50jsnabab76e9d7da',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

 

export const getPlacesData = async (sw,ne) => {
  try{
      const {data:{data}} = await axios.get(URL,{
    
        url:URL ,
        params: {
          bl_latitude:sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
         
        },
        headers: {
          'X-RapidAPI-Key': '6089f77f6emsh5bd9aaa6121c200p1ded50jsnabab76e9d7da',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });
      return data;
  }
  catch(error){
    console.log(error)

  }
}

