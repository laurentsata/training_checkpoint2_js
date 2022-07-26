import React, {useState, useEffect} from 'react';
import Game from './Game';
import axios from 'axios';

const GameList = () => {
       
    const getGames = () => {
        axios
            .get(`https://apis.wilders.dev/wild-games/games`)
            // appel API
            .then((response) => response.data)
            // recevoir la data de API
            .then((data) => {
                setGames(data);
            });
            // transmettre cette data pour mettre à jour le state
    };

    const [games, setGames] = useState("")
    //state => stocker les donnees de l'API
   
    useEffect(() => getGames(), [games])

return (
    <div className="GameList">
        <h2>List</h2>

        {games && games.map((element, index) => (
        <Game 
        key={index}
        name={element.name}
        rating={element.rating}
        date={element.released}
        image={element.background_image}
        />)
        )
      }

    </div>
)
}

export default GameList;