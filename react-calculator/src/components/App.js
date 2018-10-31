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
            colour: "dark",
        };
    this.show=this.show.bind(this);
    this.maximise=this.maximise.bind(this);
    this.exit=this.exit.bind(this);
    this.changeColour=this.changeColour.bind(this);
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

    changeColour(colour) {
        this.setState({
            colour: colour,
        })
    }

    render() {
        if (this.state.exit === true) {
            return null;
        }

        return (
            <div className={"App" + (this.state.maximise ? '-maximise' : '') + ` app-${this.state.colour}`}>
                <Topbar show={this.show} maximise={this.maximise} exit={this.exit} changeColour={this.changeColour}/>
                <Calculator show={this.state.show} colour={this.state.colour}/>
            </div>
        )
    }
}

export default App;