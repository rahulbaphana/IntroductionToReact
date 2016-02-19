import $ from 'jquery';
import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/homePage.jsx';
import Authors from './components/authors/authorsPage.jsx';
import About from './components/about/aboutPage.jsx';
import Header from './components/common/header.jsx';

var App = React.createClass({
	render: function() {
		var Child;

		switch(this.props.route){
			case 'about': Child = About; break;
			case 'authors': Child = Authors; break;
			default : Child = Home;
		}

		return (
			<div>
				<Header/>
				<Child/>
			</div>
		);
	}
});

function render(){
	var routeText = window.location.hash.substr(1);
	ReactDOM.render(<App route={routeText}/>, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();
