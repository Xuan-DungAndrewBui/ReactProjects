import React from 'react';

//Key has value that given from App
const Key = (props) => (
    <button className ={'calculator-key'} onClick={props.onClick}>
        {props.value}
    </button>
)

export default Key;