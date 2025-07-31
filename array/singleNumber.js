var singleNumber = function (arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] = obj[arr[i]] + 1;
        } else {
            obj[arr[i]] = 1;
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (1 === obj[arr[j]]) {
            return arr[j]
        }
    }

};
console.log(singleNumber([3, 4, 4, 3, 2, 2, 21]))


var singleNumberWithXor = function (arr) {
    let xor = 0;
    for (let i = 0; i < arr.length; i++) {
        xor = xor ^ arr[i];
    }
    return xor;

};
console.log(singleNumberWithXor([3, 4, 4, 3, 2, 2, 21]))
