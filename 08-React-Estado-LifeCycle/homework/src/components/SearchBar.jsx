import React, { useState } from "react";


export default function SearchBar({onSearch}) {
  
  const [nameCity, setNameCity] = useState('')

  function onChanges(e){
    console.log(e);
    setNameCity(e.target.value)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(nameCity);
      setNameCity('');
    }}>
      <input type="text" placeholder="Ciudad..." onChange={onChanges} value={nameCity}/>
      <input type="submit" value="Agregar" />
    </form>
  );
}
