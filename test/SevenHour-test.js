import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';
import Data from '../lib/Data'
import data from '../lib/Mockdata';

const sevenHour = (data) => {
	const sevenHourWeather = data.hourly_forecast.map(time => {
	  return { 
	    hour: time.FCTTIME.civil,
	    img: time.icon_url,
	    temp: time.temp.english
	  };
	});

	return sevenHourWeather.slice(0, 7);
};

describe('sevenHour shallow', () => {

	beforeEach(() => {
		let wrapper;
		let 
		wrapper = shallow(<SevenHour sevenHourdata={sevenHour(data)} />)
	});
	
	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('should ')
		expect(wrapper).
})

