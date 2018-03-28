let PaymentPackage = require('../02. Payment Package')
let expect = require('chai').expect

describe("testing", function () {
    let pp
    it('should throw if only 1 parameter is supplied', () => {
        expect(() => {
            pp = new PaymentPackage('String')
        }).to.throw(Error).that.has.property('message', 'Value must be a non-negative number')
    })
    it('should not throw if 2 parameter are supplied - string, number', () => {
        expect(() => {
            pp = new PaymentPackage('String', 5)
        }).to.not.throw
    })
    it('Should have name', () => {
        expect(PaymentPackage.prototype.hasOwnProperty('name')).to.be.true
    })
    it('Should have VAT', () => {
        expect(PaymentPackage.prototype.hasOwnProperty('VAT')).to.be.true
    })
    it('Should have value', () => {
        expect(PaymentPackage.prototype.hasOwnProperty('value')).to.be.true
    })
    it('Should have active', () => {
        expect(PaymentPackage.prototype.hasOwnProperty('active')).to.be.true
    })
    it('Should have toString', () => {
        expect(PaymentPackage.prototype.hasOwnProperty('toString')).to.be.true
    })

    it('Should throw on update name', () => {
        pp = new PaymentPackage('String', 5)
        expect(() => {
            pp.name = ''
        }).to.throw
    })
    it('Should throw on update name - wrong type', () => {
        pp = new PaymentPackage('String', 5)
        expect(() => {
            pp.name = 4
        }).to.throw
    })
    it('Should throw on update VAT', () => {
        pp = new PaymentPackage('String', 5)
        expect(() => {
            pp.VAT = '12'
        }).to.throw
    })
    it('Should throw on update VAT - neg', () => {
        pp = new PaymentPackage('String', 5)
        expect(() => {
            pp.VAT = -5
        }).to.throw
    })
    it('Should throw on update value', () => {
        pp = new PaymentPackage('String', 5)
        expect(() => {
            pp.value = '12'
        }).to.throw
    })
    it('Should throw on update value - neg', () => {
        pp = new PaymentPackage('String', 5)
        expect(() => {
            pp.value = -5
        }).to.throw
    })
    it('Should throw on update active', () => {
        pp = new PaymentPackage('String', 5)
        expect(() => {
            pp.active = -5
        }).to.throw
    })
    it('Should toString correctly with params', () => {
        pp = new PaymentPackage('String', 5)
        pp.active = true
        pp.name = 'Service'
        pp.value = 100
        pp.VAT = 20
        expect(pp.toString()).to.be.equal(`Package: Service\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`)
    })
    it('Should toString correctly with inactive and params', () => {
        pp = new PaymentPackage('String', 5)
        pp.active = false
        pp.name = 'Service'
        pp.value = 100
        pp.VAT = 20
        expect(pp.toString()).to.be.equal(`Package: Service (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120`)
    })
    it('property types should be correct and default', () => {
        pp = new PaymentPackage('String', 5)
        expect(typeof pp.name).to.be.equal('string')
        expect(typeof pp.value).to.be.equal('number')
        expect(typeof pp.VAT).to.be.equal('number')
        expect(typeof pp.active).to.be.equal('boolean')
        expect(typeof pp.toString).to.be.equal('function')
        expect(typeof pp.toString()).to.be.equal('string')
        expect(pp.name).to.be.equal('String')
        expect(pp.value >= 0).to.be.true
        expect(pp.value).to.be.equal(5)
        expect(pp.VAT >= 0).to.be.true
        expect(pp.VAT).to.be.equal(20)
        expect(pp.active).to.be.equal(true)
    })
})