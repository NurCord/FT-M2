import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';
import data from './data'

export default function App() {
  const [cities, setCities] = useState(data);

  function onSearch(txt=false) {
    const ciudadEjemplo = {
      min: 32,
      max: 35,
      img: "03n",
      id: 2172797,
      wind: 3.6,
      temp: 300.15,
      name: "Cairns",
      weather: "Clouds",
      clouds: 40,
      latitud: -16.92,
      longitud: 145.77
    };
    if(txt){
      ciudadEjemplo.name = txt;
    }
    let newCity = [...cities, ciudadEjemplo]
    setCities(newCity);
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards cities={cities}/>
    </div>
  );
}
