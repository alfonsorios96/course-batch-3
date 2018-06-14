'use strict';

class TagNode{
    
    constructor(name, attributes){
        
        this.name = `<${ name }>`;
        this.tag = `<${ name }>`;
        this.attributes = attributes;
        this.nodes = [];
        
    }
    
    addNode(node){
        this.nodes.push(node);
    }
}

export {TagNode};