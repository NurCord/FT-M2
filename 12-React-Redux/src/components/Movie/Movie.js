import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail, clearDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

componentDidMount(){
    const id = this.props.match.params.id
    this.props.getMovieDetail(id)
}

componentWillUnmount(){
    this.props.clearDetail()
}

    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula  
                <h2> Titulo: {this.props.movie.Title} </h2>
                <img src={this.props.movie.Poster} alt="No hay imagen"/>
            </div>
        );
    }
}

function mapStateToProps (state){
return{
movie: state.movieDetail
}
}

function mapDispatchToProps(dispatch){
return{
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
    clearDetail: () => dispatch(clearDetail())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);