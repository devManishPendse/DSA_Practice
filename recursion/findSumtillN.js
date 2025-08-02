let n = 5;
let fun = function (n) {

    if (n === 0) { return (n); }
    console.log(n)
    return n + fun(n - 1)

}

console.log(fun(5));
