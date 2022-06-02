/* COMMONJS => BACK
exportar: 
    module.exports = {a, b, c, d}
importar:
    let {a, b, c, d} = require('./nombreDelArchivo')

ES6 => FRONT
    exportar: 
        export variable/function ej = function sum(a,b) return a+b;
        export default variable/function (1 por archivo) ej = function div(a/b) return a/b;
    importar:
        export -> import {sum} from ('./nombreDelArchivo');
        export default -> import div from ('./nombreDelArchivo');


        TODO Junto = import {sum}, div from ('./nombreDelArchivo'); */


var names = ["Domingo", "Lunes", "Martes", "Miercoles",
    "Jueves", "Viernes", "Sabado"
];
export function name(number) { return names[number]; };
export function number(name) { return names.indexOf(name); };
export default function myDefault() {
    // otras cosas...
}
//export default se puede exportar solo uno 
// y se exporta como variable

// index.js
import { number, name }, myDefault from './WeekDays.js';
console.log(name(number("Domingo")));

//Bundlers


//Webpack


// npm init
// npm install --save-dev webpack webpack-cli

/* package.json
"scripts": {
"start": "node server.js",
"build": "webpack"
} */

// crear archivo webpack.config.js`

//

// webpack.config.js`
module.exports = {
    entry: './browser/app.js', // el punto de arranque de nuestro programa
    output: {
        path: __dirname + '/browser', // el path absoluto para
        // el directorio donde queremos que el output sea colocado
        filename: 'bundle.js' // el nombre del archivo que va a contener
            //nuestro output - podemos nombrarlo como queramos pero bundle.js es lo típico
    }
}

// Webpack

// npm run build

/* Hash: 43fddf2175fdf6f7923f
Version: webpack 2.2.1
Time: 72ms
Asset Size Chunks Chunk Names
bundle.js 3.1 kB 0 [emitted] main
[0] ./browser/app.js 586 bytes {0} [built] */

/* <!doctype html>
    <html>
        <head>
        </head>
        <body>
            <script src="./dist/bundle.js"></script>
        </body>
</html> */