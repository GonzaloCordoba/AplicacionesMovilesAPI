const obtenerPersonajes = require("./library");


obtenerPersonajes.obtenerPersonajePorNombre("Gustavo").then( res=>{
    console.log(res);
    console.log("ID del personaje: "+res[0].char_id);
    console.log("Nombre del personaje: "+res[0].name);
    console.log("Estado del personaje: "+res[0].status);
    console.log("Cumpleaños del personaje: "+res[0].birthday);
    console.log("Ocupaciones: ");
    res[0].occupation.forEach( h => console.log("-"+ h));
    console.log("Nickname: "+ res[0].nickname);
    console.log("Actor: "+ res[0].portrayed);
    console.log("Temporadas en las que aprece: ");
    res[0].appearance.forEach(h => console.log("-"+h));
 
});