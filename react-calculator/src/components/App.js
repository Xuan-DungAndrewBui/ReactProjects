import React from 'react';
import Display from './display';
import Key from './key';

//App takes care of logic
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            operations: [],
            currentValue: 0,
        }
    }

    //Basic functionality of inputting a number into the display
    addInput(number) {
        const addition = String(this.state.currentValue) + String(number);
        const combine = parseInt(addition);
        this.setState({
            currentValue: combine,
        })
    }

    //Break the calculator into display and keys
    render() {
        const currentValue = this.state.currentValue
        return (
            <div>    
                <div>
                    <Display output={currentValue} />
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
                </div>
            </div>
        )
    }
    
}

export default App