let expect = require('chai').expect
let isOddOrEven = require('../02. Even or Odd')

describe('Odd or even?', () => {
    it('Should return 1 for number of params', () => {
        expect(isOddOrEven.length).to.equal(1)
    })
    it('Should return undefined for not-a-string', () => {
        expect(isOddOrEven(23)).to.equal(undefined)
    })
    it('Should return undefined for object', () => {
        expect(isOddOrEven({qty: 23})).to.equal(undefined)
    })
    it('Should return even for empty', () => {
        expect(isOddOrEven('')).to.equal('even')
    })
    it('Should return even for mama', () => {
        expect(isOddOrEven('mama')).to.equal('even')
    })
    it('Should return odd for dad', () => {
        expect(isOddOrEven('dad')).to.equal('odd')
    })
})