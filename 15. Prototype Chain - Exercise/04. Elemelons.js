function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError('Abstract class cannot be instantiated directly')
            }
            this.weight = weight
            this.melonSort = melonSort
            this.element = this.constructor.name.substr(0, this.constructor.name.length - 5)
        }

        get elementIndex() {
            return this.weight * this.melonSort.length
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Watermelon extends Melon {
    }

    class Firemelon extends Melon {
    }

    class Earthmelon extends Melon {
    }

    class Airmelon extends Melon {
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort)
            this.elements = ['Water', 'Fire', 'Earth', 'Air']
            this.element = 'Water'
            this.currentElement = 1
        }

        morph() {
            this.element = this.elements[this.currentElement++]
            this.currentElement %= 4
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Airmelon,
        Earthmelon,
        Melolemonmelon
    }
}

let classes = solve();

let test = new classes.Melolemonmelon(150, "Melo");

console.log(test);