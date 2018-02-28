function solve (arr) {
    return Math.max.call('', ...arr)
}

console.log(solve([1, 44, 123, 33]));