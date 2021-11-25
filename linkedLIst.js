var Node = function (val) {
    this.val = val;
    this.next = null;
    this.prev = null;
}
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.head = null;
    this.len = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index >= this.len || index < 0)
        return -1;
    let tmp = this.head;
    let i = 0
    while (i < index) {
        tmp = tmp.next;
        i++;
    }
    return tmp.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newHead = new Node(val);
    if (!this.head)
        this.head = newHead;
    else {
        newHead.next = this.head;
        this.head = newHead;
    }
    this.len++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);
    if (!this.head)
        this.head = newNode;
    else {
        let tmp = this.head;
        while (tmp.next) {
            tmp = tmp.next;
        }
        tmp.next = newNode;
    }
    this.len++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this.len || index < 0)
        return null;
    if (index == 0)
        this.addAtHead(val);
    else if (index == this.len)
        this.addAtTail(val);
    else {
        let i = 0;
        let tmp = this.head;
        let prev = tmp;
        let newNode = new Node(val);
        while (i < index) {
            prev = tmp;
            tmp = tmp.next;
            i++;
        }
        prev.next = newNode;
        newNode.next = tmp;
        this.len++;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.len || index < 0)
        return;
    if (index == 0)
        this.head = this.head.next;
    else {
        let tmp = this.head;
        let prev = tmp;
        let i = 0;
        while (i < index) {
            prev = tmp;
            tmp = tmp.next;
            i++;
        }
        prev.next = tmp.next;
    }
    this.len--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */