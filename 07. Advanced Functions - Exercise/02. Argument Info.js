function solve() {
    let counter = {}

    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i]
        console.log((typeof arg) + ": " + arg)
        counter[(typeof arg)] ? counter[(typeof arg)]++ : counter[(typeof arg)] = 1
    }

    let sortedTypes = []
    for (let currentType in counter) {
        sortedTypes.push([currentType, counter[currentType]])
    }

    sortedTypes.sort((a, b) => b[1] - a[1]).forEach(type => {
        console.log(type[0] + " = " + type[1])
    })
}

solve('cat', 42, function () {
    console.log('Hello world!');
});