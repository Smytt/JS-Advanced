class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }


    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    static distance(p1, p2) {
        return Math.sqrt(Math.pow(Math.abs(p1.x - p2.x), 2) + Math.pow(Math.abs(p1.y - p2.y), 2))
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));