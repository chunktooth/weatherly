import React, { Component } from 'react';

export default class CurrentWeather extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="current">
				<h1 className="temp">43 &#8457;</h1>
				<h2>Partly Cloudy</h2>
				<div className="highlow">
					<h3>HIGH</h3>
					<h3>LOW</h3>
				</div>
				<div>
					<h4>DESCRIPTION</h4>
				</div>
			</div>
		);
	}
}