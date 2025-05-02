/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     let map=new Map();
     for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [i,map.get(target-nums[i])];
        }else{
            map.set(nums[i],i);
        }
     }
     return [];
};


// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：

// 输入：nums = [3,3], target = 6
// 输出：[0,1]
const nums = [3,2,4], target = 6
console.log(twoSum(nums,target))