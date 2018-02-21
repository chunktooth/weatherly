import Key from './apikey';

const root = "http://api.wunderground.com"

const retrieveWeather = function() {
  return fetch(`${root}/api/${Key}/geolookup/conditions/forecast10day/hourly/q/IA/Cedar_Rapids.json`)
}

export default retrieveWeather;