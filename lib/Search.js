import React, { Component } from 'react';
import '../styles/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    }

    this.submitOnEnter = this.submitOnEnter.bind(this);
    this.submitLocation = this.submitLocation.bind(this);
  }

  submitLocation() {
    this.props.updateWeather(this.state.location);
  }

  submitOnEnter(event) {
    if(event.keyCode === 13) { 
      this.props.updateWeather(this.state.location);
    }
  }

  render() {
    return (
      <div>
        <input value={ this.state.location }
               className="location-input" 
               placeholder="Enter City,State or Zip Cope"
               onChange={ (event) => this.setState( {location: event.target.value }) }
               onKeyDown={ (event) => this.submitOnEnter(event) } />
        <button onClick= { () => this.submitLocation() }
                disabled={ !location }>Search
        </button>
      </div>
    );
  }
}

export default Search;