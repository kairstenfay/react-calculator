import React, { Component } from 'react';
import Operand from '../components/Operand';
import Button from '../components/Button';

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayText: 0,
        };
        // this.eventHandler = this.eventHandler.bind(this);
    }

    render() {
        const constants = ["zero", "one", "two", "three", "four",
            "five", "six", "seven", "eight", "nine"];

        const operands = {add: '+', subtract: '-', multiply: '*', divide: '/'};

        let operand_buttons = [];
        for (let i in Object.keys(operands)) {
            const op = Object.keys(operands)[i];
            operand_buttons.push(
                <Operand key={op} id={op} operand={operands[op]} />
            )
        }
        
        let number_buttons = [];
        for (let i = constants.length - 1; i >= 0; i--) {
            number_buttons.push(
                <Button key={constants[i]} number={i} />
            );
        }

        return (
            <div id="calculator">
                <div id="display">
                    {this.state.displayText}
                </div>

                <div id="operands">
                    {operand_buttons}
                </div>

                <div id="number-buttons">
                    <div id="equals" className="button">
                        =
                    </div>
                    {number_buttons}
                </div>

                <div id="clear">
                    clear
                </div>
                <div id="decimal">
                    .
                </div>
            </div>
        );
    }

}