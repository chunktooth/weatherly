import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';
import '../styles/Header.css';

const Header = ({ location, date, updateWeather, error }) => {
  return (
    <div className="container">
      <h1>{location}</h1>
      <h1>{date}</h1>
      <Search updateWeather={updateWeather} 
              error={error} />
    </div>
  );
}


Header.propTypes = {
  location: PropTypes.string,
  date: PropTypes.string
};

export default Header;
