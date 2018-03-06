(() => {

    String.prototype.ensureStart = function (str) {
        if (this.indexOf(str) !== 0) return str += this
        return this.toString()
    }
    String.prototype.ensureEnd = function (str) {
        if (this.indexOf(str) !== (this.length - str.length)) return str = this + str
        return this.toString()
    }
    String.prototype.isEmpty = function () {
        return this.length === 0;

    }

    String.prototype.truncate = function (n) {
        if (this.length <= n) return this.toString()
        if (n < 4) return this.replace(/./g, '.').toString()
        if (this.indexOf(' ') === -1) return this.substr(0, n - 3) + '...'

        let result = ''
        let words = this.split(' ')
        for (let word of words) {
            if ((result + word).length - 1 > n - 3) {
                return result.substr(0, result.length - 1) + '...'
            }
            result += word + ' '

        }

    }
    String.format = function () {
        let string = arguments[0]

        for (let i = 1; i < arguments.length; i++) {
            let regex = new RegExp('\\{' + (i - 1) + '\\}', 'g')
            string = string.replace(regex, arguments[i])
        }

        return string
    }

})
()

console.log(String.format('the {0} brown {1} jumps over the {2} dog', 'quick'))