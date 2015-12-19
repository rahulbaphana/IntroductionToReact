import React from 'react';

var RetroBoard = React.createClass({

    getInitialState: function() {
        return {
            lanes: []
        }
    },

    createALane: function() {
        var lane = {title: this.refs.laneName.value};
        var lanes = this.state.lanes;
        lanes.push(lane);
        this.setState({
            lanes: lanes
        });
    },

    render: function () {
        return (
            <div>
                <input type="text" ref="laneName" className="lane-name"/>
                <button className="create-lane" onClick={this.createALane}>Add Lane</button>
                {
                    this.state.lanes.map((lane) => {
                        return <div className="lane-title" key={lane.title}>{lane.title}</div>
                    })
                }
            </div>
        );
    }
});

module.exports = RetroBoard;