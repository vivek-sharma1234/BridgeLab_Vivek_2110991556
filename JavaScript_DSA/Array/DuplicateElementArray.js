function findDuplicates(arr) {
    const frequency = {};
    const duplicates = [];

    // Count occurrences of each element
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    // Collect duplicates
    for (let key in frequency) {
        if (frequency[key] > 1) {
            duplicates.push(Number(key));
        }
    }

    return duplicates;
}

// Example Usage
let arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log("Duplicates:", findDuplicates(arr));
