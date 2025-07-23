function rev(n) {
    let nCopy = n;
    n = Math.abs(n);
    let limit = 32 ** 2;
    let reverse = 0, reminder = 0;
    while (n > 0) {
        reminder = n % 10;
        reverse = (10 * reverse) + reminder;
        n = Math.floor(n / 10);
    }

    if (nCopy < limit && nCopy > limit) {
        return 0
    }

    if (nCopy < 0) {
        return -reverse;
    }
    else {
        return reverse;

    }
}

console.log(rev(-12345))
