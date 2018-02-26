import React from 'react';
import Search from './Search';

const Home = ({ updateWeather, error }) => {
  return (
      <div>
          <h1>Welcome to Weathrly</h1>
          <Search 
          	updateWeather={updateWeather} 
          	error={error} />
      </div>
  );
}

export default Home;