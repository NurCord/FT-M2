import {GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE} from './actions'

export function getMovies(titulo){
    return async (dispatch) => fetch("http://www.omdbapi.com/?apikey=1bc6c554&s=" + titulo)
            .then(response => response.json())
            .then(json => {
            dispatch({ type: GET_MOVIES, payload: json });
        });
}


export function getMovieDetail(id){
    return async (dispatch) => {
        const res = await fetch(`http://www.omdbapi.com/?apikey=1bc6c554&i=${id}`);
        const res_1 = await res.json();
        dispatch({ type: GET_MOVIE_DETAIL, payload: res_1 });
    }
}


export function addMovieFavorite (payload){
    return {
        type: ADD_MOVIE_FAVORITE,
        payload: payload
    }
}

export function removeMovieFavorite(id){
    return {
        type: REMOVE_MOVIE_FAVORITE,
        payload: id
    }
}
