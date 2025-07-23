function isPalidrome(n) {
    let cn = n;
    let r, REV = 0;
    while (n > 0) {
        r = n % 10;
        REV = (10 * REV) + r
        n = Math.floor(n / 10)
    }
    console.log(REV === cn);
}


isPalidrome(121)
