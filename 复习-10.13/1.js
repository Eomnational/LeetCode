/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n=nums.length,target=n-1;

    for(let i=n-2;i>=0;i--){
        if(nums[i]+i>=target){
            target=i;
        }
    }

    return target==0;
};