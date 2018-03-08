let expect = require("chai").expect
let jsdom = require('jsdom-global')()
let $ = require('jquery')


document.body.innerHTML = html

let nuke = require('../06. ArmageDOM')


describe('Test armageDom', () => {
    let html = `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`

    beforeEach(() => {
        document.body.innerHTML = html
    })

    it('should do nothing for {target}', () => {
        nuke('.target')
        expect(document.body.innerHTML).to.equal(html)
    })
    it('should do nothing for {}', () => {
        nuke()
        expect(document.body.innerHTML).to.equal(html)
    })
    it('should do nothing for {5,10}', () => {
        nuke(5, 10)
        expect(document.body.innerHTML).to.equal(html)
    })
    it('should do nothing for {inside, inside}', () => {
        nuke('.inside', '.inside')
        expect(document.body.innerHTML).to.equal(html)
    })

    it('should delete {nested target}', () => {
        nuke('.nested', '.target')
        expect($('.nested.target').length).to.equal(0)
    })
    it('should delete {nested + target}', () => {
        nuke('.nested', '.target')
        expect($('.nested').filter('.target').length).to.equal(0)
    })
    it('should not delete {nested}', () => {
        nuke('.nested', '.target')
        expect($('.nested').length).to.not.equal(0)
    })
    it('should not delete {target}', () => {
        nuke('.nested', '.target')
        expect($('.target').length).to.not.equal(0)
    })
})
