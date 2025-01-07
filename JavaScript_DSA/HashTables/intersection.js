function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const resultSet = new Set();

    for (const num of nums2) {
        if (set1.has(num)) {
            resultSet.add(num);
        }
    }

    return Array.from(resultSet);
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2)); 
