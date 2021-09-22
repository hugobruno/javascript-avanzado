var num1, num2;

num1 = parseInt (prompt('Ingresa el primer numero'));
num2 = parseInt (prompt('Ingresa el segundo numero'));

if (num1 > num2){
    sum=num1+num2;
    rest=num1-num2;
    document.write("El resultado es: "+ ( parseInt(num1) + parseInt(num2) ) );
    document.write("El resultado es: "+ ( parseInt(num1) - parseInt(num2) ) );
    
}else{
    document.write("El resultado es: "+ ( parseInt(num1) / parseInt(num2) ) );
    document.write("El resultado es: "+ ( parseInt(num1) * parseInt(num2) ) );
}