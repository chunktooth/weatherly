import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';
import '../styles/Header.css';

const Header = ({ location, updateWeather, error }) => {
  return (
    <div className="Header">
        <h1 className="current-location">{location}</h1>
        <Search 
          searchClass="header-search"
          updateWeather={updateWeather}
          error={error} />
      </div>
  );
}

Header.propTypes = {
  location: PropTypes.string
};

export default Header;
