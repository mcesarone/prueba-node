//console.log("Hola");

//let nombre = "Matias";
//console.log(nombre);

//const informacionFija = "Curso FullStack Node";

// esta variable no puede llamarse despues para cambiar su contenido!


//nombre="Hernan";
//console.log(nombre);


//console.log(informacionFija);

// Tipos de datos

//let numeros = 232;
//let strings = 'Hola a todos';
//let boolean = true;

//let array = [23423, 
//    'hola', 
//    true,
//    ['azul', 'blanco', 'celeste', 'negro']
//];

//console.log(array[3][1]);

//let notANumber = 23/'u';
//let noDefinido;
//let nula = null;

//console.log(nula);

//Crear una función

//function saludar (){
//    return 'Hola Mati';
//}

//saludar();


//let objetoLiteral = {
//    clave: 'valor',
//    nombre: 'Matias',
//    ciudad: 'caba',
//    curso: 'fullstack'
//},

let curso = [
    {
        nombre: 'Matias',
        edad: 30,
        ciudad: 'caba',
        curso: 'fullstack',
        horario: ['8-12'],
        saludo: function (){
            return 'hola como les va';
        }
    },
    {
        nombre: 'Nicolas',
        edad: 30,
        ciudad: 'caba',
        curso: 'fullstack',
        horario: ['14-18'],
        saludo: function (){
            return 'hola como les va';
        }
    },
    {
        nombre: 'Alex',
        edad: 30,
        ciudad: 'caba',
        curso: 'fullstack',
        horario: ['18-22'],
        saludo: function (){
            return 'hola como les va';
        }
    },
    {
        nombre: 'Nacho',
        edad: 30,
        ciudad: 'caba',
        curso: 'fullstack',
        horario: ['8-12'],
        saludo: function (){
            return 'hola como les va';
        }
    },
]

for (var i=0; i<curso.length; i++){
    console.log(curso[i].saludo());
}

//console.log(objetoLiteral.nombre);