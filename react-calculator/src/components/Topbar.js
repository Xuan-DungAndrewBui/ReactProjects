import React from 'react'
import '../index.css'

const Topbar = (props) => (
            <div>
                <button className="close" onClick={props.exit}></button>
                <button className="minimise"onClick={props.show}></button>
                <button className="maximise" onClick={props.maximise}></button>
                <button className="dark-button" onClick={() => props.changeColour('dark')}>Dark</button>
                <button className="light-button" onClick={() => props.changeColour('light')}>Light</button>
            </div>
)

export default Topbar;