import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather';
import { currentWeatherCleaner } from '../lib/Data';
import data from '../lib/Mockdata';

describe('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = mount(<CurrentWeather forecast={currentWeatherCleaner(data)} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should pass the correct number of props', () => {
    expect(Object.keys(wrapper.props().forecast).length).toEqual(5);
  });

  it('should render the prop temp', () => {
    expect(wrapper.props().forecast.temp).toEqual(46);
  });

  it('should render the prop condition', () => {
    expect(wrapper.props().forecast.condition).toEqual('Mostly Cloudy');
  });

  it('should render the prop high', () => {
    expect(wrapper.props().forecast.high).toEqual('51');
  });

  it('should render the prop low', () => {
    expect(wrapper.props().forecast.low).toEqual('32');
  });

  it('should render the prop summary', () => {
    expect(wrapper.props().forecast.summary).toEqual('Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.');
  });
});