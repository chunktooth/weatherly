import React from 'react';
import Search from './Search';

const Home = (props) => {
  return (
      <div>
          <h1>Welcome to Weathrly</h1>
          <Search 
          	updateWeather={props.updateWeather} 
          	error={props.error} />
      </div>
  );
}

export default Home;