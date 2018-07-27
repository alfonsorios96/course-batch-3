# Realizar el pseudocódigo de un programa que permita crear una contraseña segura de 8 caracteres minimo.
Consideraciones: utilizar caracteres de la A-Z, 0-9
### Pseudocódigo:
escribir “Introduzca el largo de la contraseña“
leer variable con caracteres permitidos
crear variable temporal
crar variable con tamaño de la contraseña
SI i < tamaño  ENTONCES
          generar un caracter aleatorio de la lista y agregarlo a la variable temporal
SI NO
          regresar la variable temporal creada
          FINSI
FINSI
Finprograma

### Algoritmo:

```js
const list = "abcdefghijklmnopqrstuvwxyz9876543210";

randomStringGenerator => how_long {
    const tmp = '', i = 0;
    const list_len = _list.length;
    for (i = 0; i < how_long; i++) {
        tmp += list.charAt(Math.floor(Math.random() * list_len));
    }
    return tmp;
}

console.log(randomStringGenerator(8));
```
