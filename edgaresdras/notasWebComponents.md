### Partes que lo integran
* Custom Elements
Nos permiten definir nuestro propio elemento.
* Shadow DOM
Es un DOM encapsulado que vive dentro del DOM principal
* Templates
Son donde definimos el código reutilizable, incluso obtenemos un elemento para él template.
* HTML Imports
Podemos importar componentes HTML en la parte superior de nuestro documento para definir cuáles necesitamos usar en nuestra aplicación:
<link rel="import" href="/path/to/imports/stuff.html">

Ej:
.container {
background: var(--evercomponent_background,#ffff);
}
@apply ever-component-container;
mixins

redox ayuda a la comnunicación de los arboles
