function findDuplicates(nums) {
    const frequencyMap = new Map();
    const duplicates = [];

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    for (const [key, value] of frequencyMap.entries()) {
        if (value === 2) {
            duplicates.push(key);
        }
    }

    return duplicates;
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums)); 
