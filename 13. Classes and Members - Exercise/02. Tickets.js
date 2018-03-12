let solve = (() => {
    let tickets = []

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }


        get destination() {
            return this._destination;
        }

        set destination(value) {
            this._destination = value;
        }

        get price() {
            return this._price;
        }

        set price(value) {
            this._price = Number(value);
        }

        get status() {
            return this._status;
        }

        set status(value) {
            this._status = value;
        }
    }

    return function (commands, key) {
        for (let i = 0; i < commands.length; i++) {
            tickets.push(new Ticket(...commands[i].split('|')))
        }
        tickets.sort((a,b) => {
            if (a[key] < b[key]) return -1
            if (a[key] > b[key]) return 1
            return 0
        })

        return tickets
    }
})()

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));

