import React, { useState } from "react";


export default function SearchBar({onSearch}) {
  
  const [nameCity, setNameCity] = useState('')

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(nameCity);
    }}>
      <input type="text" placeholder="Ciudad..." onChange={(txt)=>{setNameCity(txt.target.value)}}/>
      <input type="submit" value="Agregar" />
    </form>
  );
}
