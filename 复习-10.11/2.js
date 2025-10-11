/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    const swap=(nums,l,r)=>{
        while(l<r){
            [nums[l],nums[r]]=[nums[r],nums[l]];
            l++;
            r--;
        }
    }

    let n=nums.length;
    k=k%n;
    swap(nums,0,n-1);
    swap(nums,0,k-1);
    swap(nums,k,n-1);
    return nums;
};