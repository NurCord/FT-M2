// desde aca hago el dispatch(buscarCiudad(8))

import store from './store.mjs'
import { buscarCiudad, buscarCiudades, visitar } from './actions.mjs'

//console.log(store.getState())
//store.dispatch(buscarCiudad(8))
store.dispatch(buscarCiudades())
store.dispatch(visitar())
console.log("store", store)
console.log("luego del dispatch", store.getState())
