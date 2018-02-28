let manager = (() => {
    let pantry = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let err = (type) => `Error: not enough ${type} in stock`
    let recipes = {
        apple: (qty) => {
            if (qty * 1 > pantry.carbohydrate) return err('carbohydrate')
            if (qty * 2 > pantry.flavour) return err('flavour')
            pantry.carbohydrate -= qty * 1
            pantry.flavour -= qty * 2
            return 'Success'
        },
        coke: (qty) => {
            if (qty * 10 > pantry.carbohydrate) return err('carbohydrate')
            if (qty * 20 > pantry.flavour) return err('flavour')
            pantry.carbohydrate -= qty * 10
            pantry.flavour -= qty * 20
            return 'Success'
        },
        burger: (qty) => {
            if (qty * 5 > pantry.carbohydrate) return err('carbohydrate')
            if (qty * 7 > pantry.fat) return err('fat')
            if (qty * 3 > pantry.flavour) return err('flavour')
            pantry.carbohydrate -= qty * 5
            pantry.fat -= qty * 7
            pantry.flavour -= qty * 3
            return 'Success'
        },
        omelet: (qty) => {
            if (qty * 5 > pantry.protein) return err('protein')
            if (qty * 1 > pantry.fat) return err('fat')
            if (qty * 1 > pantry.flavour) return err('flavour')
            pantry.protein -= qty * 5
            pantry.fat -= qty * 1
            pantry.flavour -= qty * 1
            return 'Success'
        },
        cheverme: (qty) => {
            if (qty * 10 > pantry.protein) return err('protein')
            if (qty * 10 > pantry.carbohydrate) return err('carbohydrate')
            if (qty * 10 > pantry.fat) return err('fat')
            if (qty * 10 > pantry.flavour) return err('flavour')
            pantry.protein -= qty * 10
            pantry.carbohydrate -= qty * 10
            pantry.fat -= qty * 10
            pantry.flavour -= qty * 10
            return 'Success'
        },
    }
    let commands = {
        restock: (ingredient, qty) => {
            pantry[ingredient] ? pantry[ingredient] += qty : pantry[ingredient] = qty
            return "Success"
        },
        prepare: (recipe, qty) => recipes[recipe](qty),
        report: () => {
            return `protein=${pantry.protein} `+
                `carbohydrate=${pantry.carbohydrate} `+
                `fat=${pantry.fat} `+
                `flavour=${pantry.flavour}`

        },
    }
    return row => {
        let [command, type, qty] = row.split(' ')
        qty = Number(qty)
        return commands[command](type, qty);
    }
})()



manager('restock carbohydrate 10')
manager('restock flavour 10')
manager('prepare apple 1')
manager('restock fat 10')
manager('prepare burger 1')
manager('report')