# **[Centraal Academy](https://centraal.academy)**
-----------------------------------------------------
## Apuntes
_24-05-2018_

------------------------------------------------------
### [JAVASCRIPT] ECMASCRIPT6

#### El workflow de Git se compone de lo siguiente
_ECMASCRIPT_ (Standar) 6 es el estandar más reciente en JavaScript
_JavaScript_  (Lenguaje)2015
> Refieren al mismo lenguaje y la misma versón   

JavaScript es un lenguaje Prototipado (Todo en JavaScript es un objeto).
JavaScript no es un lenguaje orientado a objetos.

Documentación del estandar ES6 [ir a Liga][ligaDocEcs6]

[ligaDocEcs6]: www.ecma-international.org/ecma-262/6.0/

Declaración de variables
**ES5**
```javascript
var boo = ''; //es5 versión del estandar deprecado
```

##### ES6

```javascript
const boo = '';
let boo = '';
```
El tipado const índica que se está declarando una constante, pero las propiedades de las variables no lo son.
El tipado const ayuda mucho al rendimiento y uso de memoria.

Todo se declara con un "const"
Si después de verificar si necesitamos cambiar sus valores se cambia a "let"

#### Funciones
Función que recibe un parametro y lo imprime en consola.
```javascript
function hello(name) {
 console.log(name)
};
```
Función que recibe un parámetro y e asigna un valor e imprime en consola.
```javascript
const hello = (name ='') => {
	console.log(name);
};
```

> 'use strict' sirve para que el código se escriba de forma más cercana a los estandares es6
 ```javascript
'use strict';
```

#### Operadores Condicionales
> Nuetro amigo para condiciones simples
 ```javascript
if()
```
> Nuestro Amigo del alma, Woody, no abusar utilizandolo con más de 2 comparaciones
 ```javascript
if else (condicional)
```
> Switch se sua para cuando existan muchos casos a evaluar y no abusar de nuestro amigo Wood
```javascript
switch()
```

#### No usar en JavaScript
> No es recomendable usar los operadores ternarios debido al type coercion, que es un cast automático en java script para forzar el tipo de dato

```javascript
condition ? true : false; // NO USAR
return name ? name : '';// NO USAR
return || ''; // NO USAR
```

Type coercion es nuestro enemigo 
Type coercion evalua 0 como false

== ó != compara según el caste de type coercion
=== ó !== comparación estricta

#### Ciclos 'for'
**Legacy**
```javascript
let array = [1,2,3];
 for (i=0 ; i<array.length; i++){} normal
    
array.foreach(fucntion(){
 });
 ```
 
 **ECS6**
 ```javascript
 let array = [1,2,3];
 for(const index in array) {// nos trae los índices del arreglo. Optimizado para iteración de Objects y extraer propiedades
 }

 for(const iterable of array){// nos trae los valores de un arreglo. Optimizado para arreglos
 ```
 
 > No todas las pripiedades son enumerable
 
El uso de map nos permite retornar un arreglo de datos a otro, con propiedades o valores distintos.
```javascript
 const newArray = users.map((user) => {
 return {
	fullName: `${user.name}` ; //Template strings
 };
 });
 ```
 En Java Script siempre se utilizar **' '** para la representación de strings en el código, para diferenciarlo de las pripiedades o representaciones de valor en HTML
 > " " para HTML
 > ' ' para JavaScript
 
