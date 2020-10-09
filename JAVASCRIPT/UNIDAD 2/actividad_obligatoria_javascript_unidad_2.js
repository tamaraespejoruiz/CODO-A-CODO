let mensaje = "La tabla del ";

function mostrar_tabla_multiplicar(j){
    document.write("<h2>" + mensaje + j +":</h2>");
    for(let i = 1 ; i <= 9 ; i++){
        document.write(j + " x " + i + " = " + j * i + "<br>");
    }
}


mostrar_tabla_multiplicar(11);
mostrar_tabla_multiplicar(10);
mostrar_tabla_multiplicar(9);