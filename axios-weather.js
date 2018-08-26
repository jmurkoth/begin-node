const axios=require('axios');
const config=require('./config');
const requesturl=config.weatherUrl;
const apiKey=config.weatherKey;

getWeather=(latitude, longitude)=>{
 return axios.get(`${requesturl}/${apiKey}/${latitude},${longitude}`).then((resp)=>{
    if(resp.statusCode=="400")
    {
        throw new Error("Bad request")
    }
    else{
        return {currentTemperature:resp.data.currently.temperature, currentSummary: resp.data.currently.summary};
    }
 }).catch((e)=>{
    console.log(e);
 });
};

module.exports = {
    getWeather
}
