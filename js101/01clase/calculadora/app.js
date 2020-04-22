//calculadora

// por convencion la variable se va a llamar igual que la funcion a la que estoy llamando
const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

console.log(sumar(20,30));
console.log(restar(20,30));
console.log(multiplicar(20,30));
console.log(dividir(20,0));


//function sumar(num1,num2){
//   return num1 + num2;
//}


//function restar(num1,num2){
//    return num1 - num2;
//}


//function multiplicar(num1,num2){
//    return num1 * num2;
//}


//function dividir(num1,num2){
//   if (num2===0){
//    console.log('No es posible dividir por 0');
//    } else{
//        return num1 / num2;
//    }
//}

