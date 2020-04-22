//Tenemos las acciones del usuario en la app

//voy a leer el archivo JSON. Los modulos nativos no se llaman con './'
const fs= require('fs');

let operations = {
    
    leerJson : function(){
       // acá pregunto si el dataJson existe

       if(fs.existsSync('data.json')){      
       
       //readFileSync es un metodo para leer otro archivo
       let listaDeTareas = fs.readFileSync ('./data.json', 'utf8');
       listaDeTareas = JSON.parse(listaDeTareas);
       return listaDeTareas;
       
        } else{
            return [];
            // si no hay archivo me devuelve uno vacío para empezar a trabajarlo después
       };
    },

    escribirJson: function(datos){
        let data = JSON.stringify(datos, null, ' ');
        //estos ultimos 2 parametros que le pasé, es para que lo guarde "lindo" en el JSON
        fs.writeFileSync ('data.json', data);
    },

    listar: function (){
        // traigo los datos del data.json
        let listaDeTareas = this.leerJson();
        
        console.log('Lista de Tareas:');
        console.log(' ');

        //reemplazar for por forEach
        // for (let i=0; i<listaDeTareas.length; i++){
        //     console.log(i + ' ' + listaDeTareas[i].titulo + ' | Estado: ' + listaDeTareas[i].estado);
        // }
        
        listaDeTareas.forEach(function(element, i){
             console.log (i + ' ' + listaDeTareas[i].titulo + ' | Estado: ' + listaDeTareas[i].estado);
        });
    },

    verUna: function (opcion){
        let listaDeTareas = this.leerJson();
        
        console.log(opcion + ' Tarea: ' + listaDeTareas[opcion].titulo + ' | Estado: ' + listaDeTareas[opcion].estado);
    },

    crear: function(unaNuevaTarea){
        let listaDeTareas = this.leerJson();
        listaDeTareas.push(unaNuevaTarea);
        // listaDeTareas = JSON.stringify(listaDeTareas, null, ' ');
        // fs.writeFileSync ('data.json', listaDeTareas);
        this.escribirJson(listaDeTareas);
        console.log('La tarea se agregó con éxito');
    },

    borrar: function(num){
        let listaDeTareas = this.leerJson();
        listaDeTareas.splice(num,1);
        // el 1 es para decirle que queremos borrar 1 elemento
        this.escribirJson(listaDeTareas);
        console.log('La tarea fue eliminada con éxito');
    },

    cambiarEstado: function(indice, estado){
        let listaDeTareas = this.leerJson();
        // este if me devuelve un undefined, y se interpreta como false si consulto un indice que no existe
        if(listaDeTareas[indice] ){
            listaDeTareas[indice].estado=estado;
            this.escribirJson(listaDeTareas);
            console.log('Estado cambiado con exito');
        } else{
            console.log('La tarea indicada no existe');
        }
       
    }

}

module.exports = operations;