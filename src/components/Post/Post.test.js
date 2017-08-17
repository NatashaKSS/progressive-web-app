import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Post from './Post';

test('<Post /> should render as expected', () => {
  const component = shallow(<Post match={{ params: { id: "mock_001" }}} />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
