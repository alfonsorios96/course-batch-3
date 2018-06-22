# Unit Test
## ¿Que es unit test?
Es el código que nos permite garantizar el correcto funcionamiento de un elemento atómico. Esto garantiza la lógica de negocio.

## Desarrollo Tradicional

 - Análisis del problema
 - Qué funciones, propiedades y componentes visuales necesito para resolver el problema
 - Desarrollamos y vamos calando como funciona la propuesta de solución.
 - Arreglamos detalles estéticos y posteriormente lo liberamos.
 - Escribo un par de pruebas porque me las pidieron y las más difíciles las ignoro de la cobertura.

    
## TDD (Test Driven Development)
La definición dice que al menos debe invertirse un 80% generando la prueba unitaria y 20% desarrollo del código.

Malas prácticas de pruebas unitarias es generar primero funciones y despues acoplar la prueba a la funcion generada, esto se vuelve una limitante.

Escribir código mínimo necesario para que las pruebas pasen.
- No tenemos que pensar cómo resolver el problema, porque ya está automatizado.
-  Comprender la lógica de negocio.
- Plasmar los casos en los cuales se pueden interactuar basado en la lógica de negocio.
- Anticipar los posibles comportamientos del usuario con el sistema.
- Desarrollo el código mínimo necesario para que las pruebas pasen.

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


Seleccionar un algoritomo matematico y generar el pseudocodigo