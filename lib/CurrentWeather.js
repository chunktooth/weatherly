import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CurrentWeather.css';

const CurrentWeather = (props) => {
  return (
    <div className="Current">
      <div className="info-row">
        <p className="high">{props.forecast.high}&deg;F</p>
        <p className="low">{props.forecast.low}&deg;F</p>
        <h1 className="today">{props.date}</h1>
      </div>
      <div>
        <h1 className="temp">{props.forecast.temp}&deg;F</h1>
        <h1 className="condition">{props.forecast.condition}</h1>
      </div>
      <h2 className="summary">{props.forecast.summary}</h2>
    </div>
  );
};

CurrentWeather.propTypes = {
  date: PropTypes.object,
  forecast: PropTypes.object
};

export default CurrentWeather;
