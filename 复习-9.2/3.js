/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums.sort((a,b)=>a-b);
    let set=new Set(nums);
    let max=-1;
    for(let temp of set){
        if(set.has(temp-1)===false){
            let start=temp;
            while(set.has(temp)){
                temp++;
            }
            let end=temp;
            max=Math.max(max,end-start);
        }
    }
    return max;
};