import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Header from './Header';
// import retrieveWeather from './api'
// import { currentLocation, currentDate, currentWeather, sevenHour, tenDay } from './Data';
import { currentLocation, currentDate, currentWeather } from './Data';
import data from './Mockdata';

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   weatherData: null,
    //   currentWeather: '',
    //   sevenHour: '',
    //   tenDay: ''
    // }

    this.state = {
      weatherData: data,
      currentLocation: currentLocation(data),
      currentDate: currentDate(data),
      currentWeather: currentWeather(data),
      sevenHour: sevenHour(data)
    }
  }

  // componentDidMount() {
  //   retrieveWeather()
  //   .then(response => response.json())
  //   .then(data => this.setState({
  //     weatherData: data,
  //     currentLocation: currentLocation(data),
  //     currentDate: currentDate(data),
  //     currentWeather: currentWeather(data),
  //     // sevenHour: sevenHour(data),
  //     // tenDay: tenDay(data)
  //   }))
  //   .catch(error => console.log({error}))
  // }

  render() {
  	return (
  		<div>
  			<Header 
          location={this.state.currentLocation} 
          date={this.state.currentDate} />
  			<CurrentWeather 
          forecast={this.state.currentWeather} />
  		</div>
  	);
  }
}

export default App;