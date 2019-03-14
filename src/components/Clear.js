import React from 'react';

const Clear = function(props) {

    return (
        <div id="clear" className="button" onClick={props.eventHandler}>
            C
        </div>
    );
};

export default Clear;
