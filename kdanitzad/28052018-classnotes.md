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

