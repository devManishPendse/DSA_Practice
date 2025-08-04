//binary Search
function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;
    console.log(arr)

    while (r >= l) {

        let m = Math.floor((l + r) / 2);

        if (target === arr[m]) {
            return m + 1;
        }

        else if (target < arr[m]) {
            r = m - 1;
        }
        else {
            l = m + 1;
        }
    }


    return -1;

}
console.log(binarySearch([1, 2, 3, 4, 5], 5));

