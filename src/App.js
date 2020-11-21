import './App.scss';
import Chatbox from './components/Chatbox';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
        <Sidebar></Sidebar>
        <Chatbox></Chatbox>
    </div>
  );
}

export default App;
