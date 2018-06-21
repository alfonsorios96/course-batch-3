# Clase 10 - Pruebas unitarias
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## Objetos de simulación
* mock -> {user: new UserMock()}, instancia que simula un comportamiento. Cuando queremos simular un módulo completo
* dummy -> {user: 'malforime'}, instancia para simular una entrada o valor. Cuando queremos comparar algo esperado
* spy -> Observar el comportamiento de una función. ¿Se llamó, cuantas veces se llama, con que parametros se llamó?
* stub -> Reemplaza funciones. Cuando existe una conexión externa que está acoplada a nuesta función.

## Estructura de pruebas unitarias

BDD - orientado a analistas y arquitectos de solución
```js
describe('suit cases', () => {
    it('case', () => {
        expect('1').deepEqual(1);
    });
});
```
TDD - orientado a desarrolladores
```js
suite('suit cases', () => {
    test('case', () => {
        assert.strictEquals({}, getUser());
    });
});
```

## Ciclo de vida
Crear, probar el set y destruir.
setup/before/beforeEach
teardown/after/aftereach
```js
suite('', () =>{
    before(){
        Inicializar stub
    }, 
    after() {
        Destruir stub
    }, 
    test(){
        before(){
            Inicializar dummy.
        }, 
        after(){
            Destruir dummy.
        }
        //Assertions o expects
    }
});
```
Con llamadas a metodos asincronos los catch necesitan agregar un assert expect.assetions(1)

# Bibliografía
https://facebook.github.io/jest/
