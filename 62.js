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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    while(root) {
        if(!root.left) {
            root = root.right;
        } else {
            let temp = root.left;
            
           while(temp.right) temp = temp.right;
         
            temp.right = root.right;
           
            root.right = root.left;
            
            root.left = null;
            
            root = root.right; 
        }
    }
};
