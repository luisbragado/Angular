//Definición de la interface
interface Xmen{
    nombre : string,
    poder : string
}

//Creación de objeto que implementa dicha interface
let wolvering:Xmen = {
    nombre: "Wolvering"    ,
    poder: "Regeneración"
};

//Definición de funciones que reciben un objeto que implementa la interface
function enviarMision(xmen:Xmen){
    console.log("Enviando a " + xmen.nombre);
}

function enviarCuartel(xmen:Xmen){
    console.log(`Enviando a ${ xmen.nombre} con su poder ${xmen.poder}`);
}

//Uso 
enviarMision(wolvering);
enviarCuartel(wolvering);