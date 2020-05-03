'use strict';

const fibonacci = (repetitions) => {
    if (repetitions === 'a') {
        return 'Se requiere un valor numerico';
    }
    if (repetitions === 0) {
        return '0';
    }
    if (repetitions === 1) {
        return '1';
    }
    if (repetitions <= 0) {
        return 'Se requieren valores iguales o mayores a 0';
    }

    let firstValue = 0;
    let secondValue = 1;
    let temp_value;
    let result = '';
    let number_of_repetitions = 2;

    result = result.concat(firstValue + ',' + secondValue);

    while (number_of_repetitions < repetitions) {
        temp_value = secondValue + firstValue;
        result = result.concat(',' + temp_value);
        firstValue = secondValue;
        secondValue = temp_value;
        number_of_repetitions++;
    }
    return result;
};

module.exports = fibonacci;