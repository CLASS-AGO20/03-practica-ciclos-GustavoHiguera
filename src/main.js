export default class App {

factorial(numero){
    let multiplicacion=1;
    for(let i=1; i<=numero; i++){
        multiplicacion=multiplicacion*i;
    }
    return multiplicacion;
}

convertirAString(numero){
    let asterisco="";
    let i=1
    while(i<=numero){
        asterisco=`${asterisco}*`
        i++
    }
    return asterisco;
}





}

let app = new App();

console.log("Probando factorial()");
console.log(app.factorial(5));

console.log("Probando convertirAString()");
console.log(app.convertirAString(5));