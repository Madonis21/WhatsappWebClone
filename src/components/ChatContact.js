import React from 'react'
import ContactCard from './ContactCard';

function ChatContact({id, contactName, lastMessage, selected, hovered, displayPic, setEvent}) {

    return (
      <div
        key={id}
        onClick={() => setEvent(id, 'selected')}
        onMouseEnter={() => setEvent(id, 'hovered')}
        className={ selected ? 'selected chat-contact' : 
                    hovered ? 'hovered chat-contact' :
                    'chat-contact'}
      >

        <ContactCard
            displayPic={displayPic}
            contactName ={contactName}
            lastMessage={lastMessage}
            showLastMessage={true}
        ></ContactCard>
        
      </div>
    );
}

export default ChatContact
