# Clase 5 - ES6 Again
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## Clases en JS
### Antes con ECMAScript5
``````js
function User(){ //En JS todo es un objeto
}

User.prototype.getFullName = function(){ // EMCAScript5
return this.name + ' ' + this.lastName;
};

User.staticMethod = function (){
};
``````
### Ahora con ECMAScript6
``````js
class User {
constructor(name){
    this.name = name;
}

getFullName(){
    return this.name + ' ' + this.lastName;
}

static staticMethod(){ }
}
``````
En JS hay herencia y es multi clase

## Herramientas a conococer
Babel es una herramienta que permite cambiar la sintaxis de JS moderna o una anterior
https://github.com/babel-utils

## Observaciones con Arrow functions
los arrows functions no se pueden utilizar dentro de clases para definir metodos
cuando solo es un parametro se pueden omitir los parantesis
Cuando solo se va a realizar una linea de codigo con un return se vale usar response => response.json() , es decir no usar `{}`

Ejemplos de destructuración
http://www.etnassoft.com/2016/07/07/desestructuracion-en-javascript-parte-2-recetas-y-ejemplos/

## Promises 
``````js
const promise = new Promise((resolve, reject) => {
});

const promise = () =>{
    return new Promise((resolve, reject) =>{
    });
};
const promise = (option = '1') =>{
    return new Promise((resolve, reject) =>{
        if(option === '1'){
            resolve();
        }else{
            reject();
        }
        @todo ...
    });
};

//funciones que se pueden usar con promesas
promise()
.then(boolean => { 
    if(boolean === true){
        console.log('resolved');
    }
})
.catch(error => {
    console.log('Rejected');
});
``````
los then se pueden concatenar

# Bibliografía
https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch
