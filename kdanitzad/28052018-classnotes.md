OOP en Javascripts
***

import { <Name> } from '<name>'

class <Name> {
    constructor(){

    }
}

export { <Name> };

===

ES6 Again

function User(name) {
    this.name = name;
}

User.prototype.getFullName = function() {
    return this.name + ' ' + this.lastName;
};

User.staticMethod = function() {
    return 'Holi';
};

//

class User {
    constructor(name) {
        this.name = name;
    }

    getFullName() {
        return this.name + ' ' + this.lastName;
    }

    static staticMethod() {
        return 'Holi';
    }
}

const user = User.staticMethod();

destructuracion de objetos

Promesas
Ejecuciones en forma paralela acorde a la secuencia del programa
Son asincronas pero el contenido es sincrono
Cuando solo se recibe un parametro, se omiten o parentesisi y directamente 

response => {
	//to do ...
}

reponse => response.json();  // el return es implicito 

Sintaxis
Se puede anidar el then despues de un then siempre y cuando ESTE devuelva/return algo y se vuelve el parametro del siguiente then


promise()
.then(response => response.json())
.then(json => )
.catch(error =>)