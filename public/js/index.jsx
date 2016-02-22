import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './app.jsx';
import Home from './components/homePage.jsx';
import Authors from './components/authors/authorsPage.jsx';
import About from './components/about/aboutPage.jsx';

render((
  <Router history={hashHistory}>
     <Route path="/" component={App}>
       <IndexRoute component={Home}/>
       <Route path="/home" component={Home}/>
       <Route path="/authors" component={Authors}/>
       <Route path="/about" component={About}/>
     </Route>
  </Router>
),document.getElementById('app'));
