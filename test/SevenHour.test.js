import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/SevenHour';
import { sevenHourCleaner } from '../lib/Data';
import data from '../__mocks__/Mockdata';

describe('SevenHour', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = mount(<SevenHour sevenHourData={sevenHourCleaner(data)} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render Card component', () => {
    expect(wrapper.find('Card').length).toEqual(7);
  });

  it('should pass the correct number of props for each hour', () => {
    expect(Object.keys(wrapper.props().sevenHourData[0]).length).toEqual(3);
  });

  it('should render the prop hour', () => {
    expect(wrapper.props().sevenHourData[0].hour).toEqual('12:00 PM');
  });

  it('should render the prop img', () => {
    expect(wrapper.props().sevenHourData[0].img).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
  });

  it('should render the prop temp', () => {
    expect(wrapper.props().sevenHourData[0].temp).toEqual('47');
  });

});