import React, { Component } from 'react';

export default class Operand extends Component {

    render() {

        return (
            <div id="clear" className="button" onClick={this.props.eventHandler}>
                C
            </div>
        );
    }

}
