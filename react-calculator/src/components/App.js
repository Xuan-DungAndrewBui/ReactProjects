import React from 'react';
import Calculator from './Calculator';
import Topbar from './Topbar';


//App takes in all components for the overall application
class App extends React.Component {
    constructor(props) {
        super(props);

        //State of application
        this.state = {
            show: true,
            maximise: false,
            exit: false,
            colour: "dark",
            scientific: false,
        };
    
    //Binding methods
    this.show=this.show.bind(this);
    this.maximise=this.maximise.bind(this);
    this.exit=this.exit.bind(this);
    this.changeColour=this.changeColour.bind(this);
    this.changeFormat=this.changeFormat.bind(this);
    }

    //Toggle maximise state 
    maximise() {
        const maximise = this.state.maximise;
        this.setState({
            maximise: !maximise,
            show: !this.state.show ? true: this.state.show,
        })
    }

    //Toggle minimise state
    show() {
        const show = this.state.show;
        this.setState({
            show: !show,
        })
    }

    //Exits the application
    exit() {
        const exit = this.state.exit;
        if (exit === false) {
            this.setState({
                exit: !exit,
            })
        }
        return null
    }

    //Change colour scheme to specified colour
    changeColour(colour) {
        this.setState({
            colour: colour,
        })
    }

    //Toggle between basic and scientific format
    changeFormat() {
        const scientific = this.state.scientific;
        this.setState({
            scientific: !scientific,
        })
    }

    render() {
        //Hides application if exit state is true, must reload browser to run application again
        if (this.state.exit === true) {
            return null;
        }

        return (
            <div className = {"App" + (this.state.maximise ? '-maximise' : '') + (this.state.scientific ? ' scientific' : '') + ` app-${this.state.colour}`}>
                <Topbar show={this.show} maximise={this.maximise} exit={this.exit} changeColour={this.changeColour} changeFormat={this.changeFormat}/>
                <Calculator show={this.state.show} colour={this.state.colour} scientific={this.state.scientific}/>
            </div>
        )
    }
}

export default App;