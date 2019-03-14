import React, { Component } from 'react';

export default class Equals extends Component {

    render() {

        return (
            <div id="equals" className="button" onClick={this.props.eventHandler}>
                =
            </div>
        );
    }

}
