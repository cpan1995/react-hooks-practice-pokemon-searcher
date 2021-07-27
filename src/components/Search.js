import React, {useState} from "react";

function Search({handleSearch}) {

  const[currentSearch, setSearch] = useState()

  function handleChange(e){
    setSearch(e.target.value)
    handleSearch(e.target.value)
  }
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange = {handleChange} value = {currentSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
