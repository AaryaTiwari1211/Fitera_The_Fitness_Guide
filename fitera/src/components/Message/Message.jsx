import React from 'react'
import './Message.css'

function Message({type,text}) {
    return (
        <div>
            <div className={`${type}message`}>{text}</div>
        </div>
    )
}

export default Message