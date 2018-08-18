const yargs=require('yargs');
const webreq= require('./address-request');
const weatherReq=require('./weather');

const addressOptions = {
    describe: 'Address of interest',
    demand: true,
    alias: 'address',
    string:true
  };

const argv= yargs.options({
                     a: addressOptions
                })
                .help()
                .argv;
webreq.geoCodeAddress(argv.a,(errormessage,results)=>{
  console.log('Callback');
  if(errormessage)
  {
    console.log(errormessage);
  }
  else
  {
    console.log(`Address    : ${results.address}`);
    getWeather(results.latitude, results.longitude)
  }
});

getWeather=(latitude, longitude)=>{
  console.log(`Latitude   : ${latitude}`);
  console.log(`Longitude  : ${longitude}`);
  weatherReq.getWeather(latitude,longitude,(errorMessage, result)=>{
    if(errorMessage)
    {
      console.log(errorMessage);
    }
    else
    {
      console.log(`Temperature: ${result.currentTemperature}`);
    }
    
  });
}