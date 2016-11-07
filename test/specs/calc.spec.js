(function() {
    'use strict';

    // TODO: Your tests go here!
    var expect = chai.expect;
    window.calc = window.calc || {};

    describe('test for calculator', function () {
        it('should know that one equals one', function () {
            expect(1).to.equal(1);
        });

        it('should know that sum is a function', function (){
            expect(window.calc.sum).to.be.a('function');
        });

        it('should know that sum accepts a number as an argument', function () {
            var result = window.calc.sum([4,5,6])
            expect(result).to.equal(15);
        });

    });



})();
