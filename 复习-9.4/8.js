/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n=nums.length,target=nums.length-1;

    for(let i=n-2;i>=0;i--){
        if(nums[i]+i>=target){
            target=i;
        }
    }
    if(target===0) return true;
    return false;
};