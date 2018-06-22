# Sistema de Internacinalización en Blog

# Requerimientos
   - Generar un layout simple de un Blog
   - El contenido de los labels debera ser dinamico en base el idioma seleccionado
   - En blog debera contener un selector de idioma para las traducciones de contenido dinamicas

# Start Application
npm start

# Build Application
    npm run build

# View in browser
    http://localhost:3000



data/
    - en.json
    - es.json
index.html
index.js


Obtener a través de AJAX The XMLHttpRequest Object la información del json del idioma.

En el html debe existir un select|dropdown donde seleccionen el idioma, y al cambio de valor se genere una petición al json debido para obtener la información del idioma para la página.


Generar un html con temática de blog. Donde cada label sea una llave multidiomas.

=====================

es.json

{
    "headerTitle": "Mi página"
}

en.json

{
    "headerTitle": "My page"
}