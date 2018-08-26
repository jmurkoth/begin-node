const axios=require('axios');
const config=require('./config');

const requesturl=config.addressUrl;


getGeoCode=(address)=>{
  var encodedAddress=encodeURIComponent(address);
 return axios.get(`${requesturl}?address=${encodedAddress}`).then((resp)=>{
      
      if(resp.status==200)
      {
        if(resp.data.status==='ZERO_RESULTS')
        {
            throw new Error('Unable to find the address');
           
        }
        if(resp.data.status=="OVER_QERY_LIMIT")
        {
            throw new Error('Over the query limit , please wait and try again');
        }
        return {
            address: resp.data.results[0].formatted_address,
            latitude:resp.data.results[0].geometry.location.lat,
            longitude:resp.data.results[0].geometry.location.lng
          }
      }
      else
      {
          throw new Error('Bad Request');
      }
  }).catch( (e)=>{
        throw e;

  });
}

module.exports={
    getGeoCode
}