import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Header from './Header';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Home from './Home';
import retrieveWeather from './api';
import { currentLocation, currentDate, currentWeatherData, 
  sevenHour, tenDay } from './Data';


class App extends Component {
  constructor() {
    super();

    this.state = {
      weatherData: null,
      currentLocation: '',
      currentDate: '',
      currentWeather: {},
      sevenHour: [],
      tenDay: []
    };

    this.updateWeather = this.updateWeather.bind(this);
  }

  componentDidMount() {
    const storedLocation = localStorage.getItem('location');
    if(storedLocation) {
      this.updateWeather(storedLocation);
    }
  }

  updateWeather(location) {
    retrieveWeather(location)
    .then(response => response.json())
    .then(data => this.setState({
      weatherData: data,
      currentLocation: currentLocation(data),
      currentDate: currentDate(data),
      currentWeather: currentWeatherData(data),
      sevenHour: sevenHour(data),
      tenDay: tenDay(data)
    }))
    .catch(error => console.log({error}));
    localStorage.setItem('location', location)
  }

  render() {
    return (
      <div>
        {localStorage.getItem('location') &&
          <div>
            <Header 
              location={this.state.currentLocation} 
              date={this.state.currentDate} 
              updateWeather={this.updateWeather} />
            <CurrentWeather forecast={this.state.currentWeather} />
            <SevenHour sevenHourData={this.state.sevenHour} />
            <TenDay tenDayData={this.state.tenDay} />
          </div>
        }

        {!localStorage.getItem('location') &&
          <Home updateWeather={this.updateWeather} />
        } 
      </div>
    );
  }
}

export default App;