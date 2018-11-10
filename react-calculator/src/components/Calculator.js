import React from 'react';
import Display from './display';
import Key from './key';
import '../index.css';


// calculate expression based on the operator that is provided
const calcExpression = {
    '+': function(firstValue, secondValue ) { return firstValue+secondValue },
    '-': function(firstValue, secondValue ) { return firstValue-secondValue },
    '*': function(firstValue, secondValue ) { return firstValue*secondValue },
    "/": function(firstValue, secondValue ) { return firstValue/secondValue },
    "=": function(firstValue, secondValue ) { return secondValue}
};

//Calculator takes care of calculating logic
export default class Calculator extends React.Component {
    constructor(props) {
        super(props);

        //Initial state of the calculator
        this.state = {
            operator: '',
            displayValue: '0',
            firstValue: null,
            needOperator: true,
        }
    }

    //Set the current operator that is being used
    setOperation(operator) {
        const firstValue = this.state.firstValue;
        const value = parseFloat(this.state.displayValue);

        //Sets first value if it hasn't been set yet, otherwise calculators previous expression before moving onto next 
        if (firstValue === null) {
            this.setState({
                firstValue: value,
            });
        } else if (this.state.operator)  {
                const result = calcExpression[this.state.operator](firstValue,value);
                this.setState({
                    firstValue: result,
                    displayValue: String(result),
                });
            }
        
        this.setState({
            operator: operator,
            needOperator: true,
        });
    } 

    //Calculate expression when clicking equals 
    setEquals() {
        //Grab variables needed to make calculation
        const operator = this.state.operator;
        const firstValue = this.state.firstValue;
        const value = parseFloat(this.state.displayValue);

        //go to key of operator and use 
        const result = calcExpression[operator](firstValue,value);

        //Update calculator display
        this.setState({
            firstValue: result,
            displayValue: String(result),
            needOperator: true,
            operator: '='
        });
    }

    //Basic functionality of inputting a number into the display
    addInput(number) {
        const needOperator = this.state.needOperator;
        
        //Determine if number input is for a new number or to write on an existing number
        if (needOperator) {
            this.setState({
                displayValue: String(number),
                needOperator: false
            });
        } else {
            const combine = String(this.state.displayValue) + String(number); 
            this.setState({
                displayValue: combine,
            });
        }           
    }
    
    //Clearing the calculator to initial state
    clearAll() {
        this.setState({
            operator: '',
            displayValue: '0',
            firstValue: null,
            needOperator: true,
        })
    }

    //Divide the current display by 100
    setPercent() {
        const value = parseFloat(this.state.displayValue);
        const percentValue = value/100;
        this.setState({
            displayValue: percentValue.toString(),
        })
    }
    
    //Toggle between positive and negative
    changeSign() {
        this.setState({
            displayValue: this.state.displayValue * -1
        })
    }

    //Alerts user that scientific mode is only for display
    scientificInput() {
        alert("Scientific mode is display only!");
    }

    //Add decimal point to the current value
    decimalInput() {
        const displayValue = this.state.displayValue;
        if (displayValue.indexOf('.') > -1) {
            return null;
        } else {
            this.setState({
                displayValue: displayValue + '.',
            })
        }
    }

    scientificCalculator(colour, displayValue) {
        return(
            <div>
                <div>
                    <Display output={displayValue}/>
                </div>
                <div className={"scientificCalculator"}>
                    <div><Key className={"function-"+colour} colour={colour} value={'('} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={')'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'mc'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'m+'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'m-'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'mr'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'C'} onClick={ () => this.clearAll()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'+/-'} onClick={ () => this.changeSign()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'%'} onClick={ () => this.setPercent()}/></div>
                    <div><Key className="operator" value={'÷'} colour={colour} onClick={() => this.setOperation('/')}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'2nd'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'x^2'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'x^3'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'x^y'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'e^x'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'10^x'} onClick={() => this.scientificInput()}/></div>
                    <div><Key value={'7'} colour={colour} onClick={() => this.addInput(7)} /></div>
                    <div><Key value={'8'} colour={colour} onClick={() => this.addInput(8)} /></div>
                    <div><Key value={'9'} colour={colour} onClick={() => this.addInput(9)} /></div>
                    <div><Key className="operator" value={'x'} colour={colour} onClick={() => this.setOperation('*')}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'1/x'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'sqrt'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'cbrt'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'root'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'ln'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'log10'} onClick={() => this.scientificInput()}/></div>
                    <div><Key value={'4'} colour={colour} onClick={() => this.addInput(4)} /></div>
                    <div><Key value={'5'} colour={colour} onClick={() => this.addInput(5)} /></div>
                    <div><Key value={'6'} colour={colour} onClick={() => this.addInput(6)} /></div>
                    <div><Key className="operator" value={'-'} colour={colour} onClick={() => this.setOperation('-')}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'x!'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'sin'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'cos'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'tan'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'e'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'EE'} onClick={() => this.scientificInput()}/></div>
                    <div><Key value={'1'} colour={colour} onClick={() => this.addInput(1)} /></div>
                    <div><Key value={'2'} colour={colour} onClick={() => this.addInput(2)} /></div>
                    <div><Key value={'3'} colour={colour} onClick={() => this.addInput(3)} /></div>
                    <div><Key className="operator" value={'+'} colour={colour} onClick={() => this.setOperation('+')}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'Rad'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'sinh'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'cosh'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'tanh'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'pi'} onClick={() => this.scientificInput()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'Rand'} onClick={() => this.scientificInput()}/></div>
                    <div className={"zeroKeyScientific"}><Key className="key-0"  value={'0'} colour={colour} onClick={() => this.addInput(0)}/></div>
                    <div><Key value={'.'} colour={colour} onClick={() => this.decimalInput()}/></div>
                    <div><Key className="operator" value={'='} colour={colour} onClick={() => this.setOperation('=')}/></div>
                </div>
            </div>
        );
    }

    basicCalculator(colour, displayValue) {
        return( 
            <div>
                <div>
                    <Display output={displayValue}/>
                </div>
                <div className={"basicCalculator"}>
                    <div><Key className={"function-"+colour} colour={colour} value={'C'} onClick={ () => this.clearAll()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'+/-'} onClick={ () => this.changeSign()}/></div>
                    <div><Key className={"function-"+colour} colour={colour} value={'%'} onClick={ () => this.setPercent()}/></div>
                    <div><Key className="operator" value={'÷'} colour={colour} onClick={() => this.setOperation('/')}/></div>
                    <div><Key value={'7'} colour={colour} onClick={() => this.addInput(7)} /></div>
                    <div><Key value={'8'} colour={colour} onClick={() => this.addInput(8)} /></div>
                    <div><Key value={'9'} colour={colour} onClick={() => this.addInput(9)} /></div>
                    <div><Key className="operator" value={'x'} colour={colour} onClick={() => this.setOperation('*')}/></div>
                    <div><Key value={'4'} colour={colour} onClick={() => this.addInput(4)} /></div>
                    <div><Key value={'5'} colour={colour} onClick={() => this.addInput(5)} /></div>
                    <div><Key value={'6'} colour={colour} onClick={() => this.addInput(6)} /></div>
                    <div><Key className="operator" value={'-'} colour={colour} onClick={() => this.setOperation('-')}/></div>
                    <div><Key value={'1'} colour={colour} onClick={() => this.addInput(1)} /></div>
                    <div><Key value={'2'} colour={colour} onClick={() => this.addInput(2)} /></div>
                    <div><Key value={'3'} colour={colour} onClick={() => this.addInput(3)} /></div>
                    <div><Key className="operator" value={'+'} colour={colour} onClick={() => this.setOperation('+')}/></div>
                    <div className={"zeroKey"}><Key className="key-0"  value={'0'} colour={colour} onClick={() => this.addInput(0)}/></div>
                    <div><Key value={'.'} colour={colour} onClick={() => this.decimalInput()}/></div>
                    <div><Key className="operator" value={'='} colour={colour} onClick={() => this.setOperation('=')}/></div>
                </div>
            </div>
        );
    }

    render() {
        if (this.props.show === false) {
            return null;
        }
        const colour = this.props.colour;
        const displayValue= this.state.displayValue;
        const scientific = this.props.scientific;

        if (!scientific) {
            return (this.basicCalculator(colour, displayValue))
        } else {
            return (this.scientificCalculator(colour, displayValue))
        }
    }
}
