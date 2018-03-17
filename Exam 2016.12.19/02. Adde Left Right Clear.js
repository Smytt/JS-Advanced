function makeList() {
    let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) {
            data.push(item);
        },
        clear: function() {
            data = [];
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

let expect = require('chai').expect

describe('MakeList tests', () => {
    let list
    beforeEach(() => {
        list = makeList()
    })
    describe('Should contain props', () => {
        it('Should have all functions', () => {
            expect(list.hasOwnProperty('addLeft')).to.be.true
            expect(list.hasOwnProperty('addRight')).to.be.true
            expect(list.hasOwnProperty('clear')).to.be.true
            expect(list.hasOwnProperty('toString')).to.be.true
        })
    })
    describe('Functionality', () => {
        it('should add to the left', () => {
            list.addLeft(1)
            list.addLeft(2)
            list.addLeft(3)
            expect('' + list).to.equal('3, 2, 1')
        })
        it('should add to the right', () => {
            list.addRight(1)
            list.addRight(2)
            list.addRight(3)
            expect('' + list).to.equal('1, 2, 3')
        })
        it('should cear list', () => {
            list.addRight(1)
            list.addRight(2)
            list.addRight(3)
            list.clear()
            expect('' + list).to.equal('')
        })
        it('should string the array', () => {
            list.addRight(1)
            list.addRight(2)
            list.addRight(3)
            expect(list.toString()).to.equal('1, 2, 3')
        })
        it('should add objects of any type', () => {
            let obj = {three: 3}
            let arr = [4]
            list.addRight(1)
            list.addLeft('two')
            list.addRight(obj)
            list.addLeft(arr)
            expect(list.toString()).to.equal(`${arr}, two, 1, ${obj}`)
        })
        it('should not throw', () => {
            let obj = {three: 3}
            let arr = [4]
            expect(list.addRight(1)).to.not.throw
            expect(list.addRight('two')).to.not.throw
            expect(list.addRight(obj)).to.not.throw
            expect(list.addRight(arr)).to.not.throw
        })
    })
})