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

obtenerDivisibles(numero){
    let divisores=0;
    let i=1;
    do{
        if(numero%i===0){
            divisores++;
        }
        i++
    } while (i<=numero);
    return divisores;
}

elevar(numero,potencia){
    let resultado=1;
    for(let i=1; i<=potencia;i++){
        resultado=resultado*numero;
    }
    return resultado;
}

}

let app = new App();

console.log("Probando factorial()");
console.log(app.factorial(5));

console.log("Probando convertirAString()");
console.log(app.convertirAString(5));

console.log("Probando obtenerDivisibles()");
console.log(app.obtenerDivisibles(6));

console.log("Probando elevar()");
console.log(app.elevar(3,4));