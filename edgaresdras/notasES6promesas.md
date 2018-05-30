# ES6 Clases

#Promises
Metodo estatico: no requiere de una instancia

### Dudas:
instancias de una clase
sincrono / asincrono
hilo de ejecucion
clase
constructor
promesas
estatico

### Ejercicio:
realizar una tabla con datos de usuarios provenientes de:
https://randomuser.me/api/
index.html
index.js
'use strict'
con dialog modal en caso de error

### Links utiles
https://developer.mozilla.org/es/docs/Web/JavaScript/Introducci%C3%B3n_a_JavaScript_orientado_a_objetos
https://github.com/babel-utils
https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design
http://www.etnassoft.com/2016/07/07/desestructuracion-en-javascript-parte-2-recetas-y-ejemplos/
https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
https://github.com/kcmr/most
https://randomuser.me/api/

### Promesas
const promise = (option = '1') => {
    return new Promise((resolve, reject) => {
        if(option === '1') {
            resolve(true);
        } else {
            reject(false);
        }
    });
};

promise()
    .then(response => response.json())
    .then(json => {
        return 0;
    })
    .then(number => {
        //
    })
    .catch(error => {
        console.log('Rejected');
    });

### Promesas estructura general
promise()
    .then(response => {
        myFunction(response);
    })
    .catch(error => {
        console.log('Rejected');
    });

const myFunction = (data) => {
    // @todo
};

### Ejemplo de prototipos y clases

function User(name) {
    this.name = name;
}

User.prototype.getFullName = function() {
    return this.name + ' ' + this.lastName;
};

User.staticMethod = function() {
    return 'Holi';
};

//

class User {
    constructor(name) {
        this.name = name;
    }

    getFullName() {
        return this.name + ' ' + this.lastName;
    }

    static staticMethod() {
        return 'Holi';
    }
}

const user = User.staticMethod();

### NodeJS / Módulos NPM

commander
yargs

my-awesome-project init <name>

src/
    <name>/
        - <name>.js (PLANTILLA DE Módulos)
lib/
    - ES5 with Babel
.gitignore
Exluir lib/
node_modules/
*.log

import { <Name> } from '<name>'

class <Name> {
    constructor(){

    }
}

export { <Name> };
