import React from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import logo from './assets/troll-face.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Meme />
    </div>
  );
}

export default App;
