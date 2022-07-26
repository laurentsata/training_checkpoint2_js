import React from 'react'
import GameList from './components/GameList';
import Header from './components/Header';
// import './App.css';

function App() {
  
  return (
    
      <div className="App">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        </style>
        <Header name="play_game"/>  
           <GameList />
      </div>
    
  )
}

export default App;

