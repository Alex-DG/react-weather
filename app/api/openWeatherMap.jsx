var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2dd51a8d141010ef300c14c286807527&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location); // encode properly for the browser
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else {
        return res.data.main.temp; // return temp
      }
    },function(err){
      //throw new Error(err.response.data.message);
      throw new Error("Error: Unable to fetch weather for that location");
    });
  }
}
