function maxSubArraySum(arr) {
    let maxSum = Number.MIN_SAFE_INTEGER; 
    let currentSum = 0; 

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]; 

        if (currentSum > maxSum) {
            maxSum = currentSum; 
        }

        if (currentSum < 0) {
            currentSum = 0;  
        }
    }

    return maxSum;
}


let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log("Largest Sum of Contiguous Subarray:", maxSubArraySum(arr));
