function maximumProductOfThree(nums) {
    nums.sort((a, b) => a - b);

    const n = nums.length;

    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];

    const product2 = nums[0] * nums[1] * nums[n - 1];

    return Math.max(product1, product2);
}

const nums = [-10, -10, 5, 2, 1];
console.log("Maximum Product of Three Numbers:", maximumProductOfThree(nums));
