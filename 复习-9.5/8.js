/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let fast =0,slow=0;
    do{
        slow=nums[slow];
        fast=nums[nums[fast]];
    }while(fast!==slow);

    slow=0;
    while(fast!==slow){
        fast=nums[fast];
        slow=nums[slow];

    }

    return slow;
};