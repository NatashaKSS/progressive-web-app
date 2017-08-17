import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import About from './About';

test('<About /> should render as expected', () => {
  const component = shallow(<About />);
  const tree = toJson(component);
  // expect(component.contains("About")).toBe(true);
  expect(tree).toMatchSnapshot();
});
