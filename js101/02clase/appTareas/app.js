//console.log(process.argv);

//cómo obtengo la acción del usuario? entry point de la aplicación de tareas 
const tareas = require('./tareas');

let action = process.argv[2];
//let verUna = process.argv[3];

console.log(tareas);

// qué hago con esa acción que pide el usuario?

switch (action){
    case 'listar':
        //acá tenemos que tratar de listar todas las tareas
        console.log('Lista de tareas');
        tareas.listar();
        break;
    // si no ingresa nada, sería un undefined, porque en la posición [2] no hay nada.
        case ('undefined'):
        console.log('Por favor elija una acción');
        break;
    default:
        console.log('La acción solicitada no existe. Por favor, elija otra.');
        break;
    }
