import React from 'react';
import '../index.css'

//Display the calculator value received from Calculator
const Display = (props) => (
    <div className='calculator-display' id="scrollbar">
        {props.output}
    </div>
)

export default Display