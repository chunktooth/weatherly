import React, { Component } from 'react';
import PropTypes from 'prop-type';
import '../styles/Header.css';

class Header extends Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.location}</h1>
        <h1>{this.props.date}</h1>
        <input type="text" />
      </div>
    );
  }
}

export default Header;

Header.propTypes = {
  location: PropTypes.string,
  date: PropTypes.date
};