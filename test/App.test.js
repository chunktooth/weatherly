import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/App';

describe('App', () => {
  let wrapper;

	beforeEach(() => {
		localStorage.clear();
		wrapper = shallow(<App />);
	});

	it('should exist', () => {
		expect(wrapper).toBeDefined();
	});

	it('Should have a default state', () => {
		expect(wrapper.state()).toEqual(
		{
			currentLocation: '',
      currentDate: {},
      currentWeather: {},
      sevenHour: [],
      tenDay: [],
      error: false
		})
	});

	it('should have componentDidMount and updateWeather methods', () => {
    expect(typeof wrapper.instance().componentDidMount).toEqual('function');
    expect(typeof wrapper.instance().updateWeather).toEqual('function');
  });

	it('Should render the Home component if there is not a location in local storage', () => {
		expect(wrapper.find('Home').length).toEqual(1);
	});

	it('Should render the Header, CurrentWeather, SevenHour, and TenDay components when localStorage has a location', () => {
		localStorage.setItem('location', 'Denver, CO')
		
		wrapper = shallow(<App />)
		expect(wrapper.find('Header').length).toEqual(1);
		expect(wrapper.find('CurrentWeather').length).toEqual(1);
		expect(wrapper.find('SevenHour').length).toEqual(1);
		expect(wrapper.find('TenDay').length).toEqual(1);
	});
});
