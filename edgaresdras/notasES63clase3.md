# null, nan and undefined

No se puede comparar nan de forma natural, para ello utilizar isnan.

NaN !== NaN
True

# Array
Array.isArray(fruits);
Para verificar si este es un array

#Set
new Set([iterable])

### links utiles:
https://www.todojs.com/casos-especiales-undefined-null-y-nan/
https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Set
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map
https://www.w3schools.com/js/js_arrays.asp
### Map

### Ejemplo de Clousure
### Forma antigua
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

### Forma nueva
const a = () => {
    const boo = '';
    const b = () => {
        let globalBoo = boo;
        const boo = '';
    };

};

console.log(boo); // boo is undefined
