function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Calculate left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Calculate right products and multiply with the left products
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}

// Example Usage
const nums = [1, 2, 3, 4];
console.log("Product Except Self:", productExceptSelf(nums));
