const colors = require('colors');
const argv = require('./config/yargs').argv;
let comando = argv._[0];
let porHacer = require('./por-hacer/por-hacer');
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log("==========Por hacer ============".green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("===============================".green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
    default:
        console.log('Comando no reconocido.');
}