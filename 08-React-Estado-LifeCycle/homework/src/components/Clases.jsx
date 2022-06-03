import React from "react";
import Cards from './components/Cards';
import Nav from './components/Nav';


class Apps extends React.Component {
    constructor(prop){
        super(prop)
        this.state = {
            cities: [],
        };
    }

    onClose = id => {
        this.setState(cities => cities.filter(c => c.id !== id))
    }

    onSearch = (ciudad)=>{
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
        .then(r => r.json())
        .then((recurso) => {
        if(recurso.main){
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
          let newCity = [...this.cities, ciudad]
          this.setState({newCity});
        } else {
          alert("Ciudad no encontrada");
        }});
    }

    render(){
        return(
        <div className="App">
            <Nav onSearch={this.onSearch}/>
            <Cards cities={this.state.cities} onClose={this.onClose}/>
        </div>
        )
    }
}

export default Apps