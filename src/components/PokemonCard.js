import React , {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id, image, pokemonName, pokemonHp, image2}) {
  const [flip, setFlip] = useState(false)
  
  function handleClick(){
    setFlip(!flip)
  }

  return (
    <Card>
      <div>
        <div className="image" onClick = {handleClick}>
          <img src = {flip ? image:image2} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokemonName}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemonHp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
