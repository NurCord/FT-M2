import redux, {combineReducers} from 'redux'
import reducer from './reducer.mjs'
// import { otroReducer } from './otroReducer.mjs' --> Importamos todos los reducer que tengamos

//Este es mi primer componente de redux, aqui creo el store. Si tuviera mas de 1 reducer aplicaria el metodo combineReducer

const store = redux.createStore(reducer)
//recuerden que aparece tachado porque en un futuro migraremos a Redux Toolkit

//console.log(store.getState()) --> Para chequear que ya tengamos la conexion. 
export default store

