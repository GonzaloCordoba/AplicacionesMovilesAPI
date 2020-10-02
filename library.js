const rp = require("request-promise");


function obtenerListadoDePersonajes(){

    var options = {
        uri: "https://www.breakingbadapi.com/api/characters",
        json:true
    }
    
    return rp(options)
}

function obtenerPersonajePorNombre(nombre){

    var options = {
        uri: "https://www.breakingbadapi.com/api/characters?name="+nombre,
        json:true
    }
    
    return rp(options)

}

module.exports = { obtenerListadoDePersonajes, obtenerPersonajePorNombre };