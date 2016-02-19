import $ from 'jquery';
import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/header.jsx';
import AllRoutes from './routes.js';
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render((
                  <div>
                     <Header/>
                     <AllRoutes/>
                   </div>
), document.getElementById('app'));
