jest.dontMock('../js/retro-board.jsx');
jest.dontMock('../js/lane.jsx');
jest.dontMock('material-ui/lib/paper')

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var RetroBoard = require('../js/retro-board.jsx');

describe('RetroBoard', () => {

    it('should create a lane', () => {
        //given
        var board = TestUtils.renderIntoDocument(<RetroBoard />);

        //when
        var input = TestUtils.findRenderedDOMComponentWithClass(board, "lane-name");
        input.value = "My Lane";
        var createLaneButton = TestUtils.findRenderedDOMComponentWithClass(board, "create-lane");
        TestUtils.Simulate.click(createLaneButton);

        //then
        var laneTitle = TestUtils.findRenderedDOMComponentWithClass(board, "lane-title");
        expect(createLaneButton.textContent).toBe("Add Lane");
        expect(laneTitle.textContent).toBe("My Lane");
    });

});