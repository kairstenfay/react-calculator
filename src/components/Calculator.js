import React, { Component } from 'react';
import Clear from '../components/Clear';
import Equals from '../components/Equals';
import actions from '../actions/calculatorActions';
const CONSTANTS = require('../constants.js');

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 0,
            current: false,
            storage: false,
            operator: false,
        };
        this.clearState = this.clearState.bind(this);
        this.displayNumber = this.displayNumber.bind(this);
        this.doMath = this.doMath.bind(this);
        this.equals = this.equals.bind(this);
        this.determineEquation = this.determineEquation.bind(this);
    }

    /**
     * Used in Clear component
     */
    clearState() {
        this.setState({
            display: 0,
            current: false,
            storage: false,
            operator: false
        })
    }

    /**
     * Used in Equals component
     * @param e
     */
    equals(e) {
        if (this.state.operator && this.state.operator !== 'equals') {
            this.doMath(e);
        }
    }

    displayNumber(e) {
        if (e.target.id === 'decimal' && this.state.current.toString().includes('.')) {
            return;
        }

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
     * Determines which function to use among addition, multiplication, subtraction, and division
     * based on the given event and the current stored operator in state.
     *
     * @param e
     * @returns {*}
     */
    determineEquation(e) {
        let solve;
        if (this.state.operator === 'equals') {
            this.setState({
                operator: e.target.id,
            });
            solve = CONSTANTS.equations[e.target.id];
        } else {
            solve = CONSTANTS.equations[this.state.operator];
        }
        return solve;
    }

    /**
     * Assumes the targeted button is a math operator (e.g. +, -, *, or /)
     * @param e
     */
    doMath(e) {
        if (!this.state.operator) {  // move to storage
            this.setState({
                operator: e.target.id,
                storage: this.state.current,
                current: false
            });
        } else {  // do math on existing stored data
            if (!this.state.current) {  // just store the new operator
                this.setState({
                    operator: e.target.id,
                });
                return;
            }

            let solve = this.determineEquation(e);
            let updatedStorage = solve(this.state.storage, this.state.current);

            this.setState({
                storage: updatedStorage,
                current: false,
                display: updatedStorage,
                operator: e.target.id,
            })
        }
    }

    render() {

        return (
            <div id="calculator">
                <div id="display">
                    {this.state.display}
                </div>

                <div id="buttons">
                    {actions.buildOperatorButtons(this.doMath)}
                    <Equals eventHandler={this.equals} />
                    {actions.buildNumberButtons(this.displayNumber)}
                    <Clear eventHandler={this.clearState} />
                </div>
            </div>
        );
    }
}
