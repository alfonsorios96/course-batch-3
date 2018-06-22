# TDD

```
se obtiene n de entrada
	crea variable posicion
	si n no es un número, regresar mensaje "Se necesita un número" y Solicitar de nuevo 
	si no, n es número, seguir
		si n es negativo, regresar mensaje "El valor ingresado no debe ser negativo" y solitar de nuevo	
		si no, n es número positivo, seguir
			si n == 0, regresar mensaje, "No es posible iniciar secuencia de fibonacci en 0" y solcitar de nuevo
			si no n != 0, asignar arregloFib[] tamaño n  
				Asignar arregloFib[0] = 0 y arregloFib[1] = 1
				Asignar posicion = 2 para escribir la siguiente serie fibonacci en arregloFibb;
				para iterarFib = n donde iterarFib > 1 entonces restar iterarFib - 1  
					arregloFib [posicion] = arregloFib[posicion - 2] + arregloFib[posicion - 1] 
					sumar posición + 1
				fin del ciclo para
	retornar arregloFib
```
