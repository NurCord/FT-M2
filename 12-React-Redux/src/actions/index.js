// APIKEY = 1bc6c554

export function getMovies(titulo){
    return function (dispatch){
        return fetch (`http://www.omdbapi.com/?apikey=1bc6c554&s=${titulo}`)
      .then(res => res.json())
      .then(json =>{
          dispatch({type: "GET_MOVIES", payload: json})
      })      
    }
}
/*
        return axios.get(`http://www.omdbapi.com/?apikey=1bc6c554&s=${titulo}`)
          .then(res => res.data)
          .then(res =>
            {
          dispatch({type: "GET_MOVIES", payload: res})
      })

*/

export function addMovieFavorite (payload) {
return{
type: "ADD_MOVIE_FAVORITE",
payload: payload
}
}

export function removeMovieFavorite(id){
return{
    type: "REMOVE_FAVORITE",
    payload: id
}
}

export function getMovieDetail(id){
    return function (dispatch){
        return fetch (`http://www.omdbapi.com/?apikey=1bc6c554&i=${id}`)
        .then(res => res.json())
        .then(res => {
            dispatch({type: "GET_DETAIL", payload: res})
        })
    }
}

export function clearDetail() {
    return{
        type: "CLEAR_DETAIL"
    }
}