(function() {
    'use strict';

    // TODO: Your tests go here!
    var expect = chai.expect;

    describe('tests for sum', function () {
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

        it('should know that numbers is an array', function (){
            var number = window.calc.sum('test');
            expect(number).to.equal(0);
        });

        it('must have at least one argument', function () {
            var argument = window.calc.sum();
            console.log();
            expect(argument).to.equal(0);
        });

    });

    describe('Tests for factorial', function (){
        it('Should be a function', function (){
          expect(window.calc.factorial).to.be.a('function');
        });

        it('Should only accept numbers as an argument', function () {
            var factorial = window.calc.factorial(4);
            expect(factorial).to.be(24);
        });

        it ('Should return zero when an argument is anything other than a number', function (){
            var myVariable = window.calc.factorial('Jessica');
            expect(myVariable).to.be(0);
        });
    });



})();
