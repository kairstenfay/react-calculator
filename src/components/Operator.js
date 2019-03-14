import React from 'react';

const Operator = function(props) {

    return (
        <div id={props.text} className="button operand" onClick={props.eventHandler}>
            {props.operand}
        </div>
    );
};

export default Operator;