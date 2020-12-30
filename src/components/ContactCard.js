import React from 'react';
import ContactImage from "./ContactImage.js"

function ContactCard({ displayPic, contactName, lastMessage, showLastMessage}) {
    return (
        <>
         <ContactImage displayPic={displayPic}></ContactImage>
            <div className="contact-card chat-contact-info">
                <div className="contact-name">{contactName}</div>
                {showLastMessage && <div className="chat-message">{lastMessage}</div>}
            </div>    
        </>
    )
}

export default ContactCard
