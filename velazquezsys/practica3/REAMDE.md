Extraer nodos de un archivo HTML y su CSS.

Solamente extraer nodos y sub nodos.

Cada nodo deberá contener como estructura mínima:

node case:

{
    name: '<camelCase>',
    tag: '<dash-case>',
    attributes: [{
        key = '', value = ''
    }],
    nodes: []
}

<input name="" value="" >

style case:

{
    selectors: [],
    attributes: [{
        key = '', value = ''
    }],
    mixin: ''
}

h3, h4, h5 {
    color: #fff;
    @apply --my-component-titles;
}

Allow variables.