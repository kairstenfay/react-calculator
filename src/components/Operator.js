import React, { Component } from 'react';

export default class Operator extends Component {


    render() {

        return (
            <div id={this.props.text} className="button operand"
                 onClick={this.props.eventHandler}>
                {this.props.operand}
            </div>
        );
    }

}