//Objetos
let nombre ="sasuke"
let anime = "naruto"
let edad = "20"

//Puedes agregar datos a un objeto definiendo antes o tambien colocandolos dentro
let personaje ={
    nombre, anime, edad
};

let Cancion = {
    nombre: "DTMF",
    cantante: "Bad Bunny"
}

console.log(personaje)
//asi se muestra solo la propiedad que quisieras (cualquiera de las dos formas)
console.log(personaje['anime'])
console.log(personaje.edad)

//para eliminar propiedad:
delete personaje.nombre

console.log(personaje)