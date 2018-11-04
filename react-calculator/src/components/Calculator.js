import React from 'react';
import Display from './display';
import Key from './key';
import '../index.css';

const calcExpression = {
    '+': function(firstValue, secondValue ) { return firstValue+secondValue },
    '-': function(firstValue, secondValue ) { return firstValue-secondValue },
    '*': function(firstValue, secondValue ) { return firstValue*secondValue },
    "/": function(firstValue, secondValue ) { return firstValue/secondValue },
    "=": function(firstValue, secondValue ) { return secondValue}
};

//App takes care of logic
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operator: '',
            displayValue: '0',
            firstValue: null,
            needOperator: true,
        }
    }

    setOperation(operator) {
        const firstValue = this.state.firstValue;
        const value = parseFloat(this.state.displayValue);

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

    setEquals() {
        const operator = this.state.operator;
        const firstValue = this.state.firstValue;
        const value = parseFloat(this.state.displayValue);
        const result = calcExpression[operator](firstValue,value);
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
    
    clearAll() {
        this.setState({
            operator: '',
            displayValue: '0',
            firstValue: null,
            needOperator: true,
        })
    }

    clearEntry() {
        this.setState({
            displayValue:'0',
            needOperator: true,
        })
    }
    
    setPercent() {
        const value = parseFloat(this.state.displayValue);
        const percentValue = value/100;
        this.setState({
            displayValue: percentValue.toString(),
        })
    }
    
    changeSign() {
        this.setState({
            displayValue: this.state.displayValue * -1
        })
    }

    scientificInput() {
        alert("Scientific mode is demo only!");
    }

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

    //Break the calculator into display and keys
    render() {
        if (this.props.show === false) {
            return null;
        }
        const colour = this.props.colour;
        const displayValue = this.state.displayValue;
        const scientific = this.props.scientific;

        if (scientific) {
            return (
                <table cellSpacing="0" className="calculator">
                <tbody>
                <tr>
                    <td colSpan="10">
                        <Display output={displayValue} />
                    </td>
                </tr>
                <tr>
                    <td><Key className={"function-"+colour} colour={colour} value={'('} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={')'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'mc'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'m+'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'m-'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'mr'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'C'} onClick={() => this.clearAll()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'+/-'} onClick={() => this.changeSign()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'%'} onClick={() => this.setPercent()}/></td>
                    <td><Key className="operator" value={'÷'} colour={colour} onClick={() => this.setOperation('/')}/></td>
                </tr>
                <tr>
                    <td><Key className={"function-"+colour} colour={colour} value={'2nd'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'x^2'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'x^3'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'x^y'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'e^x'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'10^x'} onClick={() => this.scientificInput()}/></td>
                    <td><Key value={'7'} colour={colour} onClick={() => this.addInput(7)} /></td>
                    <td><Key value={'8'} colour={colour} onClick={() => this.addInput(8)} /></td>
                    <td><Key value={'9'} colour={colour} onClick={() => this.addInput(9)} /></td>
                    <td><Key className="operator" value={'x'} colour={colour} onClick={() => this.setOperation('*')}/></td>
                </tr>
                <tr>
                    <td><Key className={"function-"+colour} colour={colour} value={'1/x'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'sqrt'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'cbrt'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'root'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'ln'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'log10'} onClick={() => this.scientificInput()}/></td>
                    <td><Key value={'4'} colour={colour} onClick={() => this.addInput(4)} /></td>
                    <td><Key value={'5'} colour={colour} onClick={() => this.addInput(5)} /></td>
                    <td><Key value={'6'} colour={colour} onClick={() => this.addInput(6)} /></td>
                    <td><Key className="operator" value={'-'} colour={colour} onClick={() => this.setOperation('-')}/></td>
                </tr>
                <tr>
                    <td><Key className={"function-"+colour} colour={colour} value={'x!'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'sin'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'cos'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'tan'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'e'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'EE'} onClick={() => this.scientificInput()}/></td>
                    <td><Key value={'1'} colour={colour} onClick={() => this.addInput(1)} /></td>
                    <td><Key value={'2'} colour={colour} onClick={() => this.addInput(2)} /></td>
                    <td><Key value={'3'} colour={colour} onClick={() => this.addInput(3)} /></td>
                    <td><Key className="operator" value={'+'} colour={colour} onClick={() => this.setOperation('+')}/></td>
                </tr>
                <tr>
                    <td><Key className={"function-"+colour} colour={colour} value={'Rad'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'sinh'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'cosh'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'tanh'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'pi'} onClick={() => this.scientificInput()}/></td>
                    <td><Key className={"function-"+colour} colour={colour} value={'Rand'} onClick={() => this.scientificInput()}/></td>
                    <td colSpan="2"><Key value={'0'} colour={colour} onClick={() => this.addInput(0)}/></td>
                    <td><Key value={'.'} colour={colour} onClick={() => this.decimalInput()}/></td>
                    <td><Key className="operator" value={'='} colour={colour} onClick={() => this.setOperation('=')}/></td>
                </tr>
                </tbody>
            </table>
            )
        } else {
            return (
            <table cellSpacing="0" className="calculator">
            <tbody>
            <tr>
                <td colSpan="4">
                    <Display output={displayValue} />
                </td>
            </tr>
            <tr>
                <td><Key className={"function-"+colour} colour={colour} value={'C'} onClick={() => this.clearAll()}/></td>
                <td><Key className={"function-"+colour} colour={colour} value={'+/-'} onClick={() => this.changeSign()}/></td>
                <td><Key className={"function-"+colour} colour={colour} value={'%'} onClick={() => this.setPercent()}/></td>
                <td><Key className="operator" value={'÷'} colour={colour} onClick={() => this.setOperation('/')}/></td>
            </tr>
            <tr>
                <td><Key value={'7'} colour={colour} onClick={() => this.addInput(7)} /></td>
                <td><Key value={'8'} colour={colour} onClick={() => this.addInput(8)} /></td>
                <td><Key value={'9'} colour={colour} onClick={() => this.addInput(9)} /></td>
                <td><Key className="operator" value={'x'} colour={colour} onClick={() => this.setOperation('*')}/></td>
            </tr>
            <tr>
                <td><Key value={'4'} colour={colour} onClick={() => this.addInput(4)} /></td>
                <td><Key value={'5'} colour={colour} onClick={() => this.addInput(5)} /></td>
                <td><Key value={'6'} colour={colour} onClick={() => this.addInput(6)} /></td>
                <td><Key className="operator" value={'-'} colour={colour} onClick={() => this.setOperation('-')}/></td>
            </tr>
            <tr>
                <td><Key value={'1'} colour={colour} onClick={() => this.addInput(1)} /></td>
                <td><Key value={'2'} colour={colour} onClick={() => this.addInput(2)} /></td>
                <td><Key value={'3'} colour={colour} onClick={() => this.addInput(3)} /></td>
                <td><Key className="operator" value={'+'} colour={colour} onClick={() => this.setOperation('+')}/></td>
            </tr>
            <tr>
                <td colSpan="2"><Key  className="key-0"  value={'0'} colour={colour} onClick={() => this.addInput(0)}/></td>
                <td><Key value={'.'} colour={colour} onClick={() => this.decimalInput()}/></td>
                <td><Key className="operator" value={'='} colour={colour} onClick={() => this.setOperation('=')}/></td>
            </tr>
            </tbody>
        </table>
            )
        }
    }
}

export default Calculator