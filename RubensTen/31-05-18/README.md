# NOTAS de clase 31-05-2018

## NPM - Comandos

#### Instala las depedencias definidas en el archivo package.json
    npm install

Este comando ademas ofrece opciones para instalar un modulo en especifico y definir si sera una dependencia necesaria para el modulo o aplicación o si solo se instalara el modulo como dependencia de desarrollo

    npm install express --save
Instala como dependencia core de la aplicación

    npm install express --save-dev

Instala como dependencia de desarrollo de la aplicación


# Scripts personalizados
NPM ofrece la posibilidad de generar scripts personalizados, mediante la opción "scripts" definida en el archivo package.json
Ejemplo
```json
    {
         "scripts": {
            "start": "node server.js",
            "custom": "echo \"Starting custom script\" && exit 1"
         }
    }
```
La forma en la que podemos ejecutar un script seria la siguiente

    npm start
    o
    npm run custom


# Yarn
Implementa un "Algoritmo determinista" lo que permite una mejor compatibilidad de dependencias en las diferentes plataformas.
Instalacion de dependencias paralelas
Cache instalacion de depedencias offline
