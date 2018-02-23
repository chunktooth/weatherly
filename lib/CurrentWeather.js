import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CurrentWeather.css';

const CurrentWeather = ({ forecast }) => {
  return (
    <div className="current">
      <h1 className="temp">{forecast.temp}&#8457;</h1>
      <h2>{forecast.condition}</h2>
      <div className="highlow">
        <h3>{forecast.high}&#8457;</h3>
        <h3>{forecast.low}&#8457;</h3>
      </div>
      <h4>{forecast.summary}</h4>
    </div>
  );
};

CurrentWeather.propTypes = {
  forecast: PropTypes.object
};

export default CurrentWeather;
