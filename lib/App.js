import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Header from './Header';
import retrieveWeather from './api'

class App extends Component {
  constructor() {
    super();

    this.state = {
      weatherData: []
    }
  }

  componentDidMount() {
    retrieveWeather()
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log({error}));
  }

  render() {
  	return (
  		<div>
  			<Header />
  			<CurrentWeather />
  		</div>
  	);
  }
}

export default App;