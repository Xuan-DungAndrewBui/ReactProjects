import React from 'react'

class Topbar extends React.Component {
    render() {
        return (
            <div>
            <button onClick={this.props.show}>Show/Hide</button>
            <button onClick={this.props.maximise}>Maximise</button>
            <button onClick={this.props.exit}>Exit</button>
            </div>
        )
    }
}

export default Topbar;