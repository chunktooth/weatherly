import React, { Component } from 'react';
import Search from './Search';
import PropTypes from 'prop-types';
import '../styles/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.location}</h1>
        <h1>{this.props.date}</h1>
        <Search updateWeather={this.props.updateWeather} />
      </div>
    );
  }
}

Header.propTypes = {
  location: PropTypes.string,
  date: PropTypes.string
};

export default Header;
