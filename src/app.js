import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, BrowserHistory } from 'react-router-dom';

import App from './components/App.jsx';

render((
  <BrowserRouter history={BrowserHistory}>
    <App />
  </BrowserRouter>

), document.getElementById('app'));
