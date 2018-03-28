let PaymentPackage = require('../02. Payment Package')
let expect = require('chai').expect

describe('Testing Payment Package Class', () => {
    it('should take 2 arguments', () => {
        expect(PaymentPackage.length).to.equal(2)
    })
    it('should be a class', () => {
        expect(typeof PaymentPackage).to.equal('function')
    })
    it('should have a constructor', () => {
        expect(typeof PaymentPackage.constructor).to.equal('function')
    })
    it('should throw if only 1 parameter is supplied', () => {
        expect(() => {
            let pp = new PaymentPackage('String')
        }).to.throw(Error).that.has.property('message', 'Value must be a non-negative number')
    })
    it('should throw if wrong types', () => {
        expect(() => {
            let pp = new PaymentPackage(['string'], '23')
        }).to.throw(Error).that.has.property('message', 'Name must be a non-empty string')
    })
    it('should throw if wrong number', () => {
        expect(() => {
            let pp = new PaymentPackage('String', -5)
        }).to.throw(Error).that.has.property('message', 'Value must be a non-negative number')
    })
    it('should not throw if 2 parameter are supplied - string, number', () => {
        expect(() => {
            let pp = new PaymentPackage('String', 5)
        }).to.not.throw(Error)
    })
    it('instantiated should be of correct type', () => {
        let pp = new PaymentPackage('String', 5)
        expect(pp instanceof PaymentPackage).to.be.true
        expect(typeof pp).to.equal('object')
    })
    it('Should have all properties and functions upon instantiating', () => {
        let pp = new PaymentPackage('Consultation', 800)
        expect(PaymentPackage.prototype.hasOwnProperty('name')).to.be.true
        expect(PaymentPackage.prototype.hasOwnProperty('value')).to.be.true
        expect(PaymentPackage.prototype.hasOwnProperty('VAT')).to.be.true
        expect(PaymentPackage.prototype.hasOwnProperty('active')).to.be.true
        expect(PaymentPackage.prototype.hasOwnProperty('toString')).to.be.true
        expect(pp.hasOwnProperty('_name')).to.be.true
        expect(pp.hasOwnProperty('_value')).to.be.true
        expect(pp.hasOwnProperty('_VAT')).to.be.true
        expect(pp.hasOwnProperty('_active')).to.be.true
    })
    describe('Intended Functionality', () => {
        let pp
        beforeEach(() => {
            pp = new PaymentPackage('Service', 100)
        })
        it('classname', () => {
            expect(pp.constructor.name).to.equal('PaymentPackage')
        })
        it('property types should be correct and default', () => {
            expect(typeof pp.name).to.be.equal('string')
            expect(typeof pp.value).to.be.equal('number')
            expect(typeof pp.VAT).to.be.equal('number')
            expect(typeof pp.active).to.be.equal('boolean')
            expect(typeof pp.toString).to.be.equal('function')
            expect(typeof pp.toString()).to.be.equal('string')
            expect(pp.name).to.be.equal('Service')
            expect(pp.value >= 0).to.be.true
            expect(pp.value).to.be.equal(100)
            expect(pp.VAT >= 0).to.be.true
            expect(pp.VAT).to.be.equal(20)
            expect(pp.active).to.be.equal(true)
        })
        it('property types should be correct and updated', () => {
            pp.name = 'New Service'
            pp.value = 200
            pp.VAT = 15
            pp.active = false
            expect(pp.name).to.be.equal('New Service')
            expect(pp.value).to.be.equal(200)
            expect(pp.VAT).to.be.equal(15)
            expect(pp.active).to.be.equal(false)
        })
        it('Should not throw on update', () => {
            expect(pp.name = 'New Service').to.not.throw
            expect(pp.value = 200).to.not.throw
            expect(pp.VAT = 15).to.not.throw
            expect(pp.value = 0).to.not.throw
            expect(pp.VAT = 0).to.not.throw
            expect(pp.active = false).to.not.throw
        })
        it('Should throw on update', () => {
            expect(() => {
                pp.name = 12
            }).to.throw(Error).that.has.property('message', 'Name must be a non-empty string')
            expect(() => {
                pp.name = ''
            }).to.throw(Error).that.has.property('message', 'Name must be a non-empty string')
            expect(() => {
                pp.value = '400'
            }).to.throw(Error).that.has.property('message', 'Value must be a non-negative number')
            expect(() => {
                pp.value = -5
            }).to.throw(Error).that.has.property('message', 'Value must be a non-negative number')
            expect(() => {
                pp.VAT = '15'
            }).to.throw(Error).that.has.property('message', 'VAT must be a non-negative number')
            expect(() => {
                pp.VAT = -15
            }).to.throw(Error).that.has.property('message', 'VAT must be a non-negative number')
            expect(() => {
                pp.active = 'false'
            }).to.throw(Error).that.has.property('message', 'Active status must be a boolean')
        })
        it('Should toString correctly with params', () => {
            pp.active = true
            pp.name = 'Service'
            pp.value = 100
            pp.VAT = 20
            expect(pp.toString()).to.be.equal(`Package: Service\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`)
        })
        it('Should toString correctly with inactive and params', () => {
            pp.active = false
            pp.name = 'Service'
            pp.value = 100
            pp.VAT = 20
            expect(pp.toString()).to.be.equal(`Package: Service (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`)
        })
    })
})