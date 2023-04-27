import React from 'react'
import './Button.css'

function Button({click, text , type}) {
    return (
        <button onClick={click} type={type}>
            {text}
        </button>
    )
}

export default Button