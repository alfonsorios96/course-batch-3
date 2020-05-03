'use strict';

const expect = require('chai').expect;
const fibonacci = require('../src/index.js');


it('Mayor a 0', function () {
    const number_of_repetitions = -1;
    const result = 'Se requieren valores iguales o mayores a 0';
    expect(fibonacci(number_of_repetitions)).to.equal(result);
});

it('Tipo numerico', function () {
    const number_of_repetitions = 'a';
    const result = 'Se requiere un valor numerico';
    expect(fibonacci(number_of_repetitions)).to.equal(result);
});

it('Cero repeticiones', function () {
    const number_of_repetitions = 0;
    const result = '0';
    expect(fibonacci(number_of_repetitions)).to.equal(result);
});

it('Una repeticion', function () {
    const number_of_repetitions = 0;
    const result = '0';
    expect(fibonacci(number_of_repetitions)).to.equal(result);
});

it('Serie de 4 repeticiones', function () {
    const number_of_repetitions = 4;
    const result = '0,1,1,2';
    expect(fibonacci(number_of_repetitions)).to.equal(result);
});