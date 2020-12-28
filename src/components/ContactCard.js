import React from 'react'

function ContactCard({ displayPic, contactName, lastMessage, showLastMessage}) {
    return (
        <>
         <div className="contact-card circular-wrap">
                <div
                    className="display-pic"
                    style={{ backgroundImage: `url(${displayPic})` }}
                >
                </div>
            </div>
            <div className="contact-card chat-contact-info">
                <div className="contact-name">{contactName}</div>
                {showLastMessage && <div className="chat-message">{lastMessage}</div>}
            </div>    
        </>
    )
}

export default ContactCard
