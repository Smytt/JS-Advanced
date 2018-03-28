class PaymentProcessor {
    constructor() {
        this.options = {
            types: ["service", "product", "other"],
            precision: 2
        }
        this.updateOptions(...arguments)

        this.payments = new Map()
    }

    registerPayment(id, name, type, value) {
        if (id === '' || typeof id !== 'string')
            throw new Error('id must be non-empty string')
        if (name === '' || typeof name !== 'string')
            throw new Error('name must be non-empty string')
        if (typeof value !== 'number')
            throw new Error('value must be a number')
        if (!this.options.types.includes(type)) {
            throw new Error('type not supported')
        }
        if (this.payments.has(id)) {
            throw new Error('Id already exists')
        }

        this.payments.set(id, {
            id,
            name,
            type,
            value: value.toFixed(this.options.precision)
        })
    }

    deletePayment(id) {
        if (!this.payments.has(id)) {
            throw new Error('Id not found')
        }
        this.payments.delete(id)
    }

    get(id) {
        if (!this.payments.has(id)) {
            throw new Error('Id not found')
        }
        let payment = this.payments.get(id)
        return `Details about payment ID: ${payment.id}\n` +
            `- Name: ${payment.name}\n` +
            `- Type: ${payment.type}\n` +
            `- Value: ${payment.value}\n`
    }

    setOptions(options) {
        this.updateOptions(options)
    }

    toString() {
        let balance = 0
        this.payments.forEach((v, k, m) => {
            balance += Number(v.value)
        })
        return `Summary:\n` +
            `- Payments: ${this.payments.size}\n` +
            `- Balance: ${balance.toFixed(this.options.precision)}\n`
    }

    updateOptions() {
        if (arguments.length !== 0) {
            Object.keys(arguments[0]).forEach(key => {
                this.options[key] = arguments[0][key]
            })
        }
    }
}

// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
// generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
// generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());
