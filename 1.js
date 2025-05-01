const moveZeroes = function(nums) {
     let k=0;
     for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            nums[k]=nums[i];
            k++;
        }
     }
     for(let j=0;j<nums.length;j++){
        if(j>=k){
            nums[j]=0;
        }
     }
 };

// 示例 1:

// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 示例 2:

// 输入: nums = [0]
// 输出: [0]

let nums = [0,1,0,3,12]
moveZeroes(nums)
console.log(nums)