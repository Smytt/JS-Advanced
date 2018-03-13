let Console = require('../05 . C# Console')
let expect = require('chai').expect

describe('C# Console tests', () => {
    it('Console should hvae a property writeline', () => {
        expect(Console.hasOwnProperty('writeLine')).to.equal(true)
    })
    it('writeline should be a function', () => {
        expect(typeof Console.writeLine).to.equal("function")
    })
    it('Should print string', () => {
        expect(Console.writeLine("pesho")).to.equal("pesho")
    })
    it('Should replace placeholders 1', () => {
        expect(Console.writeLine("{0}", 'pesho')).to.equal("pesho")
    })
    it('Should replace placeholders 1,2,3', () => {
        expect(Console.writeLine("{0} {1}", 'pesho', 'hi!')).to.equal("pesho hi!")
    })
    it('Should stringify object', () => {
        let obj = {name: 'ivan'}
        expect(Console.writeLine(obj)).to.equal(JSON.stringify(obj))
    })
    it('Should throw TypeError', () => {
        expect(() => {
            Console.writeLine([], 1, 2)
        }).to.throw(TypeError)
    })
    it('Should throw RangeError', () => {
        expect(() => {
            Console.writeLine("My name is {0}. {1}", 1, 2, 3)
        }).to.throw(RangeError)
    })
    it('Should throw RangeError also', () => {
        expect(() => {
            Console.writeLine("My name is {12}", 1, 2)
        }).to.throw(RangeError)
    })
})