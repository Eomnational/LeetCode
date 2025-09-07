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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res=[];
    const test=(root)=>{
        if(root==null){
            return;
        }
        test(root.left);
        res.push(root.val);
        test(root.right);
    }
    test(root);
    return res;
};