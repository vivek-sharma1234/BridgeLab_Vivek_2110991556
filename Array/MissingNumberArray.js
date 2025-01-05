function findMissingNumber(arr) {
    const n = arr.length; 
    const expectedSum = ((n + 1) * (n + 2)) / 2; 
    const actualSum = arr.reduce((sum, num) => sum + num, 0); 

    return expectedSum - actualSum; 
}

// Example Usage
let arr = [1, 2, 4, 5, 6]; 
console.log("Missing Number:", findMissingNumber(arr));
