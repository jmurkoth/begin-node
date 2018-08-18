const webreq= require('request');
const config=require('./config')

const requesturl=config.addressUrl;


geoCodeAddress=(address, callback)=>{
var encodedAddress=encodeURIComponent(address);

webreq({url:`${requesturl}?address=${encodedAddress}`, json:true},(error, response, body)=>{
    // see if we have errors;
    if(response.statusCode==200)
    {
      // console.log(JSON.stringify(body,undefined,2));
        
        if(body.status==='ZERO_RESULTS')
        {
            callback('Unable to find the address',null);
            return;
        }
        if(body.status=="OVER_QERY_LIMIT")
        {
            callback('Over the query limit , please wait and try again',null);
            return; 
        }
        callback(undefined, {
            address: body.results[0].formatted_address,
            latitude:body.results[0].geometry.location.lat,
            longitude:body.results[0].geometry.location.lng
          });
   
    }else{
        callback('Unable to connect to the server',null);
           
    }
});
}

module.exports={
    geoCodeAddress
}