import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';
import Video from './components/Video';

export default function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main && !cities.some(e => e.id === recurso.id)){
          console.log(cities);
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };

          let newCity = [...cities, ciudad]
          setCities(newCity);
        }else if(cities.some(e => e.id === recurso.id)){
          alert('La ciudad ya fue buscada')
        }
        else {
          alert("Ciudad no encontrada");
        }});
  }

  function onClose(id) {
    setCities(cities => cities.filter(c => c.id !== id))
  }
  
  return (<>
          <Video />
          <div className="App">
            <Nav onSearch={onSearch}/>
            <Cards cities={cities} onClose={onClose}/>
          </div>
  </>
  );
}

/* export default function App() {
  const [cities, setCities] = useState([]);
  const [show, setShow] = useState(false);
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        let exist = cities.filter((e) => {
          return e.id === recurso.id;
        });
        if (exist.length > 0) {
          setShow(true);
          return ;
        } else {
          if (recurso.main) {
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };

            let newCity = [...cities, ciudad]
            setCities(newCity);
          } else {
            alert("Ciudad no encontrada");
          }
        }
      });
  }

  function onClose(id) {
    setCities(cities => cities.filter(c => c.id !== id))
  }

  return (<>
    <Video />
    <div className="App">
      <Nav onSearch={onSearch} />
      {
        show &&
        <Alert 
        style={{width: '30%', alignItems:'revert', margin: 'auto', marginTop: '10px'}}
        variant="danger" onClose={() => setShow(false)} >
        <Alert.Heading>La ciudad ya existe!</Alert.Heading>
        <p>
          La ciudad que estas intentando agregar ya existe en la lista.
        </p>
        <Button onClick={() => setShow(false)} variant="outline-primary">Ok</Button>{' '}
      </Alert>
      }
      <Cards cities={cities} onClose={onClose} />
    </div>
  </>
  );
} */
