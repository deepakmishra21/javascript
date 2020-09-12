function node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    function insert(data) {
        var _node = new node(data);
        if (!this.root) {
            this.root = _node;
        }
        else {
            insertNode(_node, this.root);
        }
    }
    function insertNode(newNode, parentNode) {
        if (newNode.data < parentNode.data) {
            if (parentNode.left) {
                insertNode(newNode, parentNode.left)
            }
            else {
                parentNode.left = newNode;
            }
        }
        else if (newNode.data > parentNode.data) {
            if (parentNode.right) {
                insertNode(newNode, parentNode.right)
            }
            else {
                parentNode.right = newNode;
            }
        }
    }
    function remove(data) {
        this.root = removeNode(this.root, data);
    }
    function removeNode(node, key) {
        if (node === null)
            return null;
        else if (key < node.data) {
            node.left = removeNode(node.left, key);
            return node;
        }
        else if (key > node.data) {
            node.right = removeNode(node.right, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            } if (node.left === null) {
                node = node.right;
                return node;
            }

            else if (node.right === null) {
                node = node.left;
                return node;
            }
            var aux = findMinNode(node.right);
            node.data = aux.data;

            node.right = removeNode(node.right, aux.data);
            return node;
        }
    }

    function inorder(node, toFind) {
        if (node && toFind == node.data) {
            console.log("found");
            return true;
        }
        else if (node) {
            inorder(node.left, toFind);
            console.log(node.data);
            inorder(node.right, toFind);
        }
        else {
            console.log("notfound");
            return false;
        }
    }
    function preorder(node) {
        if (node) {
            console.log(node.data);
            preorder(node.left);
            preorder(node.right);
        }
    }
    function postorder(node) {
        if (node) {
            postorder(node.left);
            postorder(node.right);
            console.log(node.data);
        }
    }
    function findMinNode(node) {
        // if left of a node is null 
        // then it must be minimum node 
        if (node.left === null)
            return node;
        else
            return findMinNode(node.left);
    }
    function search(data, root) {
        if (root === null) {
            // Reached leaf but didn't find it.
            return false;
        }
        if (data == root.data) {
            return true;
        }
        else if (data < root.data) {
            return search(data, root.left);
        } else if (data > root.data) {
            return search(data, root.right);
        }
        // This means element is found
        return true;
    }
    return { insert, remove, inorder, preorder, postorder, search }

}
var BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);


