const primera = 40;
const segunda = 16;
let mensaje = "El resultado de la suma de las dos variables es:"


function suma(numero_1, numero_2) {

    return numero_1 + numero_2;
}

suma = suma(primera, segunda)

function mostrar_resultado(parametro) {

    document.write("<h1>"+ mensaje + "</h1>");
    
    document.write("<h2>" + parametro + "</h2>");
}


mostrar_resultado(suma)