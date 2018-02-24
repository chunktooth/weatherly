import React from 'React';
import Search from './Search';

const Welcome = (props) => {
	return (
		<div>
			<h1>Welcome to Weathrly</h1>
			<Search updateWeather={props.updateWeather} />
		</div>
	);
}

export default Welcome;