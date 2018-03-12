function result() {

    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new Error('Can\'t initialize abstract class!')
            }
        }

        get area() {
            return undefined;
        }

        toString() {
            return this.constructor.name;
        }
    }

    class Circle extends Figure {
        constructor(r) {
            super();
            this.radius = r
        }

        get area() {
            return Math.PI * this.radius * this.radius
        }

        toString() {
            return `${this.constructor.name} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(w, h) {
            super();
            this.width = w
            this.height = h
        }

        get area() {
            return this.width * this.height
        }

        toString() {
            return `${this.constructor.name} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

let classes = result();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let r = new Rectangle(3, 4);
console.log(r.area())