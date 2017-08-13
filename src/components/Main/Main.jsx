import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import PostCollection from '../PostCollection/PostCollection.jsx';

import styles from './Main.css';

const Main = ({children}) => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route path='/posts' component={PostCollection}/>
      </Switch>
    </main>
  );
}

export default Main;
