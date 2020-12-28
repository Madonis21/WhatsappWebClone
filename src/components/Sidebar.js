import React, { useState } from 'react'
import ChatContact from './ChatContact'
import man from "../assets/man.svg"
import bussiness from "../assets/bussiness-man.svg"
import man1 from "../assets/man-1.svg"
import profile from "../assets/profile.svg"
import women from "../assets/woman.svg"
import user from "../assets/user-1.svg"


function Sidebar({ openChatDetail }) {
    
    let initialState = [{
        id: 1,
        contactName: 'Contact 1',
        lastMessage: 'Hi, Where are you ?',
        selected: false,
        hovered: false,
        displayPic: man
    }, {
        id: 2,
        selected: false,
        displayPic: bussiness,
        contactName: 'Contact 2',
        lastMessage: 'Bye! See you soon',
        hovered: false
    }, {
        id: 3,
        selected: false,
        displayPic: man1,
        contactName: 'Contact 3',
        lastMessage: 'Call me once free.',
        hovered: false
    }, {
        id: 4,
        selected: false,
        displayPic: profile,
        contactName: 'Contact 4',
        lastMessage: 'Call me once free.',
        hovered: false
    }, {
        id: 5,
        selected: false,
        displayPic: women,
        contactName: 'Contact 5',
        lastMessage: 'Call me once free.',
        hovered: false
    }, {
        id: 6,
        selected: false,
        displayPic: user,
        contactName: 'Contact 6',
        lastMessage: 'Call me once free.',
        hovered: false
    }];

    let [chatHistory, setchatHistory] = useState(initialState)

    const setEvent = (id, event) => {
        let copyState = JSON.parse(JSON.stringify(chatHistory))
        copyState.forEach((chat) => chat[event] = false);
        let user = copyState.find((chat) => chat.id === id);
        user[event] = true;
        if (event === 'selected') {
            openChatDetail(user);
        }
        setchatHistory(copyState);
    }

    return (
        <div className="sidebar">
            <div className="sidebar-header">

            </div>
            <div className="sidebar-search">
                <input className="search-input" placeholder="Search or start a new chat"/>
            </div>
            <div className="sidebar-chatlist">
                {chatHistory.map((chat) => {
                    return (
                        <ChatContact
                         key={chat.id}
                         id={chat.id}
                         contactName={chat.contactName} 
                         lastMessage={chat.lastMessage}
                         displayPic={chat.displayPic}
                         setEvent={setEvent}
                         hovered={chat.hovered}
                         selected={chat.selected} />
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar
