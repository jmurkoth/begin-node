const weather = require('./axios-weather');
const address = require('./axios-address');
const yargs = require('yargs');

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


address.getGeoCode(argv.a).then(addresp=>{
    console.log(`***** Address Info*****`);
    console.log(JSON.stringify(addresp, null, 2));
    console.log(`***********************`);
    weather.getWeather(addresp.latitude, addresp.longitude).then((weatherresp)=>{
    console.log(`***** Weather Info*****`);
    console.log(JSON.stringify(weatherresp,null,2));
    console.log(`***********************`);
  }).catch((e)=>{
    console.log('WEATHER ERROR:' + e);
  });
}).catch((e)=>{
    console.log('ADDRESS Error :' + e.message);
});

