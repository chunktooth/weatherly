import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Search';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<Search />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should initially have a set state', () => {
    expect(wrapper.state()).toEqual(
      {
        location: '',
        suggestions: []
      });
  });

  it('should have submitLocation and submitOnEnter methods', () => {
    expect(typeof wrapper.instance().submitLocation).toEqual('function');
    expect(typeof wrapper.instance().submitOnEnter).toEqual('function');
  });

  it('should render an input field', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should render a button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should render an error message if an invalid location has been submitted', () => {
    const wrapper = shallow(<Search error={true} />);

    expect(wrapper.find('.error-text').length).toEqual(1)
  });

  it('should call submitLocation when the button is clicked', () => {
    wrapper.instance().submitLocation = jest.fn();

    const submitButton = wrapper.find('button');

    submitButton.simulate('click');

    expect(wrapper.instance().submitLocation).toHaveBeenCalledTimes(1);
  });

  it('should call submitLocation and update state when button is clicked', () => {
    wrapper.instance().submitLocation = jest.fn();

    const locationInput = wrapper.find('input').first();
    const submitButton = wrapper.find('button');

    locationInput.simulate('change', { target: { value: 'Denver, CO' }});

    submitButton.simulate('click');

    expect(wrapper.instance().submitLocation).toHaveBeenCalled();
    expect(wrapper.state()).toEqual(
      { 
        location: 'Denver, CO', 
        suggestions: [ 'Denver, CO' ] 
      });
  });

  it('should make suggestions based on input', () => {
    const locationInput = wrapper.find('input').first();

    locationInput.simulate('change', { target: { value: 'Den'}})

    expect(wrapper.find('option').length).toEqual(2);
    expect(wrapper.state()).toEqual(
      { 
        location: 'Den', 
        suggestions: [ 'Denver, CO', 'Denton, TX' ] 
      });
  });
});