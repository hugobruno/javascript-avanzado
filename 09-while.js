//VALIDACIÓN NÚMERO SECRETO

let num1 = parseInt(prompt('Ingresa numero secreto'));
const num_secreto = 23 ;
let intentos =1;

while(num1 !== num_secreto){
    console.log("No adivinaste el numero secreto");
    console.log(`Intento: ${intentos}`);
    num1 = parseInt(prompt("Ingresa un numero"));
    intentos++;


}
console.log('Felicidades');