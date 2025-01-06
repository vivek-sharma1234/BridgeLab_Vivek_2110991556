function moveZeroes(arr) {
    let j = 0; 

    // Traverse the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[j] = arr[i]; 
            j++; 
        }
    }

    // Fill remaining positions with zeros
    for (let i = j; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}

// Example 
let arr = [0, 1, 0, 3, 12];
console.log("After moving zeroes:", moveZeroes(arr));
