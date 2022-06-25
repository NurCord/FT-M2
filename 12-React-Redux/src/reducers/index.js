const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
}

function rootReducer (state = initialState, action){
switch(action.type){
    case "GET_MOVIES":
        return{
            ...state,
            moviesLoaded: action.payload.Search
        }
    case "ADD_MOVIE_FAVORITE": 
    return{
        ...state,
        moviesFavourites: state.moviesFavourites.concat(action.payload)
      // moviesFavourites: [...state.moviesFavourites, action.payload]
    }
    case "REMOVE_FAVORITE":
        return{
            ...state,
            moviesFavourites: state.moviesFavourites.filter(movie => movie.id !== action.payload)
        }
    case "GET_DETAIL":
        return{
            ...state,
            movieDetail: action.payload
        }
    case "CLEAR_DETAIL":
        return{
            ...state,
            movieDetail: {}
        }
        default: 
        return state
}

}

export default rootReducer