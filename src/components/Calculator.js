import React, { Component } from 'react';
import Operand from '../components/Operand';
import Button from '../components/Button';
import Clear from '../components/Clear';
const CONSTANTS = require('../constants.js');

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayText: 0,
        };
        // this.eventHandler = this.eventHandler.bind(this);
    }

    render() {

        let operand_buttons = [];
        for (let i in Object.keys(CONSTANTS.operands)) {
            const op = Object.keys(CONSTANTS.operands)[i];
            operand_buttons.push(
                <Operand key={op} id={op} operand={CONSTANTS.operands[op]} />
            )
        }
        
        let number_buttons = [];
        for (let i = CONSTANTS.numbers.length - 1; i >= 0; i--) {
            number_buttons.push(
                <Button key={CONSTANTS.numbers[i]} number={i} />
            );
        }

        return (
            <div id="calculator">
                <div id="display">
                    {this.state.displayText}
                </div>

                <div id="buttons">
                    {operand_buttons}

                    <div id="equals" className="button">
                        =
                    </div>
                    {number_buttons}
                    <div id="decimal" className="button">
                        .
                    </div>
                    <Clear />
                </div>
            </div>
        );
    }

}