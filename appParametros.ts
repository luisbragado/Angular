
function activar(quien:string, //Parámetro obligatorio ya que no estamos especificando nada 
                objeto:string ="batiseñal", //Parámetro opcional ya que en caso de no enviarlo tendrá un valor por default
                momento?:string //Parámetro opcional, con ? indicamos que se puede o no enviar.
            ){
    let mensaje:string;

    if(momento)    
        mensaje =  `${quien} activó la ${objeto} en el momento ${momento}`;
    else
        mensaje = `${quien} activó la batiseñal`;

    console.log(mensaje);
}

activar("Spiderman");
activar("Gordon","britney","ahora");