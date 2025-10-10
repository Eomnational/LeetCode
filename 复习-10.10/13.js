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