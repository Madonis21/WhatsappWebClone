import React, { useState } from 'react';
import './App.scss';
import Chatbox from './components/Chatbox';
import ContactInfo from './components/ContactInfo';
import Sidebar from './components/Sidebar';

function App() {

  const [currentUser, setUser] = useState(null)

  const openChatDetail = (user) => {
   setUser(user)
  }

  return (
    <div className="app">
        <Sidebar openChatDetail={openChatDetail}></Sidebar>
        <Chatbox currentUser={currentUser}></Chatbox>
        <ContactInfo currentUser={currentUser}></ContactInfo>
    </div>
  );
}

export default App;
