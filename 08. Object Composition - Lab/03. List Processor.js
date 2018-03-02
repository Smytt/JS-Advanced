function processor(input) {

    let process = (() => {
        let collection = [];
        let obj = {
            add: (v) => collection.push(v),
            remove: (v) => collection = collection.filter(x => x!== v),
            print: () => console.log(collection.join(','))
        }
        return function([command, value]) {
            obj[command](value);
        }
    })()

    input.forEach(str => process(str.split(' ')))
}

processor(['add hello', 'add again', 'remove hello', 'add again', 'print'])