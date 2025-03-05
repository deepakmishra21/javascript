var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

LRUCache.prototype.get = function (key) {
  let toReturn = -1;
  if (this.cache.has(key)) {
    toReturn = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, toReturn);
  }
  return toReturn;
};

LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }
  if (this.cache.size == this.capacity) {
    this.cache.delete(this.cache.keys().next().value);
  }
  this.cache.set(key, value);
};
