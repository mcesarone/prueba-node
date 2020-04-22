// Definir qué va a pasar cuando el usuario pida listar tareas

// let listaDeTareas = [
//     {
//         titulo:'Repaso Js',
//         estado: 'Terminada',
//     },
//     {
//         titulo:'Armar 1ra parte app tareas',
//         estado: 'En curso',
//     },
//     {
//         titulo:'Terminar app tareas',
//         estado: 'pendiente',
//     }, 
// ];

// Pasada la variable a JSON, necesitamos poder traer los datos para operarlos.

const fs = require('fs');


let tareas = {
    //creamos una función que lea el archivo JSON

    leerJson : function(){
        //readFileSync es un metodo para leer otro archivo
        let listaDeTareas = fs.readFileSync ('./data.json', 'utf8');
        listaDeTareas = JSON.parse(listaDeTareas);
        return listaDeTareas;
    },
    // listar: function(){
    //     // debe listar tareas
    //     for (let i=0; i<listaDeTareas.length; i++){
    //         console.log(i + ' ' + 'Titulo: ' + listaDeTareas[i].titulo + ' Estado: ' + listaDeTareas [i].estado);
    //     }
    // },
    verUna : function(){
        //Armarla: como listar una única tarea
        //hay que usar el indice del array
    },

}

console.log(tareas.leerJson());
module.exports = tareas;