import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostSelection from './PostSelection';

test('<PostSelection /> should render as expected', () => {
  const component = shallow(<PostSelection />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
