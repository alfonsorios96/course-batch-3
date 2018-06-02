# **[Centraal Academy](https://centraal.academy)**
-----------------------------------------------------
## Apuntes
_30-05-2018_

------------------------------------------------------
### [NPM] Usando sentencias NPM

#### Inicializando proyecto Node
Para inicializar un proyecto node con npm se aplica la sentencia ``` $ npm init``` y se prosigue a seguir los pasos siguientes:

```
package name: (project)
version: (1.0.0)
description: Demo of package.json
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
```

Dentro del proyecto node, se encontrará un archivo package.jason con los datos json iniciales, para el manejo de las dependencias con npm:
```json
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

#### Instalando paquetes por npm
```npm install <package_name>```
* Busca en el registry el paquete, y si lo encuentra lo instala. No lo guarda en el package.json

```npm install --save <package_name>```
* Guarda en el package.json como dependecy el módulo.

```npm install --save-dev <package_name>```
* Guarda en el package.json como devDepency el módulo.




