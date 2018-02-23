import React from 'react';
import '../styles/CurrentWeather.css';

const CurrentWeather = (props) => {
	return (
		<div className="current">
			<h1 className="temp">{props.forecast.temp}&#8457;</h1>
			<h2>{props.condition}</h2>
			<div className="highlow">
				<h3>{props.forecast.high}&#8457;</h3>
				<h3>{props.forecast.low}&#8457;</h3>
			</div>
			<h4>{props.forecast.summary}</h4>
		</div>
		);
}


export default CurrentWeather;