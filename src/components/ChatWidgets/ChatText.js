import React from 'react'

function ChatText({ message, timestamp, otherPersonMessage }) {
    return (
        <div className={otherPersonMessage ? "chat-text other": "chat-text"}>
            <span className="message">{message}</span>
            <span className={otherPersonMessage ? "tail-out-left": "tail-out"}></span>
            <span className="timestamp">{timestamp}</span>
        </div>
    )
}

export default ChatText
