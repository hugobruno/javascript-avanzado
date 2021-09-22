const arreglo = [];
const arreglo2 = new Array();
let lenguajes = ['Javascript','Java','PHP','Python','C#','C++','Scala','Rust','Ruby','Cobol'];
/* forEach*/
document.write(`<ul>`);
lenguajes.forEach(function(lenguaje, index) {  //Funciones anónimas, ejecutan al momento//
    document.write(`<li>${index} - ${lenguaje}</li>`);
});
document.write(`</ul>`);
/* Map crea arreglo con los resultados*/
let numeros = Array (2,3,4,5,22,30);
let numeros2 = numeros.map(function(numero) {
return numero * 2;
});
console.log(numeros);
console.log(numeros2);
//includes
console.log(lenguajes.includes('PHP'));
//filter
let filtrados = numeros.filter(function(numero){
    if(numero>10){
        return numero;
    }
});
console.log(filtrados);