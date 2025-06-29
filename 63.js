/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if(!preorder.length) return null;
  let rootVal=preorder.shift();
  let index=inorder.indexOf(rootVal);
  let root=new TreeNode(rootVal);
  root.left=buildTree(preorder.slice(0,index),inorder.slice(0,index));
  root.right=buildTree(preorder.slice(index),inorder.slice(index+1));
  return root;
};