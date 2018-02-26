import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CurrentWeather.css';

const CurrentWeather = ({ forecast, date }) => {
  return (
    <div className="Current"> 
      <div className="time-temp">
        <div className="temp-condition">
          <h1 className="temp">{forecast.temp}&deg;F</h1>
          <h1 className="condition">{forecast.condition}</h1>
        </div>  
        <div className="today-time">
          <h1 className="today">{date.today}</h1>
          <h1 className="time">{date.time}</h1>
        </div>
      </div>

      <div>
        <p className="high">{forecast.high}&deg;F</p>
        <p className="low">{forecast.low}&deg;F</p>
      </div>
      <h2 className="summary">{forecast.summary}</h2>
    </div>
  );
};

CurrentWeather.propTypes = {
  date: PropTypes.object,
  forecast: PropTypes.object
};

export default CurrentWeather;