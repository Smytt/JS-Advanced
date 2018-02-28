let solve = (function () {
    let str = ''
    let command = {
        append: (val) => str += val,
        removeStart: (n) => str = str.substr(n),
        removeEnd: (n) => str = str.substr(0, str.length - n),
        print: () => console.log(str)
    }
    return function (arr) {
        arr.forEach(row => {
            let [comm, val] = row.split(' ')
            command[comm](val)
        })
    }
})()


solve(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print'])