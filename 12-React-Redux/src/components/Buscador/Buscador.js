import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {getMovies, addMovieFavorite} from '../../actions'
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value }); 
    //setear mi estado local title con el valor que capto del input
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
       { this.props.movies &&  this.props.movies.map((movie) => {
         return (
           <li key = {movie.imdbID}>
             <Link to={`/movie/${movie.imdbID}`}> {movie.Title} </Link>
            <button onClick={()=> this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}  > ADD FAV</button>
           </li>
         )
       }) }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
return{
  movies: state.moviesLoaded
}
}

function mapDispatchToProps(dispatch){
  //pasandole al componente la posibilidad como props de hacer un dispatch de la function getMovies
  return{
getMovies: title => dispatch(getMovies(title)),
addMovieFavorite: movie => dispatch(addMovieFavorite(movie))
  }
}


                        //las propiedades del estado que quiero conectar //las acciones que quiero poder dispatchar
export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
//<Buscador movies={store.getState().moviesLoaded} getMovies={store.dispatch(getMovies(title))}/>