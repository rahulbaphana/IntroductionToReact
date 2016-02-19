import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from './components/homePage.jsx';
import Authors from './components/authors/authorsPage.jsx';
import About from './components/about/aboutPage.jsx';

var AllRoutes = React.createClass({
  render: function() {
    return (
      <Router history={hashHistory}>
         <Route path="/" component={Home}/>
         <Route path="/authors" component={Authors}/>
         <Route path="/about" component={About}/>
      </Router>
    );
  }
});

module.exports = AllRoutes;
