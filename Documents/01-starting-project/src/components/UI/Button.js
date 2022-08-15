import React from "react";
import './buttonModule.css'
const button = props => {
    return <button className="button" type={props.type || 'button'} onClick={props.onClick}>{props.children}</button>
}

export default button;