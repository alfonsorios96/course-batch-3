# **[Centraal Academy](https://centraal.academy)**
-----------------------------------------------------
## Apuntes
_29-05-2018_

------------------------------------------------------
### [JAVASCRIPT] Datos Interesantes

#### Undefined, null y Nan 

[Casos especiales: undefined, null y NaN - todoJS](https://www.todojs.com/casos-especiales-undefined-null-y-nan/)
Trabajar con undefined, null o NaN no es sencillo. Es importante conocer su comportamiento para evitar confusiones y problemas.

##### Cuándo no usar Arrow functions
[Recomendaciones Arrow Functions](https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/)
Las funciones flechas en JavaScript son geniales, pero hay casos donde deberías evitarlas. 

#### Set
Función que recibe un parametro y lo imprime en consola.
[Set Docs](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Set)
El objeto Set te permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u objetos de referencia.

#### Map
[Map Docs](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map)
El objeto Map almacena pares clave/valor. Cualquier valor (tanto objetos como valores primitivos) pueden ser usados como clave o valor.

#### Closure
En ES5, se necesitaba crear funciones anidadas para que el encapsulamiento de las ariables esten definidas a un ecope específico
```javascript
function a() {
    var boo = '';
    function b() {
        this.nested;
        console.log(boo);
    }
}

(function() {
    'use strict';
    var baz = false;
})();
```

En ES6 ya no es necesario por las variables let y const, pero es posible 
```javascript

const a = () => {
    const boo = '';
    const b = () => {
        let globalBoo = boo;
        const boo = '';
    };

};

console.log(boo); // boo is undefined```

#### Dudas resueltas
Investigar si Set remplaza valores idénticos o los ignora.
https://www.ecma-international.org/ecma-262/6.0/#sec-set-constructor

*Qué es exactamente undefined y por qué lo acepta Set*
```Es un tipo de dato, y no agrega entrada.```

*Apply vs call* : call recibe los parámetros de la función a invocar, mientras que apply los recibe como array
```function add (a, b) {
    return a + b;
}

// Outputs: 3
console.log(add.call(this, 1, 2));

// Outputs: 3
console.log(add.apply(this, [1, 2]));

http://adripofjavascript.com/blog/drips/invoking-javascript-functions-with-call-and-apply.html```
*Funciones generadoras function* * : opción válida para manejar el flujo asíncrono de operaciones
```function bar(name, callback) {}
function xyz(name, callback) {}
function baz(name, callback) {}
 
function foo(callback) {
  bar('bar', function(err, barRes) {
    if (err) {
      callback(err);
      return;
    }
    xyz('xyz', function(err, xyzRes) {
      if (err) {
        callback(err);
        return;
      }
      baz('baz', function(err, bazRes) {
        if (err) {
          callback(err);
          return;
        }
        callback(null, [ barRes, xyzRes, bazRes ]);
      });
    });
  });
}```

```const co = require('co');
 
function* bar(name) {}
function* xyz(name) {}
function* baz(name) {}
 
function* foo() {
  const barRes = yield bar('bar');
  const xyzRes = yield xyz('xyz');
  const bazRes = yield baz('baz');
  return [ barRes, xyzRes, bazRes ];
}
co(function*() {
  yield foo();
  console.log('Good-bye');
  process.exit();
}).catch(function(err) {
  console.error('Something bad...', err);
  process.exit(1);
});```|

*Lambda expression vs arrow function* : Lamba expression es una fábrica de funciones, para lenguajes como Python, y Java, la ventaja de esto es crear funciones dinámicas.
```https://www.vinta.com.br/blog/2015/javascript-lambda-and-arrow-functions/```
