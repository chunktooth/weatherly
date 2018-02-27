import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/TenDay';
import { tenDayCleaner } from '../lib/Data';
import data from '../__mocks__/Mockdata';

describe('TenDay', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = mount(<TenDay tenDayData={tenDayCleaner(data)} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render Card component', () => {
    expect(wrapper.find('Card').length).toEqual(10);
  });

  it('should pass the correct number of props for each day', () => {
    expect(Object.keys(wrapper.props().tenDayData[0]).length).toEqual(4);
  });

  it('should render the prop date', () => {
    expect(wrapper.props().tenDayData[0].date).toEqual('Wed');
  });

  it('should render the prop img', () => {
    expect(wrapper.props().tenDayData[0].img).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
  });

  it('should render the prop high', () => {
    expect(wrapper.props().tenDayData[0].high).toEqual('51');
  });

  it('should render the prop low', () => {
    expect(wrapper.props().tenDayData[0].low).toEqual('32');
  });
});