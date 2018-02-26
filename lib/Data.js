const currentLocation = (data) => {
  const location = data.current_observation.display_location.full;
  
  return location;
};

const currentDate = (data) => {
  const timedate = {}

  timedate.today = data.current_observation.observation_time_rfc822.slice(0, 16);
  timedate.time = data.current_observation.observation_time_rfc822.slice(16, 26);
  
  return timedate;
};

const currentWeatherCleaner = (data) => {
  const weatherInfo = {};

  weatherInfo.temp = Math.floor(data.current_observation.temp_f);
  weatherInfo.high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  weatherInfo.low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  weatherInfo.summary = data.forecast.txt_forecast.forecastday[0].fcttext;
  weatherInfo.condition = data.current_observation.weather;

  return weatherInfo;
};

const sevenHourCleaner = (data) => {
  const sevenHourWeather = data.hourly_forecast.map(time => {
    return { 
      hour: time.FCTTIME.civil,
      img: time.icon_url,
      temp: time.temp.english
    };
  });

  return sevenHourWeather.slice(0, 7);
};

const tenDayCleaner = (data) => {
  const tenDayWeather = data.forecast.simpleforecast.forecastday.map(day => {
    return {
      date: day.date.weekday.slice(0, 3),
      img: day.icon_url,
      high: day.high.fahrenheit,
      low: day.low.fahrenheit
    };
  });

  return tenDayWeather;
};

export {
  currentLocation,
  currentDate,
  currentWeatherCleaner,
  sevenHourCleaner,
  tenDayCleaner
};