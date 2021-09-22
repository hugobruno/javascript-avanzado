var numero;
numero = parseInt(prompt("Introduce un numero"));
for(var i = 1;i <= numero;i++){
    if(numero % i == 0){
        console.log(i);
    }
}