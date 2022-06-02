//ES6 => Estandar basado en js
//Nuevas Feactures

//* Keywords let y const
//let vs const vs

//CONST = inmutable, no se puede cambiar el valor

const array = [];
//array = [1, 2, 3]; !No se puede
//_______pero__________
array.push(1); //no le asigno un nuevo
array.push(2); //valor, sino que modifico
array.push(3); //el valor actual
//!SIIII
//_________________

const obj = {};
obj = { nombre: 'Martina' }
    //!NOOOOOOO

//___________pero__________
obj.nombre = 'Martina' //!SIIII

const obj1 = { nombre: 'Martina' }

if (obj === obj1) false
    //porque son dos posiciones de memorias distintas

if (obj.nombre === obj1.nombre) true

////////////////////////////////////

//LET = alcance de bloque({})

for (let i = 0; i < 10; i++) {
    console.log(i) //numeros
}
console.log(i) //undefined

//////////////////////////////////
//VAR = la unica que tiene hosting

//* Arrow Function

function f1() {
    console.log('f1');
}
f1();

//es lo mismo pero en AF

let f1b = () => { console.log('f1') }
f1b()

//si es una unica linea se pueden evitar las llaves

let f2b = () => console.log('f1')
let aa = f2b();
console.log(aa) // undefined porque no retorna nada la funcion

let f1c = () => 'f1c'; //sin llaves es como un return 'f1c'
let ba = f1c(); //me guardo 'f1b'
console.log(ba) // f1c 



class Auto {
    constructor(color, motor) {
        this.color = color;
        this.motor = motor;
    }
    arranca() {
        console.log('arranco')
    }

    aparagar() {
        console.log('apagar')
    }
}


class Tesla extends Auto { //heredo todo lo de auto
    constructor(color, motor, year) {
        super(color, motor); //estoy invocando al constructor del auto
        this.year = year;
    }
}
class Ferrari extends Auto {
    constructor(color, motor, chasis) {
        super(color, motor)
        this.chasis = chasis;
    }
}

let tesla = new Tesla('rojo', 'v8', 2021);
console.log(tesla);
tesla.arranca();

let ferrari = new Ferrari('Amarillo', 'v6', 3484848943);
ferrari.apagar();

/////////////////////////////////////////////////////

//cuando el nombre de la key === parametro 
//se pueden obviar

function hola(nombre, propiedad) {
    return {
        nombre,
        propiedad
    }
}

hola('Nuria', 8) // {nombre: 'Nuria', propiedad: 8}

////////////////////////////////////////////////////

//Destractoring

let newArray = [1, 2, 3, 4];

//?como podemos hacer esto??
//let a = 1;
//let b = 2;
//let c = 3;
//let d = 4;
// asi se puede hacer macheando elemento con elemento
let [g, h, i, t] = newArray;

function f9() {
    return [6, 7, 8, 9];
}

let respuesta = f9(); //[6, 7, 8, 9]
let [z, x, p, j] = f9(); // [z = 6, x = 7, p = 8,  v = 9]
console.log(z, x, p, j); //z = 6, x = 7, p = 8,  v = 9


//lo mismo con objetos

let otherObj = {
    nombrecito: 'Martina',
    edad: 20,
    ciudadd: 'CABA'
}

let { edad, ciudad } = otherObj; //let edad = otherObj.edad, let ciudad = otherObj.ciudad
console.log(edad, ciudad); // 20 'CABA'

//* Default
function f(x, y = 12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
}
f(3) == 15

//* Rest
function f(x, ...y) {
    // y is an Array
    return x * y.length;
}
f(3, "hello", true) == 6

//* Spread
function f(x, y, z) {
    return x + y + z;
}
// Pass each elem of array as argument
f(...[1, 2, 3]) == 6

//* Literales de Template
// Basic literal string creation 
    `In JavaScript is a line-feed.`
    // Multiline strings
`In JavaScript this is
not legal.`
// String interpolation
var names = "Bob",
    time = "today";
`Hello ${names}, how are you ${time}?`
// Construct an HTTP request prefix is used to interpret
// the replacements and construction
POST `http://foo.org/bar?a=${a}&b=${b}
Content-Type: application/json
X-Credentials: ${credentials}
{ "foo": ${foo},
"bar": ${bar}}` (myOnReadyStateChangeHandler);


//* Promises


const datos = [{
    id: 1,
    title: 'Iron Man',
    year: 2008,
}, {
    id: 2,
    title: 'Spiderman: Homecoming',
    year: 2017,
}, {
    id: 3,
    title: 'Avengers: Endgame',
    year: 2019,
}];

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error('No existen datos'))
        }

        setTimeout(() => {
            resolve(datos);
        }, 1500);

    })
}

getDatos()
    .then((datos) => console.log(datos))
    .catch((error) => console.log(error))

async function fectching() {
    try {
        const datoss = await getDatos();
        console.log(datoss);
    } catch (err) {
        console.log(err.message)
    }
}

fectching();


function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}
var k = timeout(1000)
    .then(() => { return timeout(2000); })
    .then(() => { throw new Error("hmm"); })
    .catch(err => { return Promise.all([timeout(100), timeout(200)]); })


//Babel => convierte el codigo a js puro