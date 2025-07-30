function reverseString(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let z = arr.length - 1 - i;
        let temp = arr[z];
        arr[z] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


console.log(reverseString(['a', 'b', 'c', 'd', 'e', 'f', 'g']))
