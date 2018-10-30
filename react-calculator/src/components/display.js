import React from 'react';
import '../index.css'

//Display the calculator value received from App 
const Display = (props) => (
    <div className='calculator-display'>
        {props.output}
    </div>
)

export default Display