import React from 'react'
import Paper from 'material-ui/lib/paper'

var Lane = React.createClass({
    render: function () {
        return (
            <Paper className="lanes" zDepth={2}>
                <span className="lane-title">{this.props.lane.title}</span>
            </Paper>
        );
    }
});

module.exports = Lane;
