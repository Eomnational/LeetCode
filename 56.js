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
     const compareNode=(left,right)=>{
        if(left===null&&right!==null||left!==null&&right===null){
            return false;
        }else if(left===null&&right===null){
            return true;
        }else if(left.val!==right.val){
            return false;
        }
        let outSide=compareNode(left.left,right.right);
        let inSide=compareNode(left.right,right.left);
        return outSide&&inSide;
     }
     if(root===null){
        return true;
     };
     return compareNode(root.left,root.right);
};