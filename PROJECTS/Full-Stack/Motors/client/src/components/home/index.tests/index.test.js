
import React from 'react';
import renderer from 'react-test-renderer';
import About from '../About';
import Home from '../Home';

describe('Html Should not change', () => {
  it('About component should be correct', () => {
    const component = renderer.create(<About />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Home component should be correct', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});
