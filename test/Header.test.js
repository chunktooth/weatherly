import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../lib/Header';
import { currentLocation, currentDate } from '../lib/Data';
import data from '../__mocks__/Mockdata';

describe('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = mount(<Header location={currentLocation(data)}
                            updateWeather={() => {}}
                            error={ {error: false} } />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a prop updateWeather that is a function', () => {
    expect(wrapper.instance().props.updateWeather).toBeDefined();
    expect(typeof wrapper.instance().props.updateWeather).toEqual('function')
  });
  
  it('should render a prop location', () => {
    expect(wrapper.props().location).toEqual('Louisville, KY');
  });

  it('should render a prop error', () => {
    expect(wrapper.props().error).toEqual({"error": false});
  });

  it('should render an h1 element for location', () => {
     expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should render a Search component', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  });
});