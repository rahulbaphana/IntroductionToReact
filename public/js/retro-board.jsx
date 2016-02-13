import React from 'react';
import Lane from './lane.jsx';

var RetroBoard = React.createClass({

    getInitialState: function () {
        return {
            lanes: []
        }
    },

    createALane: function () {
        var lane = {title: this.refs.laneName.value};
        var lanes = this.state.lanes;
        lanes.push(lane);
        this.refs.laneName.value = '';
        this.setState({
            lanes: lanes
        });
    },

    render: function () {
        return (
            <div>

                {
                    this.state.lanes.map((lane) => {
                        return (
                                <Lane lane={lane} key={lane.title}/>
                        );
                    })
                }
                <input type="text" ref="laneName" className="lane-name"/>
                <button className="create-lane" onClick={this.createALane}>Add Lane</button>
            </div>
        );
    }
});

module.exports = RetroBoard;