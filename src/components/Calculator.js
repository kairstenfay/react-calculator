import React, { Component } from 'react';
import Button from '../components/Button';

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayText: 'default',
        };
        // this.eventHandler = this.eventHandler.bind(this);
    }

    render() {
        const constants = ["zero", "one", "two", "three", "four", "four",
            "five", "six", "seven", "eight", "nine"];

        let cells = [];
        for (let i = 0; i < constants.length; i++) {
            cells.push(
                <Button key={constants[i]} number={i} />
            );
        }

        return (
            <div id="drum-machine">
                    {cells}
                <div id="equals">
                    =
                </div>
            </div>
        );
    }

}