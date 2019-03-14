import React, { Component } from 'react';
import Operand from '../components/Operand';
import Button from '../components/Button';
import Clear from '../components/Clear';
import Equals from '../components/Equals';
const CONSTANTS = require('../constants.js');

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 0,
            current: false,
            storage: false,
            operand: false,
        };
        this.clearState = this.clearState.bind(this);
        this.displayNumber = this.displayNumber.bind(this);
        this.buildNumberButtons = this.buildNumberButtons.bind(this);
        this.buildOperandButtons = this.buildOperandButtons.bind(this);
        this.doMath = this.doMath.bind(this);
        this.equals = this.equals.bind(this);
    }

    /**
     * Used in Clear component
     */
    clearState() {
        this.setState({
            display: 0,
            current: false,
            storage: false,
            operand: false
        })
    }

    /**
     * Used in Equals component
     * @param e
     */
    equals(e) {
        this.doMath(e);
    }

    displayNumber(e) {
        // handle start case
        let numberPressed = CONSTANTS.numbers[e.target.id];

        if (!this.state.current) {
            this.setState({
                current: numberPressed,
                display: numberPressed
            })

        } else {
            let updatedValue = "" + this.state.current + numberPressed;
            this.setState({
                current: updatedValue,
                display: updatedValue
            });
        }
    }

    /**
     * Assumes the targeted button is a math operand (e.g. +, -, *, or /)
     * @param e
     */
    doMath(e) {
        console.log(this.state);

        if (!this.state.operand) {  // move to storage
            this.setState({
                operand: e.target.id,
                storage: this.state.current,
                current: false
            });
        } else {  // do math on existing stored data
            console.log(this.state.operand);
            let solve = CONSTANTS.equations[this.state.operand];

            console.log(solve);
            console.log(this.state.storage + " " + this.state.operand + " " + this.state.current);
            console.log(solve(this.state.storage, this.state.current));
            let updatedStorage = solve(this.state.storage, this.state.current);
            this.setState({
                storage: updatedStorage,
                current: false,
                display: updatedStorage,
                operand: e.target.id,
            })

        }
    }

    /**
     * Move to actions
     * @returns {Array}
     *
     * TODO make more readable
     */
     buildNumberButtons() {
        let number_buttons = [];
        for (let i in Object.keys(CONSTANTS.numbers)) {
            let num = Object.keys(CONSTANTS.numbers)[i];
            number_buttons.push(
                <Button key={num} text={num} number={CONSTANTS.numbers[num]}
                        eventHandler={this.displayNumber} />
            );
        }
        return number_buttons;
    }

    /**
     * Move to actions
     * @returns {Array}
     */
    buildOperandButtons() {
        let operand_buttons = [];
        for (let i in Object.keys(CONSTANTS.operands)) {
            const op = Object.keys(CONSTANTS.operands)[i];
            operand_buttons.push(
                <Operand key={op} text={op} operand={CONSTANTS.operands[op]}
                         eventHandler={this.doMath} />
            )
        }
        return operand_buttons;
    }

    render() {

        return (
            <div id="calculator">
                <div id="display">
                    {this.state.display}
                </div>

                <div id="buttons">
                    {this.buildOperandButtons()}
                    <Equals eventHandler={this.equals} />
                    {this.buildNumberButtons()}
                    <div id="decimal" className="button">
                        .
                    </div>
                    <Clear eventHandler={this.clearState} />
                </div>
            </div>
        );
    }

}


