import React from 'react';
import {Link} from 'react-router';

var Header = React.createClass({
	render: function() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						Pluralsight
					</Link>
					<ul className="nav navbar-nav">
						<li><Link to="/home">Home</Link></li>
						<li><Link to="/authors">Authors</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>
				</div>
			</nav>
		);
	}
});

module.exports = Header;
