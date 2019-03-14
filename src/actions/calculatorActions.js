import Button from '../components/Button';
import React from 'react';
const CONSTANTS = require('../constants.js');


/**
 * Move to actions
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

export default {buildNumberButtons}