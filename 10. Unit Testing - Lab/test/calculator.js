let createCalculator = require("../07. Add-Subtract")
let expect = require('chai').expect

describe('Calculator', function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator()
    })
    it('should return object for type of calc', function () {
        expect(calc).to.be.a('object')
    })
    describe('general operations', function () {
        it('should return 0 for no operations', function () {
            expect(calc.get()).to.be.equal(0)
        })
        it('should return 5 after {add 3; add 2}', function () {
            calc.add(3)
            calc.add(2)
            expect(calc.get()).to.be.equal(5)
        })
        it('should return 5.5 after {add 3.2; add 2.3}', function () {
            calc.add(3.2)
            calc.add(2.3)
            expect(calc.get()).to.be.equal(5.5)
        })
        it('should return -3 for {subtract 3}', function () {
            calc.subtract(3)
            expect(calc.get()).to.be.equal(-3)
        })
        it('should return 1 for {subtract 3, subtract -4}', function () {
            calc.subtract(3)
            calc.subtract(-4)
            expect(calc.get()).to.be.equal(1)
        })
        it('should return -1 for {add 3, add -4}', function () {
            calc.add(3)
            calc.add(-4)
            expect(calc.get()).to.be.equal(-1)
        })
        it('should return -1 for {add "3", add -4}', function () {
            calc.add("3")
            calc.add(-4)
            expect(calc.get()).to.be.equal(-1)
        })
        it('should return -1 for {add "3", add -4}', function () {
            calc.add("3")
            calc.add(-4)
            expect(calc.get()).to.be.equal(-1)
        })
    })
    describe('wrong types', function () {
        it('should return NAN for {add hello}', function () {
            calc.add('hello')
            expect(calc.get()).to.be.NaN
        })
        it('should return NAN for {subtract hello}', function () {
            calc.subtract('hello')
            expect(calc.get()).to.be.NaN
        })
    })
    describe('types', function () {
        it('should return function for type of add', function () {
            expect(calc.add).to.be.a('function')
        })
        it('should return function for type of subtract', function () {
            expect(calc.subtract).to.be.a('function')
        })
        it('should return function for type of get', function () {
            expect(calc.get).to.be.a('function')
        })
        it('should take 1 argument for add', function () {
            expect(calc.add.length).to.equal(1)
        })
        it('should take 1 argument for subtract', function () {
            expect(calc.subtract.length).to.equal(1)
        })
        it('should take 0 argument for get', function () {
            expect(calc.get.length).to.equal(0)
        })
    })
})