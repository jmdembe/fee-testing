(function() {
    'use strict';

    // TODO: Your tests go here!
    var expect = chai.expect;
    window.calc = window.calc || {};

    describe('my first test for calculator', function () {
        it('should know that one equals one', function () {
            expect(1).to.equal(1);
        });

        it('should know that sum is a function', function (){
            expect(window.calc.sum).to.be.a('function');
        });

    });



})();
