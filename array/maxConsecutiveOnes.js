var maxConsctiveNumber = function (arr) {
    let currentCount = 0;
    let maxCount = 0;
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i] === 1) {
            currentCount++;
            if (maxCount < currentCount) {
                maxCount = currentCount;
            }

        } else if (arr[i] === 0) {
            currentCount = 0;
        }

    }

    return maxCount;
};
console.log(maxConsctiveNumber([1, 1, 0, 0, 1, 1, 1, 1, 0, 1]))
