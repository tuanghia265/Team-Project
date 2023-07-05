import React from 'react'

const verticalStyles = {
    'text-transform': 'UPPERCASE',
    //transform: 'rotate(-90deg)',
    'writing-mode':'vertical-lr',
    'font-weight': '900',
    display: 'block',
    //transform: 'rotate(180deg)',
    padding: '10px',
    'font-size': '30px'
}

export default function VerticalText(props) {
    return(
        <span style={verticalStyles}>{props.text}</span>
    )
}