import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';

export default function Ciudad({cities}) {

  const [city, setCity] = useState({});

  const params = useParams();
  
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    setCity(ciudad[0]);
  }

  React.useEffect(()=>{
    onFilter(params.id)
  },[])
  

  return (
    <div>
      {city.name}
      holaas
    </div>
  )
}
