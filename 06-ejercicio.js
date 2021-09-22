var num1, num2, resultado;

num1 = parseInt (prompt('Ingresa el primer numero'));
num2 = parseInt (prompt('Ingresa el segundo numero'));

if (num1>num2){
    resultado = num1;
    num1 = num2;
    num2 = resultado;
}

for(var i = num1; i <= num2; i++){

    if( i%2!= 0)

    console.log(i + ",");
}