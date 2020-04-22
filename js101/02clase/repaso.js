// condicionales swich

//stock para diferentes colores de remeras. 
//Solo se pueden evaluar igualdades entre el parametro y los casos



let color='azul';

switch(color){
    case ('blanco'): 
        console.log('Tenemos 10 remeras');
        break;
    case ('negro'): 
        console.log('Tenemos 5 remeras');
        break; 
    case ('azul'): 
        console.log('No tenemos stock en este momento');
        break; 
    default: 
        console.log('No tenemos ese color. por favor elegí otro');
        break;
}

//funciones regulares, scopes y arrow function

let saludo = 'Hola';

function sumar(num1,num2){
    let saludo = 'Hola dentro de la función';
    //el scope de esta variable es dentro de la función, por eso no da un error por tener la variable saludo ya declarada por afuera
    console.log(saludo);
    return num1+num2;
}

//console.log (saludo);
//console.log(sumar(1,2));

// función arrow

let suma = (num1, num2) => num1 + num2;

//console.log(suma(20,30));

// si tengo más que una única operación, hay que usar las llaves

//let suma=(num1,num2) =>{
    //codigo adicional;
    //más codigo;
    //return num1+num2;
//}

//Repasar funciones dentro de un objeto literal

let alumno ={
    nombre:'Gonzalo',
    edad: 23,
    saludar: function(){
        return 'hola a todos. Mi nombre es ' + this.nombre;
    }
    //en formato arrow
    // saludar () => 'Hola a todos. Mi nombre es: ' + alumno.nombre;
    //no se puede usar this con arrow funtions
}
//console.log(alumno.saludar());

// JSON: formato de intercambio de datos

// Así sería el alumno en formato JSON
// let alumnoJson ={
//     //Todo entre comillas dobles
//     "nombre" : "Gonzalo",
//     "edad" : "23",
// }

//transformamos el objeto literal a un string en formato JSON
let alumnoString = JSON.stringify(alumno);
//console.log(alumnoString);
//console.log(typeof alumnoString);

//volvemos a transformar el string en formato JSON a un objeto literal en formato JSON
let alumnoObject = JSON.parse(alumnoString);
//console.log(alumnoObject);
//console.log(typeof alumnoObject);

// callback: es una función que se pasa como parametro dentro de otra

function multiplicar(num1,num2){
    return num1*num2;
}

function calcular(num1,num2,operacion){
    return operacion(num1,num2);
}

//cuando la ejecuto no le tengo que pasar parametros
console.log(calcular(20,80,sumar));