### Pruebas Unitarias
Es el código que nos permite garantizar el correcto funcionamiento de un elemento atómico.
Lo que deben reflejar es la lógica de negocio de la programación:

### Paradigma TDD
TDD o Test-Driven Development (desarrollo guiado por pruebas) es una práctica de programación que consiste en escribir primero las pruebas (generalmente unitarias), después escribir el código fuente que pase la prueba satisfactoriamente y, por último, refactorizar el código escrito. Con esta práctica se consigue entre otras cosas: un código más robusto, más seguro, más mantenible y una mayor rapidez en el desarrollo.

    - Tradicional -> 90% codigo & 10% pruebas
    - TDD -> 80% pruebas unitarias & 20% código

* Escribir código mínimo necesario para que las pruebas pasen.
- No tenemos que pensar cómo resolver el problema porque ya esta automatizado.
-
### Tradicional
- Análisis del problema.
- Qué funciones, propiedades y componentes visuales necesito para resolver el problema.
- -Desarrollamos y vamos calando como funciona la propuesta de solución.
- -Arreglamos detalles estéticos y posteriormente lo liberamos.
- Escribo un par de pruebas porque me las pidierons y las más dificiles las ignoro de la cobertura.
-
### TDD
- Comprender la lógica de negocio.
. Plasmar los casos en los cuales se pueden interactuar basado en la lógica de negocio.
- Anticipar los posibles comportamientos del usuario con el sistema.
- Desarrollo el código minimo necesario para que las pruebas pasen.

```js
test() {
    let a = 'a';
    let b = 'b';
    asssert(sum(a,b), {
        code: 'MATH001',
        message: 'You can not add strings in this calculator'
    });
}

function sum(a,b) {
    if(isNaN(a) || isNaN(b)) {
        return {
            code: 'MATH001',
            message: 'You can not add strings in this calculator'
        };
    } else {
        // @todo
    }
}
```

### Solid
Single responsibility:
Open-closed:
Liskov substitution:
Interface segregation:
Dependency inversion:

### Actividad
Pensar en un algoritmo matematico, generar las pruebas unitarias
