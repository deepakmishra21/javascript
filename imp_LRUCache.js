
var Node = function (key, val) {
    this.val = val;
    this.key = key;
    this.next = null;
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.head = null;
    this.hash = {};
    this.len = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.hash[key]) {
        return -1;
    }
    this.put(key, this.hash[key]);
    return this.hash[key] || -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node = new Node(key, value);
    if (this.len >= this.capacity) {
        this.removeKeyOrLast(key);
    }
    if (!this.head) {
        this.head = node
    }
    else {
        let _head = this.head;
        this.head = node;
        this.head.next = _head;
    }
    this.len = this.len + 1;
    this.hash[key] = value;
};
LRUCache.prototype.removeKeyOrLast = function (key, value) {
    if (!this.head) {
        return;
    }
    let currentNode = this.head;
    let nextNode = this.head;
    var i = 0;
    if (currentNode.key == key) {
        delete this.hash[key];
        this.head = this.head.next;
    }
    else if (this.capacity == 1 && this.head) {
        delete this.hash[this.head.key];
        this.head = null;
    }
    else {
        for (var i = 0; i < this.len; i++) {
            currentNode = nextNode;
            nextNode = currentNode.next;
            if (!nextNode.next) {
                delete this.hash[currentNode.next.key];
                currentNode.next = null;
                break;
            }
            else if (nextNode && nextNode.key == key) {
                delete this.hash[key];
                currentNode.next=nextNode.next.next;               
                break;
            }
        }
    }
}
debugger;
var lRUCache = new LRUCache(1);
lRUCache.put(2, 1); // cache is {1=1}
lRUCache.get(2); 
lRUCache.put(3, 2); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.get(3);    // return -1 (not found)
