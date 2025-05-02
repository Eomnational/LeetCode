/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max=nums[0],dp=nums[0];
    for(let i=1;i<nums.length;i++){
        dp=Math.max(nums[i],nums[i]+dp);
        max=Math.max(max,dp);

    }
    return max;
    
    
};


// 示例 1：

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
// 示例 2：

// 输入：nums = [1]
// 输出：1
// 示例 3：

// 输入：nums = [5,4,-1,7,8]
// 输出：23

const nums = [5,4,-1,7,8];
console.log(maxSubArray(nums));