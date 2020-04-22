// traemos las operaciones de la app - archivo operations
const operations = require('./operations');

// Obtener el dato del usuario que escribe en la terminal
let action = process.argv [2];
let opcion = process.argv [3];

switch(action){

    case ('listar'):
        //Listar tareas
        operations.listar();
        break;
    
    case ('verUna'):
        if (opcion !== undefined){
            operations.verUna(opcion);
        } else{
            console.log('Por favor ingrese una opcion');
        }
        
        break;
    
    case ('nueva'):
        //Ejecutar una funcion que agregue una tarea
        let tarea = {
            titulo: process.argv[3],
            estado: 'pendiente'
        }
        operations.crear(tarea);
        break;
    
    case ('borrar'):
        let tareaABorrar = process.argv[3];
        operations.borrar(tareaABorrar);
        break;
    
    case ('cambiar'):
        let indice = process.argv[3];
        let nuevoEstado = process.argv[4];
        operations.cambiarEstado(indice, nuevoEstado);
        break;
    
    case (undefined):
        console.log('Por favor eliga una acción a realizar');
        break;
    
    default:
        console.log('La acción solicitada no existe.');
        break;
}