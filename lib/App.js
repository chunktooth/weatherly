import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
import Header from './Header';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Home from './Home';
import retrieveWeather from './api';
import { currentLocation, currentDate, currentWeatherCleaner, 
  sevenHourCleaner, tenDayCleaner } from './Data';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentLocation: '',
      currentDate: {},
      currentWeather: {},
      sevenHour: [],
      tenDay: [],
      error: false
    };

    this.updateWeather = this.updateWeather.bind(this);
  }

  componentDidMount() {
    const storedLocation = localStorage.getItem('location');
    if (storedLocation) {
      this.updateWeather(storedLocation);
    }
  }

  updateWeather(location) {
    retrieveWeather(location)
    .then(response => response.json())
    .then(data => {
      if (data.forecast) {
        localStorage.setItem('location', location)
        this.setState({
          currentLocation: currentLocation(data),
          currentDate: currentDate(data),
          currentWeather: currentWeatherCleaner(data),
          sevenHour: sevenHourCleaner(data),
          tenDay: tenDayCleaner(data),
          error: false
        })
      } else {
        this.setState({ error: true });
      }
    })
    .catch(error => console.log({error}));
  }  
  
  render() {
    return (
      <div className="App">
        {localStorage.getItem('location') &&
          <div className="wrapper">
            <Header 
              location={this.state.currentLocation} 
              updateWeather={this.updateWeather} 
              error={this.state.error} />
            <CurrentWeather 
              date={this.state.currentDate}
              forecast={this.state.currentWeather} />
            <SevenHour
              sevenHourData={this.state.sevenHour} />
            <TenDay
              tenDayData={this.state.tenDay} />
          </div>      
        }
        {!localStorage.getItem('location') &&
          <Home 
            updateWeather={this.updateWeather}
            error={this.state.error} />
        } 
      </div>
    );
  }
}

export default App;