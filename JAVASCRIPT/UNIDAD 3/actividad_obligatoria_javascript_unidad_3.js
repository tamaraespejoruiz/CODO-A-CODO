function mostrar_msj_errores() {

    let usuario = document.getElementById("usuario");
    let contraseña = document.getElementById("contraseña");
    let arroba = /\@/;
    let vacio = "";
    let msj_contraseña_vacia = "La contraseña esta vacia";
    let msj_usuario_vacio = "El usuario esta vacio";
    let msj_vacio = "La contraseña y el usuario estan vacios";
    let msj_falta_arroba = "Falta ingresar la arroba en el usuario";
    let msj_correcto = "Los campos se llenaron correctamente";



    if (contraseña.value == vacio && usuario.value == vacio) {
        alert(msj_vacio);
    }
    else if (contraseña.value == vacio || usuario.value == true) {
        alert(msj_contraseña_vacia);
    }
    
    else if (contraseña.value == true || usuario.value == vacio) {
        alert(msj_usuario_vacio);
    }
    else if (!arroba.test(usuario.value)) {
        alert(msj_falta_arroba);
    }
    else {
        alert(msj_correcto);
    }

    
}
