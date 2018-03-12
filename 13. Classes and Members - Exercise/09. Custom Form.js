let result = (() => {
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

    class Form {

        constructor () {
            this._element = $('<div class="form">')
            this._textboxes = []
            this.textboxes = [...arguments]
        }

        get textboxes() {
            return this._textboxes;
        }

        set textboxes(value) {
            value.forEach(txtbx => {
                if(txtbx.constructor.name !== 'Textbox')
                    throw new Error
            })
            this._textboxes = value;
            this._textboxes.forEach(txtbx => {
                for (let el of txtbx._elements) {
                    this._element.append($(el))
                }
            })
        }

        submit() {
            let isTrue = true
            this.textboxes.forEach(txtbx => {
                if (txtbx.isValid())
                    txtbx.elements.css('border', '2px solid green')
                else {
                    txtbx.elements.css('border', '2px solid red')
                    isTrue = false
                }
            })
            return isTrue
        }

        attach(selector) {
            $(selector).append(this._element)
        }
    }

    return {
        Textbox,
        Form
    }
})()



let Textbox = result.Textbox;
let Form = result.Form;

let text = new Textbox(".text",/[^a-zA-Z0-9]/);
let name = new Textbox(".name",/[^a-zA-Z]/);
let textInputs = $('.text');
let nameInputs = $('.name');
let form = new Form(text,name);
form.attach("#root");
let root = $('#root');