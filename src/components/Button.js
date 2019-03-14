import React, { Component } from 'react';

export default class Button extends Component {

    render() {

        return (
            <div className="button" id={this.props.text} onClick={this.props.eventHandler}>
                {this.props.number}
            </div>
        );
    }

}