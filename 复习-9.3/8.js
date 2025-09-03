/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left =0,right=nums.length-1;
    while(left<right){
        let mid=left+((right-left)>>1);
        if(nums[mid]<nums[right]){
            right=mid;
        }else if(nums[mid]>nums[right]){
            left=mid+1;
        }else{
            right--;
        }
    }
    return nums[right];
};