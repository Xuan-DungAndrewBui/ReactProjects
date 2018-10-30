import React from 'react';
import Calculator from './Calculator';
import Topbar from './Topbar';

//App takes in all components for the overall app
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            maximise: false,
            exit: false,
        };
    this.show=this.show.bind(this);
    this.maximise=this.maximise.bind(this);
    this.exit=this.exit.bind(this);
    }

    maximise() {
        const maximise = this.state.maximise;
        this.setState({
            maximise: !maximise
        })
    }

    show() {
        const show = this.state.show;
        this.setState({
            show: !show,
        })
    }

    exit() {
        const exit = this.state.exit;
        if (exit === false) {
            this.setState({
                exit: !exit,
            })
        }
        return null

    }

    render() {
        return (
            <div>
            <Topbar show={this.show} maximise={this.maximise} exit={this.exit}/>
            <Calculator show={this.state.show} maximise={this.state.maximise} exit={this.state.exit}/>
            </div>
        )
    }
}

export default App;