//try nos permite ejecutar código que es factible a fallas
const gravedad = 9.8;
    console.log(gravedad);

try {
    gravedad = 10.1;

} catch (e) {
    console.log(e);
    
} finally{
    console.log('soy el finally');
}
    console.log(gravedad);


