import $ from 'jquery';
import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/homePage.jsx';
import Authors from './components/authors/authorsPage.jsx';
import About from './components/about/aboutPage.jsx';
import Header from './components/common/header.jsx';
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render((
                  <div>
                  <Header/>
                   <Router history={hashHistory}>
                      <Route path="/" component={Home}/>
                      <Route path="/authors" component={Authors}/>
                      <Route path="/about" component={About}/>
                   </Router>
                   </div>
), document.getElementById('app'));
