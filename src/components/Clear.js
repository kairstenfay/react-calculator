import React, { Component } from 'react';

export default class Operand extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id="clear" className="button" onClick={this.props.eventHandler}>
                c
            </div>
        );
    }

}
