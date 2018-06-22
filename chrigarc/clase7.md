# Clase 7 - Manejadores de dependecias
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Da una estructura visual de como esta compuesta nuestra aplicación
## Bower
```sh
bower install home
```

por default instala dependencias en bower_components/
los `dependencies` // cosas que mi aplicación requiere 
los `devDependencies` solo instalan cuando se esta desarrollando el proyecto 
```json
{
    "name": "nombre", 
    "dependencies" : {
     "nombre-dependencia" : "version"
    }, 
    "devDependencies" : { 
     "nombre-dependencia-dev" : "version"
    }, 
    "resolutions": {
        "boo": "version"
    }
}
```
Si entre dependencias se encuentras subdependencias iguales pero con versiones diferentes se presenta un conflicto de versiones, estos conflictos se pueden resolver con el archivo de configuración en la sección de `resolutions`

## NPM
por default instala dependencias en node_modules 
package.json 
Para crear nuestros propios binarios y utilizarlos en la consola
```sh
{ "bin" : { "myapp" : "./cli.js" } } 
```
Repositorio
```sh
{ "repository" : "" } 
{ "dependencies" : "" }
```
package-lock.json guarda la configuración de dependencias instaladas
En ambiente productivo se recomienda usar versiones congeladas

# Actividad
Revisar el código de https://github.com/jorge151095/easy-front-build, reportar issues, crear el fork, corregirlos en nuestro fork y realizar pull request de los actualizaciones

# Bibliografía
https://bower.io/docs/creating-packages/
https://www.npmjs.com/
