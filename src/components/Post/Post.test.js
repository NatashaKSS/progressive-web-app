import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Post from './Post';

describe('<Post />', () => {
  test('<Post /> should render as expected', () => {
    const component = shallow(<Post match={{ params: { id: "010" }}} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  test('<Post /> should render ID not found as there is no post with this id', () => {
    const component = shallow(<Post match={{ params: { id: "does_not_exist_001" }}} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });

  test('<Post /> should render ID not found if no post retrieved', () => {
    const component = shallow(<Post match={{ params: { id: null }}} />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  })
});
