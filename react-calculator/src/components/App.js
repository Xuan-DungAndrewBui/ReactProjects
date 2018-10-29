import React from 'react';
import Display from './display';
import Key from './key';

const calcExpression = {
    '+': function(firstValue, secondValue ) { return firstValue+secondValue },
    '-': function(firstValue, secondValue ) { return firstValue-secondValue },
    '*': function(firstValue, secondValue ) { return firstValue*secondValue },
    "/": function(firstValue, secondValue ) { return firstValue/secondValue },
    "=": function(firstValue, secondValue ) { return secondValue}
};

//App takes care of logic
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operator: '',
            displayValue: '0',
            firstValue: null,
            secondValue: 0,
            needOperator: true, 
        }
    }

    // performOperation() {
    //     const firstValue = this.state.firstValue;
        
    //     if (firstValue === null) {
    //         this.setState({

    //         })
    //     }

    // }

    setOperation(operator) {
        const firstValue = this.state.firstValue;
        const value = parseInt(this.state.displayValue);

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
        const value = parseInt(this.state.displayValue);
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
            const combine = parseFloat(String(this.state.displayValue) + String(number));
            this.setState({
                displayValue: combine.toString(),
            });
        }            
    }
    
    clearAll() {
        this.setState({
            operator: '',
            displayValue: '0',
            firstValue: null,
            secondValue: 0,
            needOperator: true, 
        })
    }
    
    changeSign() {
        this.setState({
            displayValue: this.state.displayValue * -1
        })
    }

    //Break the calculator into display and keys
    render() {
        const displayValue = this.state.displayValue;
        return (
            <div>    
                <div>
                    <Display output={displayValue} />
                </div>
                <div className = 'numberpad'>
                    <Key value={'1'} className='calculator-key' onClick={() => this.addInput(1)} />
                    <Key value={'2'} className='calculator-key' onClick={() => this.addInput(2)} />
                    <Key value={'3'} className='calculator-key' onClick={() => this.addInput(3)} />
                    <Key value={'4'} className='calculator-key' onClick={() => this.addInput(4)} />
                    <Key value={'5'} className='calculator-key' onClick={() => this.addInput(5)} />
                    <Key value={'6'} className='calculator-key' onClick={() => this.addInput(6)} />
                    <Key value={'7'} className='calculator-key' onClick={() => this.addInput(7)} />
                    <Key value={'8'} className='calculator-key' onClick={() => this.addInput(8)} />
                    <Key value={'9'} className='calculator-key' onClick={() => this.addInput(9)} />
                    <Key value={'0'} className='calculator-key' onClick={() => this.addInput(0)} />
                </div>
                <div className='calculator-operations'>
                    <Key value={'+'} className='calculator-key' onClick={() => this.setOperation('+')}/>
                    <Key value={'-'} className='calculator-key' onClick={() => this.setOperation('-')}/>
                    <Key value={'x'} className='calculator-key' onClick={() => this.setOperation('*')}/>
                    <Key value={'÷'} className='calculator-key' onClick={() => this.setOperation('/')}/>
                    <Key value={'='} className='calculator-key' onClick={() => this.setOperation('=')}/>
                    <Key value={'C'} className='calculator-key' onClick={() => this.clearAll()}/>
                    <Key value={'+/-'} className='calculator-key' onClick={() => this.changeSign()}/>

                </div>
            </div>
        )
    }
    
}

export default App