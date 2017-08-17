import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Main from './Main';

test('<Main /> should render as expected', () => {
  const component = shallow(<Main />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
