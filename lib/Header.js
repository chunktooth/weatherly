import React, { Component } from 'react';
import Search from './Search';
import PropTypes from 'prop-types';
import '../styles/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header">
        <h1 className="current-location">{this.props.location}</h1>
        <Search 
        searchClass="header-search"
        updateWeather={this.props.updateWeather}
        error={this.props.error} />
      </div>
    );
  }
}

Header.propTypes = {
  location: PropTypes.string,
  // date: PropTypes.string
};

export default Header;
