import React from 'react'
import ChatContact from './ChatContact'

function Sidebar() {

    const chatHistory = [{
        id: 1,
        contactName: 'Contact 1',
        lastMessage: 'Hi, Where are you ?',
        selected: true
    }, {
        id: 2,
        selected: false,
        contactName: 'Contact 2',
        lastMessage: 'Bye! See you soon'
    }, {
        id: 3,
        selected: false,
        contactName: 'Contact 3',
        lastMessage: 'Call me once free.'
    }, {
        id: 4,
        selected: false,
        contactName: 'Contact 4',
        lastMessage: 'Call me once free.'
    }, {
        id: 5,
        selected: false,
        contactName: 'Contact 5',
        lastMessage: 'Call me once free.'
    }, {
        id: 6,
        selected: false,
        contactName: 'Contact 6',
        lastMessage: 'Call me once free.'
    }]

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
                         contactName={chat.contactName} 
                         lastMessage={chat.lastMessage}
                         selected={chat.selected} />
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar
