import './App.css';
import React from 'react';
import Header from './components/Header.js';
import MemeForm from './components/Meme';

function App() {
  return (
    <div className="App">
      <Header/>
      <MemeForm/>
    </div>
  );
}

export default App;
