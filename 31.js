
/**
 * @param {number[]} nums
 * @return {number}
 */
// 题意：最大的连续子数组
var maxProduct = function(nums) {
  let maxF = nums[0], minF = nums[0], ans = nums[0]
  for(let i=1;i<nums.length;i++){
    let mx = maxF, mn = minF;
    // 得考虑负数的情况
    maxF = Math.max(mx * nums[i], Math.max(nums[i], mn * nums[i]));
    // 考虑负数情况 我们要算出最小值 因为最小值* 负数 可能就是变为最大值
    // 这里的minF表达式就是为了解决负数情况的
    minF = Math.min(mn * nums[i], Math.min(nums[i], mx * nums[i]));
    ans = Math.max(maxF, ans);
  }
  return ans
};



// 示例 1:

// 输入: nums = [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。
// 示例 2:

// 输入: nums = [-2,0,-1]
// 输出: 0
// 解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。