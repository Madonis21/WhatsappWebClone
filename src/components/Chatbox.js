import React, { useState, useEffect, useRef } from 'react'
import ContactCard from './ContactCard'
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './ChatWidgets/widgets.scss';
import ChatText from './ChatWidgets/ChatText';
import ChatImg from './ChatWidgets/ChatImg';
import AttachmentIcon from '@material-ui/icons/Attachment';
import SendIcon from '@material-ui/icons/Send';

function Chatbox({ currentUser }) {

    const [inputVal, setinputVal] = useState('')
    const [chatMessages, setchatMessages] = useState([]);
    const divRef = useRef();

    useEffect(() => {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    });
  
    const selectFileButton = (evt) => {
        const fileInfo = evt.target.files[0];
        let dt = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric'});
        setchatMessages([...chatMessages, { type: 'img', timestamp: dt, imgFileChange: {fileInfo}}]);
    }

    const keyUpHandler = (evt) => {
        if (evt.keyCode === 13) {
            sendMessage(evt.target.value);
        }
    }

    const sendMessage = (val) => {
        if (!val) {
            return;
        }
        setinputVal('');
        let dt = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
        setchatMessages([...chatMessages, { type: 'text', timestamp: dt, message: val, otherPersonMessage: false}]);
    }

    const ChatArea = (chat) => {
        if (chat.type === 'text') {
            return (
                <>
                    <ChatText id={Math.random()} timestamp={chat.timestamp} message={chat.message}></ChatText>
                </>
            )
        } else if (chat.type === 'img') {
            return (
                <>
                    {chat.imgFileChange && <ChatImg id={Math.random()} timestamp={chat.timestamp} imgFileChange={chat.imgFileChange.fileInfo}></ChatImg>}
                </>
            )
        }
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
                {chatMessages.map((chat, index) => {
                    return (
                        <div key={index}>
                            {ChatArea(chat)}
                        </div>
                    )
                })}
                <div ref={divRef} />
            </div>
            
            <div className="chatbox-footer">
                <label className="attachment-icon">
                    <AttachmentIcon></AttachmentIcon>
                    <input onChange={selectFileButton} className="attachment-input" type="file" style={{display: 'none'}}/>
                </label>
                <input value={inputVal} onChange={(evt) => setinputVal(evt.target.value)} onKeyUp={keyUpHandler} className="chat-input" placeholder="Type a message"/>
                <div onClick={() => sendMessage(inputVal)} className="send-btn">
                    <SendIcon></SendIcon>
                </div>
            </div>
        </div>
    )
}

export default Chatbox
