function removeDuplicates(arr) {


    let newArray = [];
    for (let i = 0, x = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
        }
        else {
            arr[x] = arr[i]
            x++;
            
            // newArray.push(arr[i])
        }
    }
    console.log(arr);

}


removeDuplicates([0, 0, 1, 2, 2, 3, 3, 4, 5])

//time complexcity 
//O(n^2)

//space complexcity
//O(2n)
