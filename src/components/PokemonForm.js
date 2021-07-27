import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemonAdder}) {
  const [currentSearch, setSearch] = useState({
    frontUrl: "",
    backUrl: "",
    name: "",
    hp: '',
  })

  function onInputChange(e){
    setSearch({
      ...currentSearch,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    pokemonAdder(currentSearch)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange = {onInputChange} value= {currentSearch.name} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange = {onInputChange} value= {currentSearch.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange = {onInputChange}
            value= {currentSearch.frontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange = {onInputChange}
            value= {currentSearch.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
