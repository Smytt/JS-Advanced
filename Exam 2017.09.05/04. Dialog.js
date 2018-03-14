class Dialog {
    constructor(message, callback) {
        this.message = message
        this.callback = callback
        this.overlay = $('<div class="overlay"></div>')
        this.inputs = []
    }

    addInput(label, name, type) {
        this.inputs.push([label, name, type])
    }

    render() {
        let dialog = $('<div class="dialog">')
        let button1 = $('<button>OK</button>')
        let button2 = $('<button>Cancel</button>')
        button1.click(this.ok.bind(this))
        button2.click(this.cancel.bind(this))
        dialog.append(`<p>${this.message}</p>`)
        this.inputs.forEach(input => {
            dialog.append(`<label>${input[0]}</label>`)
            dialog.append(`<input name="${input[1]}" type="${input[2]}">`)
        })
        dialog.append(button1)
        dialog.append(button2)
        $('body').append(this.overlay.append(dialog))
    }

    ok() {
        let obj = {}
        if($('.dialog input').length !== 0) {
            $('.dialog input').each((i, e) => {
                obj[e.name] = $(e).val()
            })
        }
        this.callback(obj)
        this.overlay.remove()
        this.overlay = $('<div class="dialog"></div>')
    }

    cancel() {
        this.overlay.remove()
        this.overlay = $('<div class="dialog"></div>')
    }
}