e strict"
const boo = ''; //ES6
let boo = '';

function helo (){
	//@TODO
};

const hello = () =>{
	
};
***

>ECMAScript (estandar) 6
>Javascript (lenguaje) 2015

# Buena practica
**Declarar todo como const y solo en caso especial de que se vea que si debe cambiar el valor entonces cambiar a let.**

### ES6 permite inicializar previo a lo que desarrolla la funcion
const hello = (name = ' ' ) =>{
	console.log(name);
};

Type coercion || Tipado dinámico || Evitar practica
====
***
Caso automatico dinamico cuando a las variables de js no se la un valor estricto
return name ? name : '';
return name || '';

>al declarar algo como
let option = 0; --> se tomará como False.
if(){
}
else{
}

"==" dispara el type coercion , solo importa el valor y no el tipo de dato
"===" obliga a que se busque su identico (tipo y valor)

if else -> para 2 opciones
switch --> mas de dos opciones

<span style="color:blue"> Ciclos </span>
***

[Mas informacion al respecto y uso de for of y for in](https://codeburst.io/foreach-vs-for-of-vs-for-in-tug-of-for-d8f935396648)



>let array = [1,2,3];
>for(const index in array){
>console.log(index);
>}
>Itera indices, para objetos

>for(const iterable of array){
>console.log(iterable); // 1,2,3
>}
>Itera valores, para estructuras de datos (listas, >arreglos)

#### Lenguaje de prototipado, todo es un objeto excepto los nativos

> No todos los tipos de datos son enumerables
> propiedades enumerables son aquellas que tienen propiedad a poder ser establecida por true por defecto o por medio de un inicializador

> **destructurar un dato (sus propiedades)**, como un mapa - llave valor -
se puede usar el key & value de forma separada, no solo en su totalidad "entry"




