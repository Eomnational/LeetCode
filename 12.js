/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const a = new Set(nums);
    for (let i = 1; i <= nums.length + 3; i++) {
        if (!a.has(i)) {
            return i;
        }
    }
};