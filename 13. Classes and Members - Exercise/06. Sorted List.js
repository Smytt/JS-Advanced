let solve = (() => {
    let list = []
    class List {
        constructor () {
            this.size = list.length
        }
        add(element) {
            list.push(element)
            list.sort((a, b) => a - b)
            this.size++
            return list
        }
        remove(index) {
            if (index >= 0 && index < this.size) {
                list.splice(index, 1)
                list.sort((a, b) => a - b)
                this.size--
                return list
            }
        }
        get(index) {
            if (index >= 0 && index < this.size) {
                return list[index]
            }
        }
    }
    return List
})()

let list = collection()
console.log(list.add(5));
console.log(list.size);
console.log(list.get(0));