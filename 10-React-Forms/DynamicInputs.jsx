import React, { useState } from 'react';

// Este es el Form con inputs dinamicos que armamos en el README.md de la teoria.

function DinamicInputs() {  
  
  //modeloFamiliar es un objeto, no un estado
  const modeloFamiliar = { nombre: '' };
  console.log("soy modelo familiar: ", modeloFamiliar)

  //estado que toma como  valor inicial copia de modelo familiar
  const [familiar, setFamiliar] = useState([
    { ...modeloFamiliar },
  ]); //si no quiero que se muestre el primer resultado vacio, tengo que poner solo el array vacio, sin la copia!

  //persona es un estado, inicializado con el objeto {nombre: ""}
  const [persona, setPersona] = useState({
    nombre: '',
  });

  //funcion toma una copia de familiar y le suma un nuevo objeto
  const agregaFamiliar = () => {
     setFamiliar([...familiar, { ...modeloFamiliar }]); // --> Los inputs siempre estan vacios! Porque se agrega una variable, pero no se modifica un estado!
     // setFamiliar([...familiar, { ...persona }]); --> Asi debo manejarme! 
     // setPersona({nombre: ''}) --> es buena practica limpiar el input
  };

  // funcion modifica onChange estado persona
  // guarda lo que tenes en el estado entero y reescribe la propiedad nombre
  const handlePersonaChange = (e) => setPersona({
    ...persona, //si no coloco la copia lo piso!! clave!! 
    [e.target.name]: e.target.value, // e.target.name es nombre (ver linea 51) y e.target.value es lo que capto en mi input
  });

  //funcion que modifica mi estado familiar
  const handleFamiliarChange = (e) => {
    const familiares = [...familiar];
    familiares[e.target.id][e.target.dataset.name] = e.target.value;
    setFamiliar(familiares);
  };

  //funcion que envia el formulario, solo para que veamos el efecto del preventDefault del submit y que paso con familiar 
  const handleSubmit = e => {
    e.preventDefault()
    console.log("soy el submit: " , familiar)
  }

  return (        
    <form onSubmit={handleSubmit}>            
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={persona.nombre}
        onChange={handlePersonaChange}
      />  
      <input
        type="button"
        value="Agrega un Familiar"
        onClick={agregaFamiliar}
       
      />
      {
      familiar.map((el, i) => (
        <div key={`persona-${i}`}>
          <label htmlFor={`nombre-${i}`}>{`Familiar #${i + 1}`}</label>
          <input
              type="text"
              name={`nombre-${i}`}
              id={i}
              data-name="nombre"
              value={el.nombre}
              onChange={handleFamiliarChange}
          />
        </div>
      ))
      }
      <input type="submit" value="Submit" />        
    </form>   
  );
};

export default DinamicInputs;