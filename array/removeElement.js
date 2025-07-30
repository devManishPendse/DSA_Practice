function removeElements(arr, e) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != e) {
            //shift element to left if its not equal to value
            arr[x] = arr[i];
            x++;
        }
    }
    return x + 1;

}


console.log(removeElements([3, 2, 2, 3], 3))
