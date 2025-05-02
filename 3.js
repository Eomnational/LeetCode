/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
   let i,j,sum,res=[];
   nums.sort((a,b)=>a-b);
   for(let k=0;k<nums.length;k++){
      if(nums[k]===nums[k-1]){
          continue;
      }
   

   i=k+1;
   j=nums.length-1;
   while(i<j){
      sum=nums[k]+nums[i]+nums[j];
      if(sum<0){
        i++;
        while(i<j&&nums[i]===nums[i-1]){
            i++;
        }
      }

      if(sum>0){
          j--;
          while(i<j&&nums[j]===nums[j+1]){
            j--;
          }
      }

      if(sum===0){
          res.push([nums[i],nums[j],nums[k]]);
          i++;
          j--;
          while(i<j&&nums[i]===nums[i-1]){
            i++;
          }

          while(i<j&&nums[j]===nums[j+1]){
            j--;
          }
      }
   }
  }
   return res;
};

// 示例 1：

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。
// 示例 2：

// 输入：nums = [0,1,1]
// 输出：[]
// 解释：唯一可能的三元组和不为 0 。
// 示例 3：

// 输入：nums = [0,0,0]
// 输出：[[0,0,0]]
// 解释：唯一可能的三元组和为 0 。

const nums= [-1,0,1,2,-1,-4];
console.log(threeSum(nums));