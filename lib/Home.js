import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';
import '../styles/Home.css';

const Home = ({ updateWeather, error }) => {
  return (
    <div className="Home">
      <h1>Welcome to Weathrly !</h1>
      <Search 
				searchClass="home-search"
				updateWeather={updateWeather} 
				error={error} />
    </div>
  );
};

Home.propTypes = {
  updateWeather: PropTypes.func,
  error: PropTypes.bool
};

export default Home;