let count = 0;
let n = -123;
if (n == 0) console.log(1);
n = Math.abs(n)
while (n > 0) {
    n = Math.floor(n / 10);
    count++;
}
console.log(count);
