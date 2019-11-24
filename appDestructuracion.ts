
let avenger = {
    nombre: "Steve", 
    clave: "Capitán América",
    poder: "Droga"
}

// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;

//Destructuración
let {nombre, clave, poder } = avenger;

console.log(nombre, clave, poder);

//Destructuración de ARREGLOS
let avengers:string[] = ["Thor", "Steve", "Tony"];

let [thor, capi, ironman] = avengers;

console.log(thor, capi, ironman);