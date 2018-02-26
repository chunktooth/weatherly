import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/Card';
import { sevenHourCleaner, tenDayCleaner } from '../lib/Data';
import data from '../lib/Mockdata';

describe('Card hour', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = mount(<Card hour={sevenHourCleaner(data)} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render seven hour cards if given hour data', () =>{
    expect(Object.keys(wrapper.props().hour).length).toEqual(7);
  });

  it('should pass the correct number of props when recieving hour data', () => {
    expect(Object.keys(wrapper.props().hour[0]).length).toEqual(3);
  });

  it('should pass the correct data to each hour card', () => {
    expect(wrapper.props().hour[0].hour).toEqual('12:00 PM');
    expect(wrapper.props().hour[0].img).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
    expect(wrapper.props().hour[0].temp).toEqual('47');
  });
});

describe('Card day', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = mount(<Card day={tenDayCleaner(data)} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render ten day cards if given day data', () =>{
    expect(Object.keys(wrapper.props().day).length).toEqual(10);
  });

  it('should pass the correct number of props when recieving day data', () => {
    expect(Object.keys(wrapper.props().day[0]).length).toEqual(4);
  });

  it('should pass the correct data to each day card', () => {
    expect(wrapper.props().day[0].date).toEqual('Wednesday');
    expect(wrapper.props().day[0].img).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
    expect(wrapper.props().day[0].high).toEqual('51');
    expect(wrapper.props().day[0].low).toEqual('32');
  });

});