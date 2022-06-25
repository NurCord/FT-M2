//Segundo archivo de redux

//Declaro mi estado
let initialState = {
    ciudad: {},
    ciudades: [],
    visitada: false
}

//llega desde actions.mjs --> la accion que es un objeto --> { type: "BUSCAR_CIUDAD", payload: result }

//todo reducer siempre tiene como parametro el state (inicializado con las propiedades que le indiquemos) y la accion que lo actualiza
export default function reducer (state = initialState, action){
     if (action.type === "BUSCAR_CIUDAD"){
         return{
             ...state, //copia del estado actual SIEMPRE!!!!
            ciudad: action.payload  // {name: "Rosario", temp_max: 40, temp_min: 10}
         }   
     }
     else if(action.type === "BUSCAR_CIUDADES"){
         return {
             ...state,
             ciudades: action.payload
         }
     }
     else if(action.type =="VISITADA"){
         return {
             ...state,
             visitada: true
         }
     }
     // no os olvideis del detalle de retornar por default el estado >:(
     else {
        return state 
     }
}