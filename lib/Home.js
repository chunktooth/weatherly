import React from 'react';
import Search from './Search';
import '../styles/Home.css';

const Home = (props) => {
  return (
    <div className="Home">
      <h1>Welcome to Weathrly !</h1>
      <Search 
      	searchClass="home-search"
      	updateWeather={props.updateWeather} 
      	error={props.error} />
    </div>
  );
}

export default Home;