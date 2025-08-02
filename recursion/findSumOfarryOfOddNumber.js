//sum of odd numbers
let arr = [1, 2, 3, 4, 5, 6];
function fun(n) {
    // console.log(n)
    if (n === 0) { return arr[0]; }
    let k = (arr[n] % 2 !== 0) ? arr[n] : 0;
    return k + fun(n - 1);

}

console.log(fun(arr.length - 1));
