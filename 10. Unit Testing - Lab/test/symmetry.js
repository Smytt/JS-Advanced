let expect = require("chai").expect;
let isSymmetric = require("../05. Check for Symmetry").isSymmetric

describe("Symmetry - check if supplied array is same as reversed", function () {
    it("Empty array is symmetric", function () {
        expect(isSymmetric([])).to.be.equal(true)
    });
    it("One element [1] to be.equal(true)", function () {
        expect(isSymmetric([1])).to.be.equal(true)
    });
    it("Even elements [1, 2, 2, 1] to be.equal(true)", function () {
        expect(isSymmetric([1, 2, 2, 1])).to.be.equal(true)
    });
    it("Odd elements [1, 2, 3, 2, 1]", function () {
        expect(isSymmetric([1, 2, 3, 2, 1])).to.be.equal(true)
    });
    it("Mixed elements", function () {
        expect(isSymmetric([1, 'two', 3, 'two', 1])).to.be.equal(true)
    });
    it("Mixed elements and objects", function () {
        expect(isSymmetric([{obj: 'obj'}, 'two', 3, 'two', {obj: 'obj'}])).to.be.equal(true)
    });
    it("Mixed elements and objects false", function () {
        expect(isSymmetric(['obj', 'two', 3, 'two', {obj: 'obj'}])).to.be.equal(false)
    });
    it("Not symmetric Odd to be.equal(false) with negative", function () {
        expect(isSymmetric([1, -2, 3, 2, 1])).to.be.equal(false)
    });
    it("Not symmetric even to be.equal(false) with negative", function () {
        expect(isSymmetric([1, -2, 2, 1])).to.be.equal(false)
    });
    it("Not symmetric Odd to be.equal(false)", function () {
        expect(isSymmetric([1, 5, 3, 2, 1])).to.be.equal(false)
    });
    it("Not symmetric even to be.equal(false)", function () {
        expect(isSymmetric([1, 5, 2, 1])).to.be.equal(false)
    });
    it("Not array to be.equal(false) string", function () {
        expect(isSymmetric('abcba')).to.be.equal(false)
    });
    it("Not array to be.equal(false) num", function () {
        expect(isSymmetric(121)).to.be.equal(false)
    });
});