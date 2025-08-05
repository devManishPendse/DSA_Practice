//bubble sort
//0, 1, 1, 2, 3, 5, 8
function boobleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let isAlreadySwaped = false;

        for (let j = 0; j < arr.length - 1 - i; j++) {
            isAlreadySwaped = true;
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
        if (!isAlreadySwaped) break;

    }
    return arr;
}
console.log(boobleSort([5, 4, 3, 2, 1]));

