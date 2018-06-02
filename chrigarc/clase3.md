# Clase 3 - EcmaScript 6
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
JS es un lenguaje prototipado
ECMAScript (estándar) 6
JavaScript (lenguaje) 2015

## Variables

Constantes `const foo = '';`
Variables `let foo = '';`


En una constante de objeto sus propiedades se pueden modificar si no tienen la bandera `readonly`
const ocupa menos memoria, optimizado para objetos
```js
const hello = () => {
    // @TODO
}; 
```
## Parametros por default
```js
const hello = (name = '') => {
}
```
## 'use strict'
Indica al navegador que el script debe respetar el estandar 

## Type Coercion
Cast automatico dinamico que hace JS para forzar el tipo de dato, es riesgoso usarlo.
para el comparador `==` y `!=` JS tambien realiza Type Coercion para evitarlo usar `===` y `!==`

## Ciclos
### Para familia de Enumerables
```js
for (const index in array){
}
```
### Para familia de colecciones
```js
for (cons iterable of array){

}
```
## Array.map
Computar un array retornando un nuevo array con la aplicación del callback a cada una de las entradas
const newArray = array.map((key) => {
});
#### Ejemplo
```js
const users = [{
    name: '';
    lastName = '';
}];
const newArray = users.map((user) => {
    return { 
        fullName: `${user.lastName}, ${user.name}`
    };
});
```

## String template o Concatenación Pro 
Sin necesidad de usar tantas `'` y signos de `+`, para usar variables e incluso funciones 
`${expresion1}, ${expresion2}` 

## Destructurar el dato
A una llave se puede destructurar (separar) como llave valor

# Bibliografía 
https://www.ecma-international.org/ecma-262/6.0/
https://developer.mozilla.org/es/docs/Web/JavaScript
https://codeburst.io/foreach-vs-for-of-vs-for-in-tug-of-for-d8f935396648
