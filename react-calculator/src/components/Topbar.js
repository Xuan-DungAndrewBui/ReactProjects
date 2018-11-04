import React from 'react'
import '../index.css'


class Topbar extends React.Component{
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <button className="close" onClick={this.props.exit}></button>
                <button className="minimise"onClick={this.props.show}></button>
                <button className="maximise" onClick={this.props.maximise}></button>                
                <button className="dark-button" onClick={() => this.props.changeColour('dark')}>Dark</button>
                <button className="light-button" onClick={() => this.props.changeColour('light')}>Light</button>
                <button className="scientific-button" onClick={() => this.props.changeFormat()}>Scientific</button>
            </div>
        )
    }
}

export default Topbar;