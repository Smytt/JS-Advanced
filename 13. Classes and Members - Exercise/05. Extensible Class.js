let Extensible = (() => {
    let id = 1;

    class Extensible {
        constructor() {
            this.id = id++
        }

        extend(template) {
            for (let key in template) {
                if (typeof template[key] === "function") {
                    Object.getPrototypeOf(this)[key] = template[key]
                }
                else this[key] = template[key]
            }
            return this
        }
    }

    return Extensible
})()

let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);