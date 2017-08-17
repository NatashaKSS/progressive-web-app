import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter, BrowserHistory } from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';
import PostCollection from '../PostCollection/PostCollection';
import Main from './Main';

describe('<Main />', () => {
  test('<Main /> should render <Home /> correctly at route \'/\'', () => {
    const component = mount(
      <MemoryRouter initialEntries={[ '/' ]} initialIndex={0}>
        <Main />
      </MemoryRouter>
    );
    expect(component.find(Home).length).toBe(1);
  });

  test('<Main /> should render <About /> correctly at route \'/about\'', () => {
    const component = mount(
      <MemoryRouter initialEntries={[ '/about' ]} initialIndex={0}>
        <Main />
      </MemoryRouter>
    );
    expect(component.find(About).length).toBe(1);
  });

  test('<Main /> should render <PostCollection /> correctly at route \'/posts\'', () => {
    const component = mount(
      <MemoryRouter initialEntries={[ '/posts' ]} initialIndex={0}>
        <Main />
      </MemoryRouter>
    );
    expect(component.find(PostCollection).length).toBe(1);
  });

});
