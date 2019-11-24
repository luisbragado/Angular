"use strict";
//Creación de objeto que implementa dicha interface
var wolvering = {
    nombre: "Wolvering",
    poder: "Regeneración"
};
//Definición de funciones que reciben un objeto que implementa la interface
function enviarMision(xmen) {
    console.log("Enviando a " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando a " + xmen.nombre + " con su poder " + xmen.poder);
}
//Uso 
enviarMision(wolvering);
enviarCuartel(wolvering);
