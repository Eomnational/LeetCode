/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
   let max=0;
   const dfs=(root)=>{
     if(root==null){
        return 0;
     }
     let leftmax=dfs(root.left);
     let rightmax=dfs(root.right);
     max=Math.max(max,leftmax+rightmax);
     return Math.max(leftmax,rightmax)+1;
   }
   dfs(root);
   return max;
};
