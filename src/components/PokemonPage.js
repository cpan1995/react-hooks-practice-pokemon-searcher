import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonItems, setPokemonItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [formAdd, setFormAdd] = useState('empty')
  
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(response => response.json())
    .then(data => setPokemonItems(data))
  }, [])

  useEffect(() => {
    if(formAdd!=='empty'){
      fetch("http://localhost:3001/pokemon",{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formAdd)
      })
      .then(response => response.json())
      .then(data => {
        let newArray = [...pokemonItems, data]
        setPokemonItems(newArray)
      })
    }
  }, [formAdd])

  function handleSearch(searchValue){
    setSearchValue(searchValue)
  }
  
  function pokemonAdder(newPokemon){
    setFormAdd(    
      {
      name: newPokemon.name,
      hp: newPokemon.hp,
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl,
      }
    })
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemonAdder={pokemonAdder}/>
      <br />
      <Search handleSearch = {handleSearch}/>
      <br />
      <PokemonCollection pokemonItems = {pokemonItems} searchValue={searchValue}/>
    </Container>
  );
}

export default PokemonPage;
