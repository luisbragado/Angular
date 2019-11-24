//Comenzamos a trabajar en archivo flecha

//Funcion 1 - Normal
let miFuncion = function(a){
    return a;
}

//Funcion 1 - Flecha
let miFuncionF = (a) => a;

console.log(miFuncion("Normal"));   
console.log(miFuncionF("Flecha"));

//Funcion 2 - Normal
let miFuncion2 = function(a:number, b:number){
    return a + b;
}
//Funcion 2 - Flecha
let miFuncion2F = (a:number, b:number) => a + b;

console.log(miFuncion2(3,6));   //Devuelve el mismo resultado
console.log(miFuncion2F(3,6));

//Funcion 3 - Normal
let miFuncion3 = function(nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}
//Funcion 3 - Flecha, como son más de 2 líneas en la operación por ello se deben utilzar {}
let miFuncion3F = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;
}

console.log(miFuncion3("hola"));    //Devuelve el mismo resultado 
console.log(miFuncion3F("hola"));


let hulk = {
    nombre: "Hulk",
    smash(){
        //Retardamos 1.5 segundos la ejecución con un timeout
        //Incluso si en nuestra función de flecha no recibimos parámetros se tienen que poner los paréntesis
        setTimeout(() => console.log(this.nombre + " smash!!!"), 1500);
    }
}

hulk.smash();