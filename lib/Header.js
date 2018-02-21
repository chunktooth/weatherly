import React, { Component } from 'react';
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
				<h1 className="header">LOCATION</h1>
				<h1 className="header">DATE</h1>
				<input type="text" className="header" />
			</div>
		)
	}
}

export default Header;