/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    const build=(low,high)=>{
            if(low>high){
                return null;
            }

            let mid=low+((high-low)>>1)
            return new TreeNode(nums[mid],build(low,mid-1),build(mid+1,high));
    }
    return build(0,nums.length-1);
};