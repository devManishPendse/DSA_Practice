//power of two
function fun(n) {
    if (n === 1) {
        return true;
    }
    else if (n % 2 !== 0 || n < 1) {
        return false;
    }

    return fun(n / 2)
}
console.log(fun(16));

