//sum of odd numbers
let arr = [1, 2, 3, 45];
function fun(n) {
    console.log(n)
    if (n === 1) {
        return n;
    }
    return n * fun(n - 1)
}

console.log(fun(5));
