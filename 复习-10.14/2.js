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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    const compare=(left,right)=>{
        if(left==null&&right!==null||right==null&&left!==null){
            return false;

        }else if(left==null&&right==null){
            return true;
        
        }else if(left.val!==right.val){
            return false
   
        }
            let inSide=compare(left.right,right.left);
            let outSide=compare(left.left,right.right);

            return inSide&&outSide;
    }

    if(root==null){
        return true;
    }

    return compare(root.left,root.right);
};