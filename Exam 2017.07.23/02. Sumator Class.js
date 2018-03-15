class Sumator {
    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.push(item);
    }

    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }

    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }

    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

let expect = require('chai').expect

describe('Sumator test', () => {
    let s
    beforeEach(() => {
        s = new Sumator()
    })
    describe('properties should be present', () => {
        it('should have the properties', () => {
            expect(s.hasOwnProperty('data')).to.be.true
            expect(Object.getPrototypeOf(s).hasOwnProperty('add')).to.be.true
            expect(Object.getPrototypeOf(s).hasOwnProperty('sumNums')).to.be.true
            expect(Object.getPrototypeOf(s).hasOwnProperty('removeByFilter')).to.be.true
            expect(Object.getPrototypeOf(s).hasOwnProperty('toString')).to.be.true
        })
        it('should be functions', () => {
            expect(typeof s.add).to.equal('function')
            expect(typeof s.sumNums).to.equal('function')
            expect(typeof s.removeByFilter).to.equal('function')
            expect(typeof s.toString).to.equal('function')
        })
    })
    describe('functionality', () => {
        it('should start with an empty array', () => {
            expect(Array.isArray(s.data)).to.be.true
            expect(s.data.length).to.equal(0)
        })
        it('should add elements of any type', () => {
            let arr = [1, 2, 'three']
            let obj = {name: 'pesho'}
            s.add(5)
            expect(s.data.length).to.equal(1)
            s.add('five')
            expect(s.data.length).to.equal(2)
            s.add(arr)
            expect(s.data.length).to.equal(3)
            s.add(obj)
            expect(s.data.length).to.equal(4)
            expect(s.data.includes(5)).to.be.true
            expect(s.data.includes('five')).to.be.true
            expect(s.data.includes(arr)).to.be.true
            expect(s.data.includes(obj)).to.be.true
        })
        it('should sum only the numbers', () => {
            s.add(6)
            s.add(7)
            s.add(8)
            expect(s.sumNums()).to.equal(21)
        })
        it('should return 0 if no numbers', () => {
            let noNums = new Sumator()
            noNums.add('5')
            noNums.add('6')
            expect(noNums.sumNums()).to.equal(0)
        })
        it('should remove only the strings', () => {
            s.add('five')
            s.add(5)
            let filter = element => typeof element !== 'string'
            s.removeByFilter(filter)
            expect(s.data.filter(x => typeof x !== 'string').length).to.equal(0)
        })
        it('should join data by comma and space', () => {
            s.add(5)
            s.add('five')
            expect(s.toString()).to.equal('5, five')
        })
        it('should return empty', () => {
            expect(s.toString()).to.equal('(empty)')
        })
    })
})