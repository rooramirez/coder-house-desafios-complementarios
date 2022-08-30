//Pedir al usuario que ingrese 5 números mediante promt
//y el programa mostrara con una alerta, cuantos numeros pares e impares ingreso.

// let ingresarNum;
// let numPares = 0;
// let numImpares = 0;

// for (let i = 0; i < 5; i++) {

//     ingresarNum = prompt('ingrese un número: ');
//     if (ingresarNum % 2 === 0) {
//         numPares++;
//     }
//     else{
//         numImpares++;
//     }
// }
// alert('Usted ingreso ' + numPares + ' números pares y ' + numImpares + ' números impares');

//Pedir al usuario que ingrese un numero o varios y 
//el programa devolvera la cantidad de numero ingresados, de numeros par e impar.

let ingresarNum;
let cantNum = 0;
let numPar = 0;
let numImpar = 0;

while (ingresarNum !== 0 ) {
    ingresarNum = Number(prompt('Ingrese un número o la cantidad que desee y luego ingrese un espacio para finalizar y ver su resultado:'));
    
    if (ingresarNum % 2 === 0 && ingresarNum !== 0){
        numPar++;
        cantNum++;
    }
    else if (ingresarNum !== 0){
        numImpar++;
        cantNum++;
    }
    else{
        break;
    }
    
}

alert('Usted ingreso la cantidad de : ' + cantNum + ' números y ' + numPar + ' son números pares y ' + numImpar + ' son numeros impares.' );