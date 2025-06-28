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
    
    const build=(low,hight)=>{
        if(low>hight){
            return null;
        }
        let mid=low+((hight-low)>>1);
        return new TreeNode(nums[mid],build(low,mid-1),build(mid+1,hight));
    }
    return build(0,nums.length-1);
};
