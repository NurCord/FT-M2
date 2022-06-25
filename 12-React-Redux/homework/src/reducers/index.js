import React from 'react'
import {GET_MOVIES, GET_MOVIE_DETAIL, ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE} from './actions'

let initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
}

export default function rootReducer(state = initialState , actions) {
  switch (actions.type) {
    case GET_MOVIES: return{
        ...state,
        moviesLoaded: actions.payload.Search
    }
    case GET_MOVIE_DETAIL: return{
        ...state,
        movieDetail: actions.payload
    }   
    case ADD_MOVIE_FAVORITE: return{
        ...state,
        moviesFavourites: [...state.moviesFavourites, actions.payload]
    }
    case REMOVE_MOVIE_FAVORITE: return{
        ...state,
        moviesFavourites: state.moviesFavourites.filter((e)=> e.id !== actions.payload)
    }
    default: return state
  }
}
