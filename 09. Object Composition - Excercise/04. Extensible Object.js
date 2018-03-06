function solve() {
    let myObj = {
        extend: function (template) {
            for (let key in template) {
                if (typeof template[key] === "function") {
                    Object.getPrototypeOf(this)[key] = template[key]
                }
                else this[key] = template[key]
             }
             return this
        }
    }

    return myObj
}

console.log(solve().extend({name: 'pesho'}));