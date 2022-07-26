import React from 'react';

function Game ({name, image, date}) {

    return (
        <div className="game-container">
            <h3 className='game-name'>{name}</h3>
            <h4 className='game-date'>{date}</h4>
            <img className='game-img' src={image} alt={name} height={150}/>
        </div>
    )
}
export default Game;