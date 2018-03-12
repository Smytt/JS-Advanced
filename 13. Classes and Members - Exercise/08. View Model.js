class Textbox {
    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        $(this.elements).val(this.value)
    }

    get elements() {
        return this._elements;
    }

    set elements(value) {
        value.each((i, e) => {
            $(e).on('input', () => {
                this.value = $(e).val()
            })
        })
        this._elements = value;
    }

    constructor(selector, regex) {
        this.value = $(selector).val()
        this.elements = $(selector)
        this._invalidSymbols = regex
    }

    isValid() {
        return !this._invalidSymbols.test(this.value)
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input', function () {
    console.log(textbox.value);
});