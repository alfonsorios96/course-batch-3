'use strict';

const nDimensionalSpaceDistance = (p1, p2) => {
    if (p1 === undefined | p2 === undefined) {
        return false;
    }
    if (!Array.isArray(p1) | !Array.isArray(p2)) {
        return false;
    }
    if (p1.length === 0 | p2.length === 0) {
        return false;
    }
    if (p1.length !== p2.length) {
        return false;
    }

    let sum = 0;
    for (const [index, value] of p1.entries()) {
        if (isNaN(value) === true | isNaN(p2[index]) === true) {
            return false;
        }
        sum += Math.pow((value - p2[index]), 2);
    }

    return Math.sqrt(sum);
};

module.exports = nDimensionalSpaceDistance;