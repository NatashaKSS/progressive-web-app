import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostCollection from './PostCollection';

test('<PostCollection /> should render as expected', () => {
  const component = shallow(<PostCollection />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
