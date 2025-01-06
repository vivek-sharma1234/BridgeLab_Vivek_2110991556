function subarrayWithGivenSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target && start <= end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return arr.slice(start, end + 1); 
        }
    }

    return null; 
}

const arr = [1, 2, 3, 7, 5];
const target = 12;
console.log("Subarray with Given Sum:", subarrayWithGivenSum(arr, target));
