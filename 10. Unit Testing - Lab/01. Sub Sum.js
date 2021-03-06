function subsum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr))
        return NaN;
    if (startIndex < 0)
        startIndex = 0;
    if (endIndex > arr.length - 1)
        endIndex = arr.length - 1;
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++){
        if (isNaN(arr[i])) return NaN
        sum += Number(arr[i]);
    }
    return sum;
}

subsum([10, 20, 30, 40, 50, 60], 3, 300)