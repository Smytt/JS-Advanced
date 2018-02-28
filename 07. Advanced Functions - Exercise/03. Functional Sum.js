console.log((function () {
    let sum = 0

    function increase(num) {
        sum += num
        return increase
    }
    increase.toString = () => sum

    return increase
})()(1)(3)(9).toString())