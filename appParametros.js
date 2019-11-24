"use strict";
function activar(quien, //Parámetro obligatorio ya que no estamos especificando nada 
objeto, //Parámetro opcional ya que en caso de no enviarlo tendrá un valor por default
momento //Parámetro opcional, con ? indicamos que se puede o no enviar.
) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento)
        mensaje = quien + " activ\u00F3 la " + objeto + " en el momento " + momento;
    else
        mensaje = quien + " activ\u00F3 la batise\u00F1al";
    console.log(mensaje);
}
activar("Spiderman");
activar("Gordon", "britney", "ahora");
