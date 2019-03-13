import React, { Component } from 'react';

export default class Operand extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="button operand" id={this.props.op}>
                {this.props.operand}
            </div>
        );
    }

}