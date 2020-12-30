import React from 'react'
import ContactCard from './ContactCard'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './ChatWidgets/widgets.scss';
import ChatText from './ChatWidgets/ChatText';
import ChatImg from './ChatWidgets/ChatImg';
import AttachmentIcon from '@material-ui/icons/Attachment';

function Chatbox({ currentUser }) {

    const selectFileButton = (evt) => {
        console.log('hi', evt)
        var image = document.getElementById('output');
        // api call
        
        image.src = URL.createObjectURL(evt.target.files[0]);
    
    }
    
    return (
        <div className="chatbox">
            <div className="chatbox-header">
                <ContactCard
                    displayPic={currentUser?.displayPic}
                    contactName ={currentUser?.contactName}
                    lastMessage={currentUser?.lastMessage}
                    showLastMessage={false}
                ></ContactCard>
                <div className="search-icon">
                    <SearchIcon></SearchIcon>
                </div>
                <div className="more-vert">
                    <MoreVertIcon></MoreVertIcon>
                </div>
                <span className="">{currentUser && currentUser.contactName}</span>
            </div>
            <div className="chatbox-area">
                <ChatText timestamp={new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })} message="hello" ></ChatText>
                <ChatText timestamp={new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })} message="hello" ></ChatText>
                <ChatText timestamp={new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })} message="hello" ></ChatText>
                <ChatText timestamp={new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })} message="hello" ></ChatText>
                <ChatText timestamp={new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })} message="hello" ></ChatText>
                <ChatText timestamp={new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })} message="hello" ></ChatText>
                <ChatText timestamp={new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })} message="hello" ></ChatText>
                <ChatText timestamp={new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })} message="hello" ></ChatText>
                <ChatText timestamp={new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })} message="hello" ></ChatText>
                <ChatText timestamp={new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })} message="hello" ></ChatText>

                <ChatText timestamp={new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })} message="new message" otherPersonMessage={true} ></ChatText>
                <ChatImg></ChatImg>
            </div>
            <div className="chatbox-footer">
            <label className="attachment-icon">
                <AttachmentIcon></AttachmentIcon>
                <input onChange={selectFileButton} className="attachment-input" type="file" style={{display: 'none'}}/>
            </label>
                <input className="chat-input" placeholder="Type a message"/>
            </div>            
        </div>
    )
}

export default Chatbox
