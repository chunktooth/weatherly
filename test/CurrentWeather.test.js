import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/CurrentWeather';
import { currentWeatherCleaner, currentDate } from '../lib/Data';
import data from '../__mocks__/Mockdata';

describe('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = mount(<CurrentWeather forecast={currentWeatherCleaner(data)}
                                    date={currentDate(data)}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should pass the correct number of forecast props', () => {
    expect(Object.keys(wrapper.props().forecast).length).toEqual(5);
  });

  it('should pass the correct number of date props', () => {
    expect(Object.keys(wrapper.props().date).length).toEqual(2);
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

  it('should render the prop today', () => {
    expect(wrapper.props().date.today).toEqual('Wed, 20 Dec 2017');
  });

  it('should render the prop time', () => {
    expect(wrapper.props().date.time).toEqual(' 11:27');
  });

  it('should render an h1 element with the correct temperature', () => {
    expect(wrapper.find('h1').first().text().includes('46')).toEqual(true);
  });

  it('should render a p element with the correct high temperature', () => {
    expect(wrapper.find('p').first().text().includes('51')).toEqual(true);
  });

  it('should render h2 element with the complete summary', () => {
    expect(wrapper.find('h2').first().text().includes('Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.')).toEqual(true);
  });

});