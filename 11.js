var productExceptSelf = function (nums) {
    let res=[];
    res[0]=1;
    for(let i=1;i<nums.length;i++){
        res[i]=nums[i-1]*res[i-1];
    }

    let right=1;
    for(let j=nums.length-1;j>=0;j--){
        res[j]=res[j]*right;
        right=right*nums[j];
    }
    return res;
    
    
};



// 示例 1:

// 输入: nums = [1,2,3,4]
// 输出: [24,12,8,6]
// 示例 2:

// 输入: nums = [-1,1,0,-3,3]
// 输出: [0,0,9,0,0]
const nums= [-1,1,0,-3,3];
console.log(productExceptSelf(nums))