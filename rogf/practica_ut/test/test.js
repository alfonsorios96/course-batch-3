'use strict';

const expect  = require('chai').expect;
const nDimensionalSpaceDistance = require('../src/main.js');



it('Sin parametros', function() {
        expect( nDimensionalSpaceDistance()).to.equal(false);
});
it('No arrays', function() {
        expect( nDimensionalSpaceDistance(2,{a:'b'})).to.equal(false);
});
it('Arrays vacios', function() {
        expect( nDimensionalSpaceDistance([],[])).to.equal(false);
});
it('Arrays no munerico', function() {
        expect( nDimensionalSpaceDistance(['a'],[2])).to.equal(false);
});
it('Arrays diferentes dimensiones', function() {
        expect( nDimensionalSpaceDistance([2],[3,6])).to.equal(false);
});



it('Arrays mismo punto n dimension', function() {
        expect( nDimensionalSpaceDistance([1,3,6,3,6],[1,3,6,3,6])).to.equal(0);
});
it('Arrays diferente punto n dimension', function() {
        expect( nDimensionalSpaceDistance([2,2],[3,3])).to.be.within(1.4, 1.42);
});
it('Arrays diferente punto n dimension origin', function() {
        expect( nDimensionalSpaceDistance([0,0],[6,8])).to.equal(10);
});
it('Arrays mismo punto 1 dimension', function() {
        expect( nDimensionalSpaceDistance([1],[1])).to.equal(0);
});