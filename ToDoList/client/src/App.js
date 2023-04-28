import React from 'react';

//compoenents
import Header from './components/header';
import MiniForm from './components/miniform';
import AllTasks from './components/allTasks';
import './App.css';

function App() {
  return (
    <main className="main--section">
      <Header />
      <MiniForm />
      <AllTasks />
    </main>
  );
}

export default App;
