# Ejercicio - Pruebas unitarias
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

De un algoritmo matematico libre a elegir realizar el proceso de que marca TDD, en lugar de código generar pseudocódigo

## Factorial 
El factorial de un entero positivo n, el factorial de n o n factorial se define en principio como el producto de todos los números enteros positivos desde 1 (es decir, los números naturales) hasta n.

## En la logica del negocio
* El usuario invoca la función factorial(numero), donde N debe ser un entero positivo mayor o igual que 0
* Las pruebas deben comprender el caso en que ingresa una variable `numero` que no sea un número entero y retornar un error que indique no el valor esperado no es un número
* Las pruebas deben comprender cuando el usuario ingresa un número entero menor que 0, en dicho caso deben retorn el error que indique que la variable `numero` no es mayor que 0
* Las pruebas deben comprender el caso en que la variable `numero` cumpla con la condición y retorne el valor esperado

## Pseudocódigo de las pruebas unitarias 

```
const test_parametro_invalido = () => {
    const parameter = '';
    const result_factorial = factorial(parameter);
    expect(result_factorial, {error: '001', message : 'Parameter not is number integer');
}

const test_parametro_correcto = () => {
    const parameter = 20;
    const result_factorial = factorial(parameter);
    expect(result_factorial, 2432902008176640000);
}

const test_parametro_entero_negativo = () => {
    const parameter = -2;
    const result_factorial = factorial(parameter);
    expect(result_factorial, {error: '002', message : 'Parameter not >= 0');
}
```

## Pseudocódigo de la implementación
```js
const factorial = (parameter, acumulador = 1) => {
    if(!Number.isInteger(parameter)){
        return {error: '001', message : 'Parameter not is number integer'};
    }
    if(parameter < -1){
        return {error: '002', message : 'Parameter not >= 0'};
    }
    switch(parameter){
        case 0: 
        case 1:
            return acumulador;
            break;
        default: 
            factorial(parameter-1, parameter * acumulador);
    }
}
```
