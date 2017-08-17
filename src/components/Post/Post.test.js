import React from 'react';
import { shallow } from 'enzyme';

import Post from './Post';

describe('<Post />', () => {
  test('<Post /> should render as expected', () => {
    const component = shallow(<Post match={{ params: { id: "010" }}} />);
    expect(component.find(Post));
  });

  test('<Post /> should render ID not found as props.match is null', () => {
    const component = shallow(<Post match={ null } />);
    expect(component.contains("Sorry, the post with this ID was not found!")).toBe(true);
  });

  test('<Post /> should render ID not found as props.match.params is null', () => {
    const component = shallow(<Post match={{ params: null }} />);
    expect(component.contains("Sorry, the post with this ID was not found!")).toBe(true);
  });

  test('<Post /> should render ID not found if no post retrieved', () => {
    const component = shallow(<Post match={{ params: { id: null }}} />);
    expect(component.contains("Sorry, the post with this ID was not found!")).toBe(true);
  })

  test('<Post /> should render ID not found as there is no post with this id', () => {
    const component = shallow(<Post match={{ params: { id: "does_not_exist_001" }}} />);
    expect(component.contains("Sorry, the post with this ID was not found!")).toBe(true);
  });

});
