import React, { useState } from 'react';
import './App.scss';
import Chatbox from './components/Chatbox';
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
    </div>
  );
}

export default App;
