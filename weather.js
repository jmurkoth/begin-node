const req=require('request');
const config=require('./config');
const requesturl=config.weatherUrl;
const apiKey=config.weatherKey;



getWeather=(latitude, longitude, callback) =>{
    req({url:`${requesturl}/${apiKey}/${latitude},${longitude}`, json:true},(error, response, body)=>{
        if(error)
        {
            callback('Unable to connect to the servers',null);
        }else if(response.statusCode=="400")
        {
            callback('Bad Weather Request .Check the request',null);
        }
       if(response.statusCode=="200" && body)
       {
         //console.log(JSON.stringify(body,null,2));
         callback(null,{currentTemperature:body.currently.temperature});
       }
       else
       {
        
       }
       

    });
 
};

//export the functionality

module.exports={
    getWeather
}