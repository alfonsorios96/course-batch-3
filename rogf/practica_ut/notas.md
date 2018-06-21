# Objetos de simulacion
Ayudan realizar pruebas unitarias, de manera que podamos simular 
comportamientos de terceros.
### mock
Simula metodos, atributos y eventos
### dummy
Es una estructura plana de un objeto
### spy
Observa como se comporta una funcion(Caracteristicas de la llamada)
### stub
Reemplaza funciones

### setup/before/beforeEach
Sirven para hacer configuracion previa a los casos de prueba

### teardown/after/afterEach
Sirven para hacer configuracion posterior a los casos de prueba

## Lectura de pruebas unitarias

### Rep.1: https://github.com/evanshortiss/vector2d

- l-36: setAxes()
Establece el valor del vector en las componentes x, y
- l-95 : toObject()
Crea un objeto con los valores de x, y del vector
- l-105 : add()
Suma un vector a otro vector componente a componente
- l-1658 : multiplyByScalar()
Multiplica un vectro en R2 por un escalar
- l-320 : cross
Realiza el producto cruz de dos vecrtores en R2

### Rep.2: https://github.com/Rich-Harris/magic-string/blob/master/test/MagicString.js

- l-18: append()
Concatena un string al final de otro, si es un array envia un error si se llama a toString de lo contario retorna el objeto orignal sin la concatenacion
- l-1173 :trimLines()
Elimina los saltos de linea al principio y al final del string
- l-8 :options()
Guarda la referencia a un archivo de configuracion en la peopiedad filename que es enviada como un parámetro de tipo objeto
- l-821 : prepend()
Agrega un string al principio del otro
- l-1182 : isEmpty
Verifica si el string es diferente de vacio