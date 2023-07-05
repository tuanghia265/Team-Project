import React from 'react'

const verticalStyles = {
    'text-transform': 'UPPERCASE',
    //transform: 'rotate(-90deg)',
    'writing-mode':'vertical-lr',
    color: '#f0f0f0',
    'font-weight': '900',
    display: 'block',
    transform: 'rotate(180deg)',
    padding: '10px'
}

export default function VerticalText(props) {
    return(
        <span style={verticalStyles}>{props.text}</span>
    )
}