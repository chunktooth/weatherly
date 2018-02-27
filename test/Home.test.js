import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../lib/Home';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<Home updateWeather={() => {}}
                            error={false} />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a prop updateWeather that is a function', () => {
    expect(wrapper.instance().props.updateWeather).toBeDefined();
    expect(typeof wrapper.instance().props.updateWeather).toEqual('function');
  });

  it('should have an error prop', () => {
    expect(wrapper.instance().props.error).toBeDefined();
    expect(typeof wrapper.instance().props.error).toEqual('boolean');
  });

  it('should render an h1 element', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should render a Search component', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  });
});
