function solve(num1, num2) {
    let a = Math.max(num1, num2)
    let b = Math.min(num1, num2)

    if (a % b === 0) return b

    else return solve(b, a % b)
}

console.log(solve(1071,462))