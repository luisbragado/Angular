
let miVariable = "Hola";

if(true)    {
    let miVariable="Adiós";
}
//console.log(miVariable);    

//Templates Literales de ES6
let nombre:string = "Luis Gerardo";
let apellido:string = "Bragado";
let edad:number = 33;

//Texto en 1 sola línea
let texto:string = `Hola ${ nombre } ${ apellido } (${edad})`;

//Multiples líneas 
let textoVariasLineas:string = `
Hola ${ nombre } 
${ apellido } 
(${edad})`;

console.log(textoVariasLineas);