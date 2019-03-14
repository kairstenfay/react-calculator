import React from 'react';

const Button = function(props) {

    return (
        <div className="button" id={props.text} onClick={props.eventHandler}>
            {props.number}
        </div>
    );
};

export default Button;