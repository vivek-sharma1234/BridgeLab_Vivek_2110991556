function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;

    // Extract the last k elements and the remaining elements
    const part1 = arr.slice(-k);
    const part2 = arr.slice(0, n - k);

    return [...part1, ...part2];
}

// Example Usage
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log("Rotated Array:", rotateArray(arr, k));
