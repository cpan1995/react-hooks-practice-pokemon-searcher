import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonItems, searchValue}) {
 
  let newPokemonItems = pokemonItems.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue.toLowerCase()))

  let pokemonCards = pokemonItems.map(pokemon => {
    return (<PokemonCard key = {pokemon.id} id = {pokemon.id} image = {pokemon.sprites.back} image2 = {pokemon.sprites.front} pokemonName = {pokemon.name} pokemonHp = {pokemon.hp}/>)
  })
  
  
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
