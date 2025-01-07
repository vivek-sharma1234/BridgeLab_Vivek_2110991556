function slidingWindowMaximum(nums, k) {
    const deque = []; 
    const result = []; 

    for (let i = 0; i < nums.length; i++) {
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
const maxValues = slidingWindowMaximum(nums, k);
console.log("Sliding Window Maximum:", maxValues);
