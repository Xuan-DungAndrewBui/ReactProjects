import React from 'react';
import Display from './display';
import Key from './key';
import '../index.css'

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
            needOperator: true
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

    //Break the calculator into display and keys
    render() {
        if (this.props.show === false) {
            return null;
        }
        if (this.props.exit === true) {
            return null;
        }

        const displayValue = this.state.displayValue;
        
        if (displayValue.length === 15) {
            alert("It is overflowing")
        }

        return (
            // <div className="calculator">    
            //     <div>
            //         <Display output={displayValue} />
            //     </div>
            //     <div>
            //         <div>
            //             <Key className="function" value={'C'} onClick={() => this.clearAll()}/>
            //             <Key className="function"  value={'+/-'} onClick={() => this.changeSign()}/>
            //             <Key className="function" value={'%'} onClick={() => this.setPercent()}/>
            //             <Key className="operator" value={'÷'} onClick={() => this.setOperation('/')}/>
            //         </div>
            //         <div>
            //             <Key value={'7'} onClick={() => this.addInput(7)} />
            //             <Key value={'8'} onClick={() => this.addInput(8)} />
            //             <Key value={'9'} onClick={() => this.addInput(9)} />
            //             <Key className="operator" value={'x'} onClick={() => this.setOperation('*')}/>
            //         </div>
            //         <div>
            //             <Key value={'4'} onClick={() => this.addInput(4)} />
            //             <Key value={'5'} onClick={() => this.addInput(5)} />
            //             <Key value={'6'} onClick={() => this.addInput(6)} />
            //             <Key className="operator" value={'-'} onClick={() => this.setOperation('-')}/>
            //         </div>
            //         <div>
            //             <Key value={'1'} onClick={() => this.addInput(1)} />
            //             <Key value={'2'} onClick={() => this.addInput(2)} />
            //             <Key value={'3'} onClick={() => this.addInput(3)} />
            //             <Key className="operator" value={'+'} onClick={() => this.setOperation('+')}/>
            //         </div>
            //         <div>
            //             <Key className="key-0" value={'0'} onClick={() => this.addInput(0)}/>
            //             <Key value={'.'} onClick={() => this.addInput('.')}/>
            //             <Key className="operator" value={'='} onClick={() => this.setOperation('=')}/>
            //         </div>
            //     </div>
            // </div>
            <table cellSpacing="0" className={"calculator" + (this.props.maximise ? '-maximise' : '')}>
                <tr>
                    <td colSpan="4"><Display output={displayValue} /></td>
                </tr>
                <tr>
                    <td><Key className="function" value={'C'} onClick={() => this.clearAll()}/></td>
                    <td><Key className="function"  value={'+/-'} onClick={() => this.changeSign()}/></td>
                    <td><Key className="function" value={'%'} onClick={() => this.setPercent()}/></td>
                    <td><Key className="operator" value={'÷'} onClick={() => this.setOperation('/')}/></td>
                </tr>
                <tr>
                    <td><Key value={'7'} onClick={() => this.addInput(7)} /></td>
                    <td><Key value={'8'} onClick={() => this.addInput(8)} /></td>
                    <td><Key value={'9'} onClick={() => this.addInput(9)} /></td>
                    <td><Key className="operator" value={'x'} onClick={() => this.setOperation('*')}/></td>
                </tr>
                <tr>
                    <td><Key value={'4'} onClick={() => this.addInput(4)} /></td>
                    <td><Key value={'5'} onClick={() => this.addInput(5)} /></td>
                    <td><Key value={'6'} onClick={() => this.addInput(6)} /></td>
                    <td><Key className="operator" value={'-'} onClick={() => this.setOperation('-')}/></td>
                </tr>
                <tr>
                    <td><Key value={'1'} onClick={() => this.addInput(1)} /></td>
                    <td><Key value={'2'} onClick={() => this.addInput(2)} /></td>
                    <td><Key value={'3'} onClick={() => this.addInput(3)} /></td>
                    <td><Key className="operator" value={'+'} onClick={() => this.setOperation('+')}/></td>
                </tr>
                <tr>
                    <td colSpan="2"><Key value={'0'} onClick={() => this.addInput(0)}/></td>
                    <td><Key value={'.'} onClick={() => this.addInput('.')}/></td>
                    <td><Key className="operator" value={'='} onClick={() => this.setOperation('=')}/></td>
                </tr>
            </table>
        )
    }
    
}

export default Calculator