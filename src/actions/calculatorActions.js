import Button from '../components/Button';
import Operator from '../components/Operator';
import React from 'react';
const CONSTANTS = require('../constants.js');


/**
 * @returns {Array}
 */
function buildNumberButtons(displayNumber) {
    let number_buttons = [];
    let numbers = Object.keys(CONSTANTS.numbers);
    for (let i in numbers) {
        let num = numbers[i];
        number_buttons.push(
            <Button key={num} text={num} number={CONSTANTS.numbers[num]}
                    eventHandler={displayNumber} />
        );
    }
    return number_buttons;
}

/**
 * @returns {Array}
 */
function buildOperatorButtons(doMath) {
    let operand_buttons = [];
    for (let i in Object.keys(CONSTANTS.operands)) {
        const op = Object.keys(CONSTANTS.operands)[i];
        operand_buttons.push(
            <Operator key={op} text={op} operand={CONSTANTS.operands[op]}
                      eventHandler={doMath} />
        )
    }
    return operand_buttons;
}


export default {buildNumberButtons, buildOperatorButtons}