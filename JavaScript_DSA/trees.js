//Tree Representation in js
class TreeNode{
    constructor(value){
        this.value=value;
        this.children=[];
    }
    addChild(child){
        this.children.push(child);
    }
}
const root =new TreeNode("Root");
const child1= new TreeNode("Child 1");
const child2= new TreeNode("Child 2");

root.addChild(child1);
root.addChild(child2);

const grandChild = new TreeNode("Grandchild 1");
child1.addChild(grandChild);
console.log(root);


//Binary tree in js

class BinaryTree{
    constructor(value){
        this.value= value;
        this.left=null;
        this.right=null;

    }
}
const root1 = new BinaryTree(10);
root.left = new BinaryTree(5);
root.right = new BinaryTree(15);
console.log(root1);
