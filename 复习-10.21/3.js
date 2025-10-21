/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set=new Set(nums);
    let max=0;
    for(let temp of set){
        if(!set.has(temp-1)){
            let currentNum=temp;
            let currentSteak=1;

            while(set.has(currentNum+1)){
                currentNum++;
                currentSteak++;
            }

            max=Math.max(max,currentSteak);
        }
    }

    return max;
};