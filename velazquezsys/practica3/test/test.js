'use strict';

class Stack {

    constructor(elements) {
        this.elements = elements;
    }

    add(element) {
        this.elements.push(element);
    };

    pop() {
        return this.elements.pop();
    };

    getTopElement() {
        return this.elements[this.elements.length - 1];
    };

    hasElements() {
        return this.elements.length > 0;
    };

    removeAll() {
        this.elements = [];
    };

    size() {
        return this.elements.length;
    };
};


class Nodo {
    constructor() {

    }
}


const formatHTML = (htlmInput) => {
    return htlmInput.replace(/\n^\s+|\s+$/gm, '');
};

const getTag = (htlmInput) => {

    let open = htlmInput.indexOf('<');
    console.log(open);
    let close = htlmInput.indexOf('>');
    console.log(close);
    let father = htlmInput.substring(open, close + 1);
    console.log(father);
    if (father === '<!DOCTYPE html>') {
        htlmInput.substring(father, htlmInput.length)
        getTag();
    } else {
        console.log(father);
    }
};

const htmlInput = '<!DOCTYPE html>\n' +
    '<html>\n' +
    '  <head>\n' +
    '    <meta charset="utf-8">\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '    <title>Page Not Found</title>\n' +
    '  </head>\n' +
    '  <body>\n' +
    '    <div id="message">\n' +
    '      <h2>404</h2>\n' +
    '      <h1>Se perdió página que estas buscando</h1>\n' +
    '      <p>Quizás te interese alguna de estas opciones:</p>\n' +
    '      <ul style="list-style: none">\n' +
    '        <li style="margin-top: 10px"><a href="index.html">Home</a></li>\n' +
    '        <li style="margin-top: 10px"><a href="about-us.html">Nosotros</a></li>\n' +
    '        <li style="margin-top: 10px"><a href="#programs">Programas</a></li>\n' +
    '        <li style="margin-top: 10px"><a href="scholarships.html">Becas</a></li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </body>\n' +
    '</html>';
let elements = [];


let fruitsStack = new Stack(elements);


if (!fruitsStack.hasElements()) {

    getTag(formatHTML(htmlInput));

    fruitsStack.add('Banana');
    fruitsStack.add('Apple');
    fruitsStack.add('Mango');
    const mango = fruitsStack.pop(); //Obtiene mango y lo saca de la pila, ahora solo quedan 2 elementos.
    fruitsStack.removeAll(); // Limpia la pila
}