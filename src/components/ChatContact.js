import React from 'react'

function ChatContact({contactName, lastMessage, selected}) {
    return (
        <div className={selected ? 'chat-contact selected ': 'chat-contact'}>
            <img className="display-pic" alt="pic"></img>
            <div className="chat-contact-info">
                <div className="contact-name">{contactName}</div>
                <div className="chat-message">{lastMessage}</div>
            </div>            
        </div>
    )
}

export default ChatContact
