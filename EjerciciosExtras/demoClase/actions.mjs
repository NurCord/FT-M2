//Tercer archivo de redux. Mis acciones..
// La funcion es importada e invocada en los componentes
// La accion se envia al reducer

export function buscarCiudad(id){
    const result = /*fetch url${id}*/ {name: "Rosario", temp_max: 40, temp_min: 10}
    //console.log(result)
    return {
        type: "BUSCAR_CIUDAD",
        payload: result //informacion que quiero mandar al estado para actualizarlo

    }
}

export function buscarCiudades() {
    const result = [{name:"Rosario"}, {name: "TIerra del Fuego"}]
    return {
        type: "BUSCAR_CIUDADES",
        payload: result
    }

}


export function visitar (id) {
return {
    type: "VISITADA"
}
}