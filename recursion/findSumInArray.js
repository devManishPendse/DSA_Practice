let arr = [1, 1, 1, 1, 1];
function fun(n) {
    console.log(n)
    if (n === 0) { return arr[0]; }
    return arr[n] + fun(n - 1);

}

console.log(fun(arr.length - 1));
