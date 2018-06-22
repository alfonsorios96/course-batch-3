### Prueba unitaria
Codigo que prueba una funcionalidad que solo realiza una sola cosa.
### TDD
Test Driven Development

Escribir codigo minimo necesario para que pasen las pruebas


- Tradicional
--  analisis
--  desarrollo y pruebas de funcionamiento iterativas
--  estetica
--  pruebas

- TDD
-- Logica de negocio
-- Derivacion de casoso de prueba
-- Anticipa comportamientos
-- Desarrollo minimo necesario 

80% pruebas
20% codigo



## Algoritmo

Distancia entre 2 puntos en n dimensiones:
Caso 1:
([0,0,0][0,0,0])
Caso 2:
([1,1,1][2,2,2])
Caso 3:
([-1,-1,-1][-2,-2,-2])
Caso 4:
([0,0,0][0,0,0])
Caso 5:
([-1,-2,0][3,7,3])
Caso 6:
([0,8,9,0,20],[8,3,3])

Pasos:

1. Verificar que de entrada sean 2 array
 - De lo contrario enviar error
2. Verificar que los array tengan la misma longitud
- De lo contrario enviar error
3. Verificar que todos lo elementos de los array sean numericos
- De lo contrario enviar error
4. Para cada uno de los elementos del primer array restarlo con su respectivo en el segundo array y el resultado al cuadrado y almacenarlo en un nuevo arreglo
5. Sumar cada uno de los nuevos elementos del nuevo array
6. Obteenr la raiz cuadrada
7. Imprimir resultado