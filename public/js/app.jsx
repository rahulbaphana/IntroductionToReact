import React from 'react';
import Header from './components/common/header.jsx';

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
