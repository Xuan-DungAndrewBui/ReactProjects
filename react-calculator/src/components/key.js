import React from 'react';
import '../index.css'

//Key has value given from Calculator
const Key = (props) => (
    <button className={`calculator-key-${props.colour} ${props.className}`} onClick={props.onClick}>
        {props.value}
    </button>
)

export default Key;