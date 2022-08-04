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
var inorderTraversal = function (root, result) {
  if (!result) {
    result = [];
  }
  if (!root) return result;
  if (root) {
    inorderTraversal(root.left, result);
    result.push(root.val);
    inorderTraversal(root.right, result);
  }
  return result;
};
console.log(inorderTraversal([1, null, 2, 3]));