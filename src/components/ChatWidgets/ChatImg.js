import React from 'react'

function ChatImg() {
    return (
        <div className="chat-image">
            <span style={{color: 'white', fontSize: '20px'}}>
                <img id="output" alt="text"/>
            </span>
            <span className="tail-out"></span>
        </div>
    )
}

export default ChatImg
