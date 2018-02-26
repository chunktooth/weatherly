import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../lib/Home';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<Home />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render an h1 element', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should render a Search component', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  });
});
