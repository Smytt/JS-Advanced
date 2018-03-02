function solve(input) {

    let process = (() => {
        let objects = []

        let commands = {
            create: (name, inherits, parentName) => {
                if (inherits === undefined)
                    objects.push({name: name})
                else {
                    let parentIndex = objects.findIndex(x => x.name === parentName)
                    let newObj = Object.create(objects[parentIndex])
                    newObj.name = name
                    objects.push(newObj)
                }
            },
            set: (name, key, value) => {
                let index = objects.findIndex(x => x.name === name)
                objects[index][key] = value
            },
            print: (name) => {
                let index = objects.findIndex(x => x.name === name)
                let print = []
                for (let key in objects[index]) {
                    if (key !== 'name')
                    print.push(`${key}:${objects[index][key]}`)
                }
                console.log(print.join(', '))
            }

        }

        return function (str) {
            let commandLine = str.split(' ')
            commands[commandLine[0]](...(commandLine.slice(1)))
        }
    })()

    input.forEach(x => process(x))

}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])