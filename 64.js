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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(!root) return 0;
    let ans=0;
    const dfs=(root,need)=>{
        if(!root) return;
        if(need-root.val===0){
            ans++;
        }
        dfs(root.left,need-root.val);
        dfs(root.right,need-root.val);
    }
    dfs(root,targetSum);
    ans=ans+pathSum(root.left,targetSum);
    ans=ans+pathSum(root.right,targetSum);
    return ans;
};