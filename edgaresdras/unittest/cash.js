'use strict';
var C = {};                    // C Object simplifies exporting the module

C.getChange = () => {    // enough to satisfy the test
    return true;               // also passes JSLint
};
module.exports = C;            // export the module with a single method

C.getChange = (totalPayable, cashPaid) => {
    if(totalPayable == 486 && cashPaid == 1000)
        return [500, 10, 2, 2];
    else if(totalPayable == 210 && cashPaid == 300)
        return [50, 20, 20];
};

var C = {};     // C Object simplifies exporting the module
C.coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
C.getChange = (totalPayable, cashPaid) => {

    const change = [];
    const length = C.coins.length;
    const remaining = cashPaid - totalPayable;          // we reduce this below

    for (const i = 0; i < length; i++) { // loop through array of notes & coins:
        const coin = C.coins[i];

        if(remaining/coin >= 1) { // check coin fits into the remaining amount
            const times = Math.floor(remaining/coin);        // no partial coins

            for(const j = 0; j < times; j++) {     // add coin to change x times
                change.push(coin);
                remaining = remaining - coin;  // subtract coin from remaining
            }
        }
    }
    return change;
};
