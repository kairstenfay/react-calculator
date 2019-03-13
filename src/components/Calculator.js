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
            immediateExecutionLogic: 0
        };
        this.clearState = this.clearState.bind(this);
        this.displayNumber = this.displayNumber.bind(this);
        this.buildNumberButtons = this.buildNumberButtons.bind(this);

    }

    clearState() {
        this.setState({
            displayText: 0,
            immediateExecutionLogic: 0
        })
    }

    displayNumber(e) {
        console.log('clicked');
        this.setState({
            displayText: CONSTANTS.numbers.indexOf(e.target.id)
        })
    }

    /**
     * Move to actions
     * @returns {Array}
     */
     buildNumberButtons() {
        let number_buttons = [];
        for (let i = CONSTANTS.numbers.length - 1; i >= 0; i--) {
            number_buttons.push(
                <Button key={CONSTANTS.numbers[i]} text={CONSTANTS.numbers[i]} number={i} eventHandler={this.displayNumber} />
            );
        }
        return number_buttons;
    }

    render() {

        return (
            <div id="calculator">
                <div id="display">
                    {this.state.displayText}
                </div>

                <div id="buttons">
                    {build_operand_buttons()}

                    <div id="equals" className="button">
                        =
                    </div>
                    {this.buildNumberButtons()}
                    <div id="decimal" className="button">
                        .
                    </div>
                    <Clear onClick={this.clearState} />
                </div>
            </div>
        );
    }

}

/**
 *
 * @returns {Array}
 */
function build_operand_buttons() {
    let operand_buttons = [];
    for (let i in Object.keys(CONSTANTS.operands)) {
        const op = Object.keys(CONSTANTS.operands)[i];
        operand_buttons.push(
            <Operand key={op} id={op} operand={CONSTANTS.operands[op]} />
        )
    }
    return operand_buttons;
}

