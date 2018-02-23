import Key from './apikey';

const root = "http://api.wunderground.com";

const retrieveWeather = function(location) {
  return fetch(`${root}/api/${Key}/geolookup/conditions/forecast10day/hourly/q/${location}.json`);
};

export default retrieveWeather;