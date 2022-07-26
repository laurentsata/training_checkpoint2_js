import React from 'react'
import Header from './components/Header';
import GameList from './components/GameList';
import './App.css';
import axios from 'axios';

function App() {
  const [simpsonQuote, setSimpsonQuote] = React.useState("");

  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        setSimpsonQuote(data[0]);
      });
  };


  return (
    
      <div className="App">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        </style>
        {/* <Header name="play_game"/>   */}
           
          <button onClick={getQuote}>
            Next
          </button>
          <GameList {...simpsonQuote} />  
        
      </div>
    
  )
}

export default App;

