/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let max=0;

    const test=(root)=>{
        if(root==null){
            return 0;
        }

        let maxleft=test(root.left);
        let maxright=test(root.right);

        max=Math.max(max,maxleft+maxright);

        return Math.max(maxleft,maxright)+1
    }

    test(root);

    return max;
};