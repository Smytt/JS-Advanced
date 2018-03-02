function solve(array) {
    function createRect(w, h) {
        let rect = {
            width: w,
            height: h,
            area: function () { return this.width * this.height},
            compareTo: function (otherRect) {
                let result =  otherRect.area() - this.area()

                return result || otherRect.width - this.width
            }
        }
        return rect
    }

    let rects = []

    for (let [w,h] of array) {
        rects.push(createRect(w,h))
    }

    rects.sort((a,b)=> a.compareTo(b))

    return rects
}

console.log(solve([[10, 5], [5, 12]]));