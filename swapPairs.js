/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let prev = null;
  let curr = head;
  let next = curr?.next;
  while (next) {
    let last = next.next;

    next.next = curr;
    curr.next = last;

    if (prev) {
      prev.next = next;
    } else {
      head = next
    }

    prev = curr;
    curr = last;
    next = last?.next;
  }
  return head;
};