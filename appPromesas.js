"use strict";
//En la promesa podemos nombrar como queramos a los parámetros de éxito y error, en este caso
//les llamaremos "resolve" y "reject" respectivamente.
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        //En este ejemplo indicamos que todo salió bien 
        resolve();
    }, 1500);
});
//Con esta línea demostraremos que se ejecutarán primero las impresiones de "Paso 1" y "Paso 2"
//Y posteriormente concluirá el timeout para imprimir los mensajes de la promesa
console.log("Paso 1");
prom1.then(function () {
    console.log("Ejecutarme cuando termine bien");
}, function () {
    console.log("Ejecutarme si algo sale mal");
});
console.log("Paso 2");
