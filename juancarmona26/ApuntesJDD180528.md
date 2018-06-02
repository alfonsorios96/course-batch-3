# **[Centraal Academy](https://centraal.academy)**
-----------------------------------------------------
## Apuntes
_28-05-2018_

------------------------------------------------------

#### ES6 Again
Este código es la representación de una clase en código ES6
``` javascript
function User(name) {
    this.name = name;
}

User.prototype.getFullName = function() {
    return this.name + ' ' + this.lastName;
};

User.staticMethod = function() {
    return 'Holi';
};
```
Así es como se represnta internamente en JavaScript
```javascript
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
```
[Babel Utils](https://github.com/babel-utils) sirve para tomar un código de versiones recientes y pasarlo a versiones de código de versiones anteriores. Un ejemplo claro sería pasar código ES6 a ES5.

[Solid](https://scotch.io/bar-talk/s-o-l-i-d-the-first-five-principles-of-object-oriented-design) muestra principios del desarrollo orientado a objetos en JavaScript.

#### Desestructuración en Javascript. 
En este caso, la desestructuración podemos definirla como una expresión que permite asignar valores a nombres conforme a una estructura de tabla dada. Veamos un ejemplo rápido y simple:
```javascript
var { foo: x, bar: [ y, z ] } = { foo: 'Hello World', bar: [ 'Goodbye', 'Lenin' ] };
 
console.info( x, y, z ); // Hello World Goodbye Lenin
```
#### Promises en JavaScript
Una Promise (promesa en castellano) es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. Una promesa puede ser creada usando su constructor. Sin embargo, la mayoría de la gente son consumidores de promesas ya creadas devueltas desde funciones.

Ejemplos: 
```javascript
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
```
   
Para hacer un método asíncrono se necesita que la función o las acciones entren en el método 'then' de la promesa para su ejecución.

Ejemplo: 
```javascript
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
```

