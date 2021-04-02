/**
 * parent: 父节点
 * left: 左子树
 * right: 右子树
 * node: 该节点
 */
class BinaryNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

//使用链表存储二叉树
class BinaryTree{
    constructor(){
        this.root = null;
    }

    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                // 如果新节点的值小于当前节点，且当前节点没有左子树
                node.left = newNode;
            }else{
                this.insertNode(node.left, newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right, newNode);
            }
        }
    }

    insert(data){
        // 1. 将要插入的数初始化为一个节点
        const newNode = new BinaryNode(data);
        if(this.root == null){
            // 如果目前是空二叉树则该节点为根节点
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode);
        }
    }

    // 中序遍历
    inOrderTraverseNode(node, callback){
        if(node !== null){
            // 先访问左子树
            this.inOrderTraverseNode(node.left, callback);
            //将当前节点的值传入回调函数, 即访问当前节点
            callback(node.data);  
            // 访问右子树
            this.inOrderTraverseNode(node.right, callback);
        }
    }
    inOrderTraverse(callback){ 
        this.inOrderTraverseNode(this.root, callback);
    }
    //中序非递归
    inOrderTraverseStack(node){
        /**
         * 1. 先遍历出根节点所有的左侧节点
         * 2. pop一个节点，访问
         * 3. 扫描该节点的右子节点并入栈
         * 4. 依次扫描右子节点的所有左侧节点并入栈，依次循环1 2 3步，直到栈空并且指针为空
         */
        let stack = [];
        let list = [];
        let p = node;
        while(p || stack.length){
            while(p){
                stack.push(p);
                p = p.left;
            }
            if(stack.length){
                p = stack.pop();
                list.push(p.data);
                p = p.right;
            }
        }
        return list;
    }
    inOrderStack(){
        return this.inOrderTraverseStack(this.root);
    }
    // 前序遍历
    preOrderTraverseNode(node, callback){
        if(node !== null){
            callback(node.data);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    preOrderTraverse(callback){
        this.preOrderTraverseNode(this.root, callback);
    }

    //非递归实现前序遍历  使用栈
    preOrderTraverseStack(node){
        var nodeList = [];
        if(node){
            var stack = [];
            stack.push(node);
            while(stack.length != 0){
                var pop = stack.pop();
                nodeList.push(pop.data);
                if(pop.right){
                    stack.push(pop.right);
                }
                if(pop.left){
                    stack.push(pop.left);
                }
            }
        }
        return nodeList;
    }
    preOrderStack(){
        return this.preOrderTraverseStack(this.root);
    }
    // 后序遍历
    postOrderTraverseNode(node, callback){
        if(node !== null){
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.data);
        }
    }
    postOrderTraverse(callback){
        this.postOrderTraverseNode(this.root, callback);
    }
    //查找最小节点，即排序二叉树中最左边没有左孩子的节点
    minNode(node){
        if(node !== null){
            while(node && node.left !== null){
                node = node.left;
            }
            return node.data;
        }else{
            return null;
        }
    }
    searchMin(){
        return this.minNode(this.root);
    }
    //查找最大节点，即排序二叉树中最右边的没有右孩子的节点
    maxNode(node){
        if(node !== null){
            while(node && node.right !== null){
                node = node.right;
            }
            return node.data;
        }else{
            return null;
        }
    }
    searchMax(){
        return this.maxNode(this.root);
    }

    //查找某个值
    searchValueNode(node, key){
        if(node === null){
            return false;
        }
        if(key < node.data){
            return this.searchValueNode(node.left, key);
        }else if(key > node.data){
            return this.searchValueNode(node.right, key);
        }else{
            return true;
        }
    }
    searchValue(key){
        return this.searchValueNode(this.root, key);
    }
    // 删除节点 相当于先找到该节点然后再处理关系
    findMinNode(node){
        if(node){
            while(node && node.left !== null){
                node = node.left;
            }
            return node;
        }
        return null;
    }
    removeValueNode(node, key){
        if(node === null){
            return false;
        }
        if(key < node.data){
            node.left = this.removeValueNode(node.left, key);  //更新
            return node;
        }else if(key > node.data){
            node.right = this.removeValueNode(node.right, key);
            return node;
        }else{
            // 如果删除的是叶子节点
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            // 如果删除的节点只有左子树或者右子树
            if(node.left === null){
                // 如果只有右子树，则将父节点指向该节点的右子树
                node = node.right;
                return node;
            }else if(node.right === null){
                // 如果只有左子树，则将父节点指向该节点的左子树
                node = node.left;
                return node;
            }else{
                // 如果既有左子树又有右子树
                // 1.先找到右子树中最小节点
                // 2. 用最小节点值替代当前节点值
                // 3. 删除最小节点
                var minNode = this.findMinNode(node.right);
                node.data = minNode.data;
                node.right = this.removeValueNode(node.right, minNode.data);  //更新右子树
                return node;
            }
        }
    }
    removeValue(key){
        return this.removeValueNode(this.root, key);
    }
    //层次遍历
    // 1. BFS 广度优先  使用队列
    breadthFirstSearch(node){
        var nodeList = [];
        if(node !== null){
            var queue = [];  //开头加末尾出
            queue.unshift(node);
            while(queue.length != 0){
                var pop = queue.pop();
                nodeList.push(pop.data);
                if(pop.left){
                    queue.unshift(pop.left);
                }
                if(pop.right){
                    queue.unshift(pop.right);
                }
            }
        }
        return nodeList;

    }
    breadthFirst(){
        return this.breadthFirstSearch(this.root);
    }
    // 2. DFS 深度优先  前序、中序、后序
   
}

//test
var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var btree = new BinaryTree();
nodes.forEach(function(key){
    btree.insert(key);
});
// 自定义回调函数
var callback = function(data){
    console.log(data);
}
console.log('中序遍历');
btree.inOrderTraverse(callback);
console.log('中序非递归：' + btree.inOrderStack());
console.log('前序遍历');
btree.preOrderTraverse(callback);
console.log('前序非递归：' + btree.preOrderStack());
console.log('后序遍历');
btree.postOrderTraverse(callback);
console.log('广度优先：' + btree.breadthFirst());
console.log('最小值: ' + btree.searchMin());
console.log('最大值: ' + btree.searchMax());
console.log(btree.searchValue(7));
console.log(btree.searchValue(9));
// console.log(btree.removeValue(1));
console.log(btree.removeValue(3));
btree.inOrderTraverse(callback);

