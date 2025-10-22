/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    const find=(isLeft)=>{
        let left=0,right=nums.length-1;
        let ans=-1;
        while(left<=right){
            let mid=left+((right-left)>>1);
            if(nums[mid]>target||isLeft&&nums[mid]===target){
                right=mid-1;
            }else{
                left=mid+1;
            }

            if(nums[mid]==target){
                ans=mid;
            }
        }

        return isLeft?
        (nums[left]==target?left:ans)
        :
        (nums[right]==target?right:ans);
    }

    let findLeft=find(true);
    if(findLeft==-1){
        return [-1,-1];
    }
    let findRight=find(false);

    return [findLeft,findRight];
};