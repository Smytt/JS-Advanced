let classes = require('06. Computer')()

let Battery = classes.Battery
let Keyboard = classes.Keyboard
let Monitor = classes.Monitor
let Computer = classes.Computer
let Laptop = classes.Laptop
let Desktop = classes.Desktop

function createMixins() {

    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3
        }
        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4)
        }
        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)
        }
        return classToExtend
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer &&
                this.manufacturer === this.monitor.manufacturer
        }

        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 &&
                (this.color === 'Silver' || this.color === 'Black') &&
                this.weight < 3
        }
        return classToExtend
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}