function solve(f) {
    return function (value) {
        return f(',', '$', true, value)
    }
}

let result = solve(f) // returns function(value)

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

console.log(result(1000))
