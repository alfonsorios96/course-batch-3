# Clase 9 - Pruebas unitarias
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## Principios de solid
* Single responsibility 
* Open-closed
* Liskov substitution
* Interface segregation and Dependency inversion

Responsabilidad unica, realizar pruebas que cubran una sola tarea o responsabilidad

## ¿Qué es una prueba unitaria? 
Es el código que nos permite garantizar el correcto funcionamiento de un elemento átomico

## Metodologia tradicional
- analisis del problema
	* que funciones, propiedades y componentes visuales necesito para resolver el problema
- Desarrollamos y vamos calando como funciona la propuesta de solución
- Arreglamos detalles esteticos y posteriormente lo liberamos
- Escribo un par de pruebas porque me las pidieron y las mas dificiles las ignoro de la cobertura de codigo.

## TDD - Test Driven Development
80% a pruebas unitarias 
20% código

Escribir minimo de codigo necesario para que las pruebas pasen
 - No tenemos que resolver el problema porque ya esta automatizado
- Comprender la logica del negocio
- Plasmar los casos en los cuales se pueden interactuar basado en la logica de negocio
- Anticipar los posibles comportamientos del usuario con el sistema
- Desarrolla el código minimo necesario para que las pruebas pasen
	
