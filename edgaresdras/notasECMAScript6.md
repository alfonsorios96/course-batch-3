# Ecmascript6

### Declaración de variables
```sh
var boo= ''; // es5
// es6
const boo = '',
let boo = '';
const user = {};
user.name = '';
```

### Consideraciones ES6
```sh
Todos los objetos y constantes deben ser const
ej: const PORT =´8080';
let: solo cuando el sistema lo requiera
Camelcase: Para creación de funciones y variables
=== para evitar coersion de datos
'use strict'
bandera que indica el modo estricto, nos evita errores:
usar variables sin declarar
const hello = () => {
    // @todo
};
```

### Notas
```sh
ECMAScript (Es el estándar) 6
JavaScript (Es el lenguaje) 2015
### type coercion
Coerción es la acción de forzar a que un objeto se comporte como si fuera de otro tipo.
```

### Uso de Condicionales:
```sh
if = una sola opcion
if else = solo en 2 opciones
switch: mas de 2 casos
```

### Uso de Ciclos:
```
Antiguos: for (arrays) / foreach (nodos)
Nuevos: for(const index in array) / for(const iterable of array){

forEach: Funciona solo con estructuras de datos que son Arrays. El método básicamente itera sobre los elementos de la matriz y ejecuta una función de devolución de llamada.

for-in: Para objetos o propiedades. Aplicable a todos aquellos que tienen algunas propiedades enumerables [Las propiedades enumerables son aquellas propiedades cuyo indicador interno [[Enumerable]] se establece en verdadero, que es el predeterminado para las propiedades creadas mediante asignación simple o mediante un inicializador de propiedad ] En el uso normal, el bucle for-in se usa básicamente para forjar las propiedades de un objeto.

for-of loop: Crea un bucle que itera sobre objetos miembros iterables: Array, Map, Set, String, TypedArray

la diferencia entre for-in y for-of se encuentra en la estructura de datos sobre la que se repiten: for-in itera sobre objetos enumerables mientras que for-of itera sobre objetos iterables
```

### Ejemplo Concatenar con ES6
const newArray = users.map((user) => {
    return {
        //String template (acento grave ``)
        fullName: `${user.lastName}, ${user.name}`
    };
});

### Links útiles
ECMAScript® 2015 Language Specification
https://www.ecma-international.org/ecma-262/6.0/

Explicación del uso de ciclos: La pelea de los For
https://codeburst.io/foreach-vs-for-of-vs-for-in-tug-of-for-d8f935396648
