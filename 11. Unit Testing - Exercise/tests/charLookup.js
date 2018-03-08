let expect = require('chai').expect
let lookupChar = require('../03. Char Lookup')

describe('Find char in string', () => {
    it('should return l for {hello, 3}', ()=> {
        expect(lookupChar('hello', 3)).to.equal("l")
    })
    it('should return undefined for {123, 3}', ()=> {
        expect(lookupChar(123, 3)).to.equal(undefined)
    })
    it('should return undefined for {hello, l}', ()=> {
        expect(lookupChar('hello', 'l')).to.equal(undefined)
    })
    it('should return Incorrect index for {hello, -1}', ()=> {
        expect(lookupChar('hello', -1)).to.equal('Incorrect index')
    })
    it('should return Incorrect index for {hello, 100}', ()=> {
        expect(lookupChar('hello', 100)).to.equal('Incorrect index')
    })
    it('should return undefined for {hello, 1.1}', ()=> {
        expect(lookupChar('hello', 1.1)).to.equal(undefined)
    })
})