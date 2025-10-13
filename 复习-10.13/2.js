/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let cur=0,nmax=0,res=0;
    for(let i=0;i<nums.length-1;i++){
        nmax=Math.max(nums[i]+i,nmax);

        if(i==cur){
            res++;
            cur=nmax;
        }
    }

    return res;
};