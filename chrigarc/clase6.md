# Clase 6
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## undefined
La propiedad global undefined representa el valor primitivo undefined. Es uno de los valores primitivos de JavaScript.
| Atributos de la propiedad undefined | |
| --- | --- |
| Sobrescribir | No |
| Numerable | No |
| Configurable | No |

Una variable a la que no se le ha asignado valor es de tipo undefined. Un método o sentencia también devuelve undefined si la variable que se está evaluando no tiene asignado un valor. Una función devuelve undefined si no se ha devuelto un valor.

## NaN
Un valor representando un Not-A-Number (No es Un Número).
| Atributos de la propiedad NaN | |
| --- | --- |
| Sobrescribir | No |
| Numerable | No |
| Configurable | No |

NaN es una propiedad del global object (objeto global), por ejemplo, es una variable de alcance global.
El valor inicial de NaN es Not-A-Number (No es Un Número) - lo mismo que el valor de Number.NaN.

NaN nunca es equivalente con cualquier otro número, incluido el mismo NaN; no puedes chequear el valor de un not-a-number comparándolo con Number.NaN. Usar la función isNaN() para aquello.

Muchos métodos de JavaScript (como son el Number constructor, parseFloat y parseInt) retornan NaN si el valor especificado en el parámetro no puede ser parseado como un número.
Puedes utilizar la propiedad NaN para indicar una condición de error para tu función que devuelva un número en caso de éxito.

JavaScript imprime el valor Number.NaN como NaN.

## Null

## Array
`````js
const array = ['a','b',..,'z'];
cons array = new Array('a',..., 'b');
Array.isArray(variable)
`````
## Set 
Lista con valores únicos 

## Map
Almacena pares (llave - valor)
las llaves pueden ser cualquier cosa incluso funciones
``````js
const map  = new Map([Iterable])
``````

## Clousure 
Funciones que declaran funciones
``````js
const a = () => {
    let boo = ''; //el alcance de boo solo esta dentro de la función a
}
``````
## Funciones generadoras
``````js
function* gen(i){
    yield i + 1; 
    yield i + 2; 
}
var generador = gen(1);
generador.next().value;  //regresa 2, ejecuta el primer yield
generador.next().value;  //regresa 4, ejecuta solo el segunda yield
generador.next().value;  //regresa undefined ya que no hay mas yield
``````

# Bibliografía 
https://www.todojs.com/casos-especiales-undefined-null-y-nan/
https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
https://www.w3schools.com/js/js_arrays.asp
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Set
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map
