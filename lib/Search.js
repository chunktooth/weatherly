import React, { Component } from 'react';
import cities from './cities';
import Trie from '@chunktooth/complete-me/lib/Trie';
import PropTypes from 'prop-types';
import '../styles/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      suggestions: []
    };

    this.trie = new Trie();
    this.trie.populate(cities.data);
    this.submitOnEnter = this.submitOnEnter.bind(this);
    this.submitLocation = this.submitLocation.bind(this);
  }

  submitLocation() {
    this.props.updateWeather(this.state.location);
    this.setState({location: ''});
  }

  submitOnEnter(event) {
    if (event.keyCode === 13) { 
      this.props.updateWeather(this.state.location);
      this.setState({location: ''});
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          value={ this.state.location }
          className={ this.props.searchClass } 
          placeholder="Enter City,State or Zip Cope"
          onChange={ (event) => { 
            this.setState({ 
              location: (event.target.value).charAt(0).toUpperCase() + 
                        (event.target.value).slice(1),
              suggestions: this.trie.suggest(event.target.value)
            });
          } 
          }
          onKeyDown={ (event) => this.submitOnEnter(event) }
          list="suggestions" 
          />
          <datalist id="suggestions">
            { 
            this.state.suggestions.map((suggestion, index) => {
              if (index < 5) {
                return <option key={index} value={suggestion} />;  
              }
            })
          }
        </datalist>
        <button
          onClick= { () => this.submitLocation() }
          disabled={ !this.state.location }>Search
        </button>
         {
          this.props.error &&
          <p className="error-text">The location you entered is unavailable</p>
          }
      </div>
    );
  }
}

Search.propTypes = {
  updateWeather: PropTypes.func,
  error: PropTypes.bool,
  searchClass: PropTypes.string
};

export default Search;