var misingElement = function (arr, n) {
    let sum = 0;
    let formulaAnswer = (n * (n + 1)) / 2;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return formulaAnswer - sum;
};
console.log(misingElement([5, 2, 1, 4, 0], 5))

