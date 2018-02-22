import React, { Component } from 'react';

export default class CurrentWeather extends Component {
	constructor() {
		super();
	}

	render() {
		console.log(this.props);
		return (
			<div className="current">
				<h1 className="temp">{this.props.forecast.temp}&#8457;</h1>
				<h2>{this.props.condition}</h2>
				<div className="highlow">
					<h3>{this.props.forecast.high}&#8457;</h3>
					<h3>{this.props.forecast.low}&#8457;</h3>
				</div>
					<h4>{this.props.forecast.summary}</h4>
			</div>
		);
	}
}