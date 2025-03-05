let slow = head;
let fast = head;

while (fast !== null && fast.next !== null) {
  slow = slow.next; // Move slow by 1 step
  fast = fast.next.next; // Move fast by 2 steps

  if (slow === fast) {
    return true; // Cycle detected
  }
}

return false;
