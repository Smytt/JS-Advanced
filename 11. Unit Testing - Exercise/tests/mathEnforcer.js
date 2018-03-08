let expect = require('chai').expect
let mathEnforcer = require('../04. Math Enforcer')

describe('Math Enforcer', () => {
    it('should be a function addFive', () => {
        expect(mathEnforcer.addFive).to.be.a('function')
    })
    it('should be a function subtractTen', () => {
        expect(mathEnforcer.subtractTen).to.be.a('function')
    })
    it('should be a function sum', () => {
        expect(mathEnforcer.sum).to.be.a('function')
    })
    it('should accept one argument addFive', () => {
        expect(mathEnforcer.addFive.length).to.equal(1)
    })
    it('should accept one argument subtractTen', () => {
        expect(mathEnforcer.subtractTen.length).to.equal(1)
    })
    it('should accept one argument sum', () => {
        expect(mathEnforcer.sum.length).to.equal(2)
    })
    it('should return undefined for addfive(pesho)', () => {
        expect(mathEnforcer.addFive('pesho')).to.equal(undefined)
    })
    it('should return undefined for subtractTen(pesho)', () => {
        expect(mathEnforcer.subtractTen('pesho')).to.equal(undefined)
    })
    it('should return undefined for sum(pesho, 1)', () => {
        expect(mathEnforcer.sum('pesho', 1)).to.equal(undefined)
    })
    it('should return undefined for sum(1, pesho)', () => {
        expect(mathEnforcer.sum(1, 'pesho')).to.equal(undefined)
    })
    it('should return 10 for sum(1, 9)', () => {
        expect(mathEnforcer.sum(1, 9)).to.equal(10)
    })
    it('should return 6 for addFive(1)', () => {
        expect(mathEnforcer.addFive(1)).to.equal(6)
    })
    it('should return -9 for subtractTen(1)', () => {
        expect(mathEnforcer.subtractTen(1)).to.equal(-9)
    })
    it('should return 10.6 for sum(1, 9.6)', () => {
        expect(mathEnforcer.sum(1, 9.6)).to.equal(10.6)
    })
    it('should return 6.4 for addFive(1.4)', () => {
        expect(mathEnforcer.addFive(1.4)).to.equal(6.4)
    })
    it('should return 3.5 for subtractTen(13.5)', () => {
        expect(mathEnforcer.subtractTen(13.5)).to.equal(3.5)
    })
    it('should return 5 for sum(-5, 10)', () => {
        expect(mathEnforcer.sum(-5, 10)).to.equal(5)
    })
    it('should return 0 for sum(0, 0)', () => {
        expect(mathEnforcer.sum(0, 0)).to.equal(0)
    })
    it('should return 0 for sum(0.1111, 0.2222)', () => {
        expect(mathEnforcer.sum(0.1111, 0.2222)).to.be.closeTo(0.3335, 0.01)
    })
    it('should return -4 for addFive(-9)', () => {
        expect(mathEnforcer.addFive(-9)).to.equal(-4)
    })
    it('should return -13 for subtractTen(-3)', () => {
        expect(mathEnforcer.subtractTen(-3)).to.equal(-13)
    })
})
