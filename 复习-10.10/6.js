/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res=[];
    nums.sort((a,b)=>a-b);
    for(let k=0;k<nums.length;k++){
        if(nums[k]==nums[k-1]){
            continue;
        }

        let i=k+1,j=nums.length-1;
        while(i<j){
            let sum=nums[k]+nums[i]+nums[j];
            if(sum<0){
                i++;
                while(i<j&&nums[i]==nums[i-1]){
                    i++;
                }
            }

            if(sum>0){
                j--;
                while(i<j&&nums[j]==nums[j+1]){
                    j--;
                }
            }

            if(sum==0){
                res.push([nums[k],nums[i],nums[j]]);
                i++;
                j--;
                while(i<j&&nums[i]==nums[i-1]){
                    i++;
                }
                while(i<j&&nums[j]==nums[j+1]){
                    j--;
                }
            }
        }
    }

    return res;
};