function removeDuplicates(arr) {


    let newArray = [];
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[x]) {
            x++;
            arr[x] = arr[i];
        }
    }
    return x + 1;

}


console.log(removeDuplicates([0, 0, 1, 2, 2, 3, 3, 4, 5]))

//time complexcity 
//O(n^2)

//space complexcity
//O(2n)
