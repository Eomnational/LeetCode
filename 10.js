/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const reserve=function(nums,l,r,t){
    while(l<r){
        t=nums[l];
        nums[l]=nums[r];
        nums[r]=t;
        l++;
        r--;
    }
}
var rotate = function(nums, k) {
   let n=nums.length;
   if((k%n)===0) return;
   reserve(nums,0,n-1);
   reserve(nums,0,k-1);
   reserve(nums,k,n-1);

};



// 示例 1:

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
// 示例 2:

// 输入：nums = [-1,-100,3,99], k = 2
// 输出：[3,99,-1,-100]
// 解释: 
// 向右轮转 1 步: [99,-1,-100,3]
// 向右轮转 2 步: [3,99,-1,-100]

let nums = [-1,-100,3,99], k = 2;
rotate(nums,k)
console.log(nums)