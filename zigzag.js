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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root, result) {
  var result = [];
  if (root === null) {
    return result;
  }
  zigzag(root, result);
  return result;
};
function zigzag(root, result) {
  var queue = [];
  queue.push(root);
  var level = 0;
  while (queue.length > 0) {
    var size = queue.length;
    var temp = [];
    for (var i = 0; i < size; i++) {
      var node = queue.shift();
      if (level % 2 === 0) {
        temp.push(node.val);
      } else {
        temp.unshift(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(temp);
    level++;
  }
  return result;
}