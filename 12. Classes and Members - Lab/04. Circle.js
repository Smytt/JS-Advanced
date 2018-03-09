class Circle {
    constructor(radius) {
        this.radius = radius
    }

    set radius(newRadius) {
        this._r = newRadius
    }

    get radius() {
        return this._r
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get area() {
        return this.radius * this.radius * Math.PI
    }
}