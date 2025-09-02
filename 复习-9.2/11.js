/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap=(nums,l,r)=>{
    let t;
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
    k=k%n;
    swap(nums,0,n-1);
    swap(nums,0,k-1);
    swap(nums,k,n-1);
};