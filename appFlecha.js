"use strict";
//Comenzamos a trabajar en archivo flecha
//Funcion 1 - Normal
var miFuncion = function (a) {
    return a;
};
//Funcion 1 - Flecha
var miFuncionF = function (a) { return a; };
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
//Funcion 2 - Normal
var miFuncion2 = function (a, b) {
    return a + b;
};
//Funcion 2 - Flecha
var miFuncion2F = function (a, b) { return a + b; };
console.log(miFuncion2(3, 6)); //Devuelve el mismo resultado
console.log(miFuncion2F(3, 6));
//Funcion 3 - Normal
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//Funcion 3 - Flecha, como son más de 2 líneas en la operación por ello se deben utilzar {}
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion3("hola")); //Devuelve el mismo resultado 
console.log(miFuncion3F("hola"));
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        //Retardamos 1.5 segundos la ejecución con un timeout
        //Incluso si en nuestra función de flecha no recibimos parámetros se tienen que poner los paréntesis
        setTimeout(function () { return console.log(_this.nombre + " smash!!!"); }, 1500);
    }
};
hulk.smash();
