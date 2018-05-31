# NPM
## package.json

Este archivo tiene la configuración del proyecto asi como sus dependencias del mismo, tres de las pricipales atributos son:

````
{
  "name": "my_package",
  "version": "1.0.0",
  "dependencies": { 
    // Indica las dependencias necesarias para que funcione
    // y estas son las unicas que se instalan cuando el modulo es
    // dependencia de otro
    "my_dep": "^1.0.0"
  },
  "devDependencies" : {
    // Indica cuales son las dependencia necesarias para realizar
    // desarrollo sobre el modulo
    "my_test_framework": "^3.1.0"
  },
  "private":true,// Indica si el proyecto sera privado o no
  "bin" : { "myapp" : "./cli.js" }
  // Indica el nombre del ejecutable y el script que ejecutara,
  "resolutions":{
  "boo":"^1.2.3"
  }
}
````

## npm install
Este comando permite la instalacion de modulos y las banderas mas importantes son:

| Bandera | Descripcion |
| ------ | ------ |
| --save | Agrega el modulo a la lista de dependencia del package.json |
| --global | Agrega el modulo en todo el sistema |

## npm init
Este comando permite la creacion de un package.json basico

## Resolution versions
Ejemplos:

Usando   ^
^1.2.3 := >=1.2.3 <2.0.0
^0.2.3 := >=0.2.3 <0.3.0
^0.0.3 := >=0.0.3 <0.0.4

Usando ~

~1.2.3 := >=1.2.3 <1.(2+1).0 := >=1.2.3 <1.3.0
~1.2 := >=1.2.0 <1.(2+1).0 := >=1.2.0 <1.3.0 (Same as 1.2.x)
~1 := >=1.0.0 <(1+1).0.0 := >=1.0.0 <2.0.0 (Same as 1.x)