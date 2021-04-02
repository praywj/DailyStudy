class Element{
    constructor(ele){
        this.ele = ele;
        this.depth = 1;
    }
    getNodeType(){
        return this.ele.nodeType;
    }
    getNodeName(){
        return this.ele.nodeName;
    }
    //当前节点深度
    getDepth(){
        let parent = this.ele.parentNode;
        while(parent.nodeName !== '#document'){
            this.depth++;
            parent = parent.parentNode;
        }
        return this.depth;
    }
     //当前节点的直接子元素
    getEleSum(){
        let childs = this.ele.childNodes, sum=0;
        for(let i=0;i<childs.length;i++){
            if(childs[i].nodeType===1){
                sum++;
            }
        }
        return sum;
    }
    getChilds(){
        //childNodes获取所有子节点  children获取所有标签子节点
        return this.ele.childNodes;
    }
}

function find(node, total, dp, sm){
    if(node.getNodeType()==1){
        total+=1;
        var child = node.getChilds();
        dp.push(node.getDepth());
        sm.push(node.getEleSum());
        console.log(node.getNodeName(), node.getEleSum());
        for(let i=0;i<child.length;i++){
            let c = new Element(child[i]);
            if(c.getNodeType()==1){
                find(c, total, dp, sm)
            }
        }
    }
    return [total, dp, sm];
}
let total, depth, sum;
let root = new Element(document.children[0]);
[total, depth, sum] = find(root, 0, [], []);
console.log(total, depth, sum);

