import React, { Component } from 'react';

export default class Operand extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id={this.props.op} className="button operand">
                {this.props.operand}
            </div>
        );
    }

}