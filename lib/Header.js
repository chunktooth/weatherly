import React, { Component } from 'react';
import '../styles/Header.css';

export default class Header extends Component {
	constructor() {
		super();
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