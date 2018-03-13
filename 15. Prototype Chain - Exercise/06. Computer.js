function solve() {
    class Keyboard {
        constructor(manufaturer, responseTime) {
            this.manufacturer = manufaturer
            this.responseTime = responseTime
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer
            this.width = width
            this.height = height
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer
            this.expectedLife = expectedLife
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error('Class Computer cannot be initialized')
            }
            this.manufacturer = manufacturer
            this.processorSpeed = processorSpeed
            this.ram = ram
            this.hardDiskSpace = hardDiskSpace
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.weight = weight
            this.color = color
            this.battery = battery;
        }

        set battery(value) {
            if (value.constructor.name !== 'Battery')
                throw  new TypeError('Should be Battery!')
            this._battery = value
        }

        get battery() {
            return this._battery;
        }
    }

    class Desktop extends Computer {

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.keyboard = keyboard;
            this.monitor = monitor;

        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (value.constructor.name !== 'Keyboard')
                throw  new TypeError('Should be Keyboard!')
            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (value.constructor.name !== 'Monitor')
                throw  new TypeError('Should be Monitor!')
            this._monitor = value;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

module.exports = solve