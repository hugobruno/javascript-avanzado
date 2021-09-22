/* const edad = parseInt(prompt ("Ingresa tu edad"));
let mensaje = "";

if(edad === 18){
    mensaje= "Acaba de cumplir la mayoría de edad";
}

switch (edad){
    case 18:
        mensaje= "Acaba de cumplir la mayoría de edad";
        break;

    case 25:
        mensaje= "Ya es un Adulto";
        break;

    case 70:
        mensaje= "Ya es de la Tercera edad";
        break;
    default:
        mensaje = "Está fuera del rango de edad";
        break;

}

document.write(`<p>${mensaje}</p>`); */

const nombre = parseInt(prompt ("Ingresa tu nombre"));
let mensaje = "";

switch (nombre){
    case 'Carlos':
        mensaje= "Administrador";
        break;

    case 'Bruno':
        mensaje= "Usuario";
        break;

    default:
        mensaje = "No tiene permitido usar el sistema";
        break;

}

document.write(`<p>${mensaje}</p>`); 
