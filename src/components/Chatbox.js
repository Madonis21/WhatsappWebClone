import React from 'react'
import ContactCard from './ContactCard'

function Chatbox({ currentUser }) {
    
    return (
        <div className="chatbox">
            <div className="chatbox-header">
                <ContactCard
                    displayPic={currentUser?.displayPic}
                    contactName ={currentUser?.contactName}
                    lastMessage={currentUser?.lastMessage}
                    showLastMessage={false}
                ></ContactCard>
                <span className="">{currentUser && currentUser.contactName}</span>
            </div>
            <div className="chatbox-area">

            </div>
            <div className="chatbox-footer">
                <input className="chat-input" placeholder="Type a message"/>
            </div>            
        </div>
    )
}

export default Chatbox
