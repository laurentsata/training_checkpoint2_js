import React from 'react';


const GameList = ({ character, image, quote }) => {
    return (
      <div>
        <p>{character}</p>
        <img src={image} alt={character} />
        <p>{quote}</p>
      </div>
    );
  };


export default GameList;