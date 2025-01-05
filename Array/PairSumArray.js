function findPairWithSum(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        const sum = arr[low] + arr[high];
        
        if (sum === target) {
            return [arr[low], arr[high]]; 
        } else if (sum < target) {
            low++;
        } else {
            high--; 
        }
    }

    return null; 
}

// Example Usage
const arr = [1, 2, 3, 4, 6, 8, 9];
const target = 10;
console.log("Pair with Given Sum:", findPairWithSum(arr, target));
