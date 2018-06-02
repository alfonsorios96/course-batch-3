'use strict';

const boo = '';

const promise = (option = '1') => {
    return new Promise((resolve, reject) => {
        if (option === '1') {
            resolve(true);
        } else {
            reject(false);
        }
    });
};

const functionEvalueResult = (number) => {
    console.log(number);
};

promise()
//Se puede tener response anidados siempre y cuando el then aterior tenga un return
    .then((response) => {
        console.log('Resolved');
        return 0;//El siguiente then recibe este return
    })
    .then(number => {//Recibe el return del then aterior
        number++;
        return number; //Suma en 1 y retorna el nuevo valor
    })
    .then(number => { //Recibe el return del then anterior y ejecuta una funciona
        functionEvalueResult(number);
    })
    .catch(error => { //Cuando el callback recibe solo un parametro se puede omitir el parentesis
        console.log('Rejected');
    });


