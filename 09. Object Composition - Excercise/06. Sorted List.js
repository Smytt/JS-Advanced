let collection = () => {
    let list = []
    return {
        size: list.length,
        add: function (element) {
            list.push(element)
            list.sort((a, b) => a - b)
            this.size++
            return list
        },
        remove: function (index) {
            if (index >= 0 && index < this.size) {
                list.splice(index, 1)
                list.sort((a, b) => a - b)
                this.size--
                return list
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.size) {
                return list[index]
            }
        }
    }
}

let list = collection()
console.log(list.add(5));
console.log(list.size);
console.log(list.get(0));