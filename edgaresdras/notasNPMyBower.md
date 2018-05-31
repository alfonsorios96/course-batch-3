### Dependencia
En el campo del software una dependencia es una aplicación o una biblioteca requerida por otro programa para poder funcionar correctamente. Por ello se dice que dicho programa depende de tal aplicación o biblioteca.

### Manejadores de dependencias
+ Administran dependencias de una aplicación, gestionando la descarga e instalación dentro de la aplicación asi como la definicion de la version que se desea instalar.

### Registry
+ Almacenes privados o publicos de los gestores de dependencias NPM o bower
### Dependencies
+ Dependencias core para el funcionamiento del modulo
### Dev dependencies
+ Dependencias core para funcionalidades mismas del desarrollo o construcción del modulo.

### Bower
Manejador de dependencias orientadas al frontend.
Programa que nos sirve para tener al día las dependencias de un proyecto para la web, en lo que respecta al desarrollo frontend, con Javascript o incluso CSS. Se trata de un programa basado en NodeJS que se ejecuta desde la consola y que tiene un sencillo API de comandos útiles para realizar tareas de mantenimiento y administración de paquetes necesarios para construir un proyecto web, concretamente la parte del lado del cliente.

Con Bower podemos descargar y actualizar todo tipo de librerías, frameworks, plugins, etc., pero sin tener que preocuparnos por descargarlos y subirlos a mano nosotros mismos.

+ latest - ultima version del modulo en X
+ caret ^ - version mas actual en la estructura de version Y
+ virgulilla - version mas actual en la estructura de version Z

# bower.json specification
Se usa para configurar paquetes que pueden usarse como una dependencia de otro paquete. Esto es similar a `package.json` de Node o` Gemfile` de Ruby. Puedes crear de manera interactiva un bower.json con `bower init`.

### NPM
Node Package Manager o simplemente npm es un gestor de paquetes, el cual hará más fáciles nuestras vidas al momento de trabajar con Node, ya que gracias a él podremos tener cualquier librería disponible con solo una línea de código, npm nos ayudará a administrar nuestros módulos, distribuir paquetes y agregar dependencias de una manera sencilla.

### Actividad
Hacer fork y recomendaciones en:
https://www.npmjs.com/package/easy-front-build

### Links utiles:
https://bower.io/docs/creating-packages/
https://github.com/bower/spec/blob/master/json.md
https://www.npmjs.com/
