import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './Home';

test('<Home /> should render as expected', () => {
  const component = shallow(<Home />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
