/*
var conteo = 0, numero, ciclos;
for ( ciclos=1; ciclos<= 10; ciclos++)
{
    numero = prompt ("Introduzca un numero");
    numero = parseInt (numero);
if (numero<0) break;
    conteo += numero;
}
*/


let sum=0, prom, cont=0, num;
num = parseInt(prompt("Ingresa numero"));
while(num>=0){
    cont++;
    sum = sum+num;
    num = parseInt(prompt("Ingresa numero"));
}
promedio= sum/cont;
document.write("Numeros sumados" + cont);
document.write("La suma es" + sum);
document.write("El promedio es" + promedio);