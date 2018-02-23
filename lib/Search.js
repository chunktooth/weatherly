import React, { Component } from 'react';
import '../styles/Search.css';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      location: ''
    }
  }

  render() {
    return (
      <div>
        <input value={ location }
               className="location-input" 
               placeholder="Enter City,State or Zip Cope"
               onChange={ (event) => this.setState({ location: event.target.value }) }
               onKeyDown={ (event) => this.submitOnEnter(event) } />
        <button onClick= { () => this.submitLocation() }
                disabled={ !location }>Search
        </button>
      </div>
    );
  }
}

export default Search;