# Unit Test Clase 2

## Objetos de simulación

### Mock
Emulación o comportamiento de un objeto (propiedades, metodos y objectos)
### Dummy
Representa un objeto de prueba exactamente un hardcode de un objecto, se usa para comparar con algo esperado
### Spy
Observa el comportamiento de una función, nos permite conocer el numero de llamadas a una función, quien la llamo, parametros utilizados, etc...
### Stub
Cuando existe una conexión externa que está acoplada a nuestra función.


Sintaxis es la diferencia entre las diferentes librerias por ejemplo
	
	setup/before/beforeEach
	teardown/after/afterEach

setup/before/beforeEach

teardown/after/afterEach
```
	suite('', {
	    before() {
	        Inicializar stub.
	    }
	    after() {
	        Destruir stub
	    }
	    test() {
	        before() {
	            Inicializar dummy.
	        }
	        after() {
	            Destruir dummy.
	        }
	        // Assertions o expects
	    }
	});
```

