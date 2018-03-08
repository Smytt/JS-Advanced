let expect = require("chai").expect
let jsdom = require('jsdom-global')()
let $ = require('jquery')

let html =`<div id="target">
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

document.body.innerHTML = html

let nuke = require('../06. ArmageDOM')


describe('Test armageDom', () => {
    beforeEach(() => {
        document.body.innerHTML = html
    })
    it('should delete {nested target}', () => {
        nuke('.nested', '.target')
        expect($('.nested.target').length).to.equal(0)
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
